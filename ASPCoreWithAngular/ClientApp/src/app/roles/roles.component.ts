import { Component, OnInit } from '@angular/core';
import { RoleService, IRole } from '../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent implements OnInit {

  role: IRole;

  selectedRole: IRole;

  newRole: boolean;

  roles: IRole[] = [];

  cols: any[];

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {

    this.cols = [
      { field: 'roleId', header: 'Id' },
      { field: 'roleName', header: 'Name' }
    ];

    //this.roleService.getAll()
    //  .subscribe((data: any) => {
    //    this.roles = data;
    //  });

    this.roleService.getAll()
      .subscribe((data: any) => {
        this.roles = data;
      }
      , () => console.log('Finally'));
  }

  //loadRolesLazy(event: LazyLoadEvent) {
  //  this.loading = true;

  //  //in a real application, make a remote request to load data using state metadata from event
  //  //event.first = First row offset
  //  //event.rows = Number of rows per page
  //  //event.sortField = Field name to sort with
  //  //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //  //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

  //  //imitate db connection over a network
  //  setTimeout(() => {
  //    if (this.datasource) {
  //      this.roles = this.datasource.slice(event.first, (event.first + event.rows));
  //      this.loading = false;
  //    }
  //  }, 1000);
  //}

}
