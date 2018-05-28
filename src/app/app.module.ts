import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NavComponent} from './shared/nav.component';
import {AboutUsComponent} from './shared/aboutus.component';
import {ContactUsComponent} from './shared/contactus.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from './shared/app.routing';
import {UserModule} from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ErrorComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
