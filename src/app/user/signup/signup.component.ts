
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
templateUrl : './signup.component.html'
})

export class SignupComponent{
    createdUserId: string='';

    rForm : FormGroup;
    fName : string;
	  lName : string;
	  userId : string;
	  dob : string;
	  address : string;
	  phone : string;
	  email : string;
	  password : string;

     httpOptions  : Object= {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept' : 'application/json'
  })
};

constructor ( private fb : FormBuilder, private httpClient : HttpClient){
	    this.rForm = fb.group({
    'fName' : [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z ]{0,30}')])],
	  'lName' : [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]{0,30}')])],
	  'dob' : [null, Validators.compose([Validators.required,Validators.pattern('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')])],
	  'address' : [null, Validators.compose([Validators.required,Validators.pattern('(.){0,200}')])],
	  'phone' : [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
	  'email' : [null, Validators.compose([Validators.required,Validators.email ])],
	  'password' : [null, Validators.compose([Validators.required,, Validators.pattern('(.){3,10}')])]
	    });
	  }


	  submit(user : any){
          this.httpClient.post("http://localhost:8080/users", JSON.stringify(user), this.httpOptions).subscribe(
          (resp:any)=>{
            this.createdUserId = resp;
          },(err:any)=>{
            this.createdUserId = err;
          }
          )
    	  };
}
