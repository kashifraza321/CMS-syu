"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_privacy_privacy_module_ts"],{

/***/ 77947:
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyRoutingModule": () => (/* binding */ PrivacyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.component */ 31649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _privacy_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyComponent
    }
];
class PrivacyRoutingModule {
}
PrivacyRoutingModule.ɵfac = function PrivacyRoutingModule_Factory(t) { return new (t || PrivacyRoutingModule)(); };
PrivacyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PrivacyRoutingModule });
PrivacyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrivacyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 31649:
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyComponent": () => (/* binding */ PrivacyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/accordion */ 79854);




class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 47, vars: 2, consts: [[1, "privacy"], [1, "privacy-banner"], [1, "col-lg-12"], [1, "privacy-page-header", "text-center"], [1, "white-text-2"], [1, "privacy-page-breadcrumb", "text-center"], ["href", "", "routerLink", "/home", 1, "home"], ["src", "../../assets/img/services_page/Our_Services/Home.png", "alt", "", 1, "home-img"], ["href", "", 1, "arrow"], ["src", "../../assets/img/services_page/Our_Services/Arrow.png", "alt", "", 1, "arrow-img"], ["href", "", "routerLink", "/home", 1, "service-link"], [1, "col-lg-12", "col-12"], [1, "below-banner"], [1, "row", "row-without-gutter"], ["id", "disclaimer-collapse", 3, "multiple"], ["header", "Privacy Policy for Select Your University", 1, "accordionTab", 3, "selected"], ["header", "Log Files", 1, "accordionTab"], ["header", "Privacy Policies", 1, "accordionTab"], ["header", "Third Party Privacy Policies", 1, "accordionTab"], ["header", "Children's Information", 1, "accordionTab"], ["header", "Online Privacy Policy Only", 1, "accordionTab"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "p-accordion", 14)(19, "p")(20, "p-accordionTab", 15)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "At Select Your University, accessible from https://www.selectyouruniversity.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Select Your University and how we use it.If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at selectyouruniversity@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p-accordionTab", 16)(24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select Your University follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p-accordionTab", 17)(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "You may consult this list to find the Privacy Policy for each of the advertising partners of Select Your University.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Select Your University, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Note that Select Your University has no access to or control over these cookies that are used by third-party advertisers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p-accordionTab", 18)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Select Your University's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p-accordionTab", 19)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Select Your University does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p-accordionTab", 20)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Consent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionTab], styles: [".privacy-banner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n  padding: 6%;\n}\n\n.privacy[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.privacy-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.privacy-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.privacy-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 5%;\n}\n\n.privacy-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.privacy-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: 2px #767676 outset;\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-right: 15px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.below-banner[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 1%;\n}\n\n@media only screen and (max-width: 767px) {\n  .privacy-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n    margin: 0px 1%;\n    padding: 1%;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .privacy-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .privacy-banner[_ngcontent-%COMP%] {\n    margin-left: 8px !important;\n    margin-right: 8px !important;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .privacy-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .privacy-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .home-img[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n  .arrow-img[_ngcontent-%COMP%] {\n    width: 20% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1REFBQTtFQUNBLDBCQUFBO0VBQ0ksNkVBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFDTDs7QUFDQTtFQUNLLHlCQUFBO0VBQ0Esb0JBQUE7QUFFTDs7QUFFQTtFQUNLLFVBQUE7QUFDTDs7QUFDQTtFQUNLLFVBQUE7QUFFTDs7QUFBQTtFQUNLLGFBQUE7RUFDQSx1QkFBQTtBQUdMOztBQURBO0VBQ0sscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBSUw7O0FBRkE7RUFDSyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0w7O0FBSEE7RUFDSyxTQUFBO0FBTUw7O0FBSkE7RUFDSyxTQUFBO0FBT0w7O0FBSkE7RUFDSywyQkFBQTtFQUNBLDJCQUFBO0FBT0w7O0FBTEE7RUFDSyx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBUUw7O0FBTkM7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVNMOztBQVBDO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBVUw7O0FBUkM7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVdMOztBQVRDO0VBQ0k7SUFDSyxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtFQVlSO0VBVkc7SUFDSyxnQkFBQTtFQVlSO0VBVkc7SUFDSyxVQUFBO0VBWVI7RUFWSTtJQUNJLFdBQUE7RUFZUjtBQUNGOztBQVZDO0VBQ0k7SUFDSywyQkFBQTtJQUNBLDRCQUFBO0VBWVI7RUFWRztJQUNLLGdCQUFBO0VBWVI7RUFWRztJQUNLLFVBQUE7RUFZUjtFQVZJO0lBQ0ksV0FBQTtFQVlSO0VBVkk7SUFDSyxxQkFBQTtFQVlUO0VBVkk7SUFDSyxxQkFBQTtFQVlUO0FBQ0YiLCJmaWxlIjoicHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5LWJhbm5lcntcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDAsIDE4NSwgMjI5LCAwLjgpLCAjMzM1MzlkKTsgXHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICBwYWRkaW5nOiA2JTtcclxufVxyXG4ucHJpdmFjeXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgIFxyXG59XHJcblxyXG4uaG9tZS1pbWd7XHJcbiAgICAgd2lkdGg6NTAlXHJcbn1cclxuLmFycm93LWltZ3tcclxuICAgICB3aWR0aDozMCVcclxufVxyXG4ucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWIgYXtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBtYXJnaW46MDtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnByaXZhY3ktcGFnZS1icmVhZGNydW1iIGEuc2VydmljZS1saW5rIC53aGl0ZS10ZXh0LTJ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLnByaXZhY3ktcGFnZS1icmVhZGNydW1iIGEuaG9tZXtcclxuICAgICB3aWR0aDoyJVxyXG59XHJcbi5wcml2YWN5LXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93e1xyXG4gICAgIHdpZHRoOjIlXHJcbn1cclxuXHJcbi5yb3ctd2l0aG91dC1ndXR0ZXJ7XHJcbiAgICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50O1xyXG4gICAgIC0tYnMtZ3V0dGVyLXk6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgICBib3JkZXI6IDJweCAjNzY3Njc2IG91dHNldDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIHBhZGRpbmc6IDlweCAxMHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gfVxyXG4gLm5hdmJhciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuIH1cclxuIC5uYXZiYXItYnJhbmQge1xyXG4gICAgIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gfVxyXG4gLmJlbG93LWJhbm5lcntcclxuICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAgLnByaXZhY3ktYmFubmVye1xyXG4gICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgICBtYXJnaW46MHB4IDElO1xyXG4gICAgICAgICAgcGFkZGluZzoxJTtcclxuICAgICB9XHJcbiAgICAgLnByaXZhY3ktcGFnZS1icmVhZGNydW1ie1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgIH1cclxuICAgICAucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWIgYS5ob21lLCAucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcml2YWN5LXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgLnByaXZhY3ktYmFubmVye1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLnByaXZhY3ktcGFnZS1icmVhZGNydW1ie1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgIH1cclxuICAgICAucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWIgYS5ob21lLCAucHJpdmFjeS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcml2YWN5LXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5ob21lLWltZ3tcclxuICAgICAgICAgICB3aWR0aDozNSUgIWltcG9ydGFudFxyXG4gICAgICB9XHJcbiAgICAgIC5hcnJvdy1pbWd7XHJcbiAgICAgICAgICAgd2lkdGg6MjAlICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 25489:
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyModule": () => (/* binding */ PrivacyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 77947);
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.component */ 31649);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class PrivacyModule {
}
PrivacyModule.ɵfac = function PrivacyModule_Factory(t) { return new (t || PrivacyModule)(); };
PrivacyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PrivacyModule });
PrivacyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PrivacyModule, { declarations: [_privacy_component__WEBPACK_IMPORTED_MODULE_1__.PrivacyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_privacy_privacy_module_ts.js.map