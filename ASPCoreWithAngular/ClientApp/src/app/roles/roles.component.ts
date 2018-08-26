import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles$: Object;

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe(
      roles => this.roles$ = roles
    )
  }

}
