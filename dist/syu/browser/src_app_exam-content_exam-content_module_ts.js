"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_exam-content_exam-content_module_ts"],{

/***/ 64029:
/*!**************************************!*\
  !*** ./src/app/exam-content/data.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIT": () => (/* reexport module object */ _assets_collegeData_MIT__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "acharyainstituteoftechnology": () => (/* reexport module object */ _assets_collegeData_acharya_institute_of_technology_ait_bangalore__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "allindiainstituteofmedicalsciencedelhi": () => (/* reexport module object */ _assets_collegeData_all_india_institute_of_medical_sciences_aiims_new_delhi__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "amityglobalbusinessschool": () => (/* reexport module object */ _assets_collegeData_amity_global_business_school_agbs_pune__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "amityinstituteofinformationtechnologymumbai": () => (/* reexport module object */ _assets_collegeData_amity_institute_of_information_technology_aiit_mumbai__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "fmgeexam": () => (/* reexport module object */ _assets_examData_fmge_exam__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "internationalfoundationofmedicineifom": () => (/* reexport module object */ _assets_examData_international_foundation_of_medicine_ifom__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "neetpgexam": () => (/* reexport module object */ _assets_examData_neet_pg_exam__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "neetugexam": () => (/* reexport module object */ _assets_examData_neet_ug_exam__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _assets_collegeData_MIT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/collegeData/MIT */ 7541);
/* harmony import */ var _assets_collegeData_acharya_institute_of_technology_ait_bangalore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/collegeData/acharya-institute-of-technology-ait-bangalore */ 82675);
/* harmony import */ var _assets_collegeData_all_india_institute_of_medical_sciences_aiims_new_delhi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/collegeData/all-india-institute-of-medical-sciences-aiims-new-delhi */ 41048);
/* harmony import */ var _assets_collegeData_amity_global_business_school_agbs_pune__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/collegeData/amity-global-business-school-agbs-pune */ 42222);
/* harmony import */ var _assets_collegeData_amity_institute_of_information_technology_aiit_mumbai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/collegeData/amity-institute-of-information-technology-aiit-mumbai */ 11825);
/* harmony import */ var _assets_examData_neet_pg_exam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/examData/neet-pg-exam */ 86204);
/* harmony import */ var _assets_examData_fmge_exam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/examData/fmge-exam */ 26661);
/* harmony import */ var _assets_examData_neet_ug_exam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/examData/neet-ug-exam */ 4292);
/* harmony import */ var _assets_examData_international_foundation_of_medicine_ifom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/examData/international-foundation-of-medicine-ifom */ 88796);












/***/ }),

/***/ 2462:
/*!*************************************************************!*\
  !*** ./src/app/exam-content/exam-content-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamContentRoutingModule": () => (/* binding */ ExamContentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _exam_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-content.component */ 44038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT/info',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT/exam-date',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT/syllabus',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT/cut-off',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'MIT/faq',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam/info',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam/exam-date',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam/syllabus',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam/cut-off',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-pg-exam/faq',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam/info',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam/exam-date',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam/syllabus',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam/cut-off',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'fmge-exam/faq',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam/info',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam/exam-date',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam/syllabus',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam/cut-off',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'neet-ug-exam/faq',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom/info',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom/exam-date',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom/syllabus',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom/cut-off',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
    {
        path: 'international-foundation-of-medicine-ifom/faq',
        component: _exam_content_component__WEBPACK_IMPORTED_MODULE_0__.ExamContentComponent
    },
];
class ExamContentRoutingModule {
}
ExamContentRoutingModule.ɵfac = function ExamContentRoutingModule_Factory(t) { return new (t || ExamContentRoutingModule)(); };
ExamContentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExamContentRoutingModule });
ExamContentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExamContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 44038:
/*!********************************************************!*\
  !*** ./src/app/exam-content/exam-content.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamContentComponent": () => (/* binding */ ExamContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-gallery */ 58462);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 64029);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 55197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ 51491);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ 79854);












const _c0 = ["stickyNav"];
const _c1 = ["stickyDiv"];
function ExamContentComponent_div_48_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} }
function ExamContentComponent_div_48_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_div_48_div_1_div_1_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.isReadMore ? "See More" : "See Less", " ");
} }
const _c2 = function (a0) { return { limitTextHeight: a0 }; };
function ExamContentComponent_div_48_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_48_div_1_div_1_div_4_Template, 1, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_48_div_1_div_1_div_5_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r8.isReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.isShade && item_r7.seeMoreBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.seeMoreBtn);
} }
function ExamContentComponent_div_48_div_1_div_2_p_5_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const checklists_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](checklists_r24);
} }
function ExamContentComponent_div_48_div_1_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 58)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_48_div_1_div_2_p_5_li_5_Template, 2, 1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qna_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", qna_r22.ques);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qna_r22.ans);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", qna_r22.checklist);
} }
function ExamContentComponent_div_48_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p-accordion", 54)(2, "div", 55)(3, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_48_div_1_div_2_p_5_Template, 6, 4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.data);
} }
function ExamContentComponent_div_48_div_1_div_5_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r28, " ");
} }
function ExamContentComponent_div_48_div_1_div_5_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r31 = ctx.$implicit;
    const Tableitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r29[TableItems_r31], " ");
} }
function ExamContentComponent_div_48_div_1_div_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_48_div_1_div_5_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.col);
} }
function ExamContentComponent_div_48_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_48_div_1_div_5_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_48_div_1_div_5_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Apply Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.row);
} }
function ExamContentComponent_div_48_div_1_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Listitem_r36);
} }
function ExamContentComponent_div_48_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_48_div_1_div_6_li_4_Template, 2, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.data);
} }
function ExamContentComponent_div_48_div_1_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r39);
} }
function ExamContentComponent_div_48_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_48_div_1_div_7_li_4_Template, 3, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.data);
} }
function ExamContentComponent_div_48_div_1_div_8_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ol", 65)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r42);
} }
function ExamContentComponent_div_48_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_48_div_1_div_8_ol_3_Template, 3, 1, "ol", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r7.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r7.data);
} }
function ExamContentComponent_div_48_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r7.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ExamContentComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_48_div_1_div_1_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExamContentComponent_div_48_div_1_div_2_Template, 6, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_48_div_1_div_5_Template, 12, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_48_div_1_div_6_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExamContentComponent_div_48_div_1_div_7_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_48_div_1_div_8_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExamContentComponent_div_48_div_1_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type === "faq-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "step-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r7.type == "img");
} }
function ExamContentComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_48_div_1_Template, 10, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.collegeData.info);
} }
function ExamContentComponent_div_49_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} }
function ExamContentComponent_div_49_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_div_49_div_1_div_1_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r59.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r58.isReadMore ? "See More" : "See Less", " ");
} }
function ExamContentComponent_div_49_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_49_div_1_div_1_div_4_Template, 1, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_49_div_1_div_1_div_5_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r47.isReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r47.isShade && item_r46.seeMoreBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.seeMoreBtn);
} }
function ExamContentComponent_div_49_div_1_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 58)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qna_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", qna_r63.ques);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qna_r63.ans);
} }
function ExamContentComponent_div_49_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p-accordion", 54)(2, "div", 55)(3, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_49_div_1_div_2_p_5_Template, 4, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r46.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.data);
} }
function ExamContentComponent_div_49_div_1_div_5_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r67, " ");
} }
function ExamContentComponent_div_49_div_1_div_5_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r70 = ctx.$implicit;
    const Tableitem_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r68[TableItems_r70], " ");
} }
function ExamContentComponent_div_49_div_1_div_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_49_div_1_div_5_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.col);
} }
function ExamContentComponent_div_49_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_49_div_1_div_5_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_49_div_1_div_5_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Apply Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.row);
} }
function ExamContentComponent_div_49_div_1_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Listitem_r75);
} }
function ExamContentComponent_div_49_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_49_div_1_div_6_li_4_Template, 2, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.data);
} }
function ExamContentComponent_div_49_div_1_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r78);
} }
function ExamContentComponent_div_49_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_49_div_1_div_7_li_4_Template, 3, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.data);
} }
function ExamContentComponent_div_49_div_1_div_8_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ol", 65)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r81);
} }
function ExamContentComponent_div_49_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_49_div_1_div_8_ol_3_Template, 3, 1, "ol", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r46.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r46.data);
} }
function ExamContentComponent_div_49_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r46.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ExamContentComponent_div_49_div_1_div_12_table_1_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Apply Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r88.cSpecialzation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r88.cDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r88.cFees);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r88.cCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r88.cProgrammeType);
} }
function ExamContentComponent_div_49_div_1_div_12_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Annual Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Program Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Seat Intake");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ExamContentComponent_div_49_div_1_div_12_table_1_tr_15_Template, 14, 5, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r85 = ctx.$implicit;
    const i_r86 = ctx.index;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r84.CoursesFees[i_r86][0] == null ? null : ctx_r84.CoursesFees[i_r86][0].cCourse, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r85);
} }
function ExamContentComponent_div_49_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_49_div_1_div_12_table_1_Template, 16, 2, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r56.CoursesFees);
} }
function ExamContentComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_49_div_1_div_1_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExamContentComponent_div_49_div_1_div_2_Template, 6, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_49_div_1_div_5_Template, 12, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_49_div_1_div_6_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExamContentComponent_div_49_div_1_div_7_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_49_div_1_div_8_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExamContentComponent_div_49_div_1_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ExamContentComponent_div_49_div_1_div_12_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type === "faq-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "step-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r46.type == "api-table");
} }
function ExamContentComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_49_div_1_Template, 13, 8, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.collegeData == null ? null : ctx_r2.collegeData.coursesandfees);
} }
function ExamContentComponent_div_50_div_1_div_3_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r104, " ");
} }
function ExamContentComponent_div_50_div_1_div_3_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r107 = ctx.$implicit;
    const Tableitem_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r105[TableItems_r107], " ");
} }
function ExamContentComponent_div_50_div_1_div_3_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_50_div_1_div_3_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
} }
function ExamContentComponent_div_50_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_50_div_1_div_3_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_50_div_1_div_3_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r92.eventaddmission);
} }
function ExamContentComponent_div_50_div_1_div_4_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r113, " ");
} }
function ExamContentComponent_div_50_div_1_div_4_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r116 = ctx.$implicit;
    const Tableitem_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r114[TableItems_r116], " ");
} }
function ExamContentComponent_div_50_div_1_div_4_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_50_div_1_div_4_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
} }
function ExamContentComponent_div_50_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_50_div_1_div_4_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_50_div_1_div_4_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r93.courseaddmission);
} }
function ExamContentComponent_div_50_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} }
function ExamContentComponent_div_50_div_1_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_div_50_div_1_div_5_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r122.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r121.isReadMore ? "See More" : "See Less", " ");
} }
function ExamContentComponent_div_50_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_50_div_1_div_5_div_4_Template, 1, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_50_div_1_div_5_div_5_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r94.isReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r94.isShade && item_r90.seeMoreBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.seeMoreBtn);
} }
function ExamContentComponent_div_50_div_1_div_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 58)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qna_r126 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", qna_r126.ques);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qna_r126.ans);
} }
function ExamContentComponent_div_50_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p-accordion", 54)(2, "div", 55)(3, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_50_div_1_div_6_p_5_Template, 4, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r90.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.data);
} }
function ExamContentComponent_div_50_div_1_div_9_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r130, " ");
} }
function ExamContentComponent_div_50_div_1_div_9_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r133 = ctx.$implicit;
    const Tableitem_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r131[TableItems_r133], " ");
} }
function ExamContentComponent_div_50_div_1_div_9_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_50_div_1_div_9_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
} }
function ExamContentComponent_div_50_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_50_div_1_div_9_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_50_div_1_div_9_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.row);
} }
function ExamContentComponent_div_50_div_1_div_10_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r138 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Listitem_r138);
} }
function ExamContentComponent_div_50_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_50_div_1_div_10_li_4_Template, 2, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.data);
} }
function ExamContentComponent_div_50_div_1_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r141);
} }
function ExamContentComponent_div_50_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_50_div_1_div_11_li_4_Template, 3, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.data);
} }
function ExamContentComponent_div_50_div_1_div_12_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ol", 65)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r144 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r144);
} }
function ExamContentComponent_div_50_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_50_div_1_div_12_ol_3_Template, 3, 1, "ol", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r90.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r90.data);
} }
function ExamContentComponent_div_50_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r90.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ExamContentComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_50_div_1_div_3_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_50_div_1_div_4_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_50_div_1_div_5_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_50_div_1_div_6_Template, 6, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExamContentComponent_div_50_div_1_div_9_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ExamContentComponent_div_50_div_1_div_10_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ExamContentComponent_div_50_div_1_div_11_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ExamContentComponent_div_50_div_1_div_12_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ExamContentComponent_div_50_div_1_div_13_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "api-table" && item_r90.useOf == "Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "api-table" && item_r90.useOf == "Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type === "faq-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "step-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r90.type == "img");
} }
function ExamContentComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_50_div_1_Template, 14, 9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.collegeData.addmission);
} }
function ExamContentComponent_div_51_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} }
function ExamContentComponent_div_51_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_div_51_div_1_div_1_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r159.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r158.isReadMore ? "See More" : "See Less", " ");
} }
function ExamContentComponent_div_51_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_51_div_1_div_1_div_4_Template, 1, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_51_div_1_div_1_div_5_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r149.isReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r149.isShade && item_r148.seeMoreBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.seeMoreBtn);
} }
function ExamContentComponent_div_51_div_1_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 58)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qna_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", qna_r163.ques);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qna_r163.ans);
} }
function ExamContentComponent_div_51_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p-accordion", 54)(2, "div", 55)(3, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_51_div_1_div_2_p_5_Template, 4, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r148.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.data);
} }
function ExamContentComponent_div_51_div_1_div_5_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r167, " ");
} }
function ExamContentComponent_div_51_div_1_div_5_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r170 = ctx.$implicit;
    const Tableitem_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r168[TableItems_r170], " ");
} }
function ExamContentComponent_div_51_div_1_div_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_51_div_1_div_5_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.col);
} }
function ExamContentComponent_div_51_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_51_div_1_div_5_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_51_div_1_div_5_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.row);
} }
function ExamContentComponent_div_51_div_1_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Listitem_r175);
} }
function ExamContentComponent_div_51_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_51_div_1_div_6_li_4_Template, 2, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.data);
} }
function ExamContentComponent_div_51_div_1_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r178);
} }
function ExamContentComponent_div_51_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_51_div_1_div_7_li_4_Template, 3, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.data);
} }
function ExamContentComponent_div_51_div_1_div_8_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ol", 65)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r181);
} }
function ExamContentComponent_div_51_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_51_div_1_div_8_ol_3_Template, 3, 1, "ol", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r148.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r148.data);
} }
function ExamContentComponent_div_51_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r148.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ExamContentComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_51_div_1_div_1_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExamContentComponent_div_51_div_1_div_2_Template, 6, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_51_div_1_div_5_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_51_div_1_div_6_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExamContentComponent_div_51_div_1_div_7_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_51_div_1_div_8_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExamContentComponent_div_51_div_1_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type === "faq-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "step-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r148.type == "img");
} }
function ExamContentComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_51_div_1_Template, 10, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.collegeData.Reviews);
} }
function ExamContentComponent_div_52_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 51);
} }
function ExamContentComponent_div_52_div_1_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_div_52_div_1_div_1_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r197); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r196.showText()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r195.isReadMore ? "See More" : "See Less", " ");
} }
function ExamContentComponent_div_52_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_52_div_1_div_1_div_4_Template, 1, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_52_div_1_div_1_div_5_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx_r186.isReadMore));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r186.isShade && item_r185.seeMoreBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.seeMoreBtn);
} }
function ExamContentComponent_div_52_div_1_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p")(1, "p-accordionTab", 58)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const qna_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("header", qna_r200.ques);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](qna_r200.ans);
} }
function ExamContentComponent_div_52_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "p-accordion", 54)(2, "div", 55)(3, "h2", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_52_div_1_div_2_p_5_Template, 4, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r185.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.data);
} }
function ExamContentComponent_div_52_div_1_div_5_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", TableItems_r204, " ");
} }
function ExamContentComponent_div_52_div_1_div_5_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const TableItems_r207 = ctx.$implicit;
    const Tableitem_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", Tableitem_r205[TableItems_r207], " ");
} }
function ExamContentComponent_div_52_div_1_div_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_52_div_1_div_5_tr_8_td_1_Template, 2, 1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.col);
} }
function ExamContentComponent_div_52_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 62)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_52_div_1_div_5_th_6_Template, 2, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_52_div_1_div_5_tr_8_Template, 2, 1, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.col);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.row);
} }
function ExamContentComponent_div_52_div_1_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Listitem_r212 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](Listitem_r212);
} }
function ExamContentComponent_div_52_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_52_div_1_div_6_li_4_Template, 2, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.data);
} }
function ExamContentComponent_div_52_div_1_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r215);
} }
function ExamContentComponent_div_52_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExamContentComponent_div_52_div_1_div_7_li_4_Template, 3, 1, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.data);
} }
function ExamContentComponent_div_52_div_1_div_8_ol_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ol", 65)(1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const numbetList_r218 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numbetList_r218);
} }
function ExamContentComponent_div_52_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "h2", 47)(2, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExamContentComponent_div_52_div_1_div_8_ol_3_Template, 3, 1, "ol", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.title, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r185.info, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r185.data);
} }
function ExamContentComponent_div_52_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r185.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ExamContentComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_52_div_1_div_1_Template, 6, 7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExamContentComponent_div_52_div_1_div_2_Template, 6, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExamContentComponent_div_52_div_1_div_5_Template, 9, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExamContentComponent_div_52_div_1_div_6_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExamContentComponent_div_52_div_1_div_7_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ExamContentComponent_div_52_div_1_div_8_Template, 4, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExamContentComponent_div_52_div_1_div_9_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type === "question-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "list-bollet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "number-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "step-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r185.type == "img");
} }
function ExamContentComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExamContentComponent_div_52_div_1_Template, 10, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.collegeData.faq);
} }
const _c3 = function (a1) { return { "nav-link": true, active: a1 }; };
class ExamContentComponent {
    constructor(viewportScroller, router, title, meta, api, sanitizer, dom) {
        this.viewportScroller = viewportScroller;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.api = api;
        this.sanitizer = sanitizer;
        this.dom = dom;
        this.isReadMore = true;
        this.isShade = true;
        this.sticky = false;
        this.stickyDiv = false;
        this.activeTab = 'tab1';
        this.activSubTab = 'tab1';
        this.CoursesFees = [];
        this.eventaddmission = [];
        this.courseaddmission = [];
        this.placement = [];
        this.news = [];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
    isActive(tabName) {
        return this.activeTab === tabName;
    }
    photoURL(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url + "&output=embed");
    }
    makeActive(tab) {
        console.log('tab', tab);
        console.log('this.url', this.url);
        if (this.url.length > 3) {
            if (tab === 'info') {
                this.router.navigate(['exams/' + this.url[2]]);
            }
            else if (tab === 'qna') {
                this.router.navigate(['exams/' + this.url[2] + '/' + 'faq']);
            }
            else {
                this.router.navigate(['exams/' + this.url[2] + '/' + tab]);
            }
        }
        else {
            this.router.navigate(['exams/' + this.currentUrl + '/' + tab]);
        }
        this.activeTab = tab;
        window.scroll({
            top: 425,
            left: 0,
            behavior: 'smooth'
        });
    }
    makeActiveTab(tab) {
        this.activeTab = tab;
    }
    isActiveSubTab(tabName) {
        return this.activSubTab === tabName;
    }
    makeActiveSubTab(tab) {
        this.activSubTab = tab;
        window.scroll({
            top: 425,
            left: 0,
            behavior: 'smooth'
        });
    }
    makeActiveTabSub(tab) {
        this.activSubTab = tab;
    }
    // sub Tab End
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
        // console.log($element);
        $element.scrollIntoView({ behavior: "smooth" });
    }
    createLinkForCanonicalURL() {
        if (this.link === undefined) {
            this.collegeData.info.forEach(info => {
                if (info.type === 'link') {
                    info.data.forEach(lin => {
                        this.link = this.dom.createElement('link');
                        this.link.setAttribute('rel', lin.rel);
                        this.dom.head.appendChild(this.link);
                        this.link.setAttribute('href', lin.href);
                    });
                }
            });
        }
    }
    getNews(url) {
        this.api.get(`syudynamicnews/${url}`).subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                this.news = res.object;
                console.log('this.news: ', this.news);
            }
        });
    }
    getGallery(url) {
        this.api.get(`syudynamicimage/${url}`).subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                let courceName = [];
                courceName = res.object.map(function (obj) {
                    return obj.cCategory;
                });
                courceName = [...new Set(courceName)];
                let data = {
                    image: [],
                    video: []
                };
                res.object.forEach((obj, i) => {
                    if (obj.cContentType === 'Image') {
                        data.image.push(obj);
                    }
                    else {
                        data.video.push(obj);
                    }
                });
                console.log('data: ', data);
                console.log('courceName: ', courceName);
                courceName.forEach((cname, id) => {
                    data.image.forEach((obj, i) => {
                        if (cname === obj.cCategory) {
                            data.image.push(obj);
                        }
                    });
                });
                this.galleryType = courceName;
                data.video.forEach(vd => {
                    let url = vd.cImageUrl;
                    // let spliturl = Array.from(url)
                    console.log('test', url.split("/"));
                });
                this.gallery = data;
                console.log('data: ', data);
                console.log('this.placement: ', this.gallery);
            }
        });
    }
    getplaceMent(url) {
        this.api.get(`collegeplacementmaster/${url}`).subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                this.placement.push(res.object[0]);
                console.log('this.placement: ', this.placement);
            }
        });
    }
    getaddmission(url) {
        this.api.get(`syudadmissionmaster/${url}`).subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                res.object.forEach(evn => {
                    this.eventaddmission.push({ Events: evn.cEvents, 'Important Dates': evn.cImportantDates });
                    this.courseaddmission.push({ Course: 'Test', 'Exam Accepted': evn.cExamAccepted });
                });
                console.log('this.eventaddmission: ', this.eventaddmission);
                console.log('this.courseaddmission: ', this.courseaddmission);
            }
        });
    }
    getCoursesFees(url) {
        this.api.get(`collegemaster/${url}`).subscribe((res) => {
            console.log('res: ', res);
            if (res.isError) {
                console.log("Something Went wrong ");
            }
            else {
                let courceName = [];
                courceName = res.object.map(function (obj) {
                    return obj.cCourse;
                });
                courceName = [...new Set(courceName)];
                console.log('courceName: ', courceName);
                courceName.forEach((cname, id) => {
                    let data = [];
                    res.object.forEach((obj, i) => {
                        if (cname === obj.cCourse) {
                            data.push(obj);
                        }
                        if (i === res.object.length - 1) {
                            this.CoursesFees[id] = data;
                        }
                    });
                });
                console.log('this.CoursesFees: ', this.CoursesFees);
            }
        });
    }
    ngOnInit() {
        this.currentUrl = this.router.url.split('/').pop();
        console.log('this.currentUrl: ', this.currentUrl);
        this.url = this.router.url.split('/');
        if (this.url.length > 3) {
            if (this.url[3] === 'courses-and-fees') {
                this.getCoursesFees(this.url[2]);
            }
            if (this.url[3] === 'admission') {
                this.getaddmission(this.url[2]);
            }
            if (this.url[3] === 'placement') {
                this.getplaceMent(this.url[2]);
            }
            if (this.url[3] === 'gallery') {
                this.getGallery(this.url[2]);
                this.makeActiveTabSub('images');
            }
            if (this.url[3] === 'news') {
                this.getNews(this.url[2]);
            }
        }
        console.log('collegeContent: ', _data__WEBPACK_IMPORTED_MODULE_0__);
        const data = _data__WEBPACK_IMPORTED_MODULE_0__[this.url[2].replace(/-/g, "")];
        console.log('data: ', data);
        this.collegeData = data[this.url[2].replace(/-/g, "")];
        this.title.setTitle(`SYU-${this.collegeData.Title}`);
        this.createLinkForCanonicalURL();
        if (this.url.length > 3) {
            this.makeActiveTab(this.url[3]);
        }
        else {
            this.makeActiveTab('info');
        }
        // adding meta tag by url
        this.collegeData.info.forEach(met => {
            if (met.type === 'meta') {
                met.data.forEach(metaData => {
                    this.meta.addTag(metaData);
                });
            }
        });
        console.log('this.collegeData: ', this.collegeData.faq);
        //END adding meta tag by url
        this.posturl = this.router['location']._platformLocation.location.origin + this.router.url;
        // this.posturl="https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/"
        // this.makeActiveTab('info');
        this.images2 = [
            new ng_gallery__WEBPACK_IMPORTED_MODULE_4__.ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
            new ng_gallery__WEBPACK_IMPORTED_MODULE_4__.ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
            // ... more items
        ];
        this.galleryOptions = [
            {
                width: '100%',
                height: '45vh',
                thumbnailsColumns: 4,
                thumbnails: false,
                imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryAnimation.Slide,
                // layout:NgxGalleryLayout.
            },
            // max-width 800
            {
                breakpoint: 768,
                width: '94%',
                height: '30vh',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 1400,
                width: '100%',
                height: '50vh',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // ma
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '30vh',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [
            {
                small: '../../assets/img/BG.jpg',
                medium: '../../assets/img/BG.jpg',
                big: '../../assets/img/BG.jpg'
            },
            {
                small: '../../assets/img/colg.png',
                medium: '../../assets/img/colg.png',
                big: '../../assets/img/colg.png'
            },
            {
                small: '../../assets/img/College.jpg',
                medium: '../../assets/img/College.jpg',
                big: '../../assets/img/College.jpg'
            },
        ];
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
ExamContentComponent.ɵfac = function ExamContentComponent_Factory(t) { return new (t || ExamContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
ExamContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExamContentComponent, selectors: [["app-exam-content"]], viewQuery: function ExamContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.talkExpertDiv = _t.first);
    } }, hostBindings: function ExamContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function ExamContentComponent_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 123, vars: 23, consts: [[1, "exam-content"], [1, "exam-content-banner"], [1, "col-lg-12"], [1, "banner-jee-img", "text-center"], ["src", "../../assets/img/Exam_Content_Icons/2.JEE_Main_2022_Exam/Logo.png", "alt", ""], [1, "exam-content-page-header", "text-center"], [1, "white-text-2", 3, "innerHtml"], [1, "flex-hold"], ["src", "../../assets/img/Exam_Content_Icons/2.JEE_Main_2022_Exam/Exam On.png", "alt", "", "width", "30"], [1, "orange-text", "mb-0"], [1, "white-text-2", "mb-0"], [1, "btn", "btn-orange-nav", "white-text-2", "btn-lg"], ["alt", "", "src", "../../assets/img/Exam_Content_Icons/2.JEE_Main_2022_Exam/Get-more-info.png", "width", "30"], [1, "btn", "white-text-2", "btn-white-nav"], ["alt", "", "src", "../../assets/img/Exam_Content_Icons/2.JEE_Main_2022_Exam/Download.png", "width", "30"], [1, "exam-content-div"], [1, "row", "row-without-gutter"], [1, "navbar", "navbar-expand-lg", "navbar-light", "full-width-tabs"], ["stickyNav", ""], ["id", "navbar", 1, "collapse", "navbar-collapse", "bg-white"], [1, "nav", "nav-tabs", "nav-tabs-ul"], [1, "nav-item"], [1, "active", 3, "ngClass", "click"], [3, "ngClass", "click"], [1, "col-lg-9", "col-12", "custom-padding-right"], ["id", "college-content-tab"], [1, "tabcontent"], [4, "ngIf"], [1, "col-lg-3", "col-12", "custom-padding-left"], [1, "card", "talk-to-expert", "text-center"], [1, "card-body"], ["src", "../../assets/img/Course_Content_Icons/4.Talk to expert/talk-to-expert.png", "alt", "", "width", "30"], [1, "btn", "btn-orange", "white-text-2", "btn-lg"], [1, "card", "other-courses"], [1, "card-header", "text-center"], [1, "row", "border-bottom", "mb-2", "pb-2"], [1, "flex-holder4"], [1, "col-lg-2", "img-div", "col-sm-2", "col-2"], ["src", "../../assets/img/College_Icons/5.Student_Also_Visited/Allance-University.png", "alt", ""], [1, "col-lg-10"], [1, "mb-0"], ["src", "../../assets/img/College_Icons/5.Student_Also_Visited/IIM-Culcutta.png", "alt", ""], ["class", "row row-without-gutter relative-row", 4, "ngFor", "ngForOf"], [1, "row", "row-without-gutter", "relative-row"], ["class", "row row-without-gutter", 4, "ngIf"], ["id", "quick"], ["quick", ""], [3, "innerHTML"], [1, "tab-text", 3, "ngClass"], ["class", "shade", 4, "ngIf"], ["class", "row text-center p-relative", 4, "ngIf"], [1, "shade"], [1, "row", "text-center", "p-relative"], ["type", "button", 1, "read-more-btn", "btn", 3, "click"], ["id", "faq-collapse", "expandIcon", "pi pi-plus", "collapseIcon", "pi pi-minus", 3, "multiple"], [1, "col-lg-12", "text-center"], [1, "light-blue-text"], [4, "ngFor", "ngForOf"], [1, "accordionTab", 3, "header", "selected"], [1, "cust-padding"], ["checklist", "", 4, "ngFor", "ngForOf"], ["checklist", ""], ["id", "quick-table", 1, "table", "text-center", "table-hover", "table-responsive", "w-100", "d-md-table"], [1, "btn", "btn-blue", "white-text-2"], ["alt", "", "src", "../../assets/img/College_Icons/2.IIT_Delhi/apply.png"], ["type", "1", 2, "margin-bottom", "0px"], ["style", "margin-bottom: 0px", "type", "1", 4, "ngFor", "ngForOf"], ["alt", "", 1, "review-img", "custome-img", 3, "src"], ["class", "table text-center table-hover table-responsive w-100 d-md-table", "id", "quick-table", 4, "ngFor", "ngForOf"], [2, "display", "flex", 3, "innerHTML"]], template: function ExamContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Exam On:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "23 Jun 22 - 29 Jun 22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2)(16, "div", 7)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Get More Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Download Question Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 2)(24, "div", 15)(25, "div", 16)(26, "nav", 17, 18)(28, "div", 19)(29, "ul", 20)(30, "li", 21)(31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_Template_a_click_31_listener() { return ctx.makeActive("info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li", 21)(34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_Template_a_click_34_listener() { return ctx.makeActive("exam-date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Exam Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "li", 21)(37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_Template_a_click_37_listener() { return ctx.makeActive("syllabus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Syllabus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 21)(40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_Template_a_click_40_listener() { return ctx.makeActive("cut-off"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Cut Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "li", 21)(43, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExamContentComponent_Template_a_click_43_listener() { return ctx.makeActive("qna"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 24)(46, "div", 25)(47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ExamContentComponent_div_48_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ExamContentComponent_div_49_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ExamContentComponent_div_50_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ExamContentComponent_div_51_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ExamContentComponent_div_52_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 28)(54, "div", 16)(55, "div", 29)(56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Are you Interested in this Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Talk to Expert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 16)(63, "div", 33)(64, "div", 34)(65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Students also Visited");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 30)(68, "div", 35)(69, "div", 36)(70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 39)(73, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Alliance University");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 35)(78, "div", 36)(79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 39)(82, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "IIM Culcutta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 35)(87, "div", 36)(88, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 39)(91, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Alliance University");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 35)(96, "div", 36)(97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 39)(100, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "IIM Culcutta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 35)(105, "div", 36)(106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 39)(109, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Alliance University");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 35)(114, "div", 36)(115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 39)(118, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "IIM Culcutta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx.collegeData.shortTitle, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("stickyNav", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx.isActive("info")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx.isActive("exam-date")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c3, ctx.isActive("syllabus")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c3, ctx.isActive("cut-off")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c3, ctx.isActive("qna")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive("info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive("exam-date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive("syllabus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive("cut-off"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive("qna"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionTab], styles: [".exam-content-banner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n  padding: 1%;\n  padding-top: 5%;\n}\n\n.exam-content[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.flex-hold[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.flex-holder[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .flex-holder[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.orange-text[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.btn-orange-nav[_ngcontent-%COMP%] {\n  background-color: #ff7500;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px 17px;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n\n.btn-white-nav[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #fff !important;\n  border: 1px solid #fff;\n  border-radius: 20px;\n  padding: 5px 30px;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n\n.btn-orange-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .btn-white-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.talk-to-expert[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1%;\n}\n\n.exam-content-div[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 1%;\n}\n\n.table-of-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 30px;\n  border-radius: 10px;\n  padding: 1% 3%;\n  width: 96%;\n}\n\n#exam-content-tab[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1%;\n  padding-top: 10px;\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.other-courses[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0px;\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 0px auto;\n  padding: 5px;\n  border: 1px solid gray;\n}\n\n.banner-jee-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4%;\n  margin-top: 20px;\n  background-color: aliceblue;\n  padding: 2px;\n}\n\n.talk-to-expert[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media only screen and (max-width: 767px) {\n  .sectionMobHide[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .cust-padding[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .flex-holder[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  .banner-jee-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10%;\n    margin-bottom: 20px;\n  }\n  .exam-content-banner[_ngcontent-%COMP%] {\n    height: 65vh;\n  }\n  .exam-content-div[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    margin-left: 5px;\n  }\n  #exam-content-tab[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .read-more-btn[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  #exam-content-tab[_ngcontent-%COMP%]   .ui-tabview[_ngcontent-%COMP%]   .ui-tabview-panel[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .table-of-content[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n    padding: 3% 8%;\n  }\n  .talk-to-expert[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .table-of-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .white-text-2[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n@media only screen and (min-width: 120px) and (max-width: 564px) {\n  .exam-content-banner[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n  .flex-holder[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .exam-content-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n  .talk-to-expert[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  .table-of-content[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-left: 0px;\n    width: 100%;\n  }\n  #exam-content-tab[_ngcontent-%COMP%] {\n    padding: 0px;\n    margin-right: 0px;\n  }\n}\n\n@media only screen and (min-width: 120px) and (max-width: 564px) {\n  .banner-jee-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 8px;\n  border-radius: 10px;\n  background-color: #fff !important;\n  padding: 2% !important;\n}\n\n.stickyNav[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 11.8%;\n  overflow: hidden;\n  z-index: 11;\n  height: auto;\n  width: 100%;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 18%;\n  overflow: hidden;\n  z-index: 10;\n  height: auto;\n  width: 100%;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 10px;\n}\n\n.full-width-tabs[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0097db;\n  background-color: #fff;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom: 5px solid #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  top: 120px;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  bottom: 60px;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid gray;\n}\n\n.college-content-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 1% 2%;\n}\n\n.slider-div[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.college-content[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n  margin-top: 3.8%;\n}\n\n.college-content-page-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.flex-holder[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flex-holder1[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flex-holder2[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 10px;\n  justify-content: center;\n}\n\n.flex-holder3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3%;\n}\n\n.flex-holder3[_ngcontent-%COMP%]   img.rating-img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.flex-holder3[_ngcontent-%COMP%]   img.share-img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.flex-holder3[_ngcontent-%COMP%]   img.review-img[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.ngx-gallery[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0px auto;\n}\n\n.flex-holder4[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.flex-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.flex-holder2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  margin-bottom: 0px;\n}\n\n.flex-holder3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  padding-bottom: 0px;\n  margin-right: 6%;\n}\n\n.flex-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  font-size: 10px;\n}\n\n.flex-holder[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.flex-holder2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.flex-holder1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 5%;\n}\n\n.flex-holder1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.flex-holder4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.flex-holder4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n}\n\n.flex-holder4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n}\n\n.flex-holder4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n}\n\n.orange-text[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.btn-orange[_ngcontent-%COMP%] {\n  background-color: #ff7500;\n  color: #fff !important;\n  border-radius: 20px;\n  padding: 5px 17px;\n  margin: 0px auto;\n}\n\n.btn-blue[_ngcontent-%COMP%] {\n  background-color: #254d95;\n  padding: 0px 50px;\n  font-size: 15px;\n  font-weight: 700;\n  display: block;\n  line-height: normal;\n}\n\n.btn-blue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dl-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.ml-3[_ngcontent-%COMP%] {\n  margin-left: 3%;\n}\n\n.ml-4[_ngcontent-%COMP%] {\n  margin-left: 4%;\n}\n\n.dl-btn[_ngcontent-%COMP%] {\n  border: 1px solid #254d95;\n  font-size: 15px;\n  padding: 0px 20px;\n  display: block;\n}\n\n.btn-white[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #fff !important;\n  border: 1px solid #fff;\n  border-radius: 20px;\n  padding: 5px 30px;\n  margin-top: 20px;\n  margin-right: 20px;\n}\n\n.btn-orange[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .btn-white[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.talk-to-expert[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1%;\n  margin-top: 10px;\n}\n\n.college-content-div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-radius: 10px;\n  padding: 1%;\n  padding-bottom: 0px;\n}\n\n#college-content-tab[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   .ui-tabview.ui-tabview-top[_ngcontent-%COMP%]    > .ui-tabview-nav[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 10px !important;\n  border-bottom-left-radius: 10px !important;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   .ui-tabview.ui-tabview-top[_ngcontent-%COMP%]    > .ui-tabview-nav[_ngcontent-%COMP%]:last-child {\n  border-top-left-radius: 10px !important;\n  border-bottom-left-radius: 10px !important;\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.other-courses[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 0px;\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 7% auto;\n  border: 1px solid gray;\n}\n\n.talk-to-expert[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.info-div[_ngcontent-%COMP%] {\n  margin-left: 14%;\n  margin-top: 3%;\n}\n\n.custom-padding-row[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.social-share-dialog[_ngcontent-%COMP%] {\n  left: 20%;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 20%;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.discover[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 1%;\n  display: flex;\n}\n\n.blog-card[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  border: none;\n}\n\n.timer-img[_ngcontent-%COMP%] {\n  width: 14% !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .nav-tabs-ul[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .stickyDiv[_ngcontent-%COMP%] {\n    position: relative !important;\n    z-index: 1 !important;\n    top: 0 !important;\n  }\n  .stickyNav[_ngcontent-%COMP%] {\n    top: 11.5% !important;\n  }\n  .tabcontent[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n  .custom-padding-row[_ngcontent-%COMP%] {\n    --bs-gutter-x: 0 !important;\n    --bs-gutter-y: 0 !important;\n  }\n  .custom-padding-right[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n  }\n  .custom-padding-left[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n  .btns[_ngcontent-%COMP%], .add-info[_ngcontent-%COMP%] {\n    margin-top: 3%;\n  }\n  .flex-holder2[_ngcontent-%COMP%] {\n    margin-bottom: 0px !important;\n  }\n  .flex-holder3[_ngcontent-%COMP%] {\n    margin: 2% 0%;\n    padding-left: 3%;\n  }\n  .dl-btn[_ngcontent-%COMP%], .btn-blue[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .flex-holder3[_ngcontent-%COMP%]   img.rating-img[_ngcontent-%COMP%], .flex-holder3[_ngcontent-%COMP%]   img.share-img[_ngcontent-%COMP%], .flex-holder3[_ngcontent-%COMP%]   img.review-img[_ngcontent-%COMP%] {\n    height: 60%;\n  }\n  .dl-btn[_ngcontent-%COMP%] {\n    margin: 0% 3%;\n  }\n  .other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n  .flex-holder3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-right: 0%;\n    font-size: 11px;\n    margin-bottom: 0px;\n    line-height: normal;\n  }\n  .info-div[_ngcontent-%COMP%] {\n    margin-left: 3%;\n  }\n  .flex-holder1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 5%;\n    height: 60%;\n  }\n  .flex-holder[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n  .banner-jee-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20%;\n    margin-bottom: 20px;\n  }\n  .exam-content-banner[_ngcontent-%COMP%] {\n    height: 50vh;\n  }\n  .exam-content-div[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    margin-left: 5px;\n  }\n  #exam-content-tab[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .read-more-btn[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  #college-content-tab[_ngcontent-%COMP%]   .ui-tabview[_ngcontent-%COMP%]   .ui-tabview-panel[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .talk-to-expert[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  #college-content-tab[_ngcontent-%COMP%]   .ui-tabview[_ngcontent-%COMP%]   .ui-tabview-panel[_ngcontent-%COMP%] {\n    margin-right: 0px;\n  }\n  .flex-holder3[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .college-content-banner[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-left: 0px;\n    padding-bottom: 20px;\n  }\n  .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .btn-blue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dl-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .dl-btn[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 0px 20px;\n  }\n  .btn-blue[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 0px 20px;\n  }\n  .custom-spacing[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .iit-header[_ngcontent-%COMP%], .iit-subheader[_ngcontent-%COMP%] {\n    text-align: left !important;\n    margin-left: 5%;\n  }\n  .college-content-div[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-left: 0px;\n  }\n  .custom-spacing[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .iit-subheader[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    margin-bottom: 0px;\n  }\n  .cust-padding[_ngcontent-%COMP%] {\n    padding: 5%;\n  }\n  .tab-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .flex-holder1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n}\n\n.iit-header[_ngcontent-%COMP%], .iit-subheader[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.iit-subheader[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 10vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  top: 120px;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   .ui-tabview.ui-tabview-top[_ngcontent-%COMP%]    > .ui-tabview-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  background-color: #fff;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   .ui-tabview.ui-tabview-top[_ngcontent-%COMP%]    > .ui-tabview-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: orangered;\n  border-radius: 5px;\n  width: 5px;\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .stickyDiv[_ngcontent-%COMP%] {\n    position: relative !important;\n    z-index: 1 !important;\n    top: 0 !important;\n  }\n  .tabcontent[_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n  .custom-padding-right[_ngcontent-%COMP%] {\n    padding-right: 12px !important;\n  }\n  .custom-padding-left[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n  }\n  .iit-header[_ngcontent-%COMP%], .iit-subheader[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 5%;\n  }\n  .iit-subheader[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .cust-padding[_ngcontent-%COMP%] {\n    padding: 3%;\n  }\n  .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .flex-holder1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 75%;\n  }\n  .flex-holder1[_ngcontent-%COMP%] {\n    margin-top: 2%;\n  }\n  .btn-blue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dl-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding: 3px;\n  }\n  .btn-blue[_ngcontent-%COMP%] {\n    padding: 0px 30px;\n  }\n  .flex-holder3[_ngcontent-%COMP%] {\n    padding-left: 8%;\n  }\n  .flex-holder3[_ngcontent-%COMP%]   img.rating-img[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n  .dl-btn[_ngcontent-%COMP%] {\n    padding: 0px 0px;\n  }\n  .dl-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .info-div[_ngcontent-%COMP%] {\n    margin-left: 12%;\n    margin-top: 0px !important;\n  }\n  .flex-holder3[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .college-content-div[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-right: 0px;\n  }\n  .college-content-banner[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  #college-content-tab[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    padding: 0px;\n  }\n  .flex-holder4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.custom-spacing[_ngcontent-%COMP%] {\n  margin-left: 4%;\n  padding-right: 3rem;\n  padding-left: 3rem;\n  margin-top: 0.5rem;\n  width: 70%;\n}\n\n.tab-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 16px !important;\n  border: none !important;\n  margin-bottom: 1rem;\n  color: rgb(51, 51, 51);\n  border-collapse: collapse;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: table;\n}\n\n.table[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(caption)    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.answer[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n  font-size: 16px;\n}\n\n.que[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 18px;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 10vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  bottom: 60px;\n}\n\n.p-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(79, 184, 221);\n  text-decoration: none;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 18px !important;\n  line-height: 1.3;\n  color: rgb(54, 54, 54);\n  font-weight: 700;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #college-content-tab[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 25px;\n}\n\n#college-content-tab[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.cust-padding[_ngcontent-%COMP%] {\n  padding-left: 1.6rem;\n}\n\n.other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n@media only screen and (min-width: 1200px) and (max-width: 1400px) {\n  .btn-orange[_ngcontent-%COMP%] {\n    padding: 5px 10px !important;\n  }\n  .other-courses[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n\n.custom-padding-right[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.custom-padding-left[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  background-color: #fff !important;\n  padding: 2% !important;\n}\n\n.stickyNav[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 11%;\n  overflow: hidden;\n  z-index: 11;\n  height: auto;\n  width: 100%;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 17%;\n  overflow: hidden;\n  z-index: 10;\n  height: auto;\n  width: 100%;\n}\n\n.full-width-tabs[_ngcontent-%COMP%] {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 10px;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0097db;\n  background-color: #fff;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom: 5px solid #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover {\n  color: #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.nav-tabs-ul[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n  padding: 0px;\n}\n\n.custome-img[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n\n.custome-org[_ngcontent-%COMP%] {\n  padding: 0px 10px 5px 9px !important;\n  font-size: small !important;\n}\n\n.aboutUs-banner[_ngcontent-%COMP%] {\n  height: 30vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n  \n}\n\n.about-us-page-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 20%;\n  padding-top: 10%;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 150px;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  \n  text-decoration: none;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14pt;\n  display: inline-block;\n  padding: 0 14px !important;\n  \n  margin-right: 14px;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-decoration: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.faq-banner[_ngcontent-%COMP%] {\n  padding: 5%;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.faq[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 15%;\n}\n\n\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.faq-div[_ngcontent-%COMP%] {\n  \n  border-radius: 10px;\n  padding: 1%;\n  padding-bottom: 0px;\n}\n\n.need-assi-img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10%;\n}\n\n.need-assi-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  color: #295ea1;\n  padding: 5px;\n  padding-top: 10px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #091832;\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%] {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n}\n\n@media only screen and (max-width: 767px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .need-assi-text[_ngcontent-%COMP%] {\n    padding-top: 30px !important;\n    font-size: 22px !important;\n  }\n  .need-assi-img[_ngcontent-%COMP%] {\n    width: 70%;\n    display: block;\n    margin: 0px auto;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 8%;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  \n  margin-bottom: 10px;\n  margin-right: 8px;\n  border-radius: 10px;\n  background-color: #fff !important;\n  padding: 2% !important;\n}\n\n.stickyNav[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 12%;\n  overflow: hidden;\n  z-index: 11;\n  height: auto;\n  width: 100%;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 19.5%;\n  overflow: hidden;\n  z-index: 10;\n  height: auto;\n  width: 100%;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0097db;\n  background-color: #fff;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom: 5px solid #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px !important;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  top: 120px;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  bottom: 60px;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid gray;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0097db !important;\n  background-color: #fff !important;\n  border-right: none !important;\n  border-top: none !important;\n  border-left: none !important;\n  border-bottom: 5px solid #0097db !important;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-sublink[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #0097db !important;\n  background-color: #fff !important;\n  border-right: none !important;\n  border-top: none !important;\n  border-left: none !important;\n  border-bottom: 5px solid #0097db !important;\n}\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: block !important;\n}\n\n\n\n.container-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 40px;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: transform 0.5s;\n}\n\n.container-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.gallary[_ngcontent-%COMP%] {\n  padding: 25px 8% !important;\n  margin: 10px auto !important;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  \n  justify-content: center;\n  padding-top: 5%;\n  display: block;\n  padding-left: 30px;\n  align-items: center;\n}\n\n.white-text-2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: unset;\n}\n\n.gallary-box[_ngcontent-%COMP%] {\n  width: 90% !important;\n  margin: 30px auto !important;\n}\n\n.gallary-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 40px;\n}\n\n.gallary-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 0 !important;\n}\n\n@media only screen and (min-width: 450px) and (max-width: 1100px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-kol-c2][_ngcontent-%COMP%] {\n    width: 3%;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 4%;\n  }\n}\n\n@media only screen and (min-width: 450px) and (max-width: 600px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 6%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLHVEQUFBO0VBQ0EsMEJBQUE7RUFDSSw2RUFBQTtFQUVBLDRCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUFGTDs7QUFPQTtFQUNLLHlCQUFBO0VBQ0Esb0JBQUE7QUFKTDs7QUFRQTtFQUNLLGFBQUE7RUFDQSx1QkFBQTtBQUxMOztBQU9BOztFQUVLLGlCQUFBO0FBSkw7O0FBTUE7RUFDSyxhQUFBO0FBSEw7O0FBS0E7RUFDSyx5QkFBQTtFQUNELHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNLLDZCQUFBO0VBQ0Qsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7O0VBRUssa0JBQUE7QUFBTDs7QUFFQTtFQUNLLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFMOztBQUVBO0VBRUssbUJBQUE7RUFHQSxtQkFBQTtFQUNBLFdBQUE7QUFGTDs7QUFJQTtFQUNLLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREw7O0FBR0E7RUFDSyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUw7O0FBRUE7RUFDSyx3QkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0w7O0FBQ0E7RUFDSyw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUVMOztBQUFBO0VBQ0ssWUFBQTtFQUNBLGdCQUFBO0FBR0w7O0FBREM7RUFDSyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Ysc0JBQUE7QUFJSjs7QUFGQztFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUtMOztBQUhDO0VBQ0ksVUFBQTtBQU1MOztBQUpBO0VBQ0ssZUFBQTtBQU9MOztBQUpDO0VBQ0k7SUFDSyxhQUFBO0VBT1I7RUFMRztJQUNLLGFBQUE7RUFPUjtFQUxHO0lBQ0ssY0FBQTtJQUNBLGtCQUFBO0VBT1I7RUFMRztJQUNLLFVBQUE7SUFDQSxtQkFBQTtFQU9SO0VBTEk7SUFDSyxZQUFBO0VBT1Q7RUFMSTtJQUNLLGlCQUFBO0lBQ0EsZ0JBQUE7RUFPVDtFQUxJO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBT1I7RUFMSTtJQUNJLFVBQUE7RUFPUjtFQUxJO0lBQ0ssaUJBQUE7RUFPVDtFQUxJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFPUjtFQUxJO0lBQ0kscUJBQUE7RUFPUjtFQUxJO0lBQ0ssV0FBQTtFQU9UO0VBTEk7SUFDRyxpQkFBQTtFQU9QO0FBQ0Y7O0FBSkM7RUFDTTtJQUNHLFdBQUE7RUFNUjtFQUpLO0lBQ0csbUJBQUE7RUFNUjtBQUNGOztBQUhDO0VBQ0k7SUFDSyxZQUFBO0lBQ0Esa0JBQUE7RUFLUjtFQUhHO0lBQ0ssVUFBQTtFQUtSO0VBSEc7SUFDSyxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQUtSO0VBSEc7SUFDSyxZQUFBO0lBQ0EsaUJBQUE7RUFLUjtBQUNGOztBQURDO0VBRUU7SUFDRSxVQUFBO0VBRUg7QUFDRjs7QUFHQztFQUNLLGVBQUE7QUFETjs7QUFHQztFQUNJLGdCQUFBO0VBQ0QsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVBO0VBQ0MsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRDs7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUQ7O0FBQUM7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdMOztBQURBO0VBQ0ssaUJBQUE7RUFDQSxvQkFBQTtBQUlMOztBQUZBO0VBQ0ssc0JBQUE7RUFDQSxlQUFBO0FBS0w7O0FBSEE7RUFDSyxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQU1MOztBQUpBO0VBQ0ssWUFBQTtFQUNBLFdBQUE7QUFPTDs7QUFMQTtFQUNLLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBUUw7O0FBTkE7RUFDSyxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdFQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVNMOztBQVBBO0VBQ0ssV0FBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFVTDs7QUFSQTtFQUNLLGtCQUFBO0FBV0w7O0FBVEE7RUFDSyxVQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBWUw7O0FBUEE7RUFDSyxzQkFBQTtFQUVBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0FBUUw7O0FBTkM7RUFDSSxhQUFBO0FBU0w7O0FBUEM7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFVTDs7QUFSQztFQUNJLGVBQUE7QUFXTDs7QUFUQztFQUNJLGFBQUE7QUFZTDs7QUFUQztFQUNJLGFBQUE7QUFZTDs7QUFWQztFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBYUw7O0FBWEM7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBY0w7O0FBWkM7RUFDSSxXQUFBO0FBZUw7O0FBYkM7RUFDSSxXQUFBO0FBZ0JMOztBQWRDO0VBQ0ksV0FBQTtBQWlCTDs7QUFmQztFQUNLLGNBQUE7RUFDQSxnQkFBQTtBQWtCTjs7QUFoQkM7RUFDSSxhQUFBO0FBbUJMOztBQWpCQztFQUNJLGtCQUFBO0FBb0JMOztBQWxCQztFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFxQkw7O0FBbkJDO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBc0JMOztBQXBCQztFQUNJLGVBQUE7QUF1Qkw7O0FBckJDO0VBQ0ksV0FBQTtBQXdCTDs7QUF0QkM7RUFDSSxVQUFBO0FBeUJMOztBQXZCQztFQUVHLGlCQUFBO0FBeUJKOztBQXZCQztFQUNJLFdBQUE7RUFDQSxTQUFBO0FBMEJMOztBQXhCQztFQUNJLGtCQUFBO0FBMkJMOztBQXpCQztFQUNJLFdBQUE7QUE0Qkw7O0FBMUJDO0VBQ0ksaUJBQUE7QUE2Qkw7O0FBM0JDO0VBQ0ksZUFBQTtBQThCTDs7QUE1QkM7RUFDSSxlQUFBO0FBK0JMOztBQTdCQztFQUNJLGFBQUE7QUFnQ0w7O0FBOUJDO0VBQ0kseUJBQUE7RUFDRCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWlDSjs7QUEvQkM7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0QsZUFBQTtFQUNBLGdCQUFBO0VBRUMsY0FBQTtFQUNBLG1CQUFBO0FBaUNMOztBQS9CQzs7RUFHSSxZQUFBO0FBaUNMOztBQS9CQztFQUNJLGVBQUE7QUFrQ0w7O0FBaENDO0VBQ0ksZUFBQTtBQW1DTDs7QUFqQ0M7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFtQ0w7O0FBakNDO0VBQ0ksNkJBQUE7RUFDRCxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFvQ0o7O0FBbENDOztFQUVJLGtCQUFBO0FBcUNMOztBQW5DQztFQUNJLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXFDTDs7QUFuQ0M7RUFDSSxnQkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBb0NMOztBQWxDQztFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtBQW9DTDs7QUFqQ0M7RUFDSSx1Q0FBQTtFQUNBLDBDQUFBO0FBb0NMOztBQWxDQztFQUNJLHVDQUFBO0VBQ0EsMENBQUE7QUFxQ0w7O0FBbkNDO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQXNDTDs7QUFwQ0M7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQXVDTDs7QUFyQ0M7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUF3Q0w7O0FBdENDO0VBQ0ssVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXlDTjs7QUF2Q0M7RUFDSyxVQUFBO0FBMENOOztBQXhDQztFQUNLLGVBQUE7QUEyQ047O0FBekNDO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBNENMOztBQTFDQztFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7QUE2Q0w7O0FBM0NDO0VBQ0ksU0FBQTtBQThDTDs7QUE1Q0M7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQStDTDs7QUE3Q0M7RUFDSSxlQUFBO0FBZ0RMOztBQTlDQztFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBaURMOztBQS9DQztFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQWtETDs7QUFoREM7RUFDSSxxQkFBQTtBQW1ETDs7QUFqREM7RUFDSTtJQUNLLGNBQUE7RUFvRFI7RUFsREc7SUFDSyw2QkFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUFvRFI7RUFsREc7SUFDSyxxQkFBQTtFQW9EUjtFQWxERztJQUNLLDRCQUFBO0VBb0RSO0VBbERJO0lBQ0ksMkJBQUE7SUFDQSwyQkFBQTtFQW9EUjtFQWxESTtJQUNJLDZCQUFBO0VBb0RSO0VBbERHO0lBQ0ssNEJBQUE7RUFvRFI7RUFsREc7SUFDSyxjQUFBO0VBb0RSO0VBbERHO0lBQ0ssNkJBQUE7RUFvRFI7RUFsREc7SUFDSyxhQUFBO0lBQ0EsZ0JBQUE7RUFvRFI7RUFsREc7O0lBRUssZUFBQTtFQW9EUjtFQWxERzs7O0lBR0ssV0FBQTtFQW9EUjtFQWxERztJQUNLLGFBQUE7RUFvRFI7RUFsREc7SUFDSyxrQkFBQTtFQW9EUjtFQWxERztJQUNLLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFvRFI7RUFsREk7SUFDSSxlQUFBO0VBb0RSO0VBbERHO0lBQ0ssU0FBQTtJQUNBLFdBQUE7RUFvRFI7RUFsREc7SUFDSyxjQUFBO0lBQ0Esa0JBQUE7RUFvRFI7RUFsREc7SUFDSyxVQUFBO0lBQ0EsbUJBQUE7RUFvRFI7RUFsREk7SUFDSyxZQUFBO0VBb0RUO0VBbERJO0lBQ0ssaUJBQUE7SUFDQSxnQkFBQTtFQW9EVDtFQWxESTtJQUNJLGlCQUFBO0VBb0RSO0VBbERJO0lBQ0ksVUFBQTtFQW9EUjtFQWxESTtJQUNJLGlCQUFBO0VBb0RSO0VBbERJO0lBQ0kscUJBQUE7RUFvRFI7RUFsREk7SUFFSyxpQkFBQTtFQW1EVDtFQWpESTtJQUNJLFdBQUE7RUFtRFI7RUFqREc7SUFDSyxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUFtRFI7RUFqREc7SUFDSyxXQUFBO0VBbURSO0VBakRJOztJQUdJLFlBQUE7RUFrRFI7RUFoREk7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFrRFI7RUFoREk7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFrRFI7RUFoREk7SUFDSSwwQkFBQTtJQUNBLDhCQUFBO0lBQ0EsNkJBQUE7RUFrRFI7RUFoREc7O0lBRU0sMkJBQUE7SUFDQSxlQUFBO0VBa0RUO0VBaERHO0lBQ0ssaUJBQUE7SUFDQSxnQkFBQTtFQWtEUjtFQWhERztJQUNLLHNCQUFBO0VBa0RSO0VBaERHO0lBQ0ssV0FBQTtFQWtEUjtFQWhERztJQUNLLDBCQUFBO0lBQ0Esa0JBQUE7RUFrRFI7RUFoREc7SUFDSyxXQUFBO0VBa0RSO0VBaERHO0lBQ0ssZUFBQTtFQWtEUjtFQWhERztJQUNLLGtCQUFBO0VBa0RSO0FBQ0Y7O0FBaERDOztFQUVLLGtCQUFBO0FBa0ROOztBQWhEQztFQUNJLGVBQUE7QUFtREw7O0FBakRDO0VBQ0ksa0JBQUE7QUFvREw7O0FBbERDO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFxREw7O0FBbkRDO0VBQ0csVUFBQTtFQUNBLHNCQUFBO0FBc0RKOztBQW5ESztFQUNGLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBc0RIOztBQXBEQztFQUNJO0lBQ0ssNkJBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0VBdURSO0VBckRHO0lBQ0ssNEJBQUE7RUF1RFI7RUFyREc7SUFDSyw4QkFBQTtFQXVEUjtFQXJERztJQUNLLDZCQUFBO0VBdURSO0VBckRHOztJQUVLLGdCQUFBO0lBQ0EsZUFBQTtFQXVEUjtFQXJERztJQUNLLGVBQUE7RUF1RFI7RUFyREc7SUFDSyxXQUFBO0VBdURSO0VBckRHO0lBQ0ssVUFBQTtFQXVEUjtFQXJERztJQUNLLFdBQUE7RUF1RFI7RUFyREk7SUFDSyxjQUFBO0VBdURUO0VBckRJO0lBQ0ksWUFBQTtFQXVEUjtFQXJESTtJQUNJLGlCQUFBO0VBdURSO0VBckRJO0lBQ0ssZ0JBQUE7RUF1RFQ7RUFyREk7SUFDSSxXQUFBO0VBdURSO0VBckRJO0lBQ0ksZ0JBQUE7RUF1RFI7RUFyREk7SUFDSyxZQUFBO0VBdURUO0VBckRJO0lBQ0ssZ0JBQUE7SUFDQSwwQkFBQTtFQXVEVDtFQXJERztJQUNLLFVBQUE7RUF1RFI7RUFyREc7SUFDSywyQkFBQTtJQUNBLGlCQUFBO0VBdURSO0VBckRHO0lBQ0ssZ0JBQUE7RUF1RFI7RUFyREc7SUFDSyxpQkFBQTtJQUNBLFlBQUE7RUF1RFI7RUFyREc7SUFDSyxVQUFBO0VBdURSO0FBQ0Y7O0FBckRDO0VBQ1MsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF1RFY7O0FBckRDO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF3REw7O0FBckRDO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUF3REw7O0FBdERDO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUF5REw7O0FBdkRDO0VBQ0ksY0FBQTtBQTBETDs7QUF4REM7RUFDSyx1QkFBQTtBQTJETjs7QUF6REM7RUFDSSxpQkFBQTtFQUNELGVBQUE7QUE0REo7O0FBMURDO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBNkRMOztBQTNEQztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0VBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBOERMOztBQTVEQztFQUNLLGtCQUFBO0FBK0ROOztBQTdEQztFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFnRUw7O0FBOURDO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNELGdCQUFBO0FBaUVKOztBQS9EQztFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQWtFTDs7QUFoRUM7RUFDSSxzQkFBQTtBQW1FTDs7QUFqRUM7RUFDSSxvQkFBQTtBQW9FTDs7QUFsRUM7RUFDSSxrQkFBQTtBQXFFTDs7QUFuRUM7RUFDSTtJQUNLLDRCQUFBO0VBc0VSO0VBcEVJO0lBQ0ssWUFBQTtFQXNFVDtBQUNGOztBQXBFQztFQUNLLGtCQUFBO0FBc0VOOztBQXBFQztFQUNLLGlCQUFBO0FBdUVOOztBQXJFQztFQUNJLGdCQUFBO0VBQ0QsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUF1RUo7O0FBckVDO0VBQ0csMkJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF3RUo7O0FBdEVDO0VBQ0csZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF5RUo7O0FBdkVDO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQTBFTDs7QUF2RUM7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTBFTDs7QUF4RUM7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQTJFTDs7QUF6RUM7RUFDSSxjQUFBO0FBNEVMOztBQTFFQztFQUNLLFlBQUE7RUFDQSxXQUFBO0FBNkVOOztBQTNFQztFQUNJLFdBQUE7QUE4RUw7O0FBNUVDO0VBQ0ksaUNBQUE7QUErRUw7O0FBN0VDO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQWdGTDs7QUE5RUM7RUFDSSwwQkFBQTtBQWlGTDs7QUE5RUM7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0FBaUZMOztBQTNFQztFQUNJLFlBQUE7RUFDQSx1REFBQTtFQUNBLDBCQUFBO0VBQ0EsNkVBQUE7RUFDQSw0QkFBQTtBQThFTDs7QUEzRUM7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUE4RUw7O0FBM0VDO0VBQ0ksZUFBQTtBQThFTDs7QUEzRUM7RUFDSSxVQUFBO0FBOEVMOztBQTNFQztFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQThFTDs7QUEzRUM7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE4RUw7O0FBM0VDO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUE4RUw7O0FBM0VDO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBOEVMOztBQTNFQztFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQThFTDs7QUExRUMsWUFBQTs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMkVMOztBQXpFQztFQUNJLGtCQUFBO0FBNEVMOztBQTFFQztFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQTZFTDs7QUEzRUM7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQThFTDs7QUExRUM7RUFDSSxXQUFBO0VBQ0QsdURBQUE7RUFDQSwwQkFBQTtFQUNDLDZFQUFBO0VBQ0EsNEJBQUE7QUE2RUw7O0FBM0VDO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtBQThFTDs7QUE1RUU7O0dBQUE7O0FBR0Q7RUFDSSxVQUFBO0FBK0VMOztBQTdFQztFQUNJLFVBQUE7QUFnRkw7O0FBOUVDO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7QUFnRkw7O0FBOUVDO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBaUZMOztBQS9FQztFQUNJLFNBQUE7QUFrRkw7O0FBaEZDO0VBQ0ksU0FBQTtBQW1GTDs7QUFqRkM7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQW9GTDs7QUFsRkU7O0lBQUE7O0FBR0Q7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FBcUZMOztBQW5GQztFQUNLLHNCQUFBO0VBQ0QsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFzRkw7O0FBcEZDO0VBQ0ssV0FBQTtFQUNBLFlBQUE7QUF1Rk47O0FBckZDO0VBQ0ssa0JBQUE7RUFDRixjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBd0ZKOztBQXRGQztFQUNLLGlCQUFBO0FBeUZOOztBQXZGQztFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUEwRkw7O0FBeEZDO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQTJGTDs7QUF6RkM7RUFDSyxrQkFBQTtFQUNBLGVBQUE7QUE0Rk47O0FBekZDO0VBQ0k7SUFDSywwQkFBQTtFQTRGUjtFQTFGSTtJQUNRLFdBQUE7RUE0Rlo7RUExRkk7SUFDSSxVQUFBO0VBNEZSO0FBQ0Y7O0FBekZDO0VBQ0k7SUFDSyw0QkFBQTtJQUNBLDBCQUFBO0VBMkZSO0VBekZJO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQTJGVDtFQXpGSTtJQUNJLFdBQUE7RUEyRlI7RUF6Rkk7SUFDSSxTQUFBO0VBMkZSO0VBekZJO0lBQ0ssMkJBQUE7RUEyRlQ7QUFDRjs7QUF4RkM7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUEwRkw7O0FBeEZDO0VBQ0ksc0JBQUE7RUFDRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FBMkZKOztBQXpGQztFQUNHLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNEZKOztBQTFGQztFQUNHLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNkZKOztBQTNGQztFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBOEZMOztBQTVGQztFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQStGTDs7QUE3RkM7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQWdHTDs7QUE5RkM7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWlHTDs7QUEvRkM7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUFrR0w7O0FBaEdDO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFtR0w7O0FBakdDO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFvR0w7O0FBbEdDO0VBQ0ksa0JBQUE7QUFxR0w7O0FBbkdDO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQXNHTDs7QUFwR0M7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7QUF1R0w7O0FBcEdDO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJDQUFBO0FBdUdMOztBQXBHQztFQUNJLHlCQUFBO0FBdUdMOztBQXJHQyxVQUFBOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDJEQUFBO0VBQ0EsY0FBQTtBQXFHTDs7QUFsR0M7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFxR0w7O0FBbkdDO0VBQ0kscUJBQUE7QUFzR0w7O0FBcEdDO0VBQ0ksMkJBQUE7RUFFQSw0QkFBQTtBQXNHTDs7QUFwR0M7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBdUdMOztBQXJHQztFQUNJLFdBQUE7QUF3R0w7O0FBckdDO0VBQ0kscUJBQUE7QUF3R0w7O0FBdEdDO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtBQXlHTDs7QUF0R0M7RUFDSSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0FBeUdMOztBQXZHQztFQUNJLFVBQUE7QUEwR0w7O0FBdkdDO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUEwR0w7O0FBdEdDO0VBQ0k7SUFDSSxTQUFBO0VBeUdQO0VBdkdHO0lBQ0ksU0FBQTtFQXlHUDtBQUNGOztBQXZHQztFQUNJO0lBQ0ksU0FBQTtFQXlHUDtBQUNGIiwiZmlsZSI6ImV4YW0tY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtLWNvbnRlbnQtYmFubmVye1xyXG4gICAgIC8vIGhlaWdodDo0MHZoIDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDAsIDE4NSwgMjI5LCAwLjgpLCAjMzM1MzlkKTsgXHJcbiAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9FeGFtX0NvbnRlbnRfSWNvbnMvMy5JbmZvL0luZm8ucG5nJykgOyBcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgIC8vIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn1cclxuLmV4YW0tY29udGVudHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgIFxyXG59XHJcbi5mbGV4LWhvbGR7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIH1cclxuLmZsZXgtaG9sZGVyIGg1LFxyXG4uZmxleC1ob2xkZXIgaDZ7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLm9yYW5nZS10ZXh0e1xyXG4gICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuLmJ0bi1vcmFuZ2UtbmF2e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1MDA7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uYnRuLXdoaXRlLW5hdntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uYnRuLW9yYW5nZS1uYXYgaW1nLCBcclxuLmJ0bi13aGl0ZS1uYXYgaW1ne1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4udGFsay10by1leHBlcnR7XHJcbiAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAvLyBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxufVxyXG4uZXhhbS1jb250ZW50LWRpdntcclxuICAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIHBhZGRpbmc6IDElO1xyXG59XHJcbi50YWJsZS1vZi1jb250ZW50e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJSAzJTsgXHJcbiAgICAgd2lkdGg6IDk2JTtcclxufVxyXG4jZXhhbS1jb250ZW50LXRhYntcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcbi5vdGhlci1jb3Vyc2VzIC5jYXJkLWhlYWRlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgY29sb3I6I2ZmZjtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5vdGhlci1jb3Vyc2Vze1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5saW1pdFRleHRIZWlnaHQge1xyXG4gICAgIGhlaWdodDogMjB2aDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gLnJlYWQtbW9yZS1idG57XHJcbiAgICAgIHdpZHRoOjIwJTtcclxuICAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gfVxyXG4gLmJhbm5lci1qZWUtaW1nIGltZ3tcclxuICAgICB3aWR0aDo0JTtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICBwYWRkaW5nOiAycHg7XHJcbiB9XHJcbiAudGFsay10by1leHBlcnQgLmNhcmQtYm9keSBpbWd7XHJcbiAgICAgd2lkdGg6NjAlXHJcbn1cclxuLm90aGVyLWNvdXJzZXMgLmNhcmQtYm9keSBwe1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgIC5zZWN0aW9uTW9iSGlkZXtcclxuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICB9XHJcbiAgICAgLmN1c3QtcGFkZGluZ3tcclxuICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICB9XHJcbiAgICAgLmZsZXgtaG9sZGVye1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIC5iYW5uZXItamVlLWltZyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmV4YW0tY29udGVudC1iYW5uZXJ7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgICB9XHJcbiAgICAgIC5leGFtLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNleGFtLWNvbnRlbnQtdGFie1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5yZWFkLW1vcmUtYnRue1xyXG4gICAgICAgICAgd2lkdGg6NDAlO1xyXG4gICAgICB9XHJcbiAgICAgICNleGFtLWNvbnRlbnQtdGFiIC51aS10YWJ2aWV3IC51aS10YWJ2aWV3LXBhbmVse1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZS1vZi1jb250ZW50IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7IFxyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzJSA4JTtcclxuICAgICAgfVxyXG4gICAgICAudGFsay10by1leHBlcnQgLmNhcmQtYm9keSBpbWd7XHJcbiAgICAgICAgICB3aWR0aDo1MCUgIWltcG9ydGFudFxyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZS1vZi1jb250ZW50e1xyXG4gICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgfVxyXG4gICAgICAud2hpdGUtdGV4dC0ye1xyXG4gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gfVxyXG5cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjBweClhbmQgKG1heC13aWR0aDo1NjRweCl7XHJcbiAgICAgICAuZXhhbS1jb250ZW50LWJhbm5lcntcclxuICAgICAgICAgIGhlaWdodDo1MCU7XHJcbiAgICAgICB9XHJcbiAgICAgICAuZmxleC1ob2xkZXIgLmJ0bi13aGl0ZXtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICB9XHJcblxyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KWFuZCAobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgICAgLmV4YW0tY29udGVudC1iYW5uZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICB9XHJcbiAgICAgLnRhbGstdG8tZXhwZXJ0IC5jYXJkLWJvZHkgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6MzAlXHJcbiAgICAgfVxyXG4gICAgIC50YWJsZS1vZi1jb250ZW50e1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgfVxyXG4gICAgICNleGFtLWNvbnRlbnQtdGFie1xyXG4gICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgIH1cclxuICAgICBcclxuIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwcHgpYW5kIChtYXgtd2lkdGg6NTY0cHgpe1xyXG4gICAgXHJcbiAgIC5iYW5uZXItamVlLWltZyBpbWd7XHJcbiAgICAgd2lkdGg6IDE1JTtcclxuICAgfVxyXG4gICBcclxuIH1cclxuXHJcbiBcclxuIC5vdGhlci1jb3Vyc2VzIC5jYXJkLWhlYWRlciBoNXtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gLnRhYmNvbnRlbnR7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGlja3lOYXZ7XHJcblx0cG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG5cdHRvcDogMTEuOCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR6LWluZGV4OiAxMTtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uc3RpY2t5RGl2e1xyXG5cdHBvc2l0aW9uOiBzdGlja3k7XHJcblx0dG9wOiAxOCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4gI25hdmJhcntcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmZ1bGwtd2lkdGgtdGFic3tcclxuICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuIH1cclxuI25hdmJhciAubmF2LWl0ZW0ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICBjb2xvcjogIzAwOTdkYjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDA5N2RiO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgICBjb2xvcjogIzAwMDtcclxufVxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTViNWM7XHJcbn1cclxuLnNoYWRle1xyXG4gICAgIGhlaWdodDogNXZoO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDExNzYpKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDEyMHB4O1xyXG59XHJcbi5zaGFkZXtcclxuICAgICBoZWlnaHQ6NXZoO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDExNzYpKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDYwcHg7XHJcbn1cclxuLnJlbGF0aXZlLXJvd3tcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlYWQtbW9yZS1idG57XHJcbiAgICAgd2lkdGg6MjAlO1xyXG4gICAgIG1hcmdpbjoyJSBhdXRvO1xyXG4gICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuXHJcblxyXG4uY29sbGVnZS1jb250ZW50LWJhbm5lcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIC8vIG1hcmdpbi10b3A6MTBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJSAyJTsgXHJcbiB9XHJcbiAuc2xpZGVyLWRpdntcclxuICAgICBwYWRkaW5nOjIwcHg7XHJcbiB9XHJcbiAuY29sbGVnZS1jb250ZW50e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDozLjglO1xyXG4gfVxyXG4gLmNvbGxlZ2UtY29udGVudC1wYWdlLWhlYWRlcntcclxuICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiB9XHJcbiAuZmxleC1ob2xkZXJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIH1cclxuIC5mbGV4LWhvbGRlcjF7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuIH1cclxuIC5mbGV4LWhvbGRlcjJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyM3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIG1hcmdpbi10b3A6MyU7XHJcbiB9XHJcbiAuZmxleC1ob2xkZXIzIGltZy5yYXRpbmctaW1ne1xyXG4gICAgIGhlaWdodDogNTAlO1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyMyBpbWcuc2hhcmUtaW1ne1xyXG4gICAgIGhlaWdodDogNTAlO1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyMyBpbWcucmV2aWV3LWltZ3tcclxuICAgICBoZWlnaHQ6IDUwJTtcclxuIH1cclxuIC5uZ3gtZ2FsbGVyeXtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyNHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyIHB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyMiBwe1xyXG4gICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuIH1cclxuIC5mbGV4LWhvbGRlcjMgcHtcclxuICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA2JTtcclxuIH1cclxuIC5mbGV4LWhvbGRlciBwOmxhc3QtY2hpbGR7XHJcbiAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyIC5pbWctZGl2IGltZ3tcclxuICAgICB3aWR0aDoxMDAlXHJcbiB9XHJcbiAuaW1nIGltZ3tcclxuICAgICB3aWR0aDo4MCVcclxuIH1cclxuIC5mbGV4LWhvbGRlcjIgaW1ne1xyXG4gICAgIC8vIHdpZHRoOiA3JTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyMSBpbWd7XHJcbiAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgd2lkdGg6IDUlO1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyMSBwIHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiB9XHJcbiAuZmxleC1ob2xkZXI0IGltZ3tcclxuICAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuIC5mbGV4LWhvbGRlcjQgcHtcclxuICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gfVxyXG4gLmZsZXgtaG9sZGVyNCBwOmZpcnN0LWNoaWxke1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuIH1cclxuIC5mbGV4LWhvbGRlcjQgcDpsYXN0LWNoaWxke1xyXG4gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5vcmFuZ2UtdGV4dHtcclxuICAgICBjb2xvcjogb3JhbmdlO1xyXG4gfVxyXG4gLmJ0bi1vcmFuZ2V7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzUwMDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE3cHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiB9XHJcbiAuYnRuLWJsdWV7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NGQ5NTtcclxuICAgICBwYWRkaW5nOiAwcHggNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgLy8gd2lkdGg6NTAlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiB9XHJcbiAuYnRuLWJsdWUgaW1nLFxyXG4gLmRsLWJ0biBpbWd7XHJcbiAgICAgLy8gd2lkdGg6MTUlO1xyXG4gICAgIHBhZGRpbmc6NXB4O1xyXG4gfVxyXG4gLm1sLTN7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MyVcclxuIH1cclxuIC5tbC00e1xyXG4gICAgIG1hcmdpbi1sZWZ0OjQlXHJcbiB9XHJcbiAuZGwtYnRue1xyXG4gICAgIGJvcmRlcjoxcHggc29saWQgIzI1NGQ5NTtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgcGFkZGluZzowcHggMjBweDtcclxuICAgICAvLyB3aWR0aDo1MCVcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuIC5idG4td2hpdGV7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiB9XHJcbiAuYnRuLW9yYW5nZSBpbWcsIFxyXG4gLmJ0bi13aGl0ZSBpbWd7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gfVxyXG4gLnRhbGstdG8tZXhwZXJ0e1xyXG4gICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAvLyBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiB9XHJcbiAuY29sbGVnZS1jb250ZW50LWRpdntcclxuICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxNXB4OyBcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIHBhZGRpbmc6IDElO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiB9XHJcbiAjY29sbGVnZS1jb250ZW50LXRhYntcclxuICAgICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgIC8vIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgIC8vIHBhZGRpbmc6IDElO1xyXG4gfVxyXG4gI2NvbGxlZ2UtY29udGVudC10YWIgLnVpLXRhYnZpZXcudWktdGFidmlldy10b3A+LnVpLXRhYnZpZXctbmF2OmZpcnN0LWNoaWxke1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAjY29sbGVnZS1jb250ZW50LXRhYiAudWktdGFidmlldy51aS10YWJ2aWV3LXRvcD4udWktdGFidmlldy1uYXY6bGFzdC1jaGlsZHtcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLm90aGVyLWNvdXJzZXMgLmNhcmQtaGVhZGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgICBjb2xvcjojZmZmO1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAub3RoZXItY291cnNlc3tcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuIH1cclxuIC5saW1pdFRleHRIZWlnaHQge1xyXG4gICAgIGhlaWdodDogMjB2aDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gLnJlYWQtbW9yZS1idG57XHJcbiAgICAgIHdpZHRoOjIwJTtcclxuICAgICAgbWFyZ2luOjclIGF1dG87XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuIH1cclxuIC50YWxrLXRvLWV4cGVydCAuY2FyZC1ib2R5IGltZ3tcclxuICAgICAgd2lkdGg6NDAlXHJcbiB9XHJcbiAub3RoZXItY291cnNlcyAuY2FyZC1oZWFkZXIgaDV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuIH1cclxuIC5pbmZvLWRpdntcclxuICAgICBtYXJnaW4tbGVmdDoxNCU7XHJcbiAgICAgbWFyZ2luLXRvcDozJVxyXG4gfVxyXG4gLmN1c3RvbS1wYWRkaW5nLXJvd3tcclxuICAgICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLnNvY2lhbC1zaGFyZS1kaWFsb2d7XHJcbiAgICAgbGVmdDoyMCVcclxuIH1cclxuIC5zb2NpYWwtaWNvbntcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgIHdpZHRoOiAyMCU7XHJcbiB9XHJcbiAuY3Vyc29yLXBvaW50ZXJ7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG4gLmRpc2NvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAzJSAxJTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gLmJsb2ctY2FyZHtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICBib3JkZXI6bm9uZTtcclxuIH1cclxuIC50aW1lci1pbWd7XHJcbiAgICAgd2lkdGg6MTQlICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAubmF2LXRhYnMtdWx7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB9XHJcbiAgICAgLnN0aWNreURpdntcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlICAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG9wOjAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLnN0aWNreU5hdntcclxuICAgICAgICAgIHRvcDoxMS41JSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAudGFiY29udGVudHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDowcHggIWltcG9ydGFudDsgXHJcbiAgICAgfVxyXG4gICAgICAuY3VzdG9tLXBhZGRpbmctcm93e1xyXG4gICAgICAgICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1icy1ndXR0ZXIteTogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0b20tcGFkZGluZy1yaWdodHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MHB4ICFpbXBvcnRhbnRcclxuICAgICB9XHJcbiAgICAgLmN1c3RvbS1wYWRkaW5nLWxlZnR7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIC5idG5zLC5hZGQtaW5mb3tcclxuICAgICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgfVxyXG4gICAgIC5mbGV4LWhvbGRlcjJ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLmZsZXgtaG9sZGVyM3tcclxuICAgICAgICAgIG1hcmdpbjoyJSAwJTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDozJVxyXG4gICAgIH1cclxuICAgICAuZGwtYnRuLFxyXG4gICAgIC5idG4tYmx1ZXtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgIH1cclxuICAgICAuZmxleC1ob2xkZXIzIGltZy5yYXRpbmctaW1nLFxyXG4gICAgIC5mbGV4LWhvbGRlcjMgaW1nLnNoYXJlLWltZyxcclxuICAgICAuZmxleC1ob2xkZXIzIGltZy5yZXZpZXctaW1ne1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgfVxyXG4gICAgIC5kbC1idG57XHJcbiAgICAgICAgICBtYXJnaW46MCUgMyU7XHJcbiAgICAgfVxyXG4gICAgIC5vdGhlci1jb3Vyc2VzIC5jYXJkLWhlYWRlciBoNSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAuZmxleC1ob2xkZXIzIHAge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8tZGl2e1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgICB9XHJcbiAgICAgLmZsZXgtaG9sZGVyMSBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogNSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICB9XHJcbiAgICAgLmZsZXgtaG9sZGVye1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIC5iYW5uZXItamVlLWltZyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmV4YW0tY29udGVudC1iYW5uZXJ7XHJcbiAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICB9XHJcbiAgICAgIC5leGFtLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNleGFtLWNvbnRlbnQtdGFie1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgfVxyXG4gICAgICAucmVhZC1tb3JlLWJ0bntcclxuICAgICAgICAgIHdpZHRoOjQwJTtcclxuICAgICAgfVxyXG4gICAgICAjY29sbGVnZS1jb250ZW50LXRhYiAudWktdGFidmlldyAudWktdGFidmlldy1wYW5lbHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWxrLXRvLWV4cGVydCAuY2FyZC1ib2R5IGltZ3tcclxuICAgICAgICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50XHJcbiAgICAgIH1cclxuICAgICAgI2NvbGxlZ2UtY29udGVudC10YWIgLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctcGFuZWxcclxuICAgICAge1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDowcHhcclxuICAgICAgfVxyXG4gICAgICAuZmxleC1ob2xkZXIzIC5pbWctZGl2IGltZ3tcclxuICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICB9XHJcbiAgICAgLmNvbGxlZ2UtY29udGVudC1iYW5uZXJ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgIH1cclxuICAgICAuaW1nIGltZyAge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ibHVlIGltZywgXHJcbiAgICAgIC5kbC1idG4gaW1nIHtcclxuICAgICAgICAgIC8vIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmRsLWJ0biB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLWJsdWV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdG9tLXNwYWNpbmd7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAuaWl0LWhlYWRlcixcclxuICAgICAuaWl0LXN1YmhlYWRlcntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6NSVcclxuICAgICB9XHJcbiAgICAgLmNvbGxlZ2UtY29udGVudC1kaXZ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgIH1cclxuICAgICAuY3VzdG9tLXNwYWNpbmd7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnRcclxuICAgICB9XHJcbiAgICAgLnRhYmxlIHtcclxuICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICB9XHJcbiAgICAgLmlpdC1zdWJoZWFkZXJ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICB9XHJcbiAgICAgLmN1c3QtcGFkZGluZ3tcclxuICAgICAgICAgIHBhZGRpbmc6NSU7XHJcbiAgICAgfVxyXG4gICAgIC50YWItdGV4dCBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgIH1cclxuICAgICAuZmxleC1ob2xkZXIxIHB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgfVxyXG4gfVxyXG4gLmlpdC1oZWFkZXIsXHJcbiAuaWl0LXN1YmhlYWRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmlpdC1zdWJoZWFkZXJ7XHJcbiAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gfVxyXG4gLnJlbGF0aXZlLXJvd3tcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB9XHJcbiAuc2hhZGV7XHJcbiAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDExNzYpKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDEyMHB4O1xyXG4gfVxyXG4gI2NvbGxlZ2UtY29udGVudC10YWIgLnVpLXRhYnZpZXcudWktdGFidmlldy10b3AgPiAudWktdGFidmlldy1uYXY6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgI2NvbGxlZ2UtY29udGVudC10YWIgLnVpLXRhYnZpZXcudWktdGFidmlldy10b3AgPiAudWktdGFidmlldy1uYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICBiYWNrZ3JvdW5kOm9yYW5nZXJlZDtcclxuICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIHdpZHRoOjVweDtcclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgLnN0aWNreURpdntcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlICAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG9wOjAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLnRhYmNvbnRlbnR7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgIH1cclxuICAgICAuY3VzdG9tLXBhZGRpbmctcmlnaHR7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEycHggIWltcG9ydGFudFxyXG4gICAgIH1cclxuICAgICAuY3VzdG9tLXBhZGRpbmctbGVmdHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDoxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIC5paXQtaGVhZGVyLFxyXG4gICAgIC5paXQtc3ViaGVhZGVye1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OjUlXHJcbiAgICAgfVxyXG4gICAgIC5paXQtc3ViaGVhZGVyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgIC5jdXN0LXBhZGRpbmd7XHJcbiAgICAgICAgICBwYWRkaW5nOjMlO1xyXG4gICAgIH1cclxuICAgICAuaW1nIGltZ3tcclxuICAgICAgICAgIHdpZHRoOjgwJVxyXG4gICAgIH1cclxuICAgICAuZmxleC1ob2xkZXIxIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDc1JTsgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5mbGV4LWhvbGRlcjF7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ibHVlIGltZywgLmRsLWJ0biBpbWcge1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYmx1ZXtcclxuICAgICAgICAgIHBhZGRpbmc6MHB4IDMwcHhcclxuICAgICAgfVxyXG4gICAgICAuZmxleC1ob2xkZXIze1xyXG4gICAgICAgICAgIHBhZGRpbmctbGVmdDo4JVxyXG4gICAgICB9XHJcbiAgICAgIC5mbGV4LWhvbGRlcjMgaW1nLnJhdGluZy1pbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLmRsLWJ0bntcclxuICAgICAgICAgIHBhZGRpbmc6MHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuZGwtYnRuIHNwYW57XHJcbiAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8tZGl2e1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OjEyJTtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgLmZsZXgtaG9sZGVyMyAuaW1nLWRpdiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDo3MCVcclxuICAgICB9XHJcbiAgICAgLmNvbGxlZ2UtY29udGVudC1kaXZ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDowcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAgfVxyXG4gICAgIC5jb2xsZWdlLWNvbnRlbnQtYmFubmVye1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4XHJcbiAgICAgfVxyXG4gICAgICNjb2xsZWdlLWNvbnRlbnQtdGFie1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOjBweFxyXG4gICAgIH1cclxuICAgICAuZmxleC1ob2xkZXI0IGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICB9XHJcbiB9XHJcbiAuY3VzdG9tLXNwYWNpbmd7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgd2lkdGg6NzAlO1xyXG4gfVxyXG4gLnRhYi10ZXh0IHB7XHJcbiAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICBcclxuIH1cclxuIC50YWJsZSB7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuIH1cclxuIC50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzU5NWI1YztcclxuIH1cclxuIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgICBkaXNwbGF5OiB0YWJsZTtcclxuIH1cclxuIC50YWJsZT46bm90KGNhcHRpb24pPio+KntcclxuICAgICAgcGFkZGluZzo1cHggIWltcG9ydGFudFxyXG4gfVxyXG4gLmFuc3dlcntcclxuICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIC5xdWV7XHJcbiAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICBmb250LXNpemU6IDE4cHg7XHJcbiB9XHJcbiAuc2hhZGV7XHJcbiAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmZmYsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDExNzYpKTtcclxuICAgICBsZWZ0OiAwO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDYwcHg7XHJcbiB9XHJcbiAucC1yZWxhdGl2ZXtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gfVxyXG4gLnRhYmxlLWNvbnRlbnQgb2wgbGkgYXtcclxuICAgICBjb2xvcjogcmdiKDc5LCAxODQsIDIyMSk7XHJcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gfVxyXG4gI2NvbGxlZ2UtY29udGVudC10YWIgaDIge1xyXG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gfVxyXG4gI2NvbGxlZ2UtY29udGVudC10YWIgcCwgI2NvbGxlZ2UtY29udGVudC10YWIgdWwgPiBsaSB7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gfVxyXG4gI2NvbGxlZ2UtY29udGVudC10YWIgcCB7XHJcbiAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuIH1cclxuIC5jdXN0LXBhZGRpbmd7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxLjZyZW07XHJcbiB9XHJcbiAub3RoZXItY291cnNlcyAuY2FyZC1oZWFkZXIgaDV7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkgYW5kIChtYXgtd2lkdGg6MTQwMHB4KXtcclxuICAgICAuYnRuLW9yYW5nZXtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm90aGVyLWNvdXJzZXMgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgfVxyXG4gfVxyXG4gLmN1c3RvbS1wYWRkaW5nLXJpZ2h0e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjVweFxyXG4gfVxyXG4gLmN1c3RvbS1wYWRkaW5nLWxlZnR7XHJcbiAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiB9XHJcbiAudGFiY29udGVudHtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIC8vICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMiUgIWltcG9ydGFudDtcclxuIH1cclxuIC5zdGlja3lOYXZ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDExJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAuc3RpY2t5RGl2e1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuIC5mdWxsLXdpZHRoLXRhYnN7XHJcbiAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgIFxyXG4gfVxyXG4gI25hdmJhcntcclxuICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgY29sb3I6ICMwMDk3ZGI7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgICBib3JkZXItdG9wOm5vbmU7XHJcbiAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcclxuICAgICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjMDA5N2RiO1xyXG4gfVxyXG4gLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmU6aG92ZXIge1xyXG4gICAgIGNvbG9yOiAjMDA5N2RiO1xyXG4gfVxyXG4gLm5hdi10YWJzIC5uYXYtbGlua3tcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgIGNvbG9yOiMwMDA7XHJcbiB9XHJcbiAubmF2LXRhYnMtdWwgLm5hdi1pdGVtIGE6aG92ZXIge1xyXG4gICAgIGNvbG9yOiAjMDAwO1xyXG4gfVxyXG4gLmJnLXdoaXRle1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuIH1cclxuICNuYXZiYXIgLm5hdi1pdGVte1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIHBhZGRpbmc6MHB4O1xyXG4gfVxyXG4gLmN1c3RvbWUtaW1ne1xyXG4gICAgIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5jdXN0b21lLW9yZyB7XHJcbiAgICAgcGFkZGluZzogMHB4IDEwcHggNXB4IDlweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gLmFib3V0VXMtYmFubmVyIHtcclxuICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MCwgMTg1LCAyMjksIDAuOCksICMzMzUzOWQpO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiB9XHJcbiBcclxuIC5hYm91dC11cyB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDRkNDtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAvKiBtYXJnaW4tdG9wOiA1JTsgKi9cclxuIH1cclxuIFxyXG4gLmFib3V0LXVzLXBhZ2UtaGVhZGVyIHtcclxuICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiB9XHJcbiBcclxuIC5ob21lLWltZyB7XHJcbiAgICAgd2lkdGg6IDUwJVxyXG4gfVxyXG4gXHJcbiAuYXJyb3ctaW1nIHtcclxuICAgICB3aWR0aDogMjAlO1xyXG4gICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiB9XHJcbiBcclxuIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEge1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICAvKiBmbG9hdDogbGVmdDsgKi9cclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiB9XHJcbiBcclxuIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5ob21lIHtcclxuICAgICB3aWR0aDogMiU7XHJcbiAgICAgcGFkZGluZy10b3A6IDJweDtcclxuIH1cclxuIFxyXG4gLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93IHtcclxuICAgICB3aWR0aDogMiU7XHJcbiAgICAgcGFkZGluZy10b3A6IDJweDtcclxuIH1cclxuIFxyXG4gXHJcbiAvKiBzdGFydD0+ICovXHJcbiBcclxuIFxyXG4gbmF2IHVsIGxpIHtcclxuICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBwYWRkaW5nOiAwIDE0cHggIWltcG9ydGFudDtcclxuICAgICAvKiBjb2xvcjogI0ZGRjsgKi9cclxuICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiB9XHJcbiAjbmF2YmFye1xyXG4gICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuIH1cclxuIC5uYXYtaXRlbSBhIHtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gfVxyXG4gLm5hdi10YWJzIC5uYXYtbGlua3tcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgY29sb3I6ICMwMDA7XHJcbiB9XHJcbiBcclxuIFxyXG4gLmZhcS1iYW5uZXJ7XHJcbiAgICAgcGFkZGluZzo1JTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2IoODggMTQ3IDIzNSAvIDYlKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDQwLCAxODUsIDIyOSwgMC44KSwgIzMzNTM5ZCk7IFxyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiB9XHJcbiAuZmFxe1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiB9XHJcbiAgLyogLmZhcS1wYWdlLWhlYWRlcntcclxuICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICB9ICovXHJcbiAuaG9tZS1pbWd7XHJcbiAgICAgd2lkdGg6NTAlXHJcbiB9XHJcbiAuYXJyb3ctaW1ne1xyXG4gICAgIHdpZHRoOjMwJVxyXG4gfVxyXG4gLmZhcS1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIFxyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcbiAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhe1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIG1hcmdpbjowO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuIH1cclxuIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZXtcclxuICAgICB3aWR0aDoyJVxyXG4gfVxyXG4gLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvd3tcclxuICAgICB3aWR0aDoyJVxyXG4gfVxyXG4gLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmsgLndoaXRlLXRleHQtMntcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiB9XHJcbiAgLyogLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmt7XHJcbiAgd2lkdGg6MTUlOyBcclxuIH0gICovXHJcbiAucm93LXdpdGhvdXQtZ3V0dGVye1xyXG4gICAgIC0tYnMtZ3V0dGVyLXg6IDAgIWltcG9ydGFudDtcclxuICAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZmFxLWRpdiB7XHJcbiAgICAgIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gLm5lZWQtYXNzaS1pbWd7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHBhZGRpbmc6MTAlO1xyXG4gfVxyXG4gLm5lZWQtYXNzaS10ZXh0e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzI5NWVhMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtYm9keXtcclxuICAgICAgcGFkZGluZzoxMHB4IDBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtaGVhZGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTE4MzI7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2V7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtaGVhZGVyIGg1e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIFxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhICB7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6bm9uZVxyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICB9XHJcbiAgICAgICBcclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAubmVlZC1hc3NpLXRleHQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5uZWVkLWFzc2ktaW1ne1xyXG4gICAgICAgICAgIHdpZHRoOjcwJTtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBtYXJnaW46MHB4IGF1dG9cclxuICAgICAgfVxyXG4gICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgIH1cclxuICAgICAgLmZhcS1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgICBcclxuIH1cclxuIC5saW1pdFRleHRIZWlnaHQge1xyXG4gICAgIGhlaWdodDogMjB2aDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gLnRhYmNvbnRlbnR7XHJcbiAgICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLnN0aWNreU5hdntcclxuICAgIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcclxuICAgIHRvcDogMTIlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDExO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuIC5zdGlja3lEaXZ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAxOS41JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAjbmF2YmFye1xyXG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH1cclxuICNuYXZiYXIgLm5hdi1pdGVtIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICBjb2xvcjogIzAwOTdkYjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDA5N2RiO1xyXG4gfVxyXG4gLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIGNvbG9yOiAjMDAwO1xyXG4gfVxyXG4gLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgIHBhZGRpbmc6IDhweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICM1OTViNWM7XHJcbiB9XHJcbiAuc2hhZGV7XHJcbiAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZiwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0MTE3NikpO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogMTIwcHg7XHJcbiB9XHJcbiAuc2hhZGV7XHJcbiAgICAgaGVpZ2h0OjV2aDtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQxMTc2KSk7XHJcbiAgICAgbGVmdDogMDtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgYm90dG9tOiA2MHB4O1xyXG4gfVxyXG4gLnJlbGF0aXZlLXJvd3tcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB9XHJcbiAucmVhZC1tb3JlLWJ0bntcclxuICAgICB3aWR0aDoyMCU7XHJcbiAgICAgbWFyZ2luOjIlIGF1dG87XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gfVxyXG4gLm5hdi10YWJzIC5uYXYtbGluayAuYWN0aXZle1xyXG4gICAgIGNvbG9yOiAjMDA5N2RiICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDA5N2RiICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5uYXYtdGFicyAubmF2LXN1YmxpbmsgLmFjdGl2ZXtcclxuICAgICBjb2xvcjogIzAwOTdkYiAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAwOTdkYiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuY29sbGFwc2U6bm90KC5zaG93KSB7XHJcbiAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIDw9ZW5kICovXHJcbiBcclxuIFxyXG4gXHJcbiAuY29udGFpbmVyLWJveHtcclxuICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyLWJveCBkaXYgaW1ne1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gfVxyXG4gLmNvbnRhaW5lci1ib3ggZGl2OmhvdmVyIGltZ3tcclxuICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiB9XHJcbiAuZ2FsbGFyeXtcclxuICAgICBwYWRkaW5nOiAyNXB4IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbjogMTBweCBhdXRvICFpbXBvcnRhbnQ7ICBcclxuIH1cclxuIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIge1xyXG4gICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG4gLndoaXRlLXRleHQtMntcclxuICAgICBjb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gaW1nLCBzdmcge1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiB1bnNldDtcclxuIH1cclxuIC5nYWxsYXJ5LWJveHtcclxuICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luOiAzMHB4ICBhdXRvICFpbXBvcnRhbnQ7XHJcbiBcclxuIH1cclxuIC5nYWxsYXJ5LWl0ZW17XHJcbiAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICBncmlkLWdhcDogNDBweDtcclxuIH1cclxuIC5nYWxsYXJ5LWl0ZW0gaW1ne1xyXG4gICAgIHdpZHRoOiAyNSU7XHJcbiB9XHJcbiBcclxuIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuc2VydmljZS1saW5rIC53aGl0ZS10ZXh0LTIge1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgXHJcbiB9XHJcbiBcclxuIFxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ1MHB4KSBhbmQgKG1heC13aWR0aDoxMTAwcHgpe1xyXG4gICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZVtfbmdjb250ZW50LWtvbC1jMl0ge1xyXG4gICAgICAgICB3aWR0aDogMyU7XHJcbiAgICAgfVxyXG4gICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvd3tcclxuICAgICAgICAgd2lkdGg6IDQlO1xyXG4gICAgIH1cclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0NTBweCkgYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgIHdpZHRoOiA2JTtcclxuICAgICB9XHJcbiB9Il19 */"] });


/***/ }),

/***/ 12229:
/*!*****************************************************!*\
  !*** ./src/app/exam-content/exam-content.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamContentModule": () => (/* binding */ ExamContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _exam_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-content-routing.module */ 2462);
/* harmony import */ var _exam_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exam-content.component */ 44038);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);









class ExamContentModule {
}
ExamContentModule.ɵfac = function ExamContentModule_Factory(t) { return new (t || ExamContentModule)(); };
ExamContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ExamContentModule });
ExamContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _exam_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamContentRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_6__.TabViewModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExamContentModule, { declarations: [_exam_content_component__WEBPACK_IMPORTED_MODULE_1__.ExamContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _exam_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamContentRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_6__.TabViewModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_7__.AccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapseModule] }); })();


/***/ }),

/***/ 26661:
/*!******************************************!*\
  !*** ./src/assets/examData/fmge-exam.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fmgeexam": () => (/* binding */ fmgeexam)
/* harmony export */ });
const fmgeexam = {
    "Title": "MCI/NMC SCREENING TEST | FMGE EXAM 2021",
    "shortTitle": "mci screening test",
    "location": "",
    "type": "",
    "rating": "",
    "shareLink": "",
    "url": "fmge-exam",
    "info": [
        {
            "type": "text",
            "title": "",
            "data": "<p> <strong>Medical Council of India (MCI) / National Medical Commission (NMC) screening test</strong> is also commonly known as <strong>Foreign Medical Graduates Examination (FMGE)</strong>, is a national level licensure examination conducted twice a year by the National Board of Examinations (NBE) which is compulsory for foreign medical graduates for getting the permanent or provisional registration with MCI/NMC or other State Medical Council which will be <strong>held on 18th June, 2021</strong>.</p><p>Thet FMGE Screening Test was introduced by the <strong>Screening Test Regulations</strong> in the year 2002.The students who want to appreaded for MCI/NMC Screening Test/FMGE Exam they can get the application form & downloaded from the official website of NBE <a href=https://nbe.edu.in/ target=_blank> https://nbe.edu.in/</a>.</p><p>The Medical Council of India/National Medical Commission has the sole responsibility of maintaining the rules and regulations of the medical colleges and the universities and certifying the students who are in the medical course with the recognition of doctors.</p>"
        },
        {
            "type": "table-title",
            "title": "Summary of FMGE Exam or MCI/NMC Screening Test",
            "info": "",
            "col": [],
            "row": [
                ["MCI/NMC/FMGE Exam Date", "June 18th, 2021"],
                ["Examination Held", "Online (Computer based exam)"],
                ["Exam Pattern", "Multiple choice question"],
                ["No. of Questions", "300 (150 question in each paper)"],
                ["Negative Marking", "No, negative marking"],
                ["Syllabus", "All subjects taught at MBBS level"],
                ["Language of the Question Paper", "English"],
                ["Eligibility Criteria (Passing the Exam)", "150 out of 300"],
                ["Examination Fees", "Rs. 5,500 ( it is non-refundable)"],
                ["No. of Attempts (Exam)", "No, restrictions on number of attempts"]
            ]
        },
        {
            "type": "text",
            "title": "MCI/NMC Highest Passing Percentage Ratio by Country",
            "img": ""
        },
        {
            "type": "list-bollet",
            "title": "FMGE Exam Fees (Non-refundable)",
            "info": "",
            "data": [
                "The total fee for taking the FMGE exam is Rs. 5,500/- which is non-refundable.",
                "The payment for the application form can be made through either payment gateway or credit or debit card."
            ]
        },
        {
            "type": "text",
            "title": "FMGE Exam Pattern 2021",
            "data": "<p>The examination leading expert, National Board of Examinations (NBE), will announce the exam pattern of FMGE exam in its information bulletin.The FMGE exam will be conducted online which is a computer-based test. The exam will have a total of 300 multiple choice questions in two part which will be conducted in the English language. The exam will be divided into two part papers - the first part will be conducted in the morning session and the second part will be taken in the afternoon session consisting of 150 questions each. Below are the important pieces of information regarding the FMGE Exam one should keep in mind while sitting for MCI/NMC screening test/FMGE exam:</p>"
        },
        {
            "type": "list-bollet",
            "title": "",
            "info": "Information of FMGE Exam Pattern 2021 (Overview)",
            "data": [
                "Exam will be online (Computer base).",
                "The FMGE exam is divided into 2 parts - first in the morning session and second in the evening session.",
                "The duration of each part of the exam is 2 hours and 30 minutes",
                "Both part contains each 150 multiple choice questions.",
                "There is a short break between the two parts of examination.",
                "There will be multiple-choice questions (MCQs) asked in the exam with single correct response.",
                "The weightage of multiple choice question in each section will vary, National Board of Examinations (NBE) has the authority to alter the marks of the questions.",
                "No negative marking."
            ]
        },
        {
            "type": "list-bollet",
            "title": "FMGE Exam - Eligibility Criteria",
            "info": "",
            "data": [
                "Student must be an Indian citizen or abroad citizen of India.",
                "The Student must be completed the primary medical qualification, which is accepted by the Indian Embassy & to be recognised as a medical practitioner in the country.",
                "The student looking for provisional or permanent registration and holding undergraduate medical qualification from - New Zealand, United Kingdom, Australia, USA, Australia is recognised for enrolment as medical practitioner in that country, then the candidate need not to qualify the FMGE exam.",
                "It is compulsory to provide required documents proof to support candidates passed final examination and primary medical qualification.",
                "For candidates it is better to read the screening test rules & regulations on Graduate Medical Education and the Eligibility Certificate Regulations issued by the MCI ( Medical Council of India) / NMC (National Medical Commission)"
            ]
        },
        {
            "type": "list-bollet",
            "title": "Applicants Documents Required (FMGE Exam 2021)",
            "data": [
                "Date of birth proof",
                "Copy of applicant passport/Nationality Proof (e.g. Voters ID, Pan Card)",
                "Copy of 10+2 result certificate issued by the respective Board of Examination",
                "Certificate of passing primary medical qualification i.e. MBBS or equivalent with mark sheet.",
                "Copies of degrees need to be submitted by the candidate which is duly attested by a Gazetted Officer and self-certified. The degrees should be attested by the Embassy of India.",
                "Internship certificate (if any which is done abroad)",
                "Eligibility certificate issued by MCI/NMC (if available)",
                "If the certificates are in language other than English / Hindi. (need to be translated copies).",
                "Equivalence Certificate : From Association of Indian Universities (for 10+2 abroad)"
            ]
        },
        {
            "type": "text",
            "title": "How to Contact MCI/NMC?",
            "data": "<p>If you need to reach to MCI/NMC then you can search the address with Medical Council of India/National Medical Commission address which is situated in New Delhi.</p><p> <strong>MCI/NMC Address (Delhi)</strong> <br>Pocket- 14 , Sector – 8, Dwarka Phase -1 <br>New Delhi – 110077, INDIA</p><p> <strong>New Toll-free Number</strong> : 1800111154 ( from 9.30AM to 6.00 PM )</p><p> <strong>Phone No’s</strong> : +91-11-25367033, 25367035, 25367036, 25367037</p><p> <strong>Fax – General</strong> : +91-11-25367024, 25367028</p><p> <strong>Email</strong> : secy-mci@nic.in</p><p> <strong>Website: </strong> <a href=https://www.nmc.org.in/ target=_blank>https://www.nmc.org.in/</a> </p><p> <strong> Note:</strong></p><p>The MCI/NMC related latest news is a must to follow for the people who are seeking registration with MCI/NMC Screening Test/FMGE Exam. There are lots of news and events which comes under this section.</p><p>The announcements regarding the examinations and other details are provided in MCI/NMC latest news section of the website.</p>"
        }
    ],
    "Gallery": {},
    "Scholarship": {},
    "Faculty": {},
    "News & Articles": {},
    "Hostel": {},
    "qna": [],
    meta: [
        { name: "description", content: "FMGE/MCI/NMC exam is a licensure examination given by students who completed MBBS in abroad. Find out more about the exam pattern, syllabus, fees, and eligibility criteria.", itemprop: "", property: "", scheme: '' },
        { charset: "utf-8" },
        { name: "google", content: "notranslate" },
        { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no" },
        { name: "og:type", content: "website", itemprop: "", property: "", },
        { name: "og:image", content: "https://www.selectyouruniversity.com/images/mci-screening-test.jpg", itemprop: "", property: "", scheme: '' },
        { name: "og:description", content: "FMGE/MCI/NMC exam is a licensure examination given by students who completed MBBS in abroad. Find out more about the exam pattern, syllabus, fees, and eligibility criteria.", itemprop: "", property: "", scheme: '' },
        { name: "og:url", content: "https://www.selectyouruniversity.com/college/mci-screening-test", itemprop: "", property: "", scheme: '' },
    ],
    title: "FMGE/MCI/NMC Screening Test - Exam Pattern, Eligibility, Fees, Important Dates 2021",
    link: [
        { rel: 'alternate', href: 'https://www.selectyouruniversity.com/college/mci-screening-test' },
        { rel: 'canonical', href: 'https://www.selectyouruniversity.com/college/mci-screening-test' },
    ]
};


/***/ }),

/***/ 88796:
/*!**************************************************************************!*\
  !*** ./src/assets/examData/international-foundation-of-medicine-ifom.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internationalfoundationofmedicineifom": () => (/* binding */ internationalfoundationofmedicineifom)
/* harmony export */ });
const internationalfoundationofmedicineifom = {
    "Title": "INTERNATIONAL FOUNDATION OF MEDICINE",
    "shortTitle": "International foundation of medicine",
    "location": "",
    "type": "",
    "rating": "",
    "shareLink": "",
    "url": "international-foundation-of-medicine-ifom",
    "info": [
        {
            "type": "text",
            "title": "",
            "data": "<p><strong>IFOM</strong> is the <strong>International Foundation of Medicine</strong> exam conducted by the <strong>National Board of Medical Examiners (NBME)</strong> to design high-quality assessments for healthcare professionals.</p><p>Generally, the USMLE exam has many questions that largely US-based such as public health, population health & healthcare questions.</p><p>IFOM is the pre-form of the USMLE exam which includes the questions that often used by the USMLE exam.</p>"
        },
        {
            "type": "list-bollet",
            "title": "",
            "info": "The IFOM has mainly two exams,",
            "data": [
                "Basic Science Exam i.e BSE",
                "Clinical Science Exam i.e. CSE"
            ]
        },
        {
            "type": "text",
            "title": "",
            "data": "<p>// IFOM Clinical Science Self-Assessment</p><p>The IFOM program offers accessible, high-quality examinations that help the organizations & medical schools to compare the performance of students against the international standard. </p>"
        },
        {
            "type": "list-bollet",
            "title": "Why IFOM?",
            "info": "Students prefer IFOM exam for the following reasons:",
            "data": [
                "IFOM exams familiarize yourself with the type of questions asked in the exams like USMLE.",
                "Through the IFOM exam, the medical students can compare their score with respect to the USMLE exam.",
                "If you are a non-native English speaker & also want to practice in the USA then IFOM is the substantial option for those students available in a different language."
            ]
        },
        {
            "type": "list-bollet",
            "title": "It’s For Whom?",
            "info": "IFOM exams organized by individuals or by organizations such as medical schools, residency programs, internships, Ministries of Health or Education for various purposes including:",
            "data": [
                "To test the knowledge of students before/after the phases of education",
                "To select a particular student for training programs such as internships, residency or exchange programs.",
                "For national & regional certification.",
                "To evaluate the curriculum or other assessments.",
                "To prepare the students for the USMLE exam.",
                "To make the quality medical professionals who can sustain against the international standard."
            ]
        },
        {
            "type": "list-bollet",
            "title": "Availability of language for IFOM exam",
            "info": "",
            "data": [
                "The exams like BSE & CSE are available in both languages like English or Spanish.",
                "The exam-like IFOM CSE is available in English, Spanish & Portuguese.",
                "If you want to apply for the IFOM exam in some other language other than above language, you can free to contact the IFOM team for further process."
            ]
        },
        {
            "type": "list-bollet",
            "title": "Main Advantage of IFOM Exam",
            "info": "IFOM exams developed by the committees of international content experts have the following advantages:",
            "data": [
                "IFOM exam offers the international norm & relevant descriptive information.",
                "It reflects the performance of medical students from participating in medical schools around the world."
            ]
        },
        {
            "type": "text",
            "title": "About BSE & CSE exam",
            "data": '<h3><strong>IFOM - BSE Exam</strong></h3><p>IFOM Basic Science Examination is developed to assess international knowledge with respect to medical students who have completed the preclinical curriculum & wants to start their study of clinical medicine.</p><span>2</span><h3><strong>IFOM - CSE Exam</strong></h3><p>IFOM Clinical Science Examination is developed to assess clinical knowledge in medicine, surgery, pediatrics, surgery, etc. for those students who are in the final year of undergraduate medical education.</p>'
        },
        {
            "type": "list-bollet",
            "title": "Passing Score of IFOM Exam in Bogomolets National Medical University (2019-20)",
            "info": "",
            "data": [
                "The medical students from the Bogomolets National Medical University have applied the IFOM exams conducted by the NBME & it seems the major benchmark set by the medical students that the 92% of students from the university have cleared IFOM exam successfully.",
                "It is one of the highest passing percentages of IFOM exams other than universities of the world.",
                "The exam was taken in the English language.",
                "Apart from Bogomolets National Medical University, there was 0% passing percentage of Iviv, Ivano Frankivsk University & 1% passing percentage of Ternopil & Kharkiv National Medical University."
            ]
        },
        {
            "type": "text",
            "title": "Why So?",
            "data": '<p>As a part of continuous improvement of medical programs, Bogomolets Medical University always ranked high compared to other universities in the world. The era of a university is to establish the international standard among the medical students.</p><p>For this purpose, the university has designed a well-structured & advanced curriculum for the medical course of study.</p>'
        },
        {
            "type": "list-bollet",
            "title": "Passing Score of IFOM Exam in Ukraine",
            "info": "",
            "data": [
                "This year, the IFOM exam was conducted in Ukraine.",
                "Around 4442 students appeared for the exam.",
                "The exam was taken in the English language.",
                "Apart from Bogomolets National Medical University, there was 0% passing percentage of Iviv, Ivano Frankivsk University & 1% passing percentage of Ternopil & Kharkiv National Medical University.",
                "The medical students from the Bogomolets National Medical University have applied the IFOM exams conducted by the NBME & it seems the major benchmark set by the medical students that the 92% of students from the university have cleared IFOM exam successfully.",
                "It is one of the highest passing percentages of IFOM exams.",
                "As a part of continuous improvement of medical programs, Bogomolets Medical University always ranked higher compared to other universities."
            ]
        }
    ],
    "Gallery": {},
    "Scholarship": {},
    "Faculty": {},
    "News & Articles": {},
    "Hostel": {},
    "qna": [],
    meta: [
        { name: "description", content: "International Foundation of Medicine exam conducted by the NBME offers the questions used by USMLE exam. ", itemprop: "", property: "", scheme: '' },
        { charset: "utf-8" },
        { name: "google", content: "notranslate" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0,maximum-scale=1, user-scalable=no" },
        { name: "og:type", content: "website", itemprop: "", property: "", },
        { name: "og:image", content: "https://www.selectyouruniversity.com/images/international-foundation-of-medicine.jpg", itemprop: "", property: "", scheme: '' },
        { name: "og:description", content: "International Foundation of Medicine exam conducted by the NBME offers the questions used by USMLE exam. ", itemprop: "", property: "", scheme: '' },
        { name: "og:url", content: "https://www.selectyouruniversity.com/college/international-foundation-of-medicine", itemprop: "", property: "", scheme: '' },
    ],
    title: "IFOM Exam 2020 - Registration, Score & Exam Dates",
    link: [
        { rel: 'alternate', href: 'https://www.selectyouruniversity.com/college/international-foundation-of-medicine' },
        { rel: 'canonical', href: 'https://www.selectyouruniversity.com/college/international-foundation-of-medicine' },
    ]
};


/***/ }),

/***/ 86204:
/*!*********************************************!*\
  !*** ./src/assets/examData/neet-pg-exam.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neetpgexam": () => (/* binding */ neetpgexam)
/* harmony export */ });
const neetpgexam = {
    "Title": "NEET PG EXAM 2022",
    "shortTitle": "Neet pg exam",
    "location": "",
    "type": "",
    "rating": "",
    "shareLink": "",
    "url": "neet-pg-exam",
    "info": [
        {
            "type": "text",
            "title": "",
            "data": "<p>Every year, the NEET PG Exam is held for admission to 26,168 MD seats, 13649 MS seats, and 922 PG Diploma seats. To take the admission exam, candidates must have an MBBS degree approved by the National Medical Commission (NMC). To be eligible for participation in the admission process, you must pass the NEET PG Cut Off.</p><p>Registration is the first step in the NEET PG 2022 application process. In addition to registration, the NEET PG application procedure includes stages like filling out the application form, submitting pictures in the correct format, and paying the application cost.</p><p>To be admitted to the exam application, candidates must first register online. It should be noted that the NBE only accepts applications for the exam over the internet.</p><p>NEET PG applications sent offline or in any other method are not accepted. As part of the registration process, candidates must provide basic information such as their name, date of birth, e-mail address, and phone number. A login ID and password are generated and emailed to the registered email address after successful registration.</p>"
        },
        {
            "type": "table",
            "title": "NEET PG Exam 2022 - Quick Highlights",
            "info": "",
            "col": [
                "Particulars",
                "Details"
            ],
            "row": [
                {
                    "Particulars": "Exam Name",
                    "Details": "NEET PG"
                },
                {
                    "Particulars": "Exam Conducting Authority",
                    "Details": "National Board of Examination (NBE)"
                },
                {
                    "Particulars": "Frequency",
                    "Details": "Once a year"
                },
                {
                    "Particulars": "Exam Level",
                    "Details": "National"
                },
                {
                    "Particulars": "Exam Mode",
                    "Details": "Online Computer Based Test"
                },
                {
                    "Particulars": "Number of Questions",
                    "Details": "200"
                },
                {
                    "Particulars": "Type of Questions",
                    "Details": "MCQs"
                }
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET PG Exam 2022: Application Process",
            "info": "",
            "data": [
                "Registration, filling out the application form, paying the examination fee, and importing documents are all processes in the NEET PG 2022 application procedure.",
                "Registration is the first step in the application process. Only applicants who register on the official NBE website, will be eligible to submit an application for NEET PG 2022.",
                "Candidates are advised to verify the eligibility requirements before applying for the test.",
                "After completing the NEET PG registration procedure, a login ID and password will be generated.",
                "On January 15, the NBE issued the NEET PG application form 2022.",
                "Candidates had to provide scanned copies of their signatures and pictures to complete the software procedure.",
                "To complete NEET PG programmes in 2022, they had to pay a non-refundable application fee.",
                "The closing date to submit the application form for the examination turned into March 25."
            ]
        },
        {
            "type": "table",
            "title": "NEET PG Exam - Application Fee",
            "info": "",
            "col": [
                "Category",
                "Fee (In INR)"
            ],
            "row": [
                {
                    "Category": "General/OBC",
                    "Fee (In INR)": "5,015 (including 18% GST)"
                },
                {
                    "Category": "SC/ST/PwD",
                    "Fee (In INR)": "3,835 (including 18% GST)"
                }
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET PG Exam - Eligibility Criteria (For 2022)",
            "info": "To fill NEET PG Application forms, you need to satisfy the below-mentioned NEET PG eligibility standards described through NBE.",
            "data": [
                "Nationality: Indian residents can follow NEET PG 2022. Foreign Medical Graduates (Indian residents or OCIs) who've passed the FMGE (Foreign Medical Graduate Examination) also can follow.",
                "Foreign Nationals: It is obligatory to have a temporary registration from the National Medical Commission (NMC) on the price of a nominal fee.",
                "Academic Qualification: It is obligatory to have a MBBS degree or MBBS pass certificates identified through the National Medical Commission (NMC)/ MCI.",
                "Internship: Apart from the MBBS degree, applicants have to have finished an internship earlier than July 31, 2022. MBBS Registration Certificate: It is obligatory to have a permanent or provisional registration certificate of MBBS qualification issued through the MCI (now NMC) or the State Medical Council.",
                "Age Limit: There isn't any higher age restriction to appear for NEET PG 2022 exam."
            ]
        },
        {
            "type": "table",
            "title": "NEET PG Exam Pattern 2022",
            "info": "",
            "col": [
                "Mode",
                "Computer-Based Mode"
            ],
            "row": [
                {
                    "Mode": "Number of Sessions",
                    "Computer-Based Mode": "Single"
                },
                {
                    "Mode": "Number of Questions",
                    "Computer-Based Mode": "200 MCQs"
                },
                {
                    "Mode": "Total Marks",
                    "Computer-Based Mode": "800"
                },
                {
                    "Mode": "Language of Question Paper",
                    "Computer-Based Mode": "English Only"
                },
                {
                    "Mode": "Exam Duration",
                    "Computer-Based Mode": "3 Hours 30 Minutes"
                },
                {
                    "Mode": "Type of Questions",
                    "Computer-Based Mode": "MCQs"
                },
                {
                    "Mode": "Correct answer",
                    "Computer-Based Mode": "(+) 4"
                },
                {
                    "Mode": "Incorrect answer",
                    "Computer-Based Mode": "(-) 1"
                },
                {
                    "Mode": "No response/ unanswered",
                    "Computer-Based Mode": "0"
                }
            ]
        },
        {
            "type": "list-bollet",
            "title": "Preparation Tips For NEET PG Exam",
            "info": "The following recommendations have to be kept in mind while getting ready for the NEET PG 2022 examination:",
            "data": [
                "Prepare a schedule: Candidates must have clarity in the thoughts about what to put together for the examination. Thus, there is a need to pick out the target to be achieved.",
                "Manage the time: Effective management of time means entire utilization of the time for our benefit. NEET PG syllabus is very complete and bulky.",
                "Divide the topics: Instead of dealing with a massive topic it is better to break it into smaller sub-portions after which deal with it. The applicants can take small portions of the subject each day and it is going to be less complicated to apprehend a vast subject.",
                "Clarification of doubts: While getting ready for the NEET PG 2022 examination the applicants getting ready for the examination will come upon problems, difficulties and doubts. These questions have to be addressed and answers have to be determined for them. The applicants can seek help from the subject expert, instructors and scholars. For an excellent hold and deep information of the topics, all of the doubts need to be clarified.",
                "Regular assessment: Each day evaluation of the progress has to be executed through the applicants. Unless the achievement level is known the preparation is meaningless.",
                "Take a break: After putting in heavy labor during study hours the applicants need some rest and relaxation. Take a small break, refresh and come back to the study. This will permit rejuvenation of the faculties and higher performance."
            ]
        },
        {
            "type": "list-bollet",
            "title": "How to download NEET PG Admit Card 2022?",
            "data": [
                "Go to the legitimate internet site of NBE, https://natboard.edu.in/",
                'Select "NEET PG"',
                "Login with the use of the Applicant Login section",
                'Click on "Download admit card"',
                "Check the admit card for errors/ spelling mistake",
                "Download and keep the admit card of NEET PG"
            ]
        },
        {
            "type": "text",
            "title": "NEET PG Exam - Reservation Criteria",
            "data": "<p>NEET PG 2022 reservation defines the limits at the allocation of seats to the reserved and non-reserved category candidates. Candidates of reserved category and non-reserved category need to undergo the NEET PG 2022 reservation standards to get a clear understanding of the seat distribution of the various two. Reservation criteria for NEET PG 2022 are described below:</p>"
        },
        {
            "type": "table",
            "title": "",
            "info": "NEET PG 50% AIQ Seats Reservation (Revised)",
            "col": [
                "Category",
                "Reservation"
            ],
            "row": [
                {
                    "Category": "OBC(Non-creamy layer)",
                    "Reservation": "27%"
                },
                {
                    "Category": "SC",
                    "Reservation": "15%"
                },
                {
                    "Category": "ST",
                    "Reservation": "7.5%"
                },
                {
                    "Category": "EWS",
                    "Reservation": "10%"
                },
                {
                    "Category": "PwD",
                    "Reservation": "5%"
                }
            ]
        },
        {
            "type": "text",
            "title": "NEET PG Exam Answer Key (2022)",
            "data": "<p>The National Board of Examinations (NBE) wishes to keep the contents of the NEET PG query paper private, as formerly stated. As a result, applicants are required to sign a non-disclosure agreement (NDA) while filing their examination application. To obtain the answer key from the legit website, observe the instructions mentioned below:</p>"
        },
        {
            "type": "list-bollet",
            "title": "",
            "data": [
                "Candidates need to first visit the NBE's legitimate website (nbe.edu.in).",
                "Candidates need to visit the homepage and click on the 'NEET PG Answer Key 2022' link.",
                'Before pressing the "Submit" button, credentials need to be filled in.',
                "NEET PG 2022 solution key might be provided in PDF layout at the screen.",
                "Follow the marking scheme and the reaction sheet with the legit solution key to calculate the candidate's anticipated score.For your convenience, you could download the file."
            ]
        },
        {
            "type": "list-bollet",
            "title": "How to Check NEET PG Result?",
            "info": "Candidates can check their results through entering their credentials particularly Confirmation No., Testing ID and Date of Birth that's stated at the admit card issued through NBE. Steps to check the NEET PG Result and scorecard is stated below:",
            "data": [
                "Visit the legitimate web website online of NBE",
                "Click at the link for “NEET PG 2021 Results”",
                "Enter the specified credentials, i.e., testing id and date of birth to download the result",
                "Check the score and qualifying status on the",
                "Candidates are advised to download the final scorecard as it might be required at the time of counseling as well as final reporting to the university for admission."
            ]
        },
        {
            "type": "list-bollet",
            "title": "Top Colleges after NEET PG Exam",
            "info": "",
            "data": [
                "AIIMS Delhi",
                "JIPMER",
                "Tolani Maritime Institute Pune",
                "St. John’s Medical College Bangalore",
                "Jamia Hamdard University"
            ]
        },
        {
            "type": "table",
            "title": "Top Recommended Books for NEET PG Exam",
            "info": "Given under are a number of the generally referred books by Medical aspirants to crack NEET PG 2022. Subject wise references are given to make it less complicated for applicants to put together accordingly:",
            "col": [
                "Subjects",
                "Author's Name",
                "Book Name"
            ],
            "row": [
                {
                    "Subjects": "Microbiology",
                    "Author's Name": "Rachana Chaurasia & Anshul Jain",
                    "Book Name": "Self-Assessment & Review Microbiology & Immunology"
                },
                {
                    "Subjects": "Pathology",
                    "Author's Name": "Robbins & Vinay Kumar",
                    "Book Name": "Pathologic Basis of Disease"
                },
                {
                    "Subjects": "Pharmacology",
                    "Author's Name": "Gobind Rai Garg & Sparsh Gupta",
                    "Book Name": "Review of Pharmacology"
                },
                {
                    "Subjects": "Forensic Medicine",
                    "Author's Name": "Arvind Arora",
                    "Book Name": "Self-Assessment & Review of Basic Subjects (Anatomy & Forensic Medicine)"
                },
                {
                    "Subjects": "Pediatrics",
                    "Author's Name": "O P Ghai",
                    "Book Name": "Essential Pediatrics"
                },
                {
                    "Subjects": "Anatomy",
                    "Author's Name": "Rachana Chaurasiya",
                    "Book Name": "Self-Assessment and Review of Microbiology and Immunology"
                },
                {
                    "Subjects": "Social and Preventive medicine",
                    "Author's Name": "Vivek Jain",
                    "Book Name": "Review of Preventive & Social Medicine (Including Biostatistics)"
                },
                {
                    "Subjects": "Medicine Dermatology And Venereology",
                    "Author's Name": "Saumya Shukla, Anurag Shukla.",
                    "Book Name": "Across: A Complete Review of Short Subjects Volume – 1, Dermatology (Skin and Venereal Diseases), Anesthesia, Radiotherapy, Nuclear Medicine, Radiodiagnosis, Psychiatry, Ophthalmology, Orthopedics"
                },
                {
                    "Subjects": "Surgery, ENT, Orthopedics, Anesthesia",
                    "Author's Name": "Shibbu George",
                    "Book Name": "Smart Study Series: ENT and Head & Neck Surgery"
                },
                {
                    "Subjects": "Radiodiagnosis and Radiotherapy",
                    "Author's Name": "Narender Rohilla",
                    "Book Name": "Smart Study Series Radiology"
                },
                {
                    "Subjects": "Ophthalmology",
                    "Author's Name": "Across",
                    "Book Name": "Across: A Complete Review of Short Sub (Skin, Anae.Radi.Nuclear Med.Psych, Opthal, Ortho)"
                },
                {
                    "Subjects": "Obstetrics And Gynecology",
                    "Author's Name": "Amit Tripathi/ Ashish Gupta/ Arvind Arora.",
                    "Book Name": "Review of Post Graduate Medical Entrance Examinations (Medicine, Gynae & Obs. Pediatrics, Ophthalmology, Psychiatry, Radiology) Vol 3"
                },
                {
                    "Subjects": "Psychiatry",
                    "Author's Name": "Mohan Sunil Kumar",
                    "Book Name": "Smart Study Series: Psychiatry"
                },
                {
                    "Subjects": "Physiology",
                    "Author's Name": "Vivek Nalgirkar",
                    "Book Name": "Smart Study Series: Physiology"
                },
                {
                    "Subjects": "Biochemistry",
                    "Author's Name": "Rebecca James Perumcheril",
                    "Book Name": "Self-Assessment and Review of Biochemistry"
                }
            ]
        }
    ],
    "Gallery": {},
    "Scholarship": {},
    "Faculty": {},
    "News & Articles": {},
    "Hostel": {},
    "qna": [],
    meta: [
        { name: "description", content: "What after MBBS? Wish to go for MD/MS? NEET PG is the entrance exam you need to clear to get admission to your dream medical pg courses. Click here for more.", itemprop: "", property: "", scheme: '' },
        { charset: "utf-8" },
        { name: "google", content: "notranslate" },
        { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
        { name: "og:type", content: "website", itemprop: "", property: "", },
        { name: "og:image", content: "https://www.selectyouruniversity.com/images/neet-pg-exam.jpg", itemprop: "", property: "", scheme: '' },
        { name: "og:description", content: "What after MBBS? Wish to go for MD/MS? NEET PG is the entrance exam you need to clear to get admission to your dream medical pg courses. Click here for more.", itemprop: "", property: "", scheme: '' },
        { name: "og:url", content: "https://www.selectyouruniversity.com/college/neet-pg-exam", itemprop: "", property: "", scheme: '' },
    ],
    title: "NEET PG Exam 2022: Cutoff, Result, Counselling, Syllabus",
    link: [
        { rel: 'alternate', href: 'https://www.selectyouruniversity.com/college/neet-pg-exam' },
        { rel: 'canonical', href: 'https://www.selectyouruniversity.com/college/neet-pg-exam' },
    ]
};


/***/ }),

/***/ 4292:
/*!*********************************************!*\
  !*** ./src/assets/examData/neet-ug-exam.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neetugexam": () => (/* binding */ neetugexam)
/* harmony export */ });
const neetugexam = {
    "Title": "MCI/NMC SCREENING TEST | FMGE EXAM 2021",
    "shortTitle": "mci screening test",
    "location": "",
    "type": "",
    "rating": "",
    "shareLink": "",
    "url": "neet-ug-exam",
    "info": [
        {
            "type": "text",
            "title": "NEET Entrance Test - Introduction",
            "data": "<p><strong>NEET (National Eligibility Cum Entrance Test)</strong> is the Medical Entrance Exam conducted by the National Testing Agency <strong>(NTA)</strong>. By qualifying the NEET exam, one can get a admission into MBBS/BDS Course. The NEET Entrance test is applicable only for undergraduates. NEET offers almost <strong>90,000 seats</strong> for MBBS/BDS students to the Medical and Dental College of India.</p><p>As per the Supreme Court’s order in 2016, no other entrance exam, except NEET will be considered to fill the <strong>All India Quota Seats</strong> as well as the <strong>State Level Quota seats</strong> across the country. This examination will also be considered as valid for applying to private & government medical colleges except for <strong>AIIMS & JIPMER</strong> across the country.</p>"
        },
        {
            "type": "list-bollet",
            "title": "",
            "info": "Depending upon NEET Score, Seats are allotted to students are:",
            "data": [
                "State Government Quota Seats",
                "Central Institutions/Universities/Deemed Universities",
                "All India Quota Seats",
                "State/NRI/Management Quota Seats in Private Medical/Dental colleges",
                "Central Pool Quota Seats"
            ]
        },
        {
            "type": "text",
            "title": "NEET Entrance Test - Introduction",
            "data": "<span class=neet-new><img src=images/newicon.gif alt=neicon /></span><p class=neet-note>The notification for NEET 2022 has been released. The application form will be started from th 2nd April 2022.</p>"
        },
        {
            "type": "table-title",
            "title": "NEET UG Exam 2022: Overview",
            "info": "",
            "col": [],
            "row": [
                ["Name of the Examination", "(NEET) National Eligibility cum Entrance Test"],
                ["Exam Conducting Authority", "National Testing Agency (NTA)"],
                ["Centre of NEET 2022 Examination", "As indicated on Admit Card"],
                ["NTA Official Website", "https://nta.ac.in"],
                ["Exam Type", "National Level Medical Entrance"],
                ["Examination Occurrence", "Once in a Year (By NTA)"],
                ["Mode of the Exam", "Online (Computer Based)"],
                ["Subjects", "Physics, Chemistry, Botany & Zoology"],
                ["Number of Questions", "180 Questions"],
                ["Negative Marking", "Negative 1 Mark for every Wrong Answer"],
                ["Courses Offered", "MBBS & BDS"],
                ["Exam Pattern", "MCQs (Multiple Choice Questions)"],
                ["Duration of Exam", "3:00 Hours"],
                ["Timing of Examination", "2.00pm to 5.00pm"],
                ["Medium of Examination", "11 Languages (including Hindi & English)"]
            ]
        },
        {
            "type": "text",
            "title": "",
            "data": '<h3 id="blink_me"><a href="https://www.selectyouruniversity.com/neet-ug-rank-predictor.php" target="_blank" style="color: #fff;" >Click here to Check your NEET Rank</a></h3>'
        },
        {
            "type": "table",
            "title": "NEET Exam Pattern (2022)",
            "info": "Following are the exams which covered the topics from (Physics, Chemistry, Botany & Zoology).",
            "col": [
                "Subjects",
                "Sections",
                "No. of Questions",
                "Section-wise Marks"
            ],
            "row": [
                { "Subjects": "Physics", "Sections": "Section A", "No. of Questions": "35", "Section-wise Marks": "140" },
                { "Subjects": "Physics", "Sections": "Section B", "No. of Questions": "15", "Section-wise Marks": "40" },
                { "Subjects": "Chemistry", "Sections": "Section A", "No. of Questions": "35", "Section-wise Marks": "140" },
                { "Subjects": "Chemistry", "Sections": "Section B", "No. of Questions": "15", "Section-wise Marks": "40" },
                { "Subjects": "Botany", "Sections": "Section A", "No. of Questions": "35", "Section-wise Marks": "140" },
                { "Subjects": "Botany", "Sections": "Section B", "No. of Questions": "15", "Section-wise Marks": "40" },
                { "Subjects": "Zoology", "Sections": "Section A", "No. of Questions": "35", "Section-wise Marks": "140" },
                { "Subjects": "Zoology", "Sections": "Section B", "No. of Questions": "15", "Section-wise Marks": "40" },
                { "Subjects": "", "Sections": "", "No. of Questions": "Total Marks", "Section-wise Marks": "720" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "",
            "info": "Note:",
            "data": [
                "The exam duration will be 3.00 Hours.",
                "Every correct answer will count 4 marks.",
                "1 mark will be deducted for every incorrect answer from total score.",
                "For every unanswered question, marks are not be deducted."
            ]
        },
        {
            "type": "table",
            "title": "NEET Exam Answer Key 2022 (Download PDF for All Codes)",
            "info": "",
            "col": [
                "Sr. No.",
                "Answer Key Codes"
            ],
            "row": [
                { "Sr. No.": "1", "Answer Key Codes": "NEET answer key Q1, Q2, Q3, Q4, Q5, Q6" },
                { "Sr. No.": "2", "Answer Key Codes": "NEET answer key R1, R2, R3, R4, R5, R6" },
                { "Sr. No.": "3", "Answer Key Codes": "NEET answer key S1, S2, S3, S4, S5, S6" },
                { "Sr. No.": "4", "Answer Key Codes": "NEET answer key T1, T2, T3, T4, T5, T6" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET Exam Result 2022 - Revised Ranking Criteria",
            "info": "",
            "data": [
                "Greater marks/percentile score in Biology (Botany & Zoology), Chemistry and Physics (in that order)",
                "If the marks in all topics also are the same, the scholars with less proportion of wrong questions attempted could be given a better rank accompanied through less proportion of wrong questions in Biology, Chemistry and Physics (in that order)",
                "If all these marks also tally, applicants who're older in age could be given better rank",
                "In case the applicants share their birthday, the candidate who has applied for NEET examination in advance could get higher rank (Application number in ascending order)."
            ]
        },
        {
            "type": "list-bollet",
            "title": "State Wise Counselling for NEET Examination 2022",
            "info": "",
            "data": [
                "The Counselling of NEET Entrance exam for ESIC quota, All India Quota, and the seats in Central and Deemed Universities will be conducted by DGHS (Director General of Health Services) followed by Medical Counselling Committee.",
                "For State Quota seats, the Counselling will be done by State Counselling Authorities.",
                "Seat allotment will depend on NEET UG rank and NEET Score.",
                "Preferences will be provided at the time of NEET Counselling Process."
            ]
        },
        {
            "type": "table-title",
            "title": "",
            "info": "",
            "col": [],
            "row": [
                ["Maharashtra NEET Counselling", "Madhya Pradesh NEET Counselling"],
                ["Uttar Pradesh NEET Counselling", "Bihar NEET Counselling"],
                ["Rajasthan NEET Counselling", "Delhi NEET Counselling"],
                ["Karnataka NEET Counselling", "Gujarat NEET Counselling"],
                ["West Bengal NEET Counselling", "Kerala NEET Counselling"],
                ["Tamil Nadu NEET Counselling", "Andhra Pradesh NEET Counselling"],
                ["Chhattisgarh NEET Counselling", "Punjab NEET Counselling"],
                ["Uttarakhand NEET Counselling", "Haryana NEET Counselling"]
            ]
        },
        {
            "type": "table",
            "title": "Seat Reservation in NEET Exam 2022",
            "info": "",
            "col": [
                "Category",
                "Percentage of Total Seats Reserved"
            ],
            "row": [
                { "Category": "General", "Percentage of Total Seats Reserved": "37.5%" },
                { "Category": "GEN-EWS", "Percentage of Total Seats Reserved": "10%" },
                { "Category": "OBC-NCL", "Percentage of Total Seats Reserved": "27%" },
                { "Category": "SC", "Percentage of Total Seats Reserved": "15%" },
                { "Category": "ST", "Percentage of Total Seats Reserved": "7.5%" },
                { "Category": "Physically Handicapped", "Percentage of Total Seats Reserved": "3%" }
            ]
        },
        {
            "type": "text",
            "title": "",
            "data": '<h3 id="blink_me"><a href="https://www.selectyouruniversity.com/neet-ug-rank-predictor.php" target="_blank" style="color: #fff;" >Click here to Check your NEET Rank</a></h3>'
        },
        {
            "type": "list-bollet",
            "title": "NEET Eligibility Criteria (2022)",
            "info": "",
            "data": [
                "The candidate must be completed 17 years of age or above.",
                "There is no upper age limit to appear in NEET exam now.",
                "The candidate must be cleared 12th examination with a minimum of 50% marks in (PCB) and English individually.",
                "The candidates belonging to SC/ST/OBC categories must be cleared 12th examination with a minimum of 40% marks in (PCB)",
                "The candidate must be an Indian citizen.",
                "The candidates belonging to Scheduled Tribes & Caste, and any other Backward Categories there is a relaxation of 5 years.",
                "If the candidates failed to meet the above mentioned criteria will not be permitted to apply for NEET test 2022."
            ]
        },
        {
            "type": "table-title",
            "title": "",
            "info": "Accordingly the eligibility criteria regarding age limit have been revised as under:",
            "col": [],
            "row": [
                ["For Candidates of General(UR)/General-EWS", "born on or before 31/12/2003"],
                ["For Candidates of SC/ST/OBC-NCL/PwD Category", ""]
            ]
        },
        {
            "type": "list-bollet",
            "title": "Nationality Criteria: For NEET Exam",
            "info": "",
            "data": [
                "The candidate should be an Indian Citizen.",
                "Persons with Indian Origin (PIOs), Non-Resident Indians (NRIs), Overseas Citizen of India (OCIs) and Foreign Nationals are also eligible.",
                "Candidates belonging to the Andhra Pradesh and Telangana are also eligible for 15% of All India Quota Seats.",
                "Candidates from J & K state are eligible for 15% All India Quota Seats on the basis of self-declaration."
            ]
        },
        {
            "type": "text",
            "title": "How to Apply for NEET UG Exam 2022?",
            "data": '<p>The application process for the NEET Entrance Test is submitted through the online portal on the official website of NEET. There is no other mode for online application process of NEET entrance exam.</p><p><strong style="color: red;"><u>Step 1</u></strong>: Go to the website of <a href=https://nta.ac.in/medicalexam target=_blank>NTA Exam</a></p><p><strong style="color: red;"><u>Step 2</u></strong>: There are 5 options are available on the website: (Engineering, Medical, Management, College/University, Teaching).</p><p><strong style="color: red;"><u>Step 3</u></strong>: Select the National Eligibility Cum Entrance Test option.</p><p><strong style="color: red;"><u>Step 4</u></strong>: Click on the New User Registration Here button.</p><p><strong style="color: red;"><u>Step 5</u></strong>: Provide all the information in given fields like Father’s Name, Educational Qualification, address, name etc.</p><p><strong style="color: red;"><u>Step 6</u></strong>: SGR(System Generated Registration) number will appear on the screen. Note it down, it will be used for the future login process.</p><p><strong style="color: red;"><u>Step 7</u></strong>: Download the Admit Card.</p><p><strong style="color: red;"><u>Step 8</u></strong>: Confirm the application form details. Click on ‘Next and Preview’ option to check if all the information is correct before final submission.</p><p><strong style="color: red;"><u>Step 9</u></strong>: After reviewing the application form, click on the submit button.</p><p><strong style="color: red;"><u>Step 10</u></strong>: Upload the scan image of the photographs and signature.</p><p><strong style="color: red;"><u>Step 11</u></strong>: After this, you will get an option for Mode of Payment, through which you can pay the application fees.</p>'
        },
        {
            "type": "table",
            "title": "Application Fee: NEET Exam",
            "info": "",
            "col": [
                "Category of Student",
                "Application Fee (Rs.)"
            ],
            "row": [
                { "Category of Student": "General Category", "Application Fee (Rs.)": "Rs.1500/-" },
                { "Category of Student": "General-EWS/OBC-NCL", "Application Fee (Rs.)": "Rs.1400/-" },
                { "Category of Student": "SC/ST/PwD/Transgender", "Application Fee (Rs.)": "Rs.800/-" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "Documents Required: For NEET Counselling Process",
            "info": "",
            "data": [
                "Class 10 Certificate as Proof of Age",
                "Class 12 Certificate",
                "Admit Card",
                "Score Card",
                "Identity Proof",
                "Category Certificate issued by a competent authority",
                "10 Passport Size Photographs"
            ]
        },
        {
            "type": "table",
            "title": "Language Allowed: For NEET Entrance Test",
            "info": "The NEET exam is now been conducted in 13 languages. It has been modified from 11 languages to 13 languages after adding Punjabi and Malayalam exam centers last year. Check out the exam centers list with their respective languages for NEET exam:",
            "col": [
                "Medium of Question Paper",
                "Examination Centres"
            ],
            "row": [
                { "Medium of Question Paper": "English, Hindi and Urdu", "Examination Centres": "All examination centers across India" },
                { "Medium of Question Paper": "Assamese, Hindi and English", "Examination Centres": "Assam" },
                { "Medium of Question Paper": "Bengali, Hindi and English", "Examination Centres": "West Bengal and Tripura" },
                { "Medium of Question Paper": "Gujarati, Hindi and English", "Examination Centres": "Gujarat, Daman and Diu, Dadra and Nagar Haveli" },
                { "Medium of Question Paper": "Marathi, Hindi and English", "Examination Centres": "Maharashtra" },
                { "Medium of Question Paper": "Tamil, Hindi and English", "Examination Centres": "Tamil Nadu" },
                { "Medium of Question Paper": "Telugu, Hindi and English", "Examination Centres": "Andhra Pradesh & Telangana" },
                { "Medium of Question Paper": "Odia, Hindi and English", "Examination Centres": "Odisha" },
                { "Medium of Question Paper": "Kannada, Hindi and English", "Examination Centres": "Karnataka" },
                { "Medium of Question Paper": "Punjabi, Hindi and English", "Examination Centres": "Punjab" },
                { "Medium of Question Paper": "Malayalam, Hindi and English", "Examination Centres": "Kerala" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "Points to be Highlights: For NEET Entrance Exam",
            "info": "",
            "data": [
                "Students should have to give proper preferences while filling the NEET Exam Form.",
                "By considering allotment of seats, one can choose the particular colleges.",
                "NTA has not announced any changes in NEET exam pattern. So, it will remain as prescribed by the NMC.",
                "For NEET 2022, NEET Admit Cards will be available soon.",
                "The NEET Result will be declared on the official website of NTA (National Testing Agency)."
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET Exam - Rules & Regulations 2022",
            "info": "",
            "data": [
                "The candidates should have to report before one hour of exam time.",
                "The candidates should have to come in customary dress.",
                "The ornaments like chains, rings, earring, nose-pin etc. are not allowed.",
                "Stationary Material like textual material (written or printed), writing pad, log table, calculator are not allowed in the exam hall.",
                "Goggles, handbags, camera are strictly restricted in exam hall.",
                "Communications devices such as Mobile Phone, Microphone, Earphones, Bluetooth are barred during NEET exam.",
                "If any other thing related to unfair means is found, strict action will be taken by the respective authority.",
                "Any Metallic item or eatable item is strictly prohibited."
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET Exam 2022 - Dress Code (Male & Female)",
            "info": "Candidates must follow dress code which mentioned below while appearing for NEET exam, the dress code rules are given below:",
            "data": [
                "Candidates have to wear half sleeves clothes or formal dress ( No fashionable clothes allowed)",
                "Candidates have to wear formal slippers & sandals (No shoes allowed)"
            ]
        },
        {
            "type": "text",
            "title": "",
            "data": '<p><u>Note:</u></strong> If any candidate coming for the exam wearing a religious cloth, in that case, they need to report at the allotted examination at least by 12.30 PM on the day of examination.</p><strong><u>For Male Candidate</u></strong></h3><p>Wear light clothes like Jeans, Pant, Shirt (half sleeves only). The button of the shirt should be the medium size it should not be big. The Kurta Pajama & shoes are also not allowed. For the male candidate, they can wear only sleepers or sandals.</p><h3><strong><u>For Female Candidate</u></strong></h3><p>clothes with half sleeves not having big buttons, brooch/badge, etc. with Salwar, Slippers, sandals with low heels are allowed. High heels shoes or sandals for the female candidate are also not allowed.</p>'
        },
        {
            "type": "table",
            "title": "NEET Exam Statistics 2022",
            "info": "Following are the data about applicants registered in the NEET UG 2022 you can have look on the detailed info :",
            "col": [
                "Gender",
                "Registered",
                "Appeared",
                "qualified"
            ],
            "row": [
                { "Gender": "Male", "Registered": "8,07,538", "Appeared": "7,63,545", "qualified": "4,29,160" },
                { "Gender": "Female", "Registered": "10,64,794", "Appeared": "10,01,015", "qualified": "5,63,902" },
                { "Gender": "Transgender", "Registered": "11", "Appeared": "11", "qualified": "7" },
                { "Gender": "Total", "Registered": "18,72,343", "Appeared": "17,64,571", "qualified": "9,93,069" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET UG Exam 2022 - Tie Breaking Policy",
            "info": "In case of or more applicants attain equal marks/percentile scores withinside the NEET 2022, the inter-se-merit will be decided as follows:",
            "data": [
                "Candidate obtaining better marks/percentile score in Biology (Botany & Zoology) withinside the test, followed by",
                "Candidate obtaining better marks/percentile score in Chemistry withinside the test, followed by",
                "Candidate obtaining better marks/percentile score in Physics withinside the test, followed by",
                "Candidate with less proportion of the number of attempted wrong answers and correct answers in all of the topics withinside the test",
                "Candidate with less percentage of a number of attempted wrong answers and correct answers in Biology (Botany & Zoology) withinside the test, accompanied by",
                "Candidate with less percentage of a number of attempted wrong answers and correct answers in Chemistry withinside the test, accompanied by",
                "Candidate with less percentage of some of attempted wrong answers and correct answers in Physics withinside the test, followed by",
                "Candidate older in age, accompanied by",
                "Application number in ascending order"
            ]
        },
        {
            "type": "table",
            "title": "NEET Result 2022 - Check Top 10 Medical Colleges",
            "info": "Following are top 10 medical college you can look out for your MBBS dream after NEET result 2022:",
            "col": [
                "Rank",
                "Name of Institution",
                "Score"
            ],
            "row": [
                { "Rank": "1", "Name of Institution": "All India Institute of Medical Sciences, Delhi", "Score": "91.6" },
                { "Rank": "2", "Name of Institution": "Post Graduate Institute of Medical Education and Research", "Score": "79" },
                { "Rank": "3", "Name of Institution": "Christian Medical College", "Score": "72.84" },
                { "Rank": "4", "Name of Institution": "National Institute of Mental Health and Neuro Sciences, Bangalore", "Score": "71.56" },
                { "Rank": "5", "Name of Institution": "Banaras Hindu University", "Score": "68.12" },
                { "Rank": "6", "Name of Institution": "Jawaharlal Institute of PostGraduate Medical Education & Research", "Score": "67.64" },
                { "Rank": "7", "Name of Institution": "Sanjay Gandhi Postgraduate Institute of Medical Sciences", "Score": "67.18" },
                { "Rank": "8", "Name of Institution": "Amrita Vishwa Vidyapeetham", "Score": "66.49" },
                { "Rank": "9", "Name of Institution": "Sree Chitra Tirunal Institute for Medical Sciences and Technology, Thiruvananthapuram", "Score": "65.17" },
                { "Rank": "10", "Name of Institution": "Kasturba Medical College, Manipal", "Score": "63.89" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "NEET UG Exam Toppers List 2022",
            "info": "",
            "data": [
                "The Toppers in NEET Exam will be offered many awards and seats in Good Colleges.",
                "You can get your Name withinside the NEET Result 2022 Topper List through scoring exceptional Marks.",
                "Moreover, this list is independent of categories which means all of the college students are compared on the basis of their marks overall.",
                "We are right here to provide you information regarding Top 10 Rankers in All India NEET Topper List 2022.",
                "You can take a look at the entire Topper List on neet.nta.nic.in."
            ]
        },
        {
            "type": "table",
            "title": "",
            "info": "",
            "col": [
                "Roll Number",
                "Candidate’s Name",
                "Category",
                "Marks Secured",
                "Percentile Score",
                "NEET Rank"
            ],
            "row": [
                { "Roll Number": "3905190306", "Candidate’s Name": "Tanishka", "Category": "OBC-NCL", "Marks Secured": "715", "Percentile Score": "99.9997733", "NEET Rank": "1" },
                { "Roll Number": "2001350019", "Candidate’s Name": "Vatsa Ashish Batra", "Category": "General", "Marks Secured": "715", "Percentile Score": "99.9997733", "NEET Rank": "2" },
                { "Roll Number": "2712130298", "Candidate’s Name": "Hrishikesh Nagbhushan Gangule", "Category": "General", "Marks Secured": "715", "Percentile Score": "99.9997733", "NEET Rank": "3" },
                { "Roll Number": "2701140052", "Candidate’s Name": "Rucha Pawashe", "Category": "OBC-NCL", "Marks Secured": "715", "Percentile Score": "99.9997733", "NEET Rank": "4" },
                { "Roll Number": "4204010052", "Candidate’s Name": "Errabelly Sidharth Rao", "Category": "General", "Marks Secured": "711", "Percentile Score": "99.9997166", "NEET Rank": "5" },
                { "Roll Number": "3110320171", "Candidate’s Name": "Rishi Vinay Balse", "Category": "General", "Marks Secured": "710", "Percentile Score": "99.9992066", "NEET Rank": "6" },
                { "Roll Number": "1601050034", "Candidate’s Name": "Arpit Narang", "Category": "General", "Marks Secured": "710", "Percentile Score": "99.9992066", "NEET Rank": "7" },
                { "Roll Number": "4122020826", "Candidate’s Name": "Krishna S R", "Category": "General", "Marks Secured": "710", "Percentile Score": "99.9992066", "NEET Rank": "8" },
                { "Roll Number": "2209040165", "Candidate’s Name": "Zeel Vipul Vyas", "Category": "General", "Marks Secured": "710", "Percentile Score": "99.9992066", "NEET Rank": "9" },
                { "Roll Number": "2508010476", "Candidate’s Name": "Haziq Parveez Lone", "Category": "General", "Marks Secured": "710", "Percentile Score": "99.9992066", "NEET Rank": "10" }
            ]
        },
        {
            "type": "list-bollet",
            "title": "Steps to Check Neet.nta.nic.in Result 2022",
            "info": "",
            "data": [
                "First of all, visit neet.nta.nic.in or click on Direct Link Given withinside the section below.",
                "Secondly, tap on NEET UG 2022 Result Link and watch for the next page to open up.",
                "On this page, you need to Login using your Application Number and password.",
                "Now you can see scores obtained through you in NEET Exam 2022.",
                "Download your Scorecard after which check further info on it.",
                "So that is the procedure to Download Neet.nta.nic.in Result 2022."
            ]
        },
    ],
    "Gallery": {},
    "Scholarship": {},
    "Faculty": {},
    "News & Articles": {},
    "Hostel": {},
    "qna": [],
    meta: [
        { name: "description", content: "NEET exam is a national-level medical entrance exam in India. Learn more about the Eligibility, Syllabus, Exam pattern, Important dates, Rules & Regulations.", itemprop: "", property: "", scheme: '' },
        { charset: "utf-8" },
        { name: "google", content: "notranslate" },
        { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
        { name: "og:type", content: "website", itemprop: "", property: "", },
        { name: "og:image", content: "https://www.selectyouruniversity.com/images/neet-exam.jpg", itemprop: "", property: "", scheme: '' },
        { name: "og:description", content: "NEET exam is a national-level medical entrance exam in India. Learn more about the Eligibility, Syllabus, Exam pattern, Important dates, Rules & Regulations.", itemprop: "", property: "", scheme: '' },
        { name: "og:url", content: "https://www.selectyouruniversity.com/college/neet-exam", itemprop: "", property: "", scheme: '' },
    ],
    title: "NEET Exam 2022: Answer Key(Released), Cutoff, Analysis, Paper Pattern",
    link: [
        { rel: 'alternate', href: 'https://www.selectyouruniversity.com/college/neet-exam' },
        { rel: 'canonical', href: 'https://www.selectyouruniversity.com/college/neet-exam' },
    ]
};


/***/ })

}]);
//# sourceMappingURL=src_app_exam-content_exam-content_module_ts.js.map