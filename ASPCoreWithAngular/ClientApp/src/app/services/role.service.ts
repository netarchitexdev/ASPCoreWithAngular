import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ClientError } from '../client-error';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  // Get all role data
  public getAll(): Observable<any> {
    return this.httpClient
      .get(this.baseUrl + 'api/Role', { observe: 'response' })
      .map(data => {
        if (data instanceof HttpResponse && data.body[0].name == "Error") {
          console.error("An error occurred in service");
          return new ClientError();
        }
        return data;
      }
      );
  }

}

export interface IRole {
  roleId: string;
  roleName: string;
}
