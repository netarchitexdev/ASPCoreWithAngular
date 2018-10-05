import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRole } from '../services/role.service';

@Component({
  selector: 'edit-role-dialog',
  templateUrl: './edit-role-dialog.component.html',
  styleUrls: ['./edit-role-dialog.component.css']
})
export class EditRoleDialogComponent implements OnInit {

  _display: boolean = false;
  _item: IRole = {roleId:"", roleName:""};

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

  constructor() { }

  ngOnInit() {
  }

  ok() {
    this.display = false;
  }

  cancel() {
    this.display = false;
  }

  public onHide(e: any) {
    console.log("fire");
    this.onClose.emit(this._item);
  }

}
