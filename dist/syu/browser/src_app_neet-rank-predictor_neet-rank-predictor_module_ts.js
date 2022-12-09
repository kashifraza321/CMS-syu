"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_neet-rank-predictor_neet-rank-predictor_module_ts"],{

/***/ 98997:
/*!***************************************************************************!*\
  !*** ./src/app/neet-rank-predictor/neet-rank-predictor-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeetRankPredictorRoutingModule": () => (/* binding */ NeetRankPredictorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _neet_rank_predictor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neet-rank-predictor.component */ 42678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _neet_rank_predictor_component__WEBPACK_IMPORTED_MODULE_0__.NeetRankPredictorComponent
    }
];
class NeetRankPredictorRoutingModule {
}
NeetRankPredictorRoutingModule.ɵfac = function NeetRankPredictorRoutingModule_Factory(t) { return new (t || NeetRankPredictorRoutingModule)(); };
NeetRankPredictorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NeetRankPredictorRoutingModule });
NeetRankPredictorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NeetRankPredictorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 42678:
/*!**********************************************************************!*\
  !*** ./src/app/neet-rank-predictor/neet-rank-predictor.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeetRankPredictorComponent": () => (/* binding */ NeetRankPredictorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);



function NeetRankPredictorComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.quotas[i_r3].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.quotas[i_r3].name, " ");
} }
function NeetRankPredictorComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.domiciles[i_r5].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.domiciles[i_r5].name, " ");
} }
class NeetRankPredictorComponent {
    constructor() {
        this.quotas = [
            { id: "1", name: "Jamia Millia Islamia Dental(JMI) Quota" },
            { id: "2", name: "AMS" },
            { id: "3", name: "Muslim Minority Quota" },
            { id: "4", name: "B.Sc Nursing All India" },
            { id: "5", name: "Jamia Muslim Women Quota" },
            { id: "6", name: "DU" },
            { id: "7", name: "Open Seat Quota" },
            { id: "8", name: "Jamia Muslim Quota" },
            { id: "9", name: "MNG" },
            { id: "10", name: "AIQ" },
            { id: "11", name: "Non-Resident Indian" },
            { id: "12", name: "Internal - Puducherry UT Domicile" },
            { id: "13", name: "B.Sc Nursing Delhi NCR CW Quota" },
            { id: "14", name: "Delhi University Quota" },
            { id: "15", name: "CW" },
            { id: "16", name: "B.Sc Nursing Delhi NCR" },
            { id: "17", name: "BON" },
            { id: "18", name: "ANR" },
            { id: "19", name: "MM" },
            { id: "20", name: "JON" },
            { id: "21", name: "Delhi NCR Children/Wid ows of Personnel of the Armed Forces (CW) Quota" },
            { id: "22", name: "Non-Resident Indian(AMU)Quota" },
            { id: "23", name: "NRI" },
            { id: "24", name: "JNO" },
            { id: "25", name: "Aligarh Muslim University (AMU) Quota" },
            { id: "26", name: "Employees State Insurance Scheme(ESI)" },
            { id: "27", name: "AON" },
            { id: "28", name: "JEI" },
            { id: "29", name: "IP University Quota" },
            { id: "30", name: "JNR" },
            { id: "31", name: "All India" },
            { id: "32", name: "IP" },
            { id: "33", name: "MW" },
            { id: "34", name: "JI" },
            { id: "35", name: "Internal -Puducherry UT Domicile" },
            { id: "36", name: "B.Sc Nursing Delhi NCR CW  Quota" },
            { id: "37", name: "AMU" },
            { id: "38", name: "Jain Minority Quota" },
            { id: "39", name: "Deemed/Paid Seats Quota" },
            { id: "40", name: "Delhi NCR Children/Widows of Personnel of the Armed Forces (CW) Quota" },
            { id: "41", name: "JMQ" },
            { id: "42", name: "JM" },
        ];
        this.domiciles = [
            { id: "1", name: "Maharashtra" },
            { id: "2", name: "Madhya Pradesh" },
            { id: "3", name: "Tamil Nadu" },
            { id: "4", name: "Chhattisgarh" },
            { id: "5", name: "Haryana" },
            { id: "6", name: "Rajasthan" },
        ];
    }
    ngOnInit() { }
}
NeetRankPredictorComponent.ɵfac = function NeetRankPredictorComponent_Factory(t) { return new (t || NeetRankPredictorComponent)(); };
NeetRankPredictorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NeetRankPredictorComponent, selectors: [["app-neet-rank-predictor"]], decls: 49, vars: 2, consts: [[1, "predictor"], [1, "neet-rank-predictor"], [1, "col-lg-12"], [1, "neet-rank-predictor-header", "text-center"], [1, "white-text-2", "mb-0"], [1, "col-lg-12", "mb-5"], [1, "row", "row-without-gutter", "txt"], [1, "card", "text-center"], [1, "row", "form-head"], [1, "col-lg-3", "col-sm-3", "col-md-2"], [1, "col-lg-6", "col-sm-6", "col-md-8"], [1, "card", "form-card"], [1, "text-center"], [1, "form"], [1, "form-group"], ["type", "text", "id", "name", "placeholder", "Full Name", "name", "name", 1, "form-control"], ["type", "number", "id", "number", "placeholder", "Your Phone Number", "name", "number", 1, "form-control"], ["type", "email", "id", "email", "placeholder", "Your Mail ID", "name", "email", 1, "form-control"], ["type", "number", "id", "rank", "placeholder", "Enter Rank", "name", "rank", 1, "form-control"], ["id", "quota", 1, "form-control"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "domicile", 1, "form-control"], ["type", "submit", 1, "btn", "submit"], [1, "note"], ["type", "submit", 1, "btn", "pay"], [1, "col-sm-4"], [3, "value"]], template: function NeetRankPredictorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "NEET UG Rank Predictor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Use Select Your University\u2019s NEET Rank Predictor Tool which helps you to find the possible colleges that you are eligible to get admission to your medical course based on the cutoffs of years. This predicts the college and rank based on the past cutoffs and according to your NEET Score. This helps you to plan and fill the choices accordingly without wasting your options and time. You just need to fill some basic information with your current NEET score and leave it to the NEET UG Rank Predictor of SYU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Get Your College Prediction Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13)(18, "form")(19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14)(28, "select", 19)(29, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Select Quota");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NeetRankPredictorComponent_option_31_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14)(33, "select", 22)(34, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Select Domicile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, NeetRankPredictorComponent_option_36_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12)(38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "SUBMIT DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " *Note : Please fill info every time before changing NEET parameters to protect from system abuse. Complete the payment for detailed overview and get information of all colleges of last three years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12)(43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pay Rs 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "* Pay 600 INR to get detailed analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.quotas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.domiciles);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], styles: [".predictor[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 1px;\n}\n\n.neet-rank-predictor[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: url('header-banner.png');\n  background-repeat: no-repeat;\n  padding: 5% 0%;\n  margin-top: -1px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: large;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #4d92e6;\n  padding-top: 2%;\n  margin-bottom: -1%;\n  font-size: 34px;\n  font-weight: 700;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 3%;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  border: 1px solid #016ae9;\n  -moz-appearance: none;\n  border-radius: 4px;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 90%;\n  background-image: linear-gradient(to right, #306098, #2f6ba6, #4290cc);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: white !important;\n}\n\n.note[_ngcontent-%COMP%] {\n  color: #ec6880;\n  margin-top: 9px;\n  text-align: center;\n  line-height: 110%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n}\n\n.pay[_ngcontent-%COMP%] {\n  width: 50%;\n  background-image: linear-gradient(to right, #306098, #2f6ba6, #4290cc);\n  color: white;\n  font-weight: 700;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.txt[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lZXQtcmFuay1wcmVkaWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1REFBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxzRUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQVVGOztBQVJBO0VBQ0UsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtFQUNBLHNFQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FBYUY7O0FBWEE7RUFDRSxXQUFBO0FBY0YiLCJmaWxlIjoibmVldC1yYW5rLXByZWRpY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVkaWN0b3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxufVxyXG4ubmVldC1yYW5rLXByZWRpY3RvciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvQ29sbGVnZV9GaWx0ZXJfSWNvbnMvMS5IZWFkZXIvaGVhZGVyLWJhbm5lci5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nOiA1JSAwJTtcclxuICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcbmgye1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgzIHtcclxuICBjb2xvcjogIzRkOTJlNjtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTElO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDE2YWU5O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuLnN1Ym1pdCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMDYwOTgsICMyZjZiYTYsICM0MjkwY2MpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubm90ZSB7XHJcbiAgY29sb3I6ICNlYzY4ODA7XHJcbiAgbWFyZ2luLXRvcDogOXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTEwJTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wYXkge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzA2MDk4LCAjMmY2YmE2LCAjNDI5MGNjKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50eHQge1xyXG4gIG1hcmdpbjogOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 84914:
/*!*******************************************************************!*\
  !*** ./src/app/neet-rank-predictor/neet-rank-predictor.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeetRankPredictorModule": () => (/* binding */ NeetRankPredictorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _neet_rank_predictor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neet-rank-predictor-routing.module */ 98997);
/* harmony import */ var _neet_rank_predictor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neet-rank-predictor.component */ 42678);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class NeetRankPredictorModule {
}
NeetRankPredictorModule.ɵfac = function NeetRankPredictorModule_Factory(t) { return new (t || NeetRankPredictorModule)(); };
NeetRankPredictorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NeetRankPredictorModule });
NeetRankPredictorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _neet_rank_predictor_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeetRankPredictorRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NeetRankPredictorModule, { declarations: [_neet_rank_predictor_component__WEBPACK_IMPORTED_MODULE_1__.NeetRankPredictorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _neet_rank_predictor_routing_module__WEBPACK_IMPORTED_MODULE_0__.NeetRankPredictorRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_neet-rank-predictor_neet-rank-predictor_module_ts.js.map