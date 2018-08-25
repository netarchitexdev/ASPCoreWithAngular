import { OnInit, AfterViewInit, Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-fetch-role',
  templateUrl: './fetch-role.component.html'
})

export class FetchRoleComponent implements AfterViewInit, OnInit {
  public roleList: Role[];
  public newRole: Role = {
    roleId: '',
    roleName: ''
  };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public ngxSmartModalService: NgxSmartModalService)
  {
    http.get<Role[]>(baseUrl + 'api/Role/GetRoles').subscribe(result => {
      this.roleList = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //this.ngxSmartModalService.resetModalData('addRoleModal');

    this.ngxSmartModalService.setModalData(this.newRole, 'addRoleModal', true);

    this.ngxSmartModalService.getModal('addRoleModal').onOpen.subscribe((modal: NgxSmartModalComponent) => {
      console.log(modal.getData());
    });

    this.ngxSmartModalService.getModal('addRoleModal').onClose.subscribe((modal: NgxSmartModalComponent) => {
      console.log(modal.getData());
    });
  }

  updateRole() {
    this.newRole = this.ngxSmartModalService.getModalData('addRoleModal') as Role;
  }
}

interface Role {
  roleId: string;
  roleName: string;
} 
