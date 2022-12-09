"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_course_course_module_ts"],{

/***/ 60409:
/*!*************************************************!*\
  !*** ./src/app/course/course-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseRoutingModule": () => (/* binding */ CourseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course.component */ 94303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _course_component__WEBPACK_IMPORTED_MODULE_0__.CourseComponent
    },
    // {
    //   path: 'MIT',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'MIT/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'MIT/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'MIT/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'MIT/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'MIT/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-bulgaria/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'engineering-in-russia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-czech-republic/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-germany/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-australia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-new-zealand/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'bca-course-in-india/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-canada/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-ireland/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-russia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-armenia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-australia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-belarus/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-europe/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-france/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-georgia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-italy/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-lithuania/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-malaysia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-nepal/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-philippines/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-romania/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-russia/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kyrgyzstan/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-usa/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-course-in-india/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-malta/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mba-in-uk/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mca-in-india/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-kazakhstan/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan/info',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan/top-colleges',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan/syllabus',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan/career-options',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
    // {
    //   path: 'mbbs-in-uzbekistan/faq',
    //   loadChildren: '../course-content/course-content.module#CourseContentModule'
    // },
];
class CourseRoutingModule {
}
CourseRoutingModule.ɵfac = function CourseRoutingModule_Factory(t) { return new (t || CourseRoutingModule)(); };
CourseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CourseRoutingModule });
CourseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94303:
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseComponent": () => (/* binding */ CourseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);


class CourseComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); };
CourseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 407, vars: 0, consts: [[1, "course"], [1, "course-banner"], [1, "col-lg-12"], [1, "course-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "row", "row-without-gutter"], ["action", "", 1, "exam-page-form", "d-block", "mx-auto"], ["type", "text", "placeholder", "Search Course ", "name", "search2"], ["type", "submit"], [1, "fa", "fa-search"], [1, "flex-div"], [1, "d-inline", "white-text-2", "mb-0"], [1, "pill-div-course"], [1, "reach"], [1, "container", "w-100"], [1, "row", "text-center"], [1, "light-blue-text", "mt-4"], [1, "col-lg-12", "mb-5"], [1, "col-lg-3", "col-sm-6", "contact-card-container"], [1, "card", "contact-card"], [1, "row", "m-0"], [1, "col-lg-12", "text-center", "card-header", "px-0", "cust-border"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/agriculture.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], [1, "white-text-2", "mt-0", "bold"], [1, "row", "p-3"], [1, "col-lg-12", "col-sm-12", "col-xs-12", "col-12", "list-text-holder"], [1, "list-text", "light-blue-text"], [1, "card-footer", "cust-border-2"], [1, "text-center", "white-text"], [1, "mb-0"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/animation.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/art.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/Aviation.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/commerce.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/computer application.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/dental.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/Engineering.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/Hotel-Management.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/law.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/management.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/Mass-Communication.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"], ["src", "../../assets/img/Course_Icons/Explore_By_Category/Medical.png", "width", "60", "alt", "", 1, "pt-3", "icon-clr"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Search From Over 10000 Courses In India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2)(13, "div", 5)(14, "div", 10)(15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Trending Courses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "BE/B.TECH Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MBBS Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "B.Sc Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "B.Com Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "BA Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "div", 14)(30, "div", 15)(31, "div", 2)(32, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Explore By Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Browse 1000+ Courses In India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17)(37, "div", 5)(38, "div", 18)(39, "div", 19)(40, "div", 20)(41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24)(46, "div", 25)(47, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25)(50, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25)(53, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25)(56, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25)(59, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 20)(62, "div", 27)(63, "div", 28)(64, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 18)(67, "div", 19)(68, "div", 20)(69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 24)(74, "div", 25)(75, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 25)(78, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 25)(81, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 25)(84, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 25)(87, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 20)(90, "div", 27)(91, "div", 28)(92, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 18)(95, "div", 19)(96, "div", 20)(97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 24)(102, "div", 25)(103, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 25)(106, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 25)(109, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 25)(112, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 25)(115, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 20)(118, "div", 27)(119, "div", 28)(120, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 18)(123, "div", 19)(124, "div", 20)(125, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Aviation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 24)(130, "div", 25)(131, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 25)(134, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 25)(137, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 25)(140, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 25)(143, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 20)(146, "div", 27)(147, "div", 28)(148, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 17)(151, "div", 5)(152, "div", 18)(153, "div", 19)(154, "div", 20)(155, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 24)(160, "div", 25)(161, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 25)(164, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 25)(167, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 25)(170, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 25)(173, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 20)(176, "div", 27)(177, "div", 28)(178, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 18)(181, "div", 19)(182, "div", 20)(183, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Computer Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 24)(188, "div", 25)(189, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 25)(192, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 25)(195, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 25)(198, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 25)(201, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 20)(204, "div", 27)(205, "div", 28)(206, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 18)(209, "div", 19)(210, "div", 20)(211, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Dental");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 24)(216, "div", 25)(217, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 25)(220, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 25)(223, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 25)(226, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 25)(229, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 20)(232, "div", 27)(233, "div", 28)(234, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 18)(237, "div", 19)(238, "div", 20)(239, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 24)(244, "div", 25)(245, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 25)(248, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 25)(251, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 25)(254, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 25)(257, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 20)(260, "div", 27)(261, "div", 28)(262, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 17)(265, "div", 5)(266, "div", 18)(267, "div", 19)(268, "div", 20)(269, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Hotel Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 24)(274, "div", 25)(275, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 25)(278, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 25)(281, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 25)(284, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 25)(287, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 20)(290, "div", 27)(291, "div", 28)(292, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 18)(295, "div", 19)(296, "div", 20)(297, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 24)(302, "div", 25)(303, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 25)(306, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 25)(309, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 25)(312, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 25)(315, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 20)(318, "div", 27)(319, "div", 28)(320, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 18)(323, "div", 19)(324, "div", 20)(325, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 24)(330, "div", 25)(331, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 25)(334, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 25)(337, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 25)(340, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 25)(343, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 20)(346, "div", 27)(347, "div", 28)(348, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 18)(351, "div", 19)(352, "div", 20)(353, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Mass Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 24)(358, "div", 25)(359, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 25)(362, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 25)(365, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 25)(368, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 25)(371, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 20)(374, "div", 27)(375, "div", 28)(376, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 18)(379, "div", 19)(380, "div", 20)(381, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Medical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 24)(386, "div", 25)(387, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "BE/B.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 25)(390, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "ME/M.TECH");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 25)(393, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "BTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 25)(396, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "MTech CSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 25)(399, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "PhD Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 20)(402, "div", 27)(403, "div", 28)(404, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "app-footer");
    } }, dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], styles: [".course-banner[_ngcontent-%COMP%] {\n  height: 50vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('course_banner.png');\n  background-repeat: no-repeat;\n}\n\n.course[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.course-header[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n\n.list-text[_ngcontent-%COMP%] {\n  background: url('Bullet-pt.png') no-repeat left;\n  padding: 3px;\n  list-style: none;\n  margin: 0px;\n  background-size: 20px;\n  padding-left: 12%;\n}\n\n.list-text-holder[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.cust-border[_ngcontent-%COMP%] {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.cust-border-2[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 1px solid gray;\n  margin-right: 20px;\n}\n\n.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n  background-color: #2d57a7;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 4%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 17px;\n  border: 1px solid transparent;\n  float: left;\n  width: 92%;\n  background: #f1f1f1;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n  width: 8%;\n  padding: 5.5px;\n  background: #1c4dc3;\n  color: white;\n  font-size: 17px;\n  border: 1px solid transparent;\n  border-left: none;\n  cursor: pointer;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.pill-div-course[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid orange;\n  color: orange;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 22px;\n  font-size: 10px;\n  font-weight: 900;\n}\n\n.flex-div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 13vw;\n}\n\n.cust-padding[_ngcontent-%COMP%] {\n  padding-right: 1%;\n  padding-top: 5px !important;\n}\n\n.icon-clr[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n}\n\n@media only screen and (max-width: 767px) {\n  form.exam-page-form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .flex-div[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .pill-div-course[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 4px;\n    display: inline-block;\n  }\n  .course-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n  .contact-card[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .course-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 5%;\n  }\n  .contact-card-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n@media only screen and (max-width: 766px) {\n  .mb-5[_ngcontent-%COMP%] {\n    margin-bottom: 0rem !important;\n  }\n}\n\n@media only screen and (max-width: 766px) and (max-width: 430px) {\n  form.exam-page-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  form.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 12%;\n  }\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 4%;\n  width: 100% !important;\n}\n\n.white-text-2[_ngcontent-%COMP%] {\n  color: #fff !important;\n  font-size: 22px;\n}\n\n.icon-clr[_ngcontent-%COMP%] {\n  filter: brightness(0) invert(1);\n  margin-bottom: 10px;\n}\n\n.h5[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFlBQUE7RUFDQSx1REFBQTtFQUNBLDBCQUFBO0VBRUEsMENBQUE7RUFDQSw0QkFBQTtBQUFMOztBQUdBO0VBQ0sseUJBQUE7RUFDQSxvQkFBQTtBQUFMOztBQUlBO0VBQ0ssZ0JBQUE7QUFETDs7QUFJQTtFQUNLLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFETDs7QUFJQTtFQUNLLGVBQUE7QUFETDs7QUFJQTtFQUNLLDRCQUFBO0VBQ0EsNkJBQUE7QUFETDs7QUFJQTtFQUNLLCtCQUFBO0VBQ0EsZ0NBQUE7QUFETDs7QUFJQTtFQUNLLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQURMOztBQUlBOztFQUVLLHlCQUFBO0FBREw7O0FBSUE7RUFDSyxXQUFBO0FBREw7O0FBSUE7RUFDSyxVQUFBO0FBREw7O0FBSUE7RUFFSyxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFGTDs7QUFLQTtFQUNLLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFGTDs7QUFLQTtFQUNLLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZMOztBQUtBO0VBQ0ssaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRkw7O0FBS0E7RUFDSyxpQkFBQTtFQUNBLDJCQUFBO0FBRkw7O0FBSUE7RUFDSywrQkFBQTtBQURMOztBQUdBO0VBQ0s7SUFDSyxVQUFBO0VBQVI7RUFHRztJQUNLLGNBQUE7RUFEUjtFQUlHO0lBQ0ssVUFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQUZSO0VBS0c7SUFDSyxZQUFBO0lBQ0Esa0JBQUE7RUFIUjtFQU1HO0lBQ0ssa0JBQUE7RUFKUjtBQUNGOztBQU9BO0VBQ0s7SUFDSyxZQUFBO0lBQ0EsV0FBQTtFQUxSO0VBUUc7SUFDSyxtQkFBQTtFQU5SO0FBQ0Y7O0FBU0E7RUFDSztJQUNLLDhCQUFBO0VBUFI7QUFDRjs7QUFTSztFQUNLO0lBQ0ssVUFBQTtFQVBiO0VBVVE7SUFDSyxVQUFBO0VBUmI7QUFDRjs7QUFZQTtFQUNLLFdBQUE7RUFDQSxzQkFBQTtBQVZMOztBQVlDO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FBVEw7O0FBV0M7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FBUkw7O0FBVUM7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBUEwiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1iYW5uZXIge1xyXG4gICAgIGhlaWdodDogNTB2aDtcclxuICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9Db3Vyc2VfSWNvbnMvU2VhcmNoX0Zvcm1fT3Zlci9JbWFnZS5wbmcnKTsgXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL0NvdXJzZV9JY29ucy9TZWFyY2hfRm9ybV9PdmVyL2NvdXJzZV9iYW5uZXIucG5nJyk7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNvdXJzZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvdXJzZS1oZWFkZXIge1xyXG4gICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5saXN0LXRleHQge1xyXG4gICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9Db3Vyc2VfSWNvbnMvRXhwbG9yZV9CeV9DYXRlZ29yeS9CdWxsZXQtcHQucG5nJykgbm8tcmVwZWF0IGxlZnQ7XHJcbiAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG59XHJcblxyXG4ubGlzdC10ZXh0LWhvbGRlciB7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uY3VzdC1ib3JkZXIge1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0LWJvcmRlci0yIHtcclxuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFjdC1jYXJkIHtcclxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIsXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNTdhNztcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgICBwYWRkaW5nOiA0JTtcclxufVxyXG5cclxuZm9ybS5leGFtLXBhZ2UtZm9ybSB7XHJcbiAgICAgd2lkdGg6IDUwJVxyXG59XHJcblxyXG5mb3JtLmV4YW0tcGFnZS1mb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xyXG5cclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmZvcm0uZXhhbS1wYWdlLWZvcm0gYnV0dG9uIHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICB3aWR0aDogOCU7XHJcbiAgICAgcGFkZGluZzogNS41cHg7XHJcbiAgICAgYmFja2dyb3VuZDogIzFjNGRjMztcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnBpbGwtZGl2LWNvdXJzZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG4gICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5mbGV4LWRpdiB7XHJcbiAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxM3Z3O1xyXG59XHJcblxyXG4uY3VzdC1wYWRkaW5nIHtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb24tY2xye1xyXG4gICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAgZm9ybS5leGFtLXBhZ2UtZm9ybSB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLmZsZXgtZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLnBpbGwtZGl2LWNvdXJzZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgfVxyXG5cclxuICAgICAuY291cnNlLWJhbm5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgfVxyXG5cclxuICAgICAuY29udGFjdC1jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgICAuY291cnNlLWJhbm5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA1JVxyXG4gICAgIH1cclxuXHJcbiAgICAgLmNvbnRhY3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjZweCkge1xyXG4gICAgIC5tYi01IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICB9XHJcblxyXG4gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MzBweCkge1xyXG4gICAgICAgICAgZm9ybS5leGFtLXBhZ2UtZm9ybSBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3JtLmV4YW0tcGFnZS1mb3JtIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgIH1cclxufVxyXG4uY2FyZC1mb290ZXJ7XHJcbiAgICAgcGFkZGluZzogNCU7XHJcbiAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuIH1cclxuIC53aGl0ZS10ZXh0LTIge1xyXG4gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gfVxyXG4gLmljb24tY2xye1xyXG4gICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuIC5oNSwgaDUge1xyXG4gICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 21071:
/*!*****************************************!*\
  !*** ./src/app/course/course.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseModule": () => (/* binding */ CourseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-routing.module */ 60409);
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.component */ 94303);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);






class CourseModule {
}
CourseModule.ɵfac = function CourseModule_Factory(t) { return new (t || CourseModule)(); };
CourseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CourseModule });
CourseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _course_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_3__.HeaderInnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CourseModule, { declarations: [_course_component__WEBPACK_IMPORTED_MODULE_1__.CourseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _course_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_3__.HeaderInnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_course_course_module_ts.js.map