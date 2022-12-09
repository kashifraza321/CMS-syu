import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as blogData from './blogData';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogCategorie:any =blogData.blogCategories
  data:any =blogData.blogdata
  url: any
  currentUrl: any
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
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },

  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time: "7"
    },
    {
      text: "CLAT 2022 Provisional Merit List I Will Be Released Tomorrow",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time: "5"
    }

  ]

  
  constructor(private router: Router,) { }

  ngOnInit() {
    this.data= blogData.blogdata
    console.log('this.data: ', this.data);
    console.log('blogData: ', blogData);
    console.log('blogCategorie: ', this.blogCategorie);
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
        console.log('test: ', this.allBlog);
  }
  makeActive(tab:any) {
    this.router.navigate(['blog/' + tab])
  }

  get(item:any){
    if(item[0].Categories === 'Top Colleges And Universities'){
      item.forEach((itm:any) => {
        itm.Categories = 'top-colleges-and-universitie'
      });
    }
    
    this.router.navigate(['blog/category/' + item[0].Categories], { state: item });
  }

  routeAllBlog(){
    this.router.navigate(['blog/category/all-blogs']);
  }

}
