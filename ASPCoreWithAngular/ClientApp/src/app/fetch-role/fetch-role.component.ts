import { AfterViewInit, Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-fetch-role',
  templateUrl: './fetch-role.component.html'
})

export class FetchRoleComponent implements AfterViewInit {
  public roleList: Role[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public ngxSmartModalService: NgxSmartModalService)
  {
    http.get<Role[]>(baseUrl + 'api/Role/GetRoles').subscribe(result => {
      this.roleList = result;
    }, error => console.error(error));
  }

  ngAfterViewInit() {
    const pen: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{ a: 'a', b: 'b' }, { c: 'c', d: 'd' }],
      prop4: 327652175423
    };
    this.ngxSmartModalService.setModalData(pen, 'popupOne');
  }
}

interface Role {
  roleId: string;
  roleName: string;
} 
