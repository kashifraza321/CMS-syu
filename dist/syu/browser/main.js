"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("default-src_assets_blogData_career_ts-src_assets_blogData_exam_ts-src_assets_blogData_howtoGu-3896fb"), __webpack_require__.e("default-src_app_header_header_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(x => x.HomeModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("default-src_assets_blogData_career_ts-src_assets_blogData_exam_ts-src_assets_blogData_howtoGu-3896fb"), __webpack_require__.e("default-src_app_header_header_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(x => x.HomeModule)
    },
    {
        path: 'blog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_assets_blogData_career_ts-src_assets_blogData_exam_ts-src_assets_blogData_howtoGu-3896fb"), __webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_blog_blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog/blog.module */ 80797)).then(x => x.BlogModule)
    },
    {
        path: 'blog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-src_assets_blogData_career_ts-src_assets_blogData_exam_ts-src_assets_blogData_howtoGu-3896fb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_blog-content_blog-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog-content/blog-content.module */ 20269)).then(x => x.BlogContentModule)
    },
    {
        path: 'blog/category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("default-src_assets_blogData_career_ts-src_assets_blogData_exam_ts-src_assets_blogData_howtoGu-3896fb"), __webpack_require__.e("src_app_all-blogs_all-blogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./all-blogs/all-blogs.module */ 96794)).then(x => x.AllBlogsModule)
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_assets_newsData_exam_ts-src_assets_newsData_general_ts"), __webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2020_ngx-owl-carousel-o_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_news_news_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./news/news.module */ 51926)).then(x => x.NewsModule)
    },
    {
        path: 'news',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-src_assets_newsData_exam_ts-src_assets_newsData_general_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dialog_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_news-content_news-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./news-content/news-content.module */ 67153)).then(x => x.NewsContentModule)
    },
    {
        path: 'news/category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-src_assets_newsData_exam_ts-src_assets_newsData_general_ts"), __webpack_require__.e("src_app_all-news_all-news_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./all-news/all-news.module */ 99154)).then(x => x.AllNewsModule)
    },
    {
        path: 'about-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("src_app_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 58310)).then(x => x.AboutUsModule)
    },
    {
        path: 'exams',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_exams_exams_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./exams/exams.module */ 51257)).then(x => x.ExamsModule)
    },
    {
        path: 'exam',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js"), __webpack_require__.e("default-src_app_api_service_ts-node_modules_ng-gallery___ivy_ngcc___fesm2015_ng-gallery_js-no-5a2a21"), __webpack_require__.e("default-src_assets_collegeData_MIT_ts-src_assets_collegeData_acharya-institute-of-technology--d138f2"), __webpack_require__.e("src_app_exam-content_exam-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exam-content/exam-content.module */ 12229)).then(x => x.ExamContentModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-src_app_header_header_module_ts"), __webpack_require__.e("src_app_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 63648)).then(x => x.ContactUsModule)
    },
    {
        path: 'neet-rank-predictor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_neet-rank-predictor_neet-rank-predictor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./neet-rank-predictor/neet-rank-predictor.module */ 84914)).then(x => x.NeetRankPredictorModule)
    },
    {
        path: 'filter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js"), __webpack_require__.e("default-src_app_header_header_module_ts"), __webpack_require__.e("src_app_filter_filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 67655)).then(x => x.FilterModule)
    },
    {
        path: 'services',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("src_app_services_services_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./services/services.module */ 48812)).then(x => x.ServicesModule)
    },
    {
        path: 'course',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("src_app_course_course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./course/course.module */ 21071)).then(x => x.CourseModule)
    },
    {
        path: 'courses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js"), __webpack_require__.e("default-src_app_api_service_ts-node_modules_ng-gallery___ivy_ngcc___fesm2015_ng-gallery_js-no-5a2a21"), __webpack_require__.e("default-src_assets_collegeData_MIT_ts-src_assets_collegeData_acharya-institute-of-technology--d138f2"), __webpack_require__.e("src_app_course-content_course-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./course-content/course-content.module */ 99398)).then(x => x.CourseContentModule)
    },
    {
        path: 'disclaimer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("src_app_disclaimer_disclaimer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./disclaimer/disclaimer.module */ 88248)).then(x => x.DisclaimerModule)
    },
    {
        path: 'faq',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("src_app_faq_faq_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./faq/faq.module */ 5083)).then(x => x.FaqModule)
    },
    {
        path: 'study-abroad',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("src_app_study-abroad_study-abroad_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./study-abroad/study-abroad.module */ 5471)).then(x => x.StudyAbroadModule)
    },
    {
        path: 'study-content',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("src_app_study-content_study-content_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./study-content/study-content.module */ 62246)).then(x => x.StudyContentModule)
    },
    {
        path: 'abroad-course',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("src_app_abroad-course_abroad-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./abroad-course/abroad-course.module */ 22665)).then(x => x.AbroadCourseModule)
    },
    {
        path: 'college',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_college-filter_college-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./college-filter/college-filter.module */ 77788)).then(x => x.CollegeFilterModule)
    },
    {
        path: 'college',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js"), __webpack_require__.e("default-src_app_api_service_ts-node_modules_ng-gallery___ivy_ngcc___fesm2015_ng-gallery_js-no-5a2a21"), __webpack_require__.e("default-src_assets_collegeData_MIT_ts-src_assets_collegeData_acharya-institute-of-technology--d138f2"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dialog_mjs"), __webpack_require__.e("src_app_college-con_college-con_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./college-con/college-con.module */ 63733)).then(x => x.CollegeConModule)
    },
    {
        path: 'course-filter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_course-filter_course-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./course-filter/course-filter.module */ 41667)).then(x => x.CourseFilterModule)
    },
    {
        path: 'exam-filter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_exam-filter_exam-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./exam-filter/exam-filter.module */ 74176)).then(x => x.ExamFilterModule)
    },
    {
        path: 'image-gallery',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("src_app_img-gallery_img-gallery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./img-gallery/img-gallery.module */ 95201)).then(x => x.ImgGalleryModule)
    },
    {
        path: 'video-gallery',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("src_app_video-gallery_video-gallery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./video-gallery/video-gallery.module */ 21445)).then(x => x.VideoGalleryModule)
    },
    {
        path: 'privacy',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("src_app_privacy_privacy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./privacy/privacy.module */ 25489)).then(x => x.PrivacyModule)
    },
    {
        path: 'university-filter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_university-filter_university-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./university-filter/university-filter.module */ 75777)).then(x => x.UniversityFilterModule)
    },
    {
        path: 'university',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-api_mjs"), __webpack_require__.e("default-src_app_header-inner_header-inner_module_ts"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-accordion_mjs"), __webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-ripple_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-tabview_mjs"), __webpack_require__.e("default-node_modules_ngx-owl-carousel___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_ng-bootstrap_ng-bootstrap___ivy_ngcc___fesm2015_ng-bootstrap_js"), __webpack_require__.e("default-src_app_api_service_ts-node_modules_ng-gallery___ivy_ngcc___fesm2015_ng-gallery_js-no-5a2a21"), __webpack_require__.e("default-node_modules_primeng_fesm2020_primeng-dialog_mjs"), __webpack_require__.e("src_app_university-con_university-con_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./university-con/university-con.module */ 54654)).then(x => x.UniversityConModule)
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
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 15375);



class AppComponent {
    constructor() {
        this.title = 'syu';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.8.1/css/all.css"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.module */ 26444);
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.module */ 61125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_3__.NavModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_3__.NavModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 59782:
/*!*************************************************!*\
  !*** ./src/app/footer/footer-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterRoutingModule": () => (/* binding */ FooterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [];
class FooterRoutingModule {
}
FooterRoutingModule.ɵfac = function FooterRoutingModule_Factory(t) { return new (t || FooterRoutingModule)(); };
FooterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterRoutingModule });
FooterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 10970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 113, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-2", "footer-custom-div", "col-sm-5"], [1, "member1"], ["routerLink", "/about-us", "href", "/#/about-us", 1, "footer-nav-link"], ["routerLink", "/faq", "href", "/#/faq", 1, "footer-nav-link"], ["routerLink", "/contact-us", "href", "/#/contact-us", 1, "footer-nav-link"], ["routerLink", "/services", "href", "/#/services", 1, "footer-nav-link"], ["routerLink", "/disclaimer", "href", "/#/disclaimer", 1, "footer-nav-link"], ["routerLink", "/privacy", "href", "/#/privacy", 1, "footer-nav-link"], ["href", "", "routerlink", "/exams", 1, "footer-nav-header"], ["href", "#/exam-content/neet-pg-exam", 1, "footer-nav-link"], ["href", "#/exam-content/neet-ug-exam", 1, "footer-nav-link"], ["href", "#/exam-content/fmge-exam", 1, "footer-nav-link"], ["href", "#/exam-content/international-foundation-of-medicine-ifom", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-russia", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-georgia", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-kyrgyzstan", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-kazakhstan", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-nepal", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-philippines", 1, "footer-nav-link"], ["href", "#/course-content/mbbs-in-uzbekistan", 1, "footer-nav-link"], [1, "footer3"], [1, "col-md-2", "col-sm-5"], ["href", "", "routerlink", "/home", 1, "nav-link"], ["src", "assets/img/Home Page/7. Footer/SYU-Logo.png", "alt", "", "width", "150", 1, "d-inline", "pt-3", "ml-0"], [1, "col-md-3", "col-sm-5", "pt-4"], [1, "contact-details"], ["href", "tel:+919555120101"], ["src", "assets/img/Phone.png", "width", "20", 1, "footer-img"], ["href", "mailto:info@selectyouruniversity.com"], ["src", "assets/img/Mail (1).png", "width", "20", 1, "footer-img"], [1, "white-text-2", "add-div", "d-flex"], ["src", "assets/img/Address (1).png", "width", "20", 1, "footer-img"], [1, "add"], [1, "col-md-4", "col-sm-5", "text-center", "pt-4"], [1, "follow-us-div"], ["href", " https://www.facebook.com/SelectyouruniversityIndia/", "target", "_blank", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/Facebook.png", "width", "20 "], ["href", " https://youtube.com/c/SelectYourUniversity", "target", "_blank", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/You-Tube.png", "width", "20"], ["href", "#", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/Whats-App.png", "width", "20"], ["href", " https://www.instagram.com/selectyouruniversity/", "target", "_blank", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/Instagram.png", "width", "20"], ["href", "https://in.pinterest.com/selectyouruniversity/", "target", "_blank", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/Pinterest.png", "width", "20"], ["href", " https://twitter.com/mbbsconsultant", "target", "_blank", 1, "white-text-2"], ["src", "assets/img/Home Page/7. Footer/Follow us/Tweeter.png", "width", "20"], [1, "footer4"], [1, "col-md-7", "col-sm-5"], [1, "member1", "white-text-2", "pt-2", "text-right"], [2, "font-size", "9px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "h4")(28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NEET PG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "NEET UG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14)(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15)(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "IFOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3)(43, "div", 4)(44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "MBBS Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16)(47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "MBBS in Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 17)(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "MBBS in Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 18)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "MBBS in Kyrgyzstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19)(56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "MBBS in Kazakhstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20)(59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "MBBS in Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21)(62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "MBBS in Phillippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 22)(65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "MBBS in Uzbekistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23)(68, "div", 1)(69, "div", 2)(70, "div", 24)(71, "div", 4)(72, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27)(75, "div", 28)(76, "h4")(77, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " +91 9555120101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4")(81, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " info@selectyouruniversity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27)(85, "div", 28)(86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "3FCS-05, Ansal plaza, opposite Dabur Chowk, Sector-1, Near- Income Tax Office, Vaishali, Ghaziabad, Uttar Pradesh - 201010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 36)(91, "div", 37)(92, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Follow Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 50)(107, "div", 1)(108, "div", 2)(109, "div", 51)(110, "div", 52)(111, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Select Your University \u00A9 2022-23. All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".footer-nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.footer-nav-header[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n.contact-details[_ngcontent-%COMP%] {\n  padding: 5%;\n  padding-top: 0px;\n}\n\n.fa-phone[_ngcontent-%COMP%], .fa-envelope[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.add-div[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  float: right;\n  padding-left: 10px;\n  text-align: left;\n}\n\n.add-div[_ngcontent-%COMP%]   .left-icon[_ngcontent-%COMP%] {\n  float: left;\n  padding-top: 5px;\n}\n\n.footer-img[_ngcontent-%COMP%] {\n  height: 24px !important;\n  margin-right: 3px;\n  margin-left: -20px;\n}\n\n.add-div[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n\n@media only screen and (min-width: 766px) and (max-width: 954px) {\n  .member1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 130px;\n    margin-left: 9px;\n  }\n}\n\n@media only screen and (min-width: 766px) and (max-width: 853px) {\n  .contact-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: -40px;\n  }\n  .member1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 110px;\n    margin-left: 2px;\n  }\n}\n\n@media only screen and (max-width: 1400px) {\n  .container[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%] {\n    max-width: 1300px;\n  }\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n  .add-div[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n@media only screen and (min-width: 1150px) and (max-width: 1217px) {\n  .footer-img[_ngcontent-%COMP%] {\n    height: 20px !important;\n  }\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n@media only screen and (min-width: 900px) and (max-width: 1150px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n  }\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n@media only screen and (min-width: 800px) and (max-width: 900px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-left: 3rem;\n  }\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n@media only screen and (min-width: 576px) and (max-width: 734px) {\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n@media only screen and (max-width: 315px) {\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px !important;\n  }\n}\n\n.add-div[_ngcontent-%COMP%], .add[_ngcontent-%COMP%] {\n  margin-top: -3px !important;\n}\n\n@media only screen and (min-width: 982px) and (max-width: 1050px) {\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n}\n\n@media only screen and (min-width: px) and (max-width: 982px) {\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 11px !important;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 800px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-left: 3rem;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 982px) {\n  .footer3[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n    padding-top: 0rem !important;\n    margin-left: 22px;\n  }\n  .footer3[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-bottom: 2.5rem;\n  }\n  .getintouch[_ngcontent-%COMP%], .follow-us-div[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 575px) and (max-width: 767px) {\n  .pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTs7RUFFSSxtQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBVUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQVBOO0FBQ0Y7O0FBU0E7RUFDRztJQUNHLGtCQUFBO0VBUEo7RUFTQztJQUNHLFlBQUE7SUFDQSxnQkFBQTtFQVBKO0FBQ0Y7O0FBWUE7RUFFSTs7Ozs7SUFLSSxpQkFBQTtFQVhOO0VBY0U7SUFDSSwwQkFBQTtFQVpOO0VBZUU7SUFDSSwwQkFBQTtFQWJOO0FBQ0Y7O0FBZ0JBO0VBQ0k7SUFDSSx1QkFBQTtFQWROO0VBa0JFO0lBQ0ksMEJBQUE7RUFoQk47QUFDRjs7QUFtQkE7RUFDSTtJQUVJLGtCQUFBO0VBbEJOO0VBcUJFO0lBQ0ksMEJBQUE7RUFuQk47QUFDRjs7QUF1QkE7RUFDSTtJQUNJLGtCQUFBO0VBckJOO0VBd0JFO0lBQ0ksMEJBQUE7RUF0Qk47QUFDRjs7QUF5QkE7RUFDSTtJQUNJLDBCQUFBO0VBdkJOO0FBQ0Y7O0FBMEJBO0VBQ0k7SUFDSSwwQkFBQTtFQXhCTjtBQUNGOztBQTJCQTs7RUFFSSwyQkFBQTtBQXpCSjs7QUE0QkE7RUFDSTtJQUNJLDBCQUFBO0VBekJOO0FBQ0Y7O0FBNEJBO0VBQ0k7SUFDSSwwQkFBQTtFQTFCTjtBQUNGOztBQTZCQTtFQUNJO0lBQ0ksa0JBQUE7RUEzQk47QUFDRjs7QUE4QkE7RUFDSTtJQUNJLDBCQUFBO0VBNUJOO0FBQ0Y7O0FBZ0NBO0VBQ0k7SUFDSSw0QkFBQTtJQUNBLGlCQUFBO0VBOUJOO0VBZ0NFO0lBQ0ksa0JBQUE7SUFDQSxzQkFBQTtFQTlCTjtFQWdDRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUE5Qk47QUFDRjs7QUFpQ0E7RUFDSTtJQUNJLGtCQUFBO0VBL0JOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1uYXYtbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vIGZvbnQtc2l6ZTogNzUlICBcclxufVxyXG5cclxuLmZvb3Rlci1uYXYtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuXHJcbn1cclxuXHJcbi5mYS1waG9uZSxcclxuLmZhLWVudmVsb3BlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWRldGFpbHMgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmFkZC1kaXYgLmFkZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWRkLWRpdiAubGVmdC1pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDVweFxyXG59XHJcblxyXG4uZm9vdGVyLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4uYWRkLWRpdiAuYWRkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcblxyXG4vLyAucm93e1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTYxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY2cHgpIGFuZCAobWF4LXdpZHRoOiA5NTRweCkge1xyXG4gICAgLm1lbWJlcjEgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjZweCkgYW5kIChtYXgtd2lkdGg6IDg1M3B4KSB7XHJcbiAgIC5jb250YWN0LWRldGFpbHMgaW1ne1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgIH1cclxuICAgLm1lbWJlcjEgaW1ne1xyXG4gICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuXHJcbiAgICAuY29udGFpbmVyLFxyXG4gICAgLmNvbnRhaW5lci1sZyxcclxuICAgIC5jb250YWluZXItbWQsXHJcbiAgICAuY29udGFpbmVyLXNtLFxyXG4gICAgLmNvbnRhaW5lci14bCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlcjMgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGQtZGl2IC5hZGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTE1MHB4KSBhbmQgKG1heC13aWR0aDogMTIxN3B4KSB7XHJcbiAgICAuZm9vdGVyLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMHB4KSBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XHJcbiAgICAucHQtNCB7XHJcblxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyMyBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLnB0LTQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyMyBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NzZweCkgYW5kIChtYXgtd2lkdGg6IDczNHB4KSB7XHJcbiAgICAuZm9vdGVyMyBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzE1cHgpIHtcclxuICAgIC5mb290ZXIzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZC1kaXYsXHJcbi5hZGQge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTgycHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5mb290ZXIzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOnB4KSBhbmQgKG1heC13aWR0aDogOTgycHgpIHtcclxuICAgIC5mb290ZXIzIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5wdC00IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk4MnB4KSB7XHJcbiAgICAuZm9vdGVyMyBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAucHQtNCwgLnB5LTQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyMyAubmF2LWxpbmsge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLmdldGludG91Y2gsIC5mb2xsb3ctdXMtZGl2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLnB0LTQsIC5weS00IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 26444:
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 59782);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ 10970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent] }); })();


/***/ }),

/***/ 10287:
/*!*******************************************!*\
  !*** ./src/app/nav/nav-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavRoutingModule": () => (/* binding */ NavRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [];
class NavRoutingModule {
}
NavRoutingModule.ɵfac = function NavRoutingModule_Factory(t) { return new (t || NavRoutingModule)(); };
NavRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavRoutingModule });
NavRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 15375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var zeynepjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zeynepjs */ 64428);
/* harmony import */ var zeynepjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zeynepjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);






const _c0 = ["zeynep"];
const _c1 = ["toggleButton"];
function NavComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 585);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_87_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r65.mouseEnter5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 586);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_87_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r67.mouseEnter6()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Abroad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 587)(1, "ul", 584)(2, "li")(3, "a", 588);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_88_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r68.mouseEnter7()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 589);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_88_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r70.mouseEnter8()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Solapur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 590);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_88_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r71.mouseEnter9()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kerala");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 591);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_88_Template_a_mouseenter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r72.mouseEnter10()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Rajasthan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_88_Template_a_mouseenter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r73.mouseEnter11()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Banglore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 593)(1, "ul", 584)(2, "li")(3, "a", 594);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_89_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r74.mouseEnter12()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 595);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_89_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r76.mouseEnter13()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 596);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_89_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r77.mouseEnter14()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Russia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 597)(1, "ul", 584)(2, "li")(3, "a", 598);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "B. Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 599)(1, "ul", 584)(2, "li")(3, "a", 600);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Engineering in Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 601);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Engineering in Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 602);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Engineering in Russia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 603);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Engineering in Ireland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 604);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Engineering in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 606);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pune Institute of Computer Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 607);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MIT College of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 608);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vishwakarma Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 609);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Dr. D. Y Patil Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 610);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sinhgad College of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 611);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Bharati Vidyapeeth College of Engineering, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 612);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Symbiosis Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 613)(1, "ul", 584)(2, "li")(3, "a", 614);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Walchand Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 615)(1, "ul", 584)(2, "li")(3, "a", 616);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "SCMS School of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 617)(1, "ul", 584)(2, "li")(3, "a", 618);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Birla Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 619)(1, "ul", 584)(2, "li")(3, "a", 620);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MVJ College of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 621);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ramaiah Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 622);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BMS College of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 623)(1, "ul", 584)(2, "li")(3, "a", 624);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Poznan University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 625);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gdansk University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 626);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AGH University of Science & Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 627);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Warsaw University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 628);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Silesian University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 629);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cracow University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 630);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Lodz University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 631);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Wroclaw University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 632)(1, "ul", 584)(2, "li")(3, "a", 633);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kyiv Polytechnic Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 634);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kharkiv National University of Radio Electronics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 635);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cherkasy State Technological University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 636);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "National Metallurgical Academy of Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 637);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Ukrainian State Chemical Technology University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 638);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ivano-Frankivsk National University of Oil & Gas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 639);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Donbass State Engineering Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 640);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Ternopil National Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 641);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Zaporizhzhia State Engineering Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 642);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Kremenchuk State Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 643);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Kherson National Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 644);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Vinnytsia National Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 645);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Lviv Polytechnic National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 647);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kalmyk State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 648);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "North-Caucasus Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 649);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Pskov State Polytechnic Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 650);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Moscow Institute of Physics and Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 651);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Perm State Agro - Technological University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 652);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Bauman Moscow State Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 653);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Moscow State University of Fine Chemical Technologies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 654);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "National University of Science and Technology MISIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 655);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "South Ural State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 656);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Irkutsk National Research Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 657);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ITMO University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 658);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Novosibirsk State Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 659);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Moscow Power Engineering Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 660);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Tomsk Polytechnic University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 661);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Moscow State University of Civil Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 662);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Nizhny Novgorod State Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 663);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Saint Petersburg State Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 664);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Peter the Great St. Petersburg Polytechnic University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBBS in Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBBS in Belarus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBBS in USA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBBS in UK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBBS in China");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBBS in New Zealand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "MBBS in Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MBBS in Bulgaria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "MBBS in Romania");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBBS in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBBS in Philippines");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBBS in Ireland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBBS in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBBS in Abroad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBBS in Malta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "MBBS in Italy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MBBS in Czech Republic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "MBBS in Hungary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBBS in Russia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBBS in Georgia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBBS in Nepal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBBS in Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBBS in Europe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBBS in Lithuania");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "MBBS in France");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MBBS in Austria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 665);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBBS in Bangladesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 666);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBBS in Kazakhstan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 667);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBBS in Kyrgyzstan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 668);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBBS in Armenia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 669);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBBS in Uzbekistan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 670);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBBS in Latvia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 671);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "MBBS in Malaysia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 672);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MBBS in Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "All India Institute of Medical Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Armed Forces Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Bharati Vidyapeeth Deemed University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "D.Y. Patil Medical College, Kolhapur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Bharati Vidyapeeth Medical College, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Indian Institute of Medical Science and Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "DY Patil Medical College Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Terna Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Krishna Institute of Medical Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "KJ Somaiya Medical College & Research Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "D.Y. Patil Medical College, Navi Mumbai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_177_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 593)(1, "ul", 584)(2, "li")(3, "a", 675);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r78.mouseEnter12()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 676);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r80.mouseEnter13()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 677);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r81.mouseEnter14()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Georgia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 678);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r82.mouseEnter15()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kyrgyzstan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 679);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r83.mouseEnter16()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Russia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 680);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r84.mouseEnter17()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nepal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 681);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r85.mouseEnter18()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Bangladesh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 682);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r86.mouseEnter19()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Philippines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 683);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r87.mouseEnter20()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "China ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 684);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r88.mouseEnter21()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Belarus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "a", 685);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r89.mouseEnter22()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Kazakhstan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "a", 686);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r90.mouseEnter23()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Armenia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 687);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r91.mouseEnter24()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Uzbekistan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li")(55, "a", 688);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_177_Template_a_mouseenter_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r92.mouseEnter29()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Bulgaria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 623)(1, "ul", 584)(2, "li")(3, "a", 689);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bogomolets National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 690);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Bukovinian State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 691);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Danylo Halytsky Lviv National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 692);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Kharkiv International Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 693);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dnipropetrovsk State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 694);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ivano Frankivsk National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 695);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Taras Shevchenko National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 696);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Lugansk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 697);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Odessa National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 698);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ternopil National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 699);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Uzhhorod National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 700);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Zaporozhye State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 701);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Vinnitsa National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 702);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Donetsk National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 703);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Kharkiv National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 704);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Kyiv Medical University of uafm kiev");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 705);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Petro Mohyla Black Sea National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 706);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sumy State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 707);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Poltava State Medical & Dental University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 708);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "V.N.Karazin Kharkiv National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 632)(1, "ul", 584)(2, "li")(3, "a", 709);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Poznan University of Medical Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 710);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gdansk Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 711);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Jagiellonian University Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 712);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Medical University of Bialystok");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 713);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Medical University of Silesia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 714);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Medical University of Warsaw");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 715);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nicolaus Copernicus University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 716);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Warmia And Mazury University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 717);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Medical university of Lodz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 718);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Medical University of Lublin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 719);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Wroclaw Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 720);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "University of Georgia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 721);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Akaki Tsereteli State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 722);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Caucasus International University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 723);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "David Tvildiani Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 724);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Geomedi State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 725);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Tbilisi State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 726);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "David Agmashenebeli University of Georgia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 727);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Tbilisi Open Teaching university");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 728);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Georgian American University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 729);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "East European University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 730);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Batumi Shota Rustaveli State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 731);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "New Vision University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 732);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "European University Georgia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 733);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Ivane Javakhishvili Tbilisi State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 734);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tbilisi Medical University 'Hippocrates'");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 735);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Georgian National University SEU");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 736);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Petre Shotadze Tbilisi Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 737);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Tbilisi Public University Metekhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 738);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Ilia State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 739);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "BAU International University, Batumi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 740);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Grigol Robakidze University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 741);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "International School of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 742);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kyrgyz Russian Slavic University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 743);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Jalalabad State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 744);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Asian Medical Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 745);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kyrgyz State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 746);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Kyrgyz National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 747);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Osh State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 748);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Avicenna International Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 749);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Altai State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 750);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Smolensk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 751);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Crimean Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 752);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Lomonosov Moscow State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 753);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kazan State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 754);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Perm State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 755);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Pskov State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 756);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Penza State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 757);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Kuban State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 758);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Ivanovo State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 759);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Kemerovo State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 760);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Volgograd State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 761);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Dagestan State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 762);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Bashkir State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 763);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tambov State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 764);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Kursk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 765);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Irkutsk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 766);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Yaroslavl State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 767);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "North Ossetian State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 768);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Siberian State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 769);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Pavlov First Saint Petersburg State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 770);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Ryazan State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 771);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Privolzhsky Research Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li")(72, "a", 772);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Rostov State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li")(75, "a", 773);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Pacific State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 774);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Belgorod State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "a", 775);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Izhevsk State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "a", 776);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Chuvash State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 777);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Novosibirsk National Research State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li")(90, "a", 778);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Ogarev Mordovia State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li")(93, "a", 779);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Ulyanovsk State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li")(96, "a", 780);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Orel State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li")(99, "a", 781);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Astrakhan State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li")(102, "a", 782);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Russian National Research Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "a", 783);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Saratov State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li")(108, "a", 784);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Omsk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li")(111, "a", 785);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Far Eastern Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li")(114, "a", 786);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Orenburg State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li")(117, "a", 787);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "First Moscow State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li")(120, "a", 788);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "ST. Petersburg State Pediatric Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li")(123, "a", 789);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Peoples' Friendship University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li")(126, "a", 790);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Stavropol State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li")(129, "a", 791);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Kazan Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li")(132, "a", 792);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "North-Eastern Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li")(135, "a", 793);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Tver State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li")(138, "a", 794);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Voronezh State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li")(141, "a", 795);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Tyumen State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "li")(144, "a", 796);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Tula State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "li")(147, "a", 797);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Mari State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "li")(150, "a", 798);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Kabardino Balkarian State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li")(153, "a", 799);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Chechen State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li")(156, "a", 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Ural State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li")(159, "a", 801);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Northern State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li")(162, "a", 802);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Immanuel Kant Baltic Federal University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li")(165, "a", 803);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Samara State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 804);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kathmandu Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 805);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Patan Academy of Health Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 806);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tribhuvan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 807);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Birat Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 808);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Manipal College of Medical Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 809);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "B.P. Koirala Institute of Health Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 810);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Devdaha Medical College & Research Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 811);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bangladesh University of Professionals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 812);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shahjalal University of Science and Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 813);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Gonoshasthaya Samaj Vittik Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 814);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "University of Rajshahi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 815);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "University of Chittagong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 816);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Mainamoti Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 817);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Dr. Sirajul Islam Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 818);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Jahurul Islam Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 819);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "University of Dhaka");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 820);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Anwer Khan Modern Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 821);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "President Abdul Hamid Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 822);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Dhaka Community Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 823);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Jalalabad Ragib-Rabeya Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 824);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Rangpur Community Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 825);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Shahabuddin Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 826);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Kumudini Women's Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 827);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Prime Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 828);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Dhaka National Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 829);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Parkview Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 830);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "US-Bangla Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 831);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Dhaka Central International Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 832);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Enam Medical College and Hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 833);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Monno Medical College & Hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li")(72, "a", 834);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Ad-Din Women's Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li")(75, "a", 835);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Khwaja Yunus Ali Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 836);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Tairunnessa Memorial Medical College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 837);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AMA School of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 838);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Emilio Aguinaldo College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 839);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lyceum Northwestern University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 840);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "UV Gullas College of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 841);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Angeles University Foundation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 842);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Manila Central University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 843);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Southwestern University PHINMA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 844);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "St. Paul University Philippines");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 845);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Liceo College of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 846);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "AMEC Bicol Christian College of Medicine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 847);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Davao Medical School Foundation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 848);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Our Lady Of Fatima University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 849);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "University of Perpetual Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 850);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cebu Institute of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 851);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "University of Santo Tomas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 852);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "University of Northern Philippines");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 853);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Central Philippine University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 854);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Brokenshire College School of Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 855);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Qiqihar Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 856);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Yangzhou University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 857);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Xinjiang University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 858);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ningxia University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 859);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Xi'an Jiaotong University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 860);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Jilin Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 861);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Dalian Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 862);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Wenzhou Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 863);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Southern Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 864);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Guangxi Medical University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 865);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Chongqing Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 866);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Tianjin Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 867);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Capital Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 868);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Zhejiang Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 869);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Shandong University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 870);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Fudan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 871);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Nanjing Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 872);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Jiangsu University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 873);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Wuhan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 874);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Jinan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 875);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Sichuan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 876);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Belarusian State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 877);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gomel State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 878);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Grodno State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 879);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Vitebsk State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 880);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Karaganda State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 881);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kazakh National Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 882);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Semey State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 883);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "South Kazakhstan State Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 884);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "West Kazakhstan Marat Ospanov State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 885);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Kazakh Medical University of Continuing Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 886);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Astana Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 887);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Kazakh Russian Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 888);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Kokshetau State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 889);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "North Kazakhstan State University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 890);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Al-Farabi Kazakh National University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 891);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "UIB International Medical School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 892);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Armenian Medical Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 893);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "St. Tereza Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 894);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Yerevan State Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 895);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "University of Traditional Medicine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 896);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yerevan Haybusak University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 897);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Mkhitar Gosh Armenian-Russian International University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 898);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Andijan State Medical Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 899);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Bukhara State Medical Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 900);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Samarkand State Medical Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 901);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tashkent Medical Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 902);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Tashkent State Dental Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 646)(1, "ul", 584)(2, "li")(3, "a", 903);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Medical University of Verna");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 904);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sofia Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 905);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Plovdiv Medical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 906);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Trakia University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 907);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Medical University of Pleven");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_263_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 583)(1, "ul", 584)(2, "li")(3, "a", 675);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_263_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r93.mouseEnter5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 676);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_263_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r95.mouseEnter6()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "BBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 908);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBA in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 909);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBA in Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 910);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBA in Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 911);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBA in Ireland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 912);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBA in Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 913);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBA in Malta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 914);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "MBA in UK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 915);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "MBA in Russia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 916);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "MBA in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 917);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "MBA in New Zealand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 918);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "MBA in Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BBA in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_266_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 584)(2, "li")(3, "a", 588);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r96.mouseEnter7()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mumbai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 589);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r98.mouseEnter8()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 590);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r99.mouseEnter9()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 591);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r100.mouseEnter10()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Banglore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r101.mouseEnter11()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Chennai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_266_Template_a_mouseenter_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r102.mouseEnter11a()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Kolhapur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_267_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 919)(1, "ul", 40)(2, "li")(3, "a", 908);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBA in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 920);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NL Dalmia Institute of Management Studies and Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 921);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "K.J. Somaiya Institute of Management Studies and Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 922);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Guru Nanak Institute of Management Studies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 923);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Narsee Monjee Institute of Management Studies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 924);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Shailesh J Mehta School of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 925);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Athena School of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 523);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Dr. D.Y. Patil University school of management, Navi mumbai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_268_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 919)(1, "ul", 40)(2, "li")(3, "a", 926);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Balaji Institute of Modern Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Symbiosis Institute of Business Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 927);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "IMED'S Bharati Vidyapeeth Deemed University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 928);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Amity Global Business School, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 929);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kirloskar Institute of Advanced Management Studies, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 930);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SDM Institute of Management Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 931);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sinhgad Institute of Business Administration and Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 932);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Suryadatta Institute of Business Management and Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Symbiosis International University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "FLAME University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 526);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "MIT World Peace University, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 933);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Guru Gobind Singh Indraprastha University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Jamaia Millia Islamia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 934);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lal Bahadur Shastri Institute of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 919)(1, "ul", 40)(2, "li")(3, "a", 935);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Xavier Institute of Management and Entrepreneurship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 936);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "St. Josephs Institute of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Christ University, Banglore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_271_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 937);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "IFMR Graduate School of Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_272_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 524);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Shivaji University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_273_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 584)(2, "li")(3, "a", 588);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_273_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r103.mouseEnter12()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "UK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 589);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_273_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r105.mouseEnter13()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 590);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_273_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r106.mouseEnter14()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Russia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 591);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_273_Template_a_mouseenter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r107.mouseEnter15()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Poland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 938);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "University of Oxford");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 939);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University of Cambridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 940);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "University of Bristol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 941);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Durham University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 942);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "University of Warwick");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 943);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "University College London");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 944);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Lancaster University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 945);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "London School of Economics & Political Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 946);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Kyiv School of Economics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 947);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Lviv Business School of Ukrainian Catholic University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_276_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 919)(1, "ul", 40)(2, "li")(3, "a", 948);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Moscow School of Management SKOLKOVO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 949);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Moscow University Touro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 950);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lomonosov Moscow State University Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 951);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Russian Presidential Academy of National Economy and Public Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 952);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Warsaw School of Economics SGH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 953);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Collegium Da Vinci");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 954);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Warsaw University of Technology Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Polonia University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 916);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MBA in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 911);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "MBA in Ireland");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 912);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "MBA in Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 917);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "MBA in New Zealand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 918);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "MBA in Australia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 913);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MBA in Malta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_346_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 955)(1, "ul", 584)(2, "li")(3, "a", 585);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_346_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r108.mouseEnter5()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 586);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_346_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r110.mouseEnter6()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "MCA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_347_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 597)(1, "ul", 584)(2, "li")(3, "a", 956);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BCA in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_348_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 597)(1, "ul", 584)(2, "li")(3, "a", 957);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MCA in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_349_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 587)(1, "ul", 584)(2, "li")(3, "a", 588);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r111.mouseEnter7()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 589);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r113.mouseEnter8()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Banglore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 590);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r114.mouseEnter9()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Mumbai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 591);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r115.mouseEnter10()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r116.mouseEnter11()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Chennai");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r117.mouseEnter11a()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Haryana");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 592);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_349_Template_a_mouseenter_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r118.mouseEnter11b()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ghaziabad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_350_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 958)(1, "ul", 584)(2, "li")(3, "a", 959);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Brihan Maharashtra College Of Commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 960);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Symbiosis Institute of Computer Studies & Research, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 961);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Modern College of Arts Science And Commerce, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 962);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Bharati Vidyapeeth Institute of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 963);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dy Patil Arts, Commerce & Science College Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 964);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Modern College of Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 965);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Garware College of Commerce Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 966);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Bharati Vidyapeeth Institute of Management Entrepreneurship Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 967);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "D. Y. Patil Institute of Management and Research,Pimpri, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 968);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "MIT School of Mangagement, Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 969);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Sinhgad Institute of Management & Computer Apllication");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 970);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Presidency College, Bangalore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 971);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kristu Jayanti College, Bangalore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 972);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Oxford College of Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 973);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Acharya Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 974);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cambridge Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_352_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 975);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MET institute of computer Science");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 976);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Amity institute of Information Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_353_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 533);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Indraprastha Institute of Tesechnology and Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_354_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 547);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vellore Institute Of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_355_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 605)(1, "ul", 584)(2, "li")(3, "a", 977);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ganga Institute of Technology and Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_356_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 535);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "IMS, Ghaziabad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_427_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 978)(1, "div", 46)(2, "div", 979)(3, "ul", 584)(4, "li")(5, "a", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Aviation in Ukraine");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li")(8, "a", 558);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "National Aviation University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 559);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "National Aerospace University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 980)(14, "ul", 40)(15, "li")(16, "a", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ufa State Aviation Technical University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 561);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Moscow Aviation Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 562);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Samara State Aerospace University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} }
function NavComponent_div_428_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 981)(1, "div", 46)(2, "div", 980)(3, "ul", 584)(4, "li")(5, "a", 566);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Kharkiv National University of Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li")(8, "a", 567);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Lviv National Academy of Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 568);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kyiv National University of Culture and Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 980)(14, "ul", 40)(15, "li")(16, "a", 569);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Kharkiv State Academy of Design and Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 570);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Kharkiv State Academy of Culture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} }
function NavComponent_div_429_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 984);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Budapest Metropolitan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 985);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University of Debrecen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 986);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "University of Miskolc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 987);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Szent Istvan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Eotvos Lorand University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 988);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Budapest University of Technology and Economics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 989);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Corvinus University of Budapest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 990);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bocconi University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University of Trento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 991);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Rome Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 992);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "University of Padua");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 993);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "University of Pavia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 994);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "University of Bologna");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 995);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "University of Pisa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 996);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Estonian Academy of Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 997);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tallinn University of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 998);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tallinn Health Care College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 999);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Frankfurt School of Finance & Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University of Bonn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1001);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Humboldt University of Berlin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 1002);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "International School of Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 1003);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Munich Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 1004);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Esslingen University of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 1005);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "EU Business School Munich");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 1006);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Technische Hochschule Ingolstadt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 1007);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Reutlingen University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 1008);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "University of Mannheim");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 1009);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "GISMA Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 1010);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Berlin School of Business & Innovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 1011);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "University of Ulm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 1012);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "RWTH Aachen University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 1013);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Karlsruhe Institute of Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 1014);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "University of Stuttgart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Heidelberg University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 1015);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "University of Cologne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 1016);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Carl Benz School of Engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 1017);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "IU International University of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 1018);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Johannes Gutenberg University of Mainz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 1019);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Lazarski University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1020);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University of Economics in Katowice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1021);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vistula University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 1022);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "University of Bedfordshire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1023);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Aberystwyth University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1024);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Kingston University London");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 1025);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Leeds Beckett University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 1026);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "New College Durham");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 1027);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "The University of Law");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 1028);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "University of Sussex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 1029);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "BPP University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 1030);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "University of Strathclyde");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 1031);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Keele University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 1032);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Bath Spa University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 1033);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "University of Surrey");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 1034);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "London Metropolitan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 1035);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Glasgow Caledonian University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "University of Suffolk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 1036);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "University of South Wales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 1037);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Henley Business School");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Heriot Watt University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li")(57, "a", 1038);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "University of Lincoln");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 1039);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "University of Exeter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 1040);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Belfast Metropolitan College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 1041);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "University of Wolverhampton");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 1042);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Royal College of Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li")(72, "a", 1043);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "University of St Andrews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li")(75, "a", 1044);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Brunel University London");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Loughborough University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "a", 1045);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "University of Bradford");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "a", 1046);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Kings College London");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 1047);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "University of Gloucestershire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li")(90, "a", 1048);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Liverpool Hope University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li")(93, "a", 1049);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Cardiff Metropolitan University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li")(96, "a", 1050);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "City University of London");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li")(99, "a", 1051);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "University for the Creative Arts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li")(102, "a", 1052);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "The University of Edinburgh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li")(105, "a", 1053);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "University of Manchester");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li")(108, "a", 1054);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "University of Salford");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li")(111, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "York St John University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li")(114, "a", 1056);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Canterbury Christ Church University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li")(117, "a", 1057);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Middlesex University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 1058);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "University of Alberta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1059);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "University Canada West");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "University Of Windsor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 1061);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "University Of Saskatchewan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 1062);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "University Of Ottawa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 1063);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Simon Fraser University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 1064);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Camosun College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 1065);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Carleton University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 1066);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "McMaster University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li")(30, "a", 1067);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sheridan College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 1068);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "University of Regina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 1069);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Ryerson University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li")(39, "a", 1070);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Fanshawe College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li")(42, "a", 1071);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Lambton College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 1072);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Dalhousie University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 1073);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Queens University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 1074);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "RISEBA University of Business, Arts and Technology");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1075);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Daugavpils University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1076);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Transport and Telecommunication Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 1077);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "University of Latvia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 1078);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Baltic International Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 673)(1, "ul", 40)(2, "li")(3, "a", 1079);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Klaipeda University");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ISM University of Management and Economics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1080);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vilniaus Kolegija University of Applied Sciences");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 674)(1, "ul", 40)(2, "li")(3, "a", 1081);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Asian Institute Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li")(6, "a", 1082);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Washington SyCip Graduate School of Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 1083);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Ramon V. del Rosario College of Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
function NavComponent_div_429_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 982)(1, "div", 46)(2, "div", 983)(3, "ul", 40)(4, "li")(5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r129.mouseEnter12()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hungary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li")(9, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r131.mouseEnter13()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Italy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r132.mouseEnter14()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Estonia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r133.mouseEnter15()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Germany ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r134.mouseEnter16()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Poland ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r135.mouseEnter17()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "UK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li")(29, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r136.mouseEnter18()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Canada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r137.mouseEnter19()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Latvia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r138.mouseEnter20()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Lithuania ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_div_429_Template_a_mouseenter_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r139.mouseEnter21()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Phillippines ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, NavComponent_div_429_div_44_Template, 23, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, NavComponent_div_429_div_45_Template, 23, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, NavComponent_div_429_div_46_Template, 11, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, NavComponent_div_429_div_47_Template, 65, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, NavComponent_div_429_div_48_Template, 11, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, NavComponent_div_429_div_49_Template, 119, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, NavComponent_div_429_div_50_Template, 50, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, NavComponent_div_429_div_51_Template, 17, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, NavComponent_div_429_div_52_Template, 11, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, NavComponent_div_429_div_53_Template, 11, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv12 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv13 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv14 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv15 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv16 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv17 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv18 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv19 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv20 == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r63.showdiv21 == true);
} }
function NavComponent_div_2093_Template(rf, ctx) { if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1084);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_div_2093_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r141); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r140.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(router) {
        this.router = router;
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
        this.navbarfixed = false;
        this.navbarlogo = false;
        this.router.events.subscribe((event) => {
            // filter `NavigationEnd` events
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                // get current route without leading slash `/`
                const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
                const currentRoute = (eventUrl || []).join("");
                // set bgClass property with the value of the current route
                this.bgClass = currentRoute;
            }
        });
    }
    ngOnInit() {
        this.zeynep = $(".zeynep").zeynep({
            load: function () {
                console.log("zeynepjs menu is successfully loaded");
            },
        });
        this.zeynep.on("closing", function () {
            console.log("guys, the side menu is closing");
        });
    }
    getHeaderStyle() {
        debugger;
        console.log(this.router.url);
        if (this.router.url.includes("home") || this.router.url.includes("/")) {
            return "menuTextTransparent";
        }
        else {
            return "menuTextblue";
        }
    }
    mouseEnter() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter2() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
        this.showdiv29 = false;
    }
    mouseEnter3() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter4() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = true;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter5() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = true;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter6() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = true;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter7() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = true;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter8() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = true;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter9() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = true;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter10() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = true;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter11() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = true;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter11a() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = true;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter11b() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = true;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter12() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = true;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter13() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = true;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter14() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = true;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter15() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = true;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter16() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = true;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter17() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = true;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter18() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = true;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter19() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = true;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter20() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = true;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter21() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = true;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter22() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = true;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter23() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = true;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter24() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = true;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter25() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = true;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter26() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = true;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter27() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = true;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseEnter28() {
        this.showdiv1 = true;
        this.showdiv2 = false;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = true;
        this.showdiv29 = false;
    }
    mouseEnter29() {
        this.showdiv1 = false;
        this.showdiv2 = false;
        this.showdiv3 = true;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = true;
    }
    mouseLeave() {
        this.showdiv1 = false;
        this.showdiv2 = true;
        this.showdiv3 = false;
        this.showdiv4 = false;
        this.showdiv5 = false;
        this.showdiv6 = false;
        this.showdiv7 = false;
        this.showdiv8 = false;
        this.showdiv9 = false;
        this.showdiv10 = false;
        this.showdiv11 = false;
        this.showdiv11a = false;
        this.showdiv11b = false;
        this.showdiv12 = false;
        this.showdiv13 = false;
        this.showdiv14 = false;
        this.showdiv15 = false;
        this.showdiv16 = false;
        this.showdiv17 = false;
        this.showdiv18 = false;
        this.showdiv19 = false;
        this.showdiv20 = false;
        this.showdiv21 = false;
        this.showdiv22 = false;
        this.showdiv23 = false;
        this.showdiv24 = false;
        this.showdiv25 = false;
        this.showdiv26 = false;
        this.showdiv27 = false;
        this.showdiv28 = false;
        this.showdiv29 = false;
    }
    mouseLeave3(event) { }
    open() {
        this.zeynep.open();
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
        this.checkoverlay = true;
    }
    close() {
        this.zeynep.close();
        document.body.style.overflow = 'unset';
        this.checkoverlay = false;
    }
    getclass(data) { }
    onscroll() {
        if (window.scrollY > 110) {
            this.navbarfixed = true;
            this.navbarlogo = true;
        }
        else {
            this.navbarfixed = false;
            this.navbarlogo = false;
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], viewQuery: function NavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toggleButton = _t.first);
    } }, hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() { return ctx.onscroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 2094, vars: 68, consts: [[3, "ngClass", "scroll"], [1, "container-fluid", "navigation"], [1, "nav1"], ["routerLink", "/home", "href", "/home", "routerLinkActive", "active", 3, "click"], ["routerLink", "/course", "href", "/course", "routerLinkActive", "active", 3, "click"], ["routerLink", "/university-filter", "href", "/university-filter"], ["routerLink", "/college", "href", "/college"], ["routerLink", "/exams", "routerLinkActive", "active", 3, "click"], ["routerLink", "/news", "href", "/news", "routerLinkActive", "active", 3, "click"], ["routerLink", "/blog", "href", "/blog", "routerLinkActive", "active", 3, "click"], [1, "gallery"], ["routerLinkActive", "active"], [1, "fa", "fa-angle-down"], [1, "gallery-ul"], ["routerLink", "/image-gallery", "routerLinkActive", "active", 3, "click"], ["routerLink", "/video-gallery", "routerLinkActive", "active", 3, "click"], ["routerLink", "/faq", "routerLinkActive", "active", 3, "click"], [1, "navLogin"], ["href", "#", 1, "nav1DownloadBtn"], ["href", "#"], ["href", ""], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], [3, "ngClass"], ["routerLink", "/home"], ["src", "assets/img/new_logo_color.png", "width", "220px", "height", "auto", 1, "syuLogo", "college-page-logo"], ["src", "assets/img/Home Page/7. Footer/SYU-Logo.png", "width", "220px", "height", "auto", 1, "syuLogo"], [1, "wrapper"], ["type", "radio", "name", "slider", "id", "menu-btn"], ["type", "radio", "name", "slider", "id", "close-btn"], [1, "nav-links"], ["for", "close-btn", 1, "btn", "close-btn"], [1, "fa", "fa-times"], ["routerLink", "/colleges", 1, "desktop-item", 3, "mouseleave"], ["type", "checkbox", "id", "showMega"], ["for", "showMega", 1, "mobile-item"], [1, "mega-box"], [1, "col-lg-12", "row", "scroll"], [1, "col-lg-3", "col-md-3", "content"], ["id", "menubox", 1, "menu"], [1, "col-lg-12", "col-sm-12"], [1, "mega-links"], ["id", "menuboxli", "target", "1", 1, "First", 3, "mouseenter"], [1, "fa", "fa-angle-right", "fa-1x", "menuFaFaAngle"], ["id", "menuboxli", "target", "2", 1, "First", 3, "mouseenter"], ["id", "menuboxli", "target", "3", 1, "First", 3, "mouseenter"], [1, "col-lg-9", "col-md-9", "anim"], [1, "row"], ["class", " col-lg-3 col-sm- 12 tar target active1", "id", "div1", 4, "ngIf"], ["class", " col-lg-3 col-sm- 12 tar target active1", "id", "div2", 4, "ngIf"], ["class", "col-lg-3 col-sm- 12 tar target", "id", "div3", 4, "ngIf"], ["class", " col-lg-3 col-sm- 12 tar target active1", "id", "div5", 4, "ngIf"], ["class", " col-lg-3 col-sm- 12 tar target active1", "id", "div6", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div7", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div8", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div9", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div10", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div11", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div12", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div13", 4, "ngIf"], ["class", " col-lg-6 col-sm- 12 tar target active1", "id", "div14", 4, "ngIf"], [1, "clearfix"], [1, "col-lg-12", "row", "featureSection"], [1, "col-lg-12", "col-md-12", 2, "max-height", "40px"], [1, "featureHeading"], [1, "col-lg-12", "featureCardBoxPadding"], [1, "col-lg-4", "featureCardBox"], [1, "col-lg-2"], ["data-src", "https://images.collegedunia.com/public/college_data/images/logos/col30730.png?tr=w-35,h-35,c-force", "alt", "", "src", "https://images.collegedunia.com/public/college_data/images/logos/col30730.png?tr=w-35,h-35,c-force", 1, "cd-bottom-img", "lazyloaded"], [1, "col-lg-10"], [1, "featureParentHead"], ["href", "/college/dr-dy-patil-institute-of-technology-dypit-pimpri-pune"], [1, "col-lg-12", "featureSubHeadBox"], [1, "featureSubHead"], ["data-src", "https://images.collegedunia.com/public/college_data/images/logos/1501584806Capture1.jpg?tr=w-35,h-35,c-force", "alt", "", "src", "https://images.collegedunia.com/public/college_data/images/logos/1501584806Capture1.jpg?tr=w-35,h-35,c-force", 1, "cd-bottom-img", "lazyloaded"], ["href", "/college/bharati-vidyapeeth-college-of-engineering-bvcoe-pune"], ["data-src", "https://images.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?tr=w-35,h-35,c-force", "alt", "", "src", "https://images.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?tr=w-35,h-35,c-force", 1, "cd-bottom-img", "lazyloaded"], ["href", "/college/walchand-institute-of-technology-solapur"], ["class", " col-lg-6 col-sm- 12 tar target", "id", "div2", 4, "ngIf"], ["class", " col-lg-5 col-sm- 12 tar target", "id", "div2", 4, "ngIf"], ["href", "/college/bharati-vidyapeeth-medical-college-pune"], ["href", "/college/all-india-institute-of-medical-sciences-aiims-new-delhi"], ["href", "/college/kj-somaiya-medical-college-research-centre-kjsmc-mumbai"], ["class", " col-lg-7 col-sm- 12 tar target", "id", "div2", 4, "ngIf"], ["href", "/university/christ-university-bangalore"], ["href", "/university/jamia-millia-islamia-delhi"], ["href", "/college/symbiosis-institute-of-business-management-sibm-pune"], ["class", " col-lg-5 col-sm- 12 tar target active1", "id", "div1", 4, "ngIf"], ["class", " col-lg-8 col-sm- 12 tar target active1", "id", "div7", 4, "ngIf"], ["href", "/college/modern-college-of-arts-science-and-commerce-pune"], ["href", "/college/brihan-maharashtra-college-of-commerce-bmcc-pune"], ["href", "/college/mes-garware-college-of-commerce-pune"], ["class", " col-lg-12 col-sm- 12 tar target active1", "id", "div1", 4, "ngIf"], ["class", " col-lg-12 col-sm- 12 tar target", "id", "div2", 4, "ngIf"], ["class", "col-lg-12 col-sm- 12 tar target", "id", "div3", 4, "ngIf"], ["href", "/college/vishwakarma-institute-of-technology-vit-pune"], ["href", "/college/mit-college-of-engineering-pune"], ["href", "/university/symbiosis-international-university-siu-pune"], ["for", "menu-btn", 1, "btn", "menu-btn"], [1, "fa", "fa-bars"], [1, "zeynep", "right"], [1, "row", "loginMobBox"], [1, "mt-3", "MobLoginBoxWidthPNG"], [1, "loginMobIcon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "39", "height", "39", "viewBox", "0 0 39 39", 1, "loginMobSvg"], ["fill", "none", "stroke", "#fff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "20", "stroke-width", "2", "d", "M38 19.5C38 29.717 29.717 38 19.5 38S1 29.717 1 19.5 9.283 1 19.5 1 38 9.283 38 19.5z"], ["fill", "none", "stroke", "#fff", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "20", "stroke-width", "2", "d", "M27.09 28.038v0-1.897a3.795 3.795 0 00-3.795-3.795h-7.59a3.795 3.795 0 00-3.795 3.795v1.897M23.295 13.333a3.795 3.795 0 11-7.59 0 3.795 3.795 0 017.59 0z"], [1, "mt-3", "MobLoginBoxWidthText"], [1, "text-white", "pl-2", "text-capitalize", "font-weight-semi", "loginSignupMobText"], [1, "col-md-12", "row", "MobHeadingStrip"], [1, ""], [1, "has-submenu"], ["href", "#", "data-submenu", "stores"], ["id", "arrow", 1, "fa", "fa-angle-double-right", "float-right", "mt-1"], ["id", "stores", 1, "submenu"], [1, "submenu-header"], ["href", "#", "data-submenu-close", "stores"], [1, "fa", "fa-angle-double-left", "mr-1"], ["href", "#", "data-submenu", "engineering_college_by_courses"], [1, "fa", "fa-angle-double-right", "float-right", "mt-1"], ["id", "engineering_college_by_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_by_courses"], ["href", "#", "data-submenu", "engineering_courses_india"], ["id", "engineering_courses_india", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_courses_india"], ["href", "#", "data-submenu", "engineering_courses_india_"], ["href", "#", "data-submenu", "engineering_courses_abroad"], ["id", "engineering_courses_abroad", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_courses_abroad"], ["href", "#/course/engineering-in-poland", "data-submenu", "engineering_courses_abroad"], ["href", "#/course/engineering-in-ukraine", "data-submenu", "engineering_courses_abroad"], ["href", "#/course/engineering-in-russia", "data-submenu", "engineering_courses_abroad"], ["href", "#/course/engineering-in-ireland", "data-submenu", "engineering_courses_abroad"], ["href", "#/course/engineering-in-germany", "data-submenu", "engineering_courses_abroad"], ["href", "#", "data-submenu", "engineering_top_courses"], ["id", "engineering_top_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_top_courses"], ["href", "#", "data-submenu", "engineering_college_pune"], ["href", "#", "data-submenu", "engineering_college_solapur"], ["href", "#", "data-submenu", "engineering_college_kerela"], ["href", "#", "data-submenu", "engineering_college_rajasthan"], ["href", "#", "data-submenu", "engineering_college_banglore"], ["id", "engineering_college_pune", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_pune"], ["href", "/college/pune-institute-of-computer-technology-pict-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/mit-college-of-engineering-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/vishwakarma-institute-of-technology-vit-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/dr-dy-patil-institute-of-technology-dypit-pimpri-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/sinhgad-college-of-engineering-scoe-vadgaon-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/bharati-vidyapeeth-college-of-engineering-bvcoe-pune", "data-submenu", "engineering_college_pune"], ["href", "/college/symbiosis-institute-of-technology-sit-pune", "data-submenu", "engineering_college_pune"], ["id", "engineering_college_solapur", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_solapur"], ["href", "/college/walchand-institute-of-technology-solapur", "data-submenu", "engineering_college_solapur"], ["id", "engineering_college_kerela", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_kerela"], ["href", "/college/scms-school-of-engineering-and-technology-kerala", "data-submenu", "engineering_college_kerela"], ["id", "engineering_college_rajasthan", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_rajasthan"], ["href", "/college/birla-institute-of-technology-and-science-bits-pilani", "data-submenu", "engineering_college_rajasthan"], ["id", "engineering_college_banglore", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_banglore"], ["href", "/college/mvj-college-of-engineering-bangalore", "data-submenu", "engineering_college_banglore"], ["href", "/college/ramaiah-institute-of-technology-rit-bangalore", "data-submenu", "engineering_college_banglore"], ["href", "/college/bms-college-of-engineering-bangalore", "data-submenu", "engineering_college_banglore"], ["href", "#", "data-submenu", "engineering_college_by_city"], ["id", "engineering_college_by_city", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_by_city"], ["href", "#", "data-submenu", "engineering_college_poland"], ["href", "#", "data-submenu", "engineering_college_ukraine"], ["href", "#", "data-submenu", "engineering_college_russia"], ["id", "engineering_college_poland", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_poland"], ["href", "/university/poznan-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/gdansk-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/agh-university-of-science-and-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/warsaw-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/silesian-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/cracow-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/lodz-university-of-technology", "data-submenu", "engineering_college_poland"], ["href", "/university/wroclaw-university-of-technology", "data-submenu", "engineering_college_poland"], ["id", "engineering_college_ukraine", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_ukraine"], ["href", "/university/kyiv-polytechnic-institute", "data-submenu", "engineering_college_ukraine"], ["href", "/university/kharkiv-national-university-of-radio-electronics", "data-submenu", "engineering_college_ukraine"], ["href", "/university/cherkasy-state-technological-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/national-metallurgical-academy-of-ukraine", "data-submenu", "engineering_college_ukraine"], ["href", "/university/ukrainian-state-chemical-technology-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/ivano-frankivsk-national-university-of-oil-and-gas", "data-submenu", "engineering_college_ukraine"], ["href", "/university/donbass-state-engineering-academy", "data-submenu", "engineering_college_ukraine"], ["href", "/university/ternopil-national-technical-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/zaporizhzhia-state-engineering-academy", "data-submenu", "engineering_college_ukraine"], ["href", "/university/kremenchuk-state-technical-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/kherson-national-technical-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/vinnytsia-national-technical-university", "data-submenu", "engineering_college_ukraine"], ["href", "/university/lviv-polytechnic-national-university", "data-submenu", "engineering_college_ukraine"], ["id", "engineering_college_russia", 1, "submenu"], ["href", "#", "data-submenu-close", "engineering_college_russia"], ["href", "/university/kalmyk-state-university", "data-submenu", "engineering_college_russia"], ["href", "/university/north-caucasus-federal-university", "data-submenu", "engineering_college_russia"], ["href", "/university/pskov-state-polytechnic-institute", "data-submenu", "engineering_college_russia"], ["href", "/university/moscow-institute-of-physics-and-technology", "data-submenu", "engineering_college_russia"], ["href", "/university/perm-state-agro-technological-university", "data-submenu", "engineering_college_russia"], ["href", "/university/bauman-moscow-state-technical-university", "data-submenu", "engineering_college_russia"], ["href", "/university/moscow-state-university-of-fine-chemical-technologies", "data-submenu", "engineering_college_russia"], ["href", "/university/national-university-of-science-and-technology-misis", "data-submenu", "engineering_college_russia"], ["href", "/university/south-ural-state-university", "data-submenu", "engineering_college_russia"], ["href", "/university/irkutsk-national-research-technical-university", "data-submenu", "engineering_college_russia"], ["href", "/university/itmo-university", "data-submenu", "engineering_college_russia"], ["href", "/university/novosibirsk-state-university", "data-submenu", "engineering_college_russia"], ["href", "/university/moscow-power-engineering-institute", "data-submenu", "engineering_college_russia"], ["href", "/university/tomsk-polytechnic-university", "data-submenu", "engineering_college_russia"], ["href", "/university/moscow-state-university-of-civil-engineering", "data-submenu", "engineering_college_russia"], ["href", "/university/nizhny-novgorod-state-technical-university", "data-submenu", "engineering_college_russia"], ["href", "/university/saint-petersburg-state-institute-of-technology", "data-submenu", "engineering_college_russia"], ["href", "/university/peter-great-st-petersburg-polytechnic-university", "data-submenu", "engineering_college_russia"], ["href", "#", "data-submenu", "mba_submenu"], ["id", "mba_submenu", 1, "submenu"], ["href", "#", "data-submenu-close", "mba_submenu"], ["href", "#", "data-submenu", "mba_college_by_courses"], ["id", "mba_college_by_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "mba_college_by_courses"], ["href", "#/course/mbbs-in-ukraine"], ["href", "#/course/mbbs-in-belarus"], ["href", "#/course/mbbs-in-usa"], ["href", "#/course/mbbs-in-uk"], ["href", "#/course/mbbs-in-china"], ["href", "#/course/mbbs-in-new-zealand"], ["href", "#/course/mbbs-in-australia"], ["href", "#/course/mbbs-in-bulgaria"], ["href", "#/course/mbbs-in-romania"], ["href", "#/course/mbbs-in-germany"], ["href", "#/course/mbbs-in-philippines"], ["href", "#/course/mbbs-in-ireland"], ["href", "#/course/mbbs"], ["href", "#/course/mbbs-abroad"], ["href", "#/course/mbbs-in-malta"], ["href", "#/course/mbbs-in-italy"], ["href", "#/course/mbbs-in-czech-republic"], ["href", "#/course/mbbs-in-hungary"], ["href", "#/course/mbbs-in-russia"], ["href", "#/course/mbbs-in-georgia"], ["href", "#/course/mbbs-in-nepal"], ["href", "#/course/mbbs-in-poland"], ["href", "#/course/mbbs-in-europe"], ["href", "#/course/mbbs-in-lithuania"], ["href", "#/course/mbbs-in-france"], ["href", "#/course/mbbs-in-austria"], ["href", "#", "data-submenu", "mba_top_courses"], ["id", "mba_top_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "mba_top_courses"], ["href", "/college/armed-forces-medical-college-afmc-pune"], ["href", "/university/bharati-vidyapeeth-deemed-university-pune"], ["href", "/college/dr-dy-patil-medical-college-kolhapur"], ["href", "/college/indian-institute-of-medical-science-and-research-iimsr-jalna"], ["href", "/college/dr-dy-patil-medical-college-pune"], ["href", "/college/terna-medical-college-navi-mumbai"], ["href", "/college/krishna-institute-of-medical-sciences-kims-karad"], ["href", "/college/dr-dy-patil-medical-college-hospital-navi-mumbai"], ["href", "#", "data-submenu", "mba_college_by_city"], ["id", "mba_college_by_city", 1, "submenu"], ["href", "#", "data-submenu-close", "mba_college_by_city"], ["href", "#", "data-submenu", "medical_college_ukraine"], ["href", "#", "data-submenu", "medical_college_poland"], ["href", "#", "data-submenu", "medical_college_georgia"], ["href", "#", "data-submenu", "medical_college_kyrgyzstan"], ["href", "#", "data-submenu", "medical_college_russia"], ["href", "#", "data-submenu", "medical_college_nepal"], ["href", "#", "data-submenu", "medical_college_bangladesh"], ["href", "#", "data-submenu", "medical_college_philippines"], ["href", "#", "data-submenu", "medical_college_china"], ["href", "#", "data-submenu", "medical_college_belarus"], ["href", "#", "data-submenu", "medical_college_kazakhstan"], ["href", "#", "data-submenu", "medical_college_armenia"], ["href", "#", "data-submenu", "medical_college_uzbekistan"], ["id", "medical_college_ukraine", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_ukraine"], ["href", "/university/bogomolets-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/bukovinian-state-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/danylo-halytsky-lviv-state-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/kharkiv-international-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/dnipropetrovsk-state-medical-academy", "data-submenu", "medical_college_ukraine"], ["href", "/university/ivano-frankivsk-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/taras-shevchenko-national-university-of-kyiv", "data-submenu", "medical_college_ukraine"], ["href", "/university/lugansk-state-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/odessa-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/ternopil-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/uzhhorod-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/zaporozhye-state-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/vinnitsa-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/donetsk-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/kharkiv-national-medical-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/kyiv-medical-university-of-uafm-kiev", "data-submenu", "medical_college_ukraine"], ["href", "/university/petro-mohyla-black-sea-national-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/sumy-state-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/poltava-state-medical-and-dental-university", "data-submenu", "medical_college_ukraine"], ["href", "/university/v-n-karazin-kharkiv-national-university", "data-submenu", "medical_college_ukraine"], ["id", "medical_college_poland", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_poland"], ["href", "/university/poznan-university-of-medical-science", "data-submenu", "medical_college_poland"], ["href", "/university/gdansk-medical-university", "data-submenu", "medical_college_poland"], ["href", "/university/jagiellonian-university-medical-college", "data-submenu", "medical_college_poland"], ["href", "/university/medical-university-of-bialystok", "data-submenu", "medical_college_poland"], ["href", "/university/medical-university-of-silesia", "data-submenu", "medical_college_poland"], ["href", "/university/medical-university-of-warsaw", "data-submenu", "medical_college_poland"], ["href", "/university/nicolaus-copernicus-university", "data-submenu", "medical_college_poland"], ["href", "/university/university-of-warmia-and-mazury", "data-submenu", "medical_college_poland"], ["href", "/university/medical-university-of-lodz", "data-submenu", "medical_college_poland"], ["href", "/university/medical-university-of-lublin", "data-submenu", "medical_college_poland"], ["href", "/university/wroclaw-medical-university", "data-submenu", "medical_college_poland"], ["id", "medical_college_georgia", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_georgia"], ["href", "/university/university-of-georgia-tbilisi", "data-submenu", "medical_college_georgia"], ["href", "/university/akaki-tsereteli-state-university", "data-submenu", "medical_college_georgia"], ["href", "/university/caucasus-international-university", "data-submenu", "medical_college_georgia"], ["href", "/university/david-tvildiani-medical-university", "data-submenu", "medical_college_georgia"], ["href", "/university/geomedi-state-university", "data-submenu", "medical_college_georgia"], ["href", "/university/tbilisi-state-medical-university", "data-submenu", "medical_college_georgia"], ["href", "/university/david-agmashenebeli-university-of-georgia", "data-submenu", "medical_college_georgia"], ["href", "/university/tbilisi-open-teaching-university", "data-submenu", "medical_college_georgia"], ["href", "/university/georgian-american-university", "data-submenu", "medical_college_georgia"], ["href", "/university/east-european-university", "data-submenu", "medical_college_georgia"], ["href", "/university/batumi-shota-rustaveli-state-university", "data-submenu", "medical_college_georgia"], ["href", "/university/new-vision-university", "data-submenu", "medical_college_georgia"], ["href", "/university/european-university-georgia", "data-submenu", "medical_college_georgia"], ["href", "/university/ivane-javakhishvili-tbilisi-state-university", "data-submenu", "medical_college_georgia"], ["href", "/university/tbilisi-medical-university-hippocrates", "data-submenu", "medical_college_georgia"], ["href", "/university/georgian-national-university-seu", "data-submenu", "medical_college_georgia"], ["href", "/university/petre-shotadze-tbilisi-medical-academy", "data-submenu", "medical_college_georgia"], ["href", "/university/tbilisi-public-university-metekhi", "data-submenu", "medical_college_georgia"], ["href", "/university/ilia-state-university", "data-submenu", "medical_college_georgia"], ["href", "/university/bau-international-university-batumi", "data-submenu", "medical_college_georgia"], ["id", "medical_college_kyrgyzstan", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_kyrgyzstan"], ["href", "/university/international-higher-school-of-medicine", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/kyrgyz-russian-slavic-university", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/jalalabad-state-university", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/asian-medical-institute", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/kyrgyz-state-medical-academy", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/kyrgyz-national-university", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/osh-state-university", "data-submenu", "medical_college_kyrgyzstan"], ["href", "/university/avicenna-international-medical-university", "data-submenu", "medical_college_kyrgyzstan"], ["id", "medical_college_russia", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_russia"], ["href", "/university/altai-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/smolensk-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/crimean-federal-university", "data-submenu", "medical_college_russia"], ["href", "/university/lomonosov-moscow-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/kazan-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/perm-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/pskov-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/penza-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/kuban-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/ivanovo-state-medical-academy", "data-submenu", "medical_college_russia"], ["href", "/university/kemerovo-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/volgograd-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/dagestan-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/bashkir-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/tambov-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/kursk-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/irkutsk-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/yaroslavl-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/north-ossetian-state-medical-academy", "data-submenu", "medical_college_russia"], ["href", "/university/siberian-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/pavlov-first-saint-petersburg-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/ryazan-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/privolzhsky-research-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/rostov-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/pacific-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/belgorod-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/izhevsk-state-medical-academy", "data-submenu", "medical_college_russia"], ["href", "/university/chuvash-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/novosibirsk-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/ogarev-mordovia-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/ulyanovsk-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/orel-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/astrakhan-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/russian-national-research-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/saratov-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/omsk-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/far-eastern-federal-university", "data-submenu", "medical_college_russia"], ["href", "/university/orenburg-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/first-moscow-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/st-petersburg-state-pediatric-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/peoples-friendship-university", "data-submenu", "medical_college_russia"], ["href", "/university/stavropol-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/kazan-federal-university", "data-submenu", "medical_college_russia"], ["href", "/university/north-eastern-federal-university", "data-submenu", "medical_college_russia"], ["href", "/university/tver-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/voronezh-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/tyumen-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/tula-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/mari-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/kabardino-balkarian-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/chechen-state-university", "data-submenu", "medical_college_russia"], ["href", "/university/ural-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/northern-state-medical-university", "data-submenu", "medical_college_russia"], ["href", "/university/immanuel-kant-baltic-federal-university", "data-submenu", "medical_college_russia"], ["href", "/university/samara-state-medical-university", "data-submenu", "medical_college_russia"], ["id", "medical_college_nepal", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_nepal"], ["href", "/university/kathmandu-medical-college", "data-submenu", "medical_college_nepal"], ["href", "/university/patan-academy-of-health-sciences", "data-submenu", "medical_college_nepal"], ["href", "/university/tribhuvan-university", "data-submenu", "medical_college_nepal"], ["href", "/university/birat-medical-college", "data-submenu", "medical_college_nepal"], ["href", "/university/manipal-college-of-medical-sciences", "data-submenu", "medical_college_nepal"], ["href", "/university/b-p-koirala-institute-of-health-sciences", "data-submenu", "medical_college_nepal"], ["href", "/university/devdaha-medical-college-and-research-institute", "data-submenu", "medical_college_nepal"], ["id", "medical_college_bangladesh", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_bangladesh"], ["href", "/university/bangladesh-university-of-professionals", "data-submenu", "medical_college_bangladesh"], ["href", "/university/shahjalal-university-of-science-and-technology", "data-submenu", "medical_college_bangladesh"], ["href", "/university/gonoshasthaya-samaj-vittik-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/university-of-rajshahi", "data-submenu", "medical_college_bangladesh"], ["href", "/university/university-of-chittagong", "data-submenu", "medical_college_bangladesh"], ["href", "/university/mainamoti-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/dr-sirajul-islam-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/jahurul-islam-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/university-of-dhaka", "data-submenu", "medical_college_bangladesh"], ["href", "/university/anwer-khan-modern-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/president-abdul-hamid-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/dhaka-community-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/jalalabad-ragib-rabeya-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/rangpur-community-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/shahabuddin-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/kumudini-womens-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/prime-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/dhaka-national-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/parkview-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/us-bangla-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/dhaka-central-international-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/enam-medical-college-and-hospital", "data-submenu", "medical_college_bangladesh"], ["href", "/university/monno-medical-college-and-hospital", "data-submenu", "medical_college_bangladesh"], ["href", "/university/ad-din-womens-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/khwaja-yunus-ali-medical-college", "data-submenu", "medical_college_bangladesh"], ["href", "/university/tairunnessa-memorial-medical-college", "data-submenu", "medical_college_bangladesh"], ["id", "medical_college_philippines", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_philippines"], ["href", "/university/ama-school-of-medicine", "data-submenu", "medical_college_philippines"], ["href", "/university/emilio-aguinaldo-college-manila", "data-submenu", "medical_college_philippines"], ["href", "/university/lyceum-northwestern-university", "data-submenu", "medical_college_philippines"], ["href", "/university/uv-gullas-college-of-medicine", "data-submenu", "medical_college_philippines"], ["href", "/university/angeles-university-foundation", "data-submenu", "medical_college_philippines"], ["href", "/university/manila-central-university", "data-submenu", "medical_college_philippines"], ["href", "/university/southwestern-university-phinma", "data-submenu", "medical_college_philippines"], ["href", "/university/st-paul-university-philippines", "data-submenu", "medical_college_philippines"], ["href", "/university/liceo-college-of-medicine", "data-submenu", "medical_college_philippines"], ["href", "/university/amec-bicol-christian-college-of-medicine", "data-submenu", "medical_college_philippines"], ["href", "/university/davao-medical-school-foundation", "data-submenu", "medical_college_philippines"], ["href", "/university/our-lady-of-fatima-university", "data-submenu", "medical_college_philippines"], ["href", "/university/university-of-perpetual-help", "data-submenu", "medical_college_philippines"], ["href", "/university/cebu-institute-of-medicine", "data-submenu", "medical_college_philippines"], ["href", "/university/university-of-santo-tomas", "data-submenu", "medical_college_philippines"], ["href", "/university/university-of-northern-philippines", "data-submenu", "medical_college_philippines"], ["href", "/university/central-philippine-university", "data-submenu", "medical_college_philippines"], ["href", "/university/brokenshire-college-school-of-medicine", "data-submenu", "medical_college_philippines"], ["id", "medical_college_china", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_china"], ["href", "/university/qiqihar-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/yangzhou-university", "data-submenu", "medical_college_china"], ["href", "/university/xinjiang-university", "data-submenu", "medical_college_china"], ["href", "/university/ningxia-university", "data-submenu", "medical_college_china"], ["href", "/university/xian-jiaotong-university", "data-submenu", "medical_college_china"], ["href", "/university/jilin-university", "data-submenu", "medical_college_china"], ["href", "/university/dalian-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/wenzhou-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/southern-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/guangxi-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/chongqing-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/tianjin-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/capital-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/zhejiang-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/shandong-university", "data-submenu", "medical_college_china"], ["href", "/university/fudan-university", "data-submenu", "medical_college_china"], ["href", "/university/nanjing-medical-university", "data-submenu", "medical_college_china"], ["href", "/university/jiangsu-university", "data-submenu", "medical_college_china"], ["href", "/university/wuhan-university", "data-submenu", "medical_college_china"], ["href", "/university/jinan-university", "data-submenu", "medical_college_china"], ["href", "/university/sichuan-university", "data-submenu", "medical_college_china"], ["id", "medical_college_belarus", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_belarus"], ["href", "/university/belarusian-state-medical-university", "data-submenu", "medical_college_belarus"], ["href", "/university/gomel-state-medical-university", "data-submenu", "medical_college_belarus"], ["href", "/university/grodno-state-medical-university", "data-submenu", "medical_college_belarus"], ["href", "/university/vitebsk-state-medical-university", "data-submenu", "medical_college_belarus"], ["id", "medical_college_kazakhstan", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_kazakhstan"], ["href", "/university/karaganda-state-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/kazakh-national-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/semey-state-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/south-kazakhstan-medical-academy", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/west-kazakhstan-marat-ospanov-state-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/kazakh-medical-university-of-continuing-education", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/astana-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/kazakh-russian-medical-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/kokshetau-state-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/north-kazakhstan-state-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/al-farabi-kazakh-national-university", "data-submenu", "medical_college_kazakhstan"], ["href", "/university/uib-international-medical-school", "data-submenu", "medical_college_kazakhstan"], ["id", "medical_college_armenia", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_armenia"], ["href", "/university/armenian-medical-institute", "data-submenu", "medical_college_armenia"], ["href", "/university/st-tereza-medical-university", "data-submenu", "medical_college_armenia"], ["href", "/university/yerevan-state-medical-university", "data-submenu", "medical_college_armenia"], ["href", "/university/university-of-traditional-medicine", "data-submenu", "medical_college_armenia"], ["href", "/university/yerevan-haybusak-university", "data-submenu", "medical_college_armenia"], ["href", "/university/mkhitar-gosh-armenian-russian-international-university", "data-submenu", "medical_college_armenia"], ["id", "medical_college_uzbekistan", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_uzbekistan"], ["href", "/university/andijan-state-medical-institute", "data-submenu", "medical_college_uzbekistan"], ["href", "/university/bukhara-state-medical-institute", "data-submenu", "medical_college_uzbekistan"], ["href", "/university/samarkand-state-medical-institute", "data-submenu", "medical_college_uzbekistan"], ["href", "/university/tashkent-medical-academy", "data-submenu", "medical_college_uzbekistan"], ["href", "/university/tashkent-state-dental-institute", "data-submenu", "medical_college_uzbekistan"], ["href", "#", "data-submenu", "management_submenu"], ["id", "management_submenu", 1, "submenu"], ["href", "#", "data-submenu-close", "management_submenu"], ["href", "#", "data-submenu", "management_college_by_courses"], ["id", "management_college_by_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "management_college_by_courses"], ["href", "#", "data-submenu", "management_top_courses"], ["id", "management_top_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "management_top_courses"], ["href", "#/course/bachelor-of-business-administration-bba"], ["href", "/college/dy-patil-university-school-of-management-dypusm-navi-mumbai"], ["href", "/university/shivaji-university-kolhapur"], ["href", "/university/flame-university-pune"], ["href", "/university/mit-world-peace-university"], ["href", "#", "data-submenu", "science_submenu"], ["id", "science_submenu", 1, "submenu"], ["href", "#", "data-submenu-close", "science_submenu"], ["href", "#", "data-submenu", "science_college_by_courses"], ["id", "science_college_by_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "science_college_by_courses"], ["href", "/college/indraprastha-institute-of-technology-and-management-iitm-new-delhi"], ["href", "/college/presidency-college-bangalore"], ["href", "/college/institute-of-management-studies-ims-ghaziabad"], ["href", "/college/bharati-vidyapeeth-institute-of-management-entrepreneurship-development"], ["href", "/college/dr-dy-patil-institute-of-management-and-research-dypimr-pune"], ["href", "/college/kristu-jayanti-college-kjc-bangalore"], ["href", "#", "data-submenu", "science_top_courses"], ["id", "science_top_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "science_top_courses"], ["href", "/university/master-of-computer-application-mca"], ["href", "/college/mit-school-of-management-pune"], ["href", "/college/sinhgad-institute-of-management-and-computer-application-simca-narhe-pune"], ["href", "/college/the-oxford-college-of-science-bangalore"], ["href", "/college/acharya-institute-of-technology-ait-bangalore"], ["href", "/university/vellore-institute-of-technology"], ["href", "/college/cambridge-institute-of-technology-cit-bangalore"], ["href", "/college/met-institute-of-computer-science-mumbai"], ["href", "/college/amity-institute-of-information-technology-aiit-mumbai"], ["href", "#", "data-submenu", "all_courses_submenu"], ["id", "all_courses_submenu", 1, "submenu"], ["href", "#", "data-submenu-close", "all_courses_submenu"], ["href", "#", "data-submenu", "all_courses_college_by_courses"], ["id", "all_courses_college_by_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "all_courses_college_by_courses"], ["href", "#/course/aviation-in-ukraine"], ["href", "/university/national-aviation-university"], ["href", "/university/national-aerospace-university"], ["href", "/university/ufa-state-aviation-technical-university"], ["href", "/university/moscow-aviation-institute"], ["href", "/university/samara-state-aerospace-university"], ["href", "#", "data-submenu", "all_courses_top_courses"], ["id", "all_courses_top_courses", 1, "submenu"], ["href", "#", "data-submenu-close", "all_courses_top_courses"], ["href", "/university/kharkiv-national-university-of-arts"], ["href", "/university/lviv-national-academy-of-arts"], ["href", "/university/kyiv-national-university-of-culture-and-arts"], ["href", "/university/kharkiv-state-academy-of-design-and-arts"], ["href", "/university/kharkiv-state-academy-of-culture"], ["href", "#", "data-submenu", "medical_college_by_city"], ["id", "medical_college_by_city", 1, "submenu"], ["href", "#", "data-submenu-close", "medical_college_by_city"], ["routerLink", "/college", "href", "/college", "routerLinkActive", "active", 3, "click"], ["routerLink", "/faq", "href", "/faq", "routerLinkActive", "active", 3, "click"], ["routerLink", "/aboutus"], ["routerLink", "/services"], ["routerLink", "/contactus"], ["routerLink", "/home", "src", "assets/img/Home Page/7. Footer/SYU-Logo.png", "width", "160px", "height", "auto", 1, "mobilelogo"], ["id", "togglebtn", "type", "button", 1, "btn-open", "first", 3, "click"], [1, "fa", "fa-bars", 2, "color", "#fff"], ["class", "zeynep-overlay", 3, "click", 4, "ngIf"], ["id", "div1", 1, "col-lg-3", "col-sm-", "12", "tar", "target", "active1"], [1, "mega-links", "UL1"], ["href", "#", "id", "menuboxli", "target", "1", 1, "second", 3, "mouseenter"], ["href", "#", "id", "menuboxli", "target", "2", 1, "second", 3, "mouseenter"], ["id", "div2", 1, "col-lg-3", "col-sm-", "12", "tar", "target", "active1"], ["href", "#", "id", "menuboxli1", "target", "1", 1, "second", 3, "mouseenter"], ["href", "#", "id", "menuboxli1", "target", "2", 1, "second", 3, "mouseenter"], ["href", "#", "id", "menuboxli1", "target", "3", 1, "second", 3, "mouseenter"], ["href", "#", "id", "menuboxli1", "target", "4", 1, "second", 3, "mouseenter"], ["href", "#", "id", "menuboxli1", "target", "5", 1, "second", 3, "mouseenter"], ["id", "div3", 1, "col-lg-3", "col-sm-", "12", "tar", "target"], ["href", "#", "id", "menuboxli1", "target", "1", 1, "third", 3, "mouseenter"], ["href", "#", "id", "menuboxli1", "target", "2", 1, "third", 3, "mouseenter"], ["href", "#", "id", "menuboxli2", "target", "3", 1, "third", 3, "mouseenter"], ["id", "div5", 1, "col-lg-3", "col-sm-", "12", "tar", "target", "active1"], ["href", "/course/bachelor-of-technology-btech", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div6", 1, "col-lg-3", "col-sm-", "12", "tar", "target", "active1"], ["href", "#/course/engineering-in-poland", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "#/course/engineering-in-ukraine", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "#/course/engineering-in-russia", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "#/course/engineering-in-ireland", "id", "menuboxli1", "target", "5", 1, "second"], ["href", "#/course/engineering-in-germany", "id", "menuboxli1", "target", "6", 1, "second"], ["id", "div7", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/pune-institute-of-computer-technology-pict-pune", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/college/mit-college-of-engineering-pune", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/college/vishwakarma-institute-of-technology-vit-pune", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/college/dr-dy-patil-institute-of-technology-dypit-pimpri-pune", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/college/sinhgad-college-of-engineering-scoe-vadgaon-pune", "id", "menuboxli1", "target", "5", 1, "second"], ["href", "/college/bharati-vidyapeeth-college-of-engineering-bvcoe-pune", "id", "menuboxli1", "target", "6", 1, "second"], ["href", "/college/symbiosis-institute-of-technology-sit-pune", "id", "menuboxli1", "target", "7", 1, "second"], ["id", "div8", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/walchand-institute-of-technology-solapur", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div9", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/scms-school-of-engineering-and-technology-kerala", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div10", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/birla-institute-of-technology-and-science-bits-pilani", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div11", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/mvj-college-of-engineering-bangalore", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/college/ramaiah-institute-of-technology-rit-bangalore", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/college/bms-college-of-engineering-bangalore", "id", "menuboxli1", "target", "3", 1, "second"], ["id", "div12", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/university/poznan-university-of-technology", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/gdansk-university-of-technology", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/agh-university-of-science-and-technology", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/warsaw-university-of-technology", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/silesian-university-of-technology", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/cracow-university-of-technology", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/lodz-university-of-technology", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/wroclaw-university-of-technology", "id", "menuboxli1", "target", "3", 1, "second"], ["id", "div13", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/university/kyiv-polytechnic-institute", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kharkiv-national-university-of-radio-electronics", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/cherkasy-state-technological-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/national-metallurgical-academy-of-ukraine", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ukrainian-state-chemical-technology-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/ivano-frankivsk-national-university-of-oil-and-gas", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/donbass-state-engineering-academy", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/ternopil-national-technical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/zaporizhzhia-state-engineering-academy", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kremenchuk-state-technical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/kherson-national-technical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/vinnytsia-national-technical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/lviv-polytechnic-national-university", "id", "menuboxli1", "target", "3", 1, "second"], ["id", "div14", 1, "col-lg-6", "col-sm-", "12", "tar", "target", "active1"], ["href", "/university/kalmyk-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/north-caucasus-federal-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/pskov-state-polytechnic-institute", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/moscow-institute-of-physics-and-technology", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/perm-state-agro-technological-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/bauman-moscow-state-technical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/moscow-state-university-of-fine-chemical-technologies", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/national-university-of-science-and-technology-misis", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/south-ural-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/irkutsk-national-research-technical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/itmo-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/novosibirsk-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/moscow-power-engineering-institute", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tomsk-polytechnic-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/moscow-state-university-of-civil-engineering", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/nizhny-novgorod-state-technical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/saint-petersburg-state-institute-of-technology", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/peter-great-st-petersburg-polytechnic-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "#/course/mbbs-in-bangladesh"], ["href", "#/course/mbbs-in-kazakhstan"], ["href", "#/course/mbbs-in-kyrgyzstan"], ["href", "#/course/mbbs-in-armenia"], ["href", "#/course/mbbs-in-uzbekistan"], ["href", "#/course/mbbs-in-latvia"], ["href", "#/course/mbbs-in-malaysia"], ["href", "#/course/mbbs-in-canada"], ["id", "div2", 1, "col-lg-6", "col-sm-", "12", "tar", "target"], ["id", "div2", 1, "col-lg-5", "col-sm-", "12", "tar", "target"], ["id", "menuboxli1", "target", "1", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "2", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "3", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "4", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "5", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "6", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "7", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "8", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "9", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "10", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "11", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "12", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "13", 1, "First", 3, "mouseenter"], ["id", "menuboxli1", "target", "14", 1, "First", 3, "mouseenter"], ["href", "/university/bogomolets-national-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/bukovinian-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/danylo-halytsky-lviv-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/kharkiv-international-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/dnipropetrovsk-state-medical-academy", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ivano-frankivsk-national-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/taras-shevchenko-national-university-of-kyiv", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/lugansk-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/odessa-national-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ternopil-national-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/uzhhorod-national-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/zaporozhye-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/vinnitsa-national-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/donetsk-national-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/kharkiv-national-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/kyiv-medical-university-of-uafm-kiev", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/petro-mohyla-black-sea-national-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/sumy-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/poltava-state-medical-and-dental-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/v-n-karazin-kharkiv-national-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/poznan-university-of-medical-science", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/gdansk-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/jagiellonian-university-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/medical-university-of-bialystok", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/medical-university-of-silesia", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/medical-university-of-warsaw", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/nicolaus-copernicus-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/university-of-warmia-and-mazury", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/medical-university-of-lodz", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/medical-university-of-lublin", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/wroclaw-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/university-of-georgia-tbilisi", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/akaki-tsereteli-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/caucasus-international-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/david-tvildiani-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/geomedi-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/tbilisi-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/david-agmashenebeli-university-of-georgia", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tbilisi-open-teaching-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/georgian-american-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/east-european-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/batumi-shota-rustaveli-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/new-vision-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/european-university-georgia", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/ivane-javakhishvili-tbilisi-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tbilisi-medical-university-hippocrates", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/georgian-national-university-seu", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/petre-shotadze-tbilisi-medical-academy", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/tbilisi-public-university-metekhi", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/ilia-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/bau-international-university-batumi", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/international-higher-school-of-medicine", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kyrgyz-russian-slavic-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/jalalabad-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/asian-medical-institute", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/kyrgyz-state-medical-academy", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kyrgyz-national-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/osh-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/avicenna-international-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/altai-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/smolensk-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/crimean-federal-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/lomonosov-moscow-state-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/kazan-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/perm-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/pskov-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/penza-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/kuban-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ivanovo-state-medical-academy", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/kemerovo-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/volgograd-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/dagestan-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/bashkir-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/tambov-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/kursk-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/irkutsk-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/yaroslavl-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/north-ossetian-state-medical-academy", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/siberian-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/pavlov-first-saint-petersburg-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ryazan-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/privolzhsky-research-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/rostov-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/pacific-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/belgorod-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/izhevsk-state-medical-academy", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/chuvash-state-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/novosibirsk-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/ogarev-mordovia-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/ulyanovsk-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/orel-state-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/astrakhan-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/russian-national-research-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/saratov-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/omsk-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/far-eastern-federal-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/orenburg-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/first-moscow-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/st-petersburg-state-pediatric-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/peoples-friendship-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/stavropol-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/kazan-federal-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/north-eastern-federal-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/tver-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/voronezh-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/tyumen-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tula-state-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/mari-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kabardino-balkarian-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/chechen-state-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/ural-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/northern-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/immanuel-kant-baltic-federal-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/samara-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/kathmandu-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/patan-academy-of-health-sciences", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/tribhuvan-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/birat-medical-college", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/manipal-college-of-medical-sciences", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/b-p-koirala-institute-of-health-sciences", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/devdaha-medical-college-and-research-institute", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/bangladesh-university-of-professionals", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/shahjalal-university-of-science-and-technology", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/gonoshasthaya-samaj-vittik-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/university-of-rajshahi", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/university-of-chittagong", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/mainamoti-medical-college", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/dr-sirajul-islam-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/jahurul-islam-medical-college", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/university-of-dhaka", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/anwer-khan-modern-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/president-abdul-hamid-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/dhaka-community-medical-college", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/jalalabad-ragib-rabeya-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/rangpur-community-medical-college", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/shahabuddin-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kumudini-womens-medical-college", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/prime-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/dhaka-national-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/parkview-medical-college", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/us-bangla-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/dhaka-central-international-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/enam-medical-college-and-hospital", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/monno-medical-college-and-hospital", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/ad-din-womens-medical-college", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/khwaja-yunus-ali-medical-college", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/tairunnessa-memorial-medical-college", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/ama-school-of-medicine", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/emilio-aguinaldo-college-manila", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/lyceum-northwestern-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/uv-gullas-college-of-medicine", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/angeles-university-foundation", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/manila-central-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/southwestern-university-phinma", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/st-paul-university-philippines", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/liceo-college-of-medicine", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/amec-bicol-christian-college-of-medicine", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/davao-medical-school-foundation", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/our-lady-of-fatima-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/university-of-perpetual-help", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/cebu-institute-of-medicine", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/university-of-santo-tomas", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/university-of-northern-philippines", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/central-philippine-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/brokenshire-college-school-of-medicine", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/qiqihar-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/yangzhou-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/xinjiang-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/ningxia-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/xian-jiaotong-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/jilin-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/dalian-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/wenzhou-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/southern-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/guangxi-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/chongqing-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tianjin-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/capital-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/zhejiang-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/shandong-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/fudan-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/nanjing-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/jiangsu-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/wuhan-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/jinan-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/sichuan-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/belarusian-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/gomel-state-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/grodno-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/vitebsk-state-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/karaganda-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kazakh-national-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/semey-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/south-kazakhstan-medical-academy", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/west-kazakhstan-marat-ospanov-state-medical-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/kazakh-medical-university-of-continuing-education", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/astana-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/kazakh-russian-medical-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/kokshetau-state-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/north-kazakhstan-state-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/al-farabi-kazakh-national-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/uib-international-medical-school", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/armenian-medical-institute", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/st-tereza-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/yerevan-state-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/university-of-traditional-medicine", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/yerevan-haybusak-university", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/mkhitar-gosh-armenian-russian-international-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/andijan-state-medical-institute", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/bukhara-state-medical-institute", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/samarkand-state-medical-institute", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/tashkent-medical-academy", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/tashkent-state-dental-institute", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/medical-university-of-verna", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/university/sofia-medical-university", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/university/plovdiv-medical-university", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/university/trakia-university", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/university/medical-university-of-pleven", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "#/course/master-of-business-administration-mba"], ["href", "#/course/mba-in-ukraine"], ["href", "#/course/mba-in-poland"], ["href", "#/course/mba-in-ireland"], ["href", "#/course/mba-in-canada"], ["href", "#/course/mba-in-malta"], ["href", "#/course/mba-in-uk"], ["href", "#/course/mba-in-russia"], ["href", "#/course/mba-in-germany"], ["href", "#/course/mba-in-new-zealand"], ["href", "#/course/mba-in-australia"], ["id", "div2", 1, "col-lg-7", "col-sm-", "12", "tar", "target"], ["href", "/college/nl-dalmia-institute-of-management-studies-and-research-mumbai"], ["href", "/college/kj-somaiya-institute-of-management-mumbai"], ["href", "/college/guru-nanak-institute-of-management-studies-gnims-mumbai"], ["href", "/university/narsee-monjee-institute-of-management-studies-nmims-mumbai"], ["href", "/college/shailesh-j-mehta-school-of-management-iit-bombay-mumbai"], ["href", "/college/athena-school-of-management-mumbai"], ["href", "/college/balaji-institute-of-modern-management-bimm-pune"], ["href", "/college/institute-of-management-and-entrepreneurship-development-imed-pune"], ["href", "/college/amity-global-business-school-agbs-pune"], ["href", "/college/kirloskar-institute-of-advanced-management-studies-kiams-pune"], ["href", "/college/sdm-institute-for-management-development-mysore"], ["href", "/college/sinhgad-institute-of-business-administration-and-research-sibar-kondhwa-pune"], ["href", "/college/suryadatta-institute-of-business-management-and-technology-sibmt-pune"], ["href", "/university/guru-gobind-singh-indraprastha-university-delhi"], ["href", "/college/lal-bahadur-shastri-institute-of-management-lbsim-new-delhi"], ["href", "/college/xavier-institute-of-management-and-entrepreneurship-bangalore"], ["href", "/college/st-josephs-institute-of-management-bangalore"], ["href", "/college/ifmr-graduate-school-of-business-chennai"], ["href", "/university/university-of-oxford"], ["href", "/university/university-of-cambridge"], ["href", "/university/university-of-bristol"], ["href", "/university/durham-university"], ["href", "/university/university-of-warwick"], ["href", "/university/university-college-london"], ["href", "/university/lancaster-university"], ["href", "/university/london-school-of-economics-and-political-science-london"], ["href", "/university/kyiv-school-of-economics"], ["href", "/university/lviv-business-school-of-ukrainian-catholic-university"], ["href", "/university/moscow-school-of-management-skolkovo"], ["href", "/university/moscow-university-touro"], ["href", "/university/lomonosov-moscow-state-university-business-school"], ["href", "/university/russian-presidential-academy-of-national-economy-and-public-administration"], ["href", "/university/warsaw-school-of-economics-sgh"], ["href", "/university/collegium-da-vinci"], ["href", "/university/warsaw-university-of-technology-business-school"], ["id", "div1", 1, "col-lg-5", "col-sm-", "12", "tar", "target", "active1"], ["href", "#/course/bachelor-of-computer-application-bca", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "#/course/master-of-computer-application-mca", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div7", 1, "col-lg-8", "col-sm-", "12", "tar", "target", "active1"], ["href", "/college/brihan-maharashtra-college-of-commerce-bmcc-pune", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/college/symbiosis-institute-of-computer-studies-and-research-sicsr-pune", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/college/modern-college-of-arts-science-and-commerce-pune", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/college/bharati-vidyapeeth-institute-of-management-entrepreneurship-development", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/college/dr-dy-patil-institute-of-management-and-research-dypimr-pune", "id", "menuboxli1", "target", "5", 1, "second"], ["href", "/college/modern-college-of-arts-science-and-commerce-pune", "id", "menuboxli1", "target", "6", 1, "second"], ["href", "/college/mes-garware-college-of-commerce-pune", "id", "menuboxli1", "target", "7", 1, "second"], ["href", "/college/bharati-vidyapeeth-institute-of-management-entrepreneurship-development", "id", "menuboxli1", "target", "7", 1, "second"], ["href", "/college/dr-dy-patil-institute-of-management-and-research-dypimr-pune", "id", "menuboxli1", "target", "7", 1, "second"], ["href", "/college/mit-school-of-management-pune", "id", "menuboxli1", "target", "7", 1, "second"], ["href", "/college/sinhgad-institute-of-management-and-computer-application-simca-narhe-pune", "id", "menuboxli1", "target", "7", 1, "second"], ["href", "/college/presidency-college-bangalore", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/college/kristu-jayanti-college-kjc-bangalore", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/college/the-oxford-college-of-science-bangalore", "id", "menuboxli1", "target", "3", 1, "second"], ["href", "/college/acharya-institute-of-technology-ait-bangalore", "id", "menuboxli1", "target", "4", 1, "second"], ["href", "/college/cambridge-institute-of-technology-cit-bangalore", "id", "menuboxli1", "target", "5", 1, "second"], ["href", "/college/met-institute-of-computer-science-mumbai", "id", "menuboxli1", "target", "1", 1, "second"], ["href", "/college/amity-institute-of-information-technology-aiit-mumbai", "id", "menuboxli1", "target", "2", 1, "second"], ["href", "/college/ganga-institute-of-technology-and-management-jhajjar", "id", "menuboxli1", "target", "1", 1, "second"], ["id", "div1", 1, "col-lg-12", "col-sm-", "12", "tar", "target", "active1"], [1, "col-lg-4"], [1, "col-lg-5"], ["id", "div2", 1, "col-lg-12", "col-sm-", "12", "tar", "target"], ["id", "div3", 1, "col-lg-12", "col-sm-", "12", "tar", "target"], [1, "col-lg-3"], ["href", "/university/budapest-metropolitan-university"], ["href", "/university/university-of-debrecen"], ["href", "/university/university-of-miskolc"], ["href", "/university/szent-istvan-university"], ["href", "/university/budapest-university-of-technology-and-economics"], ["href", "/university/corvinus-university-of-budapest"], ["href", "/university/bocconi-university"], ["href", "/university/rome-business-school"], ["href", "/university/university-of-padua"], ["href", "/university/university-of-pavia"], ["href", "/university/university-of-bologna"], ["href", "/university/university-of-pisa"], ["href", "/university/estonian-academy-of-arts"], ["href", "/university/tallinn-university-of-technology"], ["href", "/university/tallinn-health-care-college"], ["href", "/university/frankfurt-school-of-finance-and-management"], ["href", "/university/university-of-bonn"], ["href", "/university/humboldt-university-of-berlin"], ["href", "/university/international-school-of-management-dortmund"], ["href", "/university/munich-business-school"], ["href", "/university/esslingen-university-of-applied-sciences"], ["href", "/university/eu-business-school-munich"], ["href", "/university/technische-hochschule-ingolstadt"], ["href", "/university/reutlingen-university"], ["href", "/university/university-of-mannheim"], ["href", "/university/gisma-business-school"], ["href", "/university/berlin-school-of-business-and-innovation"], ["href", "/university/university-of-ulm"], ["href", "/university/rwth-aachen-university"], ["href", "/university/karlsruhe-institute-of-technology"], ["href", "/university/university-of-stuttgart"], ["href", "/university/university-of-cologne"], ["href", "/university/carl-benz-school-of-engineering"], ["href", "/university/iu-international-university-of-applied-sciences"], ["href", "/university/johannes-gutenberg-university-mainz"], ["href", "/university/lazarski-university"], ["href", "/university/university-of-economics-in-katowice"], ["href", "/university/vistula-university"], ["href", "/university/university-of-bedfordshire"], ["href", "/university/aberystwyth-university"], ["href", "/university/kingston-university-london"], ["href", "/university/leeds-beckett-university"], ["href", "/university/new-college-durham"], ["href", "/university/the-university-of-law"], ["href", "/university/university-of-sussex"], ["href", "/university/bpp-university"], ["href", "/university/university-of-strathclyde"], ["href", "/university/keele-university"], ["href", "/university/bath-spa-university"], ["href", "/university/university-of-surrey"], ["href", "/university/london-metropolitan-university"], ["href", "/university/glasgow-caledonian-university"], ["href", "/university/university-of-south-wales"], ["href", "/university/henley-business-school"], ["href", "/university/university-of-lincoln"], ["href", "/university/university-of-exeter"], ["href", "/university/belfast-metropolitan-college"], ["href", "/university/university-of-wolverhampton"], ["href", "/university/royal-college-of-art"], ["href", "/university/university-of-st-andrews"], ["href", "/university/brunel-university-london"], ["href", "/university/university-of-bradford"], ["href", "/university/kings-college-london"], ["href", "/university/university-of-gloucestershire"], ["href", "/university/liverpool-hope-university"], ["href", "/university/cardiff-metropolitan-university"], ["href", "/university/city-university-of-london"], ["href", "/university/university-for-the-creative-arts"], ["href", "/university/university-of-edinburgh"], ["href", "/university/university-of-manchester"], ["href", "/university/university-of-salford"], ["href", "/university/york-st-john-university"], ["href", "/university/canterbury-christ-church-university"], ["href", "/university/middlesex-university-london"], ["href", "/university/university-of-alberta"], ["href", "/university/university-canada-west"], ["href", "/university/university-of-windsor"], ["href", "/university/university-of-saskatchewan"], ["href", "/university/university-of-ottawa"], ["href", "/university/simon-fraser-university"], ["href", "/university/camosun-college"], ["href", "/university/carleton-university"], ["href", "/university/mcmaster-university"], ["href", "/university/sheridan-college"], ["href", "/university/university-of-regina"], ["href", "/university/ryerson-university"], ["href", "/university/fanshawe-college"], ["href", "/university/lambton-college"], ["href", "/university/dalhousie-university"], ["href", "/university/queens-university"], ["href", "/university/riseba-university-of-business-arts-and-technology"], ["href", "/university/daugavpils-university"], ["href", "/university/transport-and-telecommunication-institute"], ["href", "/university/university-of-latvia"], ["href", "/university/baltic-international-academy"], ["href", "/university/klaipeda-university"], ["href", "/university/vilniaus-kolegija-university-of-applied-sciences"], ["href", "/university/asian-institute-management-philippines"], ["href", "/university/washington-sycip-graduate-school-of-business"], ["href", "/university/ramon-v-del-rosario-college-of-business"], [1, "zeynep-overlay", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavComponent_Template_div_scroll_0_listener() { return ctx.onscroll; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "ul", 2)(3, "li")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_4_listener() { return ctx.getclass("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_7_listener() { return ctx.getclass("topcourses"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Top Universities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Top Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_16_listener() { return ctx.getclass("exam"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_19_listener() { return ctx.getclass("news"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_22_listener() { return ctx.getclass("blogs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 10)(25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 13)(29, "li")(30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_30_listener() { return ctx.getclass("imagegallery"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Image Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_33_listener() { return ctx.getclass("videogallery"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Video Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_36_listener() { return ctx.getclass("faq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 17)(39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 17)(42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 17)(45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " 180030700033");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nav", 22)(49, "div", 22)(50, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 24)(52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 27)(55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ul", 29)(57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function NavComponent_Template_a_mouseleave_60_listener() { return ctx.mouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35)(68, "div", 36)(69, "div", 37)(70, "div", 38)(71, "div", 39)(72, "ul", 40)(73, "li")(74, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_74_listener() { return ctx.mouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li")(78, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_78_listener() { return ctx.mouseEnter2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "India Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li")(82, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_82_listener() { return ctx.mouseEnter3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Abroad Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 45)(86, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, NavComponent_div_87_Template, 10, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, NavComponent_div_88_Template, 22, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, NavComponent_div_89_Template, 14, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, NavComponent_div_90_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, NavComponent_div_91_Template, 17, 0, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, NavComponent_div_92_Template, 23, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, NavComponent_div_93_Template, 5, 0, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, NavComponent_div_94_Template, 5, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, NavComponent_div_95_Template, 5, 0, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, NavComponent_div_96_Template, 11, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, NavComponent_div_97_Template, 26, 0, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, NavComponent_div_98_Template, 41, 0, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, NavComponent_div_99_Template, 56, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 61)(102, "div", 62)(103, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "TOP ENGINEERING COLLEGES IN INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 64)(106, "div", 46)(107, "div", 65)(108, "div", 46)(109, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 68)(112, "p", 69)(113, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Dr. D. Y. Patil Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 71)(116, "p", 72)(117, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 65)(120, "div", 46)(121, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 68)(124, "p", 69)(125, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Bharati Vidyapeeth College of Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 71)(128, "p", 72)(129, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "PUNE , Maharastra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 65)(132, "div", 46)(133, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 68)(136, "p", 69)(137, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Walchand Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 71)(140, "p", 72)(141, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Solapur, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "li")(144, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function NavComponent_Template_a_mouseleave_144_listener() { return ctx.mouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Medical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 35)(152, "div", 36)(153, "div", 37)(154, "div", 38)(155, "div", 39)(156, "ul", 40)(157, "li")(158, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_158_listener() { return ctx.mouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li")(162, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_162_listener() { return ctx.mouseEnter2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li")(166, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_166_listener() { return ctx.mouseEnter3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 45)(170, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](171, NavComponent_div_171_Template, 29, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, NavComponent_div_172_Template, 29, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, NavComponent_div_173_Template, 26, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](174, NavComponent_div_174_Template, 26, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, NavComponent_div_175_Template, 20, 0, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, NavComponent_div_176_Template, 17, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, NavComponent_div_177_Template, 58, 0, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](178, NavComponent_div_178_Template, 62, 0, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, NavComponent_div_179_Template, 35, 0, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, NavComponent_div_180_Template, 65, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, NavComponent_div_181_Template, 26, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](182, NavComponent_div_182_Template, 167, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, NavComponent_div_183_Template, 23, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](184, NavComponent_div_184_Template, 80, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](185, NavComponent_div_185_Template, 56, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](186, NavComponent_div_186_Template, 65, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](187, NavComponent_div_187_Template, 14, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, NavComponent_div_188_Template, 38, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, NavComponent_div_189_Template, 20, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, NavComponent_div_190_Template, 17, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](191, NavComponent_div_191_Template, 17, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 61)(194, "div", 62)(195, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "TOP MEDICAL COLLEGES IN INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 64)(198, "div", 46)(199, "div", 65)(200, "div", 46)(201, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 68)(204, "p", 69)(205, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, " Bharati Vidyapeeth's Medical College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 71)(208, "p", 72)(209, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 65)(212, "div", 46)(213, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 68)(216, "p", 69)(217, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "All India Institute Of Medical Sciences");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 71)(220, "p", 72)(221, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "New Delhi, Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 65)(224, "div", 46)(225, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 68)(228, "p", 69)(229, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "K J Somaiya Medical College Research Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 71)(232, "p", 72)(233, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Mumbai, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li")(236, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function NavComponent_Template_a_mouseleave_236_listener() { return ctx.mouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 35)(244, "div", 36)(245, "div", 37)(246, "div", 38)(247, "div", 39)(248, "ul", 40)(249, "li")(250, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_250_listener() { return ctx.mouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li")(254, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_254_listener() { return ctx.mouseEnter2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "li")(258, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_258_listener() { return ctx.mouseEnter3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Abroad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 45)(262, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](263, NavComponent_div_263_Template, 10, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](264, NavComponent_div_264_Template, 35, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](265, NavComponent_div_265_Template, 5, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](266, NavComponent_div_266_Template, 26, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](267, NavComponent_div_267_Template, 26, 0, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](268, NavComponent_div_268_Template, 35, 0, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](269, NavComponent_div_269_Template, 11, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](270, NavComponent_div_270_Template, 11, 0, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](271, NavComponent_div_271_Template, 5, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](272, NavComponent_div_272_Template, 5, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](273, NavComponent_div_273_Template, 18, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](274, NavComponent_div_274_Template, 26, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](275, NavComponent_div_275_Template, 8, 0, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](276, NavComponent_div_276_Template, 14, 0, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](277, NavComponent_div_277_Template, 14, 0, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](278, NavComponent_div_278_Template, 20, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 61)(281, "div", 62)(282, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "TOP MANAGEMENT COLLEGES IN INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 64)(285, "div", 46)(286, "div", 65)(287, "div", 46)(288, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "div", 68)(291, "p", 69)(292, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Christ University, Banglore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 71)(295, "p", 72)(296, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Christ University, Banglore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 65)(299, "div", 46)(300, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 68)(303, "p", 69)(304, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Jamaia Millia Islamia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 71)(307, "p", 72)(308, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "New Delhi, Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 65)(311, "div", 46)(312, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 68)(315, "p", 69)(316, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Symbiosis Institute of Business Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 71)(319, "p", 72)(320, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "li")(323, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function NavComponent_Template_a_mouseleave_323_listener() { return ctx.mouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Computer Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 35)(331, "div", 36)(332, "div", 37)(333, "div", 38)(334, "div", 39)(335, "ul", 40)(336, "li")(337, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_337_listener() { return ctx.mouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "li")(341, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_341_listener() { return ctx.mouseEnter2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 45)(345, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](346, NavComponent_div_346_Template, 10, 0, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](347, NavComponent_div_347_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](348, NavComponent_div_348_Template, 5, 0, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](349, NavComponent_div_349_Template, 30, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](350, NavComponent_div_350_Template, 35, 0, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](351, NavComponent_div_351_Template, 17, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](352, NavComponent_div_352_Template, 8, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](353, NavComponent_div_353_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](354, NavComponent_div_354_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](355, NavComponent_div_355_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](356, NavComponent_div_356_Template, 5, 0, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 61)(359, "div", 62)(360, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "TOP COMPUTER APPLICATION COLLEGES IN INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 64)(363, "div", 46)(364, "div", 65)(365, "div", 46)(366, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 68)(369, "p", 69)(370, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, " Modern College of Arts Science And Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 71)(373, "p", 72)(374, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 65)(377, "div", 46)(378, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 68)(381, "p", 69)(382, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "Brihan Maharashtra College Of Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 71)(385, "p", 72)(386, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "PUNE , Maharastra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 65)(389, "div", 46)(390, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 68)(393, "p", 69)(394, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Garware College of Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 71)(397, "p", 72)(398, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "li")(401, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function NavComponent_Template_a_mouseleave_401_listener() { return ctx.mouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Other Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Colleges ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 35)(408, "div", 36)(409, "div", 37)(410, "div", 38)(411, "div", 39)(412, "ul", 40)(413, "li")(414, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_414_listener() { return ctx.mouseEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Aviation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](416, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "li")(418, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_418_listener() { return ctx.mouseEnter2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Arts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "li")(422, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavComponent_Template_a_mouseenter_422_listener() { return ctx.mouseEnter3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Other Universities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](424, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 45)(426, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](427, NavComponent_div_427_Template, 24, 0, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](428, NavComponent_div_428_Template, 21, 0, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](429, NavComponent_div_429_Template, 54, 10, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 61)(432, "div", 62)(433, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "TOP COLLEGES IN INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 64)(436, "div", 46)(437, "div", 65)(438, "div", 46)(439, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](440, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div", 68)(442, "p", 69)(443, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " Vishwakarma Institute of Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 71)(446, "p", 72)(447, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Pune, Maharashtra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 65)(450, "div", 46)(451, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 68)(454, "p", 69)(455, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, " MIT College of Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "div", 71)(458, "p", 72)(459, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, " PUNE , Maharastra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 65)(462, "div", 46)(463, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 68)(466, "p", 69)(467, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "Symbiosis International University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "div", 71)(470, "p", 72)(471, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](472, "Pune, Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 99)(477, "div", 100)(478, "div", 101)(479, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "svg", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](481, "path", 104)(482, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 106)(484, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Login / Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 108)(487, "span", 109)(488, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Popular Stream");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "ul")(491, "li")(492, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "li", 110)(495, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](497, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 113)(499, "div", 114)(500, "a", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, " Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "ul")(506, "li", 110)(507, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, " Courses \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "div", 119)(511, "div", 114)(512, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "ul")(516, "li")(517, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, " India \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](519, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "div", 122)(521, "div", 114)(522, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](523, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "ul")(526, "li")(527, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, " B.tech \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "li")(530, "a", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, " M.tech \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "li")(533, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, " B.E \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "li")(536, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, " M.E \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "li")(539, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, " Abroad \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "div", 126)(543, "div", 114)(544, "a", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "ul")(548, "li")(549, "a", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](550, " Engineering in Poland \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "li")(552, "a", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](553, " Engineering in Ukraine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "li")(555, "a", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "Engineering in Russia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "li")(558, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559, "Engineering in Ireland \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "li")(561, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](562, "Engineering in Germany \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "li", 110)(564, "a", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](565, " India Colleges \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "div", 134)(568, "div", 114)(569, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](570, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](571, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](573, "TOP COLLEGE BY CITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "ul")(575, "li")(576, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, " Pune \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](578, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "li")(580, "a", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](581, " Solapur \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "li")(584, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](585, " Kerala \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "li")(588, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, " Rajasthan \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](590, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "li")(592, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, " Banglore \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](594, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "div", 141)(596, "div", 114)(597, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](598, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "ul")(601, "li")(602, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](603, " Pune Institute of Computer Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](604, "li")(605, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](606, " MIT College of Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "li")(608, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](609, "Vishwakarma Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](610, "li")(611, "a", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "Dr. D. Y Patil Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "li")(614, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](615, "Sinhgad College of Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](616, "li")(617, "a", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](618, "Bharati Vidyapeeth College of Engineering, Pune \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](619, "li")(620, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "Symbiosis Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "div", 150)(623, "div", 114)(624, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](625, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "ul")(628, "li")(629, "a", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](630, "Walchand Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](631, "div", 153)(632, "div", 114)(633, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](634, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](635, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "ul")(637, "li")(638, "a", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](639, "SCMS School of Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](640, "div", 156)(641, "div", 114)(642, "a", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](643, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](644, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "ul")(646, "li")(647, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](648, "Birla Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](649, "div", 159)(650, "div", 114)(651, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](652, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](653, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](654, "ul")(655, "li")(656, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](657, "MVJ College of Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "li")(659, "a", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "Ramaiah Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "li")(662, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](663, "BMS College of Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](664, "li", 110)(665, "a", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](666, " Abroad Colleges \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](667, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](668, "div", 165)(669, "div", 114)(670, "a", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](671, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](672, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](673, "ul")(674, "li")(675, "a", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, " Poland \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](678, "li")(679, "a", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](680, " Ukraine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](681, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](682, "li")(683, "a", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](684, " Russia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](685, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](686, "div", 170)(687, "div", 114)(688, "a", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](689, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](690, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "ul")(692, "li")(693, "a", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](694, "Poznan University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](695, "li")(696, "a", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](697, "Gdansk University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "li")(699, "a", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "AGH University of Science & Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "li")(702, "a", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](703, "Warsaw University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](704, "li")(705, "a", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](706, "Silesian University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "li")(708, "a", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](709, "Cracow University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "li")(711, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](712, "Lodz University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "li")(714, "a", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](715, "Wroclaw University of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](716, "div", 180)(717, "div", 114)(718, "a", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](719, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](720, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](721, "ul")(722, "li")(723, "a", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](724, "Kyiv Polytechnic Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](725, "li")(726, "a", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](727, "Kharkiv National University of Radio Electronics \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](728, "li")(729, "a", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](730, "Cherkasy State Technological University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](731, "li")(732, "a", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](733, "National Metallurgical Academy of Ukraine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](734, "li")(735, "a", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](736, "Ukrainian State Chemical Technology University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](737, "li")(738, "a", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](739, "Ivano-Frankivsk National University of Oil & Gas \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](740, "li")(741, "a", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](742, "Donbass State Engineering Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "li")(744, "a", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](745, "Ternopil National Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](746, "li")(747, "a", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](748, "Zaporizhzhia State Engineering Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](749, "li")(750, "a", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](751, "Kremenchuk State Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](752, "li")(753, "a", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](754, "Kherson National Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](755, "li")(756, "a", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](757, "Vinnytsia National Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "li")(759, "a", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](760, "Lviv Polytechnic National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](761, "div", 195)(762, "div", 114)(763, "a", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](764, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](765, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](766, "ul")(767, "li")(768, "a", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](769, "Kalmyk State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](770, "li")(771, "a", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](772, "North-Caucasus Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](773, "li")(774, "a", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](775, "Pskov State Polytechnic Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](776, "li")(777, "a", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](778, "Moscow Institute of Physics and Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](779, "li")(780, "a", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](781, "Perm State Agro - Technological University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](782, "li")(783, "a", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](784, "Bauman Moscow State Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](785, "li")(786, "a", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "Moscow State University of Fine Chemical Technologies \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "li")(789, "a", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](790, "National University of Science and Technology MISIS \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](791, "li")(792, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](793, "South Ural State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](794, "li")(795, "a", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](796, "Irkutsk National Research Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](797, "li")(798, "a", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](799, "ITMO University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](800, "li")(801, "a", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](802, "Novosibirsk State Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](803, "li")(804, "a", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](805, "Moscow Power Engineering Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](806, "li")(807, "a", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](808, "Tomsk Polytechnic University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](809, "li")(810, "a", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](811, "Moscow State University of Civil Engineering \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](812, "li")(813, "a", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](814, "Nizhny Novgorod State Technical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](815, "li")(816, "a", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](817, "Saint Petersburg State Institute of Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](818, "li")(819, "a", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](820, "Peter the Great St. Petersburg Polytechnic University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](821, "li", 110)(822, "a", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](823, "Medical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](824, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](825, "div", 216)(826, "div", 114)(827, "a", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](828, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](829, " Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](830, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](831, "Medical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](832, "ul")(833, "li", 110)(834, "a", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](835, " Courses \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](836, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](837, "div", 219)(838, "div", 114)(839, "a", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](840, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](841, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](842, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](843, "TOP COLLEGE BY COURSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](844, "ul")(845, "li")(846, "a", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](847, "MBBS in Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](848, "li")(849, "a", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](850, "MBBS in Belarus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](851, "li")(852, "a", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](853, "MBBS in USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](854, "li")(855, "a", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](856, "MBBS in UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](857, "li")(858, "a", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](859, "MBBS in China");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](860, "li")(861, "a", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](862, "MBBS in New Zealand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](863, "li")(864, "a", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](865, "MBBS in Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](866, "li")(867, "a", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](868, "MBBS in Bulgaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](869, "li")(870, "a", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](871, "MBBS in Romania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](872, "li")(873, "a", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](874, "MBBS in Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](875, "li")(876, "a", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](877, "MBBS in Philippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](878, "li")(879, "a", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](880, "MBBS in Ireland");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](881, "li")(882, "a", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](883, "MBBS in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](884, "li")(885, "a", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](886, "MBBS in Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](887, "li")(888, "a", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](889, "MBBS in Malta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](890, "li")(891, "a", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](892, "MBBS in Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](893, "li")(894, "a", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](895, "MBBS in Czech Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](896, "li")(897, "a", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](898, "MBBS in Hungary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](899, "li")(900, "a", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](901, "MBBS in Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](902, "li")(903, "a", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](904, "MBBS in Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](905, "li")(906, "a", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](907, "MBBS in Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](908, "li")(909, "a", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](910, "MBBS in Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](911, "li")(912, "a", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](913, "MBBS in Europe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](914, "li")(915, "a", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](916, "MBBS in Lithuania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](917, "li")(918, "a", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](919, "MBBS in France");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](920, "li")(921, "a", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](922, "MBBS in Austria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](923, "li", 110)(924, "a", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](925, " India \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](926, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](927, "div", 248)(928, "div", 114)(929, "a", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](930, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](931, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](932, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](933, "TOP COLLEGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](934, "ul")(935, "li")(936, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](937, "All India Institute of Medical Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](938, "li")(939, "a", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](940, "Armed Forces Medical College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](941, "li")(942, "a", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](943, "Bharati Vidyapeeth Deemed University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](944, "li")(945, "a", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](946, "D.Y. Patil Medical College, Kolhapur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](947, "li")(948, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](949, "Bharati Vidyapeeth Medical College, Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](950, "li")(951, "a", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](952, "Indian Institute of Medical Science and Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](953, "li")(954, "a", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](955, "DY Patil Medical College Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](956, "li")(957, "a", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](958, "Terna Medical College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](959, "li")(960, "a", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](961, "Krishna Institute of Medical Sciences");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](962, "li")(963, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](964, "KJ Somaiya Medical College & Research Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](965, "li")(966, "a", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](967, "D.Y. Patil Medical College, Navi Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](968, "li", 110)(969, "a", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](970, " Abroad \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](971, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](972, "div", 259)(973, "div", 114)(974, "a", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](975, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](976, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](977, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](978, "TOP COLLEGE BY COUNTRY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](979, "ul")(980, "li")(981, "a", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](982, "Ukraine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](983, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](984, "li")(985, "a", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](986, "Poland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](987, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](988, "li")(989, "a", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](990, "Georgia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](991, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](992, "li")(993, "a", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](994, "Kyrgyzstan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](995, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](996, "li")(997, "a", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](998, "Russia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](999, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1000, "li")(1001, "a", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1002, "Nepal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1003, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1004, "li")(1005, "a", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1006, "Bangladesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1007, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1008, "li")(1009, "a", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1010, "Philippines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1011, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1012, "li")(1013, "a", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1014, "China ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1015, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1016, "li")(1017, "a", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1018, "Belarus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1019, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1020, "li")(1021, "a", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1022, "Kazakhstan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1023, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1024, "li")(1025, "a", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1026, "Armenia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1027, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1028, "li")(1029, "a", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1030, "Uzbekistan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1031, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1032, "div", 274)(1033, "div", 114)(1034, "a", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1035, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1036, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1037, "ul")(1038, "li")(1039, "a", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1040, "Bogomolets National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1041, "li")(1042, "a", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1043, "Bukovinian State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1044, "li")(1045, "a", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1046, "Danylo Halytsky Lviv National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1047, "li")(1048, "a", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1049, "Kharkiv International Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1050, "li")(1051, "a", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1052, "Dnipropetrovsk State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1053, "li")(1054, "a", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1055, "Ivano Frankivsk National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1056, "li")(1057, "a", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1058, "Taras Shevchenko National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1059, "li")(1060, "a", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1061, "Lugansk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1062, "li")(1063, "a", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1064, "Odessa National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1065, "li")(1066, "a", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1067, "Ternopil National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1068, "li")(1069, "a", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1070, "Uzhhorod National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1071, "li")(1072, "a", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1073, "Zaporozhye State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1074, "li")(1075, "a", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1076, "Vinnitsa National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1077, "li")(1078, "a", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1079, "Donetsk National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1080, "li")(1081, "a", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1082, "Kharkiv National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1083, "li")(1084, "a", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1085, "Kyiv Medical University of uafm kiev \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1086, "li")(1087, "a", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1088, "Petro Mohyla Black Sea National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1089, "li")(1090, "a", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1091, "Sumy State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1092, "li")(1093, "a", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1094, "Poltava State Medical & Dental University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1095, "li")(1096, "a", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1097, "V.N.Karazin Kharkiv National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1098, "div", 296)(1099, "div", 114)(1100, "a", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1101, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1102, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1103, "ul")(1104, "li")(1105, "a", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1106, "Poznan University of Medical Science \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1107, "li")(1108, "a", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1109, "Gdansk Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1110, "li")(1111, "a", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1112, "Jagiellonian University Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1113, "li")(1114, "a", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1115, "Medical University of Bialystok \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1116, "li")(1117, "a", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1118, "Medical University of Silesia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1119, "li")(1120, "a", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1121, "Medical University of Warsaw \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1122, "li")(1123, "a", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1124, "Nicolaus Copernicus University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1125, "li")(1126, "a", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1127, "Warmia And Mazury University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1128, "li")(1129, "a", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1130, "Medical university of Lodz \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1131, "li")(1132, "a", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1133, "Medical University of Lublin \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1134, "li")(1135, "a", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1136, "Wroclaw Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1137, "div", 309)(1138, "div", 114)(1139, "a", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1140, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1141, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1142, "ul")(1143, "li")(1144, "a", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1145, "University of Georgia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1146, "li")(1147, "a", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1148, "Akaki Tsereteli State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1149, "li")(1150, "a", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1151, "Caucasus International University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1152, "li")(1153, "a", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1154, "David Tvildiani Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1155, "li")(1156, "a", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1157, "Geomedi State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1158, "li")(1159, "a", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1160, "Tbilisi State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1161, "li")(1162, "a", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1163, "David Agmashenebeli University of Georgia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1164, "li")(1165, "a", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1166, "Tbilisi Open Teaching university \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1167, "li")(1168, "a", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1169, "Georgian American University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1170, "li")(1171, "a", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1172, "East European University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1173, "li")(1174, "a", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1175, "Batumi Shota Rustaveli State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1176, "li")(1177, "a", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1178, "New Vision University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1179, "li")(1180, "a", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1181, "European University Georgia \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1182, "li")(1183, "a", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1184, "Ivane Javakhishvili Tbilisi State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1185, "li")(1186, "a", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1187, "Tbilisi Medical University 'Hippocrates' \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1188, "li")(1189, "a", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1190, "Georgian National University SEU \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1191, "li")(1192, "a", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1193, "Petre Shotadze Tbilisi Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1194, "li")(1195, "a", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1196, "Tbilisi Public University Metekhi \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1197, "li")(1198, "a", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1199, "Ilia State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1200, "li")(1201, "a", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1202, "BAU International University, Batumi \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1203, "li")(1204, "a", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1205, "Grigol Robakidze University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1206, "div", 331)(1207, "div", 114)(1208, "a", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1209, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1210, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1211, "ul")(1212, "li")(1213, "a", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1214, "International School of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1215, "li")(1216, "a", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1217, "Kyrgyz Russian Slavic University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1218, "li")(1219, "a", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1220, "Jalalabad State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1221, "li")(1222, "a", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1223, "Asian Medical Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1224, "li")(1225, "a", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1226, "Kyrgyz State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1227, "li")(1228, "a", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1229, "Kyrgyz National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1230, "li")(1231, "a", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1232, "Osh State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1233, "li")(1234, "a", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1235, "Avicenna International Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1236, "div", 341)(1237, "div", 114)(1238, "a", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1239, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1240, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1241, "ul")(1242, "li")(1243, "a", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1244, "Altai State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1245, "li")(1246, "a", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1247, "Smolensk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1248, "li")(1249, "a", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1250, "Crimean Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1251, "li")(1252, "a", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1253, "Lomonosov Moscow State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1254, "li")(1255, "a", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1256, "Kazan State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1257, "li")(1258, "a", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1259, "Perm State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1260, "li")(1261, "a", 349);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1262, "Pskov State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1263, "li")(1264, "a", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1265, "Penza State Medical University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1266, "li")(1267, "a", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1268, "Kuban State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1269, "li")(1270, "a", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1271, "Ivanovo State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1272, "li")(1273, "a", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1274, "Kemerovo State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1275, "li")(1276, "a", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1277, "Volgograd State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1278, "li")(1279, "a", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1280, "Dagestan State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1281, "li")(1282, "a", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1283, "Bashkir State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1284, "li")(1285, "a", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1286, "Tambov State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1287, "li")(1288, "a", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1289, "Kursk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1290, "li")(1291, "a", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1292, "Irkutsk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1293, "li")(1294, "a", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1295, "Yaroslavl State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1296, "li")(1297, "a", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1298, "North Ossetian State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1299, "li")(1300, "a", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1301, "Siberian State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1302, "li")(1303, "a", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1304, "Pavlov First Saint Petersburg State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1305, "li")(1306, "a", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1307, "Ryazan State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1308, "li")(1309, "a", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1310, "Privolzhsky Research Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1311, "li")(1312, "a", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1313, "Rostov State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1314, "li")(1315, "a", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1316, "Pacific State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1317, "li")(1318, "a", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1319, "Belgorod State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1320, "li")(1321, "a", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1322, "Izhevsk State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1323, "li")(1324, "a", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1325, "Chuvash State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1326, "li")(1327, "a", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1328, "Novosibirsk National Research State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1329, "li")(1330, "a", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1331, "Ogarev Mordovia State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1332, "li")(1333, "a", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1334, "Ulyanovsk State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1335, "li")(1336, "a", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1337, "Orel State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1338, "li")(1339, "a", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1340, "Astrakhan State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1341, "li")(1342, "a", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1343, "Russian National Research Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1344, "li")(1345, "a", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1346, "Saratov State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1347, "li")(1348, "a", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1349, "Omsk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1350, "li")(1351, "a", 379);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1352, "Far Eastern Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1353, "li")(1354, "a", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1355, "Orenburg State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1356, "li")(1357, "a", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1358, "First Moscow State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1359, "li")(1360, "a", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1361, "ST. Petersburg State Pediatric Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1362, "li")(1363, "a", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1364, "Peoples' Friendship University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1365, "li")(1366, "a", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1367, "Stavropol State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1368, "li")(1369, "a", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1370, "Kazan Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1371, "li")(1372, "a", 386);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1373, "North-Eastern Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1374, "li")(1375, "a", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1376, "Tver State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1377, "li")(1378, "a", 388);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1379, "Voronezh State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1380, "li")(1381, "a", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1382, "Tyumen State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1383, "li")(1384, "a", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1385, "Tula State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1386, "li")(1387, "a", 391);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1388, "Mari State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1389, "li")(1390, "a", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1391, "Kabardino Balkarian State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1392, "li")(1393, "a", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1394, "Chechen State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1395, "li")(1396, "a", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1397, "Ural State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1398, "li")(1399, "a", 395);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1400, "Northern State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1401, "li")(1402, "a", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1403, "Immanuel Kant Baltic Federal University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1404, "li")(1405, "a", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1406, "Samara State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1407, "div", 398)(1408, "div", 114)(1409, "a", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1410, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1411, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1412, "ul")(1413, "li")(1414, "a", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1415, "Kathmandu Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1416, "li")(1417, "a", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1418, "Patan Academy of Health Science \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1419, "li")(1420, "a", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1421, "Tribhuvan University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1422, "li")(1423, "a", 403);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1424, "Birat Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1425, "li")(1426, "a", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1427, "Manipal College of Medical Sciences \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1428, "li")(1429, "a", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1430, "B.P. Koirala Institute of Health Sciences \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1431, "li")(1432, "a", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1433, "Devdaha Medical College & Research Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1434, "div", 407)(1435, "div", 114)(1436, "a", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1437, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1438, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1439, "ul")(1440, "li")(1441, "a", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1442, "Bangladesh University of Professionals \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1443, "li")(1444, "a", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1445, "Shahjalal University of Science and Technology \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1446, "li")(1447, "a", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1448, "Gonoshasthaya Samaj Vittik Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1449, "li")(1450, "a", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1451, "University of Rajshahi \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1452, "li")(1453, "a", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1454, "University of Chittagong \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1455, "li")(1456, "a", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1457, "Mainamoti Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1458, "li")(1459, "a", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1460, "Dr. Sirajul Islam Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1461, "li")(1462, "a", 416);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1463, "Jahurul Islam Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1464, "li")(1465, "a", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1466, "University of Dhaka \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1467, "li")(1468, "a", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1469, "Anwer Khan Modern Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1470, "li")(1471, "a", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1472, "President Abdul Hamid Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1473, "li")(1474, "a", 420);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1475, "Dhaka Community Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1476, "li")(1477, "a", 421);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1478, "Jalalabad Ragib-Rabeya Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1479, "li")(1480, "a", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1481, "Rangpur Community Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1482, "li")(1483, "a", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1484, "Shahabuddin Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1485, "li")(1486, "a", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1487, "Kumudini Women's Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1488, "li")(1489, "a", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1490, "Prime Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1491, "li")(1492, "a", 426);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1493, "Dhaka National Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1494, "li")(1495, "a", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1496, "Parkview Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1497, "li")(1498, "a", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1499, "US-Bangla Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1500, "li")(1501, "a", 429);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1502, "Dhaka Central International Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1503, "li")(1504, "a", 430);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1505, "Enam Medical College and Hospital \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1506, "li")(1507, "a", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1508, "Monno Medical College & Hospital \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1509, "li")(1510, "a", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1511, "Ad-Din Women's Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1512, "li")(1513, "a", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1514, "Khwaja Yunus Ali Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1515, "li")(1516, "a", 434);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1517, "Tairunnessa Memorial Medical College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1518, "div", 435)(1519, "div", 114)(1520, "a", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1521, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1522, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1523, "ul")(1524, "li")(1525, "a", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1526, "AMA School of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1527, "li")(1528, "a", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1529, "Emilio Aguinaldo College \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1530, "li")(1531, "a", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1532, "Lyceum Northwestern University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1533, "li")(1534, "a", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1535, "UV Gullas College of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1536, "li")(1537, "a", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1538, "Angeles University Foundation \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1539, "li")(1540, "a", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1541, "Manila Central University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1542, "li")(1543, "a", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1544, "Southwestern University PHINMA \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1545, "li")(1546, "a", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1547, "St. Paul University Philippines \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1548, "li")(1549, "a", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1550, "Liceo College of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1551, "li")(1552, "a", 446);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1553, "AMEC Bicol Christian College of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1554, "li")(1555, "a", 447);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1556, "Davao Medical School Foundation \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1557, "li")(1558, "a", 448);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1559, "Our Lady Of Fatima University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1560, "li")(1561, "a", 449);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1562, "University of Perpetual Help \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1563, "li")(1564, "a", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1565, "Cebu Institute of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1566, "li")(1567, "a", 451);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1568, "University of Santo Tomas \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1569, "li")(1570, "a", 452);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1571, "University of Northern Philippines \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1572, "li")(1573, "a", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1574, "Central Philippine University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1575, "li")(1576, "a", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1577, "Brokenshire College School of Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1578, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1579, "div", 455)(1580, "div", 114)(1581, "a", 456);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1582, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1583, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1584, "ul")(1585, "li")(1586, "a", 457);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1587, "Qiqihar Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1588, "li")(1589, "a", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1590, "Yangzhou University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1591, "li")(1592, "a", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1593, "Xinjiang University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1594, "li")(1595, "a", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1596, "Ningxia University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1597, "li")(1598, "a", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1599, "Xi'an Jiaotong University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1600, "li")(1601, "a", 462);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1602, "Jilin Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1603, "li")(1604, "a", 463);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1605, "Dalian Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1606, "li")(1607, "a", 464);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1608, "Wenzhou Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1609, "li")(1610, "a", 465);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1611, "Southern Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1612, "li")(1613, "a", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1614, "Guangxi Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1615, "li")(1616, "a", 467);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1617, "Chongqing Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1618, "li")(1619, "a", 468);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1620, "Tianjin Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1621, "li")(1622, "a", 469);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1623, "Capital Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1624, "li")(1625, "a", 470);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1626, "Zhejiang Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1627, "li")(1628, "a", 471);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1629, "Shandong University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1630, "li")(1631, "a", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1632, "Fudan University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1633, "li")(1634, "a", 473);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1635, "Nanjing Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1636, "li")(1637, "a", 474);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1638, "Jiangsu University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1639, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1640, "li")(1641, "a", 475);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1642, "Wuhan University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1643, "li")(1644, "a", 476);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1645, "Jinan University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1646, "li")(1647, "a", 477);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1648, "Sichuan University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1649, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1650, "div", 478)(1651, "div", 114)(1652, "a", 479);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1653, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1654, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1655, "ul")(1656, "li")(1657, "a", 480);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1658, "Belarusian State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1659, "li")(1660, "a", 481);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1661, "Gomel State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1662, "li")(1663, "a", 482);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1664, "Grodno State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1665, "li")(1666, "a", 483);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1667, "Vitebsk State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1668, "div", 484)(1669, "div", 114)(1670, "a", 485);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1671, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1672, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1673, "ul")(1674, "li")(1675, "a", 486);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1676, "Karaganda State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1677, "li")(1678, "a", 487);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1679, "Kazakh National Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1680, "li")(1681, "a", 488);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1682, "Semey State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1683, "li")(1684, "a", 489);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1685, "South Kazakhstan State Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1686, "li")(1687, "a", 490);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1688, "West Kazakhstan Marat Ospanov State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1689, "li")(1690, "a", 491);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1691, "Kazakh Medical University of Continuing Education \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1692, "li")(1693, "a", 492);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1694, "Astana Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1695, "li")(1696, "a", 493);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1697, "Kazakh Russian Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1698, "li")(1699, "a", 494);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1700, "Kokshetau State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1701, "li")(1702, "a", 495);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1703, "North Kazakhstan State University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1704, "li")(1705, "a", 496);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1706, "Al-Farabi Kazakh National University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1707, "li")(1708, "a", 497);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1709, "UIB International Medical School \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1710, "div", 498)(1711, "div", 114)(1712, "a", 499);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1713, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1714, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1715, "ul")(1716, "li")(1717, "a", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1718, "Armenian Medical Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1719, "li")(1720, "a", 501);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1721, "St. Tereza Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1722, "li")(1723, "a", 502);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1724, "Yerevan State Medical University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1725, "li")(1726, "a", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1727, "University of Traditional Medicine \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1728, "li")(1729, "a", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1730, "Yerevan Haybusak University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1731, "li")(1732, "a", 505);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1733, "Mkhitar Gosh Armenian-Russian International University \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1734, "div", 506)(1735, "div", 114)(1736, "a", 507);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1737, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1738, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1739, "ul")(1740, "li")(1741, "a", 508);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1742, "Andijan State Medical Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1743, "li")(1744, "a", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1745, "Bukhara State Medical Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1746, "li")(1747, "a", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1748, "Samarkand State Medical Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1749, "li")(1750, "a", 511);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1751, "Tashkent Medical Academy \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1752, "li")(1753, "a", 512);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1754, "Tashkent State Dental Institute \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1755, "li", 110)(1756, "a", 513);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1757, "Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1758, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1759, "div", 514)(1760, "div", 114)(1761, "a", 515);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1762, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1763, " Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1764, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1765, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1766, "ul")(1767, "li", 110)(1768, "a", 516);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1769, " MBA \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1770, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1771, "div", 517)(1772, "div", 114)(1773, "a", 518);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1774, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1775, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1776, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1777, "TOP COLLEGE BY COUNTRIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1778, "ul")(1779, "li")(1780, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1781, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1782, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1783, "li")(1784, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1785, "UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1786, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1787, "li")(1788, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1789, "Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1790, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1791, "li")(1792, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1793, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1794, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1795, "li")(1796, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1797, "Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1798, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1799, "li")(1800, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1801, "Other Countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1802, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1803, "li", 110)(1804, "a", 519);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1805, " BBA \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1806, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1807, "div", 520)(1808, "div", 114)(1809, "a", 521);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1810, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1811, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1812, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1813, "TOP COLLEGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1814, "ul")(1815, "li")(1816, "a", 522);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1817, "BBA in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1818, "li")(1819, "a", 523);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1820, "Dr. D.Y. Patil University school of management, Navi mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1821, "li")(1822, "a", 524);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1823, "Shivaji University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1824, "li")(1825, "a", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1826, "Symbiosis International University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1827, "li")(1828, "a", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1829, "FLAME University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1830, "li")(1831, "a", 526);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1832, "MIT World Peace University, Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1833, "li")(1834, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1835, "Christ University, Banglore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1836, "li", 110)(1837, "a", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1838, "Computer Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1839, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1840, "div", 528)(1841, "div", 114)(1842, "a", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1843, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1844, " Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1845, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1846, "Computer Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1847, "ul")(1848, "li", 110)(1849, "a", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1850, " BCA \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1851, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1852, "div", 531)(1853, "div", 114)(1854, "a", 532);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1855, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1856, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1857, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1858, "TOP COLLEGE BY COURSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1859, "ul")(1860, "li")(1861, "a", 533);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1862, "Indraprastha Institute of Tesechnology and Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1863, "li")(1864, "a", 534);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1865, "Presidency College, Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1866, "li")(1867, "a", 535);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1868, "IMS, Ghaziabad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1869, "li")(1870, "a", 536);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1871, "Bharati Vidyapeeth Institute of Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1872, "li")(1873, "a", 537);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1874, "Dy Patil Arts, Commerce & Science College Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1875, "li")(1876, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1877, "Garware College of Commerce Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1878, "li")(1879, "a", 538);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1880, "Kristu Jayanti College, Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1881, "li", 110)(1882, "a", 539);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1883, " MCA \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1884, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1885, "div", 540)(1886, "div", 114)(1887, "a", 541);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1888, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1889, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1890, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1891, "TOP COURSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1892, "ul")(1893, "li")(1894, "a", 542);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1895, "MCA in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1896, "li")(1897, "a", 536);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1898, "Bharati Vidyapeeth Institute of Management Entrepreneurship Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1899, "li")(1900, "a", 537);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1901, "D. Y. Patil Institute of Management and Research,Pimpri, Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1902, "li")(1903, "a", 543);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1904, "MIT School of Mangagement, Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1905, "li")(1906, "a", 544);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1907, "Sinhgad Institute of Management & Computer Apllication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1908, "li")(1909, "a", 545);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1910, "Oxford College of Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1911, "li")(1912, "a", 546);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1913, "Acharya Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1914, "li")(1915, "a", 547);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1916, "Vellore Institute Of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1917, "li")(1918, "a", 548);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1919, "Cambridge Institute of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1920, "li")(1921, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1922, "Modern College of Pune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1923, "li")(1924, "a", 549);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1925, "MET institute of computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1926, "li")(1927, "a", 550);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1928, "Amity institute of Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1929, "li", 110)(1930, "a", 551);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1931, "Other Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1932, "i", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1933, "div", 552)(1934, "div", 114)(1935, "a", 553);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1936, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1937, " Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1938, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1939, "All Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1940, "ul")(1941, "li", 110)(1942, "a", 554);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1943, " Aviation \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1944, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1945, "div", 555)(1946, "div", 114)(1947, "a", 556);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1948, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1949, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1950, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1951, "Aviation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1952, "ul")(1953, "li")(1954, "a", 557);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1955, "Aviation in Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1956, "li")(1957, "a", 558);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1958, "National Aviation University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1959, "li")(1960, "a", 559);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1961, "National Aerospace University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1962, "li")(1963, "a", 560);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1964, "Ufa State Aviation Technical University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1965, "li")(1966, "a", 561);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1967, "Moscow Aviation Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1968, "li")(1969, "a", 562);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1970, "Samara State Aerospace University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1971, "li", 110)(1972, "a", 563);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1973, " Arts \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1974, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1975, "div", 564)(1976, "div", 114)(1977, "a", 565);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1978, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1979, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1980, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1981, "Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1982, "ul")(1983, "li")(1984, "a", 566);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1985, "Kharkiv National University of Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1986, "li")(1987, "a", 567);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1988, "Lviv National Academy of Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1989, "li")(1990, "a", 568);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1991, "Kyiv National University of Culture and Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1992, "li")(1993, "a", 569);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1994, "Kharkiv State Academy of Design and Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1995, "li")(1996, "a", 570);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1997, "Kharkiv State Academy of Culture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1998, "li", 110)(1999, "a", 571);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2000, " Other Universities \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2001, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2002, "div", 572)(2003, "div", 114)(2004, "a", 573);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2005, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2006, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2007, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2008, "Other Universities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2009, "ul")(2010, "li")(2011, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2012, "Hungary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2013, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2014, "li")(2015, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2016, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2017, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2018, "li")(2019, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2020, "Estonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2021, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2022, "li")(2023, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2024, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2025, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2026, "li")(2027, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2028, "Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2029, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2030, "li")(2031, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2032, "UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2033, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2034, "li")(2035, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2036, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2037, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2038, "li")(2039, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2040, "Latvia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2041, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2042, "li")(2043, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2044, "Lithuania");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2045, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2046, "li")(2047, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2048, "Phillippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2049, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2050, "div", 108)(2051, "span", 109)(2052, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2053, "Popular Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2054, "ul")(2055, "li")(2056, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_2056_listener() { return ctx.getclass("course"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2057, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2058, "li")(2059, "a", 574);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_2059_listener() { return ctx.getclass("college"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2060, "Top Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2061, "li")(2062, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2063, "Top Universities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2064, "li")(2065, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_2065_listener() { return ctx.getclass("news"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2066, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2067, "li")(2068, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_2068_listener() { return ctx.getclass("blogs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2069, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2070, "li")(2071, "a", 575);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_a_click_2071_listener() { return ctx.getclass("faq"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2072, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2073, "div", 108)(2074, "span", 109)(2075, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2076, "More Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2077, "ul")(2078, "li")(2079, "a", 576);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2080, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2081, "li")(2082, "a", 577);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2083, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2084, "li")(2085, "a", 578);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2086, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2087, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2088, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2089, "img", 579);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2090, "button", 580);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_2090_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2091, "i", 581);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2092, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2093, NavComponent_div_2093_Template, 1, 0, "div", 582);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.navbarfixed ? "fixed" : "nofixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.bgClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.navbarlogo ? "logofixed" : "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv3 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv5 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv6 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv7 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv8 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv9 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv10 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv12 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv13 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv14 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv3 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv12 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv13 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv14 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv15 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv16 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv17 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv18 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv19 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv20 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv21 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv22 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv23 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv24 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv29 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv5 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv6 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv7 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv8 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv9 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv10 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11a == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv3 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv12 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv13 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv14 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv15 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv28 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv5 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv6 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv7 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv8 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv9 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv10 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11a == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv11b == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showdiv3 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1664);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoverlay == true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  float: left;\n  transition: all 1s ease;\n}\n.syuLogo[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 0px 10px #fff);\n  width: 45%;\n  margin-left: -40%;\n  padding-top: 10px;\n}\n.college[_ngcontent-%COMP%]   .logofixed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   .logofixed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  padding-top: 10px;\n}\n.college[_ngcontent-%COMP%]   .syuLogo[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   .syuLogo[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n.syuLogo.college-page-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.college[_ngcontent-%COMP%]   .syuLogo.college-page-logo[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   .syuLogo.college-page-logo[_ngcontent-%COMP%], .exam-filter[_ngcontent-%COMP%]   .syuLogo.college-page-logo[_ngcontent-%COMP%] {\n  display: block !important;\n  margin-left: 0px !important;\n}\n.exam-filter[_ngcontent-%COMP%]   .syuLogo.college-page-logo[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n}\n.college[_ngcontent-%COMP%]   .syuLogo[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   .syuLogo[_ngcontent-%COMP%], .exam-filter[_ngcontent-%COMP%]   .syuLogo[_ngcontent-%COMP%] {\n  display: none;\n}\n#togglebtn[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  background: none;\n  margin-top: 20px;\n}\n.mobilelogo[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-left: 0px;\n  filter: drop-shadow(0px 0px 10px #fff);\n}\n.nav1[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #FFF !important;\n  margin-right: 10px;\n  margin-left: 5px;\n}\n.nav1[_ngcontent-%COMP%]   .activeabout[_ngcontent-%COMP%] {\n  background: #151B54;\n  color: #FFA500 !important;\n  margin-right: 10px;\n  margin-left: 5px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 36px;\n  padding-top: 5px;\n  background: #12498F;\n}\n.nav1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  list-style: none;\n  float: left;\n  color: black;\n  margin: 0px 0px;\n}\n.nav1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  text-decoration: none;\n  color: #fff;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 100;\n  padding: 5px 15px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.nav1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #FFA500 !important;\n}\n.nav1[_ngcontent-%COMP%]   li.navLogin[_ngcontent-%COMP%] {\n  float: right;\n  margin: unset;\n}\n.nav1DownloadBtn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #fff;\n  padding: 0px 10px !important;\n  color: #000 !important;\n  margin-right: 5px;\n  border-radius: 4px !important;\n}\n.nav1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav1DownloadBtn[_ngcontent-%COMP%]:hover {\n  background: #FFA500;\n  color: #ffffff !important;\n}\n#menubox[_ngcontent-%COMP%] {\n  background-color: #DCDCDC;\n  min-height: 100% !important;\n}\n#menuboxli[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n#arrow[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 690px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n\nnav[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 99999999;\n  width: 100%;\n  padding-top: 1em;\n  padding-bottom: 2.5em;\n  line-height: normal;\n  background: rgba(0, 60, 136, 0.7882352941);\n}\n.zeynep[_ngcontent-%COMP%] {\n  display: none;\n}\nmain[_ngcontent-%COMP%], .lead[_ngcontent-%COMP%], .btn-open[_ngcontent-%COMP%] {\n  display: none;\n}\nnav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1300px;\n  padding: 0px 30px;\n  height: auto;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  float: right;\n}\n.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  font-size: 30px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: unset;\n  text-align: left;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif !important;\n  color: #fff;\n  text-decoration: none;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 7px 15px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.row[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #5f5f5f;\n  font-weight: 600;\n}\n.row[_ngcontent-%COMP%]   .col-lg-10[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: none;\n  color: #5f5f5f;\n}\n.row[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .featureSubHead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #5f5f5f;\n  font-weight: 600;\n}\n.row[_ngcontent-%COMP%]   .col-lg-12[_ngcontent-%COMP%]   .featureSubHead[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: none;\n  color: #5f5f5f;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #151B54;\n  color: #FFA500;\n  margin-right: 10px;\n  margin-left: 5px;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #12498F;\n  border-radius: 0px;\n  color: #FFA500;\n}\n#menubox[_ngcontent-%COMP%]   ul.mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-left: 4px solid #feab11;\n  border-radius: 0px;\n}\n.nav-links[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-links[_ngcontent-%COMP%]   .drop-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  background: whitesmoke;\n  width: 180px;\n  line-height: 45px;\n  top: 50px !important;\n  opacity: 0;\n  visibility: hidden;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .drop-menu[_ngcontent-%COMP%], .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .mega-box[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  top: 60px;\n  opacity: 1;\n  visibility: visible;\n  color: #FFA500;\n  margin-top: -7px;\n}\n.drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  padding: 0 0 0 15px;\n  font-weight: 400;\n  border-radius: 0px;\n}\n.mega-box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -30%;\n  cursor: pointer;\n  width: 100%;\n  padding: 0 30px;\n  top: 45px !important;\n  opacity: 0;\n  visibility: hidden;\n}\n.mega-box[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  padding: 5px 5px;\n  display: flex;\n  width: 1116px;\n  justify-content: space-between;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);\n  flex-wrap: wrap;\n  margin: 0;\n}\n.scroll[_ngcontent-%COMP%] {\n  height: 315px;\n  overflow: auto;\n}\n.content[_ngcontent-%COMP%] {\n  width: calc(25% - 30px);\n  line-height: 35px;\n}\n.anim[_ngcontent-%COMP%] {\n  width: calc(75% - 30px);\n  line-height: 35px;\n}\n.First[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #FFA500;\n  background-color: #E5E4E2;\n}\n#div1[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: 700;\n  font-size: 13px;\n}\n#div2[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 23px;\n  font-weight: 700;\n  font-size: 13px;\n}\n#div3[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  font-weight: 700;\n  font-size: 13px;\n}\n#div4[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: 700;\n  font-size: 13px;\n}\n.content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0px;\n  margin: 5px;\n  text-align: center;\n  background: #12498f;\n}\n.content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%] {\n  margin-left: -15px;\n  border-left: 1px solid rgba(255, 255, 255, 0.09);\n  width: 100%;\n}\n.row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  max-width: 100%;\n  display: block;\n}\n.row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0px;\n  padding: 0 20px;\n  font-size: 13px;\n  display: block;\n}\n.row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #151B54 !important;\n}\n.row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n}\n.nav-links[_ngcontent-%COMP%]   ul.drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #151B54 !important;\n  font-size: 14px;\n  font-weight: 500;\n}\n.nav-links[_ngcontent-%COMP%]   ul.drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFA500 !important;\n}\n.wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #151B54;\n  font-size: 20px;\n  cursor: pointer;\n  display: none;\n}\n.wrapper[_ngcontent-%COMP%]   .btn.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 10px;\n}\nnav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.body-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  text-align: center;\n  padding: 0 30px;\n}\n.body-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 600;\n}\n\n@media (max-width: 1025px) {\n  .animated[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n@media (max-width: 992px) {\n  .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .zeynep[_ngcontent-%COMP%] {\n    display: block;\n  }\n  main[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], .lead[_ngcontent-%COMP%], .btn-open[_ngcontent-%COMP%] {\n    display: block;\n  }\n  main[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 9;\n    background: rgba(18, 73, 143, 0.6117647059) !important;\n    width: 100% !important;\n  }\n  .zeynep[_ngcontent-%COMP%] {\n    top: 0;\n    bottom: 0;\n    position: fixed;\n    overflow: hidden;\n    overflow-y: auto;\n    z-index: 1011;\n    pointer-events: none;\n    transform: translateX(-100%) translateZ(0px);\n    -webkit-overflow-scrolling: touch;\n  }\n  .zeynep[_ngcontent-%COMP%]:not(.no-transition), .zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]:not(.no-transition) {\n    \n    transition: all 250ms;\n  }\n  .zeynep-overlay[_ngcontent-%COMP%] {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: block !important;\n    position: fixed;\n    z-index: 1010;\n    background-color: rgba(0, 0, 0, 0.42);\n  }\n  .zeynep-opened[_ngcontent-%COMP%]   .zeynep-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .zeynep.opened[_ngcontent-%COMP%] {\n    pointer-events: auto;\n    transform: translateX(0px) translateZ(0px);\n  }\n  .zeynep.submenu-opened[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n    top: 0;\n    bottom: 0;\n    min-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n    position: fixed;\n    width: 100%;\n    pointer-events: none;\n    -webkit-overflow-scrolling: touch;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu.opened[_ngcontent-%COMP%] {\n    left: 0;\n    pointer-events: auto;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu.opened[_ngcontent-%COMP%]:not(.current) {\n    overflow: hidden;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .zeynep-opened[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n    overflow: hidden;\n  }\n  .zeynep.right[_ngcontent-%COMP%] {\n    left: 0;\n    right: auto;\n  }\n  .zeynep.right[_ngcontent-%COMP%]:not(.opened) {\n    transform: translateX(-100%);\n  }\n  .top[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .animated[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .trending1[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  .abroadc[_ngcontent-%COMP%]:hover {\n    transition: none !important;\n    z-index: 2;\n  }\n  .q2[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .q3[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .apps[_ngcontent-%COMP%] {\n    padding: 35px;\n  }\n  .app1[_ngcontent-%COMP%] {\n    padding-top: 25px;\n    font-size: 35px;\n  }\n  .apply[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .outer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .in[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .s11[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .textbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .questions[_ngcontent-%COMP%] {\n    padding: 0px 40px;\n  }\n  .s33[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .s3[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .f1[_ngcontent-%COMP%] {\n    border-bottom: none;\n    border-right: none;\n  }\n  .f1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .f1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .toph6[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  hr[_ngcontent-%COMP%] {\n    width: 2px;\n    color: #FFA500;\n  }\n  \n  \n  .counseling[_ngcontent-%COMP%]:hover {\n    transition: none !important;\n    z-index: 2;\n  }\n  .counseling2[_ngcontent-%COMP%]:hover {\n    transition: none !important;\n    z-index: 2;\n  }\n  \n  .filters[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .iem[_ngcontent-%COMP%] {\n    top: 31%;\n    left: 37%;\n  }\n  .filtersm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .iecc[_ngcontent-%COMP%]:hover {\n    transition: none !important;\n    z-index: 2;\n  }\n  .filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .filtersul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n@media (max-width: 768px) {\n  .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 40px;\n  }\n  .trending1[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .c1[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n  .selecth[_ngcontent-%COMP%], .abroadh[_ngcontent-%COMP%], .assisth[_ngcontent-%COMP%], .domain[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .f1[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n  .s33[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .s3[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .select1h[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .para[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .caption[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .abouth5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  \n  .apps[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n  \n  .questions[_ngcontent-%COMP%] {\n    padding: 0px 40px;\n  }\n  .q2[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .q3[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .footer1[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .f1[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n  .f1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n  hr[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .tech[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 100px;\n  }\n  .iit[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .rating1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n  .ratings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: right;\n  }\n  .a1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .a2[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .brochure[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  \n  .bloghs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .blogsw[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media (max-width: 580px) {\n  .top[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 2px;\n  }\n  \n  .trendingp[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  #header3[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .eventul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .study1[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  \n  .study[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .countries[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .event[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .eventul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px;\n  }\n  .eventbtn[_ngcontent-%COMP%] {\n    width: 200px;\n    font-size: 15px;\n    align-items: center;\n  }\n  .cam[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    align-items: center;\n  }\n  .course[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n  .course1[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 0px 30px;\n  }\n  .in[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .apply[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .trending1[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .trend1[_ngcontent-%COMP%] {\n    padding: 0px;\n    align-items: left;\n  }\n  .trend1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 25px;\n  }\n  .trend1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 0px;\n  }\n  .trend2[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .abouth[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .p1[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .h21[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .course[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .domain[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .domainh5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .select[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .selecth[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  \n  .select1[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 0px 30px;\n  }\n  .abroad[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n  .abroadh[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .abroadh5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .btn4[_ngcontent-%COMP%] {\n    width: 160px;\n    height: 50px;\n    border-radius: 50px;\n    padding: 10px;\n    font-size: 16px;\n  }\n  .read[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    width: 160px;\n    height: 50px;\n    border-radius: 50px;\n    padding: 10px;\n    font-size: 16px;\n  }\n  .abroadh1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .assist[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    padding-top: 30px;\n    padding-bottom: 20px;\n  }\n  .assisth[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .para[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: square;\n  }\n  .blog[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .slides[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin: 0px;\n  }\n  .infoh[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14;\n    margin: 0px;\n    padding: 0px;\n  }\n  .swiper[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .blogh[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .imh[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  \n  .subscribe[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .s1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .s33[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .s3[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  \n  \n  \n  .app[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n  .app1[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    font-size: 22px;\n  }\n  .apps[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .question[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .questions[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .q2[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .q3[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  \n  \n  \n  .footer[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .toph6[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .ids[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .ids[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .social1[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  Address[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .f1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .copy1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  \n  .filters[_ngcontent-%COMP%] {\n    overflow: visible;\n    overflow-y: hidden;\n  }\n  .filtersul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  \n  .servs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mission[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .abouth[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .numh3[_ngcontent-%COMP%], .numh6[_ngcontent-%COMP%], .go1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .reviewp1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .speaks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .stari[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .visionp[_ngcontent-%COMP%], .texts[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  \n  .blogsw[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .bloghs[_ngcontent-%COMP%] {\n    height: auto;\n    padding-top: 80px;\n  }\n  .searching[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .techno[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .cb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .cb[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .technoh5[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .technop[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  \n  form[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .rowss[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .contacth1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    text-align: center;\n    font-family: \"Averta-Semibold\";\n  }\n  .loc1[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .loc2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .locp[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  \n  .entrance[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .entranceh1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-top: 80px;\n  }\n  .exploreh1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .exploreh2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .exploreim[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid gray;\n  }\n  \n  .courseimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .courserow[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30%;\n    left: 0%;\n    padding: 15px;\n  }\n  .courseh11[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: \"Averta-Semibold\";\n    font-size: 20px;\n    padding-left: 16px;\n  }\n  .topcoursesh1[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .choicet[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  \n  .newsi[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media (max-width: 320px) {\n  .study1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .in[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .abouth[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .p1[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .trendingp[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n.zeynep[_ngcontent-%COMP%] {\n  bottom: 0;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transform: translateX(-100%) translateZ(0px);\n  z-index: 1011;\n}\n.zeynep[_ngcontent-%COMP%]:not(.no-transition), .zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]:not(.no-transition) {\n  transition: all 250ms;\n}\n.zeynep-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n  bottom: 0;\n  display: none;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 1010;\n}\n.zeynep-opened[_ngcontent-%COMP%]   .zeynep-overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n.zeynep.opened[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  transform: translateX(0px) translateZ(0px);\n  background: linear-gradient(180deg, #518ad1, #000000);\n  color: #ffffff !important;\n  z-index: 99999 !important;\n}\n.zeynep.submenu-opened[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  bottom: 0;\n  min-height: 100%;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n.zeynep[_ngcontent-%COMP%]   .submenu.opened[_ngcontent-%COMP%] {\n  left: 0;\n  pointer-events: auto;\n  color: #212112;\n}\n.zeynep[_ngcontent-%COMP%]   .submenu.opened[_ngcontent-%COMP%]:not(.current) {\n  overflow: hidden;\n}\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n@media (max-width: 992px) {\n  .lead[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.44;\n    max-width: 260px;\n    margin: 0 auto;\n    margin-bottom: 25px;\n  }\n  \n  .btn-open[_ngcontent-%COMP%] {\n    border: 0;\n    \n    \n    \n    float: left;\n    font-size: 25px;\n    font-weight: bold;\n    \n    margin: 0 6px;\n  }\n  \n  .btn-open.first[_ngcontent-%COMP%] {\n    \n    color: black;\n  }\n  .btn-open.second[_ngcontent-%COMP%] {\n    \n    color: black;\n  }\n  \n  .zeynep[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    color: #404143;\n    width: 250px;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n    padding-left: 10px;\n    -webkit-overflow-scrolling: touch;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: block;\n    font-size: 15px;\n    font-weight: 600;\n    padding: 10px 15px;\n    text-decoration: none;\n    transition: all 150ms;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n    background-color: #efefef;\n    border-radius: 3px;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-child)    > a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #efefef;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li.has-submenu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    background-position: right 20px center;\n    background-repeat: no-repeat;\n    background-size: 8px 14px;\n  }\n  .zeynep[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n    color: #000000;\n    background: #b8bfff;\n  }\n  \n  .zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n    background-color: #ffffff;\n    left: 295px;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu-header[_ngcontent-%COMP%] {\n    background-position: left 20px center;\n    background-repeat: no-repeat;\n    background-size: 8px 14px;\n    border-bottom: solid 1px #efefef;\n    cursor: pointer;\n    position: relative;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: inherit;\n    display: block;\n    font-size: 14px;\n    font-weight: bold;\n    padding: 14px 20px;\n    padding-left: 10px;\n    text-decoration: none;\n    background: linear-gradient(180deg, rgba(81, 138, 209, 0.3607843137), transparent);\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n    background-position: right 20px center;\n    background-repeat: no-repeat;\n    background-size: 8px 14px;\n    content: \"\";\n    height: 100%;\n    left: 26px;\n    position: absolute;\n    top: 0;\n    transform: rotate(-180deg);\n    width: 20px;\n  }\n  .zeynep[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    color: #ffffff;\n    display: block;\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 8px;\n    margin-top: 19px;\n    opacity: 1;\n    padding-left: 25px !important;\n    width: 100%;\n    background: #12498F;\n    padding: 10px;\n    text-transform: uppercase;\n  }\n}\n\nbody[_ngcontent-%COMP%] {\n  left: 0;\n}\n.zeynep-opened[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.zeynep[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  transition: all 1s ease;\n  top: 0px;\n  z-index: 99999999;\n  background: rgba(18, 73, 143, 0.6117647059) !important;\n  box-shadow: 0 0 10px 3px #dedede;\n  display: block;\n}\n.fixed[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  padding-bottom: 2.5em;\n  line-height: normal;\n}\n.fixed[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  line-height: normal;\n  height: auto;\n}\n.nofixed[_ngcontent-%COMP%] {\n  position: static;\n  transition: all 1s ease;\n  top: -50px;\n  display: block;\n}\n.float-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n.allCourseHeader[_ngcontent-%COMP%] {\n  padding: 6px;\n  \n  font-size: 10px;\n  margin-left: 14px;\n  text-align: center;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.loginMobBox[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px 15px;\n  align-items: center;\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 15px;\n  background: linear-gradient(0deg, #518ad1, rgba(0, 0, 0, 0.168627451));\n}\n.MobLoginBoxWidthPNG[_ngcontent-%COMP%] {\n  width: 30% !important;\n}\n.MobLoginBoxWidthText[_ngcontent-%COMP%] {\n  width: 70% !important;\n}\n.loginMobIcon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 38px;\n  fill: #fff;\n  padding-left: 10px;\n}\n.loginMobSvg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 0px 4px #fff);\n}\n.loginSignupMobText[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.logofixed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 130px !important;\n  margin-top: -10px;\n  float: left;\n  margin-left: 20px;\n  padding-top: 0px;\n}\n.MobHeadingStrip[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-top: 1px;\n  background: linear-gradient(180deg, #41a1f9, rgba(8, 7, 7, 0.3098039216));\n  color: #fff;\n  font-size: 15px;\n  text-align: start;\n  font-weight: 500;\n  padding-left: 25px;\n  letter-spacing: 0.5px;\n}\n.target[_ngcontent-%COMP%]   ul.mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.menuFaFaAngle[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 11px;\n}\n.target[_ngcontent-%COMP%]   ul.mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menuMoreLink[_ngcontent-%COMP%] {\n  color: #1f4f89 !important;\n  font-weight: 600;\n}\n.target[_ngcontent-%COMP%]   ul.mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.menuMoreLink[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n  font-weight: 600;\n}\n.mega-box[_ngcontent-%COMP%]   .featureHeading[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\";\n  padding: 0px 10px;\n  margin: 0;\n  margin-top: 7px;\n  margin-bottom: 1em;\n  font-size: 15px;\n  font-weight: 700;\n  color: #5c6778;\n  text-transform: uppercase;\n}\n.mega-box[_ngcontent-%COMP%]   .featureCardBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mega-box[_ngcontent-%COMP%]   .featureCardBoxPadding[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n.mega-box[_ngcontent-%COMP%]   .featureSection[_ngcontent-%COMP%] {\n  border-top: 1px solid #dfdfdf;\n  margin-top: 3px !important;\n}\n.mega-box[_ngcontent-%COMP%]   .featureSection[_ngcontent-%COMP%]   .cd-bottom-img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 2px;\n  box-shadow: 0px 0px 7px 1px #efefef;\n  background: #fff;\n  border-radius: 4px;\n  height: 35px;\n  width: 35px;\n}\n.mega-box[_ngcontent-%COMP%]   .featureParentHead[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #5f5f5f;\n  font-weight: 600;\n}\n.mega-box[_ngcontent-%COMP%]   .featureSubHeadBox[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-top: -13px;\n  margin-bottom: 10px;\n}\n.mega-box[_ngcontent-%COMP%]   .featureSubHead[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  margin: 0;\n  color: #8791a2;\n}\n.outer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border: none;\n  color: #12498F;\n  position: fixed;\n  letter-spacing: 3px;\n  writing-mode: vertical-rl;\n  left: 0;\n  top: 40%;\n  padding: 6px;\n  font-size: 23px;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  box-shadow: 6px 0px 10px rgba(0, 0, 0, 0.5607843137);\n  z-index: 999;\n}\n.outer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  font-size: 23px;\n}\n.sticky-container[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  position: fixed;\n  right: -170px;\n  top: 40%;\n  width: 210px;\n  z-index: 1100;\n  background-color: #FFF;\n  border: none;\n  padding: 2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5607843137);\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  background-color: #fff;\n  color: #efefef;\n  height: 40px;\n  padding: 0px;\n  margin: 0px 0px 1px 0px;\n  transition: all 0.25s ease-in-out;\n  cursor: pointer;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  margin-left: -95px;\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  margin: 5px 4px;\n  margin-right: 5px;\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  margin: 0px;\n  line-height: 20px;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #2C3539;\n}\n.sticky[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n@media screen and (max-width: 767px) {\n  .outer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sticky-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.fixed[_ngcontent-%COMP%]   .college[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .exam-filter[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.college[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .exam-filter[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(18, 73, 143, 0.6705882353);\n}\nnav.filter[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.fixed[_ngcontent-%COMP%]   .about-us[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .abroad-course[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .blog[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .blog-content[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .college-filter[_ngcontent-%COMP%], .fixed[_ngcontent-%COMP%]   .exam-filter[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n.nav1[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.gallery[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.gallery-ul[_ngcontent-%COMP%] {\n  position: absolute;\n  position: absolute;\n  top: 35px;\n  left: 0;\n  background: #fff;\n  z-index: 999999999;\n  width: 130px;\n  max-height: 0;\n  overflow: hidden;\n  transition-delay: 0.3s;\n}\n.gallery-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  width: 100%;\n}\n.gallery-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #151B54 !important;\n  font-size: 14px;\n  font-weight: 400;\n}\n.gallery-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #1f4f89;\n  color: #fff !important;\n}\n.gallery[_ngcontent-%COMP%]:hover   .gallery-ul[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSw0RkFBQTtBQU9SO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQU5GO0FBVUE7O0VBRUUsZ0RBQUE7QUFQRjtBQVVBO0VBRUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFSRjtBQVVBO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVBGO0FBU0E7O0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtBQU5GO0FBUUE7O0VBRUUsZ0JBQUE7QUFMRjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBTUE7OztFQUdFLHlCQUFBO0VBQ0EsMkJBQUE7QUFIRjtBQUtBO0VBQ0MsMkJBQUE7QUFGRDtBQUlBOzs7RUFHRSxhQUFBO0FBREY7QUFHQTtFQUVFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURGO0FBS0E7RUFFRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQUhGO0FBTUE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUMseURBQUE7QUFDQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGO0FBTUM7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFIRDtBQUtDO0VBQ0UsZ0RBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZIO0FBSUM7RUFDQyx1QkFBQTtFQUNBLHlCQUFBO0FBREY7QUFLQztFQUNDLFlBQUE7RUFDQSxhQUFBO0FBRkY7QUFJQztFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQURGO0FBR0M7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0FBQUY7QUFJQztFQUVDLHlCQUFBO0VBQ0EsMkJBQUE7QUFGRjtBQUtDO0VBRUMsY0FBQTtFQUNBLGVBQUE7QUFIRjtBQU1DO0VBRUMsZ0JBQUE7QUFKRjtBQU9DO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFMSjtBQU9DLDREQUFBO0FBQ0Q7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBSkY7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQU9BO0VBQ0UsYUFBQTtBQUpGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUxGO0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU1BO0VBQ0Usb0JBQUE7QUFIRjtBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlBO0VBQ0UsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFERjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBT0E7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFRQTtFQUNFLGFBQUE7QUFMRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFKRjtBQU1BOztFQUVFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBSUY7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtGO0FBSEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUY7QUFIQTtFQUNFLHlCQUFBO0FBTUY7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7QUFMQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7QUFOQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFTRjtBQVBBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVVGO0FBTkE7RUFDRSxhQUFBO0FBU0Y7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPRjtBQUxBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUUY7QUFOQyw0REFBQTtBQUVBO0VBQ0M7SUFDQSxhQUFBO0VBUUE7QUFDRjtBQUpBO0VBQ0U7SUFDSSxhQUFBO0VBTUo7RUFKQTtJQUNJLGFBQUE7RUFNSjtFQUhBO0lBQ0ksYUFBQTtFQUtKO0VBSEE7SUFDSSxjQUFBO0VBS0o7RUFGRTtJQUNFLGNBQUE7RUFJSjtFQUZFO0lBQ0UsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLHNEQUFBO0lBQ0Esc0JBQUE7RUFJSjtFQURFO0lBQ0UsTUFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtJQUNBLDRDQUFBO0lBQ0EsaUNBQUE7RUFHSjtFQUFFOztJQUVFLG9DQUFBO0lBQ0EscUJBQUE7RUFFSjtFQUNFO0lBQ0UsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxxQ0FBQTtFQUNKO0VBRUU7SUFDRSxjQUFBO0VBQUo7RUFHRTtJQUNFLG9CQUFBO0lBQ0EsMENBQUE7RUFESjtFQUlFO0lBQ0UsZ0JBQUE7RUFGSjtFQUtFO0lBQ0UsTUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0lBQ0EsaUNBQUE7RUFISjtFQU1FO0lBQ0UsT0FBQTtJQUNBLG9CQUFBO0VBSko7RUFPRTtJQUNFLGdCQUFBO0VBTEo7RUFRRSxvQ0FBQTtFQUNKO0lBQ0UsUUFBQTtFQU5BO0VBU0Y7SUFDRSxnQkFBQTtFQVBBO0VBVUY7SUFDRSxPQUFBO0lBQ0EsV0FBQTtFQVJBO0VBV0Y7SUFDRSw0QkFBQTtFQVRBO0VBZUE7SUFDSSxZQUFBO0VBYko7RUFlQTtJQUNJLFlBQUE7RUFiSjtFQWVBO0lBQ0UsYUFBQTtFQWJGO0VBZ0JGO0lBRUUsMkJBQUE7SUFHQSxVQUFBO0VBakJBO0VBbUJGO0lBQ0ksZ0JBQUE7RUFqQkY7RUFtQkY7SUFDSSxnQkFBQTtFQWpCRjtFQW9CRjtJQUNJLGFBQUE7RUFsQkY7RUFvQkY7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUFsQkY7RUFvQkY7SUFDSSxhQUFBO0VBbEJGO0VBb0JGO0lBQ0ksY0FBQTtFQWxCRjtFQXNCRjtJQUNJLGFBQUE7RUFwQkY7RUFzQkY7Ozs7Ozs7O0lBQUE7RUFTQTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBcEJGO0VBc0JGO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUFwQkY7RUF1QkY7SUFDSSxpQkFBQTtFQXJCRjtFQTJCRjtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBekJGO0VBMkJGO0lBQ0ksZ0JBQUE7RUF6QkY7RUEyQkY7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0VBekJGO0VBMkJGO0lBQ0ksa0JBQUE7RUF6QkY7RUE0QkY7SUFDSSxlQUFBO0VBMUJGO0VBNEJGO0lBQ0ksZUFBQTtFQTFCRjtFQTZCRjtJQUNHLFVBQUE7SUFDQSxjQUFBO0VBM0JEO0VBOEJGLG9FQUFBO0VBWUEscUVBQUE7RUFHQTtJQUVFLDJCQUFBO0lBR0EsVUFBQTtFQTVDQTtFQStDRjtJQUVFLDJCQUFBO0lBR0EsVUFBQTtFQWhEQTtFQW1ERixrRUFBQTtFQUVBO0lBQ0UsYUFBQTtFQWxEQTtFQXFERjtJQUVFLFFBQUE7SUFDQSxTQUFBO0VBcERBO0VBc0RGO0lBQ0UsY0FBQTtFQXBEQTtFQXNERjtJQUNFLDJCQUFBO0lBR0EsVUFBQTtFQXREQTtFQTBEQTtJQUNJLGFBQUE7RUF4REo7RUEyREQ7SUFDSSxlQUFBO0VBekRIO0FBQ0Y7QUE0REE7RUFDRTtJQUNJLGFBQUE7RUExREo7RUE0REE7SUFDSSxhQUFBO0VBMURKO0VBNkRBO0lBQ0ksYUFBQTtFQTNESjtFQThEQTtJQUNJLFlBQUE7SUFDQSxvQkFBQTtFQTVESjtFQStEQTtJQUNFLGFBQUE7RUE3REY7RUFnRUY7SUFDSSxXQUFBO0VBOURGO0VBbUVGO0lBQ0ksZUFBQTtFQWpFRjtFQW1FQTtJQUNJLGlCQUFBO0VBakVKO0VBb0VBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUFsRUY7RUFxRUE7SUFDRSxnQkFBQTtFQW5FRjtFQXNFRjtJQUNJLGVBQUE7RUFwRUY7RUF1RUY7SUFDSSxlQUFBO0VBckVGO0VBdUVGO0lBQ0ksZUFBQTtFQXJFRjtFQXVFRjtJQUNJLGVBQUE7RUFyRUY7RUF3RUYsNkNBQUE7RUFDQTtJQUNJLGFBQUE7RUF0RUY7RUF5RUYseUNBQUE7RUFDQTtJQUNJLGlCQUFBO0VBdkVGO0VBeUVGO0lBQ0ksZ0JBQUE7RUF2RUY7RUF5RUY7SUFDSSxnQkFBQTtFQXZFRjtFQTBFRjtJQUNJLGVBQUE7RUF4RUY7RUEwRUY7SUFDSSxpQkFBQTtFQXhFRjtFQTBFRjtJQUNJLGlCQUFBO0VBeEVGO0VBMkVGO0lBQ0ksYUFBQTtFQXpFRjtFQTJFRiw2REFBQTtFQUNBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUF6RUE7RUEyRUY7SUFDRSxlQUFBO0VBekVBO0VBNEVGO0lBQ0UsZ0JBQUE7RUExRUE7RUE2RUY7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUEzRUE7RUE2RUY7SUFDQyxlQUFBO0VBM0VDO0VBNkVGO0lBQ0UsZUFBQTtFQTNFQTtFQTZFRjtJQUNFLGdCQUFBO0VBM0VBO0VBK0VGLDZDQUFBO0VBQ0E7SUFDRSxlQUFBO0VBN0VBO0VBK0VGO0lBQ0UsZ0JBQUE7RUE3RUE7QUFDRjtBQWlGQTtFQUNBO0lBQ0ksWUFBQTtJQUNBLG1CQUFBO0VBL0VGO0VBa0ZGOzs7O0lBQUE7RUFNQTtJQUNJLGVBQUE7RUFqRkY7RUFtRkQ7SUFDSSxnQkFBQTtFQWpGSDtFQXdGRjtJQUNJLGVBQUE7RUF0RkY7RUF3RkY7SUFDSSxlQUFBO0VBdEZGO0VBeUZGOztJQUFBO0VBR0E7SUFDSSxpQkFBQTtFQXZGRjtFQXlGRjtJQUNJLGFBQUE7RUF2RkY7RUF5RkY7SUFDSSxhQUFBO0VBdkZGO0VBeUZGO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUF2RkY7RUF5RkY7O0lBQUE7RUFHQTtJQUVJLGNBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQXhGRjtFQTBGRjtJQUNJLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUF4RkY7RUEwRkY7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUVBLG1CQUFBO0VBekZGO0VBMkZGO0lBQ0ksaUJBQUE7SUFDRixvQkFBQTtFQXpGQTtFQTJGRjtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7RUF6RkY7RUEyRkY7SUFDSSxhQUFBO0VBekZGO0VBMkZGO0lBQ0ksYUFBQTtFQXpGRjtFQTRGRjtJQUNJLFlBQUE7RUExRkY7RUE0RkY7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7RUExRkY7RUE0RkY7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQTFGRjtFQTRGRjtJQUNFLGNBQUE7SUFDQSxZQUFBO0VBMUZBO0VBNEZGO0lBQ0ksY0FBQTtFQTFGRjtFQTZGRjtJQUNJLGVBQUE7RUEzRkY7RUFnR0Y7SUFDSSxlQUFBO0VBOUZGO0VBZ0dGO0lBQ0ksZUFBQTtFQTlGRjtFQWlHRjtJQUNJLGdCQUFBO0VBL0ZGO0VBaUdGO0lBQ0ksZUFBQTtFQS9GRjtFQWlHRjtJQUNJLGVBQUE7RUEvRkY7RUFpR0Y7SUFDSSxnQkFBQTtFQS9GRjtFQWlHRjtJQUNJLGVBQUE7RUEvRkY7RUFtR0Y7OztJQUFBO0VBSUE7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VBakdGO0VBc0dGO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBcEdGO0VBc0dGO0lBQ0ksZUFBQTtFQXBHRjtFQXNHRjtJQUNJLGVBQUE7RUFwR0Y7RUFzR0Y7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUFwR0E7RUF1R0Y7SUFDSSxlQUFBO0lBQ0YsWUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VBckdBO0VBdUdGO0lBQ0ksZUFBQTtFQXJHRjtFQXdHRjtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQXRHRjtFQXdHRjtJQUNJLGVBQUE7RUF0R0Y7RUF3R0Y7SUFDSSx1QkFBQTtFQXRHRjtFQXlHRjtJQUNJLGdCQUFBO0VBdkdGO0VBMEdGO0lBQ0ksWUFBQTtJQUNBLFdBQUE7RUF4R0Y7RUEwR0Y7SUFDSSxlQUFBO0VBeEdGO0VBMEdGO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBeEdGO0VBMEdGO0lBQ0ksZ0JBQUE7RUF4R0Y7RUEyR0Y7SUFDSSxlQUFBO0VBekdGO0VBMkdGO0lBQ0ksZUFBQTtFQXpHRjtFQTJHRixtREFBQTtFQUNBO0lBQ0ksZ0JBQUE7RUF6R0Y7RUEyR0Y7SUFDSSxlQUFBO0VBekdGO0VBMkdGO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUF6R0Y7RUEyR0Y7SUFDSSxnQkFBQTtFQXpHRjtFQTZHRjs7SUFBQTtFQUdBOztJQUFBO0VBSUEsd0NBQUE7RUFDRTtJQUNJLGdCQUFBO0VBNUdKO0VBOEdEO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBNUdIO0VBOEdEO0lBQ0ksYUFBQTtFQTVHSDtFQWdIRCx5Q0FBQTtFQUNDO0lBQ0ksZ0JBQUE7RUE5R0o7RUFnSEE7SUFDSSxhQUFBO0VBOUdKO0VBa0hGO0lBQ0ksZ0JBQUE7RUFoSEY7RUFrSEY7SUFDSSxnQkFBQTtFQWhIRjtFQW1IRixnQ0FBQTtFQUNBOztJQUFBO0VBR0E7Ozs7Ozs7OztJQUFBO0VBVUE7SUFDSSxnQkFBQTtFQWpIRjtFQW1IRjtJQUNJLGVBQUE7RUFqSEY7RUFvSEY7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQWxIRjtFQW9IRjtJQUNJLGVBQUE7RUFsSEY7RUFvSEY7SUFDSSxlQUFBO0VBbEhGO0VBb0hGO0lBQ0MsZUFBQTtFQWxIQztFQW9IRjtJQUNJLGVBQUE7RUFsSEY7RUFvSEY7SUFDQSxlQUFBO0VBbEhFO0VBc0hGLGdGQUFBO0VBQ0E7SUFDRyxpQkFBQTtJQUNBLGtCQUFBO0VBcEhEO0VBc0hGO0lBQ0UsZUFBQTtFQXBIQTtFQXVIRixvRUFBQTtFQUNBO0lBQ0UsZUFBQTtFQXJIQTtFQXdIRjtJQUNFLGVBQUE7RUF0SEE7RUEwSEY7SUFDRSxlQUFBO0VBeEhBO0VBMEhGO0lBQ0UsZUFBQTtFQXhIQTtFQTRIRiw0REFBQTtFQUNBO0lBQ0UsYUFBQTtFQTFIQTtFQTRIRjtJQUVFLFlBQUE7SUFDQSxpQkFBQTtFQTNIQTtFQTZIRjtJQUNFLFlBQUE7RUEzSEE7RUE4SEY7SUFDRSxhQUFBO0VBNUhBO0VBOEhGO0lBQ0UsZUFBQTtFQTVIQTtFQThIRjtJQUNFLGVBQUE7RUE1SEE7RUE4SEY7SUFDRSxlQUFBO0VBNUhBO0VBK0hGO0lBQ0UsZUFBQTtFQTdIQTtFQWdJRixxRUFBQTtFQUNBO0lBQ0UsYUFBQTtFQTlIQTtFQWdJRjtJQUNFLGtCQUFBO0VBOUhBO0VBZ0lGO0lBQ0UsZUFBQTtJQUVBLGtCQUFBO0lBRUEsOEJBQUE7RUFoSUE7RUFvSUY7SUFDQSxlQUFBO0VBbElFO0VBb0lGO0lBQ0EsZUFBQTtFQWxJRTtFQW9JRjtJQUNBLGVBQUE7RUFsSUU7RUF1SUYsK0RBQUE7RUFDQTtJQUNFLGFBQUE7RUFySUE7RUF1SUY7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFySUU7RUF1SUY7SUFDRSxlQUFBO0VBcklBO0VBdUlGO0lBQ0UsZUFBQTtFQXJJQTtFQXVJRjtJQUNFLGtCQUFBO0lBQ0EsNkJBQUE7RUFySUE7RUF1SUYsK0RBQUE7RUFDQTtJQUVFLGFBQUE7RUF0SUE7RUF3SUY7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsYUFBQTtFQXRJQTtFQXdJRDtJQUNDLDhCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBdElBO0VBeUlEO0lBQ0ksZUFBQTtFQXZJSDtFQXlJRDtJQUNJLGVBQUE7RUF2SUg7RUEwSUQsaUVBQUE7RUFDQTtJQUNDLGVBQUE7RUF4SUE7QUFDRjtBQThJQTtFQUNFO0lBQ0ksZUFBQTtFQTVJSjtFQThJQTtJQUNFLGFBQUE7RUE1SUY7RUErSUE7SUFDRSxlQUFBO0VBN0lGO0VBK0lGO0lBQ0ksZUFBQTtFQTdJRjtFQStJRjtJQUNJLGVBQUE7RUE3SUY7QUFDRjtBQWtKQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0FBaEpGO0FBbUpBOztFQUVFLHFCQUFBO0FBaEpGO0FBbUpBO0VBQ0UscUNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBaEpGO0FBbUpBO0VBQ0UsY0FBQTtBQWhKRjtBQW1KQTtFQUNFLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFoSkY7QUFtSkE7RUFDRSxnQkFBQTtBQWhKRjtBQW1KQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBaEpGO0FBbUpBO0VBQ0UsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQWhKRjtBQW1KQTtFQUNFLGdCQUFBO0FBaEpGO0FBbUpBO0VBQ0Usc0JBQUE7QUFoSkY7QUFtSkE7Ozs7Ozs7OztFQUFBO0FBV0E7Ozs7RUFBQTtBQU1BOzs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0E7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQWxKQTtFQXFKRjs7O0lBQUE7RUFLQTtJQUNFLFNBQUE7SUFDQSx5QkFBQTtJQUNBLCtDQUFBO0lBQ0QsMEJBQUE7SUFDQyxXQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0E7Ozs7cUJBQUE7SUFLQSxhQUFBO0VBcEpBO0VBc0pGOztJQUFBO0VBSUE7SUFDRSw2QkFBQTtJQUNBLFlBQUE7RUFySkE7RUF1SkY7SUFDRSwyQkFBQTtJQUNBLFlBQUE7RUFySkE7RUF3SkYseUJBQUE7RUFDQTtJQUNFLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUF0SkE7RUF5SkY7SUFDRSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGlDQUFBO0VBdkpBO0VBeUpGO0lBQ0UsY0FBQTtFQXZKQTtFQTBKRjtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0VBeEpBO0VBMEpGO0lBQ0UseUJBQUE7SUFDQSxrQkFBQTtFQXhKQTtFQTJKRjtJQUNFLGdDQUFBO0VBekpBO0VBNEpGO0lBRUUsc0NBQUE7SUFDQSw0QkFBQTtJQUNBLHlCQUFBO0VBM0pBO0VBOEpGO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VBNUpGO0VBb0tGLDRCQUFBO0VBQ0E7SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUFsS0E7RUFxS0Y7SUFFRSxxQ0FBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQXBLQTtFQXVLRjtJQUNFLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0Esa0ZBQUE7RUFyS0E7RUF3S0Y7SUFFRSxzQ0FBQTtJQUNBLDRCQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSwwQkFBQTtJQUNBLFdBQUE7RUF2S0E7RUEwS0Y7SUFDRSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7RUF4S0E7QUFDRjtBQTBLQSxtQ0FBQTtBQUNBO0VBQ0UsT0FBQTtBQXhLRjtBQTJLQTtFQUNFLGdCQUFBO0FBeEtGO0FBMktBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7QUF4S0Y7QUErS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUE1S0Y7QUE4S0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUEzS0Y7QUE2S0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUExS0Y7QUE0S0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUF6S0Y7QUE0S0E7RUFDQyx1QkFBQTtBQXpLRDtBQTRLQTtFQUNHLFlBQUE7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQXpLSjtBQTZLQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUlBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHNFQUFBO0FBMUtKO0FBNEtBO0VBQ0MscUJBQUE7QUF6S0Q7QUEyS0E7RUFDQyxxQkFBQTtBQXhLRDtBQTBLQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQWMsVUFBQTtFQUFZLGtCQUFBO0FBcEt6QztBQXNLQTtFQUNFLHFDQUFBO0FBbktGO0FBcUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQWxLRjtBQXFLQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWxLRjtBQW9LQTtFQUNDLFlBQUE7RUFDRyxlQUFBO0VBQ0EseUVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNILHFCQUFBO0FBaktEO0FBcUtBO0VBQ0UsZUFBQTtBQWxLRjtBQW9LQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQWpLRjtBQW1LQTtFQUNFLHlCQUFBO0VBQXlCLGdCQUFBO0FBL0ozQjtBQWlLQTtFQUNFLHNCQUFBO0VBQXNCLGdCQUFBO0FBN0p4QjtBQWdLQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBN0pGO0FBK0pBO0VBRUUsYUFBQTtBQTdKRjtBQWdLQTtFQUNFLGlCQUFBO0FBN0pGO0FBZ0tBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQTdKRjtBQStKQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNUpGO0FBOEpBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTNKRjtBQTZKQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTFKSjtBQTRKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBekpGO0FBOEpBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtBQTNKRjtBQTZKQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQTFKRjtBQThKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9EQUFBO0FBM0pGO0FBNkpBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBSUEsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQTFKRjtBQTRKQTtFQUNFLGtCQUFBO0FBekpGO0FBMkpBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXhKRjtBQTBKQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUF2SkY7QUF5SkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUF0SkY7QUF3SkE7RUFDRSxxQkFBQTtBQXJKRjtBQXlKQTtFQUNFO0lBQ0UsYUFBQTtFQXRKRjtFQXdKQTtJQUNFLGFBQUE7RUF0SkY7QUFDRjtBQTRKQTs7RUFFRSxXQUFBO0FBMUpGO0FBNEpBOzs7RUFJRSxzQ0FBQTtBQTFKRjtBQTRKQTtFQUdFLHNCQUFBO0FBM0pGO0FBNkpBOzs7Ozs7O0VBUUUseUJBQUE7QUEzSkY7QUErSkE7RUFHRyxlQUFBO0VBQ0EsY0FBQTtBQTlKSDtBQWdLQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQTdKRjtBQStKQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBSUEsc0JBQUE7QUEvSkY7QUFpS0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQTlKRjtBQWdLQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBN0pGO0FBZ0tBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQTdKRjtBQWdLQTtFQUNDLGlCQUFBO0FBN0pEIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vLyBAZm9udC1mYWNlIHtcclxuLy8gICBmb250LWZhbWlseTogJ0F2ZXJ0YVN0ZC1SZWd1bGFyJyA7XHJcbi8vICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL0F2ZXJ0YWZvbnQvQXZlcnRhU3RkLVJlZ3VsYXIudHRmKTtcclxuXHJcbi8vIH1cclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ29cclxue1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAxLjBzIGVhc2U7XHJcbn1cclxuLnN5dUxvZ297XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggI2ZmZik7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW4tbGVmdDogLTQwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uY29sbGVnZSAubG9nb2ZpeGVkIGEgaW1nLFxyXG4uZmlsdGVyIC5sb2dvZml4ZWQgYSBpbWd7XHJcbiAgbWFyZ2luLXRvcDotMjBweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5jb2xsZWdlIC5zeXVMb2dvLFxyXG4uZmlsdGVyIC5zeXVMb2dve1xyXG4gIHBhZGRpbmctdG9wOjhweDtcclxufVxyXG4uc3l1TG9nby5jb2xsZWdlLXBhZ2UtbG9nb3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb2xsZWdlIC5zeXVMb2dvLmNvbGxlZ2UtcGFnZS1sb2dvLFxyXG4uZmlsdGVyIC5zeXVMb2dvLmNvbGxlZ2UtcGFnZS1sb2dvLFxyXG4uZXhhbS1maWx0ZXIgLnN5dUxvZ28uY29sbGVnZS1wYWdlLWxvZ297XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDowcHggIWltcG9ydGFudFxyXG59XHJcbi5leGFtLWZpbHRlciAuc3l1TG9nby5jb2xsZWdlLXBhZ2UtbG9nb3tcclxuIHBhZGRpbmctdG9wOjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xsZWdlIC5zeXVMb2dvLFxyXG4uZmlsdGVyIC5zeXVMb2dvLFxyXG4uZXhhbS1maWx0ZXIgLnN5dUxvZ297XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jdG9nZ2xlYnRuXHJcbntcclxuICBwYWRkaW5nOiAwcHggMjBweDsgLy83cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLm1vYmlsZWxvZ29cclxue1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggI2ZmZik7XHJcbn1cclxuXHJcbi5uYXYxIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5uYXYxIC5hY3RpdmVhYm91dCB7XHJcbiAgYmFja2dyb3VuZDogIzE1MUI1NDtcclxuICBjb2xvcjogI0ZGQTUwMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tdG9wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gLm5hdmlnYXRpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogIzEyNDk4RjtcclxuIFxyXG4gfVxyXG4gLm5hdjEgbGl7XHJcbiBkaXNwbGF5OiBpbmxpbmU7XHJcbiBsaXN0LXN0eWxlOiBub25lO1xyXG4gZmxvYXQ6IGxlZnQ7IC8vbWFyZ2luOiAxMHB4O1xyXG4gY29sb3I6IGJsYWNrO1xyXG4gbWFyZ2luOiAwcHggMHB4O1xyXG4gfVxyXG4gLm5hdjEgbGkgYXtcclxuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuIH1cclxuIC5uYXYxIGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNGRkE1MDAgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAvL215Y3NzXHJcbiAubmF2MSBsaS5uYXZMb2dpbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiB1bnNldDtcclxuIH1cclxuIC5uYXYxRG93bmxvYWRCdG57XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuIH1cclxuIC5uYXYxIGxpIGEubmF2MURvd25sb2FkQnRuOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNGRkE1MDA7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcblxyXG4gI21lbnVib3hcclxuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENEQ0RDO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAjbWVudWJveGxpXHJcbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7Ly8xNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDsvLy0xNXB4O1xyXG4gfVxyXG5cclxuICNhcnJvd1xyXG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiB9XHJcbiBcclxuIC50b3B7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDo2OTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy8zOTY5NS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgXHJcbiAgfVxyXG4gLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZpZ2F0aW9uIEJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBcclxubmF2e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyLjVlbTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGJhY2tncm91bmQ6ICMwMDNjODhjOTsvLyMxMjQ5OGZjOTsvLyMxMjQ5OGY5YyAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDUwcHg7IC8vRm9yIG5hdmJhciBzdGlja3lcclxufVxyXG4uemV5bmVwe1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubWFpbiwgIC5sZWFkLCAuYnRuLW9wZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubmF2IC53cmFwcGVye1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTMwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gIGhlaWdodDogYXV0bzsgLy82Vkg7XHJcbiAgLy8gbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi53cmFwcGVyIC5sb2dvIGF7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi53cmFwcGVyIC5uYXYtbGlua3N7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLm5hdi1saW5rcyBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm5hdi1saW5rcyBsaSBhe1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmIDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLnJvdyAuY29sLWxnLTEwIGF7XHJcbiAgZm9udC1zaXplOiAxMHB4OyBcclxuICBjb2xvcjogIzVmNWY1ZjsgLy8jODc5MWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbn1cclxuLnJvdyAuY29sLWxnLTEwIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogIzVmNWY1ZjtcclxufVxyXG5cclxuLnJvdyAuY29sLWxnLTEyIC5mZWF0dXJlU3ViSGVhZCBhe1xyXG4gIGZvbnQtc2l6ZTogMTBweDsgXHJcbiAgY29sb3I6ICM1ZjVmNWY7IC8vIzg3OTFhMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIFxyXG59XHJcbi5yb3cgLmNvbC1sZy0xMiAuZmVhdHVyZVN1YkhlYWQgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiAjNWY1ZjVmO1xyXG59XHJcblxyXG4gIC5uYXYtbGlua3MgbGkgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6ICMxNTFCNTQ7XHJcbiAgICBjb2xvcjogI0ZGQTUwMDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuLm5hdi1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICMxMjQ5OEY7IC8vIzEyNDk4ZmFiOy8vIzE1MUI1NDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgY29sb3I6ICNGRkE1MDAgO1xyXG59XHJcblxyXG4vLyAud3JhcHBlciA+IHVsLm5hdi1saW5rcyBsaSBhIC5tZWdhLWJveCAuY29udGVudCAjbWVudWJveC5tZW51IHVsLm1lZ2EtbGlua3MgbGkgYTpmaXJzdC1jaGlsZDpob3ZlciB7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZmVhYjExO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuLy8gfVxyXG5cclxuI21lbnVib3ggdWwubWVnYS1saW5rcyBsaSBhOmhvdmVye1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZlYWIxMTtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxufVxyXG5cclxuXHJcbi5uYXYtbGlua3MgLm1vYmlsZS1pdGVte1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdi1saW5rcyAuZHJvcC1tZW51e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICB0b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuLm5hdi1saW5rcyBsaTpob3ZlciAuZHJvcC1tZW51LFxyXG4ubmF2LWxpbmtzIGxpOmhvdmVyIC5tZWdhLWJveHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgY29sb3I6ICNGRkE1MDA7XHJcbiAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG4uZHJvcC1tZW51IGxpIGF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4ubWVnYS1ib3h7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDogLTMwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIHRvcDogNDVweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5tZWdhLWJveHtcclxuICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAgMTExNnB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNjcm9sbHtcclxuICBoZWlnaHQ6IDMxNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICB3aWR0aDogY2FsYygyNSUgLSAzMHB4KTtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmFuaW17XHJcbiAgd2lkdGg6IGNhbGMoNzUlIC0gMzBweCk7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuLkZpcnN0IC5hY3RpdmV7XHJcbiAgY29sb3I6ICNGRkE1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFMjtcclxufVxyXG5cclxuI2RpdjEgaGVhZGVye1xyXG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiNkaXYyIGhlYWRlcntcclxuICBtYXJnaW4tbGVmdDogMjNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4jZGl2MyBoZWFkZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4jZGl2NCBoZWFkZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcblxyXG4uY29udGVudCAucm93IGhlYWRlcntcclxuICAgIGNvbG9yOiAjZmZmZmZmOyAvLyMxNTFCNTQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTI0OThmOy8vI2ZmYmY1MGE4O1xyXG59XHJcbi5jb250ZW50IC5yb3cgLm1lZ2EtbGlua3N7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucm93IC5tZWdhLWxpbmtzIGxpe1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucm93IC5tZWdhLWxpbmtzIGxpIGF7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yb3cgLm1lZ2EtbGlua3MgbGkgYXtcclxuICBjb2xvcjogIzE1MUI1NCAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3cgLm1lZ2EtbGlua3MgbGkgYTpob3ZlcntcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtbGlua3MgdWwuZHJvcC1tZW51IGxpIGF7XHJcbiAgY29sb3I6ICMxNTFCNTQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5uYXYtbGlua3MgdWwuZHJvcC1tZW51IGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNGRkE1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIgLmJ0bntcclxuICBjb2xvcjojMTUxQjU0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ud3JhcHBlciAuYnRuLmNsb3NlLWJ0bntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxubmF2IGlucHV0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvZHktdGV4dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbn1cclxuLmJvZHktdGV4dCBkaXZ7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBOYXZpZ2F0aW9uIGJhci0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiBAbWVkaWEgKG1heC13aWR0aDoxMDI1cHgpe1xyXG4gIC5hbmltYXRlZHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MnB4KXtcclxuICAubmF2aWdhdGlvbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbmF2e1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbmF2IC53cmFwcGVye1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuemV5bmVwe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgbWFpbiwgaDEsIC5sZWFkLCAuYnRuLW9wZW57XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgbWFpbntcclxuICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB6LWluZGV4OiA5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAgIzEyNDk4ZjljICFpbXBvcnRhbnQ7IC8vIzMwMzAzMDFhO1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC56ZXluZXAge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICB6LWluZGV4OiAxMDExO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSB0cmFuc2xhdGVaKDBweCk7XHJcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnpleW5lcDpub3QoLm5vLXRyYW5zaXRpb24pLFxyXG4gICAgLnpleW5lcCAuc3VibWVudTpub3QoLm5vLXRyYW5zaXRpb24pIHtcclxuICAgICAgLyogaWYgdHJhbnNpdGlvbnMgYXJlIG5vdCBkaXNhYmxlZCAqL1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC56ZXluZXAtb3ZlcmxheSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAxMDEwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40Mik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC56ZXluZXAtb3BlbmVkIC56ZXluZXAtb3ZlcmxheSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuemV5bmVwLm9wZW5lZCB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVaKDBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC56ZXluZXAuc3VibWVudS1vcGVuZWQge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuemV5bmVwIC5zdWJtZW51IHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC56ZXluZXAgLnN1Ym1lbnUub3BlbmVkIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC56ZXluZXAgLnN1Ym1lbnUub3BlbmVkOm5vdCguY3VycmVudCkge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHJpZ2h0IHNpZGUgbWVudSBzcGVjaWZpYyBzdHlsZXMgKi9cclxuYm9keSB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi56ZXluZXAtb3BlbmVkIGJvZHkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi56ZXluZXAucmlnaHQge1xyXG4gIGxlZnQ6IDA7Ly9hdXRvO1xyXG4gIHJpZ2h0OiBhdXRvOyAvLzBcclxufVxyXG5cclxuLnpleW5lcC5yaWdodDpub3QoLm9wZW5lZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IC8vdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuICAudG9we1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5hbmltYXRlZHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudHJlbmRpbmcxe1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmFicm9hZGM6aG92ZXJ7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC8vIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gIC8vIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ucTJ7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuLnEze1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmFwcHN7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcbi5hcHAxe1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBmb250LXNpemU6MzVweDtcclxufVxyXG4uYXBwbHl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vdXRlciBoNHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAvL3RvcDo1NyUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKi5mb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ29ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zb2NpYWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0qL1xyXG4uczExe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcdFxyXG59XHJcbi50ZXh0Ym94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnF1ZXN0aW9uc3tcclxuICAgIHBhZGRpbmc6MHB4IDQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zMzN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zM3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmYxe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG4uZjEgdWx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBcclxufVxyXG4uZjEgdWx7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLnRvcGg2e1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG5ocntcclxuICAgd2lkdGg6IDJweDtcclxuICAgY29sb3I6ICNGRkE1MDA7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKipBYm91dCBVcy5odG1sKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipzZXJ2aWNlLmh0bWwqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4uY291bnNlbGluZzpob3ZlcntcclxuICBcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XHJcbiAgLy8gLW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY291bnNlbGluZzI6aG92ZXJ7XHJcbiAgXHJcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC8vIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gIC8vIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKipDb2xsZWdlcy5odG1sKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmZpbHRlcnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmllbXtcclxuXHJcbiAgdG9wOiAzMSU7XHJcbiAgbGVmdDogMzclO1xyXG59XHJcbi5maWx0ZXJzbXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaWVjYzpob3ZlcntcclxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XHJcbiAgLy8gLW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyO1xyXG4gIFxyXG4gfVxyXG4gIFxyXG4gIC5maWx0ZXJzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgfVxyXG4gLmZpbHRlcnN1bCBsaXtcclxuICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAubmF2aWdhdGlvbntcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbmF2e1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbmF2IC53cmFwcGVye1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAudG9we1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAudHJlbmRpbmcxe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmMxe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLnNlbGVjdGgsIC5hYnJvYWRoLCAuYXNzaXN0aCwgLmRvbWFpbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4gIC5mMXtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMzN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4gIC5zM3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3QxaHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICBcclxufVxyXG4ucGFyYSBsaXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYWJvdXRoNXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1hcHAtLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uYXBwc3tcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLVF1ZXN0aW9ucy0tLS0tLS0tLS0qL1xyXG4ucXVlc3Rpb25ze1xyXG4gICAgcGFkZGluZzowcHggNDBweDtcclxufVxyXG4ucTJ7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuLnEze1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmZvb3RlcjF7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLmYxe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLmYxIHVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKkFib3V0Lmh0bWwqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udGVjaCBpbWd7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmlpdCBoNXtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5yYXRpbmcxe1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5yYXRpbmdzIHB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hMXtcclxuIGZvbnQtc2l6ZTogMzBweDsgXHJcbn1cclxuLmEye1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnJvY2h1cmV7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqYmxvZy5odG1sKioqKioqKioqKioqKioqKioqKi9cclxuLmJsb2docyBoMXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLmJsb2dzd3tcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcclxuLnRvcHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcblxyXG59XHJcbi8qIC5zZWN0aW9uMntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgICBwYWRkaW5nOiAwcHg7XHJcbn0qL1xyXG5cclxuLnRyZW5kaW5ncHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4gI2hlYWRlcjN7XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgXHJcbiAgICBcclxuICAgIFxyXG4gfVxyXG5cclxuIFxyXG4uZXZlbnR1bCBsaXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc3R1ZHkxe1xyXG4gICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICBcclxufVxyXG4vKi5zdHVkeXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0qL1xyXG4uc3R1ZHl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uZmxhZ3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNvdW50cmllc3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmV2ZW50e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4vKi5ldmVudHVse1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSovXHJcbi5ldmVudHVsIGxpe1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZXZlbnRidG57XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYW17XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb3Vyc2V7XHJcbiAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jb3Vyc2Uxe1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6MHB4IDMwcHg7XHJcbn1cclxuLmlue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYXBwbHl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udHJlbmRpbmcxe1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi50cmVuZDF7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxufVxyXG4udHJlbmQxIGltZ3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi50cmVuZDEgcHtcclxuICBmb250LXNpemU6IDhweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnRyZW5kMntcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4uYWJvdXRoe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICBcclxufVxyXG5cclxuXHJcbi5wMXtcclxuICAgIGZvbnQtc2l6ZToxMnB4IDtcclxufVxyXG4uaDIxe1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uY291cnNle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZG9tYWlue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5kb21haW5oNXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uc2VsZWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uc2VsZWN0aHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi8qLnNlbGVjdGlte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTUwMDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn0qL1xyXG4uc2VsZWN0MXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmFicm9hZHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hYnJvYWRoe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hYnJvYWRoNXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnRuNHtcclxuICB3aWR0aDoxNjBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlYWR7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgd2lkdGg6MTYwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7IFxyXG59XHJcbi5hYnJvYWRoMXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuLmFzc2lzdHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hc3Npc3Roe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5wYXJhIGxpe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XHJcbn1cclxuXHJcbi5ibG9ne1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuIFxyXG59XHJcbi5zbGlkZXN7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG59XHJcbi5pbmZvaHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaW5mbyBwe1xyXG4gICAgZm9udC1zaXplOiAxNDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59IFxyXG4uc3dpcGVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgXHJcbn1cclxuLmJsb2doe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5pbWh7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tU3Vic2NyaWJlLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc3Vic2NyaWJle1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uczF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnMzM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnMze1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcbi8qLmNhcHRpb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0qL1xyXG4vKi5wYXJhe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59Ki9cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLWFwcC0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmFwcHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAuYXBwMXtcclxuICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gfVxyXG4gLmFwcHN7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuIH1cclxuIFxyXG5cclxuIC8qLS0tLS0tLS0tLS0tLS0tLXF1ZXN0aW9ucy0tLS0tLS0tLS0tLS0qL1xyXG4gIC5xdWVzdGlvbntcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLnF1ZXN0aW9uc3tcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG5cclxuLnEye1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi5xM3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLWZvb3Rlci0tLS0tLS0qL1xyXG4vKi5mb290ZXIxe1xyXG4gICAgcGFkZGluZzogNDBweDtcclxufSovXHJcbi8qLmZvb3RlcntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmZvb3RlcjF7XHJcbiAgIHBhZGRpbmc6IDAgNTBweDtcclxufVxyXG4uZjEgdWx7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxufSovXHJcbi5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50b3BoNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmlkcyBpbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG4uaWRze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5zb2NpYWwxe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbkFkZHJlc3N7XHJcbiBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmYxIHVsIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmNvcHkxIHB7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKipDb2xsZWdlcy5odG1sKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uZmlsdGVyc3tcclxuICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uZmlsdGVyc3VsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKkFib3V0IFVzLmh0bWwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5zZXJ2cyBoMSwgLm1pc3Npb24gaDEsIC5hYm91dGh7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcblxyXG59XHJcbi5udW1oMywgLm51bWg2LCAuZ28xIGgyLCAucmV2aWV3cDEgcCwgLnNwZWFrcyBoM3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uc3RhcmkgaSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi52aXNpb25wLCAudGV4dHN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKkJsb2cuaHRtbCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uYmxvZ3N3e1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuLmJsb2doc3tcclxuXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcbi5zZWFyY2hpbmd7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4udGVjaG5vIGltZ3tcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5jYiB1bCBsaSBhe1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uY2IgdWwgbGkgYSBpe1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4udGVjaG5vaDV7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGVjaG5vcHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipjb250YWN0Lmh0bWwqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZm9ybXtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5yb3dzc3tcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNvbnRhY3RoMXtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIkF2ZXJ0YS1TZW1pYm9sZFwiO1xyXG4gXHJcbiAgXHJcbn1cclxuLmxvYzF7XHJcbmZvbnQtc2l6ZTogMjNweDtcclxufVxyXG4ubG9jMntcclxuZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sb2Nwe1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKkV4YW1zLmh0bWwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uZW50cmFuY2V7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4uZW50cmFuY2VoMSBoMXtcclxuZm9udC1zaXplOiAyNXB4O1xyXG5tYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5leHBsb3JlaDF7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5leHBsb3JlaDJ7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcbi5leHBsb3JlaW17XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKipUb3AgQ291cnNlcy5odG1sKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmNvdXJzZWltZyBpbWd7XHJcblxyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuLmNvdXJzZXJvd3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gfVxyXG4gLmNvdXJzZWgxMSBoMntcclxuICBmb250LWZhbWlseTogXCJBdmVydGEtU2VtaWJvbGRcIjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuIH1cclxuIC50b3Bjb3Vyc2VzaDF7XHJcbiAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gfVxyXG4gLmNob2ljZXR7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gfVxyXG5cclxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqTmV3cy5odG1sKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gLm5ld3NpIGl7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjMyMHB4KXtcclxuICAuc3R1ZHkxe1xyXG4gICAgICBmb250LXNpemU6MjVweDtcclxuICB9XHJcbiAgLmlue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuICAuYWJvdXRoe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wMXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udHJlbmRpbmdwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG59XHJcblxyXG5cclxuLnpleW5lcHtcclxuICBib3R0b206MDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7XHJcbiAgb3ZlcmZsb3cteTphdXRvO1xyXG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgdG9wOjA7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMCUpIHRyYW5zbGF0ZVooMHB4KTtcclxuICB6LWluZGV4OjEwMTE7XHJcbn1cclxuXHJcbi56ZXluZXA6bm90KC5uby10cmFuc2l0aW9uKSxcclxuLnpleW5lcCAuc3VibWVudTpub3QoLm5vLXRyYW5zaXRpb24pe1xyXG4gIHRyYW5zaXRpb246YWxsIDI1MG1zO1xyXG59XHJcblxyXG4uemV5bmVwLW92ZXJsYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIC40Mik7XHJcbiAgYm90dG9tOjA7XHJcbiAgZGlzcGxheTpub25lO1xyXG4gIGxlZnQ6MDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICByaWdodDowO1xyXG4gIHRvcDowO1xyXG4gIHotaW5kZXg6MTAxMDtcclxufVxyXG5cclxuLnpleW5lcC1vcGVuZWQgLnpleW5lcC1vdmVybGF5e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi56ZXluZXAub3BlbmVke1xyXG4gIHBvaW50ZXItZXZlbnRzOmF1dG87XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVaKDBweCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzUxOGFkMSwgIzAwMDAwMCk7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uemV5bmVwLnN1Ym1lbnUtb3BlbmVke1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLnpleW5lcCAuc3VibWVudXtcclxuICBib3R0b206MDtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO1xyXG4gIG92ZXJmbG93LXk6YXV0bztcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi56ZXluZXAgLnN1Ym1lbnUub3BlbmVke1xyXG4gIGxlZnQ6MDtcclxuICBwb2ludGVyLWV2ZW50czphdXRvO1xyXG4gIGNvbG9yOiMyMTIxMTI7XHJcbn1cclxuXHJcbi56ZXluZXAgLnN1Ym1lbnUub3BlbmVkOm5vdCguY3VycmVudCl7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTNjNjE7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59Ki9cclxuXHJcbi8qKixcclxuKjphZnRlcixcclxuKjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn0qL1xyXG5cclxuLypoMSB7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5oMSBzcGFuIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59Ki9cclxuQG1lZGlhKG1heC13aWR0aDo5OTJweCl7XHJcbi5sZWFkIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDQ7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKm1haW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1NXB4IDIwcHg7XHJcbn0qL1xyXG5cclxuLmJ0bi1vcGVuIHtcclxuICBib3JkZXI6IDA7XHJcbiAgLypib3JkZXItcmFkaXVzOiAyNy41cHg7Ki9cclxuICAvKmJveC1zaGFkb3c6IDAgMnB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIC4wNSk7Ki9cclxuIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIGZsb2F0OiBsZWZ0Oy8vcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8qbWluLXdpZHRoOiAxNTBweDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjsqL1xyXG4gIG1hcmdpbjogMCA2cHg7XHJcbn1cclxuLyouYnRuLW9wZW46YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59Ki9cclxuXHJcbi5idG4tb3Blbi5maXJzdCB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ2OThkOyovXHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5idG4tb3Blbi5zZWNvbmQge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7Ki9cclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIHpleW5lcGpzIG1lbnUgc3R5bGVzICovXHJcbi56ZXluZXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICM0MDQxNDM7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uemV5bmVwIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbi56ZXluZXAgdWwgPiBsaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi56ZXluZXAgdWwgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xyXG59XHJcbi56ZXluZXAgdWwgPiBsaSA+IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uemV5bmVwIHVsID4gbGk6bm90KDpsYXN0LWNoaWxkKSA+IGEge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG59XHJcblxyXG4uemV5bmVwIHVsID4gbGkuaGFzLXN1Ym1lbnUgPiBhIHtcclxuIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zdWJtZW51LWFycm93LnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAyMHB4IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDE0cHg7XHJcbn1cclxuXHJcbi56ZXluZXAgdWwgPiBsaSA+IGEuYWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjhiZmZmO1xyXG59XHJcblxyXG5cclxuLy8uemV5bmVwIHVsID4gbGkuaGFzLXN1Ym1lbnUgPiBhOmhvdmVyIHtcclxuIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zdWJtZW51LWFycm93LWFjdGl2ZS5zdmdcIik7XHJcbi8vfVxyXG5cclxuLyogemV5bmVwanMgc3VibWVudSBzdHlsZXMgKi9cclxuLnpleW5lcCAuc3VibWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBsZWZ0OiAyOTVweDtcclxufVxyXG5cclxuLnpleW5lcCAuc3VibWVudS1oZWFkZXIge1xyXG4vLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1hZ2VzL21lbnUtYmFjay5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAyMHB4IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZmVmZWY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnpleW5lcCAuc3VibWVudS1oZWFkZXIgPiBhIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzUxOGFkMTVjLCB0cmFuc3BhcmVudCk7IC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMDAwMDI0LCB0cmFuc3BhcmVudCk7XHJcbn1cclxuIFxyXG4uemV5bmVwIC5zdWJtZW51LWhlYWRlciA+IGE6YmVmb3JlIHtcclxuLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9zdWJtZW51LWFycm93LnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAyMHB4IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDE0cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMjZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uemV5bmVwIC5zdWJtZW51ID4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZmZmZmZmOyAvLyNlNzc2OTE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzEyNDk4RjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxufVxyXG4vKiBsZWZ0IHNpZGUgbWVudSBzcGVjaWZpYyBzdHlsZXMgKi9cclxuYm9keSB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnpleW5lcC1vcGVuZWQgYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnpleW5lcCB7XHJcbiAgcmlnaHQ6IDA7Ly9hdXRvO1xyXG4gIGxlZnQ6IGF1dG87IC8vMDtcclxufVxyXG5cclxuXHJcblxyXG4vL215Y3NzXHJcbi8vRm9yIE5hdmJhciBIZWFkZXIgU3RpY2t5IENTU1xyXG4uZml4ZWR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEuMHMgZWFzZTsgLy90cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICB0b3A6IDBweDtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiAjMTI0OThmOWMgIWltcG9ydGFudDsgLy8jZmZmXHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4ICNkZWRlZGU7IC8vYm94LXNoYWRvdzogMCAwIDEwcHggI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZml4ZWQgbmF2e1xyXG4gIHBhZGRpbmctdG9wOjFlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMi41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZml4ZWQgbmF2IC53cmFwcGVye1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbn1cclxuLm5vZml4ZWR7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB0cmFuc2l0aW9uOiBhbGwgMS4wcyBlYXNlOyAvL3RyYW5zaXRpb246IDAuMnMgbGluZWFyO1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodHtcclxuXHRmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsbENvdXJzZUhlYWRlcntcclxuXHQgIHBhZGRpbmc6IDZweDtcclxuICAgIC8qYmFja2dyb3VuZDogIzEyNEE4RjsqL1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbi5sb2dpbk1vYkJveHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzUxOGFkMSwgIzAwMDAwMDJiKTsvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3YmE2ZmUsIHRyYW5zcGFyZW50KTtcclxufVxyXG4uTW9iTG9naW5Cb3hXaWR0aFBOR3tcclxuXHR3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLk1vYkxvZ2luQm94V2lkdGhUZXh0e1xyXG5cdHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5Nb2JJY29ue1xyXG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDM4cHg7IGZpbGw6ICNmZmY7IHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ubG9naW5Nb2JTdmd7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDRweCAjZmZmKTtcclxufVxyXG4ubG9naW5TaWdudXBNb2JUZXh0e1xyXG4gIGZvbnQtd2VpZ2h0OjYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4ubG9nb2ZpeGVkIGEgaW1ne1xyXG4gIHdpZHRoOjEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6MHB4XHJcbn1cclxuLk1vYkhlYWRpbmdTdHJpcHtcclxuXHRwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDFhMWY5LCAjMDgwNzA3NGYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG5cclxuLnRhcmdldCB1bC5tZWdhLWxpbmtzIGxpIGF7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tZW51RmFGYUFuZ2xle1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59IFxyXG4udGFyZ2V0IHVsLm1lZ2EtbGlua3MgbGkgYS5tZW51TW9yZUxpbmt7XHJcbiAgY29sb3I6ICMxZjRmODkhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRhcmdldCB1bC5tZWdhLWxpbmtzIGxpIGEubWVudU1vcmVMaW5rOmhvdmVye1xyXG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubWVnYS1ib3ggLmZlYXR1cmVIZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNWM2Nzc4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm1lZ2EtYm94IC5mZWF0dXJlQ2FyZEJveCB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lZ2EtYm94IC5mZWF0dXJlQ2FyZEJveFBhZGRpbmd7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5tZWdhLWJveCAuZmVhdHVyZVNlY3Rpb257XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmRmZGY7XHJcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lZ2EtYm94IC5mZWF0dXJlU2VjdGlvbiAuY2QtYm90dG9tLWltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAxcHggI2VmZWZlZjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbn1cclxuLm1lZ2EtYm94IC5mZWF0dXJlUGFyZW50SGVhZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4OyBcclxuICBjb2xvcjogIzVmNWY1ZjsgLy8jODc5MWEyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm1lZ2EtYm94IC5mZWF0dXJlU3ViSGVhZEJveHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tZWdhLWJveCAuZmVhdHVyZVN1YkhlYWQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzg3OTFhMjtcclxufVxyXG5cclxuXHJcbi8vQXBwbHkgTm93IEJ1dHRvblxyXG4ub3V0ZXIgaDR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXI6bm9uZTtcclxuICBjb2xvcjogIzEyNDk4RjtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDQwJTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgZm9udC1zaXplOiAyM3B4Oy8vdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBib3gtc2hhZG93OiA2cHggMHB4IDEwcHggIzAwMDAwMDhmO1xyXG4gIHotaW5kZXg6IDk5OTs7XHJcbn1cclxuLm91dGVyIGg0IGl7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuLy9Tb2NpYWwgQnRuXHJcbi5zdGlja3ktY29udGFpbmVye1xyXG4gIHBhZGRpbmc6MHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgcmlnaHQ6LTE3MHB4O1xyXG4gIHRvcDo0MCU7XHJcbiAgd2lkdGg6MjEwcHg7XHJcbiAgei1pbmRleDogMTEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwOGY7XHJcbn1cclxuLnN0aWNreSBsaXtcclxuICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgY29sb3I6I2VmZWZlZjtcclxuICBoZWlnaHQ6NDBweDtcclxuICBwYWRkaW5nOjBweDtcclxuICBtYXJnaW46MHB4IDBweCAxcHggMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOmFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOmFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOmFsbCAwLjI1cyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG59XHJcbi5zdGlja3kgbGk6aG92ZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6LTk1cHg7XHJcbn1cclxuLnN0aWNreSBsaSBpbWd7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBtYXJnaW46NXB4IDRweDtcclxuICBtYXJnaW4tcmlnaHQ6NXB4OyAvL2JvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3RpY2t5IGxpIHB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zdGlja3kgbGkgcCBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGNvbG9yOiMyQzM1Mzk7XHJcbn1cclxuLnN0aWNreSBsaSBwIGE6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAub3V0ZXIgaDR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc3RpY2t5LWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8vIC5zb2NpYWwtYnV0dG9uc3tcclxuICAvLyAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgLy8gfVxyXG5cclxufSBcclxuLmZpeGVkIC5jb2xsZWdlIC53cmFwcGVyIC5uYXYtbGlua3MgbGkgYSxcclxuLmZpeGVkIC5leGFtLWZpbHRlciAud3JhcHBlciAubmF2LWxpbmtzIGxpIGF7XHJcbiAgY29sb3I6I2ZmZjtcclxufVxyXG4uY29sbGVnZSAud3JhcHBlciAubmF2LWxpbmtzIGxpIGEsXHJcbi5leGFtLWZpbHRlciAud3JhcHBlciAubmF2LWxpbmtzIGxpIGEsXHJcbi5maWx0ZXIgLndyYXBwZXIgLm5hdi1saW5rcyBsaSBhXHJcbntcclxuICBjb2xvcjojMTI0OThmYWI7XHJcbn1cclxubmF2LmZpbHRlclxyXG57XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDNlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5maXhlZCAuYWJvdXQtdXMsXHJcbi5maXhlZCAuc2VydmljZXMsXHJcbi5maXhlZCAuYWJyb2FkLWNvdXJzZSxcclxuLmZpeGVkIC5ibG9nLFxyXG4uZml4ZWQgLmJsb2ctY29udGVudCxcclxuLmZpeGVkIC5jb2xsZWdlLWZpbHRlcixcclxuLmZpeGVkIC5leGFtLWZpbHRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLy9teSBjc3NcclxuLm5hdjEgLmFjdGl2ZSB7XHJcbiAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgbWFyZ2luLXJpZ2h0OiAwIDsgXHJcbiAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5nYWxsZXJ5e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmdhbGxlcnktdWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1cHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vIG9wYWNpdHk6IDA7XHJcbiAgLy8gdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmdhbGxlcnktdWwgbGl7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmdhbGxlcnktdWwgbGkgYXtcclxuICBjb2xvcjogIzE1MUI1NCAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbn1cclxuLmdhbGxlcnktdWwgbGk6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzFmNGY4OTtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FsbGVyeTpob3ZlciAuZ2FsbGVyeS11bHtcclxuIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4vLyBvcGFjaXR5OiAxO1xyXG4gXHJcbn0iXX0= */"] });


/***/ }),

/***/ 61125:
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavModule": () => (/* binding */ NavModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _nav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-routing.module */ 10287);
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.component */ 15375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class NavModule {
}
NavModule.ɵfac = function NavModule_Factory(t) { return new (t || NavModule)(); };
NavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NavModule });
NavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _nav_routing_module__WEBPACK_IMPORTED_MODULE_0__.NavRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavModule, { declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _nav_routing_module__WEBPACK_IMPORTED_MODULE_0__.NavRoutingModule], exports: [_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map