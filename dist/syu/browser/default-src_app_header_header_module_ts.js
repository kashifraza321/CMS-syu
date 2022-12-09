"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["default-src_app_header_header_module_ts"],{

/***/ 21174:
/*!*************************************************!*\
  !*** ./src/app/header/header-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderRoutingModule": () => (/* binding */ HeaderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [];
class HeaderRoutingModule {
}
HeaderRoutingModule.ɵfac = function HeaderRoutingModule_Factory(t) { return new (t || HeaderRoutingModule)(); };
HeaderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderRoutingModule });
HeaderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 93482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = ["stickyMenu"];
const _c1 = ["stickyMenu1"];
function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("stickytopmenuLogo", ctx_r1.stickytopmenuLogo);
} }
const _c2 = function (a0) { return { "customHeight": a0 }; };
const _c3 = function (a0) { return { "collapse": a0, "navbar-collapse": true }; };
class HeaderComponent {
    constructor() {
        this.stickytopmenu = false;
        this.stickytopmenuLogo = false;
        this.customHeight = false;
        this.mtCustom = false;
        this.collapsed = true;
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.customHeight = !this.customHeight;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.elementPosition = this.menuElement.nativeElement.offsetTop;
        this.elementPosition1 = this.menuElement1.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.elementPosition) {
            this.stickytopmenu = true;
            this.stickytopmenuLogo = true;
            this.mtCustom = true;
            // #faq-tab .ui-tabview.ui-tabview-top > .ui-tabview-nav
        }
        if (windowScroll <= this.elementPosition) {
            this.stickytopmenu = false;
            this.stickytopmenuLogo = false;
            this.mtCustom = false;
        }
        if (windowScroll >= this.elementPosition1) {
            this.stickytopmenu = true;
            this.stickytopmenuLogo = true;
        }
        if (windowScroll <= this.elementPosition1) {
            this.stickytopmenu = false;
            this.stickytopmenuLogo = false;
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement1 = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 106, vars: 15, consts: [[1, "TopBar"], ["stickyMenu", ""], [1, "d-none", "d-sm-block", "nav2"], [3, "stickytopmenuLogo", 4, "ngIf"], ["href", "", "routerLink", "/home", 1, "white-text-2"], ["href", "", "routerLink", "/about-us", 1, ""], ["href", "", "routerLink", "/services", 1, ""], ["href", "", "routerLink", "/news", 1, ""], ["href", "", "routerLink", "/blog", 1, ""], ["href", "", "routerLink", "/course", 1, ""], ["href", "", "routerLink", "/exams", 1, "white-text-2"], ["href", "", "routerLink", "/contact-us", 1, "white-text-2"], [1, "login"], ["src", "../../assets/img/Home Page/1. Header/Call/Call.png", "alt", "", "width", "20"], [1, "dl-btn"], [1, "logo", "d-none", "d-sm-block"], ["href", "", "routerLink", "/home", 1, ""], ["src", "../../assets/img/Home Page/1. Header/SYU Logo/SYU-Logo.png", "width", "60%", "alt", "pp"], [1, "d-none", "d-sm-block"], ["href", "", "routerLink", "/about-us", 1, "white-text-2"], ["href", "", "routerLink", "/services", 1, "white-text-2"], ["href", "", "routerLink", "/news", 1, "white-text-2"], ["href", "", "routerLink", "/blog", 1, "white-text-2"], ["href", "", "routerLink", "/course", 1, "white-text-2"], [1, "navbar", "w-100", "d-block", "d-sm-none", 3, "ngClass"], ["stickyMenu1", ""], [1, ""], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#myNavbar", 1, "navbar-toggle", 3, "click"], [1, "icon-bar"], ["href", "", "routerLink", "/home", 1, "navbar-brand"], ["src", "../../assets/img/Home Page/1. Header/SYU Logo/SYU-Logo.png", "alt", "pp"], ["id", "myNavbar", 1, "", 3, "ngClass"], [1, "nav", "navbar-nav", "mobile-nav"], [1, "active"], ["href", "", "routerLink", "/home", 1, "nav-link"], ["href", "", "routerLink", "/about-us", 1, "nav-link"], ["href", "", "routerLink", "/services", 1, "nav-link"], ["href", "", "routerLink", "/news", 1, "nav-link"], ["href", "", "routerLink", "/blog", 1, "nav-link"], ["href", "", "routerLink", "/course", 1, "nav-link"], ["href", "", "routerLink", "/exams", 1, "nav-link"], ["href", "", "routerLink", "/contact-us", 1, "nav-link"], ["src", "../../assets/img/Home Page/1. Header/SYU Logo/SYU-Logo.png", "width", "120", "alt", "pp"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1)(2, "nav", 2)(3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 12)(30, "ul")(31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 180030700033 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li")(37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 15)(40, "ul")(41, "li")(42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nav", 18)(45, "ul")(46, "li")(47, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nav", 24, 25)(72, "div", 26)(73, "div", 27)(74, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_74_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 29)(76, "span", 29)(77, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32)(81, "ul", 33)(82, "li", 34)(83, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li")(89, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li")(92, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li")(95, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li")(101, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Exams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li")(104, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("stickytopmenu", ctx.stickytopmenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stickytopmenuLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mtCustom", ctx.mtCustom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mtCustom", ctx.mtCustom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("stickytopmenu", ctx.stickytopmenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.customHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.collapsed));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".navbar-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-right: 15px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]    + .icon-bar[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n  border: 2px rgb(118, 118, 118) outset;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -25px;\n}\n\n.mt-custom[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUNDO0VBQ0ksdUJBQUE7QUFFTDs7QUFBQztFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR0w7O0FBREM7RUFDSSxlQUFBO0FBSUw7O0FBRkM7RUFDSSxjQUFBO0FBS0w7O0FBSEM7RUFDSyxvQkFBQTtBQU1OOztBQUpDO0VBQ0ksWUFBQTtBQU9MOztBQUpDO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFPTDs7QUFMQztFQUNJLG9DQUFBO0VBQ0EscUNBQUE7QUFRTDs7QUFOQztFQUNLLGdCQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFQQztFQUNLLGNBQUE7QUFVTiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBwYWRkaW5nOiA5cHggMTBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuIH1cclxuIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiB9XHJcbiAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgIGhlaWdodDogMnB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuIH1cclxuIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhcisuaWNvbi1iYXIge1xyXG4gICAgIG1hcmdpbi10b3A6IDRweDtcclxuIH1cclxuIC5uYXZiYXItYnJhbmQ+aW1nIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuIC5tb2JpbGUtbmF2e1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuIH1cclxuIC5uYXZiYXIge1xyXG4gICAgIHotaW5kZXg6IDk5OTtcclxuIH1cclxuIFxyXG4gLm5hdmJhciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuIH1cclxuIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XHJcbiAgICAgYm9yZGVyOiAycHggcmdiKDExOCwgMTE4LCAxMTgpIG91dHNldDtcclxuIH1cclxuIC5uYXZiYXItY29sbGFwc2V7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6LTI1cHhcclxuIH1cclxuIC5tdC1jdXN0b217XHJcbiAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 60677:
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-routing.module */ 21174);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 93482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_header_header_module_ts.js.map