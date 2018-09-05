import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { RoleService } from './role.service';
import { ErrorsHandler } from './errors.handler.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'roles', component: RolesComponent }
    ])
  ],
  //providers: [RoleService, ErrorHandler],
  providers: [
    {
      provide: [ErrorHandler],
      useClass: ErrorsHandler
    },
    [RoleService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
