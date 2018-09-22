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

  // Get all role data
  public getAll(): Observable<HttpResponse<IRole[]>> {    
    return this.httpClient
      .get<IRole[]>(this.baseUrl + 'api/Role', { observe: 'response' })
      .map(data => {
        return data;
      }
    );
  }

}

export interface IRole {
  roleId: string;
  roleName: string;
}
