import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserComponent} from './userComponent/user.component';
import {UserDetailComponent} from './userDetail/userdetail.component';
import {UserService} from './userShared/user.service';



const UserRoutes: Routes = [{
path: 'user',
component: UserComponent,
children: [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdetail/:userId',component:UserDetailComponent}
  //{path:'',component:}
]
}]

@NgModule({
imports:[
CommonModule, FormsModule, RouterModule.forChild(UserRoutes), ReactiveFormsModule
],
declarations:[
UserComponent, LoginComponent, SignupComponent, UserDetailComponent
],
exports:[RouterModule],
providers:[UserService]
})
export class UserModule{}
