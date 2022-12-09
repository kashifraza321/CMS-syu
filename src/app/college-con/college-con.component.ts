import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import *as collegeContent from './data'
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-college-con',
  templateUrl: './college-con.component.html',
  styleUrls: ['./college-con.component.scss']
})
export class CollegeConComponent implements OnInit {

  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  collegeContents: any = collegeContent
  isReadMore: any = true
  isShade: any = true
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  activSubTab: string = 'tab1';
  elementPosition: any;
  elementPosition1: any
  displayBasic: boolean;
  posturl: any
  collegeData: any
  currentUrl: any
  url: any

  // variable for Cources and fees
  CoursesFees: any = []
  eventaddmission: any = []
  courseaddmission: any = []
  placement: any = []
  news: any = []
  gallery: any
  galleryType: any
  private link: HTMLLinkElement;
  // highlightColData= collegeContent.MIT.info.Highlights-Table.col


  isActive(tabName: any) {
    return this.activeTab === tabName;
  }

  photoURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + "&output=embed");
  }

  makeActive(tab: any) {

    console.log('tab', tab)
    console.log('this.url', this.url)
    if (this.url.length > 3) {
      if (tab === 'info') {
        this.router.navigate(['college/' + this.url[2]])
      } else if (tab === 'qna') {
        this.router.navigate(['college/' + this.url[2] + '/' + 'faq'])
      } else {
        this.router.navigate(['college/' + this.url[2] + '/' + tab])
      }
    } else {
      this.router.navigate(['college/' + this.currentUrl + '/' + tab])
    }
    this.activeTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTab(tab: any) {
    this.activeTab = tab;
  }

  // sub Tab 
  isActiveSubTab(tabName: any) {
    return this.activSubTab === tabName;
  }

  makeActiveSubTab(tab: any) {
    this.activSubTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTabSub(tab: any) {
    this.activSubTab = tab;
  }
  // sub Tab End



  showBasicDialog() {
    this.displayBasic = true;
  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom: any
  ) {
    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let urls = this.router.url.split('/')
    let data = this.collegeContents[urls[2].replace(/-/g, "")]
    data = data[urls[2]]
    let metas:any
    let links:any
    let titles:any
    if(urls.length > 3){
      let tabData =data[urls[3].replace(/-/g, "")]
      tabData.forEach((inf:any) => {
        if(inf.type ==='meta'){
          metas=inf.meta
        }
        if(inf.type ==='meta-title'){
          titles= inf.title
        }
        if(inf.type === 'meta-links'){
          links= inf.link
        }
    });
    }else {
      data.info.forEach((inf:any) => {
          if(inf.type ==='meta'){
            metas=inf.meta
          }
          if(inf.type ==='meta-title'){
            titles= inf.title
          }
          if(inf.type === 'meta-links'){
            links= inf.link
          }
      });
    }
  this.title.setTitle(titles)
  links.forEach((lik:any) => {
    link.setAttribute(lik.rel, lik.href);
  });
    metas.forEach((met: any) => {
      this.meta.addTag(met);
    });
  }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '100%',
        height: '45vh',
        thumbnailsColumns: 4,
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        // layout:NgxGalleryLayout.
      },
      // max-width 800
      {
        breakpoint: 768,
        width: '94%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1400,
        width: '100%',
        height: '50vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // ma
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/img/BG.jpg',
        medium: '../../assets/img/BG.jpg',
        big: '../../assets/img/BG.jpg'
      },
      {
        small: '../../assets/img/colg.png',
        medium: '../../assets/img/colg.png',
        big: '../../assets/img/colg.png'
      },
      {
        small: '../../assets/img/College.jpg',
        medium: '../../assets/img/College.jpg',
        big: '../../assets/img/College.jpg'
      },

    ];
    this.currentUrl = this.router.url.split('/').pop()
    console.log('this.currentUrl: ', this.currentUrl);
    this.url = this.router.url.split('/')
    if (this.url.length > 3) {
      if (this.url[3] === 'courses-and-fees') {
        this.getCoursesFees(this.url[2])
      }
      if (this.url[3] === 'admission') {
        this.getaddmission(this.url[2])
      }
      if (this.url[3] === 'placement') {
        this.getplaceMent(this.url[2])
      }
      if (this.url[3] === 'gallery') {
        this.getGallery(this.url[2])
        this.makeActiveTabSub('images')
      }
      if (this.url[3] === 'news') {
        this.getNews(this.url[2])
      }
    }
    console.log('this.collegeContents: ', this.collegeContents);
    console.log('this.url[2].replace(/-/g, ""): ', this.url[2].replace(/-/g, ""));
    const data = this.collegeContents[this.url[2].replace(/-/g, "")]
    this.collegeData = data[this.url[2].replace(/-/g, "")]
    this.createLinkForCanonicalURL()
    if (this.url.length > 3) {
      this.makeActiveTab(this.url[3]);
    } else {
      this.makeActiveTab('info');
    }
    this.images2 = [
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      // ... more items
    ];
  }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  images2: GalleryItem[];
  scrollToElement($element: any): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth" });
  }

  createLinkForCanonicalURL() {
    if (this.link === undefined) {
      this.collegeData.info.forEach((info: any) => {
        if (info.type === 'link') {
          info.data.forEach((lin: any) => {
            this.link = this.dom.createElement('link');
            this.link.setAttribute('rel', lin.rel,);
            this.dom.head.appendChild(this.link);
            this.link.setAttribute('href', lin.href);

          });
        }
      });
    }
  }

  getNews(url: any) {
    this.api.get(`syudynamicnews/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.news = res.object
        console.log('this.news: ', this.news);
      }
    })
  }

  getGallery(url: any) {
    this.api.get(`syudynamicimage/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj: any) {
          return obj.cCategory
        })
        courceName = [...new Set(courceName)];
        let data: any = {
          image: [],
          video: []
        }
        res.object.forEach((obj: any, i: any) => {
          if (obj.cContentType === 'Image') {
            data.image.push(obj)
          } else {
            data.video.push(obj)
          }
        })

        console.log('data: ', data);

        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {

          data.image.forEach((obj: any) => {
            if (cname === obj.cCategory) {
              data.image.push(obj)
            }
          });
        });
        this.galleryType = courceName
        data.video.forEach((vd: any) => {
          let url = vd.cImageUrl
          // let spliturl = Array.from(url)
          console.log('test', url.split("/"));
        });
        this.gallery = data
        console.log('data: ', data);
        console.log('this.placement: ', this.gallery);
      }
    })
  }

  getplaceMent(url: any) {
    this.api.get(`collegeplacementmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.placement.push(res.object[0])
        console.log('this.placement: ', this.placement);
      }
    })
  }

  getaddmission(url: any) {
    this.api.get(`syudadmissionmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        res.object.forEach((evn: any) => {
          this.eventaddmission.push({ Events: evn.cEvents, 'Important Dates': evn.cImportantDates })
          this.courseaddmission.push({ Course: 'Test', 'Exam Accepted': evn.cExamAccepted })
        });
        console.log('this.eventaddmission: ', this.eventaddmission);
        console.log('this.courseaddmission: ', this.courseaddmission);
      }
    })
  }

  getCoursesFees(url: any) {
    this.api.get(`collegemaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj: any) {
          return obj.cCourse
        })
        courceName = [...new Set(courceName)];
        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {
          let data: any = []
          res.object.forEach((obj: any, i: any) => {
            if (cname === obj.cCourse) {
              data.push(obj)
            }
            if (i === res.object.length - 1) {
              this.CoursesFees[id] = data
            }
          });
        });
        console.log('this.CoursesFees: ', this.CoursesFees);
      }
    })
  }

  galleriaImages: [
    {
      "previewImageSrc": "../../assets/img/BG.jpg",
      "thumbnailImageSrc": "../../assets/img/BG.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngAfterViewInit() {
    console.log('this.talkExpertDiv: ', this.talkExpertDiv);
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.elementPosition) {

      this.sticky = true;
    }
    if (windowScroll <= this.elementPosition) {
      this.sticky = false;
    }
    if (windowScroll >= this.elementPosition1) {
      this.stickyDiv = true;
    }
    if (windowScroll <= this.elementPosition1) {
      this.stickyDiv = false;
    }
  }
}
