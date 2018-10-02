import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from 'angular2-toaster';
import { Router } from "@angular/router";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent extends BaseComponent implements OnInit {

  roles: IRole[] = [];

  cols: any[];

  constructor(private roleService: RoleService, private router: Router, toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.cols = [
      { field: 'roleId', header: 'Id' },
      { field: 'roleName', header: 'Name' }
    ];

    this.roleService.getAll()
      .subscribe((resp) => {
        this.roles = resp;
      },
      (error) => {
        this.popToast("error", "Error", "A problem occurred. Please try again later.")
      }
    );
  }

  deleteRole(id: string) {
    this.roleService.delete(id)
      .subscribe(() => {
        this.ngOnInit();
      },
      (error) => {
        this.popToast("error", "Error", "A problem occurred. Please try again later.")
      }
    );
  }

}
