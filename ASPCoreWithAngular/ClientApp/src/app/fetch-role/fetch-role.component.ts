import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-role',
  templateUrl: './fetch-role.component.html'
})
export class FetchRoleComponent {
  public roleList: Role[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Role[]>(baseUrl + 'api/Role/GetRoles').subscribe(result => {
      this.roleList = result;
    }, error => console.error(error));
  }
}

interface Role {
  roleId: string;
  roleName: string;
} 
