(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"main\"\r\n      text=\"Takaisin\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Info</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"kortti\">\r\n  <p>\r\n    Pointsin ideana on tarjota käyttäjälleen alennusta Pointsin tarjoamista palveluista. Jakamalla Instagramin tarinaasi kuvan tuotteesta tai palvelusta, jonka olet ostanut, saat siitä palkkioksi pisteitä. \r\n  </p>\r\n \r\n  <p class=\"p\">Näitä pisteitä voit käyttää kaikissa paikoissa, jotka käyttävät Pointin palvelua. Sinulla täytyy olla vähintään 50 pistettä.</p>\r\n  <br>\r\n  <p class=\"hed\">\r\n    Kuinka kerään pisteitä?\r\n  </p>\r\n  <p class=\"p\">\r\n    1.\tPaina kamerapainikkeesta <br>\r\n    2.\tOta kuva tuotteesta tai palvelusta, jonka olet ostanut <br>\r\n    3.\tArvostele saamasi palvelu <br>\r\n    4.\tLisää kuva Instagramisi tarinaan\r\n  </p>\r\n<br>\r\n  <p class=\"hed\">\r\n    Kuinka käytän pisteitä? <br>\r\n  </p>\r\n  <p class=\"p\">\r\n    1.\tMene etusivulle ja valitse kohde missä olet<br>\r\n    2.\tMene kassalle ja anna kassahenkilökunnan valita vähennettävä pistemäärä ja painaa ”käytä pisteitä”- näppäintä\r\n  </p>\r\n  <br>\r\n  <p class=\"p\"> Antoisia elämyshetkiä Pointsin parissa.</p>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/info/info-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/info/info-routing.module.ts ***!
  \*********************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/info/info-routing.module.ts");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/info/info.page.ts");







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/info/info.page.scss":
/*!*************************************!*\
  !*** ./src/app/info/info.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  --color: black;\n}\n\nion-toolbar {\n  --background: #80deea;\n}\n\n.hed {\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.p {\n  padding-left: 10px;\n}\n\n.kortti {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9DOlxcVXNlcnNcXG1hcmt1XFxEZXNrdG9wXFxkZ1xcSUcvc3JjXFxhcHBcXGluZm9cXGluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbmZvL2luZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFRTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDTjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDSSxhQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9pbmZvL2luZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcclxuICB9XHJcblxyXG4gIC5oZWQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAua29ydHRpIHtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gIH0iLCJpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM4MGRlZWE7XG59XG5cbi5oZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmtvcnR0aSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/info/info.page.ts":
/*!***********************************!*\
  !*** ./src/app/info/info.page.ts ***!
  \***********************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.page.scss */ "./src/app/info/info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=info-info-module-es2015.js.map