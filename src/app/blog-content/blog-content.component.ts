import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as blogData from '../blog/blogData';
@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  blogCategorie:any =blogData.blogCategories
  data:any =blogData.blogdata
  isReadMore = true
  isShade = true
  blogsData: any
  currentUrl: any
  url: any
  allBlog:any=[]
  latestBlog:any
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.currentUrl = this.router.url.split('/').pop()
    this.data.forEach((bdata:any) => {
      bdata.forEach((blog:any) => {
        console.log('blog: ', blog);
          if(blog.url === this.currentUrl){
              this.blogsData =blog
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
          console.log(' this.latestBlog: ',  this.latestBlog);

  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }

}
