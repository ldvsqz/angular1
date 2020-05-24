import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AdminMenuModule } from './admin-menu/admin-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginModule, AdminMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
