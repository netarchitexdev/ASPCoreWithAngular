import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRole } from '../services/role.service';

@Component({
  selector: 'edit-role-dialog',
  templateUrl: './edit-role-dialog.component.html',
  styleUrls: ['./edit-role-dialog.component.css']
})
export class EditRoleDialogComponent implements OnInit {

  @Input() item: IRole;
  @Input() visible: boolean = false;
  @Output() public visibleChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  afterHide() {
    console.log("fire");
    this.visibleChange.emit(this.item);
  }

}
