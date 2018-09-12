import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
//import { error } from 'protractor';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  role: IRole;

  selectedRole: IRole;

  newRole: boolean;

  public roles: IRole[] = [];

  public cols: any[];

  //public roles: Array<any>;

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {

    this.cols = [
      { field: 'roleId', header: 'Id' },
      { field: 'roleName', header: 'Name' }
    ];

    this.roleService.getAll()
      .subscribe((data: any) => {
        this.roles = data;
      });

    //this.roleService.get()
    //  .subscribe(
    //    data => this.roles = data,
    //    error => console.log("error in component")
    //  );
  }

}
