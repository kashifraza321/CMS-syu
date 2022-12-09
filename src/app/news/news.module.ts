import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { FooterModule } from '../footer/footer.module';
// import { HeaderInnerModule } from '../header-inner/header-inner.module';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FooterModule,
    // HeaderInnerModule,
    RouterModule,
    CarouselModule ,
  ]
})
export class NewsModule { }
