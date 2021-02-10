import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartDefaultModule } from '../chart-default/chart-default.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
