import{NgModule} from '@angular/core';
import{RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AboutUsComponent} from './aboutus.component';
import {ContactUsComponent} from './contactus.component';
import {ErrorComponent} from '../error/error.component';
@NgModule({
  imports:[
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'aboutus', component:AboutUsComponent},
      {path:'contactus', component:ContactUsComponent},
      {path:'*', component:ErrorComponent}
    ])
  ],
  exports: [RouterModule]

})

export class AppRoutingModule{}
