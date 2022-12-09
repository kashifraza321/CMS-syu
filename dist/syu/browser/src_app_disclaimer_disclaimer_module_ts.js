"use strict";
(self["webpackChunksyu"] = self["webpackChunksyu"] || []).push([["src_app_disclaimer_disclaimer_module_ts"],{

/***/ 1672:
/*!*********************************************************!*\
  !*** ./src/app/disclaimer/disclaimer-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisclaimerRoutingModule": () => (/* binding */ DisclaimerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _disclaimer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disclaimer.component */ 21646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _disclaimer_component__WEBPACK_IMPORTED_MODULE_0__.DisclaimerComponent
    }
];
class DisclaimerRoutingModule {
}
DisclaimerRoutingModule.ɵfac = function DisclaimerRoutingModule_Factory(t) { return new (t || DisclaimerRoutingModule)(); };
DisclaimerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DisclaimerRoutingModule });
DisclaimerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisclaimerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 21646:
/*!****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisclaimerComponent": () => (/* binding */ DisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 10970);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/accordion */ 79854);




class DisclaimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(); };
DisclaimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["app-disclaimer"]], decls: 232, vars: 2, consts: [[1, "disclaimer"], [1, "disclaimer-banner"], [1, "col-lg-12"], [1, "disclaimer-page-header", "text-center"], [1, "white-text-2"], [1, "disclaimer-page-breadcrumb", "text-center"], ["href", "", "routerLink", "/home", 1, "home"], ["src", "../../assets/img/services_page/Our_Services/Home.png", "alt", "", 1, "home-img"], ["href", "", 1, "arrow"], ["src", "../../assets/img/services_page/Our_Services/Arrow.png", "alt", "", 1, "arrow-img"], ["href", "", "routerLink", "/home", 1, "service-link"], [1, "col-lg-12", "col-12"], [1, "below-banner"], [1, "row", "row-without-gutter"], ["id", "disclaimer-collapse", 3, "multiple"], ["header", "Disclaimers for Select Your University", 1, "accordionTab", 3, "selected"], ["header", "Fee Structure of Universities", 1, "accordionTab"], ["header", "Update", 1, "accordionTab"], ["header", "Website Usage Policy", 1, "accordionTab"], ["header", "T&Cs Updates", 1, "accordionTab"], ["header", "General Conditions/Access and Use", 1, "accordionTab"], ["header", "Ownership and Restrictions", 1, "accordionTab"], ["header", "Responsibility for Your Data", 1, "accordionTab"], ["header", "Reservation of Rights", 1, "accordionTab"], ["header", "Registration", 1, "accordionTab"], ["header", "Use of Intellectual Property", 1, "accordionTab"], ["header", "Termination Of Access Due To Violations", 1, "accordionTab"], ["header", "No Warranties And Disclaimer By Tow", 1, "accordionTab"], ["header", "Limited Liability", 1, "accordionTab"], ["header", "Indemnification", 1, "accordionTab"], ["header", "Due Diligence Of User", 1, "accordionTab"], ["header", "Miscellaneous", 1, "accordionTab"], ["header", "General Terms And Conditions For Payment", 1, "accordionTab"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10)(13, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "p-accordion", 14)(19, "p")(20, "p-accordionTab", 15)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "All the information on this website - https://www.selectyouruniversity.com/ - is published in good faith and for general information purpose only. Select Your University does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Select Your University), is strictly at your own risk. Select Your University will not be liable for any losses and/or damages in connection with the use of our website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their \"Terms of Service\" before engaging in any business or uploading any information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p-accordionTab", 16)(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select Your University is the educational consultant for all the students who want to study abroad as well as in India. Our team works hard to gather all the important information regarding universities/colleges mentioned here on the website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "We believe that all the information provided on the website is from the official websites of the respective institutes and organizations. Since the information like fee, intake timeline, and other information about the courses tend to change every year, we request our students to visit the official websites as well of the respective universities for the confirmed information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p-accordionTab", 17)(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Should we update, amend or make any changes to this document, those changes will be prominently posted here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p-accordionTab", 18)(36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Welcome to the website \u201Cselectyouruniversity.com\u201D which is owned by \u201CWalgreens Pvt. Ltd.\u201D. The following terms and conditions cover every individual visiting the website and it is assumed that by accessing, using or browsing through the website, you accept the Terms of Use in sum and substance. It is also assumed that you have gone through the entire terms and conditions and consent univocally and irrevocably to the same. If you disagree with any of these terms and conditions you must not visit or use the website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Your access and use of the Services constitutes your agreement to be bound by these Terms and Conditions (\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "T&C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u201D), which establishes a contractual relationship between Walgreens Consultancy & Services Pvt. Ltd. (\u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Walgreens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u201D), it\u2019s affiliates or subsidiaries, and you. These T&C govern the use and access by you, the user, to the services, products, content, applications, websites etc. offered by Walgreens on its website being ____________ (the \u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u201D). If you do not agree to these T&C, you may not access or use the products and services offered on the Site. These T&C expressly supersede prior written agreements with you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "By using this Site, you represent and warrant that you are of legal age and fulfil all criterion to form a binding contract under the Indian Contract Act, 1972. If you do not meet all of the requirements for entering into a contract within the purview of Indian laws, you must not access or use the Site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "These T&C are to be read in conjunction with Walgreen\u2019s Privacy Policy, where applicable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p-accordionTab", 19)(54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Walgreens reserves the right, at its sole discretion, to change or modify portions of these T&Cs at any time. Walgreens will post the changes to these T&Cs on Site and will indicate at the top of this page the date these terms were last revised. It will be your responsibility to check the T&Cs periodically for changes. Your continued use of Site and Content after the date any such changes become effective constitutes your acceptance of the new or revised T&Cs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p-accordionTab", 20)(57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Authorization to Access and Use Site and Content. Subject to your compliance with these T&Cs and the provisions hereof, you may access or use Site and Content solely for the purpose of your evaluation of Walgreens and Walgreens\u2019s products and services. You may only link to Site or Content, or any portion thereof, as expressly permitted by Walgreens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p-accordionTab", 21)(60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "All rights, title and interest in and to Walgreens and Content will remain with and belong exclusively to Walgreens. You will not (a) sublicense, resell, rent, lease, transfer, assign, time share or otherwise commercially exploit or make Walgreens and any Content available to any third party, (b) use Site and Content in any unlawful manner (including without limitation in violation of any data, privacy or export control laws) or in any manner that interferes with or disrupts the integrity or performance of Site and Content or their related components, or (c) modify, adapt or hack Site and Content to, or try to, gain unauthorized access to the restricted portions of Site and Content or related systems or networks (i.e., circumvent any encryption or other security measures, gain access to any source code or any other underlying form of technology or information, and gain access to any part of Site and Content, or any other products or services of Walgreens that are not readily made available to the general public).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "You are not permitted to copy, modify, frame, repost, publicly perform or display, sell, reproduce, distribute, or create derivative works of Site and Content, except that you may download, display, and print one copy of the publicly available materials (i.e., the Content that does not require an Account name or password to access) on any single computer solely for your personal, non-commercial use, provided that you do not modify the material in any way and you keep intact all copyright, trademark, and other proprietary notices. You agree not to access Site or Content by any means other than through the interface that is provided by Walgreens to access the same. You may not use any \u201Cpage-scrape,\u201D \u201Cdeep-link,\u201D \u201Cspider,\u201D or \u201Crobot or other automatic program, device, algorithm or methodology, or any similar manual process, to access, copy, acquire, or monitor any portion of Site or any Content, or in any way reproduce or circumvent the presentation or navigational structure of Site or any Content, to obtain or attempt to obtain any Content or other information through any means not made generally available through Site by Walgreens. Walgreens reserves the right to take any lawful measures to prevent any such activity. You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any message or transmittal you send to Walgreens on or through Site or any service offered on or through Site. You may not pretend that you are, or that you represent, someone else, or impersonate any other individual or entity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p-accordionTab", 22)(65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "You are solely responsible for all data, information and other content, that you upload, post, or otherwise provide or store (hereafter \u201Cpost(ing)\u201D) in connection with or relating to Walgreens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p-accordionTab", 23)(68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Walgreens and its licensors each own and retain their respective rights in and to all logos, company names, marks, trademarks, copyrights, trade secrets, know-how, patents and patent applications that are used or embodied in or otherwise related to Site and Content. Walgreens grants no rights or licenses (implied, by estoppel, or otherwise) whatsoever to you under these T&Cs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p-accordionTab", 24)(71, "h5")(72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "1. Eligibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "To access our Services through our Website, you must be a legal entity, or an individual of eighteen (18) years of age or older who can form legally binding contracts. To become a Registered User, you must accept all of the terms and conditions in, incorporated by reference in, and linked to, these T&Cs. By becoming a Registered User, you agree to: (1) abide by the T&Cs and the processes, procedures, and guidelines described throughout the Website; (2) be financially responsible for your use of the Website and the purchase or delivery of services; and (3) perform your obligations as specified by any Programme Agreement that you accept, unless such obligations are prohibited by law or by the T&C. Walgreens reserves the right, in its sole discretion, to refuse, suspend, or terminate Services to anyone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h5")(77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "2. Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "To become a Registered User and to access Services you must register for an Account. You agree to provide true, accurate and complete information as prompted by the registration form and all forms you access on the Website, and to update this information to maintain its truthfulness, accuracy and completeness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5")(82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "3. Accounts and Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "(1) Username and Password: During registration, you will be asked to choose a username and password for the Account. As a Registered User, you agree and you are entirely responsible to safeguard and maintain the confidentiality of the username and password you use to access this website. You authorize Walgreens to assume that any person using the Website with your username and password is you or is authorized to act for you. You agree to notify us immediately if you suspect any unauthorized use of the Account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "p-accordionTab", 25)(87, "h5")(88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "1. Rights in User Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "By posting your information and other content (\u201CUser Content\u201D) on or through Site and Content, you grant Walgreens a worldwide, non-exclusive, perpetual, irrevocable, royalty-free, fully paid, sublicensable and transferable license to use, modify, reproduce, distribute, display, publish and perform User Content in connection with Site and Content. Walgreens has the right, but not the obligation, to monitor Site and Content and User Content. Walgreens may remove or disable any User Content at any time for any reason, or for no reason at all.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h5")(93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "2. Unsecured Transmission of User Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "You understand that the operation of Site and Platform, including User Content, may be unencrypted and involve transmission to Walgreens\u2019s third party vendors and hosting partners to operate and maintain Site and Content. Accordingly, you acknowledge that you bear sole responsibility for adequate security, protection and backup of User Content. Walgreens will have no liability to you for any unauthorized access or use of any of User Content, or any corruption, deletion, destruction or loss of any of User Content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h5")(98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "3. Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "You may submit ideas, suggestions, or comments (\u201CFeedback\u201D) regarding Site and Content or Walgreen\u2019s business, products or services. By submitting any Feedback, you acknowledge and agree that (a) your Feedback is provided by you voluntarily and Walgreens may, without any obligations or limitation, use and exploit such Feedback in any manner and for any purpose, (b) you will not seek and are not entitled to any money or other form of compensation, consideration, or attribution with respect to your Feedback regardless of whether Walgreens considered or used your Feedback in any manner, and (c) your Feedback is not the confidential or proprietary information of you or any third party.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h5")(103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "4. Your Representations and Warranties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "You represent and warrant to Walgreens that your activity on Site and Walgreens possession and use of User Content as contemplated in these T&Cs do not and will not violate, infringe, or misappropriate any third party\u2019s copyright, trademark, right of privacy or publicity, or other personal or proprietary right, nor does User Content contain any matter that is defamatory, obscene, unlawful, threatening, abusive, tortious, offensive or harassing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "p-accordionTab", 26)(108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Walgreens may, in its sole discretion and without prior notice, terminate your access to Site and/or block your future access to Site if Walgreens determine that you have violated these T&Cs or other agreements or guidelines which may be associated with your use of Walgreens. You also agree that any violation by you of these T&Cs will cause irreparable harm to Walgreens, for which monetary damages would not be inadequate, and you consent to Walgreens obtaining any injunctive or equitable relief that Walgreens deems necessary or appropriate in such circumstances, without limiting Walgreens other available remedies. Further, Walgreens may, in its sole discretion and without prior notice, terminate your access to Site, for cause, which includes (but is not limited to) (1) requests by law enforcement or other government agencies, (2) discontinuance or material modification of Site or any service offered on or through Walgreens, or (3) unexpected technical issues or problems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p-accordionTab", 27)(111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "WALGREENS MATERIALS ARE PROVIDED \u201CAS IS\u201D BASIS. WALGREENS AND ITS THIRD-PARTY LICENSORS DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND GUARANTEES, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR ANY PURPOSE. TOW MAKES NO REPRESENTATION, WARRANTY OR GUARANTEE (I) THAT USE OF WALGREENS MATERIALS WILL BE UNINTERRUPTED, ERROR-FREE OR MEET YOUR REQUIREMENTS OR EXPECTATIONS OR (II) THAT WALGREENS WILL CONTINUE TO OFFER WALGREENS MATERIALS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "WALGREENS DOES NOT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF WALGREENS AND CONTENT. NO INFORMATION, ADVICE OR SERVICES OBTAINED BY YOU FROM WALGREENS OR THROUGH TOW WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE T&Cs AND YOU SHOULD NOT RELY ON WALGREENS AND THE GENERAL CONTENT ALONE AS THE BASIS FOR YOUR BUSINESS DECISIONS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Walgreens reserves the right to do any of the following, at any time, without notice: (1) to modify, suspend or terminate operation of or access to Site, or any portion of Site, for any reason; (2) to modify or change Site, or any portion of Site, for any reason; and (3) to interrupt the operation of Site, or any portion of Site, as necessary to perform routine or non-routine maintenance, error correction, or other changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p-accordionTab", 28)(118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Exclusion of Damages and Limitation of Liability. Walgreens does not charge fees for you to access and use Site and Content pursuant to these T&Cs. Walgreens does not conduct commercial transactions; the Content is comprised of general information and describes some of the basic elements of the Walgreens service. As consideration for your free access and use of Site and Content pursuant to these T&Cs, you further agree that WALGREENS WILL NOT BE LIABLE TO YOU FOR ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES (INCLUDING DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS OR THE LIKE) ARISING OUT OF OR RELATING TO THIS T&Cs, INCLUDING WITHOUT LIMITATION, YOUR USE OR INABILITY TO USE TOW, MATCHING SERVICES, CONTENT, PROPRIETARY INFORMATION, OR ANY INTERRUPTION OR DISRUPTION OF SUCH USE, EVEN IF TOW HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF THE CAUSE OF ACTION (WHETHER IN CONTRACT, TORT, BREACH OF WARRANTY OR OTHERWISE).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p-accordionTab", 29)(121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "You agree to indemnify, defend and hold Walgreens and its subsidiaries (including its respective affiliates, officers, directors, employees, contractors and assigns) harmless from and against any loss, claim, liability, damage, action or cause of action (including legal fees) arising out of any claim relating to any services or the use of services (including any claims made by or arising from Clients), or from any breach of your representations, warranties or obligations set forth in this Agreement (individually, a \"Claim,\" and collectively, the \"Claims\"). You agree not to settle a Claim without Walgreens prior written consent. Walgreens retains the right to withhold its consent under reasonable circumstances like fraudulent claims etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p-accordionTab", 30)(124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "You affirm and agree that, given the general and \u201Cas-is\u201D nature of Walgreens and the Content you are not specifically relying on any statements, or materials contained on TOW or in the Content to make any business decisions. Resource allocation and staffing matters are inherent complex and unique. Should you choose to continue your inquiry into whether Walgreens service is right for you, you will have an opportunity to make additional inquiry of Walgreens and you should make an independent investigation of the suitability of using Walgreens for your particular business needs. Only after such appropriate due diligence, thorough review of TOW\u2019s service offering including the terms and conditions of TOW\u2019s service agreements, and a thorough screening of any Vendor, TOW proposes to you, should you come to any conclusions or make any decisions about whether TOW, or any Vendor proposed by TOW is right for you and your specific Programme needs or requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p-accordionTab", 31)(127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "These T&Cs, and any additions, changes, edits and/or modifications made thereto by Walgreens, together with Walgreens Privacy Policy, constitute the entire agreement between the parties with respect to the portions of Walgreens available without an account ID or password. Access to certain password-restricted portions of Walgreens, and any subsequent procurement and use of Walgreens services is subject to different, additional agreement(s).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "h5")(130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Compliance with Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "You are responsible for compliance with applicable Indian laws, regulation and treaties, keeping in mind that access to the contents of Site may not be legal for or by certain persons or in certain countries.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Walgreens does not conduct business with or seek any commercial transactions with: (i) any entity, citizen or resident of a geographic area in which access to or use of the Walgreens services is prohibited by applicable law, decree, regulation, treaty, or administrative act; (ii) an entity, citizen or resident of, or located in, a geographic area that is subject to India or the UN sanctions or embargoes; or (iii) an individual, or an individual employed by or associated with an entity, identified by Director General of Foreign Trade (\u201CDGFT\u201D) or the relevant regulator or otherwise ineligible to receive items subject to India\u2019s export control laws and regulations or other economic sanction rules (collectively, a \u201C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Prohibited Counterparty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "\u201D). By accessing Site and the Content you represent and warrant that you are not a Prohibited Counterparty and you will not seek or (attempt to) obtain services from or a commercial relationship with Walgreens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p")(140, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Modification and Waiver:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, " Walgreens will not be considered to have modified or waived any of our rights or remedies under these T&Cs unless the modification or waiver is in writing and signed by an authorized representative of Walgreens. No delay or omission by Walgreens in exercising its rights or remedies will impair its rights or be construed as a waiver. Any single or partial exercise of a right or remedy will not preclude further exercise of any other right or remedy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p")(144, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Severability:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " In the event that any provision of these T&Cs will be determined to be illegal or unenforceable, that provision will be first revised to give the maximum permissible effect to its original intent or, if such revision is not permitted, that specific provision will be eliminated so that these T&Cs will otherwise remain in full force and effect and enforceable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "p")(148, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Assignment or Transfer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, " You will not transfer, assign or delegate your rights or obligations (including your Account) under these T&Cs to anyone without the express written permission of Walgreens, and any attempt to do so will be null and void. Walgreens may assign these T&Cs in its sole discretion.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p")(152, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Force Majeure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " Except for the payment of fees to Walgreens, neither of the parties to these T&Cs shall be responsible for the failure to perform or any delay in performance of any obligation hereunder due to labour disturbances, accidents, fires, floods, telecommunications or Internet failures, strikes, wars, riots, rebellions, blockades, acts of government, governmental requirements and regulations or restrictions imposed by law or any other similar conditions beyond the reasonable control of such party. The time for performance of such party shall be extended by the period of such delay.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "p")(156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Notice:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " All notices required or permitted to be given under these T&Cs, shall be in writing and shall be deemed to have been duly given if delivered personally or sent by Post, Courier or email to our addresses or to such other address as any party shall designate by notice in writing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "You are responsible for paying all other fees and taxes associated with the funds you earn by the use of WALGREENS wherever levied (including withholding tax, if applicable).");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "If a Vendor/Client doesn't responds to a Request, Walgreens reserves full authority to perform required Action either by automation or manually.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "The Website may contain links to third-party web sites not under the control or operation of Walgreens. When we provide links, we do so only as a convenience and do not endorse and are not responsible for the content of any linked site or any link contained in a linked site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "You are responsible for creation, storage, and backup of your business records. These T&Cs and any registration for or subsequent use of Site will not be construed as creating any responsibility on Walgreens part to store, backup, retain, or grant access to any information or data for any period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "These T&Cs and any additions, changes, edits and/or modifications made thereto by Walgreens cannot be amended except by Walgreens as set forth above. The failure of Walgreens to exercise or enforce any right or provision of these T&Cs will not be a waiver of that right. Any notices to Walgreens in connection with this agreement will be made by email transmitted to .");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p-accordionTab", 32)(172, "h5")(173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "1. General \u2013 Scope of application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "These payment terms are in accordance to the policies, practices and regulations which are followed by Walgreens Consultancy Pvt. Ltd. ( hereinafter referred to as \u2018 the company\u2019)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "The Company\u2019s services are performed exclusively under the General Terms and Conditions of Payment set forth hereinafter. They apply also to all future transactions conducted between the contracting parties without requiring further special reference to them. It is deemed that the consumer/ student has complete knowledge of the company\u2019s General Terms and Conditions for payment, gained through the company\u2019s price lists, emails, counselling and Internet publications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "h5")(180, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "2. Offers and conclusion of contract, Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "The company is in the business and trade of offering consultancy to students who are desirous of pursuing studies from foreign countries. For the purposes of the same, the Company offers its consumer (student) with various options for studying in foreign countries in according to the requirement and eligibility of the student. That such offers are made by the company after diligent research, due diligence and trade experience. The Student is offered various universities as options and it is finally the students discretion to choose his/ her university. The company herein clarifies that the Company has no role in the finalisation of the University of the student as the company merely gives the student options and facilitates the finalisation of the University. The Company on finalisation of the university by the student offers the student an amount for the admission of the student into the finalised University. It is herein that the offer submitted by the company are non-binding and the student may chose not to accept the offer of the Company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "On acceptance of the offer by the student, the amount quoted by the Company for the services rendered by it has a binding effect on the consumer and shall transpire into an enforceable contract. The acceptance of the student may be written or oral.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "On the finalisation of the amount and the university, the Company will perform its obligations as provided under the student agreement which shall be executed with the student before the commencement of the process of admission of the student into the concerned university.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "The technical data and descriptions contained in the company\u2019s services, service information or advertising materials shall not constitute warranties as to the properties, quality, or performance of the services to be provided to the student, unless such information (in regard to performance or otherwise) is agreed under an individual contract with the consumer/ student.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "The Company provides technical and consultancy support to the best of its knowledge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "h5")(193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "3. Prices, terms of payment, default in payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "The prices/ amount agreed upon the conclusion of contract, and in particular the prices stated in the student agreement, shall apply. If no price has been expressly determined, the prices in effect at the time of the conclusion of contract as per the company\u2019s price list shall apply. The amount is calculated on the basis of University admission fees, Hotel fees, Food, VISA charges, taxes etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "The Company reserves the right to reasonably adjust our prices in the event of changes of costs occurring after the conclusion of contract due to reasons including but not limited to alteration in VISA charges, University fees, Third Party fees etc. Unless the consumer/ student objects in writing to the new prices within one week of notification, the new prices/ amount/ fees shall be considered accepted. This clause shall not apply if a fixed price is agreed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Payment of the contracted amount/ price/ fees shall be made by the consumer/ student in accordance to the schedule of payment which shall be provided by the company to the student at the time of the execution of the Student Agreement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "If the Student/ consumer fails to pay a due amount, observe a payment term, or in the event that the Consumer\u2019s financial situation deteriorates after the conclusion of the contract, or if, after the conclusion of contract, the Company obtains unfavourable information relating to the student/ consumer, that give rise to doubts as to the student\u2019s solvency or credit-worthiness, the company shall be entitled to, contrary to the agreement, demand advance payment, or payment of a security, or, upon performance, immediate payment of all our receivables that are based on the same legal relationship. This shall apply in particular if the student ceases his payments, a cheque issued by the student or his/ her sponsor is not honoured, insolvency proceedings against the Student\u2019s or his sponsors assets are applied for or instituted, or if an application for such insolvency proceedings are rejected due to a lack of assets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "It is clarified herein that upon the payment of the services in accordance to the schedule by the student and the performance of the services by the company, no refund whatsoever shall be initiated by the company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "It is further clarified that the if the student fails to make payments in accordance to the schedule of payment provided to him/ her, the Company shall be entitled to interest on the outstanding amount @ 18% p.a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "All provisions of this agreement shall also apply to the sponsor of the consumer/ student and the terms set forth herein shall be binding in nature.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "The Company shall also be entitled to retain the original documents of the Student/ consumer until the final payment is not realised by the student or through his/ her sponsor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Travelling charges is recovered on actual basis and we work as a pure agent . Students may direct book their ticket on their hand.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h5")(214, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "4. Conciliation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "In the event of any dispute between the Company and the consumer, the company shall depute a senior member of the company shall hold a conciliation process to resolve the differences or dispute in an amicable manner in the best interest of both the parties i.e. the Company and the consumer. The conciliation process shall be time bound and shall be resolved in 15 days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "h5")(219, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "5. Jurisdiction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "That upon the failure of the conciliation process, any dispute or differences arising out of or in relation to any payment or any incident thereto shall be subject to the exclusive jurisdiction of the Courts in New Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h5")(224, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "6. Final provisions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "p")(227, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Severability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "In the event that one or several of provisions set out herein-above are invalid, partly invalid, or excluded under a special agreement, the validity of the remaining provisions shall not be affected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", true);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_3__.AccordionTab], styles: [".disclaimer-banner[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2000px rgba(88, 147, 235, 0.06);\n  background-size: 100% 100%;\n  background-image: linear-gradient(to right, rgba(40, 185, 229, 0.8), #33539d);\n  background-repeat: no-repeat;\n  padding: 6%;\n}\n\n.disclaimer[_ngcontent-%COMP%] {\n  background-color: #d7d4d4;\n  padding-bottom: 10px;\n}\n\n.home-img[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.arrow-img[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.disclaimer-page-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\n.disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.service-link[_ngcontent-%COMP%]   .white-text-2[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 16px;\n  padding-top: 5%;\n}\n\n.disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n.row-without-gutter[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0 !important;\n  --bs-gutter-y: 0 !important;\n}\n\n.navbar-toggle[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border: 2px #767676 outset;\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-right: 15px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.below-banner[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 10px;\n  padding: 1%;\n}\n\n@media only screen and (max-width: 767px) {\n  .disclaimer-banner[_ngcontent-%COMP%] {\n    height: auto;\n    padding-bottom: 5%;\n    margin: 0px 1%;\n    padding: 1%;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n\n@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .disclaimer-banner[_ngcontent-%COMP%] {\n    margin-left: 8px !important;\n    margin-right: 8px !important;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.home[_ngcontent-%COMP%], .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a.arrow[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .disclaimer-page-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .home-img[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n  .arrow-img[_ngcontent-%COMP%] {\n    width: 20% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NsYWltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1REFBQTtFQUNBLDBCQUFBO0VBQ0ksNkVBQUE7RUFDQSw0QkFBQTtFQUlBLFdBQUE7QUFGTDs7QUFJQTtFQUNLLHlCQUFBO0VBQ0Esb0JBQUE7QUFETDs7QUFPQTtFQUNLLFVBQUE7QUFKTDs7QUFNQTtFQUNLLFVBQUE7QUFITDs7QUFLQTtFQUNLLGFBQUE7RUFDQSx1QkFBQTtBQUZMOztBQUlBO0VBQ0sscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBREw7O0FBR0E7RUFDSyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUw7O0FBRUE7RUFDSyxTQUFBO0FBQ0w7O0FBQ0E7RUFDSyxTQUFBO0FBRUw7O0FBR0E7RUFDSywyQkFBQTtFQUNBLDJCQUFBO0FBQUw7O0FBRUE7RUFDSyx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQ0w7O0FBQ0M7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVMOztBQUFDO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0w7O0FBREM7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUlMOztBQUZDO0VBQ0k7SUFDSyxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtFQUtSO0VBSEc7SUFDSyxnQkFBQTtFQUtSO0VBSEc7SUFDSyxVQUFBO0VBS1I7RUFISTtJQUNJLFdBQUE7RUFLUjtBQUNGOztBQUhDO0VBQ0k7SUFDSywyQkFBQTtJQUNBLDRCQUFBO0VBS1I7RUFIRztJQUNLLGdCQUFBO0VBS1I7RUFIRztJQUNLLFVBQUE7RUFLUjtFQUhJO0lBQ0ksV0FBQTtFQUtSO0VBSEk7SUFDSyxxQkFBQTtFQUtUO0VBSEk7SUFDSyxxQkFBQTtFQUtUO0FBQ0YiLCJmaWxlIjoiZGlzY2xhaW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjbGFpbWVyLWJhbm5lcntcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAyMDAwcHggcmdiKDg4IDE0NyAyMzUgLyA2JSk7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDAsIDE4NSwgMjI5LCAwLjgpLCAjMzM1MzlkKTsgXHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAvLyBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAvLyBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBwYWRkaW5nOiA2JTtcclxufVxyXG4uZGlzY2xhaW1lcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNGQ0O1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi8vIC5kaXNjbGFpbWVyLXBhZ2UtaGVhZGVye1xyXG4vLyAgICAgIHBhZGRpbmctdG9wOiAzJTtcclxuLy8gfVxyXG4uaG9tZS1pbWd7XHJcbiAgICAgd2lkdGg6NTAlXHJcbn1cclxuLmFycm93LWltZ3tcclxuICAgICB3aWR0aDozMCVcclxufVxyXG4uZGlzY2xhaW1lci1wYWdlLWJyZWFkY3J1bWJ7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZGlzY2xhaW1lci1wYWdlLWJyZWFkY3J1bWIgYXtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgICBtYXJnaW46MDtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuc2VydmljZS1saW5rIC53aGl0ZS10ZXh0LTJ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuaG9tZXtcclxuICAgICB3aWR0aDoyJVxyXG59XHJcbi5kaXNjbGFpbWVyLXBhZ2UtYnJlYWRjcnVtYiBhLmFycm93e1xyXG4gICAgIHdpZHRoOjIlXHJcbn1cclxuLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuc2VydmljZS1saW5re1xyXG4gICAgIC8vIHdpZHRoOjE1JTtcclxufVxyXG4ucm93LXdpdGhvdXQtZ3V0dGVye1xyXG4gICAgIC0tYnMtZ3V0dGVyLXg6IDAgIWltcG9ydGFudDtcclxuICAgICAtLWJzLWd1dHRlci15OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci10b2dnbGUge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgYm9yZGVyOiAycHggIzc2NzY3NiBvdXRzZXQ7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBwYWRkaW5nOiA5cHggMTBweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuIH1cclxuIC5uYXZiYXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiB9XHJcbiAubmF2YmFyLWJyYW5kIHtcclxuICAgICBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuIH1cclxuIC5iZWxvdy1iYW5uZXJ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgcGFkZGluZzogMSU7XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgIC5kaXNjbGFpbWVyLWJhbm5lcntcclxuICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgICAgICAgbWFyZ2luOjBweCAxJTtcclxuICAgICAgICAgIHBhZGRpbmc6MSU7XHJcbiAgICAgfVxyXG4gICAgIC5kaXNjbGFpbWVyLXBhZ2UtYnJlYWRjcnVtYntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICB9XHJcbiAgICAgLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgfVxyXG4gICAgICAuZGlzY2xhaW1lci1wYWdlLWJyZWFkY3J1bWIgYSB7XHJcbiAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgfVxyXG4gfVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgIC5kaXNjbGFpbWVyLWJhbm5lcntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgfVxyXG4gICAgIC5kaXNjbGFpbWVyLXBhZ2UtYnJlYWRjcnVtYntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICB9XHJcbiAgICAgLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuaG9tZSwgLmRpc2NsYWltZXItcGFnZS1icmVhZGNydW1iIGEuYXJyb3cge1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgfVxyXG4gICAgICAuZGlzY2xhaW1lci1wYWdlLWJyZWFkY3J1bWIgYSB7XHJcbiAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuaG9tZS1pbWd7XHJcbiAgICAgICAgICAgd2lkdGg6MzUlICFpbXBvcnRhbnRcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3ctaW1ne1xyXG4gICAgICAgICAgIHdpZHRoOjIwJSAhaW1wb3J0YW50XHJcbiAgICAgIH1cclxuIH0iXX0= */"] });


/***/ }),

/***/ 88248:
/*!*************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisclaimerModule": () => (/* binding */ DisclaimerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disclaimer-routing.module */ 1672);
/* harmony import */ var _disclaimer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disclaimer.component */ 21646);
/* harmony import */ var _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-inner/header-inner.module */ 54140);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.module */ 26444);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/accordion */ 79854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







class DisclaimerModule {
}
DisclaimerModule.ɵfac = function DisclaimerModule_Factory(t) { return new (t || DisclaimerModule)(); };
DisclaimerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DisclaimerModule });
DisclaimerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_0__.DisclaimerRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DisclaimerModule, { declarations: [_disclaimer_component__WEBPACK_IMPORTED_MODULE_1__.DisclaimerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _disclaimer_routing_module__WEBPACK_IMPORTED_MODULE_0__.DisclaimerRoutingModule,
        _header_inner_header_inner_module__WEBPACK_IMPORTED_MODULE_2__.HeaderInnerModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_6__.AccordionModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_disclaimer_disclaimer_module_ts.js.map