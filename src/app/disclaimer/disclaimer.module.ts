import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [DisclaimerComponent],
  imports: [
    CommonModule,
    DisclaimerRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule
  ]
})
export class DisclaimerModule { }
