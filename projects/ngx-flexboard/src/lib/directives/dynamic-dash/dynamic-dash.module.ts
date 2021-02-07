import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDashDirective } from './dynamic-dash.directive';

@NgModule({
  declarations: [DynamicDashDirective],
  imports: [
    CommonModule
  ]
})
export class DynamicDashModule { }
