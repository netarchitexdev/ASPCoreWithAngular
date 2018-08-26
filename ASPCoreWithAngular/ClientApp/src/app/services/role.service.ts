//import { Injectable, Inject } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import { Router } from '@angular/router';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

//@Injectable()
//export class RoleService {
//  myAppUrl: string = "";

//  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    this.myAppUrl = baseUrl;
//  }

//  getRoles() {
//    return this._http.get(this.myAppUrl + 'api/Role/Index')
//      .map((response: Response) => JSON.stringify(response))
//      .catch(this.errorHandler);
//  }

//  getRoleById(id: number) {
//    return this._http.get(this.myAppUrl + "api/Role/Details/" + id)
//      .map((response: Response) => response.json())
//      .catch(this.errorHandler)
//  }

//  saveRole(role) {
//    return this._http.post(this.myAppUrl + 'api/Role/Create', role)
//      .map((response: Response) => response.json())
//      .catch(this.errorHandler)
//  }

//  updateRole(role) {
//    return this._http.put(this.myAppUrl + 'api/Role/Edit', role)
//      .map((response: Response) => response.json())
//      .catch(this.errorHandler);
//  }

//  deleteRole(id) {
//    return this._http.delete(this.myAppUrl + "api/Role/Delete/" + id)
//      .map((response: Response) => response.json())
//      .catch(this.errorHandler);
//  }

//  errorHandler(error: Response) {
//    console.log(error);
//    return Observable.throw(error);
//  }
//}

//interface Role {
//  roleId: string;
//  roleName: string;
//}
