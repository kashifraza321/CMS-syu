import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsComponent } from './exams.component';
// import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [ExamsComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    // HeaderModule,
    FooterModule
  ],
  exports:[ExamsComponent]
})
export class ExamsModule { }
