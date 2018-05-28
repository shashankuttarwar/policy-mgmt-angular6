import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
templateUrl : './userdetail.component.html'
})

export class UserDetailComponent implements OnInit{
selectedUserId : string;
availablePolicyData: Object;
availablePolicyColumns : Object;
subscribedPolicyColumns : Object;
subscribedPolicyData: Object;
constructor(private httpClient : HttpClient, private route: ActivatedRoute){
  this.route.params.subscribe(params => {this.selectedUserId = params['userId'];});
  this.availablePolicyColumns=['Sr. No.','Policy Name','Policy Number'];
  this.subscribedPolicyColumns=['Sr. No.','Policy Number','Policy Name','Amount Paid','Policy End Date','Valid'];
}

     httpOptions  : Object= {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept' : 'application/json'
  })
};

ngOnInit(): void {

   this.httpClient.get('http://localhost:8080/policies').subscribe((res: Response) => {
        this.availablePolicyData=res;
      });

      this.httpClient.get(`http://localhost:8080/users/${this.selectedUserId}`).subscribe((res: Response) => {
              this.subscribedPolicyData=res;
            });
  }
  makeEditable(row:any){
    row.edit=true;
  }

  savePolicy(row:any){
    row.edit=false;
    this.httpClient.post("http://localhost:8080/policies", JSON.stringify(row), this.httpOptions).subscribe(
                (resp:any)=>{
                  console.log(resp);
                }
                )
  }

}
