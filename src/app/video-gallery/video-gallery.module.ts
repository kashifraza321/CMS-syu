import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGalleryRoutingModule } from './video-gallery-routing.module';
import { VideoGalleryComponent } from './video-gallery.component';

import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { FooterModule } from '../footer/footer.module';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';



@NgModule({
  declarations: [VideoGalleryComponent],
  imports: [
    CommonModule,
    VideoGalleryRoutingModule,
    HeaderInnerModule,
    FooterModule,
    AccordionModule,
    TabViewModule
    
  ]
})
export class VideoGalleryModule { }
