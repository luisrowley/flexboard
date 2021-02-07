import { NgModule } from '@angular/core';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { NgxFlexboardComponent } from './ngx-flexboard.component';

@NgModule({
  declarations: [NgxFlexboardComponent, DashboardComponent],
  imports: [
  ],
  exports: [NgxFlexboardComponent, DashboardComponent]
})
export class NgxFlexboardModule { }
