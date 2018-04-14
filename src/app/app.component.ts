import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {MyserviceService} from './myservice.service';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators }  from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
      div{
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      .rotate{
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],
   animations: [
      trigger('myanimation',[
         state('smaller',style({
            transform : 'translateX(-100px) rotateZ(0deg)'
         })),
         state('larger',style({
            transform : 'translateX(100px) rotateZ(180deg)'
         })),
         transition('smaller <=> larger',animate('300ms ease-in'))//first argument is states, second define lengh,delay,easing of animate
      ])
   ]
})

export class AppComponent {
  title = 'app';
  todaydate = new Date();
  jsonval = {name:'Lei', age:'35', address:{surburb:'kew', state:'vic'}};
  //declared array of months
  months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  isavailable = true;   //variable is set to true

  thedate;
  componentproperty;

  httpdata;
  searchparam = 2;
  jsondata;
  name;

  emailid1;
  emailid2;
  formdata;
  logininfo;

  state: string = "smaller";

  myData : Array<any>;

  constructor(private myservice: MyserviceService, private http1:Http,private http2:Http) {}
   ngOnInit() {

    this.formdata = new FormGroup({
      emailid1 : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd :  new FormControl("", this.passwordvalidation)
    })

      this.http1.get("http://jsonplaceholder.typicode.com/users").
      map(
        (response)=>response.json()
      ).
      subscribe(
        (data)=> {
          this.displaydata(data);;
        }
      );

      this.http2.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
      map(
        (response)=>response.json()
      ).
      subscribe(
        (data)=> {
          this.converttoarray(data);
        }
      );
      this.thedate = this.myservice.showTodayDate();
      console.log(this.myservice.serviceproperty);
      this.myservice.serviceproperty = "component created"; // value is changed.
      this.componentproperty = this.myservice.serviceproperty;
   }

   displaydata(data) {this.httpdata = data}

   converttoarray(data) {
    console.log(data);
    this.name = data[0].name;
   }

   onClickSubmit(data) {
     console.log(data);//data is an object
     this.emailid1 = data.emailid1;
     this.logininfo = "Entered Email id : " + data.emailid2;
 }  

 passwordvalidation(formcontrol) {
  if (formcontrol.value.length < 3) {
     return {"passwd" : true}; //no use?
  }
}

animate() {
  this.state= this.state == 'larger' ? 'smaller' : 'larger';
}

}
