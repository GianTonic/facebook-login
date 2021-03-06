(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login/login.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login/login.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Facebook login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-grid>\n\t<ion-row justify-content-center>\n\t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t<div text-center>\n\t\t\t\t<h4>Login Form</h4>\n\t\t\t</div>\n\t\t\t<div padding>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Username\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</div>\n\n\t\t\t<div padding>\n        <ion-button size=\"large\" href=\"/touchid\" expand=\"block\">Login</ion-button>\n        <ion-button size=\"large\" full (click)=\"loginWithFB()\" expand=\"block\">Login with Facebook</ion-button>\n      </div>\n     \n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>\n\n<ion-content padding>\n  <ion-card *ngIf=\"userData\">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]=\"userData.picture\" />\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>\n \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login/login-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/login/login/login-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/login/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login/login.page.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        providers: [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__["Facebook"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login/login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/login/login/login.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  width: 100%;\n  height: height100;\n  background: #dfdfdf;\n}\n\nion-row {\n  height: height100;\n}\n\nion-col {\n  border: 1px solid #000000;\n  background: white-color;\n}\n\nion-button {\n  font-weight: 300;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: white-color;\n  }\n\n  ion-col {\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dpb3Zhbm5pL0RvY3VtZW50aS9zb2NpYWxkaXNjby9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0k7SUFDSSx1QkFBQTtFQ0pOOztFRE1FO0lBQ0ksWUFBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGhlaWdodDEwMDogMTAwJTtcbn1cblxuaW9uLWdyaWQge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiBoZWlnaHQxMDA7XG4gICAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiBoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGUtY29sb3I7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZS1jb2xvcjtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59IiwiaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBoZWlnaHQxMDA7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IGhlaWdodDEwMDtcbn1cblxuaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlLWNvbG9yO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWdyaWQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlLWNvbG9yO1xuICB9XG5cbiAgaW9uLWNvbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login/login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login/login.page.ts ***!
  \*************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let LoginPage = class LoginPage {
    constructor(facebook) {
        this.facebook = facebook;
    }
    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile.email, first_name: profile.first_name,
                    picture: profile.picture_large.data.url, username: profile.name };
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_1__["Facebook"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_1__["Facebook"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-login-module-es2015.js.map