import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDefaultComponent } from './chart-default.component';

@NgModule({
  declarations: [ChartDefaultComponent],
  imports: [
    CommonModule
  ], 
  exports: [ChartDefaultComponent]
})
export class ChartDefaultModule { }
