(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"\r\n      text=\"Takaisin\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<p class=\"pointsi\">POINTSI</p>\r\n  <ion-card id=\"kortti\">\r\n    <ion-card-title>REKISTERÖIDY</ion-card-title>\r\n    <ion-item>\r\n      <ion-label position=\"floating\"><ion-icon name=\"person-outline\"></ion-icon>Käyttäjänimi</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"username\" onkeypress=\"if(event.charCode === 32)return false\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> <ion-icon name=\"lock-closed-outline\"></ion-icon>Salasana</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"password\" onkeypress=\"if(event.charCode === 32)return false\"></ion-input>\r\n    </ion-item>\r\n    <ion-item >\r\n      <ion-label position=\"floating\"><ion-icon name=\"lock-closed-outline\"></ion-icon>Varmista salasana</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"cpassword\" onkeypress=\"if(event.charCode === 32)return false\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-row id=\"tos\">\r\n      <ion-checkbox color=\"secondary\" [(ngModel)]=\"checkedbtn\"></ion-checkbox>\r\n      <ion-label id=\"tosText\">Hyväksyn <a routerLink=\"/tos\">käyttöehdot ja tietosuojaselosteen</a></ion-label>\r\n    </ion-row>\r\n      \r\n    \r\n\r\n    <ion-button [disabled]=\"!checkedbtn\" color=\"button\" expand=\"block\" shape=\"round\" id=\"register\" (click)=\"register()\">Luo käyttäjä</ion-button>\r\n\r\n</ion-card>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-back-button {\n  --color: black;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\nion-item {\n  --border-color: #80deea;\n}\n\nion-card-title {\n  color: #80deea;\n  font-family: \"Arial\";\n  text-align: center;\n  padding-top: 10px;\n}\n\n.pointsi {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.ion-color-button {\n  --ion-color-base: #424a4b;\n  color: #80deea;\n}\n\nion-content {\n  --background: #fff url('pallot1.png') no-repeat center center / cover;\n}\n\n#kortti {\n  padding: 10px;\n}\n\n#register {\n  margin-top: 10px;\n}\n\n#tos {\n  margin: 20px;\n}\n\n#tosText {\n  margin-left: 5px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxtYXJrdVxcRGVza3RvcFxcZGdcXElHL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0UsdUJBQUE7QUNERjs7QURJQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURLRTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNGTjs7QURNRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRFFFO0VBQ0UscUVBQUE7QUNMSjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW17IFxyXG4gIC0tYm9yZGVyLWNvbG9yOiAjODBkZWVhOyBcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICM4MGRlZWE7XHJcbiAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4gIC5wb2ludHNpIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuaW9uLWNvbG9yLWJ1dHRvbiB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjNDI0YTRiO1xyXG4gICAgY29sb3I6IzgwZGVlYTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICBpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uL2Fzc2V0cy9wYWxsb3QxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuXHJcbiNrb3J0dGkge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4jcmVnaXN0ZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuI3RvcyB7XHJcbiAgbWFyZ2luOjIwcHg7XHJcbn1cclxuI3Rvc1RleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuICIsImlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICM4MGRlZWE7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM4MGRlZWE7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wb2ludHNpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmlvbi1jb2xvci1idXR0b24ge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjNDI0YTRiO1xuICBjb2xvcjogIzgwZGVlYTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL3BhbGxvdDEucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbiNrb3J0dGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jcmVnaXN0ZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdG9zIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4jdG9zVGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _fb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fb.service */ "./src/app/fb.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let RegisterPage = class RegisterPage {
    constructor(afAuth, alertService, db, router, menu) {
        this.afAuth = afAuth;
        this.alertService = alertService;
        this.db = db;
        this.router = router;
        this.menu = menu;
        this.username = "";
        this.password = "";
        this.cpassword = "";
        this.credits = 0;
    }
    ionViewWillEnter() {
        this.menu.enable(false);
    }
    ionViewDidLeave() {
        this.menu.enable(false);
    }
    ngOnInit() {
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { username, password, cpassword, credits } = this;
            //if password and password confirmation do not match displays error alert
            if (password != cpassword) {
                this.alertService.alerts("Virhe rekisteröitymisessä", "Salasanat eivät täsmää", ["Yritä uudelleen"]);
                return;
            }
            try {
                //tries to store user to database and create authentication
                const result = yield this.afAuth.auth.createUserWithEmailAndPassword(username + '@email.com', password);
                this.db.storeUser(result, username, credits);
                this.db.setUser({
                    username,
                    credits,
                    uid: result.user.uid
                });
                //if registration in successful navigate to main page and display welcome message.
                this.alertService.toasts("Rekisteröityminen onnistui. Tervetuloa " + this.username + "!", 4000, "middle");
                this.router.navigate(['/main']);
            }
            catch (err) {
                //if errors occurs displays correct error messages
                if (err.code === "auth/invalid-email") {
                    this.alertService.alerts("Virhe rekisteröitymisessä", "Käyttäjänimi puuttuu, anna käyttäjänimi", ["Ok"]);
                }
                if (err.code === "auth/weak-password") {
                    this.alertService.alerts("Virhe rekisteröitymisessä", "Salasanan tulee olla vähintään 6 merkkiä pitkä, anna pidempi salasana", ["Ok"]);
                }
                if (err.code === "auth/email-already-in-use") {
                    this.alertService.alerts("Virhe rekisteröitymisessä", "Käyttäjänimi on jo käytössä, anna eri käyttäjänimi", ["Ok"]);
                }
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map