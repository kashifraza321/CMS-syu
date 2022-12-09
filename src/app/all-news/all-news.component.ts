import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as newsData from "./all-news";
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  newsCategorie = newsData.newsCategories;
  data:any = [];
  allData:any
  url: any;
  customeCat:any
  allNews:any=[]
  currentUrl: any;
  

  constructor(private router: Router) {
    (this.data = this.router.getCurrentNavigation()?.extras.state),
      console.log("data", this.data);
   } 

  ngOnInit(): void {
    this.url = this.router.url.split('/')
    if(!this.data){
      newsData.newsdata.forEach(nd => {
            nd.forEach(n => {
                if(n.Categories === this.url[3]){
                  this.data=nd
                }
              });
            });
          }
    if(this.url[3]==='all-news'){
      newsData.newsdata.forEach(bg => {
        bg.forEach(b => { 
            this.customeCat = 'All News'
            this.allNews.push(b)
          });
        });
      }


    this.url = this.router.url.split('/')
    if(!this.allData){
      newsData.newsdata.forEach(nd => {
        nd.forEach(n => {
          if(n.Categories === this.url[3]){
            this.allData=nd
          }
        });
      });
    }
    if(this.url[3]==='all-blogs'){
      newsData.newsdata.forEach(bg => {
        bg.forEach((b:any) => { 
            this.customeCat = 'All Blogs'
            this.allNews.push(b)
          });
        });
      }else {
        this.data = this.allData
      }

  }

  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }
}
