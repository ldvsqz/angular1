import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'admenu', component: AdminMenuComponent },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminMenuComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
