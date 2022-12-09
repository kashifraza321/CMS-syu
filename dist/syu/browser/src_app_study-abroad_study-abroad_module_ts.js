"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_study-abroad_study-abroad_module_ts"],{

/***/ 51928:
/*!*************************************************************!*\
  !*** ./src/app/study-abroad/study-abroad-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyAbroadRoutingModule": () => (/* binding */ StudyAbroadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _study_abroad_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-abroad.component */ 70595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _study_abroad_component__WEBPACK_IMPORTED_MODULE_0__.StudyAbroadComponent
    }
];
class StudyAbroadRoutingModule {
}
StudyAbroadRoutingModule.ɵfac = function StudyAbroadRoutingModule_Factory(t) { return new (t || StudyAbroadRoutingModule)(); };
StudyAbroadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudyAbroadRoutingModule });
StudyAbroadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudyAbroadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 70595:
/*!********************************************************!*\
  !*** ./src/app/study-abroad/study-abroad.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyAbroadComponent": () => (/* binding */ StudyAbroadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);




function StudyAbroadComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "div", 97)(3, "div", 104)(4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 106)(7, "div", 97)(8, "div", 107)(9, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 107)(12, "p", 108)(13, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Check 218 Colleges >");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 97)(17, "div", 2)(18, "div", 7)(19, "div", 110)(20, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "218 Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Colleges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 112)(25, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "1129671 INR/Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Average Study Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 113)(30, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "140872445 INR/Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Average Living Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 97)(36, "div", 2)(37, "h6", 114)(38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Coursewise List");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 115)(41, "div", 116)(42, "div", 117)(43, "h2", 118)(44, "button", 119)(45, "div", 97)(46, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "MBBS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "74 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 116)(53, "div", 124)(54, "h2", 118)(55, "button", 125)(56, "div", 97)(57, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "MBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "74 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 116)(64, "div", 126)(65, "h2", 118)(66, "button", 127)(67, "div", 97)(68, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "M.Tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "74 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 116)(75, "div", 128)(76, "h2", 118)(77, "button", 129)(78, "div", 97)(79, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "74 Collages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 97)(86, "div", 2)(87, "div", 130)(88, "h6", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Get Counselling");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Study in ", image_r2.text, "");
} }
function StudyAbroadComponent_div_433_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 132)(1, "div", 133)(2, "div", 97)(3, "div", 2)(4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 135)(7, "div", 2)(8, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Top 20 Medical Colleges in Madhya Pradesh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 135)(11, "div", 2)(12, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 138)(15, "div", 2)(16, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Read-more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](image_r4.text);
} }
const _c0 = function () { return ["owl-theme", "sliding", "slider2"]; };
const _c1 = function () { return ["owl-theme", "row", "sliding"]; };
const _c2 = function (a0) { return { "limitTextHeight": a0 }; };
class StudyAbroadComponent {
    constructor() {
        this.isReadMore = true;
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
                    items: 2,
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
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
    ngOnInit() {
    }
}
StudyAbroadComponent.ɵfac = function StudyAbroadComponent_Factory(t) { return new (t || StudyAbroadComponent)(); };
StudyAbroadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudyAbroadComponent, selectors: [["app-study-abroad"]], decls: 465, vars: 14, consts: [[1, "study-abroad"], [1, "study-abroad-banner"], [1, "col-lg-12"], [1, "study-abroad-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "title"], [1, "title-text", "white-text-2"], [1, "row", "row-without-gutter"], ["action", "", 1, "exam-page-form", "d-block", "mx-auto"], [1, "flex-div1"], ["name", "filter", 1, "select-filter"], ["value", "location"], ["value", "Fees"], ["type", "text", "placeholder", "Enter Course, College or Exam", "name", "search2"], ["type", "submit"], [1, "fa", "fa-search"], [1, "flex-div"], [1, "d-inline", "white-text-2", "cust-padding", "mb-0"], [1, "pill-div-course"], [1, "btn", "btn-orange", "white-text-2"], ["src", "../../assets/img/Study_Abroad_Icons/1.Header/Raed More.png", "width", "20", "alt", "", 1, "pl-3"], ["src", "../../assets/img/Study_Abroad_Icons/1.Header/Apply-now.png", "width", "20", "alt", "", 1, "pl-3"], [1, "col-lg-12", "below-banner"], [1, "col-lg-4", "col-sm-4", "col-12", "right-white-border", "p-4"], [1, "text-orange", "text-center"], [1, "py-3", "text-center"], [1, "text-justify"], [1, "text-blue", "text-center"], [1, "col-lg-4", "col-sm-4", "col-12", "p-4"], [1, "light-blue-text", "text-center"], [1, "col-lg-12", "light-gray-bg"], [1, "row", "row-without-gutter", "bg-white", "my-2", "pb-4"], [1, "bg-white", "p-2"], [1, "row", "row-without-gutter", "text-center"], [1, "light-blue-text"], ["src", "../../assets/img/map.webp", "alt", "", 1, "map-img"], [1, "img-holder"], ["src", "../../assets/img/Study_Abroad_Icons/2.We_Match_Student/1.png", "alt", ""], ["src", "../../assets/img/Study_Abroad_Icons/2.We_Match_Student/2.png", "alt", ""], ["src", "../../assets/img/Study_Abroad_Icons/2.We_Match_Student/3.png", "alt", ""], ["src", "../../assets/img/Study_Abroad_Icons/2.We_Match_Student/5.png", "alt", ""], ["src", "../../assets/img/Study_Abroad_Icons/2.We_Match_Student/4.png", "alt", ""], [1, "row", "row-without-gutter", "bg-white", "my-3"], [1, "col-lg-12", "bg-white", "pb-2"], [1, "col-lg-12", "text-center"], [1, "light-blue-text", "py-4"], ["src", "../../assets/img/Study_Abroad_Icons/3.How_SYU/Untitled-1.png", "alt", "", 1, "syu-help-img"], [1, "col-lg-12", "pt-4"], [1, "col-lg-4", "col-sm-4", "col-12", "text-center"], [1, "w-50", "d-block", "mx-auto"], [1, "row", "row-without-gutter", "bg-white", "my-2"], [1, "mt-4", "study-destination-div"], [1, "container"], [1, "mb-4", "light-blue-text", "text-center"], ["id", "slider2", 3, "options", "items", "carouselClasses"], ["class", "item study-div", 4, "ngFor", "ngForOf"], [1, "item"], [1, ""], [1, "text-center"], [1, "btn", "btn-study-show-more"], [1, "light-blue-text", "text-center", "py-3"], [1, "row", "course-inner-div", "row-without-gutter"], [1, "col-lg-2", "col-sm-4", "col-6"], [1, "part"], ["src", "../../assets/img/Home Page/3. Domain or Course/Science.png"], ["href", "#"], ["src", "../../assets/img/Home Page/3. Domain or Course/Arts.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Veterinary.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Management.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Computer.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Engineering.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Agriculture.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Animation.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Commerce.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Dental.png"], ["src", "../../assets/img/Home Page/3. Domain or Course/Law.png"], [1, "row-without-gutter", "row"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "card", "contact-card"], [1, "row", "m-0"], [1, "col-lg-12", "text-center", "card-header", "p-0", "cust-border"], [1, "col-lg-2", "col-sm-2", "col-2"], ["src", "../../assets/img/Study_Abroad_Icons/7.Study_Abroad_Exam/Logo.png", "alt", "", 1, "p-1", "logo-img"], [1, "col-lg-10", "col-sm-10", "col-10", "text-center", "pt-2"], [1, "white-text-2", "mt-0", "bold", "mb-0"], [1, "mb-0", "white-text-2"], [1, "row", "p-3"], [1, "card-footer", "cust-border-2"], [1, "row", "row-without-gutter", "mt-0"], [1, "col-lg-6", "col-sm-6", "col-6", "text-center"], [1, "btn", "btn-blue", "w-100", "white-text-2"], [1, "col-lg-6", "col-sm-6", "col-6", "text-center", "bg-white", "border-rad"], [1, "btn", "w-100"], [1, "col-lg-6", "col-sm-6", "col-6", "bg-white", "border-rad"], [1, "btn"], [3, "options", "items", "carouselClasses"], ["class", "item blog-inner-div", 4, "ngFor", "ngForOf"], [1, "row"], [1, "btn", "btn-blog-show-more", "text-center"], [1, "text", "p-4", 3, "ngClass"], [1, "row", "text-center", "p-relative", "row-without-gutter"], ["type", "button", 1, "read-more-btn", "btn", 3, "click"], [1, "item", "study-div"], [1, "border", "mx-3"], [1, "col-lg-5", "col-md-12", "col-6"], [1, "pt-3", "mx-auto", 2, "width", "40%", 3, "src"], [1, "col-lg-7", "col-md-12", "pt-2", "col-6"], [1, "col-lg-12", "col-md-12"], [1, "mb-0", "text-right", "pr-2"], ["href", "#", 1, "f-10"], [1, "col-lg-4", "border-right", "pl-3", "col-4", "pl-xs-2"], [1, "mb-0", "f-10", "text-left"], [1, "col-lg-4", "pl-3", "border-right", "col-4", "pl-xs-2"], [1, "col-lg-4", "pl-3", "col-4", "pl-xs-2"], [1, "text-left", "pl-3"], ["id", "accordionExample2", 1, "accordion", "px-2"], [1, "card"], ["id", "headingOne21", 1, "card-header", "w-100"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne21", "aria-expanded", "true", "aria-controls", "collapseOne21", 1, "btn", "btn-block", "text-left", "w-100", "p-xs-0"], [1, "col-lg-4", "text-center", "d-inline", "black-text", "col-4"], [1, "col-lg-4", "text-center", "d-inline", "col-7"], [1, "col-lg-4", "col-1"], [1, "float-right", "fa", "fa-angle-right", "rotate-icon"], ["id", "headingTwo22", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne22", "aria-expanded", "false", "aria-controls", "collapseOne22", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], ["id", "headingThree23", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseThree23", "aria-expanded", "false", "aria-controls", "collapseThree23", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], ["id", "headingFour24", 1, "card-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseFour24", "aria-expanded", "false", "aria-controls", "collapseFour24", 1, "btn", "btn-block", "text-left", "collapsed", "w-100", "p-xs-0"], [1, "text-center", "light-bg-blue"], [1, "white-text", "py-2", "mb-0"], [1, "item", "blog-inner-div"], [1, "border-black", "mr-3"], [1, "slide-image", 2, "width", "100%", 3, "src"], [1, "row", "pl-xs-2"], [1, "light-blue-text", "pt-3", "pl-2"], [1, "text-left", "f-11", "pl-2"], [1, "row", "mb-2", "pl-2", "pl-xs-2"], [1, "light-bg-blue", "white-text", "p-1"]], template: function StudyAbroadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Study Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "div", 7)(11, "form", 8)(12, "div", 9)(13, "select", 10)(14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 2)(26, "div", 7)(27, "div", 16)(28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Top Countries:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "America");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 2)(45, "div", 7)(46, "div", 16)(47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 22)(54, "div", 7)(55, "div", 23)(56, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "700+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Global University Tie Ups");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Our students aren\u2019t just pursuing their higher education, but their dreams and ambitions in eminent universities across the globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 23)(63, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "60+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Offices across the Globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "We\u2019re growing, we\u2019re expanding and we\u2019re doing that fast! Join the fastest growing EdTech brand in South and South-East Asia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 28)(70, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "10+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Offices across the Globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "With over two decades of industry expertise, we know what\u2019s best for you and that makes us really good at what we do!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 30)(77, "div", 31)(78, "div", 32)(79, "div", 33)(80, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "We Match Students With");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Universities All Over The World");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Over 400 universities in 30 countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 7)(89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "img", 37)(91, "img", 38)(92, "img", 39)(93, "img", 40)(94, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 42)(96, "div", 43)(97, "div", 44)(98, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "How SYU Can Help You?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 47)(103, "div", 7)(104, "div", 48)(105, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Find Your Best Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "See programs that best match your eligibility and aspirations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 48)(110, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Application guidance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "We'll get you to the right place to start your application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 48)(115, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Visa & travel advice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Get help after application, all the way to your first day at university");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 44)(120, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Talk to Expert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 50)(123, "div", 51)(124, "div", 52)(125, "h2", 53)(126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Study Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "owl-carousel", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, StudyAbroadComponent_div_129_Template, 90, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 56)(131, "div", 57)(132, "div", 58)(133, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Show More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 50)(136, "div", 57)(137, "div", 52)(138, "h2", 60)(139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Choose a Domain or Cource");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 2)(142, "div", 61)(143, "div", 62)(144, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "h3")(147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "h5")(152, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 62)(155, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "h3")(158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "h5")(163, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 62)(166, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "h3")(169, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Veterinary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "h5")(174, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 62)(177, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "h3")(180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "h5")(185, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 62)(188, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "h3")(191, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "h5")(196, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 62)(199, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "h3")(202, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "h5")(207, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 62)(210, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "h3")(213, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Agriculture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "h5")(218, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div", 62)(221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](222, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h3")(224, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "h5")(229, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 62)(232, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "h3")(235, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "h5")(240, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div", 62)(243, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "h3")(246, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Dental");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "h5")(251, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "div", 62)(254, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "h3")(257, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "3945 Colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "h5")(262, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "View Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 62)(265, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "br")(267, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "h3")(269, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 50)(274, "h2", 60)(275, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Study Abroad Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 2)(280, "div", 76)(281, "div", 77)(282, "div", 78)(283, "div", 79)(284, "div", 80)(285, "div", 7)(286, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 83)(289, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "div", 86)(294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "div", 79)(297, "div", 87)(298, "div", 88)(299, "div", 89)(300, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 91)(303, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 77)(306, "div", 78)(307, "div", 79)(308, "div", 80)(309, "div", 7)(310, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "div", 83)(313, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 86)(318, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "div", 79)(321, "div", 87)(322, "div", 88)(323, "div", 89)(324, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div", 91)(327, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "div", 77)(330, "div", 78)(331, "div", 79)(332, "div", 80)(333, "div", 7)(334, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](335, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "div", 83)(337, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "div", 86)(342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "div", 79)(345, "div", 87)(346, "div", 88)(347, "div", 89)(348, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "div", 91)(351, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 77)(354, "div", 78)(355, "div", 79)(356, "div", 80)(357, "div", 7)(358, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 83)(361, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](362, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "div", 86)(366, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "div", 79)(369, "div", 87)(370, "div", 88)(371, "div", 89)(372, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 93)(375, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](376, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "div", 77)(378, "div", 78)(379, "div", 79)(380, "div", 80)(381, "div", 7)(382, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "div", 83)(385, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "div", 86)(390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "div", 79)(393, "div", 87)(394, "div", 88)(395, "div", 89)(396, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "div", 91)(399, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "div", 77)(402, "div", 78)(403, "div", 79)(404, "div", 80)(405, "div", 7)(406, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](407, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "div", 83)(409, "h5", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, "JEE Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](412, "Written Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "div", 86)(414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, "Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 79)(417, "div", 87)(418, "div", 88)(419, "div", 89)(420, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 91)(423, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "div", 50)(426, "div", 57)(427, "div", 52)(428, "h2", 60)(429, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Study Abroad Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "div", 7)(432, "owl-carousel", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](433, StudyAbroadComponent_div_433_Template, 18, 2, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "div", 56)(435, "div", 97)(436, "div", 44)(437, "button", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "Discover More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "div", 50)(440, "div", 33)(441, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "Study Abroad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "h3", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](444, "Find Program, Colleges, Costs, Scholarship, Visa Details For International Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "div", 7)(446, "div", 99)(447, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "IIM Bangalore is one of the most prestigious institutions for pursuing Masters in Business Administration. It lasts over six semesters spread over two years. IIMB has a remarkable faculty of 140 plus highly qualified researchers and academicians who are dedicated towards providing a fruitful learning experience for the students. The main courses provided by IIMB are Phd, MBA, PGPPM, MBA ( Business Analytics).");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](450, " IIM Bangalore shortlists candidates on the basis of their CAT scores. The main criteria is divided into 4 parts- 50% weightage is given to academics, 40% weightage is given to CAT scores, 8% to work experience and 2% to gender diversity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](452, " The selected candidates appear for Written Ability Test and Personal Interview. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](454, " A total of 483 students joined the batch of 2021-23 of two year full time program of Masters in Business Administration. A total of 45 students joined Masters of Business Administration in Business Analytics. 347 out of 483 students are from engineering background (71.83 % of total students), 32.56% of the engineers are pass outs from IIT and 31.12% of engi- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](456, " IIM Bangalore shortlists candidates on the basis of their CAT scores. The main criteria is divided into 4 parts- 50% weightage is given to academics, 40% weightage is given to CAT scores, 8% to work experience and 2% to gender diver- sity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](458, " The selected candidates appear for Written Ability Test and Personal Interview. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](460, " A total of 483 students joined the batch of 2021-23 of two year full time program of Masters in Business Administration. A total of 45 students joined Masters of Business Administration in Business Analytics. 347 out of 483 students are from engineering background (71.83 % of total students), 32.56% of the engineers are pass outs from IIT and 31.12% of engi- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](461, "div", 100)(462, "button", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudyAbroadComponent_Template_button_click_462_listener() { return ctx.showText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](463);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](464, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOptions2)("items", ctx.images2)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.images)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c2, ctx.isReadMore));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isReadMore ? "See More" : "See Less", " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlCarousel], styles: [".study-abroad-banner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('Image_banner.png');\n  background-repeat: no-repeat;\n}\n\n.study-abroad[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.light-gray-bg[_ngcontent-%COMP%] {\n  background-color: #e1e1e1;\n  padding: 2%;\n}\n\n.study-abroad-header[_ngcontent-%COMP%] {\n  padding: 5% 0%;\n}\n\n.cust-border[_ngcontent-%COMP%] {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.cust-border-2[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 1px solid gray;\n  margin: 9%;\n}\n\n.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n  background-color: #2d57a7;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding: 0;\n  font-size: 14px;\n  border: 1px solid transparent;\n  float: left;\n  height: 4vh;\n  width: 96%;\n  background: #f1f1f1;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n  width: 4%;\n  padding: 5.5px;\n  background: #1c4dc3;\n  color: white;\n  font-size: 17px;\n  border: 1px solid transparent;\n  border-left: none;\n  cursor: pointer;\n  height: 4vh;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.pill-div-course[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid orange;\n  color: orange;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 22px;\n  font-size: 10px;\n  font-weight: 900;\n}\n\n.flex-div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.flex-div1[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.cust-padding[_ngcontent-%COMP%] {\n  padding-right: 1%;\n  padding-top: 5px !important;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.btn-orange[_ngcontent-%COMP%] {\n  background-color: #ff7500;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px 17px;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.below-banner[_ngcontent-%COMP%] {\n  padding: 1% 3%;\n}\n\n.right-white-border[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n}\n\n.orange-text[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #1b4a85;\n}\n\n.map-img[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0px auto;\n  padding-bottom: 2%;\n}\n\n.img-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15%;\n  margin-left: 2%;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.img-holder[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.study-div[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #a0a3a7 !important;\n}\n\n.syu-help-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.border-rad[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 15px;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flag-img[_ngcontent-%COMP%] {\n  width: 40% !important;\n  padding-left: 1%;\n}\n\n.btn-blog-show-more[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  transform: translate(20%, 520%);\n}\n\n.btn-study-show-more[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  transform: translate(10%, 600%);\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid gray;\n}\n\n.flex-div1[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\";\n}\n\n.select-filter[_ngcontent-%COMP%] {\n  height: 4vh;\n  padding: 0px 8%;\n  padding-left: 1%;\n  text-align: left;\n  border-right: none;\n  background-color: #142a76;\n  color: #fff;\n  font-size: 14px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.pl-2[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.text-orange[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n@media only screen and (max-width: 767px) {\n  .study-div[_ngcontent-%COMP%] {\n    margin: 0px !important;\n  }\n  .study-div[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n  .map-img[_ngcontent-%COMP%] {\n    padding-bottom: 5% !important;\n  }\n  .select-filter[_ngcontent-%COMP%] {\n    padding: 0% !important;\n  }\n  .flex-div[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .pill-div-course[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  form.exam-page-form[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  form.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 8%;\n    padding-left: 5px;\n    padding-top: 0px !important;\n    padding-right: 0px !important;\n    padding-bottom: 0px !important;\n    font-size: 14px !important;\n  }\n  .right-white-border[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #fff;\n  }\n  .study-div[_ngcontent-%COMP%] {\n    margin: 10px;\n    padding: 10px;\n  }\n  .pl-2[_ngcontent-%COMP%] {\n    padding-left: 0%;\n  }\n  .pl-xs-2[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .p-xs-0[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .blog-inner-div[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n    margin-right: 12px !important;\n    margin-left: 10px;\n  }\n  .read-more-btn[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  .img-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15% !important;\n    border-radius: 10px !important;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  form.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 10%;\n    padding: 0px;\n  }\n}\n\n.pr-2[_ngcontent-%COMP%] {\n  padding-right: 2%;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LWFicm9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLHVEQUFBO0VBQ0EsMEJBQUE7RUFDSSx5Q0FBQTtFQUNBLDRCQUFBO0FBQUw7O0FBRUE7RUFDSyx5QkFBQTtFQUNBLG9CQUFBO0FBQ0w7O0FBQ0E7RUFDSyx5QkFBQTtFQUNBLFdBQUE7QUFFTDs7QUFBQTtFQUNLLGNBQUE7QUFHTDs7QUFEQztFQUNLLDRCQUFBO0VBQ0EsNkJBQUE7QUFJTjs7QUFGQztFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7QUFLTDs7QUFIQztFQUNLLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBTU47O0FBSkM7O0VBRUkseUJBQUE7QUFPTDs7QUFMQztFQUNLLFdBQUE7QUFRTjs7QUFOQztFQUFvQixVQUFBO0FBVXJCOztBQVRDO0VBRVMsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFXVjs7QUFUQztFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBWUw7O0FBVkM7RUFDQSw2QkFBQTtFQUNDLHdCQUFBO0VBQ0QsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhRDs7QUFYQztFQUNLLGlCQUFBO0VBQ0wsYUFBQTtFQUNDLHVCQUFBO0FBY0Y7O0FBWkM7RUFDSSxpQkFBQTtFQUNELGFBQUE7RUFDQyx1QkFBQTtBQWVMOztBQWJDO0VBQ0ksaUJBQUE7RUFDQSwyQkFBQTtBQWdCTDs7QUFkQTtFQUNLLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpQkw7O0FBZkE7RUFDSyxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFrQkw7O0FBaEJDO0VBQ0kseUJBQUE7RUFDRCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNLLGdCQUFBO0FBb0JMOztBQWxCQTtFQUNLLGNBQUE7QUFxQkw7O0FBbkJBO0VBQ0ssNEJBQUE7QUFzQkw7O0FBcEJBO0VBQ0ssZ0JBQUE7QUF1Qkw7O0FBckJBO0VBQ0ssY0FBQTtBQXdCTDs7QUF0QkE7RUFDSyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXlCTDs7QUF2QkE7RUFDSyxVQUFBO0VBQ0QsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEwQko7O0FBeEJBO0VBQ0ssa0JBQUE7QUEyQkw7O0FBekJBO0VBQ0ssb0NBQUE7QUE0Qkw7O0FBMUJBO0VBQ0ssVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTZCTDs7QUEzQkE7RUFDSyxrQkFBQTtBQThCTDs7QUE1QkM7RUFDSyxnQ0FBQTtBQStCTjs7QUE3QkM7RUFDSSxXQUFBO0FBZ0NMOztBQTlCQztFQUNLLHFCQUFBO0VBQ0EsZ0JBQUE7QUFpQ047O0FBL0JBO0VBQ0ssc0JBQUE7RUFDQSwrQkFBQTtBQWtDTDs7QUFoQ0E7RUFDSyxzQkFBQTtFQUNBLCtCQUFBO0FBbUNMOztBQWpDQTtFQUNLLFlBQUE7RUFDQSxnQkFBQTtBQW9DTDs7QUFsQ0M7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBcUNMOztBQW5DQztFQUNJLGtDQUFBO0FBc0NMOztBQXBDQztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0QsK0JBQUE7QUF1Q0o7O0FBckNDO0VBQ0ssZ0JBQUE7QUF3Q047O0FBdENDO0VBQ0ksZ0JBQUE7QUF5Q0w7O0FBdkNDO0VBQ0s7SUFDSyxzQkFBQTtFQTBDVDtFQXhDRztJQUNLLDRCQUFBO0VBMENSO0VBeENHO0lBQ0ssNkJBQUE7RUEwQ1I7RUF4Q0k7SUFDSyxzQkFBQTtFQTBDVDtFQXhDRztJQUNLLGNBQUE7RUEwQ1I7RUF4Q0c7SUFDSyxxQkFBQTtFQTBDUjtFQXhDRztJQUNLLFVBQUE7RUEwQ1I7RUF4Q0k7SUFDSSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7SUFDQSwwQkFBQTtFQTBDUjtFQXhDSTtJQUNJLGtCQUFBO0lBQ0EsNkJBQUE7RUEwQ1I7RUF4Q0k7SUFDSyxZQUFBO0lBQ0EsYUFBQTtFQTBDVDtFQXhDSTtJQUNJLGdCQUFBO0VBMENSO0VBeENHO0lBQ0ssa0JBQUE7RUEwQ1I7RUF4Q0c7SUFDSyxZQUFBO0VBMENSO0VBeENHO0lBQ0ssNkJBQUE7SUFDQSxpQkFBQTtFQTBDUjtFQXhDSTtJQUNJLFVBQUE7RUEwQ1I7RUF4Q0k7SUFDSSxxQkFBQTtJQUNBLDhCQUFBO0VBMENSO0FBQ0Y7O0FBeENDO0VBQ0k7SUFDSyxVQUFBO0lBQ0EsWUFBQTtFQTBDUjtBQUNGOztBQXhDQztFQUNJLGlCQUFBO0FBMENMOztBQXZDQTtFQUNLLDRCQUFBO0VBQ0EsNkJBQUE7QUEwQ0wiLCJmaWxlIjoic3R1ZHktYWJyb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWR5LWFicm9hZC1iYW5uZXJ7XHJcbiAgICAgLy8gaGVpZ2h0OjUwdmggO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2IoODggMTQ3IDIzNSAvIDYlKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9TdHVkeV9BYnJvYWRfSWNvbnMvMS5IZWFkZXIvSW1hZ2VfYmFubmVyLnBuZycpO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnN0dWR5LWFicm9hZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5saWdodC1ncmF5LWJne1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgICAgcGFkZGluZzoyJVxyXG59XHJcbi5zdHVkeS1hYnJvYWQtaGVhZGVye1xyXG4gICAgIHBhZGRpbmc6IDUlIDAlO1xyXG59XHJcbiAuY3VzdC1ib3JkZXJ7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gfVxyXG4gLmN1c3QtYm9yZGVyLTJ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC5jb250YWN0LWNhcmR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICAgICAgbWFyZ2luOjklO1xyXG4gfVxyXG4gLmNhcmQtaGVhZGVyLFxyXG4gLmNhcmQtZm9vdGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDU3YTc7XHJcbiB9XHJcbiAuY2FyZC1mb290ZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDAlO1xyXG4gfVxyXG4gZm9ybS5leGFtLXBhZ2UtZm9ybXt3aWR0aDo1MCV9XHJcbiBmb3JtLmV4YW0tcGFnZS1mb3JtIGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICAgXHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6NHZoO1xyXG4gICAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiB9XHJcbiBmb3JtLmV4YW0tcGFnZS1mb3JtIGJ1dHRvbiB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgd2lkdGg6IDQlO1xyXG4gICAgIHBhZGRpbmc6IDUuNXB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICMxYzRkYzM7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgaGVpZ2h0OiA0dmg7XHJcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAucGlsbC1kaXYtY291cnNle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdCBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7IFxyXG5cdGNvbG9yOiBvcmFuZ2U7XHJcblx0cGFkZGluZzogNXB4IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRtYXJnaW46IDRweCAycHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIycHg7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiB9XHJcbiAuZmxleC1kaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiB9XHJcbiAuZmxleC1kaXYxe1xyXG4gICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAuY3VzdC1wYWRkaW5ne1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcclxuIH1cclxuLnRpdGxlLXRleHQge1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgIHRvcDogMDtcclxuICAgICBtYXJnaW46MDtcclxuICAgICBsZWZ0OiAwO1xyXG4gICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuIH1cclxuIC5idG4tb3Jhbmdle1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDA7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4ucGwtM3tcclxuICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG59XHJcbi5iZWxvdy1iYW5uZXIge1xyXG4gICAgIHBhZGRpbmc6MSUgMyU7XHJcbn1cclxuLnJpZ2h0LXdoaXRlLWJvcmRlcntcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5vcmFuZ2UtdGV4dHtcclxuICAgICBjb2xvcjpvcmFuZ2VyZWRcclxufVxyXG4udGV4dC1ibHVle1xyXG4gICAgIGNvbG9yOiMxYjRhODVcclxufVxyXG4ubWFwLWltZ3tcclxuICAgICB3aWR0aDo2MCU7XHJcbiAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG4uaW1nLWhvbGRlciBpbWd7XHJcbiAgICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW1nLWhvbGRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN0dWR5LWRpdiAuYm9yZGVye1xyXG4gICAgIGJvcmRlcjoxcHggc29saWQgI2EwYTNhNyAhaW1wb3J0YW50O1xyXG59XHJcbi5zeXUtaGVscC1pbWd7XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuICAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1yLTMge1xyXG4gICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuIH1cclxuIC5ib3JkZXItcmFke1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC5sb2dvLWltZyB7XHJcbiAgICAgd2lkdGg6MTAwJVxyXG4gfVxyXG4gLmZsYWctaW1ne1xyXG4gICAgICB3aWR0aDo0MCUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OjElXHJcbiB9XHJcbi5idG4tYmxvZy1zaG93LW1vcmV7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgNTIwJSk7XHJcbn1cclxuLmJ0bi1zdHVkeS1zaG93LW1vcmV7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwJSwgNjAwJSk7XHJcbn1cclxuLmxpbWl0VGV4dEhlaWdodHtcclxuICAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuIH1cclxuIC5yZWFkLW1vcmUtYnRue1xyXG4gICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiB9XHJcbiAuZmxleC1kaXYxIC5mYXtcclxuICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiB9XHJcbiAuc2VsZWN0LWZpbHRlcntcclxuICAgICBoZWlnaHQ6IDR2aDtcclxuICAgICBwYWRkaW5nOiAwcHggOCU7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyYTc2O1xyXG4gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuIH1cclxuIC5wbC0ye1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MiU7XHJcbiB9XHJcbiAudGV4dC1vcmFuZ2V7XHJcbiAgICAgY29sb3I6b3JhbmdlcmVkXHJcbn1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgICAuc3R1ZHktZGl2e1xyXG4gICAgICAgICAgIG1hcmdpbjowcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgIC5zdHVkeS1kaXYgLm1yLTMge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgIC5tYXAtaW1ne1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgICAuc2VsZWN0LWZpbHRlcntcclxuICAgICAgICAgICBwYWRkaW5nOjAlICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgIC5mbGV4LWRpdntcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIH1cclxuICAgICAucGlsbC1kaXYtY291cnNle1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIH1cclxuICAgICBmb3JtLmV4YW0tcGFnZS1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybS5leGFtLXBhZ2UtZm9ybSBidXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDowcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLnJpZ2h0LXdoaXRlLWJvcmRlciB7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgLnN0dWR5LWRpdntcclxuICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBsLTJ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6MCU7XHJcbiAgICAgfVxyXG4gICAgIC5wbC14cy0ye1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgfVxyXG4gICAgIC5wLXhzLTAge1xyXG4gICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgfVxyXG4gICAgIC5ibG9nLWlubmVyLWRpdiAubXItMyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWFkLW1vcmUtYnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1ob2xkZXIgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgZm9ybS5leGFtLXBhZ2UtZm9ybSBidXR0b257XHJcbiAgICAgICAgICB3aWR0aDoxMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICB9XHJcbiB9XHJcbiAucHItMntcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxufVxyXG5cclxuLnNsaWRlLWltYWdle1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTZweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5471:
/*!*****************************************************!*\
  !*** ./src/app/study-abroad/study-abroad.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyAbroadModule": () => (/* binding */ StudyAbroadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _study_abroad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-abroad-routing.module */ 51928);
/* harmony import */ var _study_abroad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-abroad.component */ 70595);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);







class StudyAbroadModule {
}
StudyAbroadModule.ɵfac = function StudyAbroadModule_Factory(t) { return new (t || StudyAbroadModule)(); };
StudyAbroadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StudyAbroadModule });
StudyAbroadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _study_abroad_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyAbroadRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StudyAbroadModule, { declarations: [_study_abroad_component__WEBPACK_IMPORTED_MODULE_1__.StudyAbroadComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _study_abroad_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyAbroadRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_study-abroad_study-abroad_module_ts.js.map