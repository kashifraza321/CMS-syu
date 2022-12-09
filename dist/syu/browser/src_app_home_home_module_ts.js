"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _blog_blogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/blogData */ 89904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 10970);

// import { PopupFormComponent } from '../popup-form/popup-form.component';






function HomeComponent_div_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "div", 36)(3, "div", 77)(4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 79)(7, "div", 36)(8, "div", 80)(9, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 80)(12, "p", 81)(13, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Check 218 Colleges >");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 36)(17, "div", 17)(18, "div", 36)(19, "div", 83)(20, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "218 Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Colleges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 85)(25, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "1129671 INR/Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Average Study Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 86)(30, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "140872445 INR/Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Average Living Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 36)(36, "div", 80)(37, "h6", 87)(38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Coursewise List");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 88)(41, "div", 89)(42, "div", 90)(43, "h2", 91)(44, "button", 92)(45, "div", 36)(46, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " MBBS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 89)(49, "div", 94)(50, "h2", 91)(51, "button", 95)(52, "div", 36)(53, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "MBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "74 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 89)(60, "div", 99)(61, "h2", 91)(62, "button", 100)(63, "div", 36)(64, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "M.Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "68 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 89)(71, "div", 101)(72, "h2", 91)(73, "button", 102)(74, "div", 36)(75, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "89 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 36)(82, "div", 17)(83, "div", 103)(84, "h6", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", image_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Study in ", image_r2.text, " ");
} }
function HomeComponent_div_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 105)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 109)(7, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Read-more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
const _c0 = function () { return ["owl-theme", "sliding", "slider2"]; };
const _c1 = function () { return ["owl-theme", "row", "row-without-gutter", "sliding"]; };
// import * as newsData from "../news/newsData"
class HomeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        // modalRef: BsModalRef;
        this.data = _blog_blogData__WEBPACK_IMPORTED_MODULE_0__.blogdata;
        // dataNews:any = newsData.newsdata
        this.allBlog = [];
        this.latestBlog = [];
        this.allNews = [];
        this.latestNews = [];
        this.carouselOptions = {
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
        };
        this.carouselOptions2 = {
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
        };
        this.images2 = [
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
        ];
        this.images = [
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
        ];
    }
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
        this.latestNews = this.allNews.splice(0, 6);
        console.log('latestNews', this.latestNews);
    }
    openModal() {
        // this.modalRef = this.modalService.show(PopupFormComponent,{
        //   animated: false
        // });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 264, vars: 10, consts: [[1, "index-header"], [1, "clr"], [1, "banner"], [1, "para1"], [1, "col-lg-12", "text-center"], [1, "b", "btn", "req-meet"], ["src", "../../assets/img/Home Page/1. Header/E-Meet/E-Meet.png", "width", "32"], [1, "container-fluid", "px-0", "full-width-container"], [1, "col-lg-12", "px-0"], [1, "new"], [1, "title"], ["src", "../../assets/img/Home Page/1. Header/News/News.png", "alt", "news", "width", "100", 1, "mr-3"], ["onmouseover", "this.stop();", "onmouseout", "this.start();", 1, "marquee"], [1, "explor"], [1, "container"], [1, "cource"], [1, "light-blue-text"], [1, "col-lg-12"], [1, "row", "course-inner-div"], [1, "col-lg-2", "col-md-4", "col-6"], [1, "part"], ["src", "../../assets/img/Home Page/3. Domain or Course/Science.png"], ["href", "#"], ["src", "../../assets/img/Home Page/3. Domain or Course/Arts.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Veterinary.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Management.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Computer.png"], [1, "col-lg-2", "col-6"], ["src", "../../assets/img/Home Page/3. Domain or Course/Engineering.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Agriculture.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Animation.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Commerce.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Dental.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Law.png"], [1, "university"], [1, "para"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "member"], ["src", "../../assets/img/image.png"], ["src", "../../assets/img/location-globe.png"], ["src", "../../assets/img/image (1).png"], ["src", "../../assets/img/image (2).png"], ["src", "../../assets/img/image (5).png"], ["src", "../../assets/img/image (3).png"], [1, "text-center", "mt-4", "study-destination-div"], [1, "mb-4", "light-blue-text"], [1, "para3"], ["id", "slider2", 3, "options", "items", "carouselClasses"], ["class", "item study-div", 4, "ngFor", "ngForOf"], [1, "item"], [1, "col-md-12"], [1, "text-center"], [1, "btn", "btn-study-show-more"], [1, "blog"], [3, "options", "items", "carouselClasses"], ["class", "item blog-inner-div", 4, "ngFor", "ngForOf"], [1, "btn", "btn-blog-show-more", "text-center"], [1, "trending"], [1, "col-md-12", "text-center"], ["href", "#/exam-content/neet-pg-exam", 1, "footer-nav-link"], [1, "pill-div"], ["href", "#/exam-content/neet-ug-exam", 1, "footer-nav-link"], ["href", "#/exam-content/fmge-exam", 1, "footer-nav-link"], ["href", "#/exam-content/international-foundation-of-medicine-ifom", 1, "footer-nav-link"], [1, "subscribe", "light-bg-blue", "white-text", "subscribe-row"], [1, "col-lg-12", "m-2"], [1, "d-block", "d-sm-none", "col-3"], ["src", "../../assets/img/Home Page/6. Subscribe To Our Newsletter/Newsletter.png", "alt", "", 2, "width", "100%"], [1, "col-lg-7", "col-sm-12", "col-9"], [1, "p-3", "subscribe-text", "ml-5"], [1, "col-lg-4", "pt-4", "col-sm-6", "col-6"], ["type", "text", "placeholder", "Your Email Id Here", 1, "d-inline", "sub-textbox", "w-100", "text-center"], [1, "col-lg-1", "pt-3", "col-sm-6", "col-6", "text-center"], [1, "btn", "signbtn"], [1, "item", "study-div"], [1, "border", "mx-3"], [1, "col-lg-5", "col-md-12", "col-6"], [1, "pt-3", "mx-auto", 2, "width", "40%", 3, "src"], [1, "col-lg-7", "col-md-12", "pt-2", "col-6"], [1, "col-lg-12", "col-md-12"], [1, "mb-0", "text-right", "pr-2"], ["href", "#", 1, "f-10"], [1, "col-lg-4", "col-md-12", "border-right", "pl-2", "col-4"], [1, "mb-0", "f-10", "text-left"], [1, "col-lg-4", "col-md-12", "border-right", "col-4"], [1, "col-lg-4", "col-md-12", "col-4"], [1, "text-left", "pl-2"], ["id", "accordionExample2", 1, "accordion", "px-2"], [1, "card"], ["id", "headingOne21", 1, "card-header", "w-100"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne21", "aria-expanded", "true", "aria-controls", "collapseOne21", 1, "btn", "btn-block", "text-left", "w-100", "p-xs-0"], [1, "col-lg-4", "text-center", "d-inline", "black-text", "col-4"], ["id", "headingTwo22", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne22", "aria-expanded", "false", "aria-controls", "collapseOne22", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], [1, "col-lg-4", "text-center", "d-inline", "col-6"], [1, "col-lg-4", "col-2"], [1, "float-right", "fa", "fa-angle-right", "rotate-icon"], ["id", "headingThree23", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseThree23", "aria-expanded", "false", "aria-controls", "collapseThree23", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], ["id", "headingFour24", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseFour24", "aria-expanded", "false", "aria-controls", "collapseFour24", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], [1, "text-center", "light-bg-blue"], [1, "white-text", "py-2", "mb-0"], [1, "item", "blog-inner-div"], [1, "border-black", "mr-3", "rounded-3"], [1, "row", "row-without-gutter"], [1, "light-blue-text", "pl-2"], [1, "row", "mb-2", "row-without-gutter"], [1, "light-bg-blue", "white-text", "p-1", "w-50", "blog-read-more-btn", "btn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body")(1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Explore, Discover, and choose the best one for");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "you from India's largest educational portal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Check out all the universities, colleges, courses, exams in India & abroad. You name it, we got it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Request E meet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "marquee", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 14)(25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15)(27, "div", 14)(28, "h2", 16)(29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Choose a Domain or Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 17)(32, "div", 18)(33, "div", 19)(34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h3")(37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h5")(42, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 19)(45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3")(48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "4445 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h5")(53, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 19)(56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h3")(59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Veterinary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "5945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "h5")(64, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 19)(67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h3")(70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "3210 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "h5")(75, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 19)(78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "h3")(81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "5673 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "h5")(86, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 27)(89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "h3")(92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "2345 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h5")(97, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 27)(100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "h3")(103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "1234 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h5")(108, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 19)(111, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "h3")(114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "4536 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "h5")(119, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 19)(122, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "h3")(125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "6543 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "h5")(130, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 19)(133, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "h3")(136, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Dental");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "4354 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "h5")(141, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 19)(144, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "h3")(147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "2342 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "h5")(152, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 34)(155, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Why Choose Select Your University");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " India's leading educational consultancy with experience over a decade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 36)(162, "div", 37)(163, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "100% Assistance for Visa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 37)(168, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, " Multiple branches, Located");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, " in more than 20 cities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 37)(175, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "More than 8000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "students counselled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 37)(182, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, " One Stop Solution To");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " Study In India & Abroud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 37)(189, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, " Over 50+ tie-ups with");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, " reputed universities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 37)(196, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, " Experienced Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, " Counsellors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](202, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 45)(204, "div", 14)(205, "h2", 46)(206, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Popular Countries to Study Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, " Get gauranteed admission with top rank universities & Colleges with us around the world & India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "owl-carousel", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](211, HomeComponent_div_211_Template, 86, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 50)(213, "div", 51)(214, "div", 52)(215, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Show More");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 54)(218, "div", 14)(219, "h2", 16)(220, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Latest From Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 36)(223, "owl-carousel", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](224, HomeComponent_div_224_Template, 9, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 50)(226, "div", 36)(227, "div", 4)(228, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, " Discover More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 58)(231, "div", 14)(232, "div", 36)(233, "div", 59)(234, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Trending Exams this month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 51)(237, "a", 60)(238, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "NEET PG");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "a", 62)(241, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "NEET UG");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "a", 63)(244, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "a", 64)(247, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "IFOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 65)(250, "div", 14)(251, "div", 66)(252, "div", 36)(253, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "div", 69)(256, "h1", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "Subscribe To Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 73)(261, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](263, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOptions2)("items", ctx.images2)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.images2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.images)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allBlog);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlCarousel, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".sticky[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.cust-div[_ngcontent-%COMP%] {\n  flex: 0 0 80.666667%;\n  max-width: 80.666667%;\n  padding-left: 20%;\n  width: 80%;\n}\n\n.custom-width[_ngcontent-%COMP%] {\n  flex: 0 0 31.333333%;\n  max-width: 31.333333%;\n  margin-right: 20px;\n}\n\n.custom-width-blog-div[_ngcontent-%COMP%] {\n  flex: 0 0 23%;\n  max-width: 23%;\n  margin-right: 22px;\n}\n\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n#slider2[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60% !important;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.feedback-form-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.cource[_ngcontent-%COMP%] {\n  border-top: 2px solid gray;\n  border-bottom: 2px solid gray;\n}\n\n.blog[_ngcontent-%COMP%] {\n  border-top: 2px solid gray;\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  color: #0b4292;\n  font-weight: 700;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px;\n}\n\n.form-head[_ngcontent-%COMP%] {\n  color: #0b4292;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n}\n\n.card-left-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem !important;\n  font-size: 12px;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.form-div[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.shortlist-txt[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n\n.shortlist-card[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  border-left: none !important;\n  border-right: 1px solid black !important;\n  border-top: 1px solid black !important;\n  border-bottom: 1px solid black !important;\n  border-radius: 0% !important;\n}\n\ninput.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 -1px 0 #ddd;\n}\n\n.icon[_ngcontent-%COMP%] {\n  border-right: none !important;\n  border-top: 1px solid black !important;\n  border-left: 1px solid black !important;\n  border-bottom: 1px solid black !important;\n  border-radius: 0% !important;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: right;\n  background: none;\n  border: none;\n  font-size: 28px;\n  height: 22px;\n  margin-top: -3px;\n  margin-right: 12px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  background: orange;\n  color: white;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  margin-top: -5px;\n  background: orange;\n  color: white;\n  font-weight: bold;\n}\n\n.login-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.custom-li-img[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: url('Key-Facts.png') no-repeat left;\n  padding: 3px;\n  list-style: none;\n  margin: 0px;\n  background-size: 12px;\n  padding-left: 5%;\n}\n\n.custom-li-img[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.subscribe-row[_ngcontent-%COMP%] {\n  background-image: url('Newsletter.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 5%;\n}\n\n.btn-blog-show-more[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  transform: translate(20%, 520%);\n}\n\n.btn-study-show-more[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  transform: translate(10%, 600%);\n}\n\n.university[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-bottom: 3%;\n}\n\n.pr-2[_ngcontent-%COMP%] {\n  padding-right: 2%;\n}\n\n.req-meet[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n  border-radius: 10px;\n}\n\n.signbtn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  border: 1px solid transparent;\n  width: 100%;\n  text-align: center;\n  background-color: aliceblue;\n}\n\n.signbtn[_ngcontent-%COMP%]:hover, .signbtn[_ngcontent-%COMP%]:focus {\n  color: #000;\n}\n\n.blog-read-more-btn[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  border-radius: 10px;\n  background-color: rgba(4, 55, 147, 0.7490196078);\n  color: #fff;\n}\n\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 2rem !important;\n  padding-bottom: 10px !important;\n}\n\n@media screen and (min-width: 992px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-top: 3.5rem !important;\n  }\n}\n\n@media screen and (min-width: 1400px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-top: 2rem !important;\n  }\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n}\n\n@media screen and (min-width: 992px) and (max-width: 1400px) {\n  .pt-4[_ngcontent-%COMP%] {\n    padding-top: 5.5rem !important;\n  }\n  .pt-3[_ngcontent-%COMP%] {\n    padding-top: 4rem !important;\n  }\n  .signbtn[_ngcontent-%COMP%] {\n    width: 150%;\n  }\n}\n\n.university[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 0px !important;\n}\n\n.para[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.banner[_ngcontent-%COMP%] {\n  padding: 8% 30px 0 !important;\n}\n\n.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n}\n\n.para1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14pt;\n  font-weight: 600;\n}\n\n@media only screen and (max-width: 767px) {\n  .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n  .para1[_ngcontent-%COMP%] {\n    font-size: 10pt;\n  }\n  .banner[_ngcontent-%COMP%] {\n    padding-top: 40px !important;\n  }\n}\n\n@media screen and (min-width: 767px) and (max-width: 1114px) {\n  .banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px !important;\n  }\n  .para1[_ngcontent-%COMP%] {\n    font-size: 12pt;\n  }\n  .banner[_ngcontent-%COMP%] {\n    padding-top: 130px !important;\n  }\n}\n\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.para3[_ngcontent-%COMP%] {\n  color: rgba(31, 124, 241, 0.7490196078) !important;\n  font-weight: bold;\n  margin-bottom: 1.5rem !important;\n}\n\nmarquee[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(241, 234, 234);\n  padding: 25px;\n  direction: right;\n  behavior: \"alternate\";\n  font-size: 14px;\n}\n\n.marquee[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 100%;\n  margin-top: 1%;\n}\n\n.title[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 50px;\n}\n\n@media screen and (max-width: 767px) {\n  .title[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 65%;\n    margin-left: 15px;\n  }\n  .new[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 100%;\n  }\n  .marquee[_ngcontent-%COMP%] {\n    margin-top: 0.1%;\n  }\n}\n\n@media screen and (min-width: 220px) and (max-width: 524px) {\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 125%;\n    margin-left: -30px;\n  }\n}\n\n@media screen and (min-width: 525px) and (max-width: 767px) {\n  .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-left: -30px;\n  }\n}\n\n.trending[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7QUFFSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7QUFNSjs7QUFKRTtFQUNFLHFCQUFBO0FBT0o7O0FBTEU7RUFDRSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UseUJBQUE7QUFTSjs7QUFQRTtFQUNFLGtCQUFBO0FBVUo7O0FBUkU7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBV0o7O0FBVEU7RUFDRSwwQkFBQTtBQVlKOztBQVZFO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQWFKOztBQVhFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFlSjs7QUFiRTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFkRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFmRTtFQUNFLGdCQUFBO0FBa0JKOztBQWhCRTtFQUNFLGdCQUFBO0FBbUJKOztBQWpCRTtFQUNFLGNBQUE7QUFvQko7O0FBbEJFO0VBQ0Usa0JBQUE7QUFxQko7O0FBbkJFO0VBQ0UsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtBQXNCSjs7QUFwQkU7RUFDRSwrQkFBQTtBQXVCSjs7QUFyQkU7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0FBd0JKOztBQXRCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Usa0JBQUE7QUF5Qk47O0FBdkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUEwQko7O0FBeEJFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0FBMkJKOztBQXpCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE0Qko7O0FBMUJFO0VBQ0UsZUFBQTtBQTZCSjs7QUEzQkU7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBOEJKOztBQTVCRTtFQUNFLHFCQUFBO0FBK0JKOztBQTdCRTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBZ0NKOztBQTlCRTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7QUFpQ0o7O0FBL0JFO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtBQWtDSjs7QUFoQ0U7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7QUFrQ0o7O0FBaENFO0VBQ0UsaUJBQUE7QUFtQ0o7O0FBakNFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQW9DSjs7QUFsQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFxQ0o7O0FBbkNFOztFQUVFLFdBQUE7QUFzQ0o7O0FBcENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBdUNKOztBQXBDRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUF1Q0o7O0FBckNFO0VBQ0U7SUFDRSw4QkFBQTtFQXdDSjtBQUNGOztBQXRDRTtFQUNFO0lBQ0UsNEJBQUE7RUF3Q0o7QUFDRjs7QUFyQ0U7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtBQXVDSjs7QUFyQ0U7RUFDRTtJQUNFLDhCQUFBO0VBd0NKO0VBdENFO0lBQ0UsNEJBQUE7RUF3Q0o7RUF0Q0U7SUFDRSxXQUFBO0VBd0NKO0FBQ0Y7O0FBdENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUF3Q0o7O0FBdENFO0VBQ0UsbUJBQUE7QUF5Q0o7O0FBdkNFO0VBRUUsNkJBQUE7QUF5Q0o7O0FBdENFO0VBQ0UsMEJBQUE7QUF5Q0o7O0FBdkNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTBDSjs7QUF4Q0U7RUFDRTtJQUNFLDBCQUFBO0VBMkNKO0VBekNFO0lBQ0UsZUFBQTtFQTJDSjtFQXpDRTtJQUNFLDRCQUFBO0VBMkNKO0FBQ0Y7O0FBekNFO0VBQ0U7SUFDRSwwQkFBQTtFQTJDSjtFQXpDRTtJQUNFLGVBQUE7RUEyQ0o7RUF6Q0U7SUFDRSw2QkFBQTtFQTJDSjtBQUNGOztBQXpDRTtFQUNNLDJCQUFBO0FBMkNSOztBQXpDRztFQUNJLGtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQTRDUDs7QUExQ0U7RUFDSyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTZDUDs7QUEzQ0U7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUE4Q047O0FBNUNFO0VBQ0ssV0FBQTtFQUNBLGlCQUFBO0FBK0NQOztBQTdDRTtFQUNHO0lBQ0UsVUFBQTtFQWdETDtFQTlDRztJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQWdETDtFQTlDRztJQUNFLGVBQUE7RUFnREw7RUE5Q0c7SUFDRSxnQkFBQTtFQWdETDtBQUNGOztBQTlDRTtFQUNLO0lBQ0ssV0FBQTtJQUNBLGtCQUFBO0VBZ0RWO0FBQ0Y7O0FBOUNFO0VBQ0s7SUFDSyxVQUFBO0lBQ0Esa0JBQUE7RUFnRFY7QUFDRjs7QUE5Q0U7RUFDRSwwQkFBQTtBQWdESiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNreSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5jdXN0LWRpdiB7XHJcbiAgICBmbGV4OiAwIDAgODAuNjY2NjY3JTtcclxuICAgIG1heC13aWR0aDogODAuNjY2NjY3JTtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmN1c3RvbS13aWR0aCB7XHJcbiAgICBmbGV4OiAwIDAgMzEuMzMzMzMzJTtcclxuICAgIG1heC13aWR0aDogMzEuMzMzMzMzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmN1c3RvbS13aWR0aC1ibG9nLWRpdiB7XHJcbiAgICBmbGV4OiAwIDAgMjMlO1xyXG4gICAgbWF4LXdpZHRoOiAyMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgfVxyXG4gIC5tci0zIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgI3NsaWRlcjIgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuZmVlZGJhY2stZm9ybS1idG4gaW1nIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG4gIC5wbC0yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbiAgLmNvdXJjZSB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xyXG4gIH1cclxuICAuYmxvZyB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JheTtcclxuICB9XHJcbiAgLmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwYjQyOTI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuZm9ybS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgLmZvcm0taGVhZCB7XHJcbiAgICBjb2xvcjogIzBiNDI5MjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5jYXJkLWxlZnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuZm9ybS1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNob3J0bGlzdC10eHQge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgfVxyXG4gIC5zaG9ydGxpc3QtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gIC5mb3JtLWlucHV0IHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZGRkO1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2xvc2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcbiAgLnRlcm1zIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuc3VibWl0OmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmxvZ2luLWJsb2NrIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmN1c3RvbS1saS1pbWcgbGkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9LZXktRmFjdHMucG5nXCIpIG5vLXJlcGVhdCBsZWZ0O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgLmN1c3RvbS1saS1pbWcge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICAuc3Vic2NyaWJlLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL0hvbWUgUGFnZS82LiBTdWJzY3JpYmUgVG8gT3VyIE5ld3NsZXR0ZXIvTmV3c2xldHRlci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSU7XHJcbiAgfVxyXG4gIC5idG4tYmxvZy1zaG93LW1vcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgNTIwJSk7XHJcbiAgfVxyXG4gIC5idG4tc3R1ZHktc2hvdy1tb3JlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDYwMCUpO1xyXG4gIH1cclxuICAudW5pdmVyc2l0eSBpbWcge1xyXG4gICAgLy8gd2lkdGg6NTAlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIH1cclxuICAucHItMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICB9XHJcbiAgLnJlcS1tZWV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5zaWduYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbiAgLnNpZ25idG46aG92ZXIsXHJcbiAgLnNpZ25idG46Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5ibG9nLXJlYWQtbW9yZS1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDM3OTNiZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAvLyBwYWRkaW5nIGNoYW5nZVxyXG4gIC5wdC00IHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnB0LTQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgLnB0LTQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2xpZGUtaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLnB0LTQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHQtMyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2lnbmJ0biB7XHJcbiAgICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAudW5pdmVyc2l0eSBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFyYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICAuYmFubmVyIHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogOCUgMzBweCAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICAuYmFubmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGFyYTEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuYmFubmVyIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFyYTEge1xyXG4gICAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMTE0cHgpIHtcclxuICAgIC5iYW5uZXIgaDEge1xyXG4gICAgICBmb250LXNpemU6IDM0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wYXJhMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIH1cclxuICAgIC5iYW5uZXIge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1iLTQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgXHJcbiAgIH1cclxuICAgLnBhcmEze1xyXG4gICAgICAgY29sb3I6ICMxZjdjZjFiZiAhaW1wb3J0YW50O1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0haW1wb3J0YW50O1xyXG4gICB9XHJcbiAgbWFycXVlZSBhe1xyXG4gICAgICAgY29sb3I6IHJnYigyNDEsIDIzNCwgMjM0KTtcclxuICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICBkaXJlY3Rpb246cmlnaHQ7IFxyXG4gICAgICAgYmVoYXZpb3I6XCJhbHRlcm5hdGVcIjtcclxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm1hcnF1ZWV7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgICAudGl0bGV7XHJcbiAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgIH1cclxuICAgICAudGl0bGUgaW1ne1xyXG4gICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgIH1cclxuICAgICAubmV3IGgze1xyXG4gICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgIH1cclxuICAgICAubWFycXVlZXtcclxuICAgICAgIG1hcmdpbi10b3A6IDAuMSU7XHJcbiAgICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMjBweCkgYW5kIChtYXgtd2lkdGg6IDUyNHB4KXtcclxuICAgICAgIC50aXRsZSBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHhcclxuICAgICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTI1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAgICAudGl0bGUgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHhcclxuICAgICAgIH1cclxuICB9XHJcbiAgLnRyZW5kaW5nIGgxe1xyXG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.module */ 60677);
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav.module */ 61125);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ 71010);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








// import { PopupFormComponent } from '../popup-form/popup-form.component';




class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.OwlModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabViewModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
        _header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__.NavModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule.forRoot(),
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.OwlModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_8__.TabViewModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__.FooterModule,
        _header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__.NavModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.ModalModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map