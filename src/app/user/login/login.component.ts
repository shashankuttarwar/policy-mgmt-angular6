import {Component} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { UserService } from "../userShared/user.service";
@Component({
templateUrl : './login.component.html'
})
export class LoginComponent{

constructor  (private userSVC : UserService, private router : Router, private httpClient : HttpClient){}

userId : string;
password : string;
passwordFail : boolean = true;

login(){
console.log('password: ' + this.password);
console.log('userid: ' + this.userId);
this.httpClient.get(`http://localhost:8080/login/${this.userId}/?password=${this.password}`).subscribe(
    (data:any)=>{
          console.log(data);
          if(data===true){
             this.passwordFail = false;
             this.router.navigate(['/user/userdetail/:userId',{userId: this.userId}]);
          }else{
              this.router.navigate(['/user/signup']);
          }
        }
    )
}


reset(){
}
}
