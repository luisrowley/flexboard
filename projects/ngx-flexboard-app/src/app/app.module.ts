import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartDefaultComponent, ChartDefaultModule, DashboardModule } from 'ngx-flexboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ChartDefaultModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ChartDefaultComponent]
})
export class AppModule { }
