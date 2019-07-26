import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DescComponent } from './desc/desc.component';
import { DobComponent } from './dob/dob.component';
import { DescpageComponent } from './descpage/descpage.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DescComponent,
    DobComponent,
    DescpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
