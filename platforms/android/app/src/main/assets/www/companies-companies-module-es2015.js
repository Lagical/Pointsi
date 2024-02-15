(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"main\"\r\n      text=\"Takaisin\">\r\n      </ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title>Valitse yritys</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar placeholder=\"Etsi yritys\" type=\"text\" (ionInput)=\"listCompanies($event)\"></ion-searchbar>\r\n  <ion-list>\r\n      <ion-card *ngFor=\"let amnt of companies\">\r\n        <ion-card-content class=\"card\">\r\n          {{amnt.company_name}}\r\n          <br>\r\n          {{amnt.median}}\r\n          <ion-icon name=\"star\"></ion-icon>\r\n          <ion-button class=\"painike\" expand=\"full\" color=\"white\" slot=\"end\" (click)=\"select(amnt)\" routerLink=\"/home\">Valitse</ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/companies/companies-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/companies/companies-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CompaniesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageRoutingModule", function() { return CompaniesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companies.page */ "./src/app/companies/companies.page.ts");




const routes = [
    {
        path: '',
        component: _companies_page__WEBPACK_IMPORTED_MODULE_3__["CompaniesPage"]
    }
];
let CompaniesPageRoutingModule = class CompaniesPageRoutingModule {
};
CompaniesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompaniesPageRoutingModule);



/***/ }),

/***/ "./src/app/companies/companies.module.ts":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.module.ts ***!
  \***********************************************/
/*! exports provided: CompaniesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function() { return CompaniesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/companies/companies-routing.module.ts");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies.page */ "./src/app/companies/companies.page.ts");







let CompaniesPageModule = class CompaniesPageModule {
};
CompaniesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompaniesPageRoutingModule"]
        ],
        declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_6__["CompaniesPage"]]
    })
], CompaniesPageModule);



/***/ }),

/***/ "./src/app/companies/companies.page.scss":
/*!***********************************************!*\
  !*** ./src/app/companies/companies.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #80deea;\n}\n\nion-back-button {\n  --color: black;\n}\n\n.painike {\n  padding-top: 20px;\n  color: #80deea;\n}\n\n.card {\n  text-align: center;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFuaWVzL0M6XFxVc2Vyc1xcbWFya3VcXERlc2t0b3BcXGRnXFxJRy9zcmNcXGFwcFxcY29tcGFuaWVzXFxjb21wYW5pZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wYW5pZXMvY29tcGFuaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUU7RUFDSSxjQUFBO0FDQ047O0FERUU7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURFRTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbmllcy9jb21wYW5pZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MGRlZWE7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAtLWNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5wYWluaWtlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjODBkZWVhO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzgwZGVlYTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbi5wYWluaWtlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGNvbG9yOiAjODBkZWVhO1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/companies/companies.page.ts":
/*!*********************************************!*\
  !*** ./src/app/companies/companies.page.ts ***!
  \*********************************************/
/*! exports provided: CompaniesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPage", function() { return CompaniesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb.service */ "./src/app/fb.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let CompaniesPage = class CompaniesPage {
    constructor(db, menu) {
        this.db = db;
        this.menu = menu;
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        this.menu.enable(true);
    }
    ngOnInit() {
        //get companies from database
        this.db.getCompanies().subscribe(data => {
            this.companies = data;
            this.companyList = data;
        });
    }
    initCompanies() {
        this.companies = this.companyList;
    }
    /*method to search company by typing letters,
    all the companies will with matching letters will be displayed others hidden */
    listCompanies(event) {
        this.initCompanies();
        const search = event.srcElement.value;
        if (!search) {
            return;
        }
        this.companies = this.companies.filter(current => {
            if (current.company_name && search) {
                if (current.company_name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    }
    /*method used to pass selected company to different pages using selectCompany
    method on fb service */
    select(amnt) {
        this.company = amnt.company_name;
        this.selected = amnt;
        this.db.selectCompany(this.selected);
    }
};
CompaniesPage.ctorParameters = () => [
    { type: _fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
CompaniesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companies/companies.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.page.scss */ "./src/app/companies/companies.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], CompaniesPage);



/***/ })

}]);
//# sourceMappingURL=companies-companies-module-es2015.js.map