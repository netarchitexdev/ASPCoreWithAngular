import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { IRole } from '../services/role.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'edit-role-dialog',
  templateUrl: './edit-role-dialog.component.html',
  styleUrls: ['./edit-role-dialog.component.css']
})
export class EditRoleDialogComponent implements OnInit, OnDestroy {
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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      roleId: [this._item.roleId],
      roleName: [this._item.roleName, Validators.required]
    });

    this.attributes = [
      { name: 'Attribute1', isActive: false },
      { name: 'Attribute2', isActive: false },
      { name: 'Attribute3', isActive: false },
      { name: 'Attribute4', isActive: false },
      { name: 'Attribute5', isActive: false }
    ];
  }

  ngOnDestroy() {
  }

  //ok() {
  //  this.display = false;
  //}

  cancel() {
    this.display = false;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
