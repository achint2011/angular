import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
  providers : [],
  bootstrap : [AppComponent]
})
