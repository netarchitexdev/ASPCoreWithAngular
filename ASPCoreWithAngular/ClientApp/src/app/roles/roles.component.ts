import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  roles: IRole[] = [];

  cols: any[];

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
  }

}
