import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { OwlModule } from 'ngx-owl-carousel';
import { TabViewModule } from 'primeng/tabview'
import { HeaderModule } from '../header/header.module';
import { NavModule } from '../nav/nav.module';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { PopupFormComponent } from '../popup-form/popup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    TabViewModule,
    FooterModule,
    HeaderModule,
    NavModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
