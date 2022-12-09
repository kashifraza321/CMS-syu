"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_news_news_module_ts"],{

/***/ 51491:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);


const baseUrl = 'http://18.189.207.215:8080/';
class ApiService {
    constructor(http) {
        this.http = http;
    }
    getAll(url) {
        return this.http.get(baseUrl + url);
    }
    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(baseUrl);
    }
    findByTitle(title) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58421:
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsRoutingModule": () => (/* binding */ NewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ 23391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent
    },
];
class NewsRoutingModule {
}
NewsRoutingModule.ɵfac = function NewsRoutingModule_Factory(t) { return new (t || NewsRoutingModule)(); };
NewsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewsRoutingModule });
NewsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23391:
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _newsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsData */ 91473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);







function NewsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 32)(6, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " 5 Minute Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", "url(" + image_r2.blogimg + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 3, image_r2.title));
} }
function NewsComponent_div_40_ng_container_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsComponent_div_40_ng_container_15_ng_template_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const image_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.makeActive(image_r6.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "5 Minute Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-image", "url(" + image_r6.blogimg + ")")("background-size", "contain");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, image_r6.title));
} }
function NewsComponent_div_40_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NewsComponent_div_40_ng_container_15_ng_template_1_Template, 10, 7, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function NewsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 37)(4, "div", 38)(5, "div", 39)(6, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 41)(10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsComponent_div_40_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r4 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.get(item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " View More Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 42)(14, "owl-carousel-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NewsComponent_div_40_ng_container_15_Template, 2, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 2, item_r4[0] == null ? null : item_r4[0].Categories.replaceAll("-", " ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r4);
} }
class NewsComponent {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.newsCategorie = _newsData__WEBPACK_IMPORTED_MODULE_0__.newsCategories;
        this.data = _newsData__WEBPACK_IMPORTED_MODULE_0__.newsdata;
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
                image: "../../assets/img/Blog_Main_Icons/l.png"
            },
        ];
        this.images2 = [
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/k.png",
                time: "7"
            },
            {
                text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
                image: "../../assets/img/Blog_Main_Icons/l.png",
                time: "5"
            }
        ];
    }
    ngOnInit() {
        console.log('newsData: ', _newsData__WEBPACK_IMPORTED_MODULE_0__);
        console.log('newsCategorie: ', this.newsCategorie);
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
    }
    makeActive(tab) {
        this.router.navigate(['news/' + tab]);
    }
    get(item) {
        this.router.navigate(['news/category/' + item[0].Categories], { state: item });
    }
    routeAllBlog() {
        this.router.navigate(['news/category/all-news']);
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 42, vars: 5, consts: [[1, "blog"], [1, "blog-banner"], [1, "col-lg-12"], [1, "blog-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "title"], [1, "title-text", "white-text-2"], ["action", "", 1, "blog-form"], ["type", "text", "placeholder", "Email Address", "name", "email", 1, "blog-header-text-box"], ["type", "submit", 1, "blog-header-btn"], [1, "col-lg-12", "col-12"], [1, "recent-news"], [1, "row", "row-without-gutter"], [1, "col-lg-12", "text-center"], [1, "recent-news-header", "light-blue-text"], [1, "col-lg-6", "col-sm-6"], [1, "parent-div"], [1, "img-div"], [1, "blog-img-text"], [1, "white-text-2", "font"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer.png", "alt", "", 1, "timer-white"], [1, "d-inline", "white-text-2", "pl-2"], ["class", "service-div", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-12", "text-right", "service-card-text"], ["routerLinkActive", "active", 1, "light-blue-text", "d-inline", "pr-3", 3, "click"], ["src", "../../assets/img/Blog_Main_Icons/3. View more post/Dropdown.png", "alt", "", "width", "10"], ["class", "col-lg-12", 4, "ngFor", "ngForOf"], [1, "service-div"], [1, "row", "row-without-gutter", "mb-2"], [1, "col-lg-5", "col-sm-5"], [1, "holder"], [1, "image-holder", "rounded-3"], [1, "col-lg-7", "col-sm-7", "pt-4", "pl-3"], [1, "img-text", "font"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", "width", "20"], [1, "d-inline", "pl-2"], [1, "discover"], [1, "col-lg-12", "border-bottom", "mb-4"], [1, "row"], [1, "col-lg-6", "col-6"], [1, "light-blue-text"], [1, "col-lg-6", "col-6", "text-right", "service-card-text"], [1, "container"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "mr-3", "card", "blog-card"], [3, "click"], [1, "blog-img", "rounded-3"], [1, "service-card-text"], [1, "flex-holder"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", 1, "timer-img"], [1, "light-blue-text", "pl-2", "mb-0"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Education News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Join Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "All News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2)(21, "div", 12)(22, "div", 15)(23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18)(26, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "6 Minute Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15)(33, "div", 12)(34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, NewsComponent_div_35_Template, 13, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23)(37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewsComponent_Template_a_click_37_listener() { return ctx.routeAllBlog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " View More Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, NewsComponent_div_40_Template, 16, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 3, ctx.allBlog[0].title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.latestBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe], styles: [".blog-banner[_ngcontent-%COMP%] {\n  height: 40vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n}\n\n.blog[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.blog-header-btn[_ngcontent-%COMP%] {\n  background-color: orangered;\n  padding: 12px 35px;\n  border: none;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 15px;\n  margin-left: -40px;\n}\n\n.blog-header-text-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #5194d9;\n  padding: 10px;\n  border-radius: 10px;\n  border-right: none;\n  width: 33%;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.recent-news[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1% 3%;\n}\n\n.discover[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 1%;\n}\n\n.blog-first-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.timer-white[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-bottom: 5px;\n}\n\n.blog-img-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 8%;\n  width: 50%;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.timer-img[_ngcontent-%COMP%] {\n  width: 8% !important;\n}\n\n.service-card-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.font[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 20vh !important;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 23vh !important;\n  }\n}\n\n.holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n}\n\n.blog-img[_ngcontent-%COMP%] {\n  height: 30vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  border: none;\n}\n\n.flex-holder[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media only screen and (max-width: 767px) {\n  .title[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .blog-header-text-box[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .blog-header-btn[_ngcontent-%COMP%] {\n    padding: 12px 7px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n    height: auto;\n  }\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .img-div[_ngcontent-%COMP%] {\n    margin: 2% !important;\n  }\n  .blog-img-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timer-white[_ngcontent-%COMP%] {\n    width: 6% !important;\n  }\n  .blog-card[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n}\n\n.img-div[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(30, 20, 150, 0.7)), url('j.png') no-repeat;\n  padding: 32%;\n  margin: 3%;\n  background-position: top;\n  background-size: cover;\n  border-radius: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.holder[_ngcontent-%COMP%], .img-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,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Y3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctYmFubmVye1xyXG4gICAgaGVpZ2h0OjQwdmggO1xyXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKCcuLi8uLi9hc3NldHMvaW1nL0Jsb2dfTWFpbl9JY29ucy9JbWFnZS9iYW5uZXIucG5nJykgOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmJsb2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uYmxvZy1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLmJsb2ctaGVhZGVyLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuICAgcGFkZGluZzogMTJweCAzNXB4O1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG4uYmxvZy1oZWFkZXItdGV4dC1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjNTE5NGQ5O1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgIHdpZHRoOiAzMyU7XHJcbn1cclxuLy8gLmJsb2ctaGVhZGVyLXRleHQtYm94OjpwbGFjZWhvbGRlcntcclxuLy8gICAgICBjb2xvcjojZmZmO1xyXG4vLyB9XHJcbi50aXRsZS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxufVxyXG4ucmVjZW50LW5ld3N7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxJSAzJTtcclxufVxyXG4uZGlzY292ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyUgMSU7XHJcbn1cclxuLmJsb2ctZmlyc3QtaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRpbWVyLXdoaXRle1xyXG4gICAgIHdpZHRoOjUlO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYmxvZy1pbWctdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiAxMHB4O1xyXG4gICBsZWZ0OiA4JTtcclxuICAgd2lkdGg6IDUwJTtcclxufVxyXG4ucGwtM3tcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcbi5wYXJlbnQtZGl2e1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaG9sZGVyIGltZ3tcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBsLTJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcbi5wci0ze1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcbi50aW1lci1pbWd7XHJcbiAgICAgd2lkdGg6OCUgIWltcG9ydGFudDtcclxufVxyXG4uc2VydmljZS1jYXJkLXRleHR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvbnR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOjEyMDBweCkgYW5kIChtYXgtd2lkdGg6MTUwMHB4KSB7XHJcbiAgICAuaG9sZGVyIC5pbWFnZS1ob2xkZXJ7XHJcbiAgICAgICAgIGhlaWdodDoyMHZoICFpbXBvcnRhbnRcclxuICAgIH0gICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6MTYwMHB4KSB7XHJcbiAgICAuaG9sZGVyIC5pbWFnZS1ob2xkZXJ7XHJcbiAgICAgICAgIGhlaWdodDoyM3ZoICFpbXBvcnRhbnRcclxuICAgIH0gICAgIFxyXG59XHJcbi5ob2xkZXIgLmltYWdlLWhvbGRlcntcclxuICAgIGhlaWdodDoyNXZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5ibG9nLWltZ3tcclxuICAgICBoZWlnaHQ6MzB2aDtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ibG9nLWNhcmR7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuLmZsZXgtaG9sZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAudGl0bGVcclxuICAgIHtcclxuICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgfVxyXG4gICAgLmJsb2ctaGVhZGVyLXRleHQtYm94e1xyXG4gICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1oZWFkZXItYnRue1xyXG4gICAgICAgICBwYWRkaW5nOjEycHggN3B4O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctYmFubmVye1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgIGhlaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuYmxvZy1maXJzdC1pbWd7XHJcbiAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWRpdntcclxuICAgICAgICAgbWFyZ2luOjIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1pbWctdGV4dHtcclxuICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC50aW1lci13aGl0ZXtcclxuICAgICAgICAgd2lkdGg6NiUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gICAgLmJsb2ctY2FyZHtcclxuICAgICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICAuYmxvZy1iYW5uZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICB9XHJcbn1cclxuLmltZy1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjU1IDI1NSAyNTUgLyAwJSksIHJnYmEoMzAsIDIwLCAxNTAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvQmxvZ19NYWluX0ljb25zL2oucG5nJykgbm8tcmVwZWF0O1xyXG4gICBwYWRkaW5nOiAzMiU7XHJcbiAgIG1hcmdpbjogMyU7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmhvbGRlcixcclxuLmltZy10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 51926:
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModule": () => (/* binding */ NewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-routing.module */ 58421);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.component */ 23391);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);



// import { HeaderInnerModule } from '../header-inner/header-inner.module';




class NewsModule {
}
NewsModule.ɵfac = function NewsModule_Factory(t) { return new (t || NewsModule)(); };
NewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewsModule });
NewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        // HeaderInnerModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewsModule, { declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__.NewsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _news_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        // HeaderInnerModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_news_news_module_ts.js.map