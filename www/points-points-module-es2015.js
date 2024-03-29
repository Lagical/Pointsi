(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["points-points-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/points/points.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/points/points.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"main\"\r\n      text=\"Takaisin\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Historia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let histories of ((user | async)?.history).reverse()\">\r\n    <p class=\"company\">{{histories.comp}}</p>\r\n    <p class=\"text\">Pisteet: {{histories.pts}}</p>\r\n    <span class=\"text\">{{histories.rating}}</span>\r\n    <p class=\"text\">Aika: {{histories.time | date: 'd.M.y HH:mm'}}</p> \r\n    <div class=\"hr\"></div>\r\n  </div>\r\n \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/points/points-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/points/points-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PointsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsPageRoutingModule", function() { return PointsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./points.page */ "./src/app/points/points.page.ts");




const routes = [
    {
        path: '',
        component: _points_page__WEBPACK_IMPORTED_MODULE_3__["PointsPage"]
    }
];
let PointsPageRoutingModule = class PointsPageRoutingModule {
};
PointsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PointsPageRoutingModule);



/***/ }),

/***/ "./src/app/points/points.module.ts":
/*!*****************************************!*\
  !*** ./src/app/points/points.module.ts ***!
  \*****************************************/
/*! exports provided: PointsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsPageModule", function() { return PointsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _points_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./points-routing.module */ "./src/app/points/points-routing.module.ts");
/* harmony import */ var _points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./points.page */ "./src/app/points/points.page.ts");







let PointsPageModule = class PointsPageModule {
};
PointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _points_routing_module__WEBPACK_IMPORTED_MODULE_5__["PointsPageRoutingModule"]
        ],
        declarations: [_points_page__WEBPACK_IMPORTED_MODULE_6__["PointsPage"]]
    })
], PointsPageModule);



/***/ }),

/***/ "./src/app/points/points.page.scss":
/*!*****************************************!*\
  !*** ./src/app/points/points.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  --color: black;\n}\n\nion-toolbar {\n  --background: #80deea;\n}\n\n.hr {\n  border-bottom: 1px solid #ccc;\n  margin: 10px 0;\n  width: 100%;\n}\n\n.company {\n  text-align: center;\n  background-color: #80deea;\n  margin-left: 90px;\n  margin-right: 90px;\n}\n\n.text {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRzL0M6XFxVc2Vyc1xcbWFya3VcXERlc2t0b3BcXGRnXFxJRy9zcmNcXGFwcFxccG9pbnRzXFxwb2ludHMucGFnZS5zY3NzIiwic3JjL2FwcC9wb2ludHMvcG9pbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUM7RUFDRyw2QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOOztBREdFO0VBQ0ksa0JBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BvaW50cy9wb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcclxuICB9XHJcblxyXG4gLmhyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb21wYW55IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBkZWVhO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAudGV4dCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiIsImlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcbn1cblxuLmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbXBhbnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGRlZWE7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDkwcHg7XG59XG5cbi50ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/points/points.page.ts":
/*!***************************************!*\
  !*** ./src/app/points/points.page.ts ***!
  \***************************************/
/*! exports provided: PointsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsPage", function() { return PointsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fb.service */ "./src/app/fb.service.ts");





let PointsPage = class PointsPage {
    constructor(af, menu, db) {
        this.af = af;
        this.menu = menu;
        this.db = db;
        //get data in real time from database to this.user to be displayed on app
        const user = af.doc(`users/${this.db.getUID()}`);
        this.user = user.valueChanges();
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        this.menu.enable(false);
    }
    ngOnInit() {
    }
};
PointsPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"] }
];
PointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-points',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./points.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/points/points.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./points.page.scss */ "./src/app/points/points.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"]])
], PointsPage);



/***/ })

}]);
//# sourceMappingURL=points-points-module-es2015.js.map