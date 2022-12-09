"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_img-gallery_img-gallery_module_ts"],{

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

/***/ 95118:
/*!***********************************************************!*\
  !*** ./src/app/img-gallery/img-gallery-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgGalleryRoutingModule": () => (/* binding */ ImgGalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _img_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-gallery.component */ 77597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _img_gallery_component__WEBPACK_IMPORTED_MODULE_0__.ImgGalleryComponent
    }
];
class ImgGalleryRoutingModule {
}
ImgGalleryRoutingModule.ɵfac = function ImgGalleryRoutingModule_Factory(t) { return new (t || ImgGalleryRoutingModule)(); };
ImgGalleryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ImgGalleryRoutingModule });
ImgGalleryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ImgGalleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 77597:
/*!******************************************************!*\
  !*** ./src/app/img-gallery/img-gallery.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgGalleryComponent": () => (/* binding */ ImgGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 10970);






const _c0 = ["stickyNav"];
const _c1 = ["stickyDiv"];
function ImgGalleryComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", img_r1.cImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class ImgGalleryComponent {
    constructor(viewportScroller, router, api) {
        this.viewportScroller = viewportScroller;
        this.router = router;
        this.api = api;
        this.isReadMore = true;
        this.isShade = true;
        this.sticky = false;
        this.stickyDiv = false;
        this.activeTab = 'tab1';
    }
    isActive(tabName) {
        return this.activeTab === tabName;
    }
    makeActive(tab) {
        this.activeTab = tab;
        window.scroll({
            top: 170,
            left: 0,
            behavior: 'smooth'
        });
    }
    makeActiveTab(tab) {
        this.activeTab = tab;
    }
    showBasicDialog() {
        this.displayBasic = true;
    }
    showText() {
        this.isReadMore = !this.isReadMore;
        this.isShade = !this.isShade;
    }
    onClick(elementId) {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    scrollToElement($element) {
        console.log($element);
        $element.scrollIntoView({ behavior: "smooth" });
    }
    getImages() {
        this.api.get('syudynamicimage/Pune Institute of Computer Technology, Pune').subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                this.images = res.object;
            }
        });
    }
    ngOnInit() {
        this.makeActiveTab('seminar');
        this.getImages();
    }
    ngAfterViewInit() {
        this.elementPosition = this.navTabs.nativeElement.offsetTop;
        this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
    }
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
ImgGalleryComponent.ɵfac = function ImgGalleryComponent_Factory(t) { return new (t || ImgGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ImgGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImgGalleryComponent, selectors: [["app-img-gallery"]], viewQuery: function ImgGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.navTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.talkExpertDiv = _t.first);
    } }, hostBindings: function ImgGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ImgGalleryComponent_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 1, consts: [[1, "faq"], [1, "faq-banner"], [1, "col-lg-12"], [1, "faq-page-header", "text-center"], [1, "white-text-2"], [1, "faq-page-breadcrumb", "text-center"], ["href", "", "routerLink", "/home", 1, "home"], ["src", "../../assets/img/services_page/Our_Services/Home.png", "alt", "", 1, "home-img"], ["href", "", 1, "arrow"], ["src", "../../assets/img/services_page/Our_Services/Arrow.png", "alt", "", 1, "arrow-img"], ["href", "", "routerLink", "/faq", 1, "service-link"], [1, "faq-div"], [1, "row", "row-without-gutter"], [1, "col-lg-12", "col-12", "custom-padding-right"], ["id", "college-content-tab"], [1, "tabcontent"], [1, "row", "row-without-gutter", "relative-row"], [1, "container", "gallery"], [1, "container-box"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src"]], template: function ImgGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Image Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 10)(13, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Image Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ImgGalleryComponent_div_23_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".aboutUs-banner[_ngcontent-%COMP%] {\n  height: 30vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n  \n}\n\n.about-us-page-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 20%;\n  padding-top: 10%;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 150px;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  \n  text-decoration: none;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14pt;\n  display: inline-block;\n  padding: 0 14px !important;\n  \n  margin-right: 14px;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-decoration: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.faq-banner[_ngcontent-%COMP%] {\n  padding: 5%;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.faq[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 15%;\n}\n\n\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.faq-div[_ngcontent-%COMP%] {\n  \n  border-radius: 10px;\n  padding: 1%;\n  padding-bottom: 0px;\n}\n\n.need-assi-img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10%;\n}\n\n.need-assi-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  color: #295ea1;\n  padding: 5px;\n  padding-top: 10px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #091832;\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%] {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n}\n\n@media only screen and (max-width: 767px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .need-assi-text[_ngcontent-%COMP%] {\n    padding-top: 30px !important;\n    font-size: 22px !important;\n  }\n  .need-assi-img[_ngcontent-%COMP%] {\n    width: 70%;\n    display: block;\n    margin: 0px auto;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 8%;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  \n  margin-bottom: 10px;\n  margin-right: 8px;\n  border-radius: 10px;\n  background-color: #fff !important;\n  padding: 2% !important;\n}\n\n.stickyNav[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 12%;\n  overflow: hidden;\n  z-index: 11;\n  height: auto;\n  width: 100%;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 19.5%;\n  overflow: hidden;\n  z-index: 10;\n  height: auto;\n  width: 100%;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0097db;\n  background-color: #fff;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom: 5px solid #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px !important;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  top: 120px;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  bottom: 60px;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid gray;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0097db !important;\n  background-color: #fff !important;\n  border-right: none !important;\n  border-top: none !important;\n  border-left: none !important;\n  border-bottom: 5px solid #0097db !important;\n}\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: block !important;\n}\n\n\n\n.container-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 40px;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 0.5s;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.gallery[_ngcontent-%COMP%] {\n  padding: 25px 8% !important;\n  margin: 10px auto !important;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  \n  justify-content: center;\n  padding-top: 5%;\n  display: block;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.white-text-2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: unset;\n}\n\n.gallery-box[_ngcontent-%COMP%] {\n  width: 90% !important;\n  margin: 30px auto !important;\n}\n\n.gallery-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 40px;\n}\n\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 0 !important;\n}\n\n@media only screen and (min-width: 450px) and (max-width: 1100px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-kol-c2][_ngcontent-%COMP%] {\n    width: 3%;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 4%;\n  }\n}\n\n@media only screen and (min-width: 450px) and (max-width: 600px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7RUFDQSw2RUFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQSxZQUFBOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0QsdURBQUE7RUFDQSwwQkFBQTtFQUNDLDZFQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQzs7R0FBQTs7QUFHRDtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGQTtFQUNJLFNBQUE7QUFLSjs7QUFIQTtF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Q0EsY0FBQTtBQTRCSjs7QUExQkE7RUFDSSxXQUFBO0FBNkJKOztBQTFCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBNkJKOztBQXpCQTtFQUNJO0lBQ0ksU0FBQTtFQTRCTjtFQTFCRTtJQUNJLFNBQUE7RUE0Qk47QUFDRjs7QUExQkE7RUFDSTtJQUNJLFNBQUE7RUE0Qk47QUFDRiIsImZpbGUiOiJpbWctZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dFVzLWJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MCwgMTg1LCAyMjksIDAuOCksICMzMzUzOWQpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmFib3V0LXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8qIG1hcmdpbi10b3A6IDUlOyAqL1xyXG59XHJcblxyXG4uYWJvdXQtdXMtcGFnZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4uaG9tZS1pbWcge1xyXG4gICAgd2lkdGg6IDUwJVxyXG59XHJcblxyXG4uYXJyb3ctaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5ob21lIHtcclxuICAgIHdpZHRoOiAyJTtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICB3aWR0aDogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG5cclxuLyogc3RhcnQ9PiAqL1xyXG5cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHggIWltcG9ydGFudDtcclxuICAgIC8qIGNvbG9yOiAjRkZGOyAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG59XHJcbiNuYXZiYXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbn1cclxuLm5hdi1pdGVtIGEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmt7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi5mYXEtYmFubmVye1xyXG4gICAgcGFkZGluZzo1JTtcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQwLCAxODUsIDIyOSwgMC44KSwgIzMzNTM5ZCk7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uZmFxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiAvKiAuZmFxLXBhZ2UtaGVhZGVye1xyXG4gICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiB9ICovXHJcbi5ob21lLWltZ3tcclxuICAgIHdpZHRoOjUwJVxyXG59XHJcbi5hcnJvdy1pbWd7XHJcbiAgICB3aWR0aDozMCVcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mYXEtcGFnZS1icmVhZGNydW1iIGF7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5ob21le1xyXG4gICAgd2lkdGg6MiVcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93e1xyXG4gICAgd2lkdGg6MiVcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLnNlcnZpY2UtbGluayAud2hpdGUtdGV4dC0ye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1JTtcclxufVxyXG4gLyogLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmt7XHJcbiB3aWR0aDoxNSU7IFxyXG59ICAqL1xyXG4ucm93LXdpdGhvdXQtZ3V0dGVye1xyXG4gICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5mYXEtZGl2IHtcclxuICAgICAvKiBtYXJnaW4tdG9wOiAxMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4ubmVlZC1hc3NpLWltZ3tcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICAgIHBhZGRpbmc6MTAlO1xyXG59XHJcbi5uZWVkLWFzc2ktdGV4dHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgIGNvbG9yOiAjMjk1ZWExO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLm5lZWQtYXNzaXN0YW5jZSAuY2FyZC1ib2R5e1xyXG4gICAgIHBhZGRpbmc6MTBweCAwcHg7XHJcbn1cclxuLm5lZWQtYXNzaXN0YW5jZSAuY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxODMyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm5lZWQtYXNzaXN0YW5jZXtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG4ubmVlZC1hc3Npc3RhbmNlIC5jYXJkLWhlYWRlciBoNXtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmZhcS1wYWdlLWJyZWFkY3J1bWIge1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYSAge1xyXG4gICAgICAgICAgICAgZmxvYXQ6bm9uZVxyXG4gICAgIH1cclxuICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgIH1cclxuICAgICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLm5lZWQtYXNzaS10ZXh0IHtcclxuICAgICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIC5uZWVkLWFzc2ktaW1ne1xyXG4gICAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46MHB4IGF1dG9cclxuICAgICB9XHJcbiAgICAgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYSB7XHJcbiAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgIH1cclxuICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgfVxyXG4gICAgIC5mYXEtcGFnZS1icmVhZGNydW1ie1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcclxuICAgICB9XHJcbiAgICAgXHJcbn1cclxuLmxpbWl0VGV4dEhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50YWJjb250ZW50e1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgcGFkZGluZzogMiUgIWltcG9ydGFudDtcclxufVxyXG4uc3RpY2t5TmF2e1xyXG4gICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgIHRvcDogMTIlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICB6LWluZGV4OiAxMTtcclxuICAgaGVpZ2h0OmF1dG87XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdGlja3lEaXZ7XHJcbiAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgIHRvcDogMTkuNSU7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIHotaW5kZXg6IDEwO1xyXG4gICBoZWlnaHQ6YXV0bztcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI25hdmJhcntcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jbmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA5N2RiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDA5N2RiO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk1YjVjO1xyXG59XHJcbi5zaGFkZXtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQxMTc2KSk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMjBweDtcclxufVxyXG4uc2hhZGV7XHJcbiAgICBoZWlnaHQ6NXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQxMTc2KSk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA2MHB4O1xyXG59XHJcbi5yZWxhdGl2ZS1yb3d7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlYWQtbW9yZS1idG57XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBtYXJnaW46MiUgYXV0bztcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5rIC5hY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwOTdkYiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMDk3ZGIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbGxhcHNlOm5vdCguc2hvdykge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4vKiA8PWVuZCAqL1xyXG5cclxuXHJcblxyXG4uY29udGFpbmVyLWJveHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJveCBkaXYgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxufVxyXG4uY29udGFpbmVyLWJveCBkaXY6aG92ZXIgaW1ne1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5nYWxsZXJ5e1xyXG4gICAgcGFkZGluZzogMjVweCA4JSAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gIWltcG9ydGFudDsgIFxyXG59XHJcbi5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIge1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi53aGl0ZS10ZXh0LTJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW1nLCBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xyXG59XHJcbi5nYWxsZXJ5LWJveHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMzBweCAgYXV0byAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uZ2FsbGVyeS1pdGVte1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDQwcHg7XHJcbn1cclxuLmdhbGxlcnktaXRlbSBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmsgLndoaXRlLXRleHQtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0NTBweCkgYW5kIChtYXgtd2lkdGg6MTEwMHB4KXtcclxuICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZVtfbmdjb250ZW50LWtvbC1jMl0ge1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvd3tcclxuICAgICAgICB3aWR0aDogNCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ1MHB4KSBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgICAgIHdpZHRoOiA2JTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 95201:
/*!***************************************************!*\
  !*** ./src/app/img-gallery/img-gallery.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgGalleryModule": () => (/* binding */ ImgGalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _img_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-gallery-routing.module */ 95118);
/* harmony import */ var _img_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-gallery.component */ 77597);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class ImgGalleryModule {
}
ImgGalleryModule.ɵfac = function ImgGalleryModule_Factory(t) { return new (t || ImgGalleryModule)(); };
ImgGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ImgGalleryModule });
ImgGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _img_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImgGalleryRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_7__.TabViewModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ImgGalleryModule, { declarations: [_img_gallery_component__WEBPACK_IMPORTED_MODULE_1__.ImgGalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _img_gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImgGalleryRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_7__.TabViewModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_img-gallery_img-gallery_module_ts.js.map