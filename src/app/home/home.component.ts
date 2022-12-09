import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { PopupFormComponent } from '../popup-form/popup-form.component';
import * as blogData from "../blog/blogData";
// import * as newsData from "../news/newsData"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  // modalRef: BsModalRef;
  data:any =blogData.blogdata
  // dataNews:any = newsData.newsdata
  allBlog =[]
  latestBlog=[]
  allNews=[]
  latestNews=[]
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
        items: 1,
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
  carouselOptions2 = {
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
        items: 1,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
  images2 = [
    {
      text: "Canada",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-Canada.png"
    },
    {
      text: "UK",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-UK.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-USA.png"
    },
    
    
  ]
  images = [
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    }
  ]


  constructor(public modalService: BsModalService) {}

  ngOnInit() {
    const seconds = 3;
    setTimeout(() => {
      this.openModal();
    }, seconds * 1000);

    // this.data.forEach((bg:any) => {
    //   bg.forEach((b:any) => {
    //       this.allBlog.push(b)
    //     });
    //   });
    //  this.allBlog.sort(function(a, b) {
    //    // convert date object into number to resolve issue in typescript
    //    return  +new Date(b.date) - +new Date(a.date);
    //   })
    //   this.latestBlog=  this.allBlog.splice(0, 2)


      // this.dataNews.forEach(bg => {
      //   bg.forEach(b => {
      //       this.allNews.push(b)
      //     });
      //   });
      //  this.allNews.sort(function(a, b) {
      //    // convert date object into number to resolve issue in typescript
      //    return  +new Date(b.date) - +new Date(a.date);
      //   })
        this.latestNews=  this.allNews.splice(0,6)
        console.log('latestNews', this.latestNews)
  }

  public openModal() {
    // this.modalRef = this.modalService.show(PopupFormComponent,{
    //   animated: false
    // });
  }

}
