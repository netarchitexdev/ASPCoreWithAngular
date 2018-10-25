import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IRole, RoleService } from '../services/role.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from '../base-component/base-component.component';
import { ToasterService } from 'angular2-toaster';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'edit-role-dialog',
  templateUrl: './edit-role-dialog.component.html',
  styleUrls: ['./edit-role-dialog.component.css']
})
export class EditRoleDialogComponent extends BaseComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  editForm: FormGroup;

  _display: boolean = false;

  _item: IRole = { roleId: "", roleName: "" };

  attributes: any = [];

  @Input() get display(): boolean {
    return this._display;
  }

  set display(value: boolean) {
    console.log('set display ' + value)
    this._display = value;
  }

  @Input() get item(): IRole {
    return this._item;
  }

  set item(value: IRole) {
    console.log('set role ' + value.roleName)
    this._item = value;
  }

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>(true);

  constructor(private formBuilder: FormBuilder, private roleService: RoleService, toasterService: ToasterService) {
    super(toasterService);
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      roleId: [this._item.roleId],
      roleName: [this._item.roleName, Validators.required]
    });

    this.attributes = [
      { name: 'Attribute1', isActive: false, expiredDate: '01-01-2018' },
      { name: 'Attribute2', isActive: false },
      { name: 'Attribute3', isActive: false },
      { name: 'Attribute4', isActive: false },
      { name: 'Attribute5', isActive: false },
      { name: 'Attribute6', isActive: false },
      { name: 'Attribute7', isActive: false },
      { name: 'Attribute8', isActive: false },
      { name: 'Attribute9', isActive: false },
      { name: 'Attribute10', isActive: false },
      { name: 'Attribute11', isActive: false },
      { name: 'Attribute12', isActive: false },
      { name: 'Attribute13', isActive: false },
      { name: 'Attribute14', isActive: false },
      { name: 'Attribute15', isActive: false },
      { name: 'Attribute16', isActive: false },
      { name: 'Attribute17', isActive: false },
      { name: 'Attribute18', isActive: false },
      { name: 'Attribute19', isActive: false },
      { name: 'Attribute20', isActive: false },
    ];
  }

  ngOnDestroy() {
    //this.unsubscribe$.next();
    //this.unsubscribe$.complete();
  }

  cancel() {
    this.display = false;
  }

  updateRole(role: IRole) {
    return this.roleService.update(role)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        return true;
        //this.ngOnInit();
      },
      (error) => {
        if (error.message == "Duplicate record found.") {
          this.popToast("error", "Error", "Unable to update duplicate role.")
        }
        else {
          this.popToast("error", "Error", "A problem occurred. Please try again later.")
        }
        return false;
      });
  }

  onSubmit(f: NgForm) {
    //console.log(f.value);  // { first: '', last: '' }
    //console.log(f.valid);  // false
    //this.updateRole(this.item);    
    //this.display = false;
    //this.onClose.emit();
    if (this.updateRole(this.item)) {
      this.display = false;
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.onClose.emit();
      console.log("true");
    }
    console.log("false");
    this.editForm = this.formBuilder.group({
      roleId: [this._item.roleId],
      roleName: [this._item.roleName, Validators.required]
    });
  }

}
