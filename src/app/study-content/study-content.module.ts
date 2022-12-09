import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyContentRoutingModule } from './study-content-routing.module';
import { StudyContentComponent } from './study-content.component';
import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { OwlModule } from 'ngx-owl-carousel';
import { AccordionModule } from 'primeng/accordion';
// import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [StudyContentComponent],
  imports: [
    CommonModule,
    StudyContentRoutingModule,
    HeaderInnerModule,
    FooterModule,
    OwlModule,
    AccordionModule,
    // NgxGalleryModule
  ]
})
export class StudyContentModule { }
