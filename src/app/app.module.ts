import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { DepartementService } from './departement/departement.service';
import { StompService } from './helpers/stomp.service';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [StompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
