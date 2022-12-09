"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_all-news_all-news_module_ts"],{

/***/ 40134:
/*!*****************************************************!*\
  !*** ./src/app/all-news/all-news-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsRoutingModule": () => (/* binding */ AllNewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _all_news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news.component */ 71673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: 'exam',
        component: _all_news_component__WEBPACK_IMPORTED_MODULE_0__.AllNewsComponent
    },
    /*{
      path:'study-abroad',
      component:AllNewsComponent
    },*/
    {
        path: 'study-abroad',
        component: _all_news_component__WEBPACK_IMPORTED_MODULE_0__.AllNewsComponent
    },
    {
        path: 'exam',
        component: _all_news_component__WEBPACK_IMPORTED_MODULE_0__.AllNewsComponent
    },
    /*{
      path:'how-to-guide',
      component:AllNewsComponent
    },
    {
      path:'neet-counselling',
      component:AllNewsComponent
    },
    {
      path:'top-college-universities',
      component:AllNewsComponent
    },
    {
      path:'all-news',
      component:AllNewsComponent
    }*/
];
class AllNewsRoutingModule {
}
AllNewsRoutingModule.ɵfac = function AllNewsRoutingModule_Factory(t) { return new (t || AllNewsRoutingModule)(); };
AllNewsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AllNewsRoutingModule });
AllNewsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllNewsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71673:
/*!************************************************!*\
  !*** ./src/app/all-news/all-news.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsComponent": () => (/* binding */ AllNewsComponent)
/* harmony export */ });
/* harmony import */ var _all_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news */ 14016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 10970);





function AllNewsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllNewsComponent_div_21_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const image_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.makeActive(image_r2.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "5 Minute Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + image_r2.blogimg + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, image_r2.title));
} }
class AllNewsComponent {
    constructor(router) {
        this.router = router;
        this.newsCategorie = _all_news__WEBPACK_IMPORTED_MODULE_0__.newsCategories;
        this.data = [];
        this.allNews = [];
        (this.data = this.router.getCurrentNavigation()?.extras.state),
            console.log("data", this.data);
    }
    ngOnInit() {
        this.url = this.router.url.split('/');
        if (!this.data) {
            _all_news__WEBPACK_IMPORTED_MODULE_0__.newsdata.forEach(nd => {
                nd.forEach(n => {
                    if (n.Categories === this.url[3]) {
                        this.data = nd;
                    }
                });
            });
        }
        if (this.url[3] === 'all-news') {
            _all_news__WEBPACK_IMPORTED_MODULE_0__.newsdata.forEach(bg => {
                bg.forEach(b => {
                    this.customeCat = 'All News';
                    this.allNews.push(b);
                });
            });
        }
        this.url = this.router.url.split('/');
        if (!this.allData) {
            _all_news__WEBPACK_IMPORTED_MODULE_0__.newsdata.forEach(nd => {
                nd.forEach(n => {
                    if (n.Categories === this.url[3]) {
                        this.allData = nd;
                    }
                });
            });
        }
        if (this.url[3] === 'all-blogs') {
            _all_news__WEBPACK_IMPORTED_MODULE_0__.newsdata.forEach(bg => {
                bg.forEach((b) => {
                    this.customeCat = 'All Blogs';
                    this.allNews.push(b);
                });
            });
        }
        else {
            this.data = this.allData;
        }
    }
    makeActive(tab) {
        this.router.navigate(['news/' + tab]);
    }
}
AllNewsComponent.ɵfac = function AllNewsComponent_Factory(t) { return new (t || AllNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AllNewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AllNewsComponent, selectors: [["app-all-news"]], decls: 23, vars: 6, consts: [[1, "faq"], [1, "faq-banner"], [1, "col-lg-12"], [1, "faq-page-header", "text-center"], [1, "white-text-2"], [1, "faq-div"], [1, "row", "row-without-gutter"], [1, "navbar", "navbar-expand-lg", "navbar-light", "full-width-tabs"], ["stickyNav", ""], [1, "col-lg-12", "col-12", "custom-padding-right"], ["id", "college-content-tab"], [1, "tabcontent"], [1, "row", "row-without-gutter", "relative-row"], [1, "container", "gallery"], [1, "discover"], [1, "container-box"], ["class", "item service-div", 4, "ngFor", "ngForOf"], [1, "item", "service-div"], [1, "mr-3", "card", "blog-card"], [3, "click"], [1, "blog-img", "rounded-3"], [1, "service-card-text"], [1, "flex-holder"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", 1, "timer-img"], [1, "light-blue-text", "pl-2", "mb-0"]], template: function AllNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "nav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div")(15, "div", 12)(16, "div", 13)(17, "div", 2)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AllNewsComponent_div_21_Template, 11, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx.data ? ctx.data[0].Categories.replaceAll("-", " ") : ctx.customeCat.replaceAll("-", " ")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("stickyNav", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data ? ctx.data : ctx.allNews);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".blog-banner[_ngcontent-%COMP%] {\n  height: 40vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n}\n\n.blog[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.blog-header-btn[_ngcontent-%COMP%] {\n  background-color: orangered;\n  padding: 12px 35px;\n  border: none;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 15px;\n  margin-left: -40px;\n}\n\n.blog-header-text-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #5194d9;\n  padding: 10px;\n  border-radius: 10px;\n  border-right: none;\n  width: 33%;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.recent-news[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1% 3%;\n}\n\n.discover[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 2%;\n}\n\n.blog-first-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.timer-white[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-bottom: 5px;\n}\n\n.blog-img-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 8%;\n  width: 50%;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.timer-img[_ngcontent-%COMP%] {\n  width: 25px !important;\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 20vh !important;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 23vh !important;\n  }\n}\n\n.holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n}\n\n.service-card-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.blog-img[_ngcontent-%COMP%] {\n  width: 281px;\n  height: 192px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  border: none;\n  width: 292px;\n}\n\n.flex-holder[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media only screen and (max-width: 767px) {\n  .title[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .blog-header-text-box[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .blog-header-btn[_ngcontent-%COMP%] {\n    padding: 12px 7px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n    height: auto;\n  }\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .img-div[_ngcontent-%COMP%] {\n    margin: 2% !important;\n  }\n  .blog-img-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timer-white[_ngcontent-%COMP%] {\n    width: 6% !important;\n  }\n  .blog-card[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n}\n\n.img-div[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(30, 20, 150, 0.7)), url('j.png') no-repeat;\n  padding: 32%;\n  margin: 3%;\n  background-position: top;\n  background-size: cover;\n  border-radius: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.holder[_ngcontent-%COMP%], .img-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.container-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 40px;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.faq[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.faq-banner[_ngcontent-%COMP%] {\n  padding: 5%;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.white-text-2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  padding: 6px 3%;\n  width: 100%;\n  margin: 7px auto;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNELHVEQUFBO0VBQ0EsMEJBQUE7RUFDQyxtQ0FBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtFQUNELGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdIOztBQURBO0VBQ0ksZ0JBQUE7RUFDRCx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlIOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDRyxzQkFBQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSyxTQUFBO0VBQ0Esa0JBQUE7QUFNTDs7QUFKQTtFQUNJLGtCQUFBO0VBQ0QsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBT0g7O0FBTEE7RUFDSyxnQkFBQTtBQVFMOztBQU5BO0VBQ0ssa0JBQUE7QUFTTDs7QUFQQTtFQUNLLFdBQUE7RUFDQSxtQkFBQTtBQVVMOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNLLGlCQUFBO0FBWUw7O0FBVkE7RUFDSyxzQkFBQTtBQWFMOztBQVhBO0VBQ0k7SUFDSyx1QkFBQTtFQWNQO0FBQ0Y7O0FBWkE7RUFDSTtJQUNLLHVCQUFBO0VBY1A7QUFDRjs7QUFaQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNELHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBY0g7O0FBWkE7RUFDSSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNDLDJCQUFBO0VBQ0Qsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFnQko7O0FBZEE7RUFDSyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBaUJMOztBQWZBO0VBQ0ksYUFBQTtBQWtCSjs7QUFoQkE7RUFDSTtJQUVLLFVBQUE7RUFrQlA7RUFoQkU7SUFDSyxVQUFBO0VBa0JQO0VBaEJFO0lBQ0ssaUJBQUE7RUFrQlA7RUFoQkU7SUFDSyxrQkFBQTtJQUNBLFlBQUE7RUFrQlA7RUFoQkU7SUFDSyxXQUFBO0lBQ0EsbUJBQUE7RUFrQlA7RUFoQkU7SUFDSyxxQkFBQTtFQWtCUDtFQWhCRTtJQUNLLFdBQUE7RUFrQlA7RUFoQkU7SUFDSyxvQkFBQTtFQWtCUDtFQWhCRTtJQUNLLFlBQUE7RUFrQlA7QUFDRjs7QUFoQkE7RUFDSTtJQUNLLFdBQUE7SUFDQSxtQkFBQTtFQWtCUDtFQWhCRztJQUNLLFlBQUE7SUFDQSxrQkFBQTtFQWtCUjtBQUNGOztBQWhCQTtFQUNJLDhHQUFBO0VBQ0QsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFrQkg7O0FBaEJBOztFQUVJLGdCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUFvQko7O0FBakJBO0VBQ0ksV0FBQTtBQW9CSjs7QUFsQkE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBcUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDRCx1REFBQTtFQUNBLDBCQUFBO0VBQ0MsNkVBQUE7RUFDQSw0QkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxXQUFBO0FBdUJKOztBQXJCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxrQkFBQTtBQTBCSiIsImZpbGUiOiJhbGwtbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWJhbm5lcntcclxuICAgIGhlaWdodDo0MHZoIDtcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9CbG9nX01haW5fSWNvbnMvSW1hZ2UvYmFubmVyLnBuZycpIDsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5ibG9ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmJsb2ctaGVhZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbi5ibG9nLWhlYWRlci1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgIHBhZGRpbmc6IDEycHggMzVweDtcclxuICAgYm9yZGVyOiBub25lO1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbn1cclxuLmJsb2ctaGVhZGVyLXRleHQtYm94e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzUxOTRkOTtcclxuICAgcGFkZGluZzogMTBweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICB3aWR0aDogMzMlO1xyXG59XHJcbi8vIC5ibG9nLWhlYWRlci10ZXh0LWJveDo6cGxhY2Vob2xkZXJ7XHJcbi8vICAgICAgY29sb3I6I2ZmZjtcclxuLy8gfVxyXG4udGl0bGUtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbn1cclxuLnJlY2VudC1uZXdze1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMSUgMyU7XHJcbn1cclxuLmRpc2NvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDMlIDIlO1xyXG59XHJcbi5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50aW1lci13aGl0ZXtcclxuICAgICB3aWR0aDo1JTtcclxuICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmJsb2ctaW1nLXRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvdHRvbTogMTBweDtcclxuICAgbGVmdDogOCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnBsLTN7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG4ucGFyZW50LWRpdntcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhvbGRlciBpbWd7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5wbC0ye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG4ucHItM3tcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG4udGltZXItaW1ne1xyXG4gICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDoxMjAwcHgpIGFuZCAobWF4LXdpZHRoOjE1MDBweCkge1xyXG4gICAgLmhvbGRlciAuaW1hZ2UtaG9sZGVye1xyXG4gICAgICAgICBoZWlnaHQ6MjB2aCAhaW1wb3J0YW50XHJcbiAgICB9ICAgICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOjE2MDBweCkge1xyXG4gICAgLmhvbGRlciAuaW1hZ2UtaG9sZGVye1xyXG4gICAgICAgICBoZWlnaHQ6MjN2aCAhaW1wb3J0YW50XHJcbiAgICB9ICAgICBcclxufVxyXG4uaG9sZGVyIC5pbWFnZS1ob2xkZXJ7XHJcbiAgICBoZWlnaHQ6MjV2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2VydmljZS1jYXJkLXRleHR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJsb2ctaW1ne1xyXG4gICAgd2lkdGg6IDI4MXB4O1xyXG4gICAgaGVpZ2h0OiAxOTJweDtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ibG9nLWNhcmR7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgd2lkdGg6IDI5MnB4XHJcbn1cclxuLmZsZXgtaG9sZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAudGl0bGVcclxuICAgIHtcclxuICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgfVxyXG4gICAgLmJsb2ctaGVhZGVyLXRleHQtYm94e1xyXG4gICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1oZWFkZXItYnRue1xyXG4gICAgICAgICBwYWRkaW5nOjEycHggN3B4O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctYmFubmVye1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgIGhlaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuYmxvZy1maXJzdC1pbWd7XHJcbiAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWRpdntcclxuICAgICAgICAgbWFyZ2luOjIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1pbWctdGV4dHtcclxuICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC50aW1lci13aGl0ZXtcclxuICAgICAgICAgd2lkdGg6NiUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gICAgLmJsb2ctY2FyZHtcclxuICAgICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICAuYmxvZy1iYW5uZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICB9XHJcbn1cclxuLmltZy1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjU1IDI1NSAyNTUgLyAwJSksIHJnYmEoMzAsIDIwLCAxNTAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvQmxvZ19NYWluX0ljb25zL2oucG5nJykgbm8tcmVwZWF0O1xyXG4gICBwYWRkaW5nOiAzMiU7XHJcbiAgIG1hcmdpbjogMyU7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmhvbGRlcixcclxuLmltZy10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5jb250YWluZXItYm94e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm94IGRpdiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmFxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mYXEtYmFubmVye1xyXG4gICAgcGFkZGluZzo1JTtcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQwLCAxODUsIDIyOSwgMC44KSwgIzMzNTM5ZCk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4ud2hpdGUtdGV4dC0ye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmdhbGxlcnl7XHJcbiAgICBwYWRkaW5nOiA2cHggMyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogN3B4IGF1dG87IFxyXG59XHJcbi5yb3ctd2l0aG91dC1ndXR0ZXJ7XHJcbiAgICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlbGF0aXZlLXJvd3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 99154:
/*!*********************************************!*\
  !*** ./src/app/all-news/all-news.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllNewsModule": () => (/* binding */ AllNewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _all_news_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-news-routing.module */ 40134);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _all_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-news.component */ 71673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class AllNewsModule {
}
AllNewsModule.ɵfac = function AllNewsModule_Factory(t) { return new (t || AllNewsModule)(); };
AllNewsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AllNewsModule });
AllNewsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _all_news_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllNewsRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AllNewsModule, { declarations: [_all_news_component__WEBPACK_IMPORTED_MODULE_3__.AllNewsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _all_news_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllNewsRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] }); })();


/***/ }),

/***/ 14016:
/*!**************************************!*\
  !*** ./src/app/all-news/all-news.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newsCategories": () => (/* binding */ newsCategories),
/* harmony export */   "newsdata": () => (/* binding */ newsdata)
/* harmony export */ });
/* harmony import */ var _assets_newsData_exam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/newsData/exam */ 20588);
/* harmony import */ var _assets_newsData_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/newsData/general */ 53952);
//import * as studyAbroad from '../../assets/newsData/studyAbroad'


//import * as howtoGuide from '../../assets/newsData/howtoGuide'
//import * as career from '../../assets/newsData/career'
//import * as topCollegesUniversities from '../../assets/newsData/topCollegesUniversities'
//import * as neetCounselling from '../../assets/newsData/neetCounselling'
//const studyAbroads = studyAbroad.default
const exams = _assets_newsData_exam__WEBPACK_IMPORTED_MODULE_0__["default"];
const generals = _assets_newsData_general__WEBPACK_IMPORTED_MODULE_1__["default"];
//const howtoGuides = howtoGuide.default
//const careers = career.default
//const topCollegesUniversitiess = topCollegesUniversities.default
//const neetCounsellings =neetCounselling.default
const newsCategories = [
    //'Study Abroads', 
    'Exams',
    'general',
    //'How To Guides',
    //'Careers',
    //'Top Colleges Universitiess',
    //'NEET Counselling'
];
//console.log('studyAbroad: ', studyAbroad);
const newsdata = [
    //studyAbroads, 
    exams,
    generals,
    //howtoGuides,
    //careers,
    //topCollegesUniversitiess,
    //neetCounsellings
];



/***/ })

}]);
//# sourceMappingURL=src_app_all-news_all-news_module_ts.js.map