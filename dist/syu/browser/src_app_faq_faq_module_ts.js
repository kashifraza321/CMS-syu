"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_faq_faq_module_ts"],{

/***/ 62783:
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqRoutingModule": () => (/* binding */ FaqRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.component */ 96701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _faq_component__WEBPACK_IMPORTED_MODULE_0__.FaqComponent
    }
];
class FaqRoutingModule {
}
FaqRoutingModule.ɵfac = function FaqRoutingModule_Factory(t) { return new (t || FaqRoutingModule)(); };
FaqRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FaqRoutingModule });
FaqRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FaqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 96701:
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */ 79854);






const _c0 = ["stickyNav"];
const _c1 = ["stickyDiv"];
function FaqComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "p-accordion", 38)(3, "div", 39)(4, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Study Abroad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "p-accordionTab", 41)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First of all, you need to choose the course you are willing to study. There are two types of courses, short term courses, (language courses, preparatory courses, certification courses, foundation courses, etc) and long term courses (UG, PG, MBBS, MBA, Engineering, PhD. etc) you can choose from the available courses as per your qualification to study abroad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-accordionTab", 42)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "You can start with the course qualification. You need the qualification of the course that you are seeking for. Apart from the educational qualification one may need following things as applicable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul")(14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "A valid passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "A student visa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Medical insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Previous education qualification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "A certain amount as savings in the bank account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Bank statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p-accordionTab", 43)(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Some countries allow students part-time work while studying, while the regulations differ for some other countries. Normally, students are allowed to work 20 hours per week as per the visa type they are studying on.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p-accordionTab", 44)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "The cost of studying abroad depends on the country and the course you are choosing. On an average it costs around ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Rs. 5 lakh to Rs. 20 lakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " per year in English countries and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Rs. 2 lakh to Rs. 8 lakh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " in European countries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p-accordionTab", 45)(39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Yes, there are plenty of education loan options and scholarship options available for students that can help you to study abroad financially. You can apply for any education loan from the approved bank, or you can apply for the scholarship programs which help students to study abroad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p-accordionTab", 46)(42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "There are plenty of Indian Gov. as well as foreign country funded scholarship programs for students to study abroad. These programs may differ country wise or course wise or by the duration of courses. Some of them are.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ul")(45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Erasmus Mundus Joint Master Degrees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Fulbright-Nehru Master's Fellowships");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Fulbright-Kalam Climate Fellowship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Fulbright-Nehru Doctoral Research Fellowships");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Great Wall Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Inlaks Scholarship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "National Overseas Scholarship Scheme by the Indian Government");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Orange Tulip Scholarship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "GREAT Education Scholarships");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Scotland\u2019s Saltire Scholarships");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "The Heinrich B\u00F6ll Foundation Scholarship");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Narotam Sekhsaria Scholarship Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "The JN Tata Endowment for the Higher Education of Indians");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Scholarships by The Lady Meherbai D Tata Education Trust");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Aga Khan Foundation International Scholarship Programme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Global Study Awards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Microsoft Scholarships (Undergraduate)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Joint Japan/World Bank Graduate Scholarship Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "GyanDhan Scholarship for Postgraduate Studies Abroad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
} }
function FaqComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "p-accordion", 38)(3, "div", 39)(4, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Study in India");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "p-accordionTab", 47)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Students can choose from the plenty of options to study in India after 12th. You can choose from BA, BBA, BCA, BE, BTech, B.Com, MBBS, BDS, BAMS, BHMS, Nursing, Architecture, BSc, BCS, Music, and many more creative and job oriented programs depending on your streams in 12th standard.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-accordionTab", 48)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "No, most of the courses are taught in English medium, so it is not compulsory to know the native language for such courses. Yet, it is no less than advantage for daily routine if you know the language.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-accordionTab", 49)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Depending on the course you are choosing, and the catagory you belong to, you can get free education, or fee concession and scholarship options to study in India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-accordionTab", 50)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "For courses like BE, B.Tech, Medicine, under some clause, students can change the college after first year too provided that thy fulfill the required qualification of their targeted colleges.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-accordionTab", 51)(20, "p")(21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Yes,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " internship is compulsory and it should be done from the same medical college/university as per the NMC regulations.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
} }
function FaqComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "p-accordion", 38)(3, "div", 39)(4, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Admission & Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "p-accordionTab", 52)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Students need a valid passport, a student visa, and need to fulfill the eligibility criteria of the course they are willing to take admission. Apart from this medical certificates and medical insurance are the important documents that one needs to have to study abroad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-accordionTab", 53)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Indian students choose to study MBBS, MBA, Engineering, B.Tech, M.Tech in foreign universities.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-accordionTab", 54)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yes, the degree awarded by studying abroad from a foreign university is valid in India, provided that university or college is recognized by the Indian authorized organization like National Medical Commision.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-accordionTab", 55)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "There are several countries like Ukraine, Georgia, Nepal, Kyrgyzstan, Bangladesh and many more where students can opt to study without clearing the TOEFL/IELTS tests.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
} }
function FaqComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 12)(2, "p-accordion", 38)(3, "div", 39)(4, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "VISA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "p-accordionTab", 56)(8, "p")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Yes,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " students need a visa to study abroad. There are different visas for short term courses, long term courses, and visas with work permits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-accordionTab", 57)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "You need a student visa to study abroad.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-accordionTab", 58)(16, "p")(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "NO,");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " you can not work on a student visa. But if you wish to work part time while studying, you can have an extra permit for that while applying for a visa or when admitted to your college.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-accordionTab", 59)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Not all the countries allow it but there are few countries who allow Indian citizens to study without a visa or on a visa on arrival basis. Ex. Qatar, Mauritius, Nepal, Ecuador, Grenada, Fiji, Indonesia and others.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p-accordionTab", 60)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "It takes around 15 to 45 days to process a student visa, yet the process time totally depends on the queue and the availability of your documents.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
} }
function FaqComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "p-accordion", 38)(3, "div", 39)(4, "h2", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p")(7, "p-accordionTab", 61)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Walgreens Consultancy Pvt Ltd is a parent company of Select Your University. There is no need to be worried about the documentations and other procedures with any of the names.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-accordionTab", 62)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Once all the documents are submitted it will take around 2 weeks to confirm your admission by the respective universities. We recommend you to start the procedure around a month or 2 prior to the last date as it will take time for the visa application in between.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-accordionTab", 63)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "No, we are not. Let history and our work answer this.Select Your University is an authentic and trustworthy educational consultancy leading in India for a decade now. Our team personally guides students, parents, visits the university authorities, ties-up with them, and even takes care of students to pick and drop at the airport. You can see the original videos and the reviews of the students and parents here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-accordionTab", 64)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Our head office is situated at, 3FCS-05, Ansal plaza, opposite Dabur Chowk, Sector-1,Near- Income Tax Office, Vaishali, Ghaziabad, Uttar Pradesh - 201010.Our other offices for the convenience of parents and students are located in 20+ cities of India including Delhi, Mumbai, Pune, Bhopal, Lucknow and many others.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-accordionTab", 65)(20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "We have networks and tie-ups with the universities of Ukraine, Russia, Poland, Philippines, Kyrgyzstan, Kazakhstan, Uzbekistan, Hungary, Italy, Germany, Nepal, Bangladesh, and many other countries.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
} }
const _c2 = function (a1) { return { "nav-link": true, "active": a1 }; };
class FaqComponent {
    constructor(viewportScroller, router) {
        this.viewportScroller = viewportScroller;
        this.router = router;
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
    ngOnInit() {
        this.makeActiveTab('info');
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
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], viewQuery: function FaqComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.navTabs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.talkExpertDiv = _t.first);
    } }, hostBindings: function FaqComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function FaqComponent_scroll_HostBindingHandler() { return ctx.handleScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 84, vars: 24, consts: [[1, "faq"], [1, "faq-banner"], [1, "col-lg-12"], [1, "faq-page-header", "text-center"], [1, "white-text-2"], [1, "faq-page-breadcrumb", "text-center"], ["href", "", "routerLink", "/home", 1, "home"], ["src", "../../assets/img/services_page/Our_Services/Home.png", "alt", "", 1, "home-img"], ["href", "", 1, "arrow"], ["src", "../../assets/img/services_page/Our_Services/Arrow.png", "alt", "", 1, "arrow-img"], ["href", "", "routerLink", "/faq", 1, "service-link"], [1, "faq-div"], [1, "row", "row-without-gutter"], [1, "navbar", "navbar-expand-lg", "navbar-light", "full-width-tabs"], ["stickyNav", ""], ["id", "navbar", 1, "collapse", "navbar-collapse", "bg-white"], [1, "nav", "nav-tabs", "nav-tabs-ul"], [1, "nav-item"], [1, "active", 3, "ngClass", "click"], [3, "ngClass", "click"], [1, "col-lg-9", "col-12", "custom-padding-right"], ["id", "college-content-tab"], [1, "tabcontent"], [4, "ngIf"], [1, "col-lg-3", "col-12"], ["stickyDiv", ""], [1, "card", "need-assistance"], [1, "card-header", "text-center"], [1, "card-body"], [1, "col-lg-2", "col-2", "col-sm-2"], ["src", "../../assets/img/FAQs_Icons/3.Need_Assistance/Phone.png", "alt", "", 1, "need-assi-img"], [1, "col-lg-10", "col-sm-10", "col-10", "border-bottom"], [1, "need-assi-text"], ["src", "../../assets/img/FAQs_Icons/3.Need_Assistance/Mobile.png", "alt", "", 1, "need-assi-img"], ["src", "../../assets/img/FAQs_Icons/3.Need_Assistance/Time.png", "alt", "", 1, "need-assi-img"], ["src", "../../assets/img/FAQs_Icons/3.Need_Assistance/Mail.png", "alt", "", 1, "need-assi-img"], ["src", "../../assets/img/FAQs_Icons/3.Need_Assistance/Location.png", "alt", "", 1, "need-assi-img"], [1, "row", "row-without-gutter", "relative-row"], ["id", "faq-collapse", "expandIcon", "pi pi-plus", "collapseIcon", "pi pi-minus", 3, "multiple"], [1, "col-lg-12", "text-center"], [1, "light-blue-text"], ["header", "Q. What can I study abroad?", 1, "accordionTab", 3, "selected"], ["header", "Q. What are the requirements to study abroad? / I want to study abroad, what do I need to do that?", 1, "accordionTab"], ["header", "Q. Can I work while studying in foreign country?", 1, "accordionTab"], ["header", "Q. How much does it cost to study abroad?", 1, "accordionTab"], ["header", "Q. Can I get a financial support to study abroad? / can I get any loan to study abroad?", 1, "accordionTab"], ["header", "Q. Are there any scholarships to study abroad? Which scholarship programs are helpful to study abroad?", 1, "accordionTab"], ["header", "Q. What can I study after 12th in India?", 1, "accordionTab", 3, "selected"], ["header", "Q. Is it compulsory to know the native language if I chose to study in other state?", 1, "accordionTab"], ["header", "Q. Can I study for free in India?", 1, "accordionTab"], ["header", "Q. Can I change my degree college once admission is done?", 1, "accordionTab"], ["header", "Q. Is Internship for MBBS in India compulsory?", 1, "accordionTab"], ["header", "Q. What are the basic requirements for getting admission to study abroad?", 1, "accordionTab", 3, "selected"], ["header", "Q. Which are the popular courses to study abroad for Indian student?", 1, "accordionTab"], ["header", "Q. Is the degree from a foreign university valid in India?", 1, "accordionTab"], ["header", "Q. Is TOEFL/IELTS compulsory to take admission abroad?", 1, "accordionTab"], ["header", "Q. Is a Visa Compulsory for studying abroad?", 1, "accordionTab", 3, "selected"], ["header", "Q. What type of VISA is required for studying abroad?", 1, "accordionTab"], ["header", "Q. Can I work while studying on a student visa?", 1, "accordionTab"], ["header", "Q. Can I study abroad without a visa?", 1, "accordionTab"], ["header", "Q. How many days does it takes to get a student visa?", 1, "accordionTab"], ["header", "Q. If I am processing my application in Select Your University, why am I getting documents from Walgreens Consultancy pvt ltd.?", 1, "accordionTab", 3, "selected"], ["header", "Q. How much time will it take to get my admission done through Select Your University?", 1, "accordionTab"], ["header", "Q. Is Select Your University fraud?", 1, "accordionTab"], ["header", "Q. Where is Select Your University\u2019s office?", 1, "accordionTab"], ["header", "Q. In which countries can Select Your University get your admission done?", 1, "accordionTab"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "nav", 13, 14)(19, "div", 15)(20, "ul", 16)(21, "li", 17)(22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_22_listener() { return ctx.makeActive("info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Study Abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 17)(25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_25_listener() { return ctx.makeActive("course"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Study in India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 17)(28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_28_listener() { return ctx.makeActive("admission"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Admission & Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 17)(31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_31_listener() { return ctx.makeActive("review"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "VISA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 17)(34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_34_listener() { return ctx.makeActive("placement"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, FaqComponent_div_39_Template, 83, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, FaqComponent_div_40_Template, 24, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, FaqComponent_div_41_Template, 19, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, FaqComponent_div_42_Template, 26, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, FaqComponent_div_43_Template, 22, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24)(45, "div", 12, 25)(47, "div", 26)(48, "div", 27)(49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Need Assistance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28)(52, "div", 12)(53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31)(56, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "180030700033");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 12)(59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 31)(62, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "+91 9555120101");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 12)(65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31)(68, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Monday - Saturday (9am-6pm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 12)(71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 31)(74, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "info@selectyouruniversity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 12)(77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 31)(80, "h6", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "3fcs05, Ansal plaza, Vaishali, Sector-1, Near Income Tax Office, Ghaziabad, Uttar Pradesh - 201010");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("stickyNav", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, ctx.isActive("info")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, ctx.isActive("course")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c2, ctx.isActive("admission")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, ctx.isActive("review")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, ctx.isActive("placement")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("course"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("admission"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("review"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive("placement"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("stickyDiv", _r6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionTab], styles: [".faq-banner[_ngcontent-%COMP%] {\n  padding: 5%;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.faq[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.faq-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 15%;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.faq-div[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 1%;\n  padding-bottom: 0px;\n}\n\n.need-assi-img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10%;\n}\n\n.need-assi-text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  color: #295ea1;\n  padding: 5px;\n  padding-top: 10px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #091832;\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.need-assistance[_ngcontent-%COMP%] {\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.need-assistance[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n}\n\n@media only screen and (max-width: 767px) {\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0% !important;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .need-assi-text[_ngcontent-%COMP%] {\n    padding-top: 30px !important;\n    font-size: 22px !important;\n  }\n  .need-assi-img[_ngcontent-%COMP%] {\n    width: 70%;\n    display: block;\n    margin: 0px auto;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .faq-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 8%;\n  }\n  .faq-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n.limitTextHeight[_ngcontent-%COMP%] {\n  height: 20vh;\n  overflow: hidden;\n}\n\n.tabcontent[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-right: 8px;\n  border-radius: 10px;\n  background-color: #fff !important;\n  padding: 2% !important;\n}\n\n.stickyNav[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 12%;\n  overflow: hidden;\n  z-index: 11;\n  height: auto;\n  width: 100%;\n}\n\n.stickyDiv[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 19.5%;\n  overflow: hidden;\n  z-index: 10;\n  height: auto;\n  width: 100%;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 10px;\n}\n\n#navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0097db;\n  background-color: #fff;\n  border-right: none;\n  border-top: none;\n  border-left: none;\n  border-bottom: 5px solid #0097db;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #000;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-size: 16px;\n  vertical-align: baseline;\n  border: 1px solid #595b5c;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  top: 120px;\n}\n\n.shade[_ngcontent-%COMP%] {\n  height: 5vh;\n  width: 100%;\n  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.341176));\n  left: 0;\n  position: absolute;\n  bottom: 60px;\n}\n\n.relative-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 2% auto;\n  border: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLFdBQUE7RUFDSix1REFBQTtFQUNBLDBCQUFBO0VBQ0ksNkVBQUE7RUFDQSw0QkFBQTtBQUNMOztBQUNBO0VBQ0sseUJBQUE7RUFDQSxvQkFBQTtBQUVMOztBQUdBO0VBQ0ssVUFBQTtBQUFMOztBQUVBO0VBQ0ssVUFBQTtBQUNMOztBQUNBO0VBQ0ssYUFBQTtFQUNBLHVCQUFBO0FBRUw7O0FBQUE7RUFDSyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFHTDs7QUFEQTtFQUNLLFNBQUE7QUFJTDs7QUFGQTtFQUNLLFNBQUE7QUFLTDs7QUFIQTtFQUNLLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUw7O0FBREE7RUFDSywyQkFBQTtFQUNBLDJCQUFBO0FBSUw7O0FBRkM7RUFFSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUlMOztBQUZDO0VBQ0ssV0FBQTtFQUNBLFlBQUE7QUFLTjs7QUFIQztFQUNLLGtCQUFBO0VBQ0YsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpDO0VBQ0ssaUJBQUE7QUFPTjs7QUFMQztFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFRTDs7QUFOQztFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFTTDs7QUFQQztFQUNLLGtCQUFBO0VBQ0EsZUFBQTtBQVVOOztBQVBDO0VBQ0k7SUFDSywwQkFBQTtFQVVSO0VBUkk7SUFDUSxXQUFBO0VBVVo7RUFSSTtJQUNJLFVBQUE7RUFVUjtBQUNGOztBQVJDO0VBQ0k7SUFDSyw0QkFBQTtJQUNBLDBCQUFBO0VBVVI7RUFSSTtJQUNLLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFVVDtFQVJJO0lBQ0ksV0FBQTtFQVVSO0VBUkk7SUFDSSxTQUFBO0VBVVI7RUFSSTtJQUNLLDJCQUFBO0VBVVQ7QUFDRjs7QUFSQztFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQVVMOztBQVJDO0VBRUcsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQVVKOztBQVJBO0VBQ0MsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFXRDs7QUFUQTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWUQ7O0FBVkM7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWFMOztBQVhBO0VBQ0ssc0JBQUE7RUFDQSxlQUFBO0FBY0w7O0FBWkE7RUFDSyxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQWVMOztBQWJBO0VBQ0ssWUFBQTtFQUNBLFdBQUE7QUFnQkw7O0FBZEE7RUFDSyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQWlCTDs7QUFmQTtFQUNLLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0VBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBa0JMOztBQWhCQTtFQUNLLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0VBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbUJMOztBQWpCQTtFQUNLLGtCQUFBO0FBb0JMOztBQWxCQTtFQUNLLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFxQkwiLCJmaWxlIjoiZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcS1iYW5uZXJ7XHJcbiAgICAgcGFkZGluZzo1JTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDAsIDE4NSwgMjI5LCAwLjgpLCAjMzM1MzlkKTsgXHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uZmFxe1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLy8gLmZhcS1wYWdlLWhlYWRlcntcclxuLy8gICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbi8vIH1cclxuLmhvbWUtaW1ne1xyXG4gICAgIHdpZHRoOjUwJVxyXG59XHJcbi5hcnJvdy1pbWd7XHJcbiAgICAgd2lkdGg6MzAlXHJcbn1cclxuLmZhcS1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYiBhe1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICAgIG1hcmdpbjowO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWV7XHJcbiAgICAgd2lkdGg6MiVcclxufVxyXG4uZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93e1xyXG4gICAgIHdpZHRoOjIlXHJcbn1cclxuLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmsgLndoaXRlLXRleHQtMntcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbn1cclxuLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmt7XHJcbiAgICAgLy8gd2lkdGg6MTUlO1xyXG59XHJcbi5yb3ctd2l0aG91dC1ndXR0ZXJ7XHJcbiAgICAgLS1icy1ndXR0ZXIteDogMCAhaW1wb3J0YW50O1xyXG4gICAgIC0tYnMtZ3V0dGVyLXk6IDAgIWltcG9ydGFudDtcclxufVxyXG4gLmZhcS1kaXYge1xyXG4gICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiAxJTtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gfVxyXG4gLm5lZWQtYXNzaS1pbWd7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHBhZGRpbmc6MTAlO1xyXG4gfVxyXG4gLm5lZWQtYXNzaS10ZXh0e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzI5NWVhMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtYm9keXtcclxuICAgICAgcGFkZGluZzoxMHB4IDBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtaGVhZGVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTE4MzI7XHJcbiAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2V7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC5uZWVkLWFzc2lzdGFuY2UgLmNhcmQtaGVhZGVyIGg1e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuXHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEgIHtcclxuICAgICAgICAgICAgICBmbG9hdDpub25lXHJcbiAgICAgIH1cclxuICAgICAgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5ob21lLCAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93IHtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgIH1cclxuIH1cclxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAubmVlZC1hc3NpLXRleHQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5uZWVkLWFzc2ktaW1ne1xyXG4gICAgICAgICAgIHdpZHRoOjcwJTtcclxuICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICBtYXJnaW46MHB4IGF1dG9cclxuICAgICAgfVxyXG4gICAgICAuZmFxLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmZhcS1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgIH1cclxuICAgICAgLmZhcS1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gfVxyXG4gLmxpbWl0VGV4dEhlaWdodCB7XHJcbiAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9XHJcbiAudGFiY29udGVudHtcclxuICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0aWNreU5hdntcclxuXHRwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcblx0dG9wOiAxMiU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR6LWluZGV4OiAxMTtcclxuXHRoZWlnaHQ6YXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uc3RpY2t5RGl2e1xyXG5cdHBvc2l0aW9uOiBzdGlja3k7XHJcblx0dG9wOiAxOS41JTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGhlaWdodDphdXRvO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbiAjbmF2YmFye1xyXG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jbmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgIGNvbG9yOiAjMDA5N2RiO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMwMDk3ZGI7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzU5NWI1YztcclxufVxyXG4uc2hhZGV7XHJcbiAgICAgaGVpZ2h0OiA1dmg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZiwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0MTE3NikpO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIHRvcDogMTIwcHg7XHJcbn1cclxuLnNoYWRle1xyXG4gICAgIGhlaWdodDo1dmg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2ZmZiwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0MTE3NikpO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGJvdHRvbTogNjBweDtcclxufVxyXG4ucmVsYXRpdmUtcm93e1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmVhZC1tb3JlLWJ0bntcclxuICAgICB3aWR0aDoyMCU7XHJcbiAgICAgbWFyZ2luOjIlIGF1dG87XHJcbiAgICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG59Il19 */"] });


/***/ }),

/***/ 5083:
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqModule": () => (/* binding */ FaqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 62783);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.component */ 96701);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tabview */ 79504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








class FaqModule {
}
FaqModule.ɵfac = function FaqModule_Factory(t) { return new (t || FaqModule)(); };
FaqModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FaqModule });
FaqModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_7__.TabViewModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FaqModule, { declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_7__.TabViewModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_faq_faq_module_ts.js.map