"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_study-content_study-content_module_ts"],{

/***/ 29749:
/*!***************************************!*\
  !*** ./src/app/study-content/data.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demo": () => (/* reexport module object */ _assets_study_con_demo__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _assets_study_con_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/study-con/demo */ 98072);




/***/ }),

/***/ 70389:
/*!***************************************************************!*\
  !*** ./src/app/study-content/study-content-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyContentRoutingModule": () => (/* binding */ StudyContentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _study_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-content.component */ 98500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _study_content_component__WEBPACK_IMPORTED_MODULE_0__.StudyContentComponent
    },
    {
        path: 'demo',
        component: _study_content_component__WEBPACK_IMPORTED_MODULE_0__.StudyContentComponent
    },
];
class StudyContentRoutingModule {
}
StudyContentRoutingModule.ɵfac = function StudyContentRoutingModule_Factory(t) { return new (t || StudyContentRoutingModule)(); };
StudyContentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudyContentRoutingModule });
StudyContentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudyContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 98500:
/*!**********************************************************!*\
  !*** ./src/app/study-content/study-content.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyContentComponent": () => (/* binding */ StudyContentComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 29749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ 79854);






function StudyContentComponent_div_51_div_2_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", TableItems_r16, " ");
} }
function StudyContentComponent_div_51_div_2_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r19 = ctx.$implicit;
    const Tableitem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", Tableitem_r17[TableItems_r19], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_2_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StudyContentComponent_div_51_div_2_tr_6_td_1_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.col);
} }
function StudyContentComponent_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "table", 30)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StudyContentComponent_div_51_div_2_th_4_Template, 2, 1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StudyContentComponent_div_51_div_2_tr_6_Template, 2, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.row);
} }
function StudyContentComponent_div_51_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r1.data, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function StudyContentComponent_div_51_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](Listitem_r25);
} }
function StudyContentComponent_div_51_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "h2", 32)(2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StudyContentComponent_div_51_div_6_li_4_Template, 2, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_8_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](numbetList_r28);
} }
function StudyContentComponent_div_51_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "h2", 32)(2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ol", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StudyContentComponent_div_51_div_8_li_4_Template, 3, 1, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h3", 37)(3, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.data, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "div", 7)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "h5", 38)(6, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const sm_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", sm_r32.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", sm_r32.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h3", 37)(3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StudyContentComponent_div_51_div_10_div_5_Template, 7, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 54)(3, "h3", 41)(4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ii_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ii_r35.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ii_r35.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ii_r35.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StudyContentComponent_div_51_div_11_div_6_Template, 5, 3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 52)(8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Discover");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_12_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inn_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", inn_r40.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", inn_r40.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 60)(3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "h2", 64)(8, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "div", 66)(11, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 68)(13, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 68)(16, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, StudyContentComponent_div_51_div_12_div_5_div_19_Template, 4, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2)(21, "div", 73)(22, "div", 74)(23, "h5", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "APPLY NOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 76)(26, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "BROCHURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const bg_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", bg_r38.backimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", bg_r38.clgimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.subtitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.leftval, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.leftvalinfo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.rightval, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", bg_r38.rightvalinfo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", bg_r38.innerIcon);
} }
function StudyContentComponent_div_51_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h4", 55)(3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StudyContentComponent_div_51_div_12_div_5_Template, 28, 9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " See All Colleges In Canada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "div", 88)(4, "div", 7)(5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "h5", 92)(9, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 87)(13, "div", 95)(14, "div", 96)(15, "div", 70)(16, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Apply Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 98)(19, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ex_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ex_r43.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ex_r43.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ex_r43.text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "h2", 49)(2, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StudyContentComponent_div_51_div_13_div_5_Template, 21, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_14_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 104)(2, "ul")(3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ques_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ques_r46.ques)("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ques_r46.ans, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 100)(2, "p-accordion", 101)(3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "h2", 103)(5, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StudyContentComponent_div_51_div_14_p_6_Template, 5, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "div", 109)(3, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Explore More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const image_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r49.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", image_r49.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h2", 49)(3, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StudyContentComponent_div_51_div_15_div_5_Template, 9, 2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.data);
} }
function StudyContentComponent_div_51_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 114)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "h5", 41)(3, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Book Your FREE 30 Mins Session Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", item_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StudyContentComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StudyContentComponent_div_51_div_2_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StudyContentComponent_div_51_div_4_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StudyContentComponent_div_51_div_6_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, StudyContentComponent_div_51_div_8_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StudyContentComponent_div_51_div_9_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, StudyContentComponent_div_51_div_10_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, StudyContentComponent_div_51_div_11_Template, 16, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StudyContentComponent_div_51_div_12_Template, 9, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, StudyContentComponent_div_51_div_13_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, StudyContentComponent_div_51_div_14_Template, 7, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, StudyContentComponent_div_51_div_15_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, StudyContentComponent_div_51_div_16_Template, 6, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type == "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "sm-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "icon-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "bg-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "exam-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "question-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "img-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.type === "session-type");
} }
class StudyContentComponent {
    constructor(router) {
        this.router = router;
        this.studyData = _data__WEBPACK_IMPORTED_MODULE_0__;
        this.carouselOptions2 = {
            margin: 0,
            nav: true,
            // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsiveClass: true,
            loop: true,
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
                    loop: true
                },
                1500: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        };
        this.images2 = [
            {
                text: "Study In USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
            {
                text: "USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
            {
                text: "USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
            {
                text: "Study In USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
            {
                text: "USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
            {
                text: "USA",
                image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
            },
        ];
    }
    ngOnInit() {
        console.log('stcon', this.studyData);
        this.url = this.router.url.split('/');
        console.log('rou', this.url);
        this.displayData = this.studyData[this.url[2]][this.url[2]];
        console.log('this.displayData: ', this.displayData);
    }
}
StudyContentComponent.ɵfac = function StudyContentComponent_Factory(t) { return new (t || StudyContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
StudyContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudyContentComponent, selectors: [["app-study-content"]], decls: 53, vars: 7, consts: [[1, "study-abroad"], [1, "study-abroad-banner"], [1, "col-lg-12"], [1, "study-abroad-header", "text-center"], [1, "white-text-2", "mb-0", 3, "innerHTML"], [1, "title"], [1, "title-text", "white-text-2", 3, "innerHTML"], [1, "row", "row-without-gutter"], ["action", "", 1, "exam-page-form", "d-block", "mx-auto"], ["type", "text", "placeholder", "Enter Course, College or Exam", "name", "search2"], ["type", "submit"], [1, "fa", "fa-search"], [1, "flex-div"], [1, "d-inline", "white-text-2", "cust-padding", "mb-0"], [1, "pill-div-course"], [1, "btn", "btn-orange", "white-text-2"], [1, "container-fluid"], [1, "col-lg-12", "below-banner"], [1, "col-lg-4", "col-4", "col-sm-4", "right-white-border", "p-4"], [1, "text-orange", "text-center", "mob-height"], [1, "py-3", "text-center", "f-12"], [1, "text-blue", "text-center", "mob-height"], [1, "col-lg-4", "col-4", "col-sm-4", "p-4"], [1, "light-blue-text", "text-center", "mob-height"], ["class", "col-lg-12 light-gray-bg", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "light-gray-bg"], [1, "row", "row-without-gutter", "bg-white", "my-2", "border-radius"], [4, "ngIf"], ["class", "row row-without-gutter bg-white my-2 border-radius", 4, "ngIf"], ["class", "row row-without-gutter my-2 blue-bg border-radius", 4, "ngIf"], ["id", "quick-table", 1, "table", "text-center", "table-hover", "table-responsive", "w-100", "d-md-table"], [4, "ngFor", "ngForOf"], [3, "innerHTML"], ["alt", "", 1, "review-img", "custome-img", 3, "src"], [1, "cust-padding"], ["type", "1", 2, "margin-bottom", "0px"], [1, "row", "row-without-gutter", "text-center", "mt-3"], [1, "light-blue-text", 3, "innerHTML"], [1, "light-blue-text", 3, "innerHtml"], [1, "text", "p-4", 3, "innerHtml"], [1, "row", "row-without-gutter", "text-center"], [3, "innerHtml"], ["class", "col-lg-4 blue-border", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "blue-border"], [1, "col-lg-3", "col-sm-3", "border-right-blue"], ["src", "../../assets/img/Study_Content_Icons/2.Study_Destination/Capital.png", "alt", "", 1, "capital-img"], [1, "col-lg-9", "col-sm-9", "text-center", "pt-3"], [1, ""], [1, "container"], [1, "light-blue-text", "text-center", "py-3", 3, "innerHtml"], [1, "row", "course-inner-div"], ["class", "col-lg-2 col-sm-4 col-6", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-sm-4", "col-6"], [1, "part"], [3, "src"], [1, "text-center", "light-blue-text", "my-3", 3, "innerHtml"], ["class", "col-lg-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "text-center", "light-blue-text", "my-3"], [1, "col-lg-3", "col-sm-6"], [1, "card"], ["alt", "", 1, "like-img", 3, "src"], [1, "back-img"], [1, "middle-img"], ["alt", "", 3, "src"], [1, "light-blue-text", "colg-name", 3, "innerHtml"], [1, "colg-place", 3, "innerHtml"], [1, "row", "row-without-gutter", "border-bottom"], [1, "col-lg-6", "col-sm-6", "col-6", "border-right", "text-center"], [1, "f-text", 3, "innerHtml"], [1, "sec-text", 3, "innerHtml"], [1, "col-lg-6", "col-sm-6", "col-6", "text-center"], [1, "row", "py-3"], ["class", "col-lg-3 col-3", 4, "ngFor", "ngForOf"], [1, "row", "row-custom-gutter"], [1, "col-lg-6", "col-6", "bg-light-blue", "white-text-2", "text-center"], [1, "app-now-text"], [1, "col-lg-6", "col-6", "text-center"], [1, "brochure-text"], [1, "col-lg-3", "col-3"], [1, "small-img"], ["width", "30", "alt", "", 3, "src"], [1, "small-img-text", 3, "innerHtml"], [1, "text-center", 3, "innerHtml"], [1, "row-without-gutter", "row"], ["class", "col-lg-4 col-sm-6 col-12", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "card", "contact-card"], [1, "row", "m-0"], [1, "col-lg-12", "text-center", "card-header", "p-0", "cust-border"], [1, "col-lg-2", "col-sm-2", "col-2"], ["src", "../../assets/img/Study_Abroad_Icons/7.Study_Abroad_Exam/Logo.png", "alt", "", 1, "p-1", "logo-img"], [1, "col-lg-10", "col-sm-10", "col-10", "text-center", "pt-2"], [1, "white-text-2", "mt-0", "bold", "mb-0", 3, "innerHtml"], [1, "mb-0", "white-text-2", 3, "innerHtml"], [1, "row", "p-3"], [1, "card-footer", "cust-border-2"], [1, "row", "row-without-gutter", "mt-0"], [1, "btn", "btn-blue", "w-100", "white-text-2"], [1, "col-lg-6", "col-sm-6", "col-6", "text-center", "bg-white", "border-rad"], [1, "btn", "w-100"], ["id", "faq-tab", 1, "px-4"], ["id", "faq-collapse", "expandIcon", "pi pi-plus", "collapseIcon", "pi pi-minus", 3, "multiple"], [1, "col-lg-12", "text-center"], [1, "light-blue-text", "pt-3", 3, "innerHtml"], [1, "accordionTab", 3, "header", "selected"], [2, "font-weight", "bold", 3, "innerHtml"], ["class", "item study-div", 4, "ngFor", "ngForOf"], [1, "item", "study-div"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-12"], [1, "text-center"], [1, "pt-3", "mx-auto", "d-block", 3, "src"], [1, "img-text"], [1, "light-blue-text"], [1, "row", "row-without-gutter", "my-2", "blue-bg", "border-radius"], [1, "row", "row-without-gutter", "text-center", "p-4"], [1, "btn", "btn-orange2", "mx-auto", "d-block"]], template: function StudyContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 7)(9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2)(14, "div", 7)(15, "div", 12)(16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Top Courses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "MBBS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "MBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "B.Com/CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2)(29, "div", 7)(30, "div", 12)(31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Apply Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 16)(34, "div", 17)(35, "div", 7)(36, "div", 18)(37, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18)(42, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "International Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22)(47, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Average Cost Of Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, StudyContentComponent_div_51_Template, 17, 12, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.displayData.title, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.displayData.info, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.displayData.courseOffer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Courses Offered in ", ctx.displayData.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.displayData.internationalStudent, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.displayData.averageCost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.displayData.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_5__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_5__.AccordionTab], styles: [".study-abroad-banner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('study-banner-img.png');\n  background-repeat: no-repeat;\n}\n\n.study-abroad[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.light-gray-bg[_ngcontent-%COMP%] {\n  background-color: #e1e1e1;\n  padding: 1%;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  border: none !important;\n  color: #333333;\n  border-collapse: collapse;\n  margin: 14px;\n  width: 98% !important;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.border-radius[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.study-abroad-header[_ngcontent-%COMP%] {\n  padding: 5% 0%;\n}\n\n.cust-border[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.cust-border-2[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.contact-card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  border: 1px solid gray;\n  margin: 9%;\n  padding: 0px !important;\n}\n\n.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n  background-color: #2d57a7;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding: 0;\n  font-size: 14px;\n  border: 1px solid transparent;\n  float: left;\n  height: 4vh;\n  width: 96%;\n  background: #f1f1f1;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nform.exam-page-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n  width: 4%;\n  background: #1c4dc3;\n  color: white;\n  font-size: 17px;\n  border: 1px solid transparent;\n  border-left: none;\n  cursor: pointer;\n  height: 4vh;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.pill-div-course[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid orange;\n  color: orange;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 22px;\n  font-size: 10px;\n  font-weight: 900;\n}\n\n.flex-div[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n\n.cust-padding[_ngcontent-%COMP%] {\n  padding-right: 1%;\n  padding-top: 5px !important;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  text-overflow: -o-ellipsis-lastline;\n  font-size: 14px;\n  line-height: 1em;\n  top: 0;\n  margin: 0;\n  left: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.title[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  min-height: 40px;\n  width: 25%;\n  margin: 0px auto;\n}\n\n.btn-orange[_ngcontent-%COMP%] {\n  background-color: #ff7500;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px 17px;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n\n.pl-3[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.below-banner[_ngcontent-%COMP%] {\n  padding: 0% 3%;\n}\n\n.right-white-border[_ngcontent-%COMP%] {\n  border-right: 1px solid #fff;\n}\n\n.text-orange[_ngcontent-%COMP%] {\n  color: orangered;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #1b4a85;\n}\n\n.capital-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.border-right-blue[_ngcontent-%COMP%] {\n  border-right: 2px solid #1b4a85;\n  padding-right: 10px;\n}\n\n.blue-border[_ngcontent-%COMP%] {\n  border: 2px solid #1b4a85;\n  margin: 1%;\n  width: 25%;\n  margin-left: 4%;\n  margin-right: 4%;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n.p-custom[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.middle-img[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  display: block;\n  margin-top: 0px;\n  width: 50%;\n}\n\n.back-img[_ngcontent-%COMP%] {\n  background-image: url('Image.png');\n  height: 18vh;\n  background-position: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: 1px solid #000;\n  border-radius: 5px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.middle-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0px auto;\n  display: block;\n  margin-top: -35px;\n  border: 1px solid;\n  border-radius: 50%;\n  background-color: #fff;\n}\n\n.bg-light-blue[_ngcontent-%COMP%] {\n  background-color: #0c366a !important;\n}\n\n.colg-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 0px;\n}\n\n.colg-place[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-align: center;\n}\n\n.f-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.sec-text[_ngcontent-%COMP%] {\n  font-size: 7px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  text-align: center;\n}\n\n.small-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.small-img-text[_ngcontent-%COMP%] {\n  font-size: 7px;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid;\n  padding: 5px;\n  padding-bottom: 10px;\n  width: 80%;\n  margin: 3% auto;\n  position: relative;\n}\n\n.like-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6%;\n  right: 3%;\n  top: 3%;\n}\n\n.brochure-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n  line-height: normal;\n  padding-top: 4px;\n}\n\n.app-now-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n  line-height: normal;\n  padding: 5px;\n}\n\n.custom-padding-row[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.row-custom-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 11px !important;\n  --bs-gutter-y: 0 !important;\n  border: 1px solid gray;\n}\n\n.border-rad[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 5px;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.img-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12%;\n  left: 35%;\n  right: 35%;\n}\n\n.img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .img-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.img-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.owl-next[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5%;\n  top: 15%;\n  bottom: 35%;\n  font-size: 30px;\n  color: #13477e;\n}\n\n.blue-bg[_ngcontent-%COMP%] {\n  background-color: #8dc2f1;\n}\n\n.btn-orange2[_ngcontent-%COMP%] {\n  background-color: #ff7500;\n  color: #fff !important;\n  border-radius: 20px;\n  width: 30%;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .capital-img[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .study-div[_ngcontent-%COMP%] {\n    padding: 0% 10% !important;\n  }\n  .btn-orange2[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .flex-div[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .pill-div-course[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .f-12[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .btn-orange2[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .border-right-blue[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #1b4a85;\n    padding-bottom: 10px;\n    border-right: none !important;\n    padding-right: 0px !important;\n  }\n  form.exam-page-form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .mob-height[_ngcontent-%COMP%] {\n    height: 8vh;\n  }\n}\n\n.study-div[_ngcontent-%COMP%] {\n  padding: 0% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyx1REFBQTtFQUNBLDBCQUFBO0VBQ0ksNkNBQUE7RUFFQSw0QkFBQTtBQURMOztBQUdBO0VBQ0sseUJBQUE7RUFDQSxvQkFBQTtBQUFMOztBQUVBO0VBQ0sseUJBQUE7RUFDQSxXQUFBO0FBQ0w7O0FBT0E7RUFDSywwQkFBQTtFQUNELHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSko7O0FBTUM7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUhMOztBQUtBO0VBQ0ssbUJBQUE7QUFGTDs7QUFJQTtFQUNLLGNBQUE7QUFETDs7QUFHQztFQUNLLDJCQUFBO0VBQ0EsNEJBQUE7QUFBTjs7QUFFQztFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7QUFDTDs7QUFDQztFQUNLLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFFTjs7QUFBQzs7RUFFSSx5QkFBQTtBQUdMOztBQURDO0VBQ0ssV0FBQTtBQUlOOztBQUZDO0VBQW9CLFVBQUE7QUFNckI7O0FBTEM7RUFFUyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFPVjs7QUFMQztFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFRTDs7QUFOQztFQUNBLDZCQUFBO0VBQ0Msd0JBQUE7RUFDRCxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNEOztBQVBDO0VBQ0ssaUJBQUE7RUFDTCxhQUFBO0VBQ0MsdUJBQUE7QUFVRjs7QUFSQztFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7QUFXTDs7QUFUQTtFQUNLLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFZTDs7QUFWQTtFQUNLLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWFMOztBQVhDO0VBQ0kseUJBQUE7RUFDRCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSyxnQkFBQTtBQWVMOztBQWJBO0VBQ0ssY0FBQTtBQWdCTDs7QUFkQTtFQUNLLDRCQUFBO0FBaUJMOztBQWZBO0VBQ0ssZ0JBQUE7QUFrQkw7O0FBaEJBO0VBQ0ssY0FBQTtBQW1CTDs7QUFqQkE7RUFDSyxXQUFBO0FBb0JMOztBQWpCQTtFQUNLLCtCQUFBO0VBQ0EsbUJBQUE7QUFvQkw7O0FBbEJBO0VBQ0sseUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXFCTDs7QUFuQkE7RUFDSyxrQkFBQTtFQUNBLG1CQUFBO0FBc0JMOztBQXBCQTtFQUNLLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBdUJMOztBQXJCQTtFQUNLLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBd0JMOztBQXRCQTtFQUNLLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXlCTDs7QUF2QkE7RUFDSyxvQ0FBQTtBQTBCTDs7QUF4QkE7RUFDSyxlQUFBO0VBQ0Qsa0JBQUE7RUFDQSxrQkFBQTtBQTJCSjs7QUF6QkE7RUFDSyxlQUFBO0VBQ0Esa0JBQUE7QUE0Qkw7O0FBMUJBO0VBQVEsZUFBQTtBQThCUjs7QUE3QkE7RUFBVSxjQUFBO0FBaUNWOztBQWhDQTtFQUNLLGdCQUFBO0VBQ0Esa0JBQUE7QUFtQ0w7O0FBakNBO0VBQ0ssa0JBQUE7QUFvQ0w7O0FBbENBO0VBQ0ssY0FBQTtFQUNBLGtCQUFBO0FBcUNMOztBQW5DQztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBc0NMOztBQXBDQTtFQUNLLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBdUNMOztBQXJDQTtFQUNLLGVBQUE7RUFDQSxrQkFBQTtFQUNELG1CQUFBO0VBQ0EsZ0JBQUE7QUF3Q0o7O0FBdENBO0VBQ0ssZUFBQTtFQUNBLGtCQUFBO0VBQ0QsbUJBQUE7RUFDQSxZQUFBO0FBeUNKOztBQXZDQTtFQUNLLGlCQUFBO0VBQ0Esa0JBQUE7QUEwQ0w7O0FBeENBO0VBQ0ssOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBMkNMOztBQXpDQztFQUNJLCtCQUFBO0FBNENMOztBQTFDQTtFQUNJLFdBQUE7QUE2Q0o7O0FBeENBO0VBQ0ssa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNELFVBQUE7QUEyQ0o7O0FBekNBO0VBQ0ssa0JBQUE7QUE0Q0w7O0FBMUNBO0VBQ0ssZUFBQTtBQTZDTDs7QUExQ0E7RUFDSyxrQkFBQTtFQUNELFFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBNkNKOztBQTNDQTtFQUNLLHlCQUFBO0FBOENMOztBQTVDQTtFQUNLLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUErQ0w7O0FBN0NDO0VBQ0k7SUFDSyxpQkFBQTtFQWdEUjtFQTlDSTtJQUNJLDBCQUFBO0VBZ0RSO0VBOUNJO0lBQ0ssVUFBQTtFQWdEVDtBQUNGOztBQTlDQztFQUNJO0lBQ0ssY0FBQTtFQWdEUjtFQTlDSTtJQUNLLHFCQUFBO0VBZ0RUO0VBOUNJO0lBQ0ssZUFBQTtFQWdEVDtFQTlDSTtJQUNLLHNCQUFBO0VBZ0RUO0VBOUNJO0lBQ0ksZ0NBQUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7RUFnRFI7RUE5Q0k7SUFDSSxVQUFBO0VBZ0RSO0VBOUNJO0lBQ0ssV0FBQTtFQWdEVDtBQUNGOztBQTlDQztFQUNLLGNBQUE7QUFnRE4iLCJmaWxlIjoic3R1ZHktY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkeS1hYnJvYWQtYmFubmVye1xyXG4gICAgIC8vIGhlaWdodDo1MHZoIDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvU3R1ZHlfQ29udGVudF9JY29ucy8xLkhlYWRlci9zdHVkeS1iYW5uZXItaW1nLnBuZycpO1xyXG4gICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9TdHVkeV9Db250ZW50X0ljb25zLzEuSGVhZGVyL3N0dWR5LWJhbm5lci1pbWcucG5nJyk7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uc3R1ZHktYWJyb2Fke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxpZ2h0LWdyYXktYmd7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcclxuICAgICBwYWRkaW5nOjElXHJcbn1cclxuLy8gLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4vLyAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4vLyAgfVxyXG4vLyAgLnRhYmxlIHtcclxuLy8gICAgICB3aWR0aDoxMDAlXHJcbi8vIH1cclxuLnRhYmxlIHtcclxuICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luOiAxNHB4O1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgIHBhZGRpbmc6IDhweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTk1YjVjO1xyXG4gfVxyXG4uYm9yZGVyLXJhZGl1c3tcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zdHVkeS1hYnJvYWQtaGVhZGVye1xyXG4gICAgIHBhZGRpbmc6IDUlIDAlO1xyXG59XHJcbiAuY3VzdC1ib3JkZXJ7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuIH1cclxuIC5jdXN0LWJvcmRlci0ye1xyXG4gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gfVxyXG4gLmNvbnRhY3QtY2FyZHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gICAgICBtYXJnaW46OSU7XHJcbiAgICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnRcclxuIH1cclxuIC5jYXJkLWhlYWRlcixcclxuIC5jYXJkLWZvb3RlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ1N2E3O1xyXG4gfVxyXG4gLmNhcmQtZm9vdGVye1xyXG4gICAgICBwYWRkaW5nOiAwJTtcclxuIH1cclxuIGZvcm0uZXhhbS1wYWdlLWZvcm17d2lkdGg6NTAlfVxyXG4gZm9ybS5leGFtLXBhZ2UtZm9ybSBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgIFxyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGhlaWdodDo0dmg7XHJcbiAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG4gZm9ybS5leGFtLXBhZ2UtZm9ybSBidXR0b24ge1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiA0JTtcclxuICAgICBiYWNrZ3JvdW5kOiAjMWM0ZGMzO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIGhlaWdodDogNHZoO1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gfVxyXG4gLnBpbGwtZGl2LWNvdXJzZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHQgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyBcclxuXHRjb2xvcjogb3JhbmdlO1xyXG5cdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0bWFyZ2luOiA0cHggMnB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAyMnB4O1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRmb250LXdlaWdodDogOTAwO1xyXG4gfVxyXG4gLmZsZXgtZGl2e1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gfVxyXG4gLmN1c3QtcGFkZGluZ3tcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbi50aXRsZS10ZXh0IHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICB0ZXh0LW92ZXJmbG93OiAtby1lbGxpcHNpcy1sYXN0bGluZTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICB0b3A6IDA7XHJcbiAgICAgbWFyZ2luOjA7XHJcbiAgICAgbGVmdDogMDtcclxuICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICB3aWR0aDogMjUlO1xyXG4gICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiB9XHJcbiAuYnRuLW9yYW5nZXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NTAwO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnBsLTN7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG4uYmVsb3ctYmFubmVyIHtcclxuICAgICBwYWRkaW5nOjAlIDMlO1xyXG59XHJcbi5yaWdodC13aGl0ZS1ib3JkZXJ7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4udGV4dC1vcmFuZ2V7XHJcbiAgICAgY29sb3I6b3JhbmdlcmVkXHJcbn1cclxuLnRleHQtYmx1ZXtcclxuICAgICBjb2xvcjojMWI0YTg1XHJcbn1cclxuLmNhcGl0YWwtaW1ne1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgLy8gYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFiNGE4NTtcclxufVxyXG4uYm9yZGVyLXJpZ2h0LWJsdWV7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFiNGE4NTtcclxuICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuLmJsdWUtYm9yZGVyIHtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMWI0YTg1O1xyXG4gICAgIG1hcmdpbjogMSU7XHJcbiAgICAgd2lkdGg6IDI1JTtcclxuICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ucC1jdXN0b217XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm1pZGRsZS1pbWd7XHJcbiAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgIHdpZHRoOjUwJTtcclxufVxyXG4uYmFjay1pbWd7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL1N0dWR5X0NvbnRlbnRfSWNvbnMvNC5Vbml2ZXJzaXR5X2luX0NhbmFkYS9JbWFnZS5wbmcnKTtcclxuICAgICBoZWlnaHQ6IDE4dmg7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxufVxyXG4ubWlkZGxlLWltZyBpbWd7XHJcbiAgICAgd2lkdGg6NTAlO1xyXG4gICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW4tdG9wOi0zNXB4O1xyXG4gICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmJnLWxpZ2h0LWJsdWUge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzM2NmEgIWltcG9ydGFudDtcclxuIH1cclxuLmNvbGctbmFtZXtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNvbGctcGxhY2V7XHJcbiAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZi10ZXh0e2ZvbnQtc2l6ZTogMTBweDt9XHJcbi5zZWMtdGV4dHtmb250LXNpemU6IDdweDt9XHJcbi5zbWFsbC1pbWd7XHJcbiAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc21hbGwtaW1nIGltZ3tcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNtYWxsLWltZy10ZXh0e1xyXG4gICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gLmNhcmR7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICB3aWR0aDogODAlO1xyXG4gICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxpa2UtaW1ne1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB3aWR0aDo2JTtcclxuICAgICByaWdodDozJTtcclxuICAgICB0b3A6MyU7XHJcbn1cclxuLmJyb2NodXJlLXRleHR7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcbi5hcHAtbm93LXRleHR7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmN1c3RvbS1wYWRkaW5nLXJvd3tcclxuICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLnJvdy1jdXN0b20tZ3V0dGVyIHtcclxuICAgICAtLWJzLWd1dHRlci14OiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiB9XHJcbiAuYm9yZGVyLXJhZHtcclxuICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbn1cclxuLy8gLnN0dWR5LWRpdiBpbWd7XHJcbi8vICAgICAgd2lkdGg6NzAlXHJcbi8vIH1cclxuLmltZy10ZXh0e1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDEyJTtcclxuICAgICBsZWZ0OiAzNSU7XHJcbiAgICByaWdodDogMzUlO1xyXG59XHJcbi5pbWctdGV4dCBwLC5pbWctdGV4dCBoNntcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmltZy10ZXh0IHB7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ub3dsLW5leHR7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGJvdHRvbTogMzUlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMxMzQ3N2U7XHJcbn1cclxuLmJsdWUtYmd7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzJmMTtcclxufVxyXG4uYnRuLW9yYW5nZTIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDA7XHJcbiAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIHdpZHRoOiAzMCU7XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgICAgLmNhcGl0YWwtaW1nIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdHVkeS1kaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMCUgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1vcmFuZ2Uye1xyXG4gICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgfVxyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAuZmxleC1kaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnBpbGwtZGl2LWNvdXJzZXtcclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmYtMTJ7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tb3JhbmdlMntcclxuICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJvcmRlci1yaWdodC1ibHVle1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjRhODU7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtLmV4YW0tcGFnZS1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgICAgLm1vYi1oZWlnaHR7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA4dmg7XHJcbiAgICAgIH1cclxuIH1cclxuIC5zdHVkeS1kaXZ7XHJcbiAgICAgIHBhZGRpbmc6MCUgOCVcclxuIH0iXX0= */"] });


/***/ }),

/***/ 62246:
/*!*******************************************************!*\
  !*** ./src/app/study-content/study-content.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyContentModule": () => (/* binding */ StudyContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _study_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-content-routing.module */ 70389);
/* harmony import */ var _study_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-content.component */ 98500);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








// import { NgxGalleryModule } from 'ngx-gallery';
class StudyContentModule {
}
StudyContentModule.ɵfac = function StudyContentModule_Factory(t) { return new (t || StudyContentModule)(); };
StudyContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StudyContentModule });
StudyContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _study_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyContentRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StudyContentModule, { declarations: [_study_content_component__WEBPACK_IMPORTED_MODULE_1__.StudyContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _study_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudyContentRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__.OwlModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule] }); })();


/***/ }),

/***/ 98072:
/*!**************************************!*\
  !*** ./src/assets/study-con/demo.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demo": () => (/* binding */ demo)
/* harmony export */ });
const demo = {
    title: ' Demo',
    info: 'This is a Test file for Study Content',
    courseOffer: '1000',
    internationalStudent: '10',
    averageCost: 'INR 200,000',
    data: [
        {
            type: 'table',
            title: "The Marathwada Mitra Mandal's Institute of Technology, Lohegaon, - Quick Highlights",
            info: 'Before applying, the candidate must know the following information to gain a better understanding of the Institute:',
            col: [
                'Course Name',
                'Duration',
                'Annual Fees',
                'Program Type',
                'Seat Intake',
                'Action',
            ],
            row: [
                {
                    'Course Name': '<ul><li>B Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '?1.65 Lakhs (1st Year Fees)',
                    'Program Type': "<a href=''> online NEFT/RTGS, NFT banking debit card ,credit card</a>",
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>B Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '?1.65 Lakhs (1st Year Fees)',
                    'Program Type': 'online NEFT/RTGS, NFT banking(debit card credit card)',
                    'Seat Intake': 'not allowed',
                },
                {
                    'Course Name': '<ul><li>B Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '?1.65 Lakhs (1st Year Fees)',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>B Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '1.65 Lakhs (1st Year Fees)',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>BBA</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '310,000',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>BBA</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '310,000',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>M Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '93,619',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
                {
                    'Course Name': '<ul><li>M Tech</li></ul>',
                    Duration: 'Vishwakarma Institute of Information Technology - Pune',
                    'Annual Fees': '93,619',
                    'Program Type': 'online NEFT/RTGS, NFT banking debit card ,credit card',
                    'Seat Intake': 'allowed',
                },
            ],
        },
        {
            type: 'img',
            title: 'Short Image',
            info: '',
            data: '../../assets/img/College.jpg',
        },
        {
            type: 'list-bollet',
            title: " Benefits of joining The Marathwada Mitra Mandal's Institute of Technology, Lohegaon,",
            data: [
                'The administration of MMIT Lohgaon is excellent. Seminars, conferences, and industry visits are often organized.',
                'Wi-Fi is available throughout the campus.',
                'The teaching and non-teaching faculties are all very helpful, and knowledgeable.',
                'The infrastructure is good and clean.',
                'Medical, library, auditorium, AC classrooms, sports, hostel, cafeteria, and other services are available to students at the institute.',
                'MMIT Lohgaon has a good placement rate.',
                'The institute has signed lots of MOUs with many industries.',
                'MMIT Lohgaon provides special Efforts for Advanced and Slow Learners.',
            ],
        },
        {
            type: 'number-list',
            title: 'Departments',
            info: 'The departments at MMIT Lohegaon are listed below',
            data: [
                'Department of Mechanical Engineering',
                'Department of Civil Engineering',
                'Department of Computer Engineering',
                'Department of Engineering Sciences',
                'Department of Mechatronics Engineering',
                'Department of Artificial Intelligence & Data Science',
            ],
        },
        {
            type: 'text',
            title: 'Study In Demo',
            info: '<h3 _ngcontent-wnj-c2="" class="light-blue-text">costs, Top Universities, Applications, Deadlines, Visa Process &amp; Job Opportunities</h3>',
            data: '<p _ngcontent-wnj-c2="" class="text-justify">nternational students from countries like India, China, and Korea contributing to a major part of the international population planning to study in Canada. Amongst all the countries, the majority of international students in Canada are Indian nationals, followed by Chinese. Indian students in Canada secured from 52,645 study permits in 2016 to 115,000 permits in 2021. Know: Why Canada is preferred over USA?</p><p _ngcontent-wnj-c2="" class="text-justify"> Over the past decade, foreign students have been flocking to study in Canada, especially from Asian countries like India and China. Currently, the number of students holding Canada student visa is around 650,000. As per IRCC reports, the number of applications to study in Canada in until August 2021 is over 730,000, which is more than the enrollment in the entire 2020. In 2020, the number of applications to study in Canada de- creased to 530,540 as compared to 638,960 in 2019. </p>',
        },
        {
            type: 'sm-card',
            title: '<h3 _ngcontent-wnj-c2="" class="light-blue-text my-3">Study Destination</h3>',
            info: '<p>Testing </p>',
            data: [
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="light-blue-text">Capital</h5>',
                    info: '<h6 _ngcontent-wnj-c2="">Ottawa</h6>',
                },
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="light-blue-text">Capital</h5>',
                    info: '<h6 _ngcontent-wnj-c2="">Ottawa</h6>',
                },
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="light-blue-text">Capital</h5>',
                    info: '<h6 _ngcontent-wnj-c2="">Ottawa</h6>',
                },
            ],
        },
        {
            type: 'icon-img',
            title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text text-center py-3"><b _ngcontent-wnj-c2="">Choose a Domain or Cource</b></h2>',
            info: '<p>Testing </p>',
            data: [
                {
                    title: '<b _ngcontent-wnj-c2="">Science</b>',
                    info: '<p _ngcontent-wnj-c2="">3945 Colleges</p>',
                    img: 'http://localhost:4200/assets/img/Home%20Page/3.%20Domain%20or%20Course/Science.png',
                },
                {
                    title: '<b _ngcontent-wnj-c2="">Science</b>',
                    info: '<p _ngcontent-wnj-c2="">3945 Colleges</p>',
                    img: 'http://localhost:4200/assets/img/Home%20Page/3.%20Domain%20or%20Course/Science.png',
                },
                {
                    title: '<b _ngcontent-wnj-c2="">Science</b>',
                    info: '<p _ngcontent-wnj-c2="">3945 Colleges</p>',
                    img: 'http://localhost:4200/assets/img/Home%20Page/3.%20Domain%20or%20Course/Science.png',
                },
            ],
        },
        {
            type: 'bg-card',
            title: '<h4 _ngcontent-wnj-c2="" class="text-center light-blue-text my-3"> Univerity In Canada</h4>',
            info: '<p>Testing </p>',
            data: [
                {
                    title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text colg-name">Monroe College</h2>',
                    subtitle: '<h5 _ngcontent-wnj-c2="" class="colg-place">Callfornia</h5>',
                    leftval: '$800',
                    leftvalinfo: 'test',
                    rightval: 'Rank15',
                    rightvalinfo: 'test2',
                    backimg: 'http://localhost:4200/Image.png',
                    clgimg: 'http://localhost:4200/assets/img/filter2.png',
                    innerIcon: [
                        {
                            img: 'http://localhost:4200/assets/img/Study_Content_Icons/4.University_in_Canada/Addmission.png',
                            title: 'Admission',
                        },
                    ],
                },
                {
                    title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text colg-name">Monroe College</h2>',
                    subtitle: '<h5 _ngcontent-wnj-c2="" class="colg-place">Callfornia</h5>',
                    leftval: '$800',
                    rightval: 'Rank15',
                    innerIcon: [
                        {
                            img: 'http://localhost:4200/assets/img/Study_Content_Icons/4.University_in_Canada/Addmission.png',
                            title: 'Admission',
                        },
                    ],
                },
                {
                    title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text colg-name">Monroe College</h2>',
                    subtitle: '<h5 _ngcontent-wnj-c2="" class="colg-place">Callfornia</h5>',
                    leftval: '$800',
                    rightval: 'Rank15',
                    innerIcon: [
                        {
                            img: 'http://localhost:4200/assets/img/Study_Content_Icons/4.University_in_Canada/Addmission.png',
                            title: 'Admission',
                        },
                    ],
                },
            ],
        },
        {
            type: 'exam-card',
            title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text text-center py-3"><b _ngcontent-wnj-c2="">Study Canada Exam</b></h2>',
            info: '<p _ngcontent-wnj-c2="" class="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>',
            data: [
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="white-text-2 mt-0 bold mb-0">JEE Main</h5>',
                    info: '<p _ngcontent-wnj-c2="" class="mb-0 white-text-2">Written Test</p>',
                    text: '<p _ngcontent-wnj-c2="">Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n</p>',
                },
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="white-text-2 mt-0 bold mb-0">JEE Main</h5>',
                    info: '<p _ngcontent-wnj-c2="" class="mb-0 white-text-2">Written Test</p>',
                    text: '<p _ngcontent-wnj-c2="">Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n</p>',
                },
                {
                    title: '<h5 _ngcontent-wnj-c2="" class="white-text-2 mt-0 bold mb-0">JEE Main</h5>',
                    info: '<p _ngcontent-wnj-c2="" class="mb-0 white-text-2">Written Test</p>',
                    text: '<p _ngcontent-wnj-c2="">Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy n</p>',
                },
            ],
        },
        {
            type: 'question-list',
            title: 'All India Institute of Medical Science, Delhi (AIIMS) - Important FAQs',
            info: 'Apart from the information provided, here are some frequently asked questions on Quora and Careers 360:',
            data: [
                {
                    ques: 'Q. What medium of teaching for medicine course at All India Institute of Medical Science, New Delhi?',
                    ans: "<a href=''>The English language is used as a medium of teaching for MBBS education at All India Institute of Medical Science, New Delhi, so the students will never face any language barrier.</a>",
                },
                {
                    ques: 'Q. Is there any entrance exam qualification is necessary for MBBS admission at All India Institute of Medical Science, New Delhi?',
                    ans: "No, the students don't need to appear for any university entrance exam to enroll in the MBBS course at All India Institute of Medical Science, New Delhi.",
                },
                {
                    ques: 'Q. Is the All India Institute of Medical Science, New Delhi is recognized?',
                    ans: 'All India Institute of Medical Science, New Delhi is officially recognized by the National Medical Commission (NMC) and the World Health Organisation (WHO).',
                },
                {
                    ques: 'Q. Is the medical degree valid in other countries after completing MBBS education from All India Institute of Medical Science, New Delhi?',
                    ans: 'Yes, The MBBS degree is eligible to practice in other countries after clearing the NMC screening test.',
                },
                {
                    ques: 'Q. What is the MBBS course duration in the All India Institute of Medical Science, New Delhi?',
                    ans: 'All India Institute of Medical Science, New Delhi Offers 5.5 years of MBBS course followed by 1 year of mandatory Internship.',
                },
                {
                    ques: 'Q. Is there any residential facility available at All India Institute of Medical Science, New Delhi?',
                    ans: 'All India Institute of Medical Sciences provides numerous hostel facilities for undergraduate and postgraduate students, PhD scholars, and resident doctors along with all basic required facilities like mess, internet, security, electricity, and many more at the comfort zone of students.',
                },
                {
                    ques: 'Q. Is there availability of an Internet facility at All India Institute of Medical Science, New Delhi?',
                    ans: 'Yes, the university campus is wifi enabled and provides a high-speed network of internet to the students round the clock.',
                },
            ],
        },
        {
            type: 'img-card',
            title: '<h2 _ngcontent-wnj-c2="" class="light-blue-text text-center py-3"><b _ngcontent-wnj-c2="">Explore More Destinations</b></h2>',
            info: '<p>Testing </p>',
            data: [
                {
                    title: '<h6 _ngcontent-wnj-c2="">USA</h6>',
                    img: 'http://localhost:4200/assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png',
                },
                {
                    title: '<h6 _ngcontent-wnj-c2="">USA</h6>',
                    img: 'http://localhost:4200/assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png',
                },
                {
                    title: '<h6 _ngcontent-wnj-c2="">USA</h6>',
                    img: 'http://localhost:4200/assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png',
                },
            ],
        },
        {
            type: 'session-type',
            title: '<h5 _ngcontent-wnj-c2="">Make Your Dream To Study In The Canada</h5>',
            info: '<p _ngcontent-wnj-c2="" class="light-blue-text">A Reality With Our Experts!</p>',
        },
    ],
};


/***/ })

}]);
//# sourceMappingURL=src_app_study-content_study-content_module_ts.js.map