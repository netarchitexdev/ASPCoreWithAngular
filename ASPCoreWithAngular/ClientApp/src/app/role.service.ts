import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  // Get all role data
  public getAll(): Observable<any> {    
    return this.httpClient
      .get(this.baseUrl + 'api/Role')
      .map(
       // Successful responses call the first callback.
      data => {
        if (data != null) throw new Error("error on client!");
        return data;
      },
      // Errors will call this callback instead:
      err => {
        console.log(err);
      }
    );
  }

}

export interface IRole {
  RoleId: string;
  RoleName: string;
}
