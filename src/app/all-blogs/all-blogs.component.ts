import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as blogData from "./all-blogs";

@Component({
  selector: "app-all-blogs",
  templateUrl: "./all-blogs.component.html",
  styleUrls: ["./all-blogs.component.scss"],
})
export class AllBlogsComponent implements OnInit {
  blogCategorie = blogData.blogCategories;
  allData:any
  data: any;
  url: any;
  currentUrl: any;
  customeCat:any
  allBLogs:any=[]

  constructor(private router: Router) {
    (this.data = this.router.getCurrentNavigation()?.extras.state),
      console.log("data", this.data);
  }

  ngOnInit() {
    console.log("blogData: ", blogData);
    this.url = this.router.url.split('/')
    console.log('this.url: ', this.url);
    console.log('blogData.blogdata: ', blogData.blogdata);
    if(!this.allData){
      blogData.blogdata.forEach(nd => {
        nd.forEach(n => {
          if(n.Categories === this.url[3]){
            this.allData=nd
          }
        });
      });
    }
    console.log('this.allData: ', this.allData);
    if(this.url[3]==='all-blogs'){
      blogData.blogdata.forEach(bg => {
        bg.forEach((b:any) => { 
            this.customeCat = 'All Blogs'
            this.allBLogs.push(b)
          });
        });
      }else {
        this.data = this.allData
      }
      console.log('this.allBLogs: ', this.allBLogs);
      console.log('this.data: ', this.data);
    console.log("blogCategorie: ", this.blogCategorie);
  }

  makeActive(tab:any) {
    this.router.navigate(['blog/' + tab])
  }

}
