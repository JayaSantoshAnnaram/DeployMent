(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/alert.component.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alert.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Error Occured</h1>\r\n<mat-dialog-content>{{data.data|json}}</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>Ok</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n    <router-outlet></router-outlet>\n</main>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span><a routerLink=\"/\">My Messages</a></span>\n    <span>      &nbsp;&nbsp;&nbsp;</span>\n    <span><a mat-button routerLink=\"/create\" routerLinkActive=\"mat-danger\"  >Create Post</a></span>\n    <a mat-button routerLink=\"/sign-in\" routerLinkActive=\"mat-danger\" *ngIf=\"!isUserAutenticated\" >Sign In</a>\n    <a mat-button routerLink=\"/sign-up\" routerLinkActive=\"mat-danger\" *ngIf=\"!isUserAutenticated\" >Sign Up</a>\n    <span><button mat-button (click)=\"signOut()\" *ngIf=\"isUserAutenticated\"  >Log Out</button></span>\n    \n    \n</mat-toolbar>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/auth/sign-in/sign-in.template.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/auth/sign-in/sign-in.template.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n<form (submit)=\"login(formReference)\"  #formReference=ngForm >\r\n       \r\n                <mat-form-field>\r\n                    <input type=\"email\"\r\n                    matInput\r\n                    email\r\n                     required\r\n                     name=\"email\"\r\n                     ngModel\r\n                     #emailReference=\"ngModel\"\r\n                     placeholder=\"Enter Email Id\"/>\r\n                    <mat-error *ngIf=\"emailReference.invalid\" >Please Enter Email Id</mat-error>\r\n                </mat-form-field>\r\n                <div></div>\r\n                <mat-form-field>\r\n                    <input type=\"password\" \r\n                    matInput\r\n                     required\r\n                     name=\"password\"\r\n                     ngModel\r\n                     #passwordReference=\"ngModel\"   \r\n                      placeholder=\"Enter valid Password\"/>\r\n                    <mat-error *ngIf=\"passwordReference.invalid\">Please Enter a Valid password</mat-error>\r\n                </mat-form-field>\r\n                <div></div>\r\n                <button type=\"submit\" mat-raised-button color=\"accent\" >Login In</button>\r\n            \r\n </form>   \r\n</mat-card>\r\n<mat-spinner *ngIf=\"spinner\" [color]=\"'warn'\"></mat-spinner>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/auth/sign-up/sign-up.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/auth/sign-up/sign-up.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form (submit)=\"login(formReference)\"  #formReference=ngForm >\n           \n                    <mat-form-field>\n                        <input type=\"email\"\n                        matInput\n                        email\n                         required\n                         name=\"email\"\n                         ngModel\n                         #emailReference=\"ngModel\"\n                         placeholder=\"Enter Email Id\"/>\n                        <mat-error *ngIf=\"emailReference.invalid\" >Please Enter Email Id</mat-error>\n                    </mat-form-field>\n                    <div></div>\n                    <mat-form-field>\n                        <input type=\"password\" \n                        matInput\n                         required\n                         name=\"password\"\n                         ngModel\n                         #passwordReference=\"ngModel\"   \n                          placeholder=\"Enter valid Password\"/>\n                        <mat-error *ngIf=\"passwordReference.invalid\">Please Enter a Valid password</mat-error>\n                    </mat-form-field>\n                    <div></div>\n                    <button type=\"submit\" mat-raised-button color=\"accent\" >Sign Up for Freeee</button>\n                \n     </form>   \n    </mat-card>\n    \n    \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/create-posts/posts-create.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/create-posts/posts-create.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner [color]=\"'warn'\" *ngIf=\"spinner\"></mat-spinner>\n<form (submit)=\"onSavePosts(formReference)\" #formReference=ngForm *ngIf=\"!spinner\">\n        <mat-card>\n                <mat-form-field>\n                    <input matInput\n                     required\n                     [ngModel]=\"post?.title\"\n                     name=\"title\" \n                     #titleReference=\"ngModel\" \n                     placeholder=\"Enter Title of Post\"/>\n                    <mat-error *ngIf=\"titleReference.invalid\">Please Enter Title of Post</mat-error>\n                </mat-form-field>\n                <!-- <div>\n                    <button type=\"button\" mat-stroked-button (click)=fileReference.click()>Pick Image</button>\n                    <input type=\"file\" id=\"imageUpload\" #fileReference/>\n                </div> -->\n                <mat-form-field>\n                    <textarea \n                     required \n                     [ngModel]=\"post?.content\"\n                     name=\"content\" \n                     #contentReference=\"ngModel\"\n                      matInput rows=\"6\"  \n                      placeholder=\"Enter Content of Post\"></textarea>\n                    <mat-error *ngIf=\"contentReference.invalid\">Please Enter Content of Post</mat-error>\n                </mat-form-field>\n                <button type=\"submit\" mat-raised-button color=\"accent\" >Save Post</button>\n            </mat-card>\n </form>   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/list-posts/post-list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/list-posts/post-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-accordion multi=true *ngIf=\"postsReceived.length!=0; else block\">\n    <mat-expansion-panel *ngFor=\"let post of postsReceived\">\n        <mat-expansion-panel-header>\n            {{post.title}}\n        </mat-expansion-panel-header>\n            {{post.content}}\n            <mat-action-row *ngIf=\"userAuth && post.creator==authorisedUser\">\n                <a mat-button color=\"primary\"  [routerLink]=\"['/edit',post.id]\" >EDIT</a>\n                <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\" >DELETE</button>\n            </mat-action-row>\n    </mat-expansion-panel>\n</mat-accordion>\n<mat-spinner *ngIf=\"!postsReceived\" [color]=\"'warn'\"></mat-spinner>\n<ng-template #block ><p class=\"mat-display-2 elseBock\">No Posts are Present</p></ng-template>\n\n"

/***/ }),

/***/ "./src/app/alert.component.ts":
/*!************************************!*\
  !*** ./src/app/alert.component.ts ***!
  \************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(data) {
        this.data = data;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.ngOnDestroy = function () {
    };
    AlertComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert-selector',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\n    margin: auto;\n    width: 80%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/auth/auth.service */ "./src/app/posts/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _posts_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_create_posts_posts_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/create-posts/posts-create.component */ "./src/app/posts/create-posts/posts-create.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_list_posts_post_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/list-posts/post-list.component */ "./src/app/posts/list-posts/post-list.component.ts");
/* harmony import */ var _posts_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/post-service */ "./src/app/posts/post-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing-module */ "./src/app/app.routing-module.ts");
/* harmony import */ var _posts_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/auth/sign-in/sign-in-component */ "./src/app/posts/auth/sign-in/sign-in-component.ts");
/* harmony import */ var _posts_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/auth/sign-up/sign-up.component */ "./src/app/posts/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _posts_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts/auth/auth-interceptor.service */ "./src/app/posts/auth/auth-interceptor.service.ts");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert.component */ "./src/app/alert.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _posts_create_posts_posts_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _posts_list_posts_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"],
                _posts_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                _posts_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
                _alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
            ],
            providers: [_posts_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _posts_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_list_posts_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/list-posts/post-list.component */ "./src/app/posts/list-posts/post-list.component.ts");
/* harmony import */ var _posts_create_posts_posts_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/create-posts/posts-create.component */ "./src/app/posts/create-posts/posts-create.component.ts");
/* harmony import */ var _posts_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/auth/sign-in/sign-in-component */ "./src/app/posts/auth/sign-in/sign-in-component.ts");
/* harmony import */ var _posts_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/auth/sign-up/sign-up.component */ "./src/app/posts/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _posts_auth_auth_routing_gaurd_servive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/auth/auth-routing-gaurd-servive */ "./src/app/posts/auth/auth-routing-gaurd-servive.ts");








var routes = [
    { path: '', component: _posts_list_posts_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"] },
    { path: 'create', canActivate: [_posts_auth_auth_routing_gaurd_servive__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingGuardService"]], component: _posts_create_posts_posts_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"] },
    { path: 'edit/:id', canActivate: [_posts_auth_auth_routing_gaurd_servive__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingGuardService"]], component: _posts_create_posts_posts_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"] },
    { path: 'sign-in', component: _posts_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"] },
    { path: 'sign-up', component: _posts_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_posts_auth_auth_routing_gaurd_servive__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingGuardService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/auth/auth.service */ "./src/app/posts/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.isUserAutenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserAutenticated = this.authService.getUserStatus();
        this.subscription = this.authService.getTokenStatus().subscribe(function (data) {
            _this.isUserAutenticated = data;
        });
    };
    // Implementing SignOut Functionality
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _posts_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/auth/auth-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/auth/auth-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function() { return AuthenticationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/posts/auth/auth.service.ts");



var AuthenticationInterceptor = /** @class */ (function () {
    function AuthenticationInterceptor(authSerive) {
        this.authSerive = authSerive;
    }
    AuthenticationInterceptor.prototype.intercept = function (req, next) {
        var token = this.authSerive.getToken();
        var newRequest = req.clone({ setHeaders: { 'authorization': 'jalasa ' + token } });
        return next.handle(newRequest);
    };
    AuthenticationInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthenticationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthenticationInterceptor);
    return AuthenticationInterceptor;
}());



/***/ }),

/***/ "./src/app/posts/auth/auth-routing-gaurd-servive.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/auth/auth-routing-gaurd-servive.ts ***!
  \**********************************************************/
/*! exports provided: AuthRoutingGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingGuardService", function() { return AuthRoutingGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/posts/auth/auth.service.ts");




var AuthRoutingGuardService = /** @class */ (function () {
    function AuthRoutingGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    //Can Active method
    AuthRoutingGuardService.prototype.canActivate = function (route, state) {
        var userStatus = this.authService.getUserStatus();
        if (!userStatus) {
            this.router.navigate(['/sign-in']);
        }
        return true;
    };
    AuthRoutingGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthRoutingGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthRoutingGuardService);
    return AuthRoutingGuardService;
}());



/***/ }),

/***/ "./src/app/posts/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/posts/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/alert.component */ "./src/app/alert.component.ts");








var AuthService = /** @class */ (function () {
    function AuthService(_http, dialog, router) {
        this._http = _http;
        this.dialog = dialog;
        this.router = router;
        // Tokent status
        this.tokentStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isUserAunticated = false;
    }
    AuthService.prototype.createUser = function (email, password) {
        var _this = this;
        this._http.post("http://localhost:3000/api/user/sign-up", {
            'email': email,
            'password': password
        })
            .subscribe(function () {
            alert('Account Created Successfully please Sigin into the portal for further Creating the Posts');
            _this.router.navigate(['/sign-in']);
        }, function (err) { return _this.handleError(err); });
    };
    AuthService.prototype.handleError = function (err) {
        // console.log(err);
        this.dialog.open(src_app_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], { data: { data: err.error.Message } });
    };
    // Login User 
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this._http.post("http://localhost:3000/api/user/sign-in", {
            'email': email,
            'password': password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_this.handleError(err));
        })).subscribe(function (data) {
            // Storing Authorised user ID
            _this.AuthoriseduserId = data.userId;
            var tokenRecived = data.token;
            _this.token = tokenRecived;
            // Checking whether token is present or not for verifying user authentication
            if (_this.token) {
                // Function of Auto locked outfunctionality
                var timer = data.timer;
                _this.timer(timer);
                _this.isUserAunticated = true;
                _this.tokentStatus.next(true);
                // Code for storing autheication data to local storage
                var dateNow = new Date();
                var expirationDate = new Date(dateNow.getTime() + data.timer * 1000);
                _this.saveAuthData(_this.token, expirationDate, _this.AuthoriseduserId);
                _this.router.navigate(['/']);
            }
        }, function (err) {
            //  alert(err.error.message);
            _this.tokentStatus.next(false);
            console.log(err);
        });
    };
    // Code refracted for timing 
    AuthService.prototype.timer = function (timer) {
        var _this = this;
        this.Autotimer = setTimeout(function () {
            _this.signOut();
        }, timer * 1000);
    };
    //Get Token Method
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getTokenStatus = function () {
        return this.tokentStatus.asObservable();
    };
    // user Authentication Status
    AuthService.prototype.getUserStatus = function () {
        return this.isUserAunticated;
    };
    //SignOut Functionality which will set token to null and set user authenticted properties to false
    AuthService.prototype.signOut = function () {
        this.token = null;
        this.isUserAunticated = false;
        this.tokentStatus.next(false);
        clearTimeout(this.Autotimer);
        this.clearAuthData();
        this.AuthoriseduserId = null;
        this.router.navigate(['/']);
    };
    // Saving authentication data
    AuthService.prototype.saveAuthData = function (token, expirationDate, AuthoriseduserId) {
        localStorage.setItem('token', token);
        localStorage.setItem('AuthoriseduserId', AuthoriseduserId);
        localStorage.setItem('expirationDate', expirationDate.toISOString());
    };
    //Removing hte Authetication Data
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('AuthoriseduserId');
        localStorage.removeItem('expirationDate');
    };
    // Code for Autostart of app i.e refereshing the web application doesn't start the app
    AuthService.prototype.autoAuthUser = function () {
        var localStorageData = this.getLocalAuthData();
        if (!localStorageData) {
            return;
        }
        var currentDae = new Date();
        var futureDate = localStorageData.expirationDate;
        var expirationDate = futureDate.getTime() - currentDae.getTime();
        if (expirationDate > 0) {
            this.token = localStorageData.token;
            this.AuthoriseduserId = localStorageData.AuthoriseduserId;
            this.tokentStatus.next(true);
            this.isUserAunticated = true;
            this.timer(expirationDate / 1000);
        }
    };
    // Getting local storage auth data
    AuthService.prototype.getLocalAuthData = function () {
        var token = localStorage.getItem('token');
        var expirationDate = localStorage.getItem('expirationDate');
        var AuthoriseduserId = localStorage.getItem('AuthoriseduserId');
        if (!token || !expirationDate) {
            return;
        }
        return {
            'token': token,
            'expirationDate': new Date(expirationDate),
            'AuthoriseduserId': AuthoriseduserId
        };
    };
    // Getting Auhtorised Used ID
    AuthService.prototype.getAuthorisesUserId = function () {
        return this.AuthoriseduserId;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/posts/auth/sign-in/sign-in-component.ts":
/*!*********************************************************!*\
  !*** ./src/app/posts/auth/sign-in/sign-in-component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/posts/auth/auth.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService) {
        this.userService = userService;
        // Property for spinning
        this.spinner = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnersubscription = this.userService.getTokenStatus().subscribe(function (data) { return _this.spinner = data; });
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        this.spinnersubscription.unsubscribe();
    };
    SignInComponent.prototype.login = function (form) {
        if (form.invalid) {
            return;
        }
        this.userService.login(form.value.email, form.value.password);
        form.resetForm();
    };
    SignInComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./sign-in.template.html */ "./node_modules/raw-loader/index.js!./src/app/posts/auth/sign-in/sign-in.template.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/posts/auth/sign-in/sign-in.component.css")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/posts/auth/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/posts/auth/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,input{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/posts/auth/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/posts/auth/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,input{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2F1dGgvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/posts/auth/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/posts/auth/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/posts/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_authservice, router) {
        this._authservice = _authservice;
        this.router = router;
        this.userStatus = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._authservice.getTokenStatus().subscribe(function (data) { return _this.userStatus = data; });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SignUpComponent.prototype.login = function (form) {
        if (form.invalid) {
            return;
        }
        this._authservice.createUser(form.value.email, form.value.password);
        form.resetForm();
    };
    SignUpComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/posts/auth/sign-up/sign-up.component.css")]
        })
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/posts/create-posts/post-create.component.css":
/*!**************************************************************!*\
  !*** ./src/app/posts/create-posts/post-create.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-card{\n    width:80%;\n    margin:auto\n} */\nmat-form-field,textarea{\n    width: 100%;\n}\nmat-spinner{\n    margin: auto;\n}\n#imageUpload{\n    visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvY3JlYXRlLXBvc3RzL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0g7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2NyZWF0ZS1wb3N0cy9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbWF0LWNhcmR7XG4gICAgd2lkdGg6ODAlO1xuICAgIG1hcmdpbjphdXRvXG59ICovXG5tYXQtZm9ybS1maWVsZCx0ZXh0YXJlYXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbm1hdC1zcGlubmVye1xuICAgIG1hcmdpbjogYXV0bztcbn1cbiNpbWFnZVVwbG9hZHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/create-posts/posts-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/posts/create-posts/posts-create.component.ts ***!
  \**************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service */ "./src/app/posts/post-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(_postService, router, activateRoute) {
        this._postService = _postService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.title = '';
        this.content = '';
        this.spinner = false;
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('id')) {
                _this.id = paramMap.get('id');
                _this.mode = 'Edit';
                _this.spinner = true;
                _this._postService.getPost(_this.id).subscribe(function (data) {
                    _this.spinner = false;
                    _this.post = { content: data.data.content, title: data.data.title, id: data.data._id, creator: null };
                });
                // this._postService.getPost(this.id).subscribe((post)=>{
                //   this.post.title=post.data.title;
                //   this.post.content=post.data.content;
                // });
                // console.log(this.post);
            }
            else {
                _this.mode = 'Create';
                _this.id = null;
            }
        });
    };
    // Creating Post
    PostCreateComponent.prototype.onSavePosts = function (form) {
        if (form.invalid) {
            return;
        }
        this.spinner = true;
        //Invokes when we are creating the post
        if (this.mode === 'Create') {
            var post = { id: null, title: form.value.title, content: form.value.content, creator: null };
            this._postService.createPost(post);
            //Invokes when we updating the post
        }
        else {
            var post = { id: this.id, title: form.value.title, content: form.value.content, creator: null };
            this._postService.updatePost(this.id, post);
        }
        form.resetForm();
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! raw-loader!./posts-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/create-posts/posts-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/create-posts/post-create.component.css")]
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/list-posts/post-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/posts/list-posts/post-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-accordion{\n    display: block;\n    margin-top: 2rem;\n}\n.elseBock{\n   text-align: center;\n}\nmat-spinner{\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvbGlzdC1wb3N0cy9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2xpc3QtcG9zdHMvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtYWNjb3JkaW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG4uZWxzZUJvY2t7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtc3Bpbm5lcntcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/posts/list-posts/post-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/posts/list-posts/post-list.component.ts ***!
  \*********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-service */ "./src/app/posts/post-service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/posts/auth/auth.service.ts");




var PostListComponent = /** @class */ (function () {
    function PostListComponent(_postService, _auth) {
        this._postService = _postService;
        this._auth = _auth;
        this.postsReceived = [];
        // User authentication Variable 
        this.userAuth = false;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorisedUser = this._auth.getAuthorisesUserId();
        this._postService.getData();
        this.subsciption = this._postService.customEvent.subscribe(function (data) {
            _this.postsReceived = data;
        });
        this._postService.getData();
        // Getting the status of user whether is authenticated or not 
        this.userStatusSubsciption = this._auth.getTokenStatus().subscribe(function (userAuthenticated) {
            _this.userAuth = userAuthenticated;
            _this.authorisedUser = _this._auth.getAuthorisesUserId();
        });
        this.userAuth = this._auth.getUserStatus();
    };
    PostListComponent.prototype.onDelete = function (id) {
        this._postService.deletePost(id);
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.subsciption.unsubscribe();
        this.userStatusSubsciption.unsubscribe();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/list-posts/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/list-posts/post-list.component.css")]
        })
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-service.ts":
/*!***************************************!*\
  !*** ./src/app/posts/post-service.ts ***!
  \***************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostService = /** @class */ (function () {
    function PostService(_http, router) {
        this._http = _http;
        this.router = router;
        this.post = [];
        // Custom even which emits the post on create
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customEventSingle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Getting the Data 
    PostService.prototype.getData = function () {
        var _this = this;
        this._http.get("http://localhost:3000/api/post")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return postData.data.map(function (postElement) {
                return {
                    id: postElement._id,
                    content: postElement.content,
                    title: postElement.title,
                    creator: postElement.creator
                };
            });
        }))
            .subscribe(function (dataM) {
            _this.customEvent.emit(dataM);
        });
    };
    ;
    PostService.prototype.createPost = function (post) {
        var _this = this;
        this._http.post("http://localhost:3000/api/post", { _id: post.id, title: post.title, content: post.content }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        })
            .subscribe(function (data) {
            _this.getData();
            _this.router.navigate(['/']);
        });
    };
    //Deleting Post
    PostService.prototype.deletePost = function (id) {
        var _this = this;
        this._http.delete("http://localhost:3000/api/post/" + id)
            .subscribe(function () { return _this.getData(); });
    };
    //getting the post by id for editing
    PostService.prototype.getPost = function (id) {
        return this._http.get("http://localhost:3000/api/post/" + id);
    };
    //Updating the post 
    PostService.prototype.updatePost = function (id, post) {
        var _this = this;
        this._http.patch("http://localhost:3000/api/post/" + id, { _id: post.id, title: post.title, content: post.content, creator: post.creator }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        }).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ajaya\Downloads\Mean-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map