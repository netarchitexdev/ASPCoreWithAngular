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

  public get() {
    // Get all role data
    return this.httpClient.get<IRole>(this.baseUrl + 'api/Role');
      //.map(res => res);
      //.catch(this.errorHandler);
  }
   
  errorHandler(error: Response) {
    //console.log(error);
    return Observable.throw(error);
  }

}

export interface IRole {
  RoleId: string;
  RoleName: string;
}
