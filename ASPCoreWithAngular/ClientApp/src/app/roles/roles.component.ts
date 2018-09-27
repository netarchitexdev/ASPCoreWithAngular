import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ClientError } from '../client-error';
import { ToasterService, Toast } from 'angular2-toaster';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent extends BaseComponent implements OnInit {

  roles: IRole[] = [];

  cols: any[];

  statusMessage: string;

  constructor(private roleService: RoleService, private toasterService: ToasterService) {
    super();
  }

  ngOnInit() {
    this.cols = [
      { field: 'roleId', header: 'Id' },
      { field: 'roleName', header: 'Name' }
    ];

    this.roleService.getAll()
      .subscribe((resp) => {
        if (resp instanceof ClientError) {
          this.popToast("error", "Error", "A problem occurred. Please try again later.");
        }
        else {
          this.roles = resp.body;
        }
      });
  }

  protected popToast(type: string, title: string, body: string) {
    var toast: Toast = {
      type: type,
      title: title,
      body: body,
      showCloseButton: true
    };

    this.toasterService.pop(toast);
  }

}
