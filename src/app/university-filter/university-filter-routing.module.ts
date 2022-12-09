import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityFilterComponent } from './university-filter.component';


const routes: Routes = [
  {
    path: '',
    component:UniversityFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityFilterRoutingModule { }
