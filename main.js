(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_images_component_images_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/images-component/images-component.component */ "./src/app/images-component/images-component.component.ts");
/* harmony import */ var _app_info_component_info_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/info-component/info-component.component */ "./src/app/info-component/info-component.component.ts");
/* harmony import */ var _app_landing_component_landing_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/landing-component/landing-component.component */ "./src/app/landing-component/landing-component.component.ts");
/* harmony import */ var _app_profile_component_profile_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/profile-component/profile-component.component */ "./src/app/profile-component/profile-component.component.ts");
/* harmony import */ var _app_article_component_article_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/article-component/article-component.component */ "./src/app/article-component/article-component.component.ts");
/* harmony import */ var _app_top_trending_component_top_trending_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/top-trending-component/top-trending-component.component */ "./src/app/top-trending-component/top-trending-component.component.ts");
/* harmony import */ var _app_technical_learning_component_technical_learning_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/technical-learning-component/technical-learning-component.component */ "./src/app/technical-learning-component/technical-learning-component.component.ts");
/* harmony import */ var _app_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/log-in-component/log-in-component.component */ "./src/app/log-in-component/log-in-component.component.ts");
/* harmony import */ var _app_log_out_component_log_out_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/log-out-component/log-out-component.component */ "./src/app/log-out-component/log-out-component.component.ts");












var routes = [
    { path: '', redirectTo: '/Landing', pathMatch: 'full' },
    { path: 'Landing', component: _app_landing_component_landing_component_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponentComponent"] },
    { path: 'portfolio', component: _app_profile_component_profile_component_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponentComponent"] },
    { path: 'articles', component: _app_article_component_article_component_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponentComponent"] },
    { path: 'notes', component: _app_info_component_info_component_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponentComponent"] },
    { path: 'technicalLearning', component: _app_technical_learning_component_technical_learning_component_component__WEBPACK_IMPORTED_MODULE_9__["TechnicalLearningComponentComponent"] },
    { path: 'trending', component: _app_top_trending_component_top_trending_component_component__WEBPACK_IMPORTED_MODULE_8__["TopTrendingComponentComponent"] },
    { path: 'Publish', component: _app_images_component_images_component_component__WEBPACK_IMPORTED_MODULE_3__["PublishComponentComponent"] },
    { path: 'signin', component: _app_log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_10__["LogInComponentComponent"] },
    { path: 'signup', component: _app_log_out_component_log_out_component_component__WEBPACK_IMPORTED_MODULE_11__["LogOutComponentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-my-nav></app-my-nav>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TechCrez-UI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _article_component_article_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-component/article-component.component */ "./src/app/article-component/article-component.component.ts");
/* harmony import */ var _images_component_images_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images-component/images-component.component */ "./src/app/images-component/images-component.component.ts");
/* harmony import */ var _info_component_info_component_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./info-component/info-component.component */ "./src/app/info-component/info-component.component.ts");
/* harmony import */ var _landing_component_landing_component_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./landing-component/landing-component.component */ "./src/app/landing-component/landing-component.component.ts");
/* harmony import */ var _log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./log-in-component/log-in-component.component */ "./src/app/log-in-component/log-in-component.component.ts");
/* harmony import */ var _log_out_component_log_out_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./log-out-component/log-out-component.component */ "./src/app/log-out-component/log-out-component.component.ts");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _profile_component_profile_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./profile-component/profile-component.component */ "./src/app/profile-component/profile-component.component.ts");
/* harmony import */ var _technical_learning_component_technical_learning_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./technical-learning-component/technical-learning-component.component */ "./src/app/technical-learning-component/technical-learning-component.component.ts");
/* harmony import */ var _top_trending_component_top_trending_component_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./top-trending-component/top-trending-component.component */ "./src/app/top-trending-component/top-trending-component.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _landing_component_landing_component_component__WEBPACK_IMPORTED_MODULE_20__["LandingComponentComponent"],
                _profile_component_profile_component_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponentComponent"],
                _article_component_article_component_component__WEBPACK_IMPORTED_MODULE_17__["ArticleComponentComponent"],
                _info_component_info_component_component__WEBPACK_IMPORTED_MODULE_19__["InfoComponentComponent"],
                _images_component_images_component_component__WEBPACK_IMPORTED_MODULE_18__["PublishComponentComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_23__["MyNavComponent"],
                _technical_learning_component_technical_learning_component_component__WEBPACK_IMPORTED_MODULE_25__["TechnicalLearningComponentComponent"],
                _top_trending_component_top_trending_component_component__WEBPACK_IMPORTED_MODULE_26__["TopTrendingComponentComponent"],
                _log_in_component_log_in_component_component__WEBPACK_IMPORTED_MODULE_21__["LogInComponentComponent"],
                _log_out_component_log_out_component_component__WEBPACK_IMPORTED_MODULE_22__["LogOutComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__["SelectDropDownModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-component/article-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/article-component/article-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h1 style=\"text-align: center;\">\r\n    Published Articles!\r\n  </h1>\r\n<ol>\r\n  <li *ngFor=\"let list of this.listData; let idx = index\" class=\"list\">\r\n    <button\r\n      type=\"button\"\r\n      aria-label=\"Toggle sidenav\"\r\n      mat-icon-button\r\n      style=\"float: right;\"\r\n      (click)=\"delete(idx)\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">delete</mat-icon>\r\n    </button>\r\n    <p style=\"font-weight: lighter;\">Published by <b style=\"font-weight: 550;\">{{list.name ? list.name : 'unknown user'}}</b></p>\r\n    <p *ngIf='!list.imageData'><i>{{list.desc}}</i></p>\r\n    <img *ngIf=\"list.imageData\" [src]=\"list.imageData.src\" style=\"height:250px;width:250px\" />\r\n  </li>\r\n</ol>\r\n<h2 style=\"font-weight: lighter;text-align: center;\" *ngIf='this.listData.length === 0'>\r\n  No published articles yet!\r\n</h2>\r\n"

/***/ }),

/***/ "./src/app/article-component/article-component.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/article-component/article-component.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol {\n  margin: 1em;\n  padding: 0.1em 0 0.8em 0em;\n  list-style-type: none; }\n\n.list {\n  padding: 0.1em 0 0.8em 1em; }\n\nli:nth-child(odd) {\n  background-color: #e3f3d4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1jb21wb25lbnQvQzpcXFImRFxcVGVjaENyZXotVUkvc3JjXFxhcHBcXGFydGljbGUtY29tcG9uZW50XFxhcnRpY2xlLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCwyQkFBMEI7RUFDMUIsc0JBQXFCLEVBQ3hCOztBQUNEO0VBQ0ksMkJBQTBCLEVBQzdCOztBQUNEO0VBRUksMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS1jb21wb25lbnQvYXJ0aWNsZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbCB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDAgMC44ZW0gMGVtO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5saXN0IHtcclxuICAgIHBhZGRpbmc6IDAuMWVtIDAgMC44ZW0gMWVtO1xyXG59XHJcbmxpOm50aC1jaGlsZChvZGQpXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YzZDQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/article-component/article-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/article-component/article-component.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponentComponent", function() { return ArticleComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleComponentComponent = /** @class */ (function () {
    function ArticleComponentComponent() {
        this.listData = [];
    }
    ArticleComponentComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('publishedStorage')) {
            this.listData = JSON.parse(localStorage.getItem('publishedStorage'));
        }
    };
    ArticleComponentComponent.prototype.delete = function (index) {
        this.listData.splice(index, 1);
        localStorage.setItem('publishedStorage', JSON.stringify(this.listData));
    };
    ArticleComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-component',
            template: __webpack_require__(/*! ./article-component.component.html */ "./src/app/article-component/article-component.component.html"),
            styles: [__webpack_require__(/*! ./article-component.component.scss */ "./src/app/article-component/article-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticleComponentComponent);
    return ArticleComponentComponent;
}());



/***/ }),

/***/ "./src/app/data/regionData.json":
/*!**************************************!*\
  !*** ./src/app/data/regionData.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, default */
/***/ (function(module) {

module.exports = [{"regionName":"Afghanistan","regionCode":"AF"},{"regionName":"Åland Islands","regionCode":"AX"},{"regionName":"Albania","regionCode":"AL"},{"regionName":"Algeria","regionCode":"DZ"},{"regionName":"American Samoa","regionCode":"AS"},{"regionName":"Andorra","regionCode":"AD"},{"regionName":"Angola","regionCode":"AO"},{"regionName":"Anguilla","regionCode":"AI"},{"regionName":"Antarctica","regionCode":"AQ"},{"regionName":"Antigua and Barbuda","regionCode":"AG"},{"regionName":"Argentina","regionCode":"AR"},{"regionName":"Armenia","regionCode":"AM"},{"regionName":"Aruba","regionCode":"AW"},{"regionName":"Australia","regionCode":"AU"},{"regionName":"Austria","regionCode":"AT"},{"regionName":"Azerbaijan","regionCode":"AZ"},{"regionName":"Bahamas","regionCode":"BS"},{"regionName":"Bahrain","regionCode":"BH"},{"regionName":"Bangladesh","regionCode":"BD"},{"regionName":"Barbados","regionCode":"BB"},{"regionName":"Belarus","regionCode":"BY"},{"regionName":"Belgium","regionCode":"BE"},{"regionName":"Belize","regionCode":"BZ"},{"regionName":"Benin","regionCode":"BJ"},{"regionName":"Bermuda","regionCode":"BM"},{"regionName":"Bhutan","regionCode":"BT"},{"regionName":"Bolivia (Plurinational State of)","regionCode":"BO"},{"regionName":"Bonaire, Sint Eustatius and Saba","regionCode":"BQ"},{"regionName":"Bosnia and Herzegovina","regionCode":"BA"},{"regionName":"Botswana","regionCode":"BW"},{"regionName":"Bouvet Island","regionCode":"BV"},{"regionName":"Brazil","regionCode":"BR"},{"regionName":"British Indian Ocean Territory","regionCode":"IO"},{"regionName":"Brunei Darussalam","regionCode":"BN"},{"regionName":"Bulgaria","regionCode":"BG"},{"regionName":"Burkina Faso","regionCode":"BF"},{"regionName":"Burundi","regionCode":"BI"},{"regionName":"Cabo Verde","regionCode":"CV"},{"regionName":"Cambodia","regionCode":"KH"},{"regionName":"Cameroon","regionCode":"CM"},{"regionName":"Canada","regionCode":"CA"},{"regionName":"Cayman Islands","regionCode":"KY"},{"regionName":"Central African Republic","regionCode":"CF"},{"regionName":"Chad","regionCode":"TD"},{"regionName":"Chile","regionCode":"CL"},{"regionName":"China","regionCode":"CN"},{"regionName":"Christmas Island","regionCode":"CX"},{"regionName":"Cocos (Keeling) Islands","regionCode":"CC"},{"regionName":"Colombia","regionCode":"CO"},{"regionName":"Comoros","regionCode":"KM"},{"regionName":"Congo","regionCode":"CG"},{"regionName":"Congo (Democratic Republic of the)","regionCode":"CD"},{"regionName":"Cook Islands","regionCode":"CK"},{"regionName":"Costa Rica","regionCode":"CR"},{"regionName":"Côte d'Ivoire","regionCode":"CI"},{"regionName":"Croatia","regionCode":"HR"},{"regionName":"Cuba","regionCode":"CU"},{"regionName":"Curaçao","regionCode":"CW"},{"regionName":"Cyprus","regionCode":"CY"},{"regionName":"Czechia","regionCode":"CZ"},{"regionName":"Denmark","regionCode":"DK"},{"regionName":"Djibouti","regionCode":"DJ"},{"regionName":"Dominica","regionCode":"DM"},{"regionName":"Dominican Republic","regionCode":"DO"},{"regionName":"Ecuador","regionCode":"EC"},{"regionName":"Egypt","regionCode":"EG"},{"regionName":"El Salvador","regionCode":"SV"},{"regionName":"Equatorial Guinea","regionCode":"GQ"},{"regionName":"Eritrea","regionCode":"ER"},{"regionName":"Estonia","regionCode":"EE"},{"regionName":"Eswatini","regionCode":"SZ"},{"regionName":"Ethiopia","regionCode":"ET"},{"regionName":"Falkland Islands (Malvinas)","regionCode":"FK"},{"regionName":"Faroe Islands","regionCode":"FO"},{"regionName":"Fiji","regionCode":"FJ"},{"regionName":"Finland","regionCode":"FI"},{"regionName":"France","regionCode":"FR"},{"regionName":"French Guiana","regionCode":"GF"},{"regionName":"French Polynesia","regionCode":"PF"},{"regionName":"French Southern Territories","regionCode":"TF"},{"regionName":"Gabon","regionCode":"GA"},{"regionName":"Gambia","regionCode":"GM"},{"regionName":"Georgia","regionCode":"GE"},{"regionName":"Germany","regionCode":"DE"},{"regionName":"Ghana","regionCode":"GH"},{"regionName":"Gibraltar","regionCode":"GI"},{"regionName":"Greece","regionCode":"GR"},{"regionName":"Greenland","regionCode":"GL"},{"regionName":"Grenada","regionCode":"GD"},{"regionName":"Guadeloupe","regionCode":"GP"},{"regionName":"Guam","regionCode":"GU"},{"regionName":"Guatemala","regionCode":"GT"},{"regionName":"Guernsey","regionCode":"GG"},{"regionName":"Guinea","regionCode":"GN"},{"regionName":"Guinea-Bissau","regionCode":"GW"},{"regionName":"Guyana","regionCode":"GY"},{"regionName":"Haiti","regionCode":"HT"},{"regionName":"Heard Island and McDonald Islands","regionCode":"HM"},{"regionName":"Holy See","regionCode":"VA"},{"regionName":"Honduras","regionCode":"HN"},{"regionName":"Hong Kong","regionCode":"HK"},{"regionName":"Hungary","regionCode":"HU"},{"regionName":"Iceland","regionCode":"IS"},{"regionName":"India","regionCode":"IN"},{"regionName":"Indonesia","regionCode":"ID"},{"regionName":"Iran (Islamic Republic of)","regionCode":"IR"},{"regionName":"Iraq","regionCode":"IQ"},{"regionName":"Ireland","regionCode":"IE"},{"regionName":"Isle of Man","regionCode":"IM"},{"regionName":"Israel","regionCode":"IL"},{"regionName":"Italy","regionCode":"IT"},{"regionName":"Jamaica","regionCode":"JM"},{"regionName":"Japan","regionCode":"JP"},{"regionName":"Jersey","regionCode":"JE"},{"regionName":"Jordan","regionCode":"JO"},{"regionName":"Kazakhstan","regionCode":"KZ"},{"regionName":"Kenya","regionCode":"KE"},{"regionName":"Kiribati","regionCode":"KI"},{"regionName":"Korea (Democratic People's Republic of)","regionCode":"KP"},{"regionName":"Korea (Republic of)","regionCode":"KR"},{"regionName":"Kuwait","regionCode":"KW"},{"regionName":"Kyrgyzstan","regionCode":"KG"},{"regionName":"Lao People's Democratic Republic","regionCode":"LA"},{"regionName":"Latvia","regionCode":"LV"},{"regionName":"Lebanon","regionCode":"LB"},{"regionName":"Lesotho","regionCode":"LS"},{"regionName":"Liberia","regionCode":"LR"},{"regionName":"Libya","regionCode":"LY"},{"regionName":"Liechtenstein","regionCode":"LI"},{"regionName":"Lithuania","regionCode":"LT"},{"regionName":"Luxembourg","regionCode":"LU"},{"regionName":"Macao","regionCode":"MO"},{"regionName":"Macedonia (the former Yugoslav Republic of)","regionCode":"MK"},{"regionName":"Madagascar","regionCode":"MG"},{"regionName":"Malawi","regionCode":"MW"},{"regionName":"Malaysia","regionCode":"MY"},{"regionName":"Maldives","regionCode":"MV"},{"regionName":"Mali","regionCode":"ML"},{"regionName":"Malta","regionCode":"MT"},{"regionName":"Marshall Islands","regionCode":"MH"},{"regionName":"Martinique","regionCode":"MQ"},{"regionName":"Mauritania","regionCode":"MR"},{"regionName":"Mauritius","regionCode":"MU"},{"regionName":"Mayotte","regionCode":"YT"},{"regionName":"Mexico","regionCode":"MX"},{"regionName":"Micronesia (Federated States of)","regionCode":"FM"},{"regionName":"Moldova (Republic of)","regionCode":"MD"},{"regionName":"Monaco","regionCode":"MC"},{"regionName":"Mongolia","regionCode":"MN"},{"regionName":"Montenegro","regionCode":"ME"},{"regionName":"Montserrat","regionCode":"MS"},{"regionName":"Morocco","regionCode":"MA"},{"regionName":"Mozambique","regionCode":"MZ"},{"regionName":"Myanmar","regionCode":"MM"},{"regionName":"Namibia","regionCode":"NA"},{"regionName":"Nauru","regionCode":"NR"},{"regionName":"Nepal","regionCode":"NP"},{"regionName":"Netherlands","regionCode":"NL"},{"regionName":"New Caledonia","regionCode":"NC"},{"regionName":"New Zealand","regionCode":"NZ"},{"regionName":"Nicaragua","regionCode":"NI"},{"regionName":"Niger","regionCode":"NE"},{"regionName":"Nigeria","regionCode":"NG"},{"regionName":"Niue","regionCode":"NU"},{"regionName":"Norfolk Island","regionCode":"NF"},{"regionName":"Northern Mariana Islands","regionCode":"MP"},{"regionName":"Norway","regionCode":"NO"},{"regionName":"Oman","regionCode":"OM"},{"regionName":"Pakistan","regionCode":"PK"},{"regionName":"Palau","regionCode":"PW"},{"regionName":"Palestine, State of","regionCode":"PS"},{"regionName":"Panama","regionCode":"PA"},{"regionName":"Papua New Guinea","regionCode":"PG"},{"regionName":"Paraguay","regionCode":"PY"},{"regionName":"Peru","regionCode":"PE"},{"regionName":"Philippines","regionCode":"PH"},{"regionName":"Pitcairn","regionCode":"PN"},{"regionName":"Poland","regionCode":"PL"},{"regionName":"Portugal","regionCode":"PT"},{"regionName":"Puerto Rico","regionCode":"PR"},{"regionName":"Qatar","regionCode":"QA"},{"regionName":"Réunion","regionCode":"RE"},{"regionName":"Romania","regionCode":"RO"},{"regionName":"Russian Federation","regionCode":"RU"},{"regionName":"Rwanda","regionCode":"RW"},{"regionName":"Saint Barthélemy","regionCode":"BL"},{"regionName":"Saint Helena, Ascension and Tristan da Cunha","regionCode":"SH"},{"regionName":"Saint Kitts and Nevis","regionCode":"KN"},{"regionName":"Saint Lucia","regionCode":"LC"},{"regionName":"Saint Martin (French part)","regionCode":"MF"},{"regionName":"Saint Pierre and Miquelon","regionCode":"PM"},{"regionName":"Saint Vincent and the Grenadines","regionCode":"VC"},{"regionName":"Samoa","regionCode":"WS"},{"regionName":"San Marino","regionCode":"SM"},{"regionName":"Sao Tome and Principe","regionCode":"ST"},{"regionName":"Saudi Arabia","regionCode":"SA"},{"regionName":"Senegal","regionCode":"SN"},{"regionName":"Serbia","regionCode":"RS"},{"regionName":"Seychelles","regionCode":"SC"},{"regionName":"Sierra Leone","regionCode":"SL"},{"regionName":"Singapore","regionCode":"SG"},{"regionName":"Sint Maarten (Dutch part)","regionCode":"SX"},{"regionName":"Slovakia","regionCode":"SK"},{"regionName":"Slovenia","regionCode":"SI"},{"regionName":"Solomon Islands","regionCode":"SB"},{"regionName":"Somalia","regionCode":"SO"},{"regionName":"South Africa","regionCode":"ZA"},{"regionName":"South Georgia and the South Sandwich Islands","regionCode":"GS"},{"regionName":"South Sudan","regionCode":"SS"},{"regionName":"Spain","regionCode":"ES"},{"regionName":"Sri Lanka","regionCode":"LK"},{"regionName":"Sudan","regionCode":"SD"},{"regionName":"Suriname","regionCode":"SR"},{"regionName":"Svalbard and Jan Mayen","regionCode":"SJ"},{"regionName":"Sweden","regionCode":"SE"},{"regionName":"Switzerland","regionCode":"CH"},{"regionName":"Syrian Arab Republic","regionCode":"SY"},{"regionName":"Taiwan, Province of China","regionCode":"TW"},{"regionName":"Tajikistan","regionCode":"TJ"},{"regionName":"Tanzania, United Republic of","regionCode":"TZ"},{"regionName":"Thailand","regionCode":"TH"},{"regionName":"Timor-Leste","regionCode":"TL"},{"regionName":"Togo","regionCode":"TG"},{"regionName":"Tokelau","regionCode":"TK"},{"regionName":"Tonga","regionCode":"TO"},{"regionName":"Trinidad and Tobago","regionCode":"TT"},{"regionName":"Tunisia","regionCode":"TN"},{"regionName":"Turkey","regionCode":"TR"},{"regionName":"Turkmenistan","regionCode":"TM"},{"regionName":"Turks and Caicos Islands","regionCode":"TC"},{"regionName":"Tuvalu","regionCode":"TV"},{"regionName":"Uganda","regionCode":"UG"},{"regionName":"Ukraine","regionCode":"UA"},{"regionName":"United Arab Emirates","regionCode":"AE"},{"regionName":"United Kingdom of Great Britain and Northern Ireland","regionCode":"GB"},{"regionName":"United States of America","regionCode":"US"},{"regionName":"United States Minor Outlying Islands","regionCode":"UM"},{"regionName":"Uruguay","regionCode":"UY"},{"regionName":"Uzbekistan","regionCode":"UZ"},{"regionName":"Vanuatu","regionCode":"VU"},{"regionName":"Venezuela (Bolivarian Republic of)","regionCode":"VE"},{"regionName":"Viet Nam","regionCode":"VN"},{"regionName":"Virgin Islands (British)","regionCode":"VG"},{"regionName":"Virgin Islands (U.S.)","regionCode":"VI"},{"regionName":"Wallis and Futuna","regionCode":"WF"},{"regionName":"Western Sahara","regionCode":"EH"},{"regionName":"Yemen","regionCode":"YE"},{"regionName":"Zambia","regionCode":"ZM"},{"regionName":"Zimbabwe","regionCode":"ZW"}];

/***/ }),

/***/ "./src/app/data/technicalLearning/javaScript.json":
/*!********************************************************!*\
  !*** ./src/app/data/technicalLearning/javaScript.json ***!
  \********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"title":"Javascript Tutorial For Beginners 1 # JavaScript Introduction","url":"https://www.youtube.com/embed/08yflg_VVO8"},{"title":"Javascript Tutorial For Beginners 2 # Install and Configure Eclipse for JavaScript","url":"https://www.youtube.com/embed/NfwqGwNMQeE"},{"title":"Javascript Tutorial For Beginners 3 # Variables and Comments","url":"https://www.youtube.com/embed/FxSkfmP-ZO0"},{"title":"Javascript Tutorial For Beginners 4 # Data Types","url":"https://www.youtube.com/embed/6L0i7yTFiVg"},{"title":"Javascript Tutorial For Beginners 5 # If...Else Statements and Comparison Operators","url":"https://www.youtube.com/embed/IeZVaETHNuE"},{"title":"Javascript Tutorial For Beginners 6 # JavaScript Functions","url":"https://www.youtube.com/embed/TnyTlw9UAqg"},{"title":"Javascript Tutorial For Beginners 7 # JavaScript Events","url":"https://www.youtube.com/embed/A_0_CoCr0H0"},{"title":"Javascript Tutorial For Beginners 8 # JavaScript Arrays","url":"https://www.youtube.com/embed/c8jV2V0w9hU"},{"title":"Javascript Tutorial For Beginners 9 # JavaScript Switch Statement","url":"https://www.youtube.com/embed/7rc8aDtVFvE"},{"title":"Javascript Tutorial For Beginners 10 # JavaScrip while Loop and do/while Loop","url":"https://www.youtube.com/embed/1vbe206bLEI"},{"title":"Javascript Tutorial For Beginners 11 # JavaScript for Loop","url":"https://www.youtube.com/embed/qYjEIiErtrA"},{"title":"JavaScript Basics Tutorial","url":"https://www.youtube.com/embed/0QeFAE03qJc"}];

/***/ }),

/***/ "./src/app/images-component/images-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/images-component/images-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center;\">\r\n  publish-component works!\r\n</h1>\r\n<div class=\"container\">\r\n  <h4>What do you want to publish(Image/Story):</h4>\r\n  <div class=\"radio\">\r\n    <input type=\"radio\" name=\"gender\" value=\"Male\" (click)=\"setradio('image')\" ngModel> Image\r\n    <input type=\"radio\" name=\"gender\" value=\"Female\" (click)=\"setradio('story')\" ngModel> Story\r\n  </div>\r\n\r\n  <div *ngIf=\"isSelected('image')\" >\r\n    <input style=\"margin: 30px 30px 10px 10px;\" [(ngModel)]=\"image.name\" placeholder=\"name\"/><br>\r\n    <input style=\"margin: 20px 10px 10px 10px;\" #imageInput type=\"file\" accept=\"image/*\" (change)=\"processFile(imageInput)\"><br>\r\n    <button style=\"margin: 20px 30px 10px 10px;\" (click)=\"publishImage()\">publish</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"isSelected('story')\">\r\n    <input style=\"margin: 30px 30px 10px 10px;\" [(ngModel)]=\"data.name\" placeholder=\"name\"/><br>\r\n    <textarea [(ngModel)]=\"data.desc\" placeholder=\"description\"></textarea><br>\r\n    <button style=\"margin: 10px 30px 10px 10px;\" class=\"btn btn-primary\" (click)=\"addContact(data.name,data.desc)\">publish</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/images-component/images-component.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/images-component/images-component.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  margin: 3px 30px 10px 9px;\n  min-width: 85vw;\n  min-height: 45vh; }\n\n.container {\n  padding: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2VzLWNvbXBvbmVudC9DOlxcUiZEXFxUZWNoQ3Jlei1VSS9zcmNcXGFwcFxcaW1hZ2VzLWNvbXBvbmVudFxcaW1hZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2VzLWNvbXBvbmVudC9pbWFnZXMtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiAzcHggMzBweCAxMHB4IDlweDtcclxuICAgIG1pbi13aWR0aDogODV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/images-component/images-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/images-component/images-component.component.ts ***!
  \****************************************************************/
/*! exports provided: PublishComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponentComponent", function() { return PublishComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    return ImageSnippet;
}());
var PublishComponentComponent = /** @class */ (function () {
    function PublishComponentComponent() {
        this.published = [];
        this.data = {
            name: '',
            desc: ''
        };
        this.image = {
            name: '',
            imageData: {}
        };
        this.imagePublishedName = '';
    }
    PublishComponentComponent.prototype.ngOnInit = function () {
    };
    PublishComponentComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            _this.image.imageData = _this.selectedFile;
        });
        reader.readAsDataURL(file);
    };
    PublishComponentComponent.prototype.publishImage = function () {
        if (localStorage.getItem('publishedStorage')) {
            this.published = JSON.parse(localStorage.getItem('publishedStorage'));
        }
        this.published.push(this.image);
        localStorage.setItem('publishedStorage', JSON.stringify(this.published));
        this.image.name = '';
        this.image.imageData = {};
        window.alert('published image successfully');
    };
    PublishComponentComponent.prototype.setradio = function (e) {
        this.selectedLink = e;
    };
    PublishComponentComponent.prototype.addContact = function (name, desc) {
        this.data.name = name;
        this.data.desc = desc;
        if (localStorage.getItem('publishedStorage')) {
            this.published = JSON.parse(localStorage.getItem('publishedStorage'));
        }
        this.published.push(this.data);
        localStorage.setItem('publishedStorage', JSON.stringify(this.published));
        this.data.name = '';
        this.data.desc = '';
        window.alert('published story successfully');
        this.setradio('done');
    };
    PublishComponentComponent.prototype.isSelected = function (name) {
        if (!this.selectedLink) {
            return false;
        }
        return (this.selectedLink === name);
    };
    PublishComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images-component',
            template: __webpack_require__(/*! ./images-component.component.html */ "./src/app/images-component/images-component.component.html"),
            styles: [__webpack_require__(/*! ./images-component.component.scss */ "./src/app/images-component/images-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishComponentComponent);
    return PublishComponentComponent;
}());



/***/ }),

/***/ "./src/app/info-component/info-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/info-component/info-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n    type=\"button\"\r\n    aria-label=\"Toggle sidenav\"\r\n    mat-icon-button\r\n    class=\"saveButton\"\r\n    *ngIf=\"!istoggle\"\r\n    (click)=\"saveNotes(this.listData.list)\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">save</mat-icon>\r\n</button>\r\n<button\r\n    type=\"button\"\r\n    aria-label=\"Toggle sidenav\"\r\n    mat-icon-button\r\n    class=\"cancelButton\"\r\n    *ngIf=\"!istoggle\"\r\n    (click)=\"cancelNotes()\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">cancel</mat-icon>\r\n</button>\r\n<button\r\n    type=\"button\"\r\n    aria-label=\"Toggle sidenav\"\r\n    mat-icon-button\r\n    class=\"cancelButton\"\r\n    *ngIf=\"istoggle\"\r\n    (click)=\"this.istoggle = false;this.listData.list = ''\">\r\n      <mat-icon aria-label=\"Side nav toggle icon\">add_circle</mat-icon>\r\n</button>\r\n<h1 style=\"text-align: center;\">TechCrez Notes</h1>\r\n<textarea *ngIf=\"!istoggle\" [(ngModel)]=\"this.listData.list\" placeholder=\"notes\"></textarea>\r\n\r\n\r\n<div *ngFor=\"let notes of this.notesData; let idx = index\" [hidden]=\"!(istoggle && !(this.notesData.length === 0))\" id=\"example2\">\r\n  <div style=\"background-color: #FDDD9B;\">\r\n    <button\r\n      type=\"button\"\r\n      aria-label=\"Toggle sidenav\"\r\n      mat-icon-button\r\n      disabled\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">ac_unit</mat-icon>\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      aria-label=\"Toggle sidenav\"\r\n      mat-icon-button\r\n      (click)=\"deleteNotes(idx)\"\r\n      style=\"float:right\"\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">delete</mat-icon>\r\n    </button>\r\n    <button\r\n      type=\"button\"\r\n      aria-label=\"Toggle sidenav\"\r\n      mat-icon-button\r\n      (click)=\"editNotes(idx)\"\r\n      style=\"float:right\"\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">edit</mat-icon>\r\n    </button>\r\n    Notes {{idx}}\r\n  </div>\r\n  <span>{{notes.list}}</span>\r\n</div>\r\n<h2 style=\"font-weight: lighter;text-align: center;\" *ngIf='this.notesData.length === 0 && istoggle'>\r\n  No notes yet\r\n</h2>\r\n"

/***/ }),

/***/ "./src/app/info-component/info-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/info-component/info-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#example2 {\n  margin-top: 40px;\n  border: 1px solid;\n  padding: 10px;\n  box-shadow: 5px 10px #888888;\n  margin: 0px 15px 30px 15px;\n  width: 310px;\n  float: left; }\n\n@media (max-width: 550px) {\n  #example2 {\n    width: 85vw; } }\n\ntextarea {\n  margin: 3px 30px 10px 9px;\n  min-width: 85vw;\n  min-height: 45vh; }\n\n.saveButton, .editButton {\n  float: right;\n  margin: 20px 20px 20px 5px; }\n\n.cancelButton {\n  float: right;\n  margin: 20px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1jb21wb25lbnQvQzpcXFImRFxcVGVjaENyZXotVUkvc3JjXFxhcHBcXGluZm8tY29tcG9uZW50XFxpbmZvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsY0FBYTtFQUNiLDZCQUE0QjtFQUM1QiwyQkFBMEI7RUFDMUIsYUFBWTtFQUNaLFlBQVcsRUFDZDs7QUFDRDtFQUNJO0lBQ0ksWUFBVyxFQUNkLEVBQUE7O0FBR0w7RUFDSSwwQkFBeUI7RUFDekIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2luZm8tY29tcG9uZW50L2luZm8tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V4YW1wbGUyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweCAzMHB4IDE1cHg7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgI2V4YW1wbGUyIHtcclxuICAgICAgICB3aWR0aDogODV2dztcclxuICAgIH1cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiAzcHggMzBweCAxMHB4IDlweDtcclxuICAgIG1pbi13aWR0aDogODV2dztcclxuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XHJcbn1cclxuXHJcbi5zYXZlQnV0dG9uLCAuZWRpdEJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDVweDtcclxufVxyXG5cclxuLmNhbmNlbEJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/info-component/info-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/info-component/info-component.component.ts ***!
  \************************************************************/
/*! exports provided: InfoComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponentComponent", function() { return InfoComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponentComponent = /** @class */ (function () {
    function InfoComponentComponent() {
        this.notesData = [];
        this.listData = {
            list: '',
            id: null
        };
        this.istoggle = true;
    }
    InfoComponentComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('notes')) {
            this.notesData = JSON.parse(localStorage.getItem('notes'));
        }
    };
    InfoComponentComponent.prototype.saveNotes = function (notes) {
        this.listData.list = notes;
        if (this.listData.id == null) {
            this.notesData.push(this.listData);
        }
        else {
            this.notesData[this.listData.id].list = notes;
            this.listData.id = null;
        }
        localStorage.setItem('notes', JSON.stringify(this.notesData));
        this.notesData = JSON.parse(localStorage.getItem('notes'));
        this.istoggle = true;
    };
    InfoComponentComponent.prototype.cancelNotes = function () {
        this.notesData = JSON.parse(localStorage.getItem('notes'));
        this.istoggle = true;
    };
    InfoComponentComponent.prototype.editNotes = function (id) {
        this.notesData = JSON.parse(localStorage.getItem('notes'));
        this.listData.list = this.notesData[id].list;
        this.listData.id = id;
        this.istoggle = false;
    };
    InfoComponentComponent.prototype.deleteNotes = function (id) {
        this.notesData = JSON.parse(localStorage.getItem('notes'));
        this.notesData.splice(id, 1);
        localStorage.setItem('notes', JSON.stringify(this.notesData));
    };
    InfoComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-component',
            template: __webpack_require__(/*! ./info-component.component.html */ "./src/app/info-component/info-component.component.html"),
            styles: [__webpack_require__(/*! ./info-component.component.scss */ "./src/app/info-component/info-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponentComponent);
    return InfoComponentComponent;
}());



/***/ }),

/***/ "./src/app/landing-component/landing-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/landing-component/landing-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list #grid rowHeight=\"2:1\">\r\n    <mat-grid-tile\r\n        routerLink=\"/portfolio\"\r\n        style=\"background-color: powderblue;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"portfolio\" matTooltipPosition=\"below\">portfolio</span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile\r\n        routerLink=\"/Publish\"\r\n        style=\"background-color: NavajoWhite;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"Publish your stories\" matTooltipPosition=\"below\">Publish your stories</span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile\r\n        routerLink=\"/notes\"\r\n        style=\"background-color: Gainsboro;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"notes\" matTooltipPosition=\"below\">notes</span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile\r\n        routerLink=\"/technicalLearning\"\r\n        style=\"background-color: Lavender;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"Technical Learning Space\" matTooltipPosition=\"below\">Technical Learning Space</span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile\r\n        routerLink=\"/trending\"\r\n        style=\"background-color: LightSteelBlue ;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"Top Trending\" matTooltipPosition=\"below\">Top Trending</span>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile\r\n        routerLink=\"/articles\"\r\n        style=\"background-color: DarkSalmon;\"\r\n        class=\"cursorPointer\"\r\n        >\r\n        <span matTooltip=\"View articles\" matTooltipPosition=\"below\">View articles</span>\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/landing-component/landing-component.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/landing-component/landing-component.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctY29tcG9uZW50L2xhbmRpbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing-component/landing-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/landing-component/landing-component.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponentComponent", function() { return LandingComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var LandingComponentComponent = /** @class */ (function () {
    function LandingComponentComponent(observableMedia) {
        this.observableMedia = observableMedia;
        this.gridByBreakpoint = {
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1
        };
    }
    LandingComponentComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.observableMedia.asObservable().subscribe(function (change) {
            _this.grid.cols = _this.gridByBreakpoint[change.mqAlias];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridList"])
    ], LandingComponentComponent.prototype, "grid", void 0);
    LandingComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-component',
            template: __webpack_require__(/*! ./landing-component.component.html */ "./src/app/landing-component/landing-component.component.html"),
            styles: [__webpack_require__(/*! ./landing-component.component.scss */ "./src/app/landing-component/landing-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], LandingComponentComponent);
    return LandingComponentComponent;
}());



/***/ }),

/***/ "./src/app/log-in-component/log-in-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/log-in-component/log-in-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  log-in-component works!\r\n</p>\r\n<button mat-menu-item routerLink=\"/signup\">register</button>"

/***/ }),

/***/ "./src/app/log-in-component/log-in-component.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/log-in-component/log-in-component.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi1jb21wb25lbnQvbG9nLWluLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/log-in-component/log-in-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/log-in-component/log-in-component.component.ts ***!
  \****************************************************************/
/*! exports provided: LogInComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponentComponent", function() { return LogInComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogInComponentComponent = /** @class */ (function () {
    function LogInComponentComponent() {
    }
    LogInComponentComponent.prototype.ngOnInit = function () {
    };
    LogInComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in-component',
            template: __webpack_require__(/*! ./log-in-component.component.html */ "./src/app/log-in-component/log-in-component.component.html"),
            styles: [__webpack_require__(/*! ./log-in-component.component.scss */ "./src/app/log-in-component/log-in-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogInComponentComponent);
    return LogInComponentComponent;
}());



/***/ }),

/***/ "./src/app/log-out-component/log-out-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/log-out-component/log-out-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<p>\r\n  register works!\r\n</p>\r\n<button mat-menu-item routerLink=\"/\">done</button>\r\n<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n          <ng-template matStepLabel>Fill out your name</ng-template>\r\n          <mat-form-field>\r\n              <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n              <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n      </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"secondFormGroup\" optional>\r\n      <form [formGroup]=\"secondFormGroup\">\r\n          <ng-template matStepLabel>Fill out your address</ng-template>\r\n          <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n          </mat-form-field>\r\n          <div>\r\n              <button mat-button matStepperPrevious>Back</button>\r\n              <button mat-button matStepperNext>Next</button>\r\n          </div>\r\n      </form>\r\n  </mat-step>\r\n  <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      You are now done.\r\n      <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n      </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n</div>"

/***/ }),

/***/ "./src/app/log-out-component/log-out-component.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/log-out-component/log-out-component.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1vdXQtY29tcG9uZW50L2xvZy1vdXQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/log-out-component/log-out-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/log-out-component/log-out-component.component.ts ***!
  \******************************************************************/
/*! exports provided: LogOutComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutComponentComponent", function() { return LogOutComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LogOutComponentComponent = /** @class */ (function () {
    function LogOutComponentComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    LogOutComponentComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LogOutComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-out-component',
            template: __webpack_require__(/*! ./log-out-component.component.html */ "./src/app/log-out-component/log-out-component.component.html"),
            styles: [__webpack_require__(/*! ./log-out-component.component.scss */ "./src/app/log-out-component/log-out-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LogOutComponentComponent);
    return LogOutComponentComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\r\n      [attr.role]=\"'navigation'\"\r\n      [mode]=\"'over'\"\r\n      [opened]=false>\r\n    <mat-toolbar><img src=\"../../assets/pheonix_logo.jpg\" style=\"border-radius: 50%;\" alt=\"Smiley face\" height=\"42\" width=\"42\"/>\r\n      <span class=\"whiteSmoke\" style=\"margin-left: 50px;\">TechCrez</span> \r\n    </mat-toolbar>\r\n    <mat-nav-list>\r\n      <a mat-list-item routerLink=\"/portfolio\">portfolio</a>\r\n      <a mat-list-item routerLink=\"/Publish\">Publish your stories</a>\r\n      <a mat-list-item routerLink=\"/notes\">notes</a>\r\n      <a mat-list-item routerLink=\"/technicalLearning\">Technical Learning Space</a>\r\n      <a mat-list-item routerLink=\"/trending\">Top Trending</a>\r\n      <a mat-list-item routerLink=\"/articles\">View articles</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar>\r\n      <button\r\n        class=\"whiteSmoke\"\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span class=\"whiteSmoke\">TechCrez</span>\r\n      <span class=\"userMenu whiteSmoke\">\r\n        <button class=\"mat-icon-button\" mat-button routerLink=\"/Landing\"><mat-icon>home</mat-icon></button>\r\n        <button class=\"mat-icon-button\" mat-button [matMenuTriggerFor]=\"menu\"><mat-icon>account_circle</mat-icon></button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item>Profile</button>\r\n          <button mat-menu-item routerLink=\"/signin\">Signout</button>\r\n        </mat-menu>\r\n      </span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.scss":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.userMenu {\n  margin-left: auto; }\n\n.mat-toolbar.mat-primary, .mat-toolbar.mat-toolbar-single-row {\n  background: #3A6F9F !important; }\n\n.mat-drawer {\n  background: #E5E5E5; }\n\n.mat-drawer-container {\n  background-color: #FCFCFC; }\n\n.mat-list-base .mat-list-item {\n  font-size: 18px;\n  font-weight: 100;\n  color: #828282; }\n\n.sidenav[_ngcontent-c1] {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktbmF2L0M6XFxSJkRcXFRlY2hDcmV6LVVJL3NyY1xcYXBwXFxteS1uYXZcXG15LW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsT0FBTTtFQUNOLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL215LW5hdi9teS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnVzZXJNZW51IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5LCAubWF0LXRvb2xiYXIubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgYmFja2dyb3VuZDogIzNBNkY5RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlciB7XHJcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxufVxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZDRkM7XHJcbn1cclxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcbi5zaWRlbmF2W19uZ2NvbnRlbnQtYzFdIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyNavComponent = /** @class */ (function () {
    function MyNavComponent() {
    }
    MyNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.scss */ "./src/app/my-nav/my-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/profile-component/profile-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile-component/profile-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  profile-component works!\r\n</h1>\r\n\r\n<h2><a routerLink=\"/Landing\">home</a></h2>"

/***/ }),

/***/ "./src/app/profile-component/profile-component.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/profile-component/profile-component.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY29tcG9uZW50L3Byb2ZpbGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile-component/profile-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile-component/profile-component.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponentComponent", function() { return ProfileComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponentComponent = /** @class */ (function () {
    function ProfileComponentComponent() {
    }
    ProfileComponentComponent.prototype.ngOnInit = function () {
    };
    ProfileComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-component',
            template: __webpack_require__(/*! ./profile-component.component.html */ "./src/app/profile-component/profile-component.component.html"),
            styles: [__webpack_require__(/*! ./profile-component.component.scss */ "./src/app/profile-component/profile-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponentComponent);
    return ProfileComponentComponent;
}());



/***/ }),

/***/ "./src/app/technical-learning-component/technical-learning-component.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/technical-learning-component/technical-learning-component.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\">\r\n  <h1 *ngIf=\"this.isToggle\">Welcome to Technical Learning !</h1>\r\n  <div *ngIf=\"this.isToggle\">\r\n    <h3> Select the course </h3>\r\n    <mat-grid-list cols=\"5\" rowHeight=\"2:1\">\r\n      <mat-grid-tile (click)=\"coureSelected('C Programming')\" style=\"background-color: powderblue;\">C Programming</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('JavaScript')\" style=\"background-color: NavajoWhite;\">JavaScript</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('AngularJS')\" style=\"background-color: Gainsboro;\">AngularJS</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('Angular')\" style=\"background-color: Lavender;\">Angular 2+</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('Vue JS')\" style=\"background-color: LightSteelBlue ;\">VueJS</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('React JS')\" style=\"background-color: DarkSalmon;\">ReactJS</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('Jquery')\" style=\"background-color: Gainsboro;\">Jquery</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('HTML')\" style=\"background-color: NavajoWhite ;\">HTML</mat-grid-tile>\r\n      <mat-grid-tile (click)=\"coureSelected('CSS')\" style=\"background-color: powderblue;\">CSS</mat-grid-tile>\r\n    </mat-grid-list>\r\n  </div>\r\n  <div *ngIf=\"!this.isToggle\">\r\n    <h1>Selected course {{this.selectedCourse}}</h1>\r\n    <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        class=\"backButton\"\r\n        (click)=\"this.isToggle = true\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">arrow_back</mat-icon>\r\n      </button>\r\n  </div>\r\n  <div *ngIf=\"!this.isToggle\">\r\n    <div class=\"videoList\">\r\n      <div>\r\n        <ul>\r\n          <li *ngFor=\"let video of videosList\" (click)=\"onSelect(video)\">\r\n            <a href=\"#\">{{ video.name }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"videoStreaming\">\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/technical-learning-component/technical-learning-component.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/technical-learning-component/technical-learning-component.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoList {\n  height: 85vh;\n  width: 30%;\n  background-color: black;\n  float: left; }\n\n.videoStreaming {\n  height: 85vh;\n  float: right;\n  width: 70%;\n  background-color: gray; }\n\n.backButton {\n  position: absolute;\n  top: 85px;\n  right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5pY2FsLWxlYXJuaW5nLWNvbXBvbmVudC9DOlxcUiZEXFxUZWNoQ3Jlei1VSS9zcmNcXGFwcFxcdGVjaG5pY2FsLWxlYXJuaW5nLWNvbXBvbmVudFxcdGVjaG5pY2FsLWxlYXJuaW5nLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixXQUFVO0VBQ1Ysd0JBQXVCO0VBQ3ZCLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osV0FBVTtFQUNWLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdGVjaG5pY2FsLWxlYXJuaW5nLWNvbXBvbmVudC90ZWNobmljYWwtbGVhcm5pbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvTGlzdCB7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnZpZGVvU3RyZWFtaW5nIHtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA3MCU7O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG4uYmFja0J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDg1cHg7XHJcbiAgICByaWdodDogMWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/technical-learning-component/technical-learning-component.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/technical-learning-component/technical-learning-component.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TechnicalLearningComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalLearningComponentComponent", function() { return TechnicalLearningComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var javascript = __webpack_require__(/*! ../data/technicalLearning/javaScript.json */ "./src/app/data/technicalLearning/javaScript.json");
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
// let regionData = require('../data/regionData.json');
var TechnicalLearningComponentComponent = /** @class */ (function () {
    function TechnicalLearningComponentComponent() {
        this.isToggle = true;
        this.selectedCourse = '';
    }
    TechnicalLearningComponentComponent.prototype.ngOnInit = function () {
        console.log('javascript', javascript);
    };
    TechnicalLearningComponentComponent.prototype.coureSelected = function (selectedCourse) {
        this.isToggle = false;
        this.selectedCourse = selectedCourse;
    };
    TechnicalLearningComponentComponent.prototype.toCourseList = function () {
        this.isToggle = true;
    };
    TechnicalLearningComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-technical-learning-component',
            template: __webpack_require__(/*! ./technical-learning-component.component.html */ "./src/app/technical-learning-component/technical-learning-component.component.html"),
            styles: [__webpack_require__(/*! ./technical-learning-component.component.scss */ "./src/app/technical-learning-component/technical-learning-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechnicalLearningComponentComponent);
    return TechnicalLearningComponentComponent;
}());



/***/ }),

/***/ "./src/app/top-trending-component/top-trending-component.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/top-trending-component/top-trending-component.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center;\">\r\n  Select the region to see the trending videos.\r\n</h1>\r\n<ngx-select-dropdown\r\n  [config]=\"config\"\r\n  [options]=\"this.regionData\"\r\n  (change)=\"getData($event)\"\r\n  [(ngModel)]=\"dataModel\"\r\n  [multiple]=\"false\" >\r\n</ngx-select-dropdown>\r\n\r\n<ol *ngIf=\"this.trendingVideos.items\">\r\n  <h2>Top trending videos in {{this.selectedRegion.regionName}}</h2>\r\n  <li *ngFor=\"let list of this.trendingVideos.items; let idx = index\" class=\"list\">\r\n    <iframe width=\"560\" height=\"315\" [src]=\"list.id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n  </li>\r\n</ol>\r\n"

/***/ }),

/***/ "./src/app/top-trending-component/top-trending-component.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/top-trending-component/top-trending-component.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol {\n  margin: 1em;\n  padding: 1em;\n  list-style-type: none; }\n\n.list {\n  padding: 0.1em 0 0.8em 1em; }\n\nli {\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLXRyZW5kaW5nLWNvbXBvbmVudC9DOlxcUiZEXFxUZWNoQ3Jlei1VSS9zcmNcXGFwcFxcdG9wLXRyZW5kaW5nLWNvbXBvbmVudFxcdG9wLXRyZW5kaW5nLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0JBQXFCLEVBQ3hCOztBQUNEO0VBQ0ksMkJBQTBCLEVBQzdCOztBQUNEO0VBRUksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvdG9wLXRyZW5kaW5nLWNvbXBvbmVudC90b3AtdHJlbmRpbmctY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsib2wge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmxpc3Qge1xyXG4gICAgcGFkZGluZzogMC4xZW0gMCAwLjhlbSAxZW07XHJcbn1cclxubGlcclxueyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/top-trending-component/top-trending-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/top-trending-component/top-trending-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: TopTrendingComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTrendingComponentComponent", function() { return TopTrendingComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var regionData = __webpack_require__(/*! ../data/regionData.json */ "./src/app/data/regionData.json");
var TopTrendingComponentComponent = /** @class */ (function () {
    function TopTrendingComponentComponent(httpClient, sanitizer) {
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.regionData = [];
        this.selectedRegion = {};
        this.trendingVideos = [];
        this.embedUrl = 'https://www.youtube.com/embed/';
        this.config = {
            displayKey: "regionName",
            search: true,
            height: '300px',
            placeholder: 'Select',
            customComparator: function () { },
            limitTo: regionData.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'regionName'
        };
    }
    TopTrendingComponentComponent.prototype.ngOnInit = function () {
        this.regionData = regionData;
    };
    TopTrendingComponentComponent.prototype.getData = function (selectedRegion) {
        var _this = this;
        if (selectedRegion.value) {
            this.selectedRegion = selectedRegion.value;
            var url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=' + selectedRegion.value.regionCode + '&maxResults=15&key=AIzaSyAhDepjAUTyR7M7hMA9LY_Cl20uXCwO-Mo';
            this.httpClient
                .get(url)
                .subscribe(function (data) {
                _this.trendingVideos = data;
                for (var i = 0; i < _this.trendingVideos.items.length; i++) {
                    _this.trendingVideos.items[i].id = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.embedUrl + _this.trendingVideos.items[i].id);
                }
            }, function (error) {
                console.log("Rrror", error);
            });
        }
    };
    TopTrendingComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-trending-component',
            template: __webpack_require__(/*! ./top-trending-component.component.html */ "./src/app/top-trending-component/top-trending-component.component.html"),
            styles: [__webpack_require__(/*! ./top-trending-component.component.scss */ "./src/app/top-trending-component/top-trending-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TopTrendingComponentComponent);
    return TopTrendingComponentComponent;
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

module.exports = __webpack_require__(/*! C:\R&D\TechCrez-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map