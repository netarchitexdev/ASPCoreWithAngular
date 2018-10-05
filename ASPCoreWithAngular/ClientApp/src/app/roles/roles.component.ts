import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from 'angular2-toaster';
import { EditRoleDialogComponent } from '../edit-role-dialog/edit-role-dialog.component';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(EditRoleDialogComponent)
  private editRoleDialogComponent: EditRoleDialogComponent;

  roles: IRole[] = [];

  cols: any[];

  //showEditDialog: boolean = false;  

  message: string = "";

  subscription: Subscriber<any>;

  constructor(private roleService: RoleService, toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    console.log("init");

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

    this.message = new Date().toUTCString();

    this.subscription = this.editRoleDialogComponent.onClose.subscribe((data: any) => {
      this.onEditDialogClosed(data);
    });

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  displayEditDialog(role: IRole) {
    this.editRoleDialogComponent.display = true;
    this.editRoleDialogComponent.item = role;
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

  onClose(e: any) {
  }

  onEditDialogClosed(data: any) {
    console.log("eventhandler");
    console.log(data.roleName);

    this.subscription.unsubscribe();

    this.init();
  }

  init() {
    this.ngOnInit();
  }

}
