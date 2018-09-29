import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { RoleService } from '../services/role.service';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent extends BaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private roleService: RoleService, toasterService: ToasterService) {
    super(toasterService);
  }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      roleId: [''],
      roleName: ['', Validators.required]
    });

  }

  onSubmit() {
    this.roleService.create(this.addForm.value)
      .subscribe(() => {
              this.router.navigate(['roles']);
          },
      (error) => {
        if (error.message == "Duplicate record found.") {
          this.popToast("error", "Error", "Unable to create duplicate role.")
        }
        else {
          this.popToast("error", "Error", "A problem occurred. Please try again later.")
        }        
      });
  }

}
