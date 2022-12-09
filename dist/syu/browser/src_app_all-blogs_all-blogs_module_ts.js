"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_all-blogs_all-blogs_module_ts"],{

/***/ 78303:
/*!*******************************************************!*\
  !*** ./src/app/all-blogs/all-blogs-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBlogsRoutingModule": () => (/* binding */ AllBlogsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-blogs.component */ 15614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: 'study-abroad',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'career',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'exam',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'how-to-guide',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'neet-counselling',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'top-colleges-and-universities',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    },
    {
        path: 'all-blogs',
        component: _all_blogs_component__WEBPACK_IMPORTED_MODULE_0__.AllBlogsComponent
    }
];
class AllBlogsRoutingModule {
}
AllBlogsRoutingModule.ɵfac = function AllBlogsRoutingModule_Factory(t) { return new (t || AllBlogsRoutingModule)(); };
AllBlogsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AllBlogsRoutingModule });
AllBlogsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AllBlogsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15614:
/*!**************************************************!*\
  !*** ./src/app/all-blogs/all-blogs.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBlogsComponent": () => (/* binding */ AllBlogsComponent)
/* harmony export */ });
/* harmony import */ var _all_blogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-blogs */ 30279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 10970);





function AllBlogsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AllBlogsComponent_div_21_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const image_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.makeActive(image_r2.url)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "5 Minute Read");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + image_r2.blogimg + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r2.blogimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, image_r2.title));
} }
class AllBlogsComponent {
    constructor(router) {
        this.router = router;
        this.blogCategorie = _all_blogs__WEBPACK_IMPORTED_MODULE_0__.blogCategories;
        this.allBLogs = [];
        (this.data = this.router.getCurrentNavigation()?.extras.state),
            console.log("data", this.data);
    }
    ngOnInit() {
        console.log("blogData: ", _all_blogs__WEBPACK_IMPORTED_MODULE_0__);
        this.url = this.router.url.split('/');
        console.log('this.url: ', this.url);
        console.log('blogData.blogdata: ', _all_blogs__WEBPACK_IMPORTED_MODULE_0__.blogdata);
        if (!this.allData) {
            _all_blogs__WEBPACK_IMPORTED_MODULE_0__.blogdata.forEach(nd => {
                nd.forEach(n => {
                    if (n.Categories === this.url[3]) {
                        this.allData = nd;
                    }
                });
            });
        }
        console.log('this.allData: ', this.allData);
        if (this.url[3] === 'all-blogs') {
            _all_blogs__WEBPACK_IMPORTED_MODULE_0__.blogdata.forEach(bg => {
                bg.forEach((b) => {
                    this.customeCat = 'All Blogs';
                    this.allBLogs.push(b);
                });
            });
        }
        else {
            this.data = this.allData;
        }
        console.log('this.allBLogs: ', this.allBLogs);
        console.log('this.data: ', this.data);
        console.log("blogCategorie: ", this.blogCategorie);
    }
    makeActive(tab) {
        this.router.navigate(['blog/' + tab]);
    }
}
AllBlogsComponent.ɵfac = function AllBlogsComponent_Factory(t) { return new (t || AllBlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AllBlogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AllBlogsComponent, selectors: [["app-all-blogs"]], decls: 23, vars: 6, consts: [[1, "faq"], [1, "faq-banner"], [1, "col-lg-12"], [1, "faq-page-header", "text-center"], [1, "white-text-2"], [1, "faq-div"], [1, "row", "row-without-gutter"], [1, "navbar", "navbar-expand-lg", "navbar-light", "full-width-tabs"], ["stickyNav", ""], [1, "col-lg-12", "col-12", "custom-padding-right"], ["id", "college-content-tab"], [1, "tabcontent"], [1, "row", "row-without-gutter", "relative-row"], [1, "container", "gallery"], [1, "discover"], [1, "container-box"], ["class", "item service-div", 4, "ngFor", "ngForOf"], [1, "item", "service-div"], [1, "mr-3", "card", "blog-card"], [3, "click"], [1, "blog-img", "rounded-3"], ["alt", "", 3, "src"], [1, "service-card-text"], [1, "flex-holder"], ["src", "../../assets/img/Blog_Main_Icons/2. Time/Timer-Blue.png", "alt", "", 1, "timer-img"], [1, "light-blue-text", "pl-2", "mb-0"]], template: function AllBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "nav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div")(15, "div", 12)(16, "div", 13)(17, "div", 2)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AllBlogsComponent_div_21_Template, 12, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, ctx.data ? ctx.data[0].Categories.replaceAll("-", " ") : ctx.customeCat.replaceAll("-", " ")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("stickyNav", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data ? ctx.data : ctx.allBLogs);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".blog-banner[_ngcontent-%COMP%] {\n  height: 40vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n}\n\n.blog[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.blog-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.blog-header-btn[_ngcontent-%COMP%] {\n  background-color: orangered;\n  padding: 12px 35px;\n  border: none;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 15px;\n  margin-left: -40px;\n}\n\n.blog-header-text-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #5194d9;\n  padding: 10px;\n  border-radius: 10px;\n  border-right: none;\n  width: 33%;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.recent-news[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1% 3%;\n}\n\n.discover[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 2%;\n}\n\n.blog-first-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.timer-white[_ngcontent-%COMP%] {\n  width: 5%;\n  margin-bottom: 5px;\n}\n\n.blog-img-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 8%;\n  width: 50%;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.pr-3[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.timer-img[_ngcontent-%COMP%] {\n  width: 25px !important;\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1500px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 20vh !important;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n    height: 23vh !important;\n  }\n}\n\n.holder[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  height: 25vh;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n}\n\n.blog-img[_ngcontent-%COMP%] {\n  width: 281px;\n  height: 192px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.service-card-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  border: none;\n  width: 292px;\n}\n\n.flex-holder[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media only screen and (max-width: 767px) {\n  .title[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .blog-header-text-box[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .blog-header-btn[_ngcontent-%COMP%] {\n    padding: 12px 7px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    padding-bottom: 5%;\n    height: auto;\n  }\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .img-div[_ngcontent-%COMP%] {\n    margin: 2% !important;\n  }\n  .blog-img-text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timer-white[_ngcontent-%COMP%] {\n    width: 6% !important;\n  }\n  .blog-card[_ngcontent-%COMP%] {\n    margin: 0 5%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .blog-first-img[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .blog-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n}\n\n.img-div[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(30, 20, 150, 0.7)), url('j.png') no-repeat;\n  padding: 32%;\n  margin: 3%;\n  background-position: top;\n  background-size: cover;\n  border-radius: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.holder[_ngcontent-%COMP%], .img-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.container-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 40px;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.faq[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.faq-banner[_ngcontent-%COMP%] {\n  padding: 5%;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.white-text-2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  padding: 6px 3%;\n  width: 100%;\n  margin: 7px auto;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDRCx1REFBQTtFQUNBLDBCQUFBO0VBQ0MsbUNBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7RUFDRCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSDs7QUFEQTtFQUNJLGdCQUFBO0VBQ0QseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFJSDs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0csc0JBQUE7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ssU0FBQTtFQUNBLGtCQUFBO0FBTUw7O0FBSkE7RUFDSSxrQkFBQTtFQUNELFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQU9IOztBQUxBO0VBQ0ssZ0JBQUE7QUFRTDs7QUFOQTtFQUNLLGtCQUFBO0FBU0w7O0FBUEE7RUFDSyxXQUFBO0VBQ0EsbUJBQUE7QUFVTDs7QUFSQTtFQUNJLGdCQUFBO0FBV0o7O0FBVEE7RUFDSyxpQkFBQTtBQVlMOztBQVZBO0VBQ0ssc0JBQUE7QUFhTDs7QUFYQTtFQUNJO0lBQ0ssdUJBQUE7RUFjUDtBQUNGOztBQVpBO0VBQ0k7SUFDSyx1QkFBQTtFQWNQO0FBQ0Y7O0FBWkE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDRCxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQWNIOztBQVpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0FBZ0JKOztBQWRBO0VBQ0ssaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWlCTDs7QUFmQTtFQUNJLGFBQUE7QUFrQko7O0FBaEJBO0VBQ0k7SUFFSyxVQUFBO0VBa0JQO0VBaEJFO0lBQ0ssVUFBQTtFQWtCUDtFQWhCRTtJQUNLLGlCQUFBO0VBa0JQO0VBaEJFO0lBQ0ssa0JBQUE7SUFDQSxZQUFBO0VBa0JQO0VBaEJFO0lBQ0ssV0FBQTtJQUNBLG1CQUFBO0VBa0JQO0VBaEJFO0lBQ0sscUJBQUE7RUFrQlA7RUFoQkU7SUFDSyxXQUFBO0VBa0JQO0VBaEJFO0lBQ0ssb0JBQUE7RUFrQlA7RUFoQkU7SUFDSyxZQUFBO0VBa0JQO0FBQ0Y7O0FBaEJBO0VBQ0k7SUFDSyxXQUFBO0lBQ0EsbUJBQUE7RUFrQlA7RUFoQkc7SUFDSyxZQUFBO0lBQ0Esa0JBQUE7RUFrQlI7QUFDRjs7QUFoQkE7RUFDSSw4R0FBQTtFQUNELFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBa0JIOztBQWhCQTs7RUFFSSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0FBb0JKOztBQWpCQTtFQUNJLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxXQUFBO0VBQ0QsdURBQUE7RUFDQSwwQkFBQTtFQUNDLDZFQUFBO0VBQ0EsNEJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksV0FBQTtBQXVCSjs7QUFyQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBd0JKOztBQXRCQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksa0JBQUE7QUEwQkoiLCJmaWxlIjoiYWxsLWJsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctYmFubmVye1xyXG4gICAgaGVpZ2h0OjQwdmggO1xyXG4gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKCcuLi8uLi9hc3NldHMvaW1nL0Jsb2dfTWFpbl9JY29ucy9JbWFnZS9iYW5uZXIucG5nJykgOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmJsb2d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uYmxvZy1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLmJsb2ctaGVhZGVyLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuICAgcGFkZGluZzogMTJweCAzNXB4O1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG4uYmxvZy1oZWFkZXItdGV4dC1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjNTE5NGQ5O1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgIHdpZHRoOiAzMyU7XHJcbn1cclxuLy8gLmJsb2ctaGVhZGVyLXRleHQtYm94OjpwbGFjZWhvbGRlcntcclxuLy8gICAgICBjb2xvcjojZmZmO1xyXG4vLyB9XHJcbi50aXRsZS10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxufVxyXG4ucmVjZW50LW5ld3N7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxJSAzJTtcclxufVxyXG4uZGlzY292ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyUgMiU7XHJcbn1cclxuLmJsb2ctZmlyc3QtaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRpbWVyLXdoaXRle1xyXG4gICAgIHdpZHRoOjUlO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYmxvZy1pbWctdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm90dG9tOiAxMHB4O1xyXG4gICBsZWZ0OiA4JTtcclxuICAgd2lkdGg6IDUwJTtcclxufVxyXG4ucGwtM3tcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcbi5wYXJlbnQtZGl2e1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaG9sZGVyIGltZ3tcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBsLTJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcbi5wci0ze1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcbi50aW1lci1pbWd7XHJcbiAgICAgd2lkdGg6MjVweCAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6MTIwMHB4KSBhbmQgKG1heC13aWR0aDoxNTAwcHgpIHtcclxuICAgIC5ob2xkZXIgLmltYWdlLWhvbGRlcntcclxuICAgICAgICAgaGVpZ2h0OjIwdmggIWltcG9ydGFudFxyXG4gICAgfSAgICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDoxNjAwcHgpIHtcclxuICAgIC5ob2xkZXIgLmltYWdlLWhvbGRlcntcclxuICAgICAgICAgaGVpZ2h0OjIzdmggIWltcG9ydGFudFxyXG4gICAgfSAgICAgXHJcbn1cclxuLmhvbGRlciAuaW1hZ2UtaG9sZGVye1xyXG4gICAgaGVpZ2h0OjI1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJsb2ctaW1ne1xyXG4gICAgd2lkdGg6IDI4MXB4O1xyXG4gICAgaGVpZ2h0OiAxOTJweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNlcnZpY2UtY2FyZC10ZXh0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ibG9nLWNhcmR7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgd2lkdGg6IDI5MnB4XHJcbn1cclxuLmZsZXgtaG9sZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAudGl0bGVcclxuICAgIHtcclxuICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgfVxyXG4gICAgLmJsb2ctaGVhZGVyLXRleHQtYm94e1xyXG4gICAgICAgICB3aWR0aDo3NSU7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1oZWFkZXItYnRue1xyXG4gICAgICAgICBwYWRkaW5nOjEycHggN3B4O1xyXG4gICAgfVxyXG4gICAgLmJsb2ctYmFubmVye1xyXG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgIGhlaWdodDphdXRvXHJcbiAgICB9XHJcbiAgICAuYmxvZy1maXJzdC1pbWd7XHJcbiAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWRpdntcclxuICAgICAgICAgbWFyZ2luOjIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmxvZy1pbWctdGV4dHtcclxuICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC50aW1lci13aGl0ZXtcclxuICAgICAgICAgd2lkdGg6NiUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gICAgLmJsb2ctY2FyZHtcclxuICAgICAgICAgbWFyZ2luOiAwIDUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5ibG9nLWZpcnN0LWltZyB7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICAuYmxvZy1iYW5uZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICB9XHJcbn1cclxuLmltZy1kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjU1IDI1NSAyNTUgLyAwJSksIHJnYmEoMzAsIDIwLCAxNTAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvQmxvZ19NYWluX0ljb25zL2oucG5nJykgbm8tcmVwZWF0O1xyXG4gICBwYWRkaW5nOiAzMiU7XHJcbiAgIG1hcmdpbjogMyU7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmhvbGRlcixcclxuLmltZy10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbi5jb250YWluZXItYm94e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm94IGRpdiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZmFxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mYXEtYmFubmVye1xyXG4gICAgcGFkZGluZzo1JTtcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQwLCAxODUsIDIyOSwgMC44KSwgIzMzNTM5ZCk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4ud2hpdGUtdGV4dC0ye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmdhbGxlcnl7XHJcbiAgICBwYWRkaW5nOiA2cHggMyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogN3B4IGF1dG87IFxyXG59XHJcbi5yb3ctd2l0aG91dC1ndXR0ZXJ7XHJcbiAgICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlbGF0aXZlLXJvd3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 96794:
/*!***********************************************!*\
  !*** ./src/app/all-blogs/all-blogs.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllBlogsModule": () => (/* binding */ AllBlogsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _all_blogs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-blogs-routing.module */ 78303);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _all_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-blogs.component */ 15614);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








class AllBlogsModule {
}
AllBlogsModule.ɵfac = function AllBlogsModule_Factory(t) { return new (t || AllBlogsModule)(); };
AllBlogsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AllBlogsModule });
AllBlogsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _all_blogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllBlogsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AllBlogsModule, { declarations: [_all_blogs_component__WEBPACK_IMPORTED_MODULE_3__.AllBlogsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _all_blogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllBlogsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule] }); })();


/***/ }),

/***/ 30279:
/*!****************************************!*\
  !*** ./src/app/all-blogs/all-blogs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogCategories": () => (/* binding */ blogCategories),
/* harmony export */   "blogdata": () => (/* binding */ blogdata)
/* harmony export */ });
/* harmony import */ var _assets_blogData_studyAbroad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/blogData/studyAbroad */ 63150);
/* harmony import */ var _assets_blogData_exam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/blogData/exam */ 15777);
/* harmony import */ var _assets_blogData_howtoGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/blogData/howtoGuide */ 26997);
/* harmony import */ var _assets_blogData_career__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/blogData/career */ 79246);
/* harmony import */ var _assets_blogData_topCollegesUniversities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/blogData/topCollegesUniversities */ 24490);
/* harmony import */ var _assets_blogData_neetCounselling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/blogData/neetCounselling */ 69201);






const studyAbroads = _assets_blogData_studyAbroad__WEBPACK_IMPORTED_MODULE_0__["default"];
const exams = _assets_blogData_exam__WEBPACK_IMPORTED_MODULE_1__["default"];
const howtoGuides = _assets_blogData_howtoGuide__WEBPACK_IMPORTED_MODULE_2__["default"];
const careers = _assets_blogData_career__WEBPACK_IMPORTED_MODULE_3__["default"];
const topCollegesUniversitiess = _assets_blogData_topCollegesUniversities__WEBPACK_IMPORTED_MODULE_4__["default"];
const neetCounsellings = _assets_blogData_neetCounselling__WEBPACK_IMPORTED_MODULE_5__["default"];
const blogCategories = [
    'Study Abroads',
    'Exams',
    'How To Guides',
    'Careers',
    'Top Colleges Universitiess',
    'NEET Counselling'
];
console.log('studyAbroad: ', _assets_blogData_studyAbroad__WEBPACK_IMPORTED_MODULE_0__);
const blogdata = [
    studyAbroads,
    exams,
    howtoGuides,
    careers,
    topCollegesUniversitiess,
    neetCounsellings
];



/***/ })

}]);
//# sourceMappingURL=src_app_all-blogs_all-blogs_module_ts.js.map