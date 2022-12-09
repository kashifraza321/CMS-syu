import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import( './home/home.module').then(x=>x.HomeModule)
  },
  {
    path: '',
    loadChildren:()=> import('./home/home.module').then(x=> x.HomeModule)
  },
  {
    path: 'blog',
    loadChildren:()=> import('./blog/blog.module').then(x=>x.BlogModule)
  },
  {
    path: 'blog',
    loadChildren:()=> import('./blog-content/blog-content.module').then(x=>x.BlogContentModule)
  },
  {
    path: 'blog/category',
    loadChildren:()=> import( './all-blogs/all-blogs.module').then(x=>x.AllBlogsModule)
  },
  {
    path: 'news',
    loadChildren:()=> import( './news/news.module').then(x=>x.NewsModule)
  },
  {
    path: 'news',
    loadChildren:()=> import( './news-content/news-content.module').then(x=>x.NewsContentModule)
  },
  {
    path: 'news/category',
    loadChildren:()=> import( './all-news/all-news.module').then(x=>x.AllNewsModule)
  },
  {
    path: 'about-us',
    loadChildren:()=> import( './about-us/about-us.module').then(x=>x.AboutUsModule)
  },
  {
    path: 'exams',
    loadChildren:()=> import( './exams/exams.module').then(x=>x.ExamsModule)
  },
  {
    path: 'exam',
    loadChildren:()=> import( './exam-content/exam-content.module').then(x=>x.ExamContentModule)
  },
  {
    path: 'contact-us',
    loadChildren:()=> import( './contact-us/contact-us.module').then(x=>x.ContactUsModule)
  },
  {
    path: 'neet-rank-predictor',
    loadChildren:()=> import( './neet-rank-predictor/neet-rank-predictor.module').then(x=>x.NeetRankPredictorModule)
  },
  {
    path: 'filter',
    loadChildren:()=> import( './filter/filter.module').then(x=>x.FilterModule)
  },
  {
    path: 'services',
    loadChildren:()=> import( './services/services.module').then(x=>x.ServicesModule)
  },
  {
    path: 'course',
    loadChildren:()=> import( './course/course.module').then(x=>x.CourseModule)
  },
  {
    path: 'courses',
    loadChildren:()=> import( './course-content/course-content.module').then(x=>x.CourseContentModule)
  },
  {
    path: 'disclaimer',
    loadChildren:()=> import( './disclaimer/disclaimer.module').then(x=>x.DisclaimerModule)
  },
  {
    path: 'faq',
    loadChildren:()=> import( './faq/faq.module').then(x=>x.FaqModule)
  },
  {
    path: 'study-abroad',
    loadChildren:()=> import( './study-abroad/study-abroad.module').then(x=>x.StudyAbroadModule)
  },
  {
    path: 'study-content',
    loadChildren:()=> import( './study-content/study-content.module').then(x=>x.StudyContentModule)
  },
  {
    path: 'abroad-course',
    loadChildren:()=> import( './abroad-course/abroad-course.module').then(x=>x.AbroadCourseModule)
  },
  {
    path: 'college',
    loadChildren:()=> import( './college-filter/college-filter.module').then(x=>x.CollegeFilterModule)
  },
  {
    path: 'college',
    loadChildren:()=> import( './college-con/college-con.module').then(x=>x.CollegeConModule)
  },
  {
    path: 'course-filter',
    loadChildren:()=> import( './course-filter/course-filter.module').then(x=>x.CourseFilterModule)
  },
  {
    path: 'exam-filter',
    loadChildren:()=> import( './exam-filter/exam-filter.module').then(x=>x.ExamFilterModule)
  },
  {
    path: 'image-gallery',
    loadChildren:()=> import( './img-gallery/img-gallery.module').then(x=>x.ImgGalleryModule)
  },
  {
    path: 'video-gallery',
    loadChildren:()=> import( './video-gallery/video-gallery.module').then(x=>x.VideoGalleryModule)
  },
  {
    path: 'privacy',
    loadChildren:()=> import( './privacy/privacy.module').then(x=>x.PrivacyModule)
  },
  {
    path: 'university-filter',
    loadChildren:()=> import( './university-filter/university-filter.module').then(x=>x.UniversityFilterModule)
  },
  {
    path: 'university',
    loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  },

  //abrod university page 
  // {
  //   path: 'nepal/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'ukraine/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'uk/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'russia/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'philippines/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'bangladesh/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'canada/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'estonia/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'germany/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'kyrgyzstan/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'italy/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'kazakhstan/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'georgia/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'poland/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'china/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'hungary/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'bulgaria/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'belarus/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'latvia/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'armenia/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'uzbekistan/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  // {
  //   path: 'lithuania/university',
  //   loadChildren:()=> import( './university-con/university-con.module').then(x=>x.UniversityConModule)
  // },
  
  // {
  //   path: '**',
  //   pathMatch: 'full', 
  //   component:ErrorPageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
