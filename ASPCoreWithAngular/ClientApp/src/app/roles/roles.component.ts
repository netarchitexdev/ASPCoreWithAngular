import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from 'angular2-toaster';
import { Router } from "@angular/router";
import { EditRoleDialogComponent } from '../edit-role-dialog/edit-role-dialog.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent extends BaseComponent implements OnInit {

  roles: IRole[] = [];

  cols: any[];

  //selectedItem: IRole;

  //showEditDialog: boolean = false;

  @ViewChild(EditRoleDialogComponent)
  private editRoleDialogComponent: EditRoleDialogComponent;

  subscription: any;

  message: string = "";

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

    console.log("init");

    this.message = new Date().toUTCString();
    
  }

  displayEditDialog(role: IRole) {
    this.subscription = this.editRoleDialogComponent.visibleChange.subscribe((data: any) => {
      this.onEditDialogClosed(data);
    });
    this.editRoleDialogComponent.item = role;
    this.editRoleDialogComponent.visible = true;
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

  visibleChange(e: any) {
    console.log(e.roleName);
  }

  onEditDialogClosed(e: any) {
    console.log(e.roleName);
    this.subscription.unsubscribe();
    this.ngOnInit();
  }

}
