"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_about-us_about-us_module_ts"],{

/***/ 71728:
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsRoutingModule": () => (/* binding */ AboutUsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.component */ 91410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _about_us_component__WEBPACK_IMPORTED_MODULE_0__.AboutUsComponent
    },
];
class AboutUsRoutingModule {
}
AboutUsRoutingModule.ɵfac = function AboutUsRoutingModule_Factory(t) { return new (t || AboutUsRoutingModule)(); };
AboutUsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutUsRoutingModule });
AboutUsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 91410:
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);





function AboutUsComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 49)(3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", image_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", image_r1.text, "");
} }
const _c0 = function () { return ["owl-theme", "row", "sliding", "slider2"]; };
class AboutUsComponent {
    constructor() {
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
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 6,
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
        this.images = [
            {
                text: "We make you aware about the rules and regulations of any foreign institute and we will help you in getting the invitation letter.",
                image: "../../assets/img/About_us_Icons/Our_Services/1.-Rules.png"
            },
            {
                text: "According to student’s needs, ‘Select Your University’ will provide support for educational loans.",
                image: "../../assets/img/About_us_Icons/Our_Services/2.-Educational-Loan.png"
            },
            {
                text: "We provide best medical universities with high quality education and very low fess structure.",
                image: "../../assets/img/About_us_Icons/Our_Services/3.-Best-Medical-University.png"
            },
            {
                text: "‘Select Your University’ team also helps you with the accommodation",
                image: "../../assets/img/About_us_Icons/Our_Services/4.-Accomodation-Hostel.png"
            },
            {
                text: "We also assist you with the final documentation in the university.",
                image: "../../assets/img/About_us_Icons/Our_Services/5.-Final-Documentation.png"
            },
            {
                text: "We make all the arrangements for our students from the departure till they reach to the university.",
                image: "../../assets/img/About_us_Icons/Our_Services/6.-Departure.png"
            },
        ];
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 147, vars: 5, consts: [["id", "/about-us", 1, "about-us"], [1, "aboutUs-banner"], [1, "col-lg-12"], [1, "about-us-page-breadcrumb", "text-center"], [1, "white-text-2"], ["href", "", "routerLink", "/home", 1, "home"], ["src", "../../assets/img/services_page/Our_Services/Home.png", "alt", "", 1, "home-img"], ["href", "", 1, "arrow"], ["src", "../../assets/img/services_page/Our_Services/Arrow.png", "alt", "", 1, "arrow-img"], ["href", "", "routerLink", "/about-us", 1, "service-link"], [1, "col-lg-12", "col-12"], [1, "below-banner", "bg-white"], [1, "row", "row-without-gutter"], [1, "col-lg-4", "col-sm-4", "col-12"], ["src", "../../assets/img/About_us_Icons/About_Us/About-Us.png", "alt", "", 1, "img-below-banner"], [1, "col-lg-8", "col-sm-8", "col-12", "text-justify", "below-banner-text"], [1, "our-mission", "bg-white"], [1, "col-lg-12", "text-center"], [1, "our-mission-header", "light-blue-text"], [1, "col-lg-6", "col-12", "mission-div"], [1, "col-lg-6", "col-sm-6"], ["src", "../../assets/img/About_us_Icons/Our_Mission&Vision/Our-Misiion.png", "alt", "", 1, "mission-img"], [1, "col-lg-6", "col-sm-6", "mission-div-inner"], [1, "our-mission-text", "text-justify"], [1, "col-lg-6", "col-12", "vision-div"], ["src", "../../assets/img/About_us_Icons/Our_Mission&Vision/Our-Vision.png", "alt", "", 1, "vision-img"], [1, "col-lg-6", "col-sm-6", "vision-div-inner"], [1, "our-vision-header", "light-blue-text"], [1, "text-justify"], [1, "our-services-div"], ["clas", "col-lg-12"], [1, "light-blue-text"], ["id", "slider2_about", 3, "options", "items", "carouselClasses"], ["class", "item service-div", 4, "ngFor", "ngForOf"], [1, "our-services-div-content"], [1, "light-blue-text", "text-center", "mb-3", "mt-2"], [1, "col-lg-4", "col-sm-6", "service"], [1, "holder-div"], ["src", "../../assets/img/About_us_Icons/Our_Services/1.-Rules.png", "alt", "", 1, "service-img"], [1, "text-div"], [1, "mb-0"], ["src", "../../assets/img/About_us_Icons/Our_Services/2.-Educational-Loan.png", "alt", "", 1, "service-img"], ["src", "../../assets/img/About_us_Icons/Our_Services/3.-Best-Medical-University.png", "alt", "", 1, "service-img"], ["src", "../../assets/img/About_us_Icons/Our_Services/4.-Accomodation-Hostel.png", "alt", "", 1, "service-img"], ["src", "../../assets/img/About_us_Icons/Our_Services/5.-Final-Documentation.png", "alt", "", 1, "service-img"], ["src", "../../assets/img/About_us_Icons/Our_Services/6.-Departure.png", "alt", "", 1, "service-img"], [1, "number-speaks"], [1, "col-lg-12", "text-center", "mb-4"], [1, ""], [1, "row"], [1, "col-lg-3", "col-sm-12", "number-speak-div", "border-right"], [1, "img-holder"], ["src", "../../assets/img/About_us_Icons/Number_Speaks_Everything_for_Us/Years-Of-Expertise.png", "alt", "", 1, "number-speak-img1"], [1, "row", "mt-lg-0", "mt-sm-4"], [1, "number-speak-header", "light-blue-text"], [1, "number-speak-sub-text"], ["src", "../../assets/img/About_us_Icons/Number_Speaks_Everything_for_Us/Satiesfied-Student.png", "alt", "", 1, "number-speak-img"], ["src", "../../assets/img/About_us_Icons/Number_Speaks_Everything_for_Us/Contries-we-offer.png", "alt", "", 1, "number-speak-img"], [1, "col-lg-3", "col-sm-12", "number-speak-div"], ["src", "../../assets/img/About_us_Icons/Number_Speaks_Everything_for_Us/Universities.png", "alt", "", 1, "number-speak-img4"], [1, "review"], [1, "col-lg-4", "col-sm-4"], ["src", "../../assets/img/About_us_Icons/Review/Google-review.png", "alt", "", 1, "review-img", "mt-20"], ["src", "../../assets/img/About_us_Icons/Review/Review.png", "alt", "", 1, "review-img", "pt-20"], ["src", "../../assets/img/About_us_Icons/Review/Facebook-review.png", "alt", "", 1, "review-img", "mt-20"], [1, "item", "service-div"], [1, "mr-3", "card", "service-card"], ["alt", "", 3, "src"], [1, "service-card-text"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9)(12, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Select Your University is the leading abroad education consultant in India & abroad. We are the one-stop solution for students, specialize in MBBS overseas education counseling, documentation support & admission guidance. We are helping students to find various educational opportunities abroad. \u2018Select Your University\u2019 helps ambitious Indian students to take admissions in the top universities across all over the world. We help students to choose the best option for their dream course and get admission to the top university abroad and in India. Our expert counselors guide students at every step of admission. We always strive to give our students the best services and quality guidance. We will have a counseling session at the beginning to understand your needs and then you just need to complete some formalities like submission of documents required for admission to the university of your choice, documents required for passport, visa, etc. We build careers, come and join us for a great future! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 10)(23, "div", 16)(24, "div", 17)(25, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Our Mission & Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12)(28, "div", 19)(29, "div", 12)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22)(33, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\"The unbroken medium between India and the globe for the education of students. Transparent smooth channel for students to achieve their higher studies and greater career choices. Aspirants get their education in cake walking at affordable pricing that benefits every kind of deserving.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24)(38, "div", 12)(39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26)(42, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\"Serve the country at its best and become able to access services for all. Spreading awareness about Indian aspirants regarding the scope of studying abroad in technical domains. Becoming a ladder to a university for the aspirants, that yields more sweet fruits across the globe.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 2)(47, "div", 29)(48, "div", 30)(49, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 2)(52, "owl-carousel", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, AboutUsComponent_div_53_Template, 7, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 2)(55, "div", 34)(56, "div", 30)(57, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 2)(60, "div", 12)(61, "div", 36)(62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 39)(65, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "We make you aware about the rules and regulations of any foreign institute and we will help you in getting the invitation letter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 36)(68, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 39)(71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "According to student\u2019s needs, \u2018Select Your University\u2019 will provide support for educational loans");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 36)(74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 39)(77, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "We provide best medical universities with high quality education and very low fess structure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 36)(80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 39)(83, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Select Your University\u2019 team also helps you with the accommodation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 36)(86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 39)(89, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "We also assist you with the final documentation in the university.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 36)(92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 39)(95, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "We make all the arrangements for our students from the departure till they reach to the university.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 2)(98, "div", 46)(99, "div", 47)(100, "h4", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Number Speaks Everything for Us Number Speaks Everything for Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "h6", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Fix a meeting with us & get honest advise and guaranteed admission in top universities around the world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 49)(105, "div", 50)(106, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 53)(109, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "4+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Years Of Expertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 50)(114, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 53)(117, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "8000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Satisfied Students Counseled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 50)(122, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 53)(125, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "20+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Countries we offer to study abroad");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 58)(130, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 53)(133, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "100+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Universities partner with us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 2)(138, "div", 60)(139, "div", 49)(140, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.carouselOptions)("items", ctx.images)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__.OwlCarousel], styles: [".aboutUs-banner[_ngcontent-%COMP%] {\n  height: 30vh;\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.about-us-page-header[_ngcontent-%COMP%] {\n  padding-top: 5%;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 20%;\n  padding-top: 10%;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 150px;\n  padding-left: 30px;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n  padding-top: 2px;\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 10%;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: 2px #767676 outset;\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-right: 15px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.img-below-banner[_ngcontent-%COMP%] {\n  width: 75%;\n  padding: 20px;\n}\n\n.below-banner[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3%;\n}\n\n.below-banner-text[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.mission-img[_ngcontent-%COMP%], .vision-img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5%;\n  padding-top: 16%;\n  padding-left: 0px;\n}\n\n.our-mission[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3% 0%;\n}\n\n.our-services-div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3%;\n}\n\n.number-speaks[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3%;\n}\n\n.our-services-div-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 1% 3%;\n}\n\n.review[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 10px;\n  padding: 3%;\n}\n\n.mission-div[_ngcontent-%COMP%], .vision-div[_ngcontent-%COMP%] {\n  padding: 2%;\n  padding-top: 0px;\n}\n\n.vision-div[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.our-mission-text[_ngcontent-%COMP%] {\n  padding-right: 10%;\n  border-right: 2px solid #d5cfcf;\n}\n\n.mission-div-inner[_ngcontent-%COMP%], .vision-div-inner[_ngcontent-%COMP%] {\n  padding-top: 2%;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  height: 40vh;\n}\n\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 3%;\n}\n\n.service-card-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60%;\n  bottom: 20px;\n  right: 20px;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.number-speak-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.number-speak-img1[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.number-speak-img4[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.number-speak-div[_ngcontent-%COMP%] {\n  padding: 2%;\n  text-align: center;\n}\n\n.border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n\n.img-holder[_ngcontent-%COMP%] {\n  height: 20vh;\n  padding: 4%;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.review-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n\n.our-services-div[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.service-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n}\n\n.service[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.review-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n\n.our-services-div[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.service-img[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0px auto;\n  display: block;\n  max-height: 300px;\n}\n\n.service[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.text-div[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 13%;\n  text-align: center;\n  width: 70%;\n  left: 14%;\n  color: #fff;\n}\n\n.holder-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media only screen and (max-width: 767px) {\n  .service-card[_ngcontent-%COMP%] {\n    right: 0%;\n  }\n  .holder-div[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media only screen and (max-width: 767px) and (max-width: 767px) {\n  .service-card[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n  .vision-div[_ngcontent-%COMP%] {\n    padding-left: 2%;\n  }\n  .our-services-div-content[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .aboutUs-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n  .img-below-banner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .below-banner-text[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .our-mission-text[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #000;\n    padding-bottom: 10%;\n  }\n  .number-speak-div[_ngcontent-%COMP%] {\n    border-right: none !important;\n  }\n  .our-mission-header[_ngcontent-%COMP%], .our-vision-header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .review-img[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n  .our-services-div[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 8%;\n    margin-top: 0px;\n  }\n  .our-services-div[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .img-holder[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n  .number-speak-img1[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n  .number-speak-img[_ngcontent-%COMP%] {\n    width: 65% !important;\n  }\n  .number-speak-img4[_ngcontent-%COMP%] {\n    width: 55% !important;\n  }\n  .arrow-img[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .serviceMobImg[_ngcontent-%COMP%] {\n    max-height: 250px !important;\n  }\n  .service-card-text[_ngcontent-%COMP%] {\n    top: 65%;\n    bottom: 0px;\n    padding-right: unset !important;\n    text-align: center;\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 767px) and (max-width: 1024px) and (min-width: 768px) {\n  .aboutUs-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .about-us-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .img-below-banner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .our-mission-text[_ngcontent-%COMP%] {\n    padding-right: 0%;\n    border-right: none;\n    padding-top: 20px;\n  }\n  .service-img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .img-holder[_ngcontent-%COMP%] {\n    height: 10vh !important;\n  }\n  .vision-div-inner[_ngcontent-%COMP%] {\n    padding-top: 10%;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .white-text-2[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n\n.about-us-page-breadcrumb[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  padding-top: 4%;\n  padding-left: 30px;\n}\n\n@media only screen and (min-width: 400px) and (max-width: 767px) {\n  .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .about-us-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 4%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7RUFDQSw2RUFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0E7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUpKOztBQU9BO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQUpKOztBQU9BO0VBR0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBQ0ksYUFBQTtBQU5KOztBQVNBOztFQUVJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNBO0VBR0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVdBO0VBRUksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVlBO0VBRUksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVZKOztBQWFBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVZKOztBQWFBO0VBRUksNkVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVhKOztBQWNBOztFQUVJLFdBQUE7RUFDQSxnQkFBQTtBQVhKOztBQWNBO0VBQ0ksaUJBQUE7QUFYSjs7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7QUFYSjs7QUFjQTs7RUFFSSxlQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0FBWEo7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWNBO0VBQ0ksVUFBQTtBQVhKOztBQWNBO0VBQ0ksVUFBQTtBQVhKOztBQWNBO0VBQ0ksVUFBQTtBQVhKOztBQWNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBWEo7O0FBY0E7RUFDSSw0QkFBQTtBQVhKOztBQWNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFYSjs7QUFjQTtFQUNJLGlCQUFBO0FBWEo7O0FBY0E7RUFDSSxXQUFBO0FBWEo7O0FBY0E7RUFDSSxlQUFBO0FBWEo7O0FBY0E7RUFDSSxhQUFBO0FBWEo7O0FBY0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBWEo7O0FBY0E7RUFDSSxtQkFBQTtBQVhKOztBQWdCQTtFQUNJLGlCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtBQWJKOztBQWdCQTtFQUNJLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxhQUFBO0FBYko7O0FBZ0JBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksbUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWJKOztBQWdCQTtFQUNJLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0k7SUFDSyxTQUFBO0VBYlA7RUFnQkU7SUFDSyxrQkFBQTtFQWRQO0FBQ0Y7O0FBZ0JJO0VBQ0s7SUFDSyx1QkFBQTtFQWRaO0VBaUJPO0lBQ0ssZ0JBQUE7RUFmWjtFQWtCTztJQUNLLGFBQUE7RUFoQlo7RUFtQk87SUFDSyxZQUFBO0lBQ0Esa0JBQUE7RUFqQlo7RUFvQk87SUFDSyxXQUFBO0VBbEJaO0VBcUJPO0lBQ0ssMkJBQUE7RUFuQlo7RUFzQk87SUFDSyxnQkFBQTtFQXBCWjtFQXVCTztJQUNLLGtCQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtFQXJCWjtFQXdCTztJQUNLLDZCQUFBO0VBdEJaO0VBeUJPOztJQUVLLGtCQUFBO0VBdkJaO0VBMEJPO0lBQ0ssMEJBQUE7RUF4Qlo7RUEyQk87SUFDSyxrQkFBQTtFQXpCWjtFQTRCTztJQUNLLFdBQUE7RUExQlo7RUE2Qk87O0lBRUssU0FBQTtJQUNBLGVBQUE7RUEzQlo7RUE4Qk87SUFDSyx5QkFBQTtFQTVCWjtFQStCTztJQUNLLHVCQUFBO0VBN0JaO0VBa0NPO0lBQ0sscUJBQUE7RUFoQ1o7RUFtQ087SUFDSyxxQkFBQTtFQWpDWjtFQW9DTztJQUNLLHFCQUFBO0VBbENaO0VBdUNPO0lBQ0ssVUFBQTtFQXJDWjtFQXdDTztJQUNLLDRCQUFBO0VBdENaO0VBeUNPO0lBQ0ssUUFBQTtJQUNBLFdBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQXZDWjtBQUNGOztBQTBDSTtFQUNLO0lBQ0ssWUFBQTtJQUNBLGtCQUFBO0VBeENaO0VBMkNPO0lBQ0ssV0FBQTtFQXpDWjtFQTRDTzs7SUFFSyxVQUFBO0VBMUNaO0VBNkNPO0lBQ0ssZ0JBQUE7RUEzQ1o7RUE4Q087SUFDSyxXQUFBO0VBNUNaO0VBK0NPO0lBQ0ssaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBN0NaO0VBZ0RPO0lBQ0ssVUFBQTtFQTlDWjtFQWlETztJQUNLLHVCQUFBO0VBL0NaO0VBa0RPO0lBQ0ssZ0JBQUE7RUFoRFo7QUFDRjs7QUF4R0E7RUEySkk7SUFDSyxrQkFBQTtFQWhEUDtBQUNGOztBQW1NQTtFQUNLLGNBQUE7RUFDRCx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWpNSjs7QUFvTUE7RUFDSTtJQUNLLFNBQUE7RUFqTVA7QUFDRiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dFVzLWJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0MCwgMTg1LCAyMjksIDAuOCksICMzMzUzOWQpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmFib3V0LXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q0ZDQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYWJvdXQtdXMtcGFnZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4uaG9tZS1pbWcge1xyXG4gICAgd2lkdGg6IDUwJVxyXG59XHJcblxyXG4uYXJyb3ctaW1nIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUge1xyXG4gICAgd2lkdGg6IDIlO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93IHtcclxuICAgIHdpZHRoOiAyJTtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi8vIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5zZXJ2aWNlLWxpbmt7XHJcbi8vICAgICAgLy8gd2lkdGg6NSVcclxuLy8gfVxyXG4uYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuc2VydmljZS1saW5rIC53aGl0ZS10ZXh0LTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLnJvdy13aXRob3V0LWd1dHRlciB7XHJcbiAgICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBib3JkZXI6IDJweCAjNzY3Njc2IG91dHNldDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5pbWctYmVsb3ctYmFubmVyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYmVsb3ctYmFubmVyIHtcclxuICAgIC8vIGhlaWdodDo1NXZoIDtcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2IoODggMTQ3IDIzNSAvIDYlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4uYmVsb3ctYmFubmVyLXRleHQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1pc3Npb24taW1nLFxyXG4udmlzaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2JTtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ub3VyLW1pc3Npb24ge1xyXG4gICAgLy8gaGVpZ2h0OjcwdmggO1xyXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMjAwMHB4IHJnYig4OCAxNDcgMjM1IC8gNiUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyUgMCU7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtZGl2IHtcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2IoODggMTQ3IDIzNSAvIDYlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4ubnVtYmVyLXNwZWFrcyB7XHJcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG5cclxuLm91ci1zZXJ2aWNlcy1kaXYtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxJSAzJTtcclxufVxyXG5cclxuLnJldmlldyB7XHJcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDAsIDE4NSwgMjI5LCAwLjgpLCAjMzM1MzlkKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbn1cclxuXHJcbi5taXNzaW9uLWRpdixcclxuLnZpc2lvbi1kaXYge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4udmlzaW9uLWRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLm91ci1taXNzaW9uLXRleHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2Q1Y2ZjZjtcclxufVxyXG5cclxuLm1pc3Npb24tZGl2LWlubmVyLFxyXG4udmlzaW9uLWRpdi1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNhcmQge1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG59XHJcblxyXG4ubXItMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4uc2VydmljZS1jYXJkLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5udW1iZXItc3BlYWstaW1nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5udW1iZXItc3BlYWstaW1nMSB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4ubnVtYmVyLXNwZWFrLWltZzQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLm51bWJlci1zcGVhay1kaXYge1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3JkZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLmltZy1ob2xkZXIge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbn1cclxuXHJcbi5tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlXHJcbn1cclxuXHJcbi5yZXZpZXctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5tdC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtZGl2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VydmljZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vLyAudGV4dC1kaXYge31cclxuXHJcbi5tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlXHJcbn1cclxuXHJcbi5yZXZpZXctaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5tdC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtZGl2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEzJTsgLy8gYm90dG9tOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MCU7IC8vd2lkdGg6IDUwJTtcclxuICAgIGxlZnQ6IDE0JTsgLy9sZWZ0OiAyNSU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhvbGRlci1kaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuc2VydmljZS1jYXJkIHtcclxuICAgICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob2xkZXItZGl2IHtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgICAgICAgLnNlcnZpY2UtY2FyZCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC52aXNpb24tZGl2IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAub3VyLXNlcnZpY2VzLWRpdi1jb250ZW50IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuYWJvdXRVcy1iYW5uZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5pbWctYmVsb3ctYmFubmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuYmVsb3ctYmFubmVyLXRleHQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLm91ci1taXNzaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAubnVtYmVyLXNwZWFrLWRpdiB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5vdXItbWlzc2lvbi1oZWFkZXIsXHJcbiAgICAgICAgIC5vdXItdmlzaW9uLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAucmV2aWV3LWltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLm91ci1zZXJ2aWNlcy1kaXYgaDQge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbiAgICAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDglO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLm91ci1zZXJ2aWNlcy1kaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5pbWctaG9sZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgICAgICAgLypBUyovXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vPDw8PDw8PCBIRUFEXHJcbiAgICAgICAgIC5udW1iZXItc3BlYWstaW1nMSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAubnVtYmVyLXNwZWFrLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAubnVtYmVyLXNwZWFrLWltZzQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy89PT09PT09XHJcblxyXG4gICAgICAgICAuYXJyb3ctaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuc2VydmljZU1vYkltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLnNlcnZpY2UtY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICB0b3A6IDY1JTtcclxuICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjEwMjRweCkgYW5kICAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgIC5hYm91dFVzLWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbiAgICAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwJVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAuaW1nLWJlbG93LWJhbm5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5vdXItbWlzc2lvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5zZXJ2aWNlLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLmltZy1ob2xkZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTB2aCAhaW1wb3J0YW50XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC52aXNpb24tZGl2LWlubmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndoaXRlLXRleHQtMiB7XHJcbiAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAzMHB4KSB7XHJcbiAgICAvLyAgICAgIC8vIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWJbX25nY29udGVudC1vdmMtYzJdIGEuYXJyb3dbX25nY29udGVudC1vdmMtYzJdIHtcclxuXHJcbiAgICAvLyAgICAgIC8vICAgICAgbWFyZ2luLXRvcDogN3B4OyBcclxuICAgIC8vICAgICAgLy8gIH1cclxuICAgIC8vICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLy8gICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTUwMHB4KSB7XHJcbiAgICAvLyAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIge1xyXG4gICAgLy8gICAgICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIC8vICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAvLyAgICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcclxuICAgIC8vICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiB7XHJcbiAgICAvLyAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAvLyAgICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIGFuZCAobWF4LXdpZHRoOjExMjRweCkge1xyXG4gICAgLy8gICAgICAud2hpdGUtdGV4dC0yIHtcclxuICAgIC8vICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC05cHg7XHJcbiAgICAvLyAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5ob21lLFxyXG4gICAgLy8gICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgLy8gICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAvLyAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcclxuICAgIC8vICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLy8gICAgICB9XHJcblxyXG4gICAgLy8gICAgICAuaG9tZS1pbWcge1xyXG4gICAgLy8gICAgICAgICAgIHdpZHRoOiAyMiU7XHJcbiAgICAvLyAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIC8vICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgLy8gIC5hcnJvdy1pbWd7XHJcbiAgICAvLyAgICAgIC8vICAgICAgd2lkdGg6IDEwJTtcclxuICAgIC8vICAgICAgLy8gICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgLy8gICAgICAvLyAgICAgIG1hcmdpbi1sZWZ0OiAtNDNweDtcclxuICAgIC8vICAgICAgLy8gIH1cclxuICAgIC8vICAgICAgLmFycm93LWltZyB7XHJcbiAgICAvLyAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIC8vICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgLy8gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDNweDtcclxuICAgIC8vICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhIHtcclxuICAgIC8vICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIC8vICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIC8vICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLnNlcnZpY2UtbGluayAud2hpdGUtdGV4dC0yIHtcclxuICAgIC8vICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAvLyAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy8gICAgICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAvLyAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICAvLyAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgLy8gICAgICB9XHJcblxyXG5cclxuICAgIC8vICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbiAgICAvLyAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbiAgICAvLyAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIC8vICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xyXG4gICAgLy8gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgLy8gICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4vLyAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NTBweCkgYW5kIChtYXgtd2lkdGg6MTEyNHB4KSB7XHJcblxyXG4vLyAgICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbi8vICAgICAgICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4vLyAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuLy8gICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAud2hpdGUtdGV4dC0yIHtcclxuLy8gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjRweDtcclxuLy8gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuLy8gICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgfVxyXG5cclxuLy8gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAzMHB4KSBhbmQgKG1heC13aWR0aDoxMTI0cHgpIHtcclxuXHJcbi8vICAgICAgICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuaG9tZSxcclxuLy8gICAgICAgICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5hcnJvdyB7XHJcbi8vICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMCU7XHJcbi8vICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogLTUxcHg7XHJcbi8vICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4vLyAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4vLyAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgIC53aGl0ZS10ZXh0LTIge1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yNHB4O1xyXG4vLyAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgIH1cclxuXHJcbi8vICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ5OXB4KSBhbmQgKG1heC13aWR0aDo3NDJweCkge1xyXG4vLyAgICAgICAgICAgLmhvbWUtaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuLy8gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuLy8gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICB9XHJcblxyXG4vLyAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTZweCkgYW5kIChtYXgtd2lkdGg6MTAyOXB4KSB7XHJcblxyXG4vLyAgICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbi8vICAgICAgICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4vLyAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC00M3B4O1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICB9XHJcblxyXG4vLyAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDMwcHgpIGFuZCAobWF4LXdpZHRoOjExMjRweCkge1xyXG5cclxuLy8gICAgICAgICAgIC5ob21lLWltZyB7XHJcbi8vICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbi8vICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbi8vICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgLmFib3V0LXVzLXBhZ2UtYnJlYWRjcnVtYiBhLmhvbWUsXHJcbi8vICAgICAgICAgICAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4vLyAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xyXG4vLyAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICB9XHJcbn1cclxuXHJcbi5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MDBweCkgYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5hYm91dC11cy1wYWdlLWJyZWFkY3J1bWIgYS5ob21lLCAuYWJvdXQtdXMtcGFnZS1icmVhZGNydW1iIGEuYXJyb3d7XHJcbiAgICAgICAgIHdpZHRoOiA0JTtcclxufVxyXG59Il19 */"] });


/***/ }),

/***/ 58310:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsModule": () => (/* binding */ AboutUsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 71728);
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.component */ 91410);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel */ 53471);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav.module */ 61125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);




// import { HeaderInnerModule } from '../header-inner/header-inner.module';



class AboutUsModule {
}
AboutUsModule.ɵfac = function AboutUsModule_Factory(t) { return new (t || AboutUsModule)(); };
AboutUsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AboutUsModule });
AboutUsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        // HeaderInnerModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__.OwlModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__.NavModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutUsModule, { declarations: [_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsRoutingModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        // HeaderInnerModule,
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__.OwlModule,
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_4__.NavModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_about-us_about-us_module_ts.js.map