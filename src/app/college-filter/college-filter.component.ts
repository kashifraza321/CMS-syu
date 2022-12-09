import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-college-filter',
  templateUrl: './college-filter.component.html',
  styleUrls: ['./college-filter.component.scss']
})
export class CollegeFilterComponent implements OnInit {
  collapsed = true;
  accordionSelected: boolean = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  emails = [{ email: "MBA/PGDM(1882)" }, { email: "B.Sc.(1882)" }, { email: "BE/B.Tech(1334)" }, { email: 'M.Sc.(1350)' },
  { email: 'BBA/BBM (1883)' }, { email: 'BA (1276)' }, { email: 'MBA/PGDM(1882)' }, { email: 'B.Sc.(1882)' }, { email: 'BBA/BBM (1883)' }]
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
      
    });
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile device");
      this.accordionSelected = false
    }else{
      // false for not mobile device
      console.log("not mobile device");
      this.accordionSelected = true
    }
  }

}
