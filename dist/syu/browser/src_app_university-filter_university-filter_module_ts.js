"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_university-filter_university-filter_module_ts"],{

/***/ 65879:
/*!***********************************************************************!*\
  !*** ./src/app/university-filter/university-filter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterRoutingModule": () => (/* binding */ UniversityFilterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _university_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-filter.component */ 23964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _university_filter_component__WEBPACK_IMPORTED_MODULE_0__.UniversityFilterComponent
    }
];
class UniversityFilterRoutingModule {
}
UniversityFilterRoutingModule.ɵfac = function UniversityFilterRoutingModule_Factory(t) { return new (t || UniversityFilterRoutingModule)(); };
UniversityFilterRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UniversityFilterRoutingModule });
UniversityFilterRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UniversityFilterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 23964:
/*!******************************************************************!*\
  !*** ./src/app/university-filter/university-filter.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterComponent": () => (/* binding */ UniversityFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */ 79854);





function UniversityFilterComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r11.email);
} }
function UniversityFilterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r12.email);
} }
function UniversityFilterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r13.email);
} }
function UniversityFilterComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r14.email);
} }
function UniversityFilterComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r15.email);
} }
function UniversityFilterComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r16.email);
} }
function UniversityFilterComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r17.email);
} }
function UniversityFilterComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r18.email);
} }
function UniversityFilterComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r19.email);
} }
function UniversityFilterComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r20.email);
} }
function UniversityFilterComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r21.email);
} }
class UniversityFilterComponent {
    constructor(fb) {
        this.fb = fb;
        this.collapsed = true;
        this.accordionSelected = true;
        this.emails = [
            { email: "MBA/PGDM(1882)" },
            { email: "B.Sc.(1882)" },
            { email: "BE/B.Tech(1334)" },
            { email: "M.Sc.(1350)" },
            { email: "BBA/BBM (1883)" },
            { email: "BA (1276)" },
            { email: "MBA/PGDM(1882)" },
            { email: "B.Sc.(1882)" },
            { email: "BBA/BBM (1883)" },
        ];
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            useremail: this.fb.array([]),
        });
        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            console.log("mobile device");
            this.accordionSelected = false;
        }
        else {
            // false for not mobile device
            console.log("not mobile device");
            this.accordionSelected = true;
        }
    }
}
UniversityFilterComponent.ɵfac = function UniversityFilterComponent_Factory(t) { return new (t || UniversityFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
UniversityFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UniversityFilterComponent, selectors: [["app-university-filter"]], decls: 579, vars: 25, consts: [[1, "college-filter-banner"], [1, "col-lg-12"], [1, "college-filter-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "gray-bg", "filter"], [1, "col-lg-12", "col-sm-12"], [1, "row", "row-without-gutter", "p-2"], [1, "col-lg-2", "col-12", "col-sm-3", "left-sidebar", "mt-2"], ["id", "college-filter-tabs", "expandIcon", "pi pi-plus", "collapseIcon", "pi pi-minus", 3, "multiple"], ["header", "Filters", 3, "selected"], [1, "d-inline", "result-count"], [1, "text-right", "d-inline", "set-def-text"], ["href", ""], ["header", "Stream", 3, "selected"], ["type", "text", "placeholder", "Find Course", 1, "d-inline", "findCourse-textbox", "bg-white", "w-100"], [1, "Course-list-form", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["header", "State"], ["header", "City"], ["header", "Course"], ["header", "Program Type"], ["header", "University Type"], ["header", "Entrance/Exam Accepted"], ["header", "Average Fees"], ["header", "Course Type"], ["header", "Course Duration"], ["header", "Study Abroad"], [1, "col-lg-10", "col-sm-9", "col-12", "p-custom", "right-div-content"], [1, "row", "row-without-gutter"], [1, "col-lg-12", "bg-white", "text-right", "ml-2", "mt-2"], [1, "sort-div"], ["for", "sorting"], ["name", "demo", "id", "sorting"], ["selected", "selected", "value", "one"], ["value", "two"], ["value", "three"], [1, "colg-list"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "card"], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Like.png", "alt", "", 1, "like-img"], [1, "back-img"], [1, "middle-img"], ["src", "../../assets/img/filter2.png", "alt", ""], [1, ""], [1, "light-blue-text", "colg-name"], [1, "colg-place"], [1, "row", "row-without-gutter", "border-bottom"], [1, "col-lg-3", "col-3", "border-right", "text-center"], [1, "f-text"], [1, "sec-text"], [1, "col-lg-3", "col-3", "text-center"], [1, "col-lg-3", "col-3"], [1, "small-img"], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Addmission.png", "width", "30", "alt", ""], [1, "small-img-text"], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Course-&-Fee.png", "width", "30", "alt", ""], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Placement.png", "width", "30", "alt", ""], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Review.png", "width", "30", "alt", ""], [1, "row", "row-custom-gutter"], [1, "col-lg-6", "col-6", "bg-light-blue", "white-text-2"], [1, "app-now-text"], [1, "col-lg-6", "col-6"], [1, "brochure-text"], ["src", "../../assets/img/Study_Content_Icons/4.University_in_Canada/Featured-College.png", "alt", "", 1, "fc-img"], ["type", "checkbox"], [1, "filter-couse-list", "pl-1"]], template: function UniversityFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "List Of Universities In India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p-accordion", 8)(10, "p-accordionTab", 9)(11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Found 3924 colleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Set Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "p-accordionTab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UniversityFilterComponent_div_20_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p-accordionTab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UniversityFilterComponent_div_24_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p-accordionTab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UniversityFilterComponent_div_28_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p-accordionTab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UniversityFilterComponent_div_32_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p-accordionTab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UniversityFilterComponent_div_36_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p-accordionTab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, UniversityFilterComponent_div_40_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p-accordionTab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, UniversityFilterComponent_div_44_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p-accordionTab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, UniversityFilterComponent_div_48_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p-accordionTab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, UniversityFilterComponent_div_52_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p-accordionTab", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, UniversityFilterComponent_div_56_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p-accordionTab", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, UniversityFilterComponent_div_60_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "div", 29)(64, "div", 30)(65, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Sort By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "select", 32)(68, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 1)(75, "div", 36)(76, "div", 37)(77, "div", 38)(78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 40)(80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 44)(84, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 1)(89, "div", 47)(90, "div", 48)(91, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 48)(96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 48)(101, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 51)(106, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 1)(111, "div", 37)(112, "div", 52)(113, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 52)(118, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 52)(123, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 52)(128, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 1)(133, "div", 59)(134, "div", 60)(135, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 62)(138, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 38)(141, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 64)(143, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 44)(147, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 1)(152, "div", 47)(153, "div", 48)(154, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 48)(159, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 48)(164, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 51)(169, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 1)(174, "div", 37)(175, "div", 52)(176, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 52)(181, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 52)(186, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 52)(191, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 1)(196, "div", 59)(197, "div", 60)(198, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 62)(201, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 38)(204, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 44)(209, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 1)(214, "div", 47)(215, "div", 48)(216, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 48)(221, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 48)(226, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 51)(231, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 1)(236, "div", 37)(237, "div", 52)(238, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 52)(243, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 52)(248, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 52)(253, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 1)(258, "div", 59)(259, "div", 60)(260, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 62)(263, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 38)(266, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "img", 64)(268, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 44)(272, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 1)(277, "div", 47)(278, "div", 48)(279, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 48)(284, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 48)(289, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 51)(294, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "div", 1)(299, "div", 37)(300, "div", 52)(301, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 52)(306, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 52)(311, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 52)(316, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "div", 1)(321, "div", 59)(322, "div", 60)(323, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 62)(326, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 38)(329, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "img", 40)(331, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 44)(335, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 1)(340, "div", 47)(341, "div", 48)(342, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 48)(347, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 48)(352, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 51)(357, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 1)(362, "div", 37)(363, "div", 52)(364, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 52)(369, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 52)(374, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 52)(379, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 1)(384, "div", 59)(385, "div", 60)(386, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 62)(389, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "div", 38)(392, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](395, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 44)(397, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 1)(402, "div", 47)(403, "div", 48)(404, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 48)(409, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 48)(414, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 51)(419, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 1)(424, "div", 37)(425, "div", 52)(426, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "div", 52)(431, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 52)(436, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](437, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 52)(441, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 1)(446, "div", 59)(447, "div", 60)(448, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 62)(451, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 38)(454, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "img", 64)(456, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "div", 44)(460, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 1)(465, "div", 47)(466, "div", 48)(467, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "div", 48)(472, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 48)(477, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 51)(482, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 1)(487, "div", 37)(488, "div", 52)(489, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 52)(494, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](495, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 52)(499, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](500, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "div", 52)(504, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](505, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 1)(509, "div", 59)(510, "div", 60)(511, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 62)(514, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 38)(517, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](518, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](520, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 44)(522, "h2", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "Monroe College");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "h5", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Callfornia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "div", 1)(527, "div", 47)(528, "div", 48)(529, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "$800");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "First Year Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 48)(534, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "IELTS 7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, "Score Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "div", 48)(539, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Rank 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "In Times Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "div", 51)(544, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "15 LPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "Highest Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "div", 1)(549, "div", 37)(550, "div", 52)(551, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "div", 52)(556, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559, "Course & Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "div", 52)(561, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](562, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](564, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 52)(566, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](567, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](569, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "div", 1)(571, "div", 59)(572, "div", 60)(573, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "APPLY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "div", 62)(576, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "BROCHURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](578, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.accordionSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.emails);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionTab, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective], styles: [".gray-bg[_ngcontent-%COMP%] {\n  background-color: #e7e7e7;\n}\n\n.p-custom[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.middle-img[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  display: block;\n  margin-top: 0px;\n  width: 50%;\n}\n\n.college-filter-banner[_ngcontent-%COMP%] {\n  height: 40vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('header-banner.png');\n  background-repeat: no-repeat;\n  padding: 10% 0%;\n  margin-top: -1px;\n}\n\n.back-img[_ngcontent-%COMP%] {\n  background-image: url('banner-image.png');\n  height: 18vh;\n  background-position: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: 1px solid #000;\n  border-radius: 5px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.middle-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0px auto;\n  display: block;\n  margin-top: -35px;\n  border: 1px solid;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.bg-light-blue[_ngcontent-%COMP%] {\n  background-color: #0b7dda !important;\n  cursor: pointer;\n  border-bottom-left-radius: 4px;\n  margin-bottom: -0.5px;\n}\n\n.colg-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\n.colg-place[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: center;\n}\n\n.f-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.sec-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  text-align: center;\n}\n\n.small-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.small-img-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-align: center;\n}\n\n.colg-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid;\n  padding: 5px;\n  padding-bottom: 0;\n}\n\n.brochure-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n  line-height: normal;\n  padding-top: 4px;\n}\n\n.app-now-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n  line-height: normal;\n  padding: 5px;\n}\n\n.custom-padding-row[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.filter-couse-list[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: inline-block;\n  margin-bottom: 0px;\n}\n\n.Course-list-form[_ngcontent-%COMP%] {\n  height: 15vh;\n  overflow-y: auto;\n  margin-top: 10px;\n}\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #static-1-header[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.filter-accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n\n.btn-check[_ngcontent-%COMP%]:focus    + .btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.set-def-text[_ngcontent-%COMP%], .result-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.filter-accordion[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n  border-radius: 0px;\n  border-top: 1px solid gray;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.colg-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n#sorting[_ngcontent-%COMP%] {\n  background-color: #426eaf;\n  padding: 5px 12px;\n  color: #fff;\n  margin: 5px;\n}\n\n.row-custom-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 11px !important;\n  --bs-gutter-y: 0 !important;\n  border-top: 1px solid #000;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #000;\n}\n\n.left-sidebar[_ngcontent-%COMP%] {\n  z-index: 1;\n  top: 15%;\n  left: 0;\n}\n\n.like-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 8%;\n  right: 3%;\n  top: 3%;\n}\n\n.fc-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 35%;\n  left: -9%;\n  top: 3%;\n}\n\n.colg-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 15%;\n}\n\n.filter-page-sec-nav[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 27.4px;\n  margin-top: 0px;\n}\n\nnav.filter-page-sec-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], nav.filter-page-sec-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #426eaf;\n}\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   #static-2-header[_ngcontent-%COMP%] {\n  background-color: #426eaf !important;\n}\n\n.main-accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: red;\n}\n\nnav.filter-page-sec-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: -14px;\n}\n\nnav.filter-page-sec-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n\n.notification-div[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .notification-div[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%], #static-2-header[_ngcontent-%COMP%] {\n  background-color: #426eaf !important;\n}\n\n.notification-div[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.app-now-text[_ngcontent-%COMP%], .brochure-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.noti-title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-bottom: 0px;\n}\n\n.noti-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-bottom: 0px;\n}\n\n.noti-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n  margin-bottom: 5px;\n}\n\n.noti-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.noti-img[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.filter-accordion[_ngcontent-%COMP%] {\n  height: 30vh;\n  overflow-y: auto;\n}\n\n.inner-wrapper[_ngcontent-%COMP%] {\n  height: 40vh;\n  overflow-y: auto;\n}\n\n.filter-accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n\n.notification-div[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .notification-div[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n\n.notification-div[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.notification-div[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-right: 15px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]    + .icon-bar[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n  border: 2px rgb(118, 118, 118) outset;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: -25px;\n}\n\n.mt-custom[_ngcontent-%COMP%] {\n  margin-top: 4%;\n}\n\n.set-def-text[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n\n.Course-list-form[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  background-color: #fff;\n}\n\n.Course-list-form[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #426eaf;\n  border-radius: 5px;\n  width: 5px;\n}\n\n@media only screen and (max-width: 767px) {\n  .row-without-gutter[_ngcontent-%COMP%] {\n    --bs-gutter-x:0 !important;\n    --bs-gutter-y: 0 !important;\n  }\n  .p-custom[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .left-sidebar[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0px auto;\n  }\n  .right-div-content[_ngcontent-%COMP%] {\n    margin-left: 0%;\n    height: auto;\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .colg-list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 15px;\n  }\n}\n\n.findCourse-textbox[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.filter-accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:after {\n  flex-shrink: 0;\n  width: 1.25rem;\n  height: 1.25rem;\n  margin-left: auto;\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: 1.25rem;\n  transition: transform 0.2s ease-in-out;\n}\n\n.accordion-button[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background-color: #fff;\n}\n\n.custom-header2[_ngcontent-%COMP%] {\n  background-color: #426eaf !important;\n}\n\n.custom-header2[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff !important;\n  text-decoration: none !important;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .right-div-content[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n}\n\n.toggle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n\n.toggle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n.toggle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  padding: 14px 5px 16px 5px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n  width: 100%;\n  transition: 0.4s;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.toggle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n}\n\n.plus[_ngcontent-%COMP%] {\n  width: 20px;\n  background: #888;\n  color: #fff;\n  border-radius: 100%;\n  padding: 1px;\n  height: 20px;\n  display: block;\n  float: right;\n  margin-right: 11px;\n  text-align: center;\n  line-height: 19px;\n}\n\n.toggle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 16px;\n  border-top: 0px;\n  display: none;\n  background-color: #fff !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  transition: height 0.35s ease-in-out;\n}\n\n.toggle2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n.toggle2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 14px 14px 16px 16px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0px;\n  width: 100%;\n  transition: 0.4s;\n}\n\n.toggle2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n}\n\n.toggle2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 16px;\n  border-top: 0px;\n  display: none;\n  background-color: #fff !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  transition: height 0.35s ease-in-out;\n}\n\n.card[_ngcontent-%COMP%] {\n  word-wrap: normal !important;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdHktZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0VBQ0QsdURBQUE7RUFDQSwwQkFBQTtFQUNDLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDRCxrQkFBQTtFQUNBLGtCQUFBO0FBSUg7O0FBRkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQVUsZUFBQTtBQVFWOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0QsbUJBQUE7RUFDQSxnQkFBQTtBQWFIOztBQVhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0QsbUJBQUE7RUFDQSxZQUFBO0FBY0g7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBaUJKOztBQWZBO0VBQ0ksWUFBQTtBQWtCSjs7QUFoQkE7RUFDSSw2QkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtBQW9CSjs7QUFsQkE7O0VBRUksZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxpQkFBQTtFQUNELGtCQUFBO0VBQ0Esa0JBQUE7RUFDQywwQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FBdUJKOztBQXJCQTtFQUNJLGFBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksZ0JBQUE7QUF5Qko7O0FBdkJBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNELFdBQUE7RUFDQSxXQUFBO0FBMEJIOztBQXhCQTtFQUNJLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSw2QkFBQTtBQTRCSjs7QUExQkE7RUFJRyxVQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUEwQkg7O0FBZEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQWlCSjs7QUFmQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBa0JKOztBQWhCQTtFQUNJLGtCQUFBO0FBbUJKOztBQWpCQTtFQUNJLFVBQUE7RUFDRCxlQUFBO0VBQ0EsZUFBQTtBQW9CSDs7QUFsQkE7O0VBRUksY0FBQTtBQXFCSjs7QUFuQkE7RUFFSSxvQ0FBQTtBQXFCSjs7QUFuQkE7RUFDSSxxQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxpQkFBQTtFQUNELGlCQUFBO0FBdUJIOztBQXJCQTtFQUNJLDRCQUFBO0FBd0JKOztBQXRCQTs7O0VBR0ksb0NBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQTBCSjs7QUF4QkE7O0VBRUksa0JBQUE7QUEyQko7O0FBekJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQTZCSjs7QUEzQkE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0FBOEJKOztBQTVCQTtFQUNJLFdBQUE7QUErQko7O0FBN0JBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBa0NKOztBQWhDQTtFQUNJLFlBQUE7QUFtQ0o7O0FBakNBOztFQUVJLFlBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksa0JBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksYUFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUF1Q0o7O0FBckNBO0VBQ0ksdUJBQUE7QUF3Q0o7O0FBdENBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF5Q0o7O0FBdkNBO0VBQ0ksZUFBQTtBQTBDSjs7QUF4Q0E7RUFDSSxjQUFBO0FBMkNKOztBQXpDQTtFQUNLLG9CQUFBO0FBNENMOztBQTFDQTtFQUNJLFlBQUE7QUE2Q0o7O0FBMUNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUE2Q0o7O0FBM0NBO0VBQ0ksb0NBQUE7RUFDQSxxQ0FBQTtBQThDSjs7QUE1Q0E7RUFDSyxnQkFBQTtFQUNBLGlCQUFBO0FBK0NMOztBQTdDQTtFQUNLLGNBQUE7QUFnREw7O0FBOUNBO0VBQ0ssZ0JBQUE7QUFpREw7O0FBL0NBO0VBQ0csVUFBQTtFQUNBLHNCQUFBO0FBa0RIOztBQWhEQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbURGOztBQWpEQTtFQUNJO0lBQ0ssMEJBQUE7SUFDQSwyQkFBQTtFQW9EUDtFQWxERTtJQUNLLGlCQUFBO0lBQ0Esa0JBQUE7RUFvRFA7RUFsREU7SUFFSyxrQkFBQTtJQUNBLGdCQUFBO0VBbURQO0VBakRFO0lBQ0ssZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBbURQO0VBakRFO0lBQ0ssaUJBQUE7RUFtRFA7RUFqREU7SUFDSyxZQUFBO0VBbURQO0FBQ0Y7O0FBakRBO0VBQ0ssZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQW1ETDs7QUEvQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpU0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQWtESjs7QUFoREE7RUFDQSxZQUFBO0FBbURBOztBQWpEQTtFQUNLLHNCQUFBO0FBb0RMOztBQWxEQTtFQUNLLG9DQUFBO0FBcURMOztBQWxEQTtFQUNJLHNCQUFBO0VBQ0EsZ0NBQUE7QUFxREo7O0FBbkRBO0VBQ0ssaUJBQUE7QUFzREw7O0FBcERBO0VBQ0s7SUFDSyxrQkFBQTtFQXVEUjtBQUNGOztBQXJEQTtFQUNLLFdBQUE7RUFDQSxxQkFBQTtBQXVETDs7QUFyREE7RUFDRyxjQUFBO0FBd0RIOztBQXREQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUNBO0VBQUksV0FBQTtFQUNKLGdCQUFBO0FBeURKOztBQXZEQTtFQUNJLFdBQUE7QUEwREo7O0FBeERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUEyREo7O0FBekRBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTRESjs7QUExREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQ0FBQTtBQTZESjs7QUExREE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUE2REo7O0FBM0RBO0VBQ0csNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBOERIOztBQTVEQTtFQUNHLGNBQUE7RUFDQSxlQUFBO0FBK0RIOztBQTdEQTtFQUNHLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQ0FBQTtFQUNBLG9DQUFBO0FBZ0VIOztBQTlEQTtFQUNJLDRCQUFBO0FBaUVKOztBQS9EQTtFQUNJLG1CQUFBO0FBa0VKIiwiZmlsZSI6InVuaXZlcnNpdHktZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXktYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gICAgXHJcbn1cclxuLmZpbHRlcntcclxuICAgIC8vIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuLnAtY3VzdG9te1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG4ubWlkZGxlLWltZ3tcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn1cclxuLmNvbGxlZ2UtZmlsdGVyLWJhbm5lcntcclxuICAgIGhlaWdodDo0MHZoIDtcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL0NvbGxlZ2VfRmlsdGVyX0ljb25zLzEuSGVhZGVyL2hlYWRlci1iYW5uZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZzoxMCUgMCU7XHJcbiAgICBtYXJnaW4tdG9wOi0xcHg7XHJcbn1cclxuLmJhY2staW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL0NvbGxlZ2VfRmlsdGVyX0ljb25zLzQuUGFnZS9iYW5uZXItaW1hZ2UucG5nJyk7XHJcbiAgICBoZWlnaHQ6IDE4dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbi5taWRkbGUtaW1nIGltZ3tcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDotMzVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5iZy1saWdodC1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjdkZGEgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0wLjVweDtcclxufVxyXG4uY29sZy1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uY29sZy1wbGFjZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc2VjLXRleHR7Zm9udC1zaXplOiAxMnB4O31cclxuLnNtYWxsLWltZ3tcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc21hbGwtaW1nIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc21hbGwtaW1nLXRleHR7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbGctbGlzdCAuY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4uYnJvY2h1cmUtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG4uYXBwLW5vdy10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmN1c3RvbS1wYWRkaW5nLXJvd3tcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5maWx0ZXItY291c2UtbGlzdHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uQ291cnNlLWxpc3QtZm9ybXtcclxuICAgIGhlaWdodDoxNXZoO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uYWNjb3JkaW9uIC5jYXJkICNzdGF0aWMtMS1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4uZmlsdGVyLWFjY29yZGlvbiAuY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tY2hlY2s6Zm9jdXMrLmJ0biwgLmJ0bjpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnNldC1kZWYtdGV4dCxcclxuLnJlc3VsdC1jb3VudHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uZmlsdGVyLWFjY29yZGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIGdyYXlcclxufVxyXG4ucm93LXdpdGhvdXQtZ3V0dGVye1xyXG4gICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50O1xyXG4gICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5hY2NvcmRpb24gLmNhcmQgLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG4uY29sZy1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4XHJcbn1cclxuI3NvcnRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2ZWFmO1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICBtYXJnaW46IDVweDtcclxufVxyXG4ucm93LWN1c3RvbS1ndXR0ZXJ7XHJcbiAgICAtLWJzLWd1dHRlci14OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5ib3JkZXItYm90dG9te1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzAwMDtcclxufVxyXG4ubGVmdC1zaWRlYmFye1xyXG4gICAgLy8gaGVpZ2h0OiA4MCU7XHJcbi8vICAgICB3aWR0aDogMTYlO1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICB6LWluZGV4OiAxO1xyXG4gICB0b3A6IDE1JTtcclxuICAgbGVmdDogMDtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuLy8gICAgIG92ZXJmbG93LXk6YXV0bztcclxufVxyXG4ucmlnaHQtZGl2LWNvbnRlbnR7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoxNiU7XHJcbiAgICAvLyBoZWlnaHQ6ODB2aDtcclxuICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4ubGlrZS1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDo4JTtcclxuICAgIHJpZ2h0OjMlO1xyXG4gICAgdG9wOjMlO1xyXG59XHJcbi5mYy1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbGVmdDogLTklO1xyXG4gICAgdG9wOiAzJTtcclxufVxyXG4uY29sZy1saXN0IC5jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG59XHJcbi5maWx0ZXItcGFnZS1zZWMtbmF2e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgcGFkZGluZzogMjcuNHB4O1xyXG4gICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxubmF2LmZpbHRlci1wYWdlLXNlYy1uYXYgdWwgbGksXHJcbm5hdi5maWx0ZXItcGFnZS1zZWMtbmF2IHVsIGxpIGF7XHJcbiAgICBjb2xvcjojNDI2ZWFmXHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZCAjc3RhdGljLTItaGVhZGVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjZlYWYgIWltcG9ydGFudDtcclxufVxyXG4ubWFpbi1hY2NvcmRpb24gLmNhcmQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5uYXYuZmlsdGVyLXBhZ2Utc2VjLW5hdiB1bHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBtYXJnaW4tdG9wOiAtMTRweDtcclxufVxyXG5uYXYuZmlsdGVyLXBhZ2Utc2VjLW5hdiB1bCBsaXtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzAwMFxyXG59XHJcbi5ub3RpZmljYXRpb24tZGl2IC5jYXJkLWhlYWRlcixcclxuLm5vdGlmaWNhdGlvbi1kaXYgLmNhcmQtZm9vdGVyLFxyXG4jc3RhdGljLTItaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNmVhZiAhaW1wb3J0YW50O1xyXG59XHJcbi5ub3RpZmljYXRpb24tZGl2e1xyXG4gICAgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4uYXBwLW5vdy10ZXh0LFxyXG4uYnJvY2h1cmUtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubm90aS10aXRsZSBoNntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ubm90aS10aXRsZSBwe1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm5vdGktcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLm5vdGktaW1nIGltZ3tcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4ubm90aS1pbWd7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweDtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbn1cclxuLmZpbHRlci1hY2NvcmRpb257XHJcbiAgICBoZWlnaHQ6MzB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmlubmVyLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6NDB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmZpbHRlci1hY2NvcmRpb24gLmNhcmQgLmNvbGxhcHNlIC5jYXJkLWJvZHl7IFxyXG4gICAgcGFkZGluZzozcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1kaXYgLmNhcmQtaGVhZGVyLFxyXG4ubm90aWZpY2F0aW9uLWRpdiAuY2FyZC1mb290ZXJ7XHJcbiAgICBwYWRkaW5nOjNweDtcclxufVxyXG4ubm90aWZpY2F0aW9uLWRpdiAuY2FyZC1oZWFkZXIgaDV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi1kaXYgLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5hdmJhci10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIrLmljb24tYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ubmF2YmFyLWJyYW5kPmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubW9iaWxlLW5hdntcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4ubmF2YmFyIHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcclxuICAgIGJvcmRlcjogMnB4IHJnYigxMTgsIDExOCwgMTE4KSBvdXRzZXQ7XHJcbn1cclxuLm5hdmJhci1jb2xsYXBzZXtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIG1hcmdpbi10b3A6LTI1cHhcclxufVxyXG4ubXQtY3VzdG9te1xyXG4gICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbi5zZXQtZGVmLXRleHR7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MjUlXHJcbn1cclxuLkNvdXJzZS1saXN0LWZvcm06Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICB3aWR0aDo0cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxufVx0XHJcbi5Db3Vyc2UtbGlzdC1mb3JtOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICBiYWNrZ3JvdW5kOiM0MjZlYWY7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgd2lkdGg6NXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAucm93LXdpdGhvdXQtZ3V0dGVye1xyXG4gICAgICAgICAtLWJzLWd1dHRlci14OjAgIWltcG9ydGFudDtcclxuICAgICAgICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnAtY3VzdG9te1xyXG4gICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmxlZnQtc2lkZWJhcntcclxuICAgICAgICAgLy8gd2lkdGg6IDk2JTtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWRpdi1jb250ZW50e1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDowJTtcclxuICAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDowcHhcclxuICAgIH1cclxuICAgIC5jb2xnLWxpc3QgLmNhcmR7XHJcbiAgICAgICAgIG1hcmdpbjoxNXB4O1xyXG4gICAgfVxyXG59XHJcbi5maW5kQ291cnNlLXRleHRib3h7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmZpbHRlci1hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG46YWZ0ZXIge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB3aWR0aDogMS4yNXJlbTtcclxuICAgIGhlaWdodDogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyUyMzIxMjUyOSclM2UlM2NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvJTNlJTNjL3N2ZyUzZVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hY2NvcmRpb24tYnV0dG9ue1xyXG5wYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpe1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmN1c3RvbS1oZWFkZXIye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjZlYWYgIWltcG9ydGFudDtcclxuICAgICBcclxufVxyXG4uY3VzdG9tLWhlYWRlcjIgLmJ0bi1saW5rIHB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICAgbWFyZ2luLXJpZ2h0OjVweFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAucmlnaHQtZGl2LWNvbnRlbnR7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgfVxyXG59XHJcbi50b2dnbGUgaDMgYXtcclxuICAgICBjb2xvcjojMDAwOyBcclxuICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4udG9nZ2xlIGgzIHB7XHJcbiAgIG1hcmdpbi10b3A6MiVcclxufVxyXG4udG9nZ2xlIGgze1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIHBhZGRpbmc6IDE0cHggNXB4IDE2cHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOlxyXG4gICAgMHB4O3dpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uZmxvYXQtbGVmdHtcclxuICAgIGZsb2F0OmxlZnRcclxufVxyXG4udG9nZ2xlIGgzIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSAgICBcclxuLnBsdXN7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcbi50b2dnbGUgPmRpdiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50b2dnbGUyIGgzIGF7XHJcbiAgICBjb2xvcjojZmZmOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi50b2dnbGUyIGgze1xyXG4gICBwYWRkaW5nOiAxNHB4IDE0cHggMTZweCAxNnB4O1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLnRvZ2dsZTIgaDMgYXtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1hcmdpbi10b3A6IDNweDtcclxufSBcclxuLnRvZ2dsZTIgPmRpdiB7XHJcbiAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgZm9udC1zaXplOjE2cHg7XHJcbiAgIGJvcmRlci10b3A6IDBweDtcclxuICAgZGlzcGxheTogbm9uZTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAtby1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICB0cmFuc2l0aW9uOiBoZWlnaHQgLjM1cyBlYXNlLWluLW91dDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcbi5ib3JkZXItYm90dG9te1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 75777:
/*!***************************************************************!*\
  !*** ./src/app/university-filter/university-filter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterModule": () => (/* binding */ UniversityFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _university_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-filter-routing.module */ 65879);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _university_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./university-filter.component */ 23964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class UniversityFilterModule {
}
UniversityFilterModule.ɵfac = function UniversityFilterModule_Factory(t) { return new (t || UniversityFilterModule)(); };
UniversityFilterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UniversityFilterModule });
UniversityFilterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _university_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversityFilterRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UniversityFilterModule, { declarations: [_university_filter_component__WEBPACK_IMPORTED_MODULE_3__.UniversityFilterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _university_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversityFilterRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_1__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_university-filter_university-filter_module_ts.js.map