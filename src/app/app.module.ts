import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatMenuModule, MatSidenavModule, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';


@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    FirstcomComponent,
    ChangeTextDirective
  ],
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'firstcom',
         component: FirstcomComponent
      }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
