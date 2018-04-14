import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-firstcom',
  templateUrl: './firstcom.component.html',
  styleUrls: ['./firstcom.component.css']
})
export class FirstcomComponent implements OnInit {
  name ='leo';
  constructor(private myservice: MyserviceService) { }
  anotherdate;
  newcomponentproperty;
  ngOnInit() {
    this.anotherdate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
