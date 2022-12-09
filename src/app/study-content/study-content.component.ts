import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as studyCon from './data'

@Component({
  selector: 'app-study-content',
  templateUrl: './study-content.component.html',
  styleUrls: ['./study-content.component.scss']
})
export class StudyContentComponent implements OnInit {
  studyData:any = studyCon
  displayData:any
  url: any
  constructor(
    private router: Router,
  ) { }
  carouselOptions2 = {
    margin: 0,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    loop:true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }
  images2 = [
    {
      text: "Study In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "Study In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    
    
  ]
  ngOnInit() {
    console.log('stcon', this.studyData);
    this.url = this.router.url.split('/')
    console.log('rou', this.url);
    this.displayData = this.studyData[this.url[2]][this.url[2]]
    console.log('this.displayData: ', this.displayData);
  }

}
