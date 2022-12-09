"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_blog_blog_module_ts"],{

/***/ 23622:
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": () => (/* binding */ BlogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.component */ 38716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent
    },
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵfac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); };
BlogRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 38716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _blogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogData */ 89904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);






function BlogComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 33)(7, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " 5 Minute Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + image_r2.blogimg + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r2.blogimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, image_r2.title));
} }
function BlogComponent_div_40_ng_container_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_40_ng_container_15_ng_template_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const image_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.makeActive(image_r6.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "5 Minute Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + image_r6.blogimg + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, image_r6.title));
} }
function BlogComponent_div_40_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlogComponent_div_40_ng_container_15_ng_template_1_Template, 10, 5, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function BlogComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 38)(4, "div", 39)(5, "div", 40)(6, "h4", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 42)(10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_div_40_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const item_r4 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.get(item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " View More Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 43)(14, "owl-carousel-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BlogComponent_div_40_ng_container_15_Template, 2, 0, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, item_r4[0].Categories.replaceAll("-", " ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r4);
} }
class BlogComponent {
    constructor(router) {
        this.router = router;
        this.blogCategorie = _blogData__WEBPACK_IMPORTED_MODULE_0__.blogCategories;
        this.data = _blogData__WEBPACK_IMPORTED_MODULE_0__.blogdata;
        this.allBlog = [];
        this.latestBlog = [];
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
                    items: 2,
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
        this.images = [
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/k.png"
            },
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/l.png"
            },
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/k.png"
            },
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/k.png"
            },
        ];
        this.images2 = [
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/k.png",
                time: "7"
            },
            {
                text: "CLAT 2022 Provisional Merit List I Will Be Released Tomorrow",
                image: "../../assets/img/Blog_Main_Icons/l.png",
                time: "5"
            }
        ];
    }
    ngOnInit() {
        this.data = _blogData__WEBPACK_IMPORTED_MODULE_0__.blogdata;
        console.log('this.data: ', this.data);
        console.log('blogData: ', _blogData__WEBPACK_IMPORTED_MODULE_0__);
        console.log('blogCategorie: ', this.blogCategorie);
        this.data.forEach((bg) => {
            bg.forEach((b) => {
                this.allBlog.push(b);
            });
        });
        this.allBlog.sort(function (a, b) {
            // convert date object into number to resolve issue in typescript
            return +new Date(b.date) - +new Date(a.date);
        });
        this.latestBlog = this.allBlog.splice(1, 2);
        console.log('this.latestBlog: ', this.latestBlog);
        console.log('test: ', this.allBlog);
    }
    makeActive(tab) {
        this.router.navigate(['blog/' + tab]);
    }
    get(item) {
        if (item[0].Categories === 'Top Colleges And Universities') {
            item.forEach((itm) => {
                itm.Categories = 'top-colleges-and-universitie';
            });
        }
        this.router.navigate(['blog/category/' + item[0].Categories], { state: item });
    }
    routeAllBlog() {
        this.router.navigate(['blog/category/all-blogs']);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 42, vars: 5, consts: [[1, "blog"], [1, "blog-banner"], [1, "col-lg-12"], [1, "blog-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "title"], [1, "title-text", "white-text-2"], ["action", "", 1, "blog-form"], ["type", "text", "placeholder", "Email Address", "name", "email", 1, "blog-header-text-box"], ["type", "submit", 1, "blog-header-btn"], [1, "col-lg-12", "col-12"], [1, "recent-news"], [1, "row", "row-without-gutter"], [1, "col-lg-12", "text-center"], [1, "recent-news-header", "light-blue-text"], [1, "col-lg-6", "col-sm-6"], [1, "parent-div"], [1, "img-div"], [1, "blog-img-text"], [1, "white-text-2", "font"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", 1, "timer-white"], [1, "d-inline", "white-text-2", "pl-2"], ["class", "service-div", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-12", "text-right", "service-card-text"], ["routerLinkActive", "active", 1, "light-blue-text", "d-inline", "pr-3", 3, "click"], ["src", "../../assets/img/Blog_Main_Icons/3. View more post/Dropdown.png", "alt", "", "width", "10"], ["class", "col-lg-12", 4, "ngFor", "ngForOf"], [1, "service-div"], [1, "row", "row-without-gutter", "mb-2"], [1, "col-lg-5", "col-sm-5"], [1, "holder"], [1, "image-holder", "rounded-3"], ["alt", "", 3, "src"], [1, "col-lg-7", "col-sm-7", "pt-4", "pl-3"], [1, "img-text", "font"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", "width", "20"], [1, "d-inline", "pl-2"], [1, "discover"], [1, "col-lg-12", "border-bottom", "mb-4"], [1, "row"], [1, "col-lg-6", "col-6"], [1, "light-blue-text"], [1, "col-lg-6", "col-6", "text-right", "service-card-text"], [1, "container"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "mr-3", "card", "blog-card"], [3, "click"], [1, "blog-img", "rounded-3"], [1, "service-card-text"], [1, "flex-holder"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", 1, "timer-img"], [1, "light-blue-text", "pl-2", "mb-0"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Education Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Join Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "All Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2)(21, "div", 12)(22, "div", 15)(23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18)(26, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "6 Minute Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "div", 12)(34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, BlogComponent_div_35_Template, 14, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23)(37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_a_click_37_listener() { return ctx.routeAllBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " View More Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, BlogComponent_div_40_Template, 16, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 3, ctx.allBlog[0].title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.latestBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".blog-banner[_ngcontent-%COMP%] {\n  height: 40vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n}\n\n.blog[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.blog-header-btn[_ngcontent-%COMP%] {\n  background-color: orangered;\n  padding: 12px 35px;\n  border: none;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 15px;\n  margin-left: -40px;\n}\n\n.blog-header-text-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #5194d9;\n  padding: 10px;\n  border-radius: 10px;\n  border-right: none;\n  width: 33%;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.recent-news[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1% 3%;\n}\n\n.discover[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 1%;\n}\n\n.blog-first-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.timer-white[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-bottom: 5px;\n  color: white;\n}\n\n.blog-img-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 8%;\n  width: 50%;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.timer-img[_ngcontent-%COMP%] {\n  width: 8% !important;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 20vh !important;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 23vh !important;\n  }\n}\n\n.holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n}\n\n.blog-img[_ngcontent-%COMP%] {\n  height: 30vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.service-card-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  border: none;\n}\n\n.flex-holder[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media only screen and (max-width: 767px) {\n  .title[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .blog-header-text-box[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .blog-header-btn[_ngcontent-%COMP%] {\n    padding: 12px 7px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n    height: auto;\n  }\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .img-div[_ngcontent-%COMP%] {\n    margin: 2% !important;\n  }\n  .blog-img-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timer-white[_ngcontent-%COMP%] {\n    width: 6% !important;\n  }\n  .blog-card[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n}\n\n.img-div[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(30, 20, 150, 0.7)), url('j.png') no-repeat;\n  padding: 32%;\n  margin: 3%;\n  background-position: top;\n  background-size: cover;\n  border-radius: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.holder[_ngcontent-%COMP%], .img-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 0%;\n  \n}\n\n.holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  height: 25vh;\n  background-position: left;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.blog-img[_ngcontent-%COMP%] {\n  height: 30vh;\n  background-position: inherit;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,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QSx5QkFBQTtBQWlCSjs7QUFmQTtFQUNFLFlBQUE7RUFDQyx5QkFBQTtFQUNELHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFtQkYiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQmxvZ19NYWluX0ljb25zL0ltYWdlL2Jhbm5lci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICAuYmxvZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmJsb2ctaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICB9XHJcbiAgLmJsb2ctaGVhZGVyLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgfVxyXG4gIC5ibG9nLWhlYWRlci10ZXh0LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUxOTRkOTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICB9XHJcbiAgLy8gLmJsb2ctaGVhZGVyLXRleHQtYm94OjpwbGFjZWhvbGRlcntcclxuICAvLyAgICAgIGNvbG9yOiNmZmY7XHJcbiAgLy8gfVxyXG4gIC50aXRsZS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICB9XHJcbiAgLnJlY2VudC1uZXdzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElIDMlO1xyXG4gIH1cclxuICAuZGlzY292ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyUgMSU7XHJcbiAgfVxyXG4gIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudGltZXItd2hpdGUge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuYmxvZy1pbWctdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiA4JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5wbC0zIHtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgfVxyXG4gIC5wYXJlbnQtZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmhvbGRlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAucGwtMiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIH1cclxuICAucHItMyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICB9XHJcbiAgLnRpbWVyLWltZyB7XHJcbiAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvbnR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6MTUwMHB4KSB7XHJcbiAgICAuaG9sZGVyIC5pbWFnZS1ob2xkZXIge1xyXG4gICAgICBoZWlnaHQ6IDIwdmggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAuaG9sZGVyIC5pbWFnZS1ob2xkZXIge1xyXG4gICAgICBoZWlnaHQ6IDIzdmggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhvbGRlciAuaW1hZ2UtaG9sZGVyIHtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmJsb2ctaW1nIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlLWNhcmQtdGV4dCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5ibG9nLWNhcmQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5mbGV4LWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5ibG9nLWhlYWRlci10ZXh0LWJveCB7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1oZWFkZXItYnRuIHtcclxuICAgICAgcGFkZGluZzogMTJweCA3cHg7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1iYW5uZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1kaXYge1xyXG4gICAgICBtYXJnaW46IDIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1pbWctdGV4dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRpbWVyLXdoaXRlIHtcclxuICAgICAgd2lkdGg6IDYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1jYXJkIHtcclxuICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctYmFubmVyIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbWctZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBib3R0b20sXHJcbiAgICAgICAgcmdiKDI1NSAyNTUgMjU1IC8gMCUpLFxyXG4gICAgICAgIHJnYmEoMzAsIDIwLCAxNTAsIDAuNylcclxuICAgICAgKSxcclxuICAgICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9CbG9nX01haW5fSWNvbnMvai5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogMzIlO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAuaG9sZGVyLFxyXG4gIC5pbWctdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuaG9sZGVyIGltZ3tcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXHJcbn1cclxuLmhvbGRlciAuaW1hZ2UtaG9sZGVye1xyXG4gIGhlaWdodDogMjV2aDtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5ibG9nLWltZyB7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 80797:
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 23622);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.component */ 38716);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






// import { HeaderInnerModule } from '../header-inner/header-inner.module';
class BlogModule {
}
BlogModule.ɵfac = function BlogModule_Factory(t) { return new (t || BlogModule)(); };
BlogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        // HeaderInnerModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        // HeaderInnerModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselModule], exports: [_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_blog_blog_module_ts.js.map