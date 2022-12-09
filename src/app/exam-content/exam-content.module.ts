import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamContentRoutingModule } from './exam-content-routing.module';
import { ExamContentComponent } from './exam-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ExamContentComponent],
  imports: [
    CommonModule,
    ExamContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    TabViewModule,
    AccordionModule,
    NgbCollapseModule,
  ]
})
export class ExamContentModule { }
