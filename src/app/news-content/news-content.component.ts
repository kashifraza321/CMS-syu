import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as newsData from '../news/newsData';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  console:any = console;
  newsCategorie:any =newsData.newsCategories
  data:any =newsData.newsdata
  isReadMore:any = true
  isShade:any = true
  newsData: any
  currentUrl: any
  url: any
  allBlog:any=[]
  latestBlog:any=[]
  displayBasic:any
  constructor(private router: Router) { }

  showBasicDialog() {
    this.displayBasic = true;
  }

  ngOnInit() {
    this.currentUrl = this.router.url.split('/').pop()
    this.data.forEach((ndata:any) => {
      ndata.forEach((news:any) => {
        console.log('news: ', news);
          if(news.url === this.currentUrl){
              this.newsData =news
            }
          });
          
          
        });
        this.data.forEach((bg:any) => {
          bg.forEach((b:any) => {
              this.allBlog.push(b)
            });
          });
         this.allBlog.sort(function(a:any, b:any) {
           // convert date object into number to resolve issue in typescript
           return  +new Date(b.date) - +new Date(a.date);
          })
          this.latestBlog=  this.allBlog.splice(0, 10)
          console.log('this.latestBlog: ', this.latestBlog);
        console.log('this.currentUrl: ', this.currentUrl);
        console.log('newsCategorie: ', this.newsCategorie);
        console.log('data: ', this.data);
        console.log('this.newsData: ', this.newsData);
      }
      
      routerParentPage(place:any){
    console.log('this.newsData: ', this.newsData);
    console.log('place: ', place);
    let url = place.replaceAll(' ', '-')
    this.router.navigate([`news/category/${url.toLowerCase()}/` ]);
  }

  showText(){
    
  }

}
