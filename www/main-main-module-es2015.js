(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Pointsi</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"credits-background\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Pisteet: {{(user | async)?.credits}}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-label class=\"text1\">Valitse pistemäärä</ion-label>\r\n        <ion-select class=\"use1\" ok-text=\"OK\" cancel-text=\"Peruuta\" [(ngModel)]=\"point\" placeholder=\"\">\r\n          <ion-select-option *ngFor=\"let pts of points\">{{pts}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-label class=\"text2\">Valitse yritys, jossa käytät pisteitä</ion-label>\r\n        <ion-select class=\"use2\" ok-text=\"OK\" cancel-text=\"Peruuta\" [(ngModel)]=\"company\" placeholder=\"\">\r\n          <ion-select-option *ngFor=\"let comp of companies\">{{comp.company_name}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-button shape=\"round\" color=\"button\" (click)=\"ptsConf()\" id=\"useCredits\">\r\n          Käytä pisteitä\r\n        </ion-button>\r\n      </ion-card>\r\n    </div>\r\n    <div>\r\n      <img src=\"../assets/background/logo_12.jpg\"/>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n      <ion-fab-button color=\"light\" routerLink=\"/companies\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    \r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"primary\">\r\n          <ion-button class=\"button-color\" (click)=\"openFirst()\">\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n      \r\n    </ion-footer>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  --color: black;\n}\n\nion-toolbar {\n  --background: #80deea;\n}\n\n.button-color {\n  --color: black;\n}\n\nion-title {\n  color: black;\n}\n\nion-content {\n  --background: white;\n}\n\nion-card-title, ion-card-content {\n  text-align: center;\n}\n\n.credits-background {\n  background: white;\n  border-bottom: 1px solid white;\n  padding: 10px 10px 10px 10px;\n}\n\nion-card {\n  margin: 0px;\n  border-radius: 3px;\n}\n\nion-fab {\n  bottom: 14px;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0px;\n}\n\n.content {\n  height: 50%;\n  width: 100%;\n  background: white;\n  text-align: center;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  padding-left: 10px;\n}\n\n.ion-color-button {\n  --ion-color-base: #424a4b;\n  color: #80deea;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 15px;\n}\n\n.text1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.text2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.use1 {\n  text-align: center;\n  font-weight: bold;\n}\n\n.use2 {\n  text-align: center;\n  font-weight: bold;\n}\n\n#useCredits:hover {\n  cursor: pointer;\n}\n\n@-webkit-keyframes example {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: yellow;\n  }\n}\n\n@keyframes example {\n  from {\n    background-color: red;\n  }\n  to {\n    background-color: yellow;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXG1hcmt1XFxEZXNrdG9wXFxkZ1xcSUcvc3JjXFxhcHBcXG1haW5cXG1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURHRTtFQUNJLGNBQUE7QUNBTjs7QURJRTtFQUNJLFlBQUE7QUNETjs7QURNQztFQUNFLG1CQUFBO0FDSEg7O0FETUU7RUFDSSxrQkFBQTtBQ0hOOztBRE1DO0VBQ0csaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FDSEo7O0FET0U7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNKTjs7QURPQztFQUNJLFlBQUE7QUNKTDs7QURNQztFQUNHLGVBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0ZKOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGSjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURTQTtFQUNJLGVBQUE7QUNOSjs7QURTQTtFQUNJO0lBQU0scUJBQUE7RUNMUjtFRE1FO0lBQUksd0JBQUE7RUNITjtBQUNGOztBREFBO0VBQ0k7SUFBTSxxQkFBQTtFQ0xSO0VETUU7SUFBSSx3QkFBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5idXR0b24tY29sb3Ige1xyXG4gICAgICAtLWNvbG9yOiBibGFjaztcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuIGlvbi1jb250ZW50IHtcclxuICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIFxyXG4gfVxyXG4gIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcclxuICB9XHJcbiAuY3JlZGl0cy1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6ICB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG4gXHJcbiBpb24tZmFiIHtcclxuICAgICBib3R0b206IDE0cHg7XHJcbiB9XHJcbiBpb24tZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gfVxyXG4uY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbn1cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNDI0YTRiO1xyXG4gICAgY29sb3I6IzgwZGVlYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICB9XHJcblxyXG4udGV4dDEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuLnRleHQyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4udXNlMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVzZTIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiN1c2VDcmVkaXRzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBleGFtcGxlIHtcclxuICAgIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XHJcbiAgICB0byB7YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O31cclxuICB9XHJcbi8vIGJhY2tncm91bmQ6ICM1N2RmZWIgdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC90cmlhbmdsZXMucG5nJykwIDAvMTAwJSBhdXRvIG5vLXJlcGVhdDtcclxuXHJcbiIsImlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcbn1cblxuLmJ1dHRvbi1jb2xvciB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcmVkaXRzLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmlvbi1mYWIge1xuICBib3R0b206IDE0cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmlvbi1jb2xvci1idXR0b24ge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjNDI0YTRiO1xuICBjb2xvcjogIzgwZGVlYTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLnRleHQxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2UyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3VzZUNyZWRpdHM6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb.service */ "./src/app/fb.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let MainPage = class MainPage {
    constructor(routerOutlet, af, alertService, menu, db) {
        this.routerOutlet = routerOutlet;
        this.af = af;
        this.alertService = alertService;
        this.menu = menu;
        this.db = db;
        this.points = [];
        this.point = 20;
        this.company = "";
        //get data in real time from database to this.user to be displayed on app
        const user = af.doc(`users/${this.db.getUID()}`);
        this.user = user.valueChanges();
    }
    ngOnInit() {
        //get user from database (this will be called a lot to get up to date data after changes to points are made)
        this.db.getUser().subscribe(data => {
            this.userd = data;
        });
        //get companies from database
        this.db.getCompanies().subscribe(data => {
            this.companies = data;
        });
        for (let i = 20; i <= 100; i += 5) {
            this.points.push(i);
        }
    }
    ionViewWillEnter() {
        this.routerOutlet.swipeGesture = false;
        this.db.getUser().subscribe(data => {
            this.userd = data;
        });
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        this.menu.enable(false);
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    //method for removing points from user
    ptsConf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.db.getUser().subscribe(data => {
                this.userd = data;
            });
            /*checks if user has enough points to spend and if company is selected
             if not displays correct error message if*/
            if (this.userd.credits < this.point) {
                this.alertService.alerts("Virhe", "Ei tarpeeksi pisteitä", ["Ok"]);
            }
            else if (this.company === "") {
                this.alertService.alerts("Virhe", "Valitse yritys", ["Ok"]);
            }
            else {
                this.alertService.alerts("Hyväksy ostos", "Oletko varma?", [{
                        text: 'En, peruuta',
                        role: 'cancel',
                    }, {
                        text: 'Kyllä, hyväksyn',
                        /*if user accepts, the selected amount of points is reduced
                        from the user and the transaction is logged to history*/
                        handler: () => {
                            const credits = this.userd.credits - this.point;
                            this.af.doc(`users/${this.db.getUID()}`).update({
                                credits
                            });
                            this.db.getUser().subscribe(data => {
                                this.userd = data;
                            });
                            const pts = "-" + this.point;
                            const comp = this.company;
                            const time = new Date().toISOString();
                            this.af.doc(`users/${this.db.getUID()}`).update({
                                history: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion({
                                    comp,
                                    pts,
                                    time
                                })
                            });
                        }
                    }]);
            }
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _fb_service__WEBPACK_IMPORTED_MODULE_3__["FbService"] }
];
MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _fb_service__WEBPACK_IMPORTED_MODULE_3__["FbService"]])
], MainPage);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map