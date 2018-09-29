import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RolesComponent } from './roles/roles.component';
import { RoleService } from './services/role.service';
import { HttpErrorInterceptor } from './http-error-interceptor.service';
import { AppInsightService } from './app-insight-service.service';
import { BaseComponent } from './base-component/base-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { CreateRoleComponent } from './create-role/create-role.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RolesComponent,
    BaseComponent,
    CreateRoleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'roles', component: RolesComponent },
      { path: 'create-role', component: CreateRoleComponent }
    ]),
    TableModule,
    BrowserAnimationsModule, ToasterModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    RoleService,
    AppInsightService,
    ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
