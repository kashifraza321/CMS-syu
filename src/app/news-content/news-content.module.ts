import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsContentRoutingModule } from './news-content-routing.module';
import { NewsContentComponent } from './news-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [NewsContentComponent],
  imports: [
    CommonModule,
    NewsContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    DialogModule,
  ]
})
export class NewsContentModule { }
