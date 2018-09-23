import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent extends BaseComponent implements OnInit {

  roles: IRole[] = [];

  cols: any[];

  statusMessage: string;

  constructor(private roleService: RoleService) {
    super();
  }

  ngOnInit() {
    this.cols = [
      { field: 'roleId', header: 'Id' },
      { field: 'roleName', header: 'Name' }
    ];

    //this.roleService.getAll()
    //  .subscribe(resp => {
    //    this.roles = resp.body;
    //  });

    this.roleService.getAll()
      .subscribe((resp) => this.roles = resp.body,
      (error) => {
        this.statusMessage = 'Problem with the service. Please try again later.'
      }
    );
  }

}
