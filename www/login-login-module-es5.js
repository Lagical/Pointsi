(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n  <p class=\"pointsi\">POINTSI</p>\r\n  <ion-card>\r\n    <ion-card-title>KIRJAUDU</ion-card-title>\r\n    <ion-item>\r\n      <ion-label position=\"floating\"><ion-icon name=\"person-outline\"></ion-icon>Käyttäjänimi</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"username\" onkeypress=\"if(event.charCode === 32)return false\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\"><ion-icon name=\"lock-closed-outline\"></ion-icon>Salasana</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"password\" onkeypress=\"if(event.charCode === 32)return false\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    \r\n    <ion-button color=\"button\" expand=\"block\" shape=\"round\" (click)=\"login()\">Kirjaudu</ion-button>\r\n    <br>\r\n    <span>Etkö omista käyttäjää?&nbsp;<a routerLink=\"/register\">Rekisteröidy tästä</a></span>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    const routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];
    let LoginPageRoutingModule = class LoginPageRoutingModule {};
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    let LoginPageModule = class LoginPageModule {};
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-back-button {\n  --color: black;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\nion-item {\n  --border-color: #80deea;\n}\n\nion-card-title {\n  color: #80deea;\n  font-family: \"Arial\";\n  text-align: center;\n  padding-top: 10px;\n}\n\n.ion-color-button {\n  --ion-color-base: #424a4b;\n  color: #80deea;\n}\n\n.pointsi {\n  text-align: center;\n  padding-top: 50px;\n}\n\nion-content {\n  --background: #fff url('pallot1.png') no-repeat center center / cover;\n}\n\nion-toolbar {\n  --background: #80deea;\n}\n\nion-card {\n  padding: 10px;\n}\n\n.button {\n  margin: 15px;\n}\n\nspan {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.button2 {\n  font-weight: bold;\n}\n\na {\n  color: #80deea;\n}\n\n.bottomText {\n  margin-top: 14em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxtYXJrdVxcRGVza3RvcFxcZGdcXElHL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQVUsdUJBQUE7QUNFVjs7QURDQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREVBO0VBQ0kscUVBQUE7QUNDSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW17IC0tYm9yZGVyLWNvbG9yOiAjODBkZWVhOyBcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICM4MGRlZWE7XHJcbiAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItYnV0dG9uIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM0MjRhNGI7XHJcbiAgICBjb2xvcjojODBkZWVhO1xyXG4gIH1cclxuXHJcbiAgLnBvaW50c2kge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi9hc3NldHMvcGFsbG90MS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4MGRlZWE7XHJcbiAgfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5zcGFue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b24yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IzgwZGVlYTtcclxufVxyXG4uYm90dG9tVGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNGVtO1xyXG59XHJcblxyXG5cclxuXHJcbiAgIiwiaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogIzgwZGVlYTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogIzgwZGVlYTtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmlvbi1jb2xvci1idXR0b24ge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjNDI0YTRiO1xuICBjb2xvcjogIzgwZGVlYTtcbn1cblxuLnBvaW50c2kge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi9hc3NldHMvcGFsbG90MS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM4MGRlZWE7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5hIHtcbiAgY29sb3I6ICM4MGRlZWE7XG59XG5cbi5ib3R0b21UZXh0IHtcbiAgbWFyZ2luLXRvcDogMTRlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var _fb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../fb.service */
    "./src/app/fb.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let LoginPage = class LoginPage {
      constructor(afAuth, alertService, db, router, menu) {
        this.afAuth = afAuth;
        this.alertService = alertService;
        this.db = db;
        this.router = router;
        this.menu = menu;
        this.username = "";
        this.password = "";
        this.credits = 0;
      }

      ionViewWillEnter() {
        this.menu.enable(false);
      }

      ionViewDidLeave() {
        this.menu.enable(false);
      }

      ngOnInit() {}

      login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const {
            username,
            password,
            credits
          } = this; //tries to log in by using the information user gave, if successful set user and navigate to main

          try {
            const result = yield this.afAuth.auth.signInWithEmailAndPassword(username + '@email.com', password);

            if (result.user) {
              this.db.setUser({
                username,
                credits,
                uid: result.user.uid
              });
              this.router.navigate(['/main']);
            }
          } catch (err) {
            //if the information does not match or is invalid error message is displayed
            if (err.code === "auth/user-not-found") {
              this.alertService.alerts("Virhe kirjautumisessa", "Käyttäjänimi tai salasana on virheellinen", ["Yritä uudelleen"]);
            }

            if (err.code === "auth/invalid-email") {
              this.alertService.alerts("Virhe kirjautumisessa", "Käyttäjänimi puuttuu, anna käyttäjänimi", ["Ok"]);
            }

            if (err.code === "auth/wrong-password") {
              this.alertService.alerts("Virhe kirjautumisessa", "Salasana puuttuu, lisää salasana", ["Ok"]);
            }
          }
        });
      }

    };

    LoginPage.ctorParameters = () => [{
      type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
    }, {
      type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
    }, {
      type: _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
    }];

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _fb_service__WEBPACK_IMPORTED_MODULE_4__["FbService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map