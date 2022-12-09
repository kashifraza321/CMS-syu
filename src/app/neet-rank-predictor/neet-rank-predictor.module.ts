import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeetRankPredictorRoutingModule } from './neet-rank-predictor-routing.module';
import { NeetRankPredictorComponent } from './neet-rank-predictor.component';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [NeetRankPredictorComponent],
  imports: [
    CommonModule,
    NeetRankPredictorRoutingModule,
    FooterModule
  ]
})
export class NeetRankPredictorModule { }
