import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UtilityService } from '../utility.service';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string, private utility: UtilityService) {
  }

  // Get all roles
  public getAll(): Observable<IRole[]> {
    return this.httpClient
      .get<any>(this.baseUrl + 'api/Role', { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body && data.body[0].name == "Error") {
          throw new Error("An error occurred in service");
        }
        return data.body;
      });
  }

  // Create role
  public create(role: IRole): Observable<any> {
    role.roleId = this.utility.guid();
    return this.httpClient
      .post<any>(this.baseUrl + 'api/Role', role, { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body && data.body[0].name == "Error") {
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

  // Update role
  public update(role: IRole): Observable<any> {
    return this.httpClient
      .put<any>(this.baseUrl + 'api/Role', role, { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body && data.body[0].name == "Error") {
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

  // Delete role
  public delete(id: string) {
    return this.httpClient
      .delete<any>(this.baseUrl + 'api/Role' + '/' + id, { observe: 'response' })
  };

}

export interface IRole {
  roleId: string;
  roleName: string;
}
