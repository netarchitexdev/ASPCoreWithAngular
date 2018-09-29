import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  // Get all roles
  public getAll(): Observable<IRole[]> {
    return this.httpClient
      .get<any>(this.baseUrl + 'api/Role', { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body[0].name == "Error") {
          throw new Error("An error occurred in service");
        }
        return data.body;
      });
  }

  // Create new role
  public create(role: IRole) {
    role.roleId = this.guid();
    return this.httpClient
      .post<any>(this.baseUrl + 'api/Role', role, { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body[0].name == "Error") {
          if (data.status == 409) {
            throw new Error("Duplicate record found.");
          }
          else {
            throw new Error("An error occurred in service");
          }          
        }
        return data.body;
      });
  }

  // Generate a GUID
  guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
  }

}

export interface IRole {
  roleId: string;
  roleName: string;
}
