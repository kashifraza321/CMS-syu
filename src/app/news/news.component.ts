import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as newsData from './newsData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsCategorie:any =newsData.newsCategories
  data:any =newsData.newsdata
  url: any
  currentUrl: any
  news:any
  allBlog:any =[]
  latestBlog:any=[]
  carouselOptions = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
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
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }
  images = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    
  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time:"7"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time:"5"
    }
    
  ]
  constructor(private router: Router , private api: ApiService) { }

  ngOnInit() {
    console.log('newsData: ', newsData);
    console.log('newsCategorie: ', this.newsCategorie);
    this.data.forEach((bg:any) => {
      bg.forEach((b:any) => {
          this.allBlog.push(b)
        });
      });
     this.allBlog.sort(function(a:any, b:any) {
       // convert date object into number to resolve issue in typescript
       return  +new Date(b.date) - +new Date(a.date);
      })
      this.latestBlog=  this.allBlog.splice(1, 2)
      console.log('this.latestBlog: ', this.latestBlog);
  }
  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }

  get(item:any){
    this.router.navigate(['news/category/' + item[0].Categories], { state: item });
  }
  routeAllBlog(){
    this.router.navigate(['news/category/all-news']);
  }
}

