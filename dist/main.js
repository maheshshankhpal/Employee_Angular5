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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/jwt-helper */ "./src/app/helpers/jwt-helper.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/user.service */ "./src/app/providers/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this._jwt = new _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_1__["JwtHelper"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        // let's check if there is token and we decode it and set the user
        this._userService.set(this._jwt.decodeToken());
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: handlerFunc, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlerFunc", function() { return handlerFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/api-handler.service */ "./src/app/providers/api-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _dashboard_GenerateButton_GenerateButton_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/GenerateButton/GenerateButton.service */ "./src/app/dashboard/GenerateButton/GenerateButton.service.ts");
/* harmony import */ var _app_routes_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes.ts */ "./src/app/app.routes.ts.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function handlerFunc(backend, defaultOptions) {
    return new _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"](backend, defaultOptions);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes_ts__WEBPACK_IMPORTED_MODULE_13__["APP_ROUTES"]),
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_11__["DashboardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                _guards_role_guard__WEBPACK_IMPORTED_MODULE_16__["RoleGuard"],
                _providers_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _providers_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _dashboard_GenerateButton_GenerateButton_service__WEBPACK_IMPORTED_MODULE_12__["GenerateButtonService"],
                {
                    provide: _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"],
                    useFactory: handlerFunc,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts.ts":
/*!**********************************!*\
  !*** ./src/app/app.routes.ts.ts ***!
  \**********************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");


var APP_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/commoncomponent/CommonDirective.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/commoncomponent/CommonDirective.directive.ts ***!
  \**************************************************************/
/*! exports provided: CommonDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDirectiveDirective", function() { return CommonDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonDirectiveDirective = /** @class */ (function () {
    function CommonDirectiveDirective(el) {
        this.el = el;
    }
    CommonDirectiveDirective.prototype.onkeydown = function (event) {
        var e = event;
        if (this.onlyNumber) {
            if ([46, 8, 9, 27, 13, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
        if (this.onlyAlphabet) {
            var charCode = (e.charCode) ? e.charCode : ((e.keyCode) ? e.keyCode :
                ((e.which) ? e.which : 0));
            if (charCode > 31 && (charCode < 65 || charCode > 90) &&
                (charCode < 97 || charCode > 122) || (charCode > 96 && charCode < 112)) {
                return false;
            }
            return true;
        }
    };
    CommonDirectiveDirective.prototype.toUpperCase = function (value) {
        if (this.allowUpperCase)
            this.el.nativeElement.value = value.toUpperCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommonDirectiveDirective.prototype, "onlyNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommonDirectiveDirective.prototype, "onlyAlphabet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appCommonDirective'),
        __metadata("design:type", Boolean)
    ], CommonDirectiveDirective.prototype, "allowUpperCase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CommonDirectiveDirective.prototype, "onkeydown", null);
    CommonDirectiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCommonDirective]',
            host: {
                '(input)': 'toUpperCase($event.target.value)',
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CommonDirectiveDirective);
    return CommonDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/commoncomponent/autocomplete/autocomplete.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/commoncomponent/autocomplete/autocomplete.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\" id=\"{{ngId}}\">\r\n  <input matInput placeholder=\"{{ngLable}}\" [matAutocomplete]=\"auto\" [formControl]=\"autoCompleteControls.controls['AutoComplete']\"\r\n    [(ngModel)]=\"ngModel\" (ngModelChange)=\"onModelChange()\" (blur)=\"onInputBlur()\"  [disabled]=\"ngDisable\">\r\n\r\n  <mat-autocomplete #auto=\"matAutocomplete\" id=\"AutoComplete\" [displayWith]=\"showValueAutoComplete\" >\r\n    <mat-option *ngFor=\"let master of filter()\" [value]=\"master\">\r\n      <div [ngSwitch]=\"displayStyle\">\r\n        <div *ngSwitchCase=\"'CodeValue'\">\r\n          <span>Code : {{ master.Code }}</span>\r\n          <small>Description : {{master.Description}}</small>\r\n        </div>\r\n        <div *ngSwitchDefault>\r\n          <small>{{master.Description}}</small>\r\n        </div>\r\n      </div>\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>"

/***/ }),

/***/ "./src/app/commoncomponent/autocomplete/autocomplete.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/commoncomponent/autocomplete/autocomplete.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/commoncomponent/autocomplete/autocomplete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/commoncomponent/autocomplete/autocomplete.component.ts ***!
  \************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(cdr) {
        this.cdr = cdr;
        this.displayStyle = '';
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngCodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoCompleteControls = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            AutoComplete: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line:use-life-cycle-interface
    AutocompleteComponent.prototype.ngAfterContentChecked = function () {
        this.onLoadBindData();
    };
    // tslint:disable-next-line:use-life-cycle-interface
    AutocompleteComponent.prototype.ngAfterViewInit = function () {
        this.changeVisibility(this.ngVisible);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    AutocompleteComponent.prototype.ngOnChanges = function (changes) {
        // tslint:disable-next-line:prefer-const
        for (var propName in changes) {
            if (propName === 'ngDisable') {
                if (changes[propName].currentValue !== undefined) {
                    if (changes[propName].currentValue === true) {
                        this.autoCompleteControls.controls['AutoComplete'].disable();
                    }
                    else {
                        this.autoCompleteControls.controls['AutoComplete'].enable();
                    }
                }
            }
            else if (propName === 'ngVisible') {
                this.changeVisibility(changes[propName].currentValue);
            }
        }
    };
    AutocompleteComponent.prototype.showValueAutoComplete = function (master) {
        try {
            return master.Description;
        }
        catch (e) { }
    };
    AutocompleteComponent.prototype.filter = function () {
        try {
            // tslint:disable-next-line:prefer-const
            var val = this.autoCompleteControls.controls['AutoComplete'].value;
            return this.filterList(val);
        }
        catch (e) { }
    };
    AutocompleteComponent.prototype.filterList = function (val) {
        try {
            if (val === undefined) {
                return this.masterdata;
            }
            else {
                return this.masterdata.filter(function (option) {
                    return (option['Description'].toLowerCase().indexOf(val.toString().toLowerCase()) === 0 ||
                        option['Code'].toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0);
                });
            }
        }
        catch (error) {
        }
    };
    AutocompleteComponent.prototype.onModelChange = function () {
        try {
            if (this.ngModel !== undefined && this.ngModel !== null) {
                this.ngCode = this.ngModel['Code'];
                var value = this.ngModel['Description'];
                this.ngCodeChange.emit(this.ngCode);
                this.ngValue.emit(value);
            }
        }
        catch (error) {
        }
        this.ngModelChange.emit(this.ngModel);
    };
    AutocompleteComponent.prototype.onInputBlur = function () {
        try {
            if (this.ngModel['Code'] === undefined) {
                this.ngModel = '';
                this.ngModelChange.emit(this.ngModel);
            }
        }
        catch (error) {
            this.ngModel = '';
            this.ngModelChange.emit(this.ngModel);
        }
        this.ngBlur.emit();
    };
    AutocompleteComponent.prototype.changeVisibility = function (currentValue) {
        if (currentValue !== undefined) {
            // tslint:disable-next-line:prefer-const
            var elementId = document.getElementById(this.ngId);
            if (elementId !== null) {
                if (currentValue) {
                    elementId.style['display'] = '';
                }
                else {
                    elementId.style['display'] = 'none';
                }
            }
        }
    };
    AutocompleteComponent.prototype.onLoadBindData = function () {
        var _this = this;
        if (this.ngCode !== undefined) {
            try {
                // tslint:disable-next-line:prefer-const
                var filterData = this.masterdata.filter(function (option) {
                    return option['Code'].toString().toLowerCase() === _this.ngCode.toString();
                });
                if (filterData.length > 0) {
                    this.ngModel = filterData[0];
                    this.cdr.detectChanges();
                }
            }
            catch (error) {
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "ngId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "ngLable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "displayStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AutocompleteComponent.prototype, "ngDisable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AutocompleteComponent.prototype, "ngVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngCodeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "ngBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AutocompleteComponent.prototype, "masterdata", void 0);
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'd2k-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/commoncomponent/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.scss */ "./src/app/commoncomponent/autocomplete/autocomplete.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/commoncomponent/autocomplete/autocomplete.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/commoncomponent/autocomplete/autocomplete.module.ts ***!
  \*********************************************************************/
/*! exports provided: AutocompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function() { return AutocompleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autocomplete.component */ "./src/app/commoncomponent/autocomplete/autocomplete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"]
            ],
            declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]],
            exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]]
        })
    ], AutocompleteModule);
    return AutocompleteModule;
}());



/***/ }),

/***/ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/commoncomponent/common_btn_template/common_btn_template.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d2kbutton {\r\n  background-color: #136fb3;\r\n  border-radius: 5px;\r\n  height: 39px;\r\n  margin-right: 20px;\r\n  color: white;\r\n  margin: 5px;\r\n}\r\n\r\n[hidden] { display: none; }"

/***/ }),

/***/ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/commoncomponent/common_btn_template/common_btn_template.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n  <div class=\"form-group-footer\" style=\"margin-top: 5px;\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\r\n        <div class=\"button-row\" style=\"padding: 15px !important;\">\r\n          <button  id=\"btnAddMore\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Add\">\r\n            <mat-icon  class=\"space\">add_circle</mat-icon>\r\n            ADD</button>\r\n          <button id=\"btnAuthorize\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Authorize\">\r\n            <mat-icon  class=\"space\">check_circle</mat-icon>\r\n            AUTHORIZE</button>\r\n          <button  id=\"btnReject\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Reject\">\r\n            <mat-icon  class=\"space\">cancel</mat-icon>\r\n            REJECT</button>\r\n          <button  id=\"btnSave\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Save\">\r\n            <mat-icon  class=\"space\">check_circle</mat-icon>\r\n            SAVE</button>\r\n          <button  id=\"btnEdit\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Edit\">\r\n            <mat-icon  class=\"space\">edit</mat-icon>\r\n            EDIT</button>\r\n          <button  id=\"btnCancel\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Cancel\">\r\n            <mat-icon  class=\"space\">cancel</mat-icon>\r\n            CANCEL</button>\r\n          <button  id=\"btnDelete\" mat-raised-button class=\"d2kbutton\" (click)=\"OperationWork($event)\" [hidden]=\"!BtnState.Delete\">\r\n            <mat-icon  class=\"space\">delete_forever</mat-icon>\r\n            DELETE</button>\r\n        </div>\r\n\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/commoncomponent/common_btn_template/common_btn_template.component.ts ***!
  \**************************************************************************************/
/*! exports provided: Common_btn_templateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common_btn_templateComponent", function() { return Common_btn_templateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Common_btn_templateComponent = /** @class */ (function () {
    function Common_btn_templateComponent() {
        this.Operation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Common_btn_templateComponent.prototype.ngOnInit = function () {
    };
    Common_btn_templateComponent.prototype.OperationWork = function (event) {
        this.Operation.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Common_btn_templateComponent.prototype, "BtnState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Common_btn_templateComponent.prototype, "Operation", void 0);
    Common_btn_templateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common_btn_template',
            template: __webpack_require__(/*! ./common_btn_template.component.html */ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.html"),
            styles: [__webpack_require__(/*! ./common_btn_template.component.css */ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Common_btn_templateComponent);
    return Common_btn_templateComponent;
}());



/***/ }),

/***/ "./src/app/commoncomponent/textbox/textbox.component.css":
/*!***************************************************************!*\
  !*** ./src/app/commoncomponent/textbox/textbox.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commoncomponent/textbox/textbox.component.html":
/*!****************************************************************!*\
  !*** ./src/app/commoncomponent/textbox/textbox.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- fxFlex=\"{{flex}}\" -->\r\n<mat-form-field  id=\"{{ngId}}\"> \r\n  <input matInput \r\n        placeholder=\"{{ngLabel}}\" \r\n        [(ngModel)]=\"ngModel\" \r\n        [disabled]=\"ngDisable\"\r\n        (ngModelChange)=\"onModelChange()\"\r\n        maxlength=\"{{ngMaxLength}}\" \r\n        (blur)=\"onBlur($event)\" \r\n        (keyup)=\"onKeyUp($event)\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n        >\r\n</mat-form-field>\r\n\r\n<!-- {{ngLabel}}\r\n<input [(ngModel)]=\"ngModel\" \r\n        [disabled]=\"ngDisable\"\r\n        \r\n        (ngModelChange)=\"onModelChange()\"\r\n        maxlength=\"{{ngMaxLength}}\"\r\n        (blur)=\"onBlur($event)\" \r\n        (keyup)=\"onKeyUp($event)\"\r\n        (keydown)=\"onKeyDown($event)\"\r\n        > -->"

/***/ }),

/***/ "./src/app/commoncomponent/textbox/textbox.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/commoncomponent/textbox/textbox.component.ts ***!
  \**************************************************************/
/*! exports provided: TextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxComponent", function() { return TextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextboxComponent = /** @class */ (function () {
    function TextboxComponent(messageService) {
        this.messageService = messageService;
        this.ngBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngOnModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TextboxComponent.prototype.ngOnInit = function () {
    };
    TextboxComponent.prototype.ngAfterViewInit = function () {
        this.changeVisibility(this.ngVisible);
    };
    TextboxComponent.prototype.ngOnChanges = function (changes) {
        // tslint:disable-next-line:prefer-const
        for (var propName in changes) {
            if (propName === 'ngVisible') {
                this.changeVisibility(changes[propName].currentValue);
            }
        }
    };
    TextboxComponent.prototype.onBlur = function (event) {
        this.ngBlur.emit(event);
        if (this.ngDataType.toLowerCase() === 'mobile') {
            var pattern = /^[789]\d{9}$/;
            if ((this.ngModel != null && this.ngModel != undefined && this.ngModel != "") && !pattern.test(this.ngModel)) {
                this.ngModel = null;
                this.messageService.add({ severity: 'error', summary: "Notification", detail: 'Invalid Mobile Number, Mob No should start with 7,8,9.' });
            }
        }
        else if (this.ngDataType.toLowerCase() === 'email') {
            var pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if ((this.ngModel != null && this.ngModel != undefined && this.ngModel != "") && !pattern.test(this.ngModel)) {
                this.ngModel = null;
                this.messageService.add({ severity: 'error', summary: "Notification", detail: 'Invalid Email ID' });
            }
        }
    };
    TextboxComponent.prototype.onKeyUp = function (event) {
        // console.log('Child - Key Up');
        this.ngKeyUp.emit(event);
    };
    TextboxComponent.prototype.onKeyDown = function (event) {
        // console.log('Child - Key Down');
        try {
            // tslint:disable-next-line:prefer-const
            var specialKeys = (event.keyCode !== 8 && event.keyCode !== 9 && !(event.keyCode >= 35 && event.keyCode <= 40));
            if (this.ngType.toLowerCase() === 'number') {
                var pattern = /[0-9]/;
                // let inputChar = String.fromCharCode(event.keyCode);
                // tslint:disable-next-line:prefer-const
                var inputChar = event.key;
                if (specialKeys && !pattern.test(inputChar)) {
                    event.preventDefault();
                }
            }
            else if (this.ngType.toLowerCase() === 'alpha') {
                var pattern = /[a-zA-Z ]/;
                // let inputChar = String.fromCharCode(event.keyCode);
                // tslint:disable-next-line:prefer-const
                var inputChar = event.key;
                if (specialKeys && !pattern.test(inputChar)) {
                    event.preventDefault();
                }
            }
        }
        catch (error) {
        }
        this.ngKeyDown.emit(event);
    };
    TextboxComponent.prototype.onModelChange = function () {
        this.ngOnModelChange.emit(this.ngModel);
    };
    TextboxComponent.prototype.changeVisibility = function (currentValue) {
        if (currentValue !== undefined) {
            // tslint:disable-next-line:prefer-const
            var elementId = document.getElementById(this.ngId);
            if (elementId !== null) {
                if (currentValue) {
                    elementId.style['display'] = '';
                }
                else {
                    elementId.style['display'] = 'none';
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "ngId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "ngLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TextboxComponent.prototype, "ngVisible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TextboxComponent.prototype, "ngDisable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "ngType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "ngDataType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TextboxComponent.prototype, "ngMaxLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TextboxComponent.prototype, "flex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextboxComponent.prototype, "ngBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextboxComponent.prototype, "ngKeyUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextboxComponent.prototype, "ngKeyDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextboxComponent.prototype, "ngOnModelChange", void 0);
    TextboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'd2k-textbox',
            template: __webpack_require__(/*! ./textbox.component.html */ "./src/app/commoncomponent/textbox/textbox.component.html"),
            styles: [__webpack_require__(/*! ./textbox.component.css */ "./src/app/commoncomponent/textbox/textbox.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], TextboxComponent);
    return TextboxComponent;
}());



/***/ }),

/***/ "./src/app/commoncomponent/textbox/textbox.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/commoncomponent/textbox/textbox.module.ts ***!
  \***********************************************************/
/*! exports provided: TextboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxModule", function() { return TextboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textbox.component */ "./src/app/commoncomponent/textbox/textbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { FlexLayoutModule } from '@angular/flex-layout';
var TextboxModule = /** @class */ (function () {
    function TextboxModule() {
    }
    TextboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"]
                //FlexLayoutModule
            ],
            declarations: [_textbox_component__WEBPACK_IMPORTED_MODULE_5__["TextboxComponent"]],
            exports: [_textbox_component__WEBPACK_IMPORTED_MODULE_5__["TextboxComponent"]]
        })
    ], TextboxModule);
    return TextboxModule;
}());



/***/ }),

/***/ "./src/app/dashboard/GenerateButton/GenerateButton.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/GenerateButton/GenerateButton.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    fill: currentColor;\r\n    height: 27px;\r\n    width: 24px;\r\n}\r\n\r\n.d2kbutton {\r\n    background-color: #136fb3;\r\n  border-radius: 5px;\r\n  height: 39px;\r\n  color: white;\r\n    \r\n  }"

/***/ }),

/***/ "./src/app/dashboard/GenerateButton/GenerateButton.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/GenerateButton/GenerateButton.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"line-scale\"></ngx-spinner>\r\n\r\n<div>\r\n\r\n  <!-- <div>\r\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n          <label for=\"usr\">Frequency</label>\r\n          <br>\r\n          <p-dropdown [disabled]=\"true\" [style]=\"{'width':'100%'}\" [options]=\"FrequencyMasterList\" [(ngModel)]=\"Frequency\"\r\n            (onChange)=\"BindTimekey(Frequency)\"  \r\n            placeholder=\"Frequency\" filter=\"true\">\r\n            <ng-template let-item pTemplate=\"selectedItem\">\r\n              {{item.label}}\r\n            </ng-template>\r\n          </p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n          <label for=\"usr\">Date</label>\r\n          <br>\r\n          <p-dropdown [disabled]=\"selectedReportId==null\" [style]=\"{'width':'100%'}\" [options]=\"TimekeyList\" [(ngModel)]=\"TimekeyDt\"\r\n            (onChange)=\"setTimekey(TimekeyDt)\"  \r\n            placeholder=\"Date\" filter=\"true\">\r\n            <ng-template let-item pTemplate=\"selectedItem\">\r\n              {{item.label}}\r\n              <div style=\"float:right;margin-top: 2px;\">\r\n                <span (click)=\"fileUrl=null;TimekeyDt=null;Timekey=null;\">\r\n                  <i class=\"pi pi-times\"></i>\r\n                </span>\r\n              </div>\r\n            </ng-template>\r\n          </p-dropdown>\r\n        </div>\r\n  </div> -->\r\n\r\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12\">\r\n\r\n\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"form-group-footer\" style=\"margin-top: 5px;\">\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\r\n          <div class=\"button-row\">\r\n            <button mat-button (click)=\"onProcess()\" class=\"d2kbutton\" color=\"primary\" ng-reflect-color=\"primary\">\r\n              <mat-icon class=\"mat-icon material-icons right\">send</mat-icon>\r\n              <span>PROCESS</span>\r\n            </button>\r\n            <a href=\"{{fileUrl}}\" *ngIf=\"fileUrl!=null\" style=\"background:transparent ; color: white;background-color: #136fb3;\" mat-icon-button\r\n              matTooltip=\"Download Excel template\" target=\"_blank\">\r\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">cloud_download</mat-icon>\r\n            </a>\r\n            <div class=\"clearfix\"></div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/GenerateButton/GenerateButton.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/GenerateButton/GenerateButton.component.ts ***!
  \**********************************************************************/
/*! exports provided: GenerateButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateButtonComponent", function() { return GenerateButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GenerateButton_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateButton.service */ "./src/app/dashboard/GenerateButton/GenerateButton.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/api-handler.service */ "./src/app/providers/api-handler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateButtonComponent = /** @class */ (function () {
    function GenerateButtonComponent(messageService, _GenerateButtonService, dialog, _apiHandler, spinner) {
        this.messageService = messageService;
        this._GenerateButtonService = _GenerateButtonService;
        this.dialog = dialog;
        this._apiHandler = _apiHandler;
        this.spinner = spinner;
        // @Input() Frequency: string;
        // @Input() Timekey: string;
        this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
        this.fileUrl = null;
    }
    GenerateButtonComponent.prototype.valueChange = function (e) {
        this.fileUrl = null;
    };
    GenerateButtonComponent.prototype.ngOnInit = function () {
        debugger;
    };
    GenerateButtonComponent.prototype.onProcess = function () {
        var _this = this;
        debugger;
        if (!(this.validateData())) {
            return;
        }
        this._reportIdList = "";
        if (this.ReportID != null && this.ReportID != "" && this.ReportID != undefined) {
            this._reportIdList = this.ReportID;
        }
        else if (this.reportIdList != null && this.reportIdList != undefined && this.reportIdList.length > 0) {
            this.reportIdList.forEach(function (element) {
                _this._reportIdList = _this._reportIdList + "," + element.value;
            });
            this._reportIdList = this._reportIdList.slice(1);
        }
        else {
            this.filteredreportIdList.forEach(function (element) {
                _this._reportIdList = _this._reportIdList + "," + element.value;
            });
            this._reportIdList = this._reportIdList.slice(1);
        }
        console.log(this.ExcelId);
        console.log(this.userinfo.userID);
        console.log(this.Timekey);
        this._GenerateButtonService.ExcelWrite(this._reportIdList, this.userinfo.userID, this.Timekey)
            .subscribe(function (data) {
            var res = JSON.parse(data);
            if (res.data.result == 1) {
                _this.fileUrl = res.data.downloadFilePath;
                _this.msgs = [];
                _this.messageService.add({ severity: 'success', summary: 'Report Data Added', detail: 'Excel Write Successfuly!!!' });
            }
            else if (res.data.result == 0) {
                debugger;
                //this.spinner.hide();
                _this.fileUrl = null;
                _this.msgs = [];
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please try again !!' });
            }
        }, function (error) {
            _this.spinner.hide();
            _this.fileUrl = null;
            _this.msgs = [];
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: 'This Report Id is not Mapped properly !!' });
            console.error('auth error', error);
        });
    };
    GenerateButtonComponent.prototype.validateData = function () {
        debugger;
        this.msgs = [];
        if (this.selectedState == '' || this.selectedState == null || this.selectedState == undefined) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'State is mandatory.' });
            return false;
        }
        else if (this.ExcelId == '' || this.ExcelId == null || this.ExcelId == undefined) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Excel Template is mandatory.' });
            return false;
        }
        else {
            return true;
        }
    };
    GenerateButtonComponent.prototype.getTimekey = function () {
        var _this = this;
        this._GenerateButtonService
            .GetFrequencyDate().subscribe(function (data) {
            ;
            var resp = JSON.parse(data);
            if (resp.data.hasOwnProperty('yearly')) {
                _this.yearly = resp.data.yearly;
            }
            if (resp.data.hasOwnProperty('halfYearly')) {
                _this.halfYearly = resp.data.halfYearly;
            }
            if (resp.data.hasOwnProperty('quarterly')) {
                _this.quarterly = resp.data.quarterly;
            }
            if (resp.data.hasOwnProperty('monthly')) {
                _this.monthly = resp.data.monthly;
            }
            if (resp.data.hasOwnProperty('onMaturity')) {
                _this.onMaturity = resp.data.onMaturity;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerateButtonComponent.prototype, "selectedState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerateButtonComponent.prototype, "ReportID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerateButtonComponent.prototype, "ExcelId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerateButtonComponent.prototype, "excelSheetName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GenerateButtonComponent.prototype, "filteredreportIdList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GenerateButtonComponent.prototype, "reportIdList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GenerateButtonComponent.prototype, "fileUrl", void 0);
    GenerateButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-GenerateButton',
            template: __webpack_require__(/*! ./GenerateButton.component.html */ "./src/app/dashboard/GenerateButton/GenerateButton.component.html"),
            styles: [__webpack_require__(/*! ./GenerateButton.component.css */ "./src/app/dashboard/GenerateButton/GenerateButton.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _GenerateButton_service__WEBPACK_IMPORTED_MODULE_1__["GenerateButtonService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_5__["ApiHandler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], GenerateButtonComponent);
    return GenerateButtonComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/GenerateButton/GenerateButton.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/GenerateButton/GenerateButton.module.ts ***!
  \*******************************************************************/
/*! exports provided: GenerateButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateButtonModule", function() { return GenerateButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _GenerateButton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenerateButton.component */ "./src/app/dashboard/GenerateButton/GenerateButton.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GenerateButtonModule = /** @class */ (function () {
    function GenerateButtonModule() {
    }
    GenerateButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_4__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"], primeng_growl__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            declarations: [_GenerateButton_component__WEBPACK_IMPORTED_MODULE_2__["GenerateButtonComponent"]],
            exports: [_GenerateButton_component__WEBPACK_IMPORTED_MODULE_2__["GenerateButtonComponent"]]
        })
    ], GenerateButtonModule);
    return GenerateButtonModule;
}());



/***/ }),

/***/ "./src/app/dashboard/GenerateButton/GenerateButton.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/GenerateButton/GenerateButton.service.ts ***!
  \********************************************************************/
/*! exports provided: GenerateButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateButtonService", function() { return GenerateButtonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/api-handler.service */ "./src/app/providers/api-handler.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenerateButtonService = /** @class */ (function () {
    function GenerateButtonService(_apiHandler, spinner) {
        this._apiHandler = _apiHandler;
        this.spinner = spinner;
    }
    // {ReportId}/{UserLoginId}/{TimeKey}
    GenerateButtonService.prototype.ExcelWrite = function (reportId, UserId, TimeKey) {
        var _this = this;
        this.spinner.show();
        return this._apiHandler.callService('/api/ExcelWrite/getexcelwritedata/' + reportId + "/" + UserId + "/" + TimeKey, _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function (result) {
            _this.spinner.hide();
        });
    };
    //GetFrequencyDate
    GenerateButtonService.prototype.GetFrequencyDate = function () {
        var _this = this;
        this.spinner.hide();
        this.spinner.show();
        return this._apiHandler.callService('/api/ExcelWrite/GetFrequencyDate', _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function (result) {
            _this.spinner.hide();
        });
    };
    GenerateButtonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], GenerateButtonService);
    return GenerateButtonService;
}());



/***/ }),

/***/ "./src/app/dashboard/Global.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/Global.service.ts ***!
  \*********************************************/
/*! exports provided: ConnectedUserData, GroupByData, OrderByData, GroupByOrderBy, RowBreakData, PageState, GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedUserData", function() { return ConnectedUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByData", function() { return GroupByData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByData", function() { return OrderByData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOrderBy", function() { return GroupByOrderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowBreakData", function() { return RowBreakData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageState", function() { return PageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';

var ConnectedUserData = /** @class */ (function () {
    function ConnectedUserData() {
        this.UserName = "";
    }
    return ConnectedUserData;
}());

var GroupByData = /** @class */ (function () {
    function GroupByData() {
        this.GroupBy = [];
    }
    return GroupByData;
}());

var OrderByData = /** @class */ (function () {
    function OrderByData() {
        this.OrderBy = [];
    }
    return OrderByData;
}());

var GroupByOrderBy = /** @class */ (function () {
    function GroupByOrderBy() {
        this.FreeZedDataFields = [];
    }
    return GroupByOrderBy;
}());

var RowBreakData = /** @class */ (function () {
    function RowBreakData() {
    }
    return RowBreakData;
}());

var PageState = /** @class */ (function () {
    function PageState() {
        this.iscurrentState = false;
    }
    return PageState;
}());

var GlobalService = /** @class */ (function () {
    function GlobalService() {
        //For SignalR Connection Status
        this.ConnectedUserData = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //For GroupBy Collectuion 
        this.GroupByOrderBy = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        //For Row Breaking  Collectuion 
        this.RowBreakData = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // For GroupBy Data only
        this.GroupByData = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // For OrderBy Data only
        this.OrderByData = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Page State with Data
        this.PageState = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(GlobalService.prototype, "ConnectedUser", {
        get: function () {
            return this.ConnectedUserData;
        },
        set: function (src) {
            this.ConnectedUserData = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "GroupByOrderByData", {
        get: function () {
            return this.GroupByOrderBy;
        },
        set: function (src) {
            this.GroupByOrderBy = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "RowBreaking", {
        get: function () {
            return this.RowBreakData;
        },
        set: function (src) {
            this.RowBreakData = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "GroupBy", {
        get: function () {
            return this.GroupByData;
        },
        set: function (src) {
            this.GroupByData = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "OrderBy", {
        get: function () {
            return this.OrderByData;
        },
        set: function (src) {
            this.OrderByData = src;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalService.prototype, "PageStateData", {
        get: function () {
            return this.PageState;
        },
        set: function (src) {
            this.PageStateData = src;
        },
        enumerable: true,
        configurable: true
    });
    // Methods For Live data transfer 
    GlobalService.prototype.ChangeUserStatus = function (user) {
        this.ConnectedUser.next(user);
    };
    GlobalService.prototype.UpdateGroupByData = function (groupOrderby) {
        this.GroupByOrderByData.next(groupOrderby);
    };
    GlobalService.prototype.UpdateRowBreakingData = function (rows) {
        this.RowBreaking.next(rows);
    };
    GlobalService.prototype.UpdateGroupBy = function (gropby) {
        this.GroupBy.next(gropby);
    };
    GlobalService.prototype.UpdateOrderBy = function (orderby) {
        this.OrderBy.next(orderby);
    };
    GlobalService.prototype.UpdatePageState = function (state) {
        this.PageStateData.next(state);
    };
    GlobalService.prototype.search = function (arr, s) {
        var matches = [], i, key;
        var lookup = {};
        var result = [];
        for (i = arr.length; i--;) {
            for (key in arr[i]) {
                if (key != 'tableName' && arr[i][key] != null) {
                    var Key = arr[i].hasOwnProperty(key);
                    var value = arr[i][key].toString();
                    value = value.toLowerCase().indexOf(s.toLowerCase().trim());
                    if (Key && value > -1) {
                        if (matches.length > 0) {
                            if (!containsObject(arr[i], matches)) {
                                matches.push(arr[i]);
                            }
                        }
                        else {
                            matches.push(arr[i]);
                        }
                    }
                }
            }
        }
        function containsObject(obj, list) {
            var j;
            for (j = 0; j < list.length; j++) {
                if (list[j] === obj) {
                    return true;
                }
            }
            return false;
        }
        return matches;
    };
    ;
    GlobalService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    GlobalService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/SignalRGroups/SignalRGroups.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/SignalRGroups/SignalRGroups.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/SignalRGroups/SignalRGroups.component.ts ***!
  \********************************************************************/
/*! exports provided: SignalRGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRGroupsComponent", function() { return SignalRGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _Global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global.service */ "./src/app/dashboard/Global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GlobalService, ConnectedUserData, LockUnlockApplication } from '../../core/Global.service';


var SignalRGroupsComponent = /** @class */ (function () {
    function SignalRGroupsComponent(globalService, userService) {
        this.globalService = globalService;
        this.userService = userService;
        this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
        this.ConnectedUser = new _Global_service__WEBPACK_IMPORTED_MODULE_4__["ConnectedUserData"];
    }
    SignalRGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //SignalR Hub Connections
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]().withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HubURL).build();
        // To start connection 
        this._hubConnection.start().then(function () {
            console.log('MessageHub Connected');
            _this.changeUserStatus(true);
            _this.JoinSignalRGroups();
        });
        // After Group Join
        this._hubConnection.on('onJoinGroup', function (data) {
            var userifo = JSON.parse(localStorage.getItem('userinfo'));
            if (data.userid != userifo.userID) {
                console.log(data.userid + '  Join the Group');
                // this.ToastService.fireToast('toastr-success', data.userid + ' Join The Group');
            }
        });
        // send method will get messgae 
        this._hubConnection.on('send', function (data) {
            var obj = JSON.parse(data);
            _this.Message = obj[0];
            console.log(_this.Message);
        });
        //On Connection Close
        this._hubConnection.onclose(function (err) {
            // this.ToastService.fireToast('toastr-error', 'Reconnecting....');
            _this.changeUserStatus(false);
            _this.Reconnect();
        });
    };
    SignalRGroupsComponent.prototype.JoinSignalRGroups = function () {
        //To join SignalR Groups
        this._hubConnection
            .invoke('joinToGroup', this.userinfo.userID, this.userinfo.userGroup)
            .then(function () {
            // this.ToastService.fireToast('toastr-info', 'YOU HAVE JOINED ELS GROUPS !!!');
        })
            .catch(function (err) { return console.error(err); });
    };
    // Reconnect loop
    SignalRGroupsComponent.prototype.Reconnect = function () {
        var _this = this;
        this._hubConnection.start()
            .then(function () {
            _this.changeUserStatus(true);
            // this.ToastService.fireToast('toastr-success', 'Reconnected');
            _this.JoinSignalRGroups();
        })
            .catch(function (err) {
            // this.ToastService.fireToast('toastr-error', 'Reconnection Failed');
            _this.changeUserStatus(false);
            console.log('Reconnection Failed');
            _this.Reconnect();
        });
    };
    SignalRGroupsComponent.prototype.changeUserStatus = function (isOnline) {
        this.ConnectedUser.UserName = this.userinfo.userID;
        this.ConnectedUser.ConnectionStatus = isOnline;
        this.globalService.ChangeUserStatus(this.ConnectedUser);
    };
    SignalRGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-SignalRGroups',
            template: __webpack_require__(/*! ./SignalRGroups.component.html */ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.html"),
            styles: [__webpack_require__(/*! ./SignalRGroups.component.css */ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.css")]
        }),
        __metadata("design:paramtypes", [_Global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _providers_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SignalRGroupsComponent);
    return SignalRGroupsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/navbar/navbar.component */ "./src/app/dashboard/dashboard/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "./src/app/dashboard/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _commoncomponent_common_btn_template_common_btn_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commoncomponent/common_btn_template/common_btn_template.component */ "./src/app/commoncomponent/common_btn_template/common_btn_template.component.ts");
/* harmony import */ var _commoncomponent_CommonDirective_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commoncomponent/CommonDirective.directive */ "./src/app/commoncomponent/CommonDirective.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-drag-and-drop-lists */ "./node_modules/ngx-drag-and-drop-lists/index.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _commoncomponent_textbox_textbox_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../commoncomponent/textbox/textbox.module */ "./src/app/commoncomponent/textbox/textbox.module.ts");
/* harmony import */ var _SignalRGroups_SignalRGroups_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./SignalRGroups/SignalRGroups.component */ "./src/app/dashboard/SignalRGroups/SignalRGroups.component.ts");
/* harmony import */ var _Global_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Global.service */ "./src/app/dashboard/Global.service.ts");
/* harmony import */ var _GenerateButton_GenerateButton_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./GenerateButton/GenerateButton.module */ "./src/app/dashboard/GenerateButton/GenerateButton.module.ts");
/* harmony import */ var _data_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../data-table */ "./src/app/data-table/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _guards_stateofpage_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../guards/stateofpage.guard */ "./src/app/guards/stateofpage.guard.ts");
/* harmony import */ var _commoncomponent_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../commoncomponent/autocomplete/autocomplete.module */ "./src/app/commoncomponent/autocomplete/autocomplete.module.ts");
/* harmony import */ var _dashboard_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./dashboard/user-menu/user-menu.component */ "./src/app/dashboard/dashboard/user-menu/user-menu.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.service */ "./src/app/dashboard/dashboard/sidebar/sidebar.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Material



// Ng Prime Components Start
























// Ng Prime End













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_14__["DataViewModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_26__["AutoCompleteModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__["MultiSelectModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_29__["AccordionModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
                primeng_splitbutton__WEBPACK_IMPORTED_MODULE_25__["SplitButtonModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_19__["ListboxModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_24__["ToolbarModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_22__["GrowlModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_28__["PanelModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_13__["DndListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                _commoncomponent_textbox_textbox_module__WEBPACK_IMPORTED_MODULE_38__["TextboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_30__["TableModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_31__["SelectButtonModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_32__["CalendarModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_33__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_34__["MessageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_35__["ConfirmDialogModule"],
                _GenerateButton_GenerateButton_module__WEBPACK_IMPORTED_MODULE_41__["GenerateButtonModule"],
                _data_table__WEBPACK_IMPORTED_MODULE_42__["DataTableModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_43__["NgxSpinnerModule"],
                ngx_progressbar__WEBPACK_IMPORTED_MODULE_44__["NgProgressModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_37__["ToastModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _commoncomponent_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_46__["AutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_49__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_7__["dashboardRoutes"])
            ],
            providers: [
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_21__["MessageService"],
                _Global_service__WEBPACK_IMPORTED_MODULE_40__["GlobalService"],
                primeng_api__WEBPACK_IMPORTED_MODULE_36__["ConfirmationService"],
                _guards_stateofpage_guard__WEBPACK_IMPORTED_MODULE_45__["StateofpageGuard"],
                _dashboard_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_48__["SidebarService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_49__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _SignalRGroups_SignalRGroups_component__WEBPACK_IMPORTED_MODULE_39__["SignalRGroupsComponent"],
                _dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _commoncomponent_common_btn_template_common_btn_template_component__WEBPACK_IMPORTED_MODULE_10__["Common_btn_templateComponent"],
                _commoncomponent_CommonDirective_directive__WEBPACK_IMPORTED_MODULE_11__["CommonDirectiveDirective"],
                _dashboard_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_47__["UserMenuComponent"],
            ],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_stateofpage_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/stateofpage.guard */ "./src/app/guards/stateofpage.guard.ts");




var dashboardRoutes = [
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_guards_stateofpage_guard__WEBPACK_IMPORTED_MODULE_3__["StateofpageGuard"]] },
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\r\n    transition: margin-left .5s;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"main\" style=\"margin-left: 200px; margin-top: 40px;\">\r\n        <router-outlet></router-outlet>\r\n        <app-navbar></app-navbar>\r\n        <app-sidebar></app-sidebar>\r\n</div>\r\n<!-- <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" width=\"425\"></p-confirmDialog> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/navbar/navbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/dashboard/navbar/navbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbarbg{\r\n background-color: #136FB3;\r\n color: white;\r\n height: 46px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/navbar/navbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/dashboard/navbar/navbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress [color]=\"'yellow'\" [thick]=\"false\" [speed]=\"700\"></ng-progress>\r\n<p-confirmDialog></p-confirmDialog>\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n\r\n<nav class=\"navbar navbar-expand-sm navbar-dark fixed-top navbarbg\">\r\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"home\" routerLink=\"home\" style=\"cursor:pointer;color: white;\">D2K Dynamic Report</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" style=\"margin-left: 0.7em; font-size:18px;cursor:pointer;color: white;\" (click)=\"openNav()\">&#9776;</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <cdk-user-menu></cdk-user-menu>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/navbar/navbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isOpend = true;
    };
    NavbarComponent.prototype.openNav = function () {
        if (this.isOpend) {
            document.getElementById('mySidenav').style.width = '0';
            document.getElementById('main').style.marginLeft = '0';
            this.isOpend = false;
        }
        else {
            document.getElementById('mySidenav').style.width = '200px';
            document.getElementById('main').style.marginLeft = '200px';
            this.isOpend = true;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/dashboard/dashboard/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/dashboard/dashboard/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/sidebar/sidebar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/dashboard/sidebar/sidebar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-list, .mat-nav-list, .mat-selection-list{\r\n    padding-top: 0;\r\n}\r\n.mat-list-item{\r\n    color: white;\r\n    font-size: 12px;\r\n}\r\n.mat-nav-list a.active {\r\n    background:white;\r\n    color: #136FB3;\r\n    font-size: 15px;\r\n}\r\n.sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background: #136FB3;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n}\r\n/* .logoTxt{\r\n    background: #136FB3;\r\n    color: white;height: 46px;\r\n} */\r\n/* .sidenav .logoTxt {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    display: block;\r\n    transition: 0.3s;\r\n    color: white;\r\n} */\r\n/* .sidenav .logoTxt:hover {\r\n    color: black;\r\n} */\r\n/* \r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n} */\r\n/* \r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n} */"

/***/ }),

/***/ "./src/app/dashboard/dashboard/sidebar/sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dashboard/sidebar/sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n\r\n  <mat-nav-list style=\"margin-top:40px;\">\r\n    <a mat-list-item *ngFor=\"let menu of Menus\" routerLinkActive=\"active\" [routerLink]=\"menu.actionName\">\r\n      <mat-icon mat-list-icon>{{menu.icon}}</mat-icon>{{menu.menuCaption}}\r\n    </a>\r\n  </mat-nav-list>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/dashboard/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/dashboard/dashboard/sidebar/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_authService, _router, sidebarService) {
        var _this = this;
        this._authService = _authService;
        this._router = _router;
        this.sidebarService = sidebarService;
        this.logout = function () {
            _this._authService.clear();
            var to = _this._authService.getRedirectUrl() || '/login';
            _this._router.navigate([to]);
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.bindCrisMacMenus();
    };
    SidebarComponent.prototype.bindCrisMacMenus = function () {
        var _this = this;
        this.sidebarService
            .getCrismacMenu()
            .subscribe(function (data) {
            var res = JSON.parse(data);
            if (res.data.hasOwnProperty('sysCrisMacMenu')) {
                _this.Menus = res.data.sysCrisMacMenu;
            }
        });
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = '0';
        document.getElementById('main').style.marginLeft = '0';
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/dashboard/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/dashboard/dashboard/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/sidebar/sidebar.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard/sidebar/sidebar.service.ts ***!
  \****************************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-handler.service */ "./src/app/providers/api-handler.service.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarService = /** @class */ (function () {
    function SidebarService(_apiHandler, ngProgress) {
        this._apiHandler = _apiHandler;
        this.ngProgress = ngProgress;
    }
    SidebarService.prototype.getCrismacMenu = function () {
        var _this = this;
        this.ngProgress.done();
        this.ngProgress.start();
        return this._apiHandler.callService('/api/Menu/getCrisMacMenu', _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function (result) {
            _this.ngProgress.done();
        });
    };
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_2__["NgProgress"]])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/user-menu/user-menu.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/user-menu/user-menu.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\r\n  <button tabindex=\"-1\" mat-button (click)=\"isOpen = !isOpen\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\">\r\n    <span fxLayout=\"row\">\r\n      <span class=\"name\" fxHide fxShow.gt-xs>{{currentUser.username}}</span>\r\n    </span>\r\n    <mat-icon class=\"icon\" fxHide fxShow.gt-xs>keyboard_arrow_down</mat-icon>\r\n  </button>\r\n\r\n\r\n  <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\r\n    <div class=\"content\">\r\n      <mat-nav-list>\r\n        <mat-list-item routerLinkActive=\"active\" routerLink=\"usersManagment\">\r\n          <a matLine>Users</a>\r\n          <button mat-icon-button>\r\n            <mat-icon>supervisor_account</mat-icon>\r\n          </button>\r\n        </mat-list-item>\r\n        <mat-list-item routerLinkActive=\"active\" routerLink=\"changepassword\">\r\n          <a matLine>Password</a>\r\n          <button mat-icon-button>\r\n            <mat-icon>settings</mat-icon>\r\n          </button>\r\n        </mat-list-item>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <mat-list-item (click)=\"logout()\">\r\n          <a matLine>Logout</a>\r\n          <button mat-icon-button>\r\n            <mat-icon>exit_to_app</mat-icon>\r\n          </button>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/user-menu/user-menu.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard/user-menu/user-menu.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all .25s linear, max-height .25s linear, opacity .25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/user-menu/user-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard/user-menu/user-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/auth.service */ "./src/app/providers/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef, _authService, _router) {
        var _this = this;
        this.elementRef = elementRef;
        this._authService = _authService;
        this._router = _router;
        this.isOpen = false;
        this.currentUser = JSON.parse(localStorage.getItem('userinfo'));
        this.logout = function () {
            _this._authService.clear();
            var to = _this._authService.getRedirectUrl() || '/login';
            _this._router.navigate([to]);
        };
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/dashboard/dashboard/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/dashboard/dashboard/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .ActionButton {\r\n    text-transform: none;\r\n    min-height: 27px;\r\n    min-width: 0px;\r\n    line-height: 0px;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    border: 0;\r\n   \r\n    background-color: #136fb3;\r\n    color: white;\r\n  }\r\n\r\n  .headerstyle {\r\n    background-color: #136fb3 !important;\r\n    font-size: 15px !important;\r\n    color: #fff !important;\r\n    font-weight: 400 !important;\r\n    border: 1px dotted #d4d4d4;\r\n  } */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"line-scale\"></ngx-spinner>\r\n<!-- <div style=\"margin-top: 15px;\" class=\"alert alert-primary\" role=\"alert\">\r\n  Dashboard\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.service */ "./src/app/dashboard/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    /**
     * it will display Dashboard Data
     */
    function HomeComponent(_HomeService) {
        this._HomeService = _HomeService;
        this.arrStateName = [];
        this.arrExcelCount = [];
        this.arrSheetCount = [];
        this.arrayReportCatalog = [];
        this.arrayReportPending = [];
        this.arrayMappingDone = [];
        this.arrayMappingPending = [];
        this.options = {
            title: {
                display: true,
                text: 'Analysis Of Reports',
                fontSize: 16
            },
            legend: {
                position: 'top'
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.GetDashBoardData();
    };
    HomeComponent.prototype.GetDashBoardData = function () {
        var _this = this;
        this._HomeService.getDashboardMetaData().subscribe(function (data) {
            var resp = JSON.parse(data);
            if (resp.data.hasOwnProperty('chartfilterStarte')) {
                _this.StateMasterData = resp.data.chartfilterStarte;
            }
            if (resp.data.hasOwnProperty('totaL_COUNT')) {
                _this.totalAnalysisMETA = resp.data.totaL_COUNT[0];
            }
            if (resp.data.hasOwnProperty('dashboarD_DTLS')) {
                _this.dashboardMetaData = resp.data.dashboarD_DTLS;
                _this.tempDashboardMeta = resp.data.dashboarD_DTLS;
                _this.AssignForSpecificDashboardData();
            }
        });
    };
    HomeComponent.prototype.AssignForSpecificDashboardData = function () {
        var _this = this;
        if (this.dashboardMetaData) {
            this.dashboardMetaData.forEach(function (element) {
                _this.arrStateName.push(element.statenames);
                _this.arrExcelCount.push(element.excel_Upload);
                _this.arrSheetCount.push(element.nO_OF_SHEET);
                _this.arrayReportCatalog.push(element.report_Cat_Count);
                _this.arrayReportPending.push(element.report_Cat_Pending_Count);
                _this.arrayMappingDone.push(element.mapped);
                _this.arrayMappingPending.push(element.unmapped);
            });
            this.AssignMetaDataToLineChartData();
        }
    };
    HomeComponent.prototype.AssignMetaDataToLineChartData = function () {
        this.data = {
            labels: this.arrStateName,
            datasets: [
                {
                    label: 'No. Uploaded Excel',
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5',
                    data: this.arrExcelCount
                },
                {
                    label: 'No. of Sheet Identify',
                    backgroundColor: '#9CCC65',
                    borderColor: '#9CCC65',
                    data: this.arrSheetCount
                },
                {
                    label: 'No. of Reports Created',
                    backgroundColor: 'pink',
                    borderColor: 'pink',
                    data: this.arrayReportCatalog
                },
                {
                    label: 'No. of Reports Pending for Creation',
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    data: this.arrayReportPending
                },
                {
                    label: 'No. of Reports Mapping Done',
                    backgroundColor: 'yellow',
                    borderColor: 'yellow',
                    data: this.arrayMappingDone
                },
                {
                    label: 'No. of Reports Mapping Pending',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    data: this.arrayMappingPending
                }
            ]
        };
    };
    HomeComponent.prototype.FilterByStates = function () {
        var _this = this;
        this.arrStateName = [];
        this.arrExcelCount = [];
        this.arrSheetCount = [];
        this.arrayReportCatalog = [];
        this.arrayReportPending = [];
        this.arrayMappingDone = [];
        this.arrayMappingPending = [];
        if (this.selectedStates.length > 0) {
            this.dashboardMetaData = [];
            this.selectedStates.forEach(function (element) {
                var stateData = _this.tempDashboardMeta.filter(function (x) { return x.statenames == element; });
                _this.dashboardMetaData.push(stateData[0]);
            });
        }
        else {
            this.dashboardMetaData = this.tempDashboardMeta;
        }
        this.AssignForSpecificDashboardData();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/home/home.service.ts ***!
  \************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/api-handler.service */ "./src/app/providers/api-handler.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeService = /** @class */ (function () {
    function HomeService(_apiHandler, spinner, ngProgress) {
        this._apiHandler = _apiHandler;
        this.spinner = spinner;
        this.ngProgress = ngProgress;
    }
    HomeService.prototype.getDashboardMetaData = function () {
        var _this = this;
        this.ngProgress.done();
        this.ngProgress.start();
        return this._apiHandler.callService('/api/Dashboard/getDashboarddisplayDetails', _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function (result) {
            _this.ngProgress.done();
        });
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_api_handler_service__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_4__["NgProgress"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/data-table/components/column.ts":
/*!*************************************************!*\
  !*** ./src/app/data-table/components/column.ts ***!
  \*************************************************/
/*! exports provided: DataTableColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumn", function() { return DataTableColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTableColumn = /** @class */ (function () {
    function DataTableColumn() {
        this.sortable = false;
        this.resizable = false;
        this.visible = true;
        this.styleClassObject = {}; // for [ngClass]
    }
    DataTableColumn.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumn.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumn.prototype._initCellClass = function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
        var _a;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataTableColumn.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "sortable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "resizable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataTableColumn.prototype, "property", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataTableColumn.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], DataTableColumn.prototype, "cellColors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTableColumn.prototype, "searchable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('dataTableCell'),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "cellTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('dataTableHeader'),
        __metadata("design:type", Object)
    ], DataTableColumn.prototype, "headerTemplate", void 0);
    DataTableColumn = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'data-table-column'
        })
    ], DataTableColumn);
    return DataTableColumn;
}());



/***/ }),

/***/ "./src/app/data-table/components/header.css":
/*!**************************************************!*\
  !*** ./src/app/data-table/components/header.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-table-header {\r\n    min-height: 25px;\r\n    margin-bottom: 10px;\r\n}\r\n.title {\r\n    display: inline-block;\r\n    margin: 5px 0 0 5px;\r\n}\r\n.Add-button-panel {\r\n    float: left;\r\n}\r\n.button-panel {\r\n    float: right;\r\n}\r\n.button-panel button {\r\n    outline: none !important;\r\n}\r\n.column-selector-wrapper {\r\n    position: relative;\r\n}\r\n.column-selector-box {\r\n    box-shadow: 0 0 13px lightgray;\r\n    background: whitesmoke;\r\n    width: 200px;\r\n    padding: 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 1px;\r\n    z-index: 1060;\r\n}\r\n.column-selector-box .checkbox {\r\n    margin-bottom: 4px;\r\n}\r\n.column-selector-fixed-column {\r\n    font-style: italic;\r\n}\r\n"

/***/ }),

/***/ "./src/app/data-table/components/header.html":
/*!***************************************************!*\
  !*** ./src/app/data-table/components/header.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css\"/> -->\r\n\r\n<div class=\"data-table-header\" style=\"padding-bottom:20px; \">\r\n\r\n  <h4 class=\"title\" [textContent]=\"dataTable.headerTitle\"></h4>\r\n  <div class=\"Add-button-panel\" *ngIf=\"dataTable.IsAddButton\">\r\n    <button tabindex=\"-1\" (click)=\"dataTable.OnAddBtnClick()\" style=\"background:transparent ; color: white;background-color: #136fb3;\"\r\n      matTooltip=\"Add New\" mat-button>\r\n      <i class=\"material-icons\">\r\n        add_circle\r\n      </i>\r\n      Add New\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"button-panel\">\r\n\r\n    <button *ngIf=\"dataTable.ExportToExcel\" type=\"button\" (click)=\"dataTable.OnExcelExport()\" mat-mini-fab style=\"margin-left: 5px; background:transparent ; color: white;\">\r\n      <img width=\"22\" src=\"https://www.markating.nl/app/uploads/2016/06/excel-icon-small-22.png\">\r\n    </button>\r\n\r\n    <button (click)=\"columnSelectorOpen = !columnSelectorOpen; $event.stopPropagation()\" tabindex=\"-1\" style=\"margin-left:10px; background:transparent ; color: white;background-color: #136fb3;\"\r\n      matTooltip=\"Manage columns\" mat-mini-fab>\r\n      <i class=\"material-icons\">\r\n        settings\r\n      </i>\r\n    </button>\r\n\r\n  </div>\r\n  <div class=\"button-panel\" style=\"width: 25%; margin-left: 10px;\">\r\n    <input style=\"float: left;\" [(ngModel)]=\"dataTable.searchText\" placeholder=\"Search\" class=\"form-control input-sm\"\r\n      (keyup)=\"dataTable.search()\" type=\"text\">\r\n\r\n  </div>\r\n  <div *ngIf=\"dataTable.filterByTags\" style=\"float: left; width: 20%; margin-left: 10px;\">\r\n    <p-multiSelect \r\n          [style]=\"{'width':'100%'}\" [displaySelectedLabel]=\"true\" [maxSelectedLabels]=\"2\"\r\n          [options]=\"dataTable.TagListDropDownOptionData\" \r\n          (onChange)=\"dataTable.FilterChangeTags(dataTable.SelectedTagAltkeys)\" \r\n          [(ngModel)]=\"dataTable.SelectedTagAltkeys\" [style]=\"{'width':'100%','height': '38px'}\" filter=\"true\" defaultLabel=\"Filter By Tags\">\r\n    </p-multiSelect>\r\n  </div>\r\n  <div style=\"float: left; width: 30%; margin-left: 10px;\">\r\n    <p-dropdown (onChange)=\"dataTable.setStateName(dataTable.SelectedState)\" *ngIf=\"dataTable.StateDropDownOptionData != undefined\" [options]=\"dataTable.StateDropDownOptionData\"\r\n      [(ngModel)]=\"dataTable.SelectedState\" placeholder=\"Filter By State\" [style]=\"{'width':'100%','height': '40px'}\" filter=\"true\">\r\n      <ng-template let-item pTemplate=\"selectedItem\">\r\n          {{item.label}}\r\n          <div style=\"float:right;margin-top: 2px;\">\r\n            <span   (click)=\"dataTable.SelectedState = null;dataTable.setStateName(null)\">\r\n              <i class=\"pi pi-times\"></i>\r\n            </span>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-ele pTemplate=\"item\">\r\n          {{ele.label}}\r\n        </ng-template>\r\n    </p-dropdown>\r\n  </div>\r\n\r\n  <div class=\"column-selector-wrapper\" (click)=\"$event.stopPropagation()\">\r\n    <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\r\n      <div *ngIf=\"dataTable.expandableRows\" class=\"column-selector-fixed-column checkbox\">\r\n        <label>\r\n          <mat-checkbox [(ngModel)]=\"dataTable.expandColumnVisible\"></mat-checkbox>\r\n          <span>{{dataTable.translations.expandColumn}}</span>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"dataTable.indexColumn\" class=\"column-selector-fixed-column checkbox\">\r\n        <label>\r\n          <mat-checkbox [(ngModel)]=\"dataTable.indexColumnVisible\"></mat-checkbox>\r\n          <span>{{dataTable.translations.indexColumn}}</span>\r\n        </label>\r\n      </div>\r\n      <div *ngIf=\"dataTable.selectColumn\" class=\"column-selector-fixed-column checkbox\">\r\n        <label>\r\n          <mat-checkbox [(ngModel)]=\"dataTable.selectColumnVisible\"></mat-checkbox>\r\n          <span>{{dataTable.translations.selectColumn}}</span>\r\n        </label>\r\n      </div>\r\n      <div *ngFor=\"let column of dataTable.columns\" class=\"column-selector-column checkbox\">\r\n        <label>\r\n          <mat-checkbox [(ngModel)]=\"column.visible\"></mat-checkbox>\r\n          <span [textContent]=\"column.header\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/data-table/components/header.ts":
/*!*************************************************!*\
  !*** ./src/app/data-table/components/header.ts ***!
  \*************************************************/
/*! exports provided: DataTableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeader", function() { return DataTableHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/data-table/components/table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataTableHeader = /** @class */ (function () {
    function DataTableHeader(dataTable) {
        this.dataTable = dataTable;
        this.columnSelectorOpen = false;
    }
    DataTableHeader.prototype._closeSelector = function () {
        this.columnSelectorOpen = false;
    };
    DataTableHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table-header',
            template: __webpack_require__(/*! ./header.html */ "./src/app/data-table/components/header.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/app/data-table/components/header.css")],
            host: {
                '(document:click)': '_closeSelector()'
            }
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]; }))),
        __metadata("design:paramtypes", [_table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]])
    ], DataTableHeader);
    return DataTableHeader;
}());



/***/ }),

/***/ "./src/app/data-table/components/pagination.css":
/*!******************************************************!*\
  !*** ./src/app/data-table/components/pagination.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination-box {\r\n    position: relative;\r\n    margin-top: -10px;\r\n}\r\n.pagination-range {\r\n    margin-top: 7px;\r\n    margin-left: 3px;\r\n    display: inline-block;\r\n}\r\n.pagination-controllers {\r\n    float: right;\r\n}\r\n.pagination-controllers input {\r\n    min-width: 60px;\r\n    /*padding: 1px 0px 0px 5px;*/\r\n    text-align: right;\r\n}\r\n.pagination-limit {\r\n    margin-right: 25px;\r\n    display: inline-table;\r\n    width: 150px;\r\n}\r\n.pagination-pages {\r\n    display: inline-block;\r\n}\r\n.pagination-page {\r\n    width: 110px;\r\n    display: inline-table;\r\n}\r\n.pagination-box button {\r\n    outline: none !important;\r\n}\r\n.pagination-prevpage,\r\n.pagination-nextpage,\r\n.pagination-firstpage,\r\n.pagination-lastpage {\r\n    vertical-align: top;\r\n}\r\n.pagination-reload {\r\n    color: gray;\r\n    font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/data-table/components/pagination.html":
/*!*******************************************************!*\
  !*** ./src/app/data-table/components/pagination.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-box\">\r\n  <div class=\"pagination-range\">\r\n    {{dataTable.translations.paginationRange}}:\r\n    <span [textContent]=\"dataTable.offset + 1\"></span>\r\n    -\r\n    <span [textContent]=\"[dataTable.offset + dataTable.limit , dataTable.itemCount] | min\"></span>\r\n    /\r\n    <span [textContent]=\"dataTable.itemCount\"></span>\r\n  </div>\r\n  <div class=\"pagination-controllers\">\r\n    <div class=\"pagination-pages\">\r\n      <div class=\"pagination-page\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\" >\r\n            <!-- <span>{{dataTable.translations.paginationLimit}}:</span> -->\r\n            <!-- <span [textContent]=\"dataTable.lastPage\"></span> -->\r\n            Limit\r\n          </div>\r\n          <input #limitInput type=\"number\"  style=\"top: -9px; width: 10px !important;\" class=\"form-control\" min=\"1\" step=\"1\" [ngModel]=\"limit\" (blur)=\"limit = limitInput.value\"\r\n            (keyup.enter)=\"limit = limitInput.value\" (keyup.esc)=\"limitInput.value = limit\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"pagination-pages\">\r\n      <button color=\"primary\" [disabled]=\"dataTable.offset <= 0\" (click)=\"pageFirst()\" mat-mini-fab>\r\n        <i class=\"material-icons\">\r\n          first_page\r\n        </i>\r\n      </button>\r\n      <button color=\"primary\" [disabled]=\"dataTable.offset <= 0\" (click)=\"pageBack()\" mat-mini-fab>\r\n        <i class=\"material-icons\">\r\n          arrow_left\r\n        </i>\r\n      </button>\r\n      <div class=\"pagination-page\">\r\n        <div class=\"input-group\">\r\n          <input #pageInput type=\"number\" class=\"form-control\" min=\"1\" step=\"1\" max=\"{{maxPage}}\" [ngModel]=\"page\" (blur)=\"page = pageInput.value\"\r\n            (keyup.enter)=\"page = pageInput.value\" style=\"margin-left:9px;\" (keyup.esc)=\"pageInput.value = page\" />\r\n          <div class=\"input-group-addon\" style=\"margin: 10px;\">\r\n            <span>/</span>\r\n            <span [textContent]=\"dataTable.lastPage\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button color=\"primary\" [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\" (click)=\"pageForward()\" mat-mini-fab>\r\n        <i class=\"material-icons\">\r\n          arrow_right\r\n        </i>\r\n      </button>\r\n      <button color=\"primary\" [disabled]=\"(dataTable.offset + dataTable.limit) >= dataTable.itemCount\" (click)=\"pageLast()\" mat-mini-fab>\r\n        <i class=\"material-icons\">\r\n          last_page\r\n        </i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/data-table/components/pagination.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-table/components/pagination.ts ***!
  \*****************************************************/
/*! exports provided: DataTablePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagination", function() { return DataTablePagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/data-table/components/table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataTablePagination = /** @class */ (function () {
    function DataTablePagination(dataTable) {
        this.dataTable = dataTable;
    }
    DataTablePagination.prototype.pageBack = function () {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
    };
    DataTablePagination.prototype.pageForward = function () {
        this.dataTable.offset += this.dataTable.limit;
    };
    DataTablePagination.prototype.pageFirst = function () {
        this.dataTable.offset = 0;
    };
    DataTablePagination.prototype.pageLast = function () {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
    };
    Object.defineProperty(DataTablePagination.prototype, "maxPage", {
        get: function () {
            return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "limit", {
        get: function () {
            if (this.dataTable.itemCount == 0) {
                return this.dataTable.itemCount;
            }
            return this.dataTable.limit;
        },
        set: function (value) {
            this.dataTable.limit = Number(value); // TODO better way to handle that value of number <input> is string?
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "page", {
        get: function () {
            return this.dataTable.page;
        },
        set: function (value) {
            this.dataTable.page = Number(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagination = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table-pagination',
            template: __webpack_require__(/*! ./pagination.html */ "./src/app/data-table/components/pagination.html"),
            styles: [__webpack_require__(/*! ./pagination.css */ "./src/app/data-table/components/pagination.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]; }))),
        __metadata("design:paramtypes", [_table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]])
    ], DataTablePagination);
    return DataTablePagination;
}());



/***/ }),

/***/ "./src/app/data-table/components/row.css":
/*!***********************************************!*\
  !*** ./src/app/data-table/components/row.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-column {\r\n    text-align: center;\r\n}\r\n\r\n.row-expand-button {\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/data-table/components/row.html":
/*!************************************************!*\
  !*** ./src/app/data-table/components/row.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr\tclass=\"data-table-row\"\r\n    [title]=\"getTooltip()\"\r\n    [class.row-odd]=\"index % 2 === 0\"\r\n    [class.row-even]=\"index % 2 === 1\"\r\n    [class.selected]=\"selected\"\r\n    [class.clickable]=\"dataTable.selectOnRowClick\"\r\n    (dblclick)=\"dataTable.rowDoubleClicked(_this, $event)\"\r\n    (click)=\"dataTable.rowClicked(_this, $event)\"\r\n    >\r\n    <td [hide]=\"!dataTable.expandColumnVisible\" (click)=\"expanded = !expanded; $event.stopPropagation()\" class=\"row-expand-button\">\r\n        <!-- <span class=\"glyphicon glyphicon-triangle-right\" [hide]=\"expanded\"></span>\r\n        <span class=\"glyphicon glyphicon-triangle-bottom\" [hide]=\"!expanded\"></span> -->\r\n        <i  [hide]=\"expanded\" class=\"material-icons\">chevron_right</i>\r\n        <i  [hide]=\"!expanded\" class=\"material-icons\">expand_more</i>\r\n    </td> \r\n    <td [hide]=\"!dataTable.indexColumnVisible\" class=\"index-column\" [textContent]=\"displayIndex\"></td>\r\n    <td [hide]=\"!dataTable.selectColumnVisible\" class=\"select-column\">\r\n        <input type=\"checkbox\" [(ngModel)]=\"selected\"/>\r\n    </td>\r\n \r\n    <td *ngFor=\"let column of dataTable.columns\" [hide]=\"!column.visible\" [ngClass]=\"column.styleClassObject\" class=\"data-column\" [style.background-color]=\"column.getCellColor(_this, index)\">\r\n        <div *ngIf=\"!column.cellTemplate\" [textContent]=\"item[column.property]\"></div>\r\n        <div *ngIf=\"column.cellTemplate\" [ngTemplateOutlet]=\"column.cellTemplate\" [ngTemplateOutletContext]=\"{column: column, row: _this, item: item}\"></div>\r\n    </td>\r\n</tr>\r\n<tr *ngIf=\"dataTable.expandableRows\" [hide]=\"!expanded\" class=\"row-expansion\">\r\n    <td [attr.colspan]=\"dataTable.columnCount\">\r\n        <div [ngTemplateOutlet]=\"dataTable.expandTemplate\" [ngTemplateOutletContext]=\"{row: _this, item: item}\"></div>\r\n    </td>\r\n</tr>\r\n"

/***/ }),

/***/ "./src/app/data-table/components/row.ts":
/*!**********************************************!*\
  !*** ./src/app/data-table/components/row.ts ***!
  \**********************************************/
/*! exports provided: DataTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRow", function() { return DataTableRow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/data-table/components/table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DataTableRow = /** @class */ (function () {
    function DataTableRow(dataTable) {
        this.dataTable = dataTable;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._this = this; // FIXME is there no template keyword for this in angular 2?
    }
    Object.defineProperty(DataTableRow.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRow.prototype, "displayIndex", {
        // other:
        get: function () {
            if (this.dataTable.pagination) {
                return this.dataTable.displayParams.offset + this.index + 1;
            }
            else {
                return this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataTableRow.prototype.getTooltip = function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    DataTableRow.prototype.ngOnDestroy = function () {
        this.selected = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableRow.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DataTableRow.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableRow.prototype, "selectedChange", void 0);
    DataTableRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[dataTableRow]',
            template: __webpack_require__(/*! ./row.html */ "./src/app/data-table/components/row.html"),
            styles: [__webpack_require__(/*! ./row.css */ "./src/app/data-table/components/row.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]; }))),
        __metadata("design:paramtypes", [_table__WEBPACK_IMPORTED_MODULE_1__["DataTable"]])
    ], DataTableRow);
    return DataTableRow;
}());



/***/ }),

/***/ "./src/app/data-table/components/table.css":
/*!*************************************************!*\
  !*** ./src/app/data-table/components/table.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* bootstrap override: */\r\n\r\n:host ::ng-deep .data-table.table > tbody+tbody {\r\n    border-top: none;\r\n}\r\n\r\n:host ::ng-deep .data-table.table td {\r\n    vertical-align: middle;\r\n}\r\n\r\n:host ::ng-deep .data-table > thead > tr > th,\r\n:host ::ng-deep .data-table > tbody > tr > td {\r\n\toverflow: hidden;\r\n}\r\n\r\n/* I can't use the bootstrap striped table, because of the expandable rows */\r\n\r\n:host ::ng-deep .row-odd {\r\n    background-color: #F6F6F6;\r\n}\r\n\r\n:host ::ng-deep .row-even {\r\n    background-color:lightyellow;\r\n\r\n}\r\n\r\n.data-table .substitute-rows > tr:hover,\r\n:host ::ng-deep .data-table .data-table-row:hover {\r\n    background-color: #cce5ff;\r\n}\r\n\r\n/* table itself: */\r\n\r\n.data-table {\r\n    /* box-shadow: 0 0 15px rgb(236, 236, 236); */\r\n    table-layout: fixed;\r\n}\r\n\r\n/* header cells: */\r\n\r\n.column-header {\r\n    position: relative;\r\n}\r\n\r\n.expand-column-header {\r\n\twidth: 50px;\r\n}\r\n\r\n.select-column-header {\r\n\twidth: 50px;\r\n\ttext-align: center;\r\n}\r\n\r\n.index-column-header {\r\n\twidth: 40px;\r\n}\r\n\r\n.column-header.sortable {\r\n    cursor: pointer;\r\n}\r\n\r\n.column-header .column-sort-icon {\r\n\tfloat: right;\r\n}\r\n\r\n.column-header.resizable .column-sort-icon {\r\n    margin-right: 8px;\r\n}\r\n\r\n.column-header .column-sort-icon .column-sortable-icon {\r\n    color: lightgray;\r\n}\r\n\r\n.column-header .column-resize-handle {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 8px;\r\n    height: 100%;\r\n    cursor: col-resize;\r\n    \r\n}\r\n\r\n/* cover: */\r\n\r\n.data-table-box {\r\n    position: relative;\r\n}\r\n\r\n.loading-cover {\r\n   position: absolute;\r\n   width: 100%;\r\n   height: 100%;\r\n   background-color: rgba(255, 255, 255, 0.3);\r\n   top: 0;\r\n}\r\n\r\n.headerstyle {\r\n    background-color: #136fb3 !important;\r\n    color: #fff !important;\r\n  }"

/***/ }),

/***/ "./src/app/data-table/components/table.html":
/*!**************************************************!*\
  !*** ./src/app/data-table/components/table.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-table-wrapper\" style=\"background:#F0F2F4;padding: 10px;\">\r\n  <data-table-header *ngIf=\"header\"></data-table-header>\r\n\r\n  <div class=\"data-table-box\" >\r\n    <table class=\"table table-condensed table-bordered data-table\">\r\n      <thead class=\"headerstyle\">\r\n        <tr>\r\n          <th [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\r\n            <th [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\r\n              <span [textContent]=\"indexColumnHeader\"></span>\r\n            </th>\r\n            <th [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\r\n              <input [hide]=\"!multiSelect\" type=\"checkbox\" [(ngModel)]=\"selectAllCheckbox\" />\r\n            </th>\r\n            <th *ngFor=\"let column of columns\" #th [hide]=\"!column.visible\" (click)=\"headerClicked(column, $event)\" [class.sortable]=\"column.sortable\"\r\n              [class.resizable]=\"column.resizable\" [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\">\r\n              <span *ngIf=\"!column.headerTemplate\" style=\"font-weight:normal;\" [textContent]=\"column.header\"></span>\r\n              <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\" [ngTemplateOutletContext]=\"{column: column}\"></span>\r\n\r\n              <!-- <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\r\n                <span [hide]=\"column.property === sortBy\">\r\n                  <i class=\"material-icons\" >swap_vert</i>\r\n                </span>\r\n                <span [hide]=\"column.property !== sortBy\">\r\n                  <span [hide]=\"sortAsc\">\r\n                    <i class=\"material-icons\">\r\n                      arrow_drop_up\r\n                    </i>\r\n                  </span>\r\n                  <span [hide]=\"!sortAsc\">\r\n                    <i class=\"material-icons\">\r\n                      arrow_drop_down\r\n                    </i>\r\n                  </span>\r\n                </span>\r\n              </span> -->\r\n              <span *ngIf=\"column.resizable\" class=\"column-resize-handle\" (mousedown)=\"resizeColumnStart($event, column, th)\">\r\n\r\n              </span>\r\n              <!-- <input *ngIf=\"column.searchable\" placeholder=\"Search\" class=\"form-control input-sm\" style=\"height: 25px; margin-top: 5px;\"\r\n                type=\"text\" [(ngModel)]=\"dataFilter[column.property]\">\r\n              <div *ngIf=\"column.searchable==undefined && NoSearchCss==false\" style=\"height: 30px;\">\r\n\r\n              </div> -->\r\n            </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let item of items | paginate: { itemsPerPage: itemsOnPage, currentPage: p } |rowfilter:search; let index=index\"\r\n        class=\"data-table-row-wrapper\" dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\r\n      </tbody>\r\n\r\n      <!-- <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\r\n        <tr *ngFor=\"let item of substituteItems, let index = index\" [class.row-odd]=\"(index + items.length) % 2 === 0\" [class.row-even]=\"(index + items.length) % 2 === 1\">\r\n          <td [hide]=\"!expandColumnVisible\"></td>\r\n          <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\r\n          <td [hide]=\"!selectColumnVisible\"></td>\r\n          <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\r\n        </tr>\r\n      </tbody> -->\r\n\r\n    </table>\r\n    <div class=\"loading-cover\" *ngIf=\"showReloading && reloading\"></div>\r\n  </div>\r\n  <!-- <data-table-pagination *ngIf=\"pagination\"></data-table-pagination> -->\r\n  <!-- <p-toolbar> -->\r\n  <div style=\"background:#F0F2F4;padding-bottom: 33px;\">\r\n    <div class=\"ui-toolbar-group-left\" *ngIf=\"NoSearchCss==false\">\r\n      <p-dropdown [options]=\"itemsperPage\" [(ngModel)]=\"itemsOnPage\"></p-dropdown>\r\n  Total Results - {{items.length}}\r\n\r\n    </div>\r\n    <div class=\"ui-toolbar-group-right\" *ngIf=\"NoSearchCss==false\">\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- </p-toolbar> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/data-table/components/table.ts":
/*!************************************************!*\
  !*** ./src/app/data-table/components/table.ts ***!
  \************************************************/
/*! exports provided: DataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return DataTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column */ "./src/app/data-table/components/column.ts");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row */ "./src/app/data-table/components/row.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/app/data-table/components/types.ts");
/* harmony import */ var _utils_drag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/drag */ "./src/app/data-table/utils/drag.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataTable = /** @class */ (function () {
    function DataTable() {
        this._items = [];
        this.dataFilter = {};
        this.p = 1;
        this.rowSelectAll = false;
        this.itemsOnPage = 5;
        this.itemsperPage = [
            { label: 5, value: 5 },
            { label: 10, value: 10 },
            { label: 20, value: 20 }
        ];
        this.IsAddButton = false;
        this.ExportToExcel = false;
        this.header = true;
        this.pagination = true;
        this.indexColumn = true;
        this.indexColumnHeader = '';
        this.selectColumn = false;
        this.multiSelect = true;
        this.substituteRows = true;
        this.expandableRows = false;
        this.translations = _types__WEBPACK_IMPORTED_MODULE_3__["defaultTranslations"];
        this.selectOnRowClick = false;
        this.autoReload = true;
        this.showReloading = false;
        this.NoSearchCss = false;
        this.filterByState = false;
        this.filterByTags = false;
        this._sortAsc = true;
        this._offset = 0;
        this._limit = 5;
        // Reloading:
        this._reloading = false;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._displayParams = {}; // params of the last finished reload
        this._scheduledReload = null;
        // event handlers:
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cellClick1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.OnSearchList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // functions:
        this.OnAddBtnClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.OnDataExportToExcelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.OnStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.OnTagChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedRows = [];
        this._selectAllCheckbox = false;
        // column resizing:
        this._resizeInProgress = false;
        this.resizeLimit = 30;
    }
    Object.defineProperty(DataTable.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this._onReloadFinished();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "sortBy", {
        get: function () {
            return this._sortBy;
        },
        set: function (value) {
            this._sortBy = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "sortAsc", {
        get: function () {
            return this._sortAsc;
        },
        set: function (value) {
            this._sortAsc = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "page", {
        // calculated property:
        get: function () {
            return Math.floor(this.offset / this.limit) + 1;
        },
        set: function (value) {
            this.offset = (value - 1) * this.limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "lastPage", {
        get: function () {
            return Math.ceil(this.itemCount / this.limit);
        },
        enumerable: true,
        configurable: true
    });
    // setting multiple observable properties simultaneously
    DataTable.prototype.sort = function (sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    };
    // init
    DataTable.prototype.ngOnInit = function () {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.autoReload && this._scheduledReload == null) {
            this.reloadItems();
        }
    };
    DataTable.prototype._initDefaultValues = function () {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    };
    DataTable.prototype._initDefaultClickEvents = function () {
        var _this = this;
        this.headerClick.subscribe(function (tableEvent) { return _this.sortColumn(tableEvent.column); });
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(function (tableEvent) { return tableEvent.row.selected = !tableEvent.row.selected; });
        }
    };
    Object.defineProperty(DataTable.prototype, "reloading", {
        get: function () {
            return this._reloading;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.reloadItems = function () {
        this._reloading = true;
        this.reload.emit(this._getRemoteParameters());
    };
    DataTable.prototype._onReloadFinished = function () {
        this._updateDisplayParams();
        this._selectAllCheckbox = false;
        this._reloading = false;
    };
    Object.defineProperty(DataTable.prototype, "displayParams", {
        get: function () {
            return this._displayParams;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype._updateDisplayParams = function () {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    };
    // for avoiding cascading reloads if multiple params are set at once:
    DataTable.prototype._triggerReload = function () {
        var _this = this;
        if (this._scheduledReload) {
            clearTimeout(this._scheduledReload);
        }
        this._scheduledReload = setTimeout(function () {
            _this.reloadItems();
        });
    };
    DataTable.prototype.search = function () {
        this.OnSearchList.emit(this.searchText);
    };
    DataTable.prototype.rowClicked = function (row, event) {
        this.rowClick.emit({ row: row, event: event });
    };
    DataTable.prototype.rowDoubleClicked = function (row, event) {
        this.rowDoubleClick.emit({ row: row, event: event });
    };
    DataTable.prototype.headerClicked = function (column, event) {
        if (!this._resizeInProgress) {
            this.headerClick.emit({ column: column, event: event });
        }
        else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    };
    DataTable.prototype.cellClicked = function (column, row, event) {
        this.cellClick.emit({ row: row, column: column, event: event });
    };
    DataTable.prototype.setStateName = function (value) {
        this.searchText = "";
        this.OnSearchList.emit("");
        if (value != null) {
            this.OnStateChange.emit(this.StateDropDownOptionData.find(function (x) { return x.value === value; }).label);
        }
        else {
            this.search();
            this.OnStateChange.emit(null);
        }
    };
    DataTable.prototype.FilterChangeTags = function (value) {
        this.searchText = "";
        this.OnSearchList.emit();
        this.OnTagChange.emit(value.toString() == "" ? null : value.toString());
    };
    DataTable.prototype.OnAddBtnClick = function () {
        this.OnAddBtnClickEvent.emit();
    };
    DataTable.prototype.OnExcelExport = function () {
        this.OnDataExportToExcelEvent.emit();
    };
    DataTable.prototype._getRemoteParameters = function () {
        var params = {};
        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    };
    DataTable.prototype.sortColumn = function (column) {
        if (column.sortable) {
            var ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    };
    Object.defineProperty(DataTable.prototype, "columnCount", {
        get: function () {
            var count = 0;
            count += this.indexColumnVisible ? 1 : 0;
            count += this.selectColumnVisible ? 1 : 0;
            count += this.expandColumnVisible ? 1 : 0;
            this.columns.toArray().forEach(function (column) {
                count += column.visible ? 1 : 0;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.getRowColor = function (item, index, row) {
        if (this.rowColors !== undefined) {
            return this.rowColors(item, row, index);
        }
    };
    Object.defineProperty(DataTable.prototype, "selectAllCheckbox", {
        get: function () {
            return this._selectAllCheckbox;
        },
        set: function (value) {
            this._selectAllCheckbox = value;
            this._onSelectAllChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype._onSelectAllChanged = function (value) {
        this.rows.toArray().forEach(function (row) { return row.selected = value; });
    };
    DataTable.prototype.onRowSelectChanged = function (row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            var index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0) {
                this.selectedRows.push(row);
            }
            else if (!row.selected && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        }
        else {
            if (row.selected) {
                this.selectedRow = row;
            }
            else if (this.selectedRow === row) {
                this.selectedRow = undefined;
            }
        }
        // unselect all other rows:
        if (row.selected && !this.multiSelect) {
            this.rows.toArray().filter(function (row_) { return row_.selected; }).forEach(function (row_) {
                if (row_ !== row) {
                    row_.selected = false;
                }
            });
        }
    };
    Object.defineProperty(DataTable.prototype, "substituteItems", {
        // other:
        get: function () {
            return Array.from({ length: this.displayParams.limit - this.items.length });
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.resizeColumnStart = function (event, column, columnElement) {
        var _this = this;
        this._resizeInProgress = true;
        Object(_utils_drag__WEBPACK_IMPORTED_MODULE_4__["drag"])(event, {
            move: function (moveEvent, dx) {
                if (_this._isResizeInLimit(columnElement, dx)) {
                    column.width = columnElement.offsetWidth + dx;
                }
            },
        });
    };
    DataTable.prototype._isResizeInLimit = function (columnElement, dx) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
         Without the limits, resizing can make the next column disappear completely,
         and even increase the table width. The current implementation suffers from the fact,
         that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            (dx >= 0 && (columnElement.nextElementSibling.offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Array])
    ], DataTable.prototype, "items", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DataTable.prototype, "itemCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_column__WEBPACK_IMPORTED_MODULE_1__["DataTableColumn"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DataTable.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_row__WEBPACK_IMPORTED_MODULE_2__["DataTableRow"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], DataTable.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('dataTableExpand'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DataTable.prototype, "expandTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DataTable.prototype, "headerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTable.prototype, "IsAddButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTable.prototype, "ExportToExcel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "pagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "indexColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "indexColumnHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], DataTable.prototype, "rowColors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], DataTable.prototype, "rowTooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "selectColumn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "multiSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "substituteRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "expandableRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "translations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "selectOnRowClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "autoReload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "showReloading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "NoSearchCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTable.prototype, "filterByState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DataTable.prototype, "filterByTags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "StateDropDownOptionData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "TagListDropDownOptionData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTable.prototype, "sortBy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTable.prototype, "sortAsc", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTable.prototype, "offset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTable.prototype, "limit", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTable.prototype, "page", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "reload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "rowClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "rowDoubleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "headerClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "cellClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "cellClick1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "OnSearchList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "OnAddBtnClickEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "OnDataExportToExcelEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "OnStateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTable.prototype, "OnTagChange", void 0);
    DataTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! ./table.html */ "./src/app/data-table/components/table.html"),
            styles: [__webpack_require__(/*! ./table.css */ "./src/app/data-table/components/table.css")]
        })
    ], DataTable);
    return DataTable;
}());



/***/ }),

/***/ "./src/app/data-table/components/types.ts":
/*!************************************************!*\
  !*** ./src/app/data-table/components/types.ts ***!
  \************************************************/
/*! exports provided: defaultTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
var defaultTranslations = {
    indexColumn: 'index',
    selectColumn: 'select',
    expandColumn: 'expand',
    paginationLimit: 'Limit',
    paginationRange: 'Results'
};


/***/ }),

/***/ "./src/app/data-table/index.ts":
/*!*************************************!*\
  !*** ./src/app/data-table/index.ts ***!
  \*************************************/
/*! exports provided: DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader, DATA_TABLE_DIRECTIVES, DataTableModule, defaultTranslations, DataTableResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TABLE_DIRECTIVES", function() { return DATA_TABLE_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table */ "./src/app/data-table/components/table.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return _components_table__WEBPACK_IMPORTED_MODULE_3__["DataTable"]; });

/* harmony import */ var _components_column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/column */ "./src/app/data-table/components/column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableColumn", function() { return _components_column__WEBPACK_IMPORTED_MODULE_4__["DataTableColumn"]; });

/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/row */ "./src/app/data-table/components/row.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableRow", function() { return _components_row__WEBPACK_IMPORTED_MODULE_5__["DataTableRow"]; });

/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pagination */ "./src/app/data-table/components/pagination.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablePagination", function() { return _components_pagination__WEBPACK_IMPORTED_MODULE_6__["DataTablePagination"]; });

/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header */ "./src/app/data-table/components/header.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableHeader", function() { return _components_header__WEBPACK_IMPORTED_MODULE_7__["DataTableHeader"]; });

/* harmony import */ var _utils_px__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/px */ "./src/app/data-table/utils/px.ts");
/* harmony import */ var _utils_hide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/hide */ "./src/app/data-table/utils/hide.ts");
/* harmony import */ var _utils_min__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/min */ "./src/app/data-table/utils/min.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _utils_rowfilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/rowfilter */ "./src/app/data-table/utils/rowfilter.ts");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/types */ "./src/app/data-table/components/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return _components_types__WEBPACK_IMPORTED_MODULE_17__["defaultTranslations"]; });

/* harmony import */ var _tools_data_table_resource__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/data-table-resource */ "./src/app/data-table/tools/data-table-resource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableResource", function() { return _tools_data_table_resource__WEBPACK_IMPORTED_MODULE_18__["DataTableResource"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var DATA_TABLE_DIRECTIVES = [_components_table__WEBPACK_IMPORTED_MODULE_3__["DataTable"], _components_column__WEBPACK_IMPORTED_MODULE_4__["DataTableColumn"]];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__["MultiSelectModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__["ToolbarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"]],
            declarations: [
                _components_table__WEBPACK_IMPORTED_MODULE_3__["DataTable"], _components_column__WEBPACK_IMPORTED_MODULE_4__["DataTableColumn"],
                _components_row__WEBPACK_IMPORTED_MODULE_5__["DataTableRow"], _components_pagination__WEBPACK_IMPORTED_MODULE_6__["DataTablePagination"], _components_header__WEBPACK_IMPORTED_MODULE_7__["DataTableHeader"], _utils_rowfilter__WEBPACK_IMPORTED_MODULE_15__["RowFilterPipe"],
                _utils_px__WEBPACK_IMPORTED_MODULE_8__["PixelConverter"], _utils_hide__WEBPACK_IMPORTED_MODULE_9__["Hide"], _utils_min__WEBPACK_IMPORTED_MODULE_10__["MinPipe"]
            ],
            exports: [_components_table__WEBPACK_IMPORTED_MODULE_3__["DataTable"], _components_column__WEBPACK_IMPORTED_MODULE_4__["DataTableColumn"]]
        })
    ], DataTableModule);
    return DataTableModule;
}());



/***/ }),

/***/ "./src/app/data-table/tools/data-table-resource.ts":
/*!*********************************************************!*\
  !*** ./src/app/data-table/tools/data-table-resource.ts ***!
  \*********************************************************/
/*! exports provided: DataTableResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableResource", function() { return DataTableResource; });
var DataTableResource = /** @class */ (function () {
    function DataTableResource(items) {
        this.items = items;
    }
    DataTableResource.prototype.query = function (params, filter) {
        var result = [];
        if (filter) {
            result = this.items.filter(filter);
        }
        else {
            result = this.items == null ? null : this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }
        if (params.sortBy) {
            result.sort(function (a, b) {
                if (typeof a[params.sortBy] === 'string') {
                    return a[params.sortBy].localeCompare(b[params.sortBy]);
                }
                else {
                    return a[params.sortBy] - b[params.sortBy];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            }
            else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(result); });
        });
    };
    DataTableResource.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.items.length); });
        });
    };
    return DataTableResource;
}());



/***/ }),

/***/ "./src/app/data-table/utils/drag.ts":
/*!******************************************!*\
  !*** ./src/app/data-table/utils/drag.ts ***!
  \******************************************/
/*! exports provided: drag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return drag; });
function drag(event, _a) {
    var move = _a.move, up = _a.up;
    var startX = event.pageX;
    var startY = event.pageY;
    var x = startX;
    var y = startY;
    var moved = false;
    function mouseMoveHandler(event) {
        var dx = event.pageX - x;
        var dy = event.pageY - y;
        x = event.pageX;
        y = event.pageY;
        if (dx || dy)
            moved = true;
        move(event, dx, dy, x, y);
        event.preventDefault(); // to avoid text selection
    }
    function mouseUpHandler(event) {
        x = event.pageX;
        y = event.pageY;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        if (up)
            up(event, x, y, moved);
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}


/***/ }),

/***/ "./src/app/data-table/utils/hide.ts":
/*!******************************************!*\
  !*** ./src/app/data-table/utils/hide.ts ***!
  \******************************************/
/*! exports provided: Hide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hide", function() { return Hide; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function isBlank(obj) {
    return obj === undefined || obj === null;
}
var Hide = /** @class */ (function () {
    function Hide(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._prevCondition = null;
    }
    Object.defineProperty(Hide.prototype, "hide", {
        set: function (newCondition) {
            this.initDisplayStyle();
            if (newCondition && (isBlank(this._prevCondition) || !this._prevCondition)) {
                this._prevCondition = true;
                this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
            }
            else if (!newCondition && (isBlank(this._prevCondition) || this._prevCondition)) {
                this._prevCondition = false;
                this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
            }
        },
        enumerable: true,
        configurable: true
    });
    Hide.prototype.initDisplayStyle = function () {
        if (this._displayStyle === undefined) {
            var displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle && displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    };
    Hide = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[hide]', inputs: ['hide'] }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], Hide);
    return Hide;
}());



/***/ }),

/***/ "./src/app/data-table/utils/min.ts":
/*!*****************************************!*\
  !*** ./src/app/data-table/utils/min.ts ***!
  \*****************************************/
/*! exports provided: MinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (value, args) {
        return Math.min.apply(null, value);
    };
    MinPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'min'
        })
    ], MinPipe);
    return MinPipe;
}());



/***/ }),

/***/ "./src/app/data-table/utils/px.ts":
/*!****************************************!*\
  !*** ./src/app/data-table/utils/px.ts ***!
  \****************************************/
/*! exports provided: PixelConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelConverter", function() { return PixelConverter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    PixelConverter.prototype.transform = function (value, args) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    PixelConverter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'px'
        })
    ], PixelConverter);
    return PixelConverter;
}());



/***/ }),

/***/ "./src/app/data-table/utils/rowfilter.ts":
/*!***********************************************!*\
  !*** ./src/app/data-table/utils/rowfilter.ts ***!
  \***********************************************/
/*! exports provided: RowFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowFilterPipe", function() { return RowFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RowFilterPipe = /** @class */ (function () {
    function RowFilterPipe() {
    }
    RowFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    RowFilterPipe.prototype.applyFilter = function (item, filter) {
        for (var field in filter) {
            if (filter[field]) {
                try {
                    var itemValue = item[field];
                    try {
                        itemValue = itemValue.toString().toLowerCase();
                    }
                    catch (_a) {
                    }
                    var filterValue = filter[field];
                    try {
                        filterValue = filterValue.toString().toLowerCase() + '';
                    }
                    catch (_b) {
                    }
                    if (itemValue.indexOf(filterValue) === -1) {
                        return false;
                    }
                }
                catch (_c) {
                    return false;
                }
            }
        }
        return true;
    };
    RowFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'rowfilter',
            pure: false
        })
    ], RowFilterPipe);
    return RowFilterPipe;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var rxjs_add_operator_mapTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/mapTo */ "./node_modules/rxjs-compat/_esm5/add/operator/mapTo.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:quotemark


var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.performCheck(childRoute, state);
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.performCheck(next, state);
    };
    /**
     * this is method does the checking for us, according to the below process
     * 1. check if the user is authenticated, if so check if is time to refresh token the return the observable
     * so our guard can resolve it, since the retrieve method is already handling the response with `do` we just map this
     * to true default so next view can check and see if the new token is valid or not
     *
     * 2. if the above from 1 pass through without returning it means it was false all the way
     * so we handle it by passing a message and updating the redirectUrl so users can continue where they left of
     * after authentication
     * @param next
     * @param state
     * @returns {any}
     */
    AuthGuard.prototype.performCheck = function (next, state) {
        if (this._authService.isAuthenticated()) {
            // let's check if the token will expire soon
            if (this._authService.shouldIGetToken()) {
                // tslint:disable-next-line:max-line-length
                return this._authService.retrieveToken().mapTo(true); // resolve to true since we are already handling it before now, just return true
            }
            else {
                return true;
            }
        }
        this._authService.setRedirectUrl(state.url);
        this._authService.message = '';
        this._authService.clear();
        // navigate to login page
        this._router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/user.service */ "./src/app/providers/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    /**
     * this check the route if the data is existing then we move on to check if the role passed
     * from the route data is among the user roles array
     * @param next
     * @param state
     * @returns {boolean}
     */
    RoleGuard.prototype.canActivate = function (next, state) {
        if (next.data == null)
            return true;
        if (next.data.role == null)
            return true;
        var user = this._userService.get();
        var allow = user.roles.indexOf(next.data.role) > -1;
        if (allow == false) {
            alert("you can't go here");
            this._router.navigate(["dashboard/home"]);
        }
        return allow;
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_providers_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/guards/stateofpage.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/stateofpage.guard.ts ***!
  \*********************************************/
/*! exports provided: StateofpageGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateofpageGuard", function() { return StateofpageGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _dashboard_Global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/Global.service */ "./src/app/dashboard/Global.service.ts");
/* harmony import */ var _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateofpageGuard = /** @class */ (function () {
    function StateofpageGuard(globalService, confirmationService) {
        var _this = this;
        this.globalService = globalService;
        this.confirmationService = confirmationService;
        this.isDataAvailable = false;
        this.PageState = globalService.PageStateData;
        /***************For PageState Chanage************/
        this.PageState.subscribe(function (value) {
            _this.isDataAvailable = value ? true : false;
        });
    }
    StateofpageGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.isDataAvailable) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.confirmationService.confirm({
                    message: 'You have unsaved changes. Are you sure you want to leave this page?',
                    header: 'Confirmation',
                    icon: 'pi pi-exclamation-triangle',
                    accept: function () {
                        _this.isDataAvailable = false;
                        observer.next(true);
                        observer.complete();
                    },
                    reject: function () {
                        observer.next(false);
                        observer.complete();
                    }
                });
            });
        }
        return true;
    };
    StateofpageGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dashboard_Global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"], _node_modules_primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], StateofpageGuard);
    return StateofpageGuard;
}());



/***/ }),

/***/ "./src/app/helpers/jwt-helper.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/jwt-helper.ts ***!
  \***************************************/
/*! exports provided: JwtHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelper", function() { return JwtHelper; });
/**
 * @credits for helper class goes to https://github.com/auth0/angular2-jwt
 */
var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    /**
     * this is used to decode our token if passed or pick it from the local storage
     * @param token
     */
    JwtHelper.prototype.decodeToken = function (token) {
        if (token == null) {
            token = localStorage.getItem('token');
        }
        /**
         * if it is still null, we return null since no token yet
         */
        if (token == null) {
            return null;
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        if (token == null) {
            token = localStorage.getItem('token');
        }
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        if (token == null) {
            token = localStorage.getItem('token');
        }
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container.card {\r\n    max-width: 375px;\r\n    padding: 40px 40px;\r\n}\r\n  \r\n.card {\r\n    background-color: #F7F7F7;\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    border-radius: 2px;\r\n}\r\n  \r\nlabel{\r\n  color: #136FB3;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner type=\"line-scale\" ></ngx-spinner>\r\n<div class=\"container\">\r\n  <div class=\"card card-container\">\r\n    <form #f=\"ngForm\" [formGroup]=\"loginForm\" (ngSubmit)=\"submitted()\">\r\n      <div [hidden]=\"!message\" class=\"alert alert-danger\" role=\"alert\">\r\n        {{message}}\r\n      </div>\r\n      <h3 style=\"color: #136FB3;\" >DYNAMIC REPORT</h3>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Username</label>\r\n        <input type=\"text\" formControlName=\"Username\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n               placeholder=\"Username\">\r\n        <div *ngIf=\"loginForm.get('Username').invalid  && f.submitted\">\r\n          <small *ngIf=\"loginForm.get('Username').hasError('required')\" class=\"form-text text-danger\">User name is required\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\r\n               placeholder=\"Password\">\r\n        <div *ngIf=\"loginForm.get('password').invalid  && f.submitted\">\r\n          <small *ngIf=\"loginForm.get('password').hasError('required')\" class=\"form-text text-danger\">Password is\r\n            required\r\n          </small>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" style=\"background: #136FB3;\" class=\"btn btn-primary btn-block\">LOGIN</button>\r\n    </form>\r\n    <br>\r\n    \r\n    <div class=\"progress\" *ngIf=\"loading\">\r\n      <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\"\r\n           aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%; height: 5px;\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, fb, spinner, _router) {
        this._authService = _authService;
        this.fb = fb;
        this.spinner = spinner;
        this._router = _router;
        this.loading = false;
        this.createForm();
    }
    /**
     * this is used to set our message incase there's one to our user before clearing our
     * local storage using our auth service
     */
    LoginComponent.prototype.ngOnInit = function () {
        this.message = this._authService.message;
        // this._authService.clear();
        if (this._authService.isAuthenticated()) {
            // let's check if the token will expire soon
            if (!this._authService.shouldIGetToken()) {
                var to = this._authService.getRedirectUrl() || '/dashboard';
                this._router.navigate([to]);
            }
        }
    };
    /**
     * we create our simple reactive form here
     */
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            Username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * this is called when the user click on the submit button
     * and it also checks for the validity of the form , if invalid return don't do anything
     * and after authentication is successful we move to the redirectUrl if it was existing else
     * to dashboard
     */
    LoginComponent.prototype.submitted = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        // set our login loading indicator to show we have started the server communication
        this.loading = true;
        this.spinner.show();
        this._authService
            .authenticate(this.loginForm.value.Username, this.loginForm.value.password)
            .subscribe(function (data) {
            _this.loading = false; // hide our loading indicator
            _this.spinner.hide();
            // navigate back to our redirect url if empty goto our dashboard
            var authData = JSON.parse(data);
            if (authData.results.status !== -1) {
                var to = _this._authService.getRedirectUrl() || '/dashboard';
                _this._router.navigate([to]);
            }
            else {
                _this.message = authData.results.msg;
            }
        }, function (error) {
            _this.loading = false;
            _this.spinner.hide();
            _this.message = error;
            //  alert(error);
            console.error('auth error', error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *:after, *:before {\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box; }\r\n  \r\n  html {\r\n    background: #ccc;\r\n    font: bold 14px/20px \"Trajan Pro\", \"Times New Roman\", Times, serif;\r\n    color: #430400;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.15); }\r\n  \r\n  .error-page-wrap {\r\n    width: 310px;\r\n    height: 310px;\r\n    margin: 155px auto; }\r\n  \r\n  .error-page-wrap:before {\r\n      box-shadow: 0 0 200px 150px #fff;\r\n      width: 310px;\r\n      height: 310px;\r\n      border-radius: 50%;\r\n      position: relative;\r\n      z-index: -1;\r\n      content: '';\r\n      display: block; }\r\n  \r\n  .error-page {\r\n    width: 310px;\r\n    height: 310px;\r\n    border-radius: 50%;\r\n    top: -310px;\r\n    position: relative;\r\n    text-align: center;\r\n    background: #d36242;\r\n    background: linear-gradient(to bottom, #d36242 0%, darkred 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$firstColor', endColorstr='$secondColor',GradientType=0 ); }\r\n  \r\n  .error-page:before {\r\n      width: 63px;\r\n      height: 63px;\r\n      border-radius: 50%;\r\n      box-shadow: 3px 25px 0 5px #C95439;\r\n      content: '';\r\n      z-index: -1;\r\n      display: block;\r\n      position: relative;\r\n      top: -19px;\r\n      left: 44px; }\r\n  \r\n  .error-page:after {\r\n      width: 310px;\r\n      height: 17px;\r\n      margin: 0 auto;\r\n      top: 25px;\r\n      content: '';\r\n      z-index: -1;\r\n      display: block;\r\n      position: relative;\r\n      background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, rgba(35, 26, 26, 0) 59%, rgba(60, 44, 44, 0) 100%);\r\n      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6000000', endColorstr='#003c2c2c',GradientType=1 ); }\r\n  \r\n  .error-page h1 {\r\n      color: rgba(255, 255, 255, 0.94);\r\n      font-size: 100px;\r\n      margin: 65px auto 0 auto;\r\n      text-shadow: 0px 0 7px rgba(0, 0, 0, 0.5); }\r\n  \r\n  .error-page h1:before {\r\n        width: 260px;\r\n        height: 1px;\r\n        position: relative;\r\n        margin: 0 auto;\r\n        top: 70px;\r\n        content: '';\r\n        display: block;\r\n        background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\r\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\r\n  \r\n  .error-page h1:after {\r\n        width: 260px;\r\n        height: 1px;\r\n        content: '';\r\n        display: block;\r\n        opacity: 0.2;\r\n        margin: 0 auto;\r\n        top: 50px;\r\n        position: relative;\r\n        background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\r\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\r\n  \r\n  .error-page h2 {\r\n      margin: 55px 0 30px 0;\r\n      font-size: 17px; }\r\n  \r\n  .error-page h2:before {\r\n        width: 130px;\r\n        height: 1px;\r\n        position: relative;\r\n        margin: 0 auto;\r\n        top: 31px;\r\n        content: '';\r\n        display: block;\r\n        background: radial-gradient(ellipse at center, rgba(111, 25, 25, 0.65) 0%, rgba(75, 38, 38, 0) 70%, rgba(60, 44, 44, 0) 100%);\r\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a66f1919', endColorstr='#003c2c2c',GradientType=1 ); }\r\n  \r\n  .error-page h2:after {\r\n        width: 130px;\r\n        height: 1px;\r\n        content: '';\r\n        display: block;\r\n        opacity: 0.2;\r\n        margin: 0 auto;\r\n        top: 11px;\r\n        position: relative;\r\n        background: radial-gradient(ellipse at center, rgba(247, 173, 148, 0.65) 0%, rgba(255, 255, 255, 0.01) 99%, rgba(255, 255, 255, 0) 100%);\r\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a6f7ad94', endColorstr='#00ffffff',GradientType=1 ); }\r\n  \r\n  .error-back {\r\n    text-decoration: none;\r\n    color: #430400;\r\n    font-size: 15px; }\r\n  \r\n  .error-back:hover {\r\n      color: #EB957D;\r\n      text-shadow: 0 0 3px black; }\r\n  "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-page-wrap\">\r\n  <article class=\"error-page gradient\">\r\n    <div>\r\n      <h1>404</h1>\r\n    </div>\r\n    <div style=\"margin-top: 77px;\">\r\n      <h2>oops! page not found</h2>\r\n    </div>\r\n    <a href=\"#\" title=\"Back to site\" class=\"error-back\">back</a>\r\n  </article>\r\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/providers/api-handler.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/api-handler.service.ts ***!
  \**************************************************/
/*! exports provided: ApiHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHandler", function() { return ApiHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiHandler = /** @class */ (function (_super) {
    __extends(ApiHandler, _super);
    function ApiHandler(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.bearer = 'Bearer';
        return _this;
    }
    /**
     *
     * @param service_url this is our api method url
     * @param method this can either be RequestMethod.POST, RequestMethod.GET etc...
     * @param params this is the data we are sending across to our api backend for processing
     * @param options incase we want to pass our custom options like headers and all
     */
    ApiHandler.prototype.callService = function (service_url, method, params, options) {
        if (params === void 0) { params = {}; }
        return _super.prototype.request.call(this, this.getFullUrl(service_url), this.requestOptions(method, params, options))
            .catch(this.onCatch);
    };
    /**
     * Build API url.
     * and we remove any leading / from the service calls since
     * we are not needing then in making request calls
     * e.g localhost:1337//base... to localhost:1337/base..
     *
     * which our backend host is coming from the environment
     *
     * @param url
     * @returns {string}
     */
    ApiHandler.prototype.getFullUrl = function (url) {
        if (url.charAt(0) === '/') {
            url = url.substring(1);
        }
        return environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + url;
    };
    /**
     * Request options is used to manipulate and handle needed information before
     * it is sent to server and it also adds our token authorization header if it is
     * present in our storage
     * @param method
     * @param params
     * @param options
     * @returns {RequestOptionsArgs}
     */
    ApiHandler.prototype.requestOptions = function (method, params, options) {
        if (options == null) {
            options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        }
        options.method = method;
        if (options.method === _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post || options.method === _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Put) {
            options.body = params;
        }
        else {
            options.params = params;
        }
        if (options.headers == null && localStorage.getItem('token') != null) {
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Authorization': this.bearer + " " + localStorage.getItem('token')
            });
        }
        return options;
    };
    /**
     * Error handler.
     * do any middle ware checking before sending it to observable caller
     *
     * convert the error to normal text
     *
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    ApiHandler.prototype.onCatch = function (error, caught) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.text());
    };
    ApiHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["ConnectionBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]])
    ], ApiHandler);
    return ApiHandler;
}(_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/providers/user.service.ts");
/* harmony import */ var _api_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-handler.service */ "./src/app/providers/api-handler.service.ts");
/* harmony import */ var _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/jwt-helper */ "./src/app/helpers/jwt-helper.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// tslint:disable-next-line:class-name
var data = /** @class */ (function () {
    function data() {
    }
    return data;
}());
var AuthService = /** @class */ (function () {
    function AuthService(_apiHandler, _userService) {
        this._apiHandler = _apiHandler;
        this._userService = _userService;
        this._jwt = new _helpers_jwt_helper__WEBPACK_IMPORTED_MODULE_3__["JwtHelper"]();
    }
    /**
     * check for expiration and if token is still existing or not
     * @return {boolean}
     */
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('token') != null && !this._jwt.isTokenExpired();
    };
    AuthService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    AuthService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    /**
     * this is used to logout the user
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        return this._apiHandler.callService("/user/logout/" + this._userService.get().id, _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function () {
            _this.clear();
        });
    };
    /**
     * this is used to clear anything that needs to be removed
     */
    AuthService.prototype.clear = function () {
        localStorage.clear();
    };
    /**
     * this returns the token for the user
     * @param email
     * @param password
     */
    AuthService.prototype.authenticate = function (email, password) {
        var _this = this;
        return this._apiHandler.callService('/api/TokenAuth/token', _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestMethod"].Post, { Username: email, Password: password })
            .map(function (res) { return res.text(); })
            .do(function (token) {
            var authData = JSON.parse(token);
            if (authData.results.status === 1) {
                localStorage.setItem('token', authData.data.accessToken);
                localStorage.setItem('userinfo', JSON.stringify(authData.data.userinfo));
                _this._userService.set(_this._jwt.decodeToken());
            }
            else {
                return authData.results;
            }
        });
    };
    /**
     * this is used to alert our caller if we should go get token for next request or
     * to be carried out request
     *
     * @param threshold_seconds  is like a threshold to check if we should or not check for token
     * default we use 2min before the token expires
     *
     * @return {boolean}
     */
    AuthService.prototype.shouldIGetToken = function (threshold_seconds) {
        if (threshold_seconds === void 0) { threshold_seconds = 120; }
        var expDate = this._jwt.getTokenExpirationDate().valueOf() - (threshold_seconds * 1000);
        return new Date().valueOf() > expDate;
    };
    /**
     * this is used to retrieve a newer token since the current one is going to expire soon
     *
     */
    AuthService.prototype.retrieveToken = function () {
        var _this = this;
        return this._apiHandler.callService('/user/token', _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestMethod"].Get)
            .map(function (res) { return res.text(); })
            .do(function (token) {
            _this.clear();
            localStorage.setItem('token', token);
            _this._userService.set(_this._jwt.decodeToken());
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_handler_service__WEBPACK_IMPORTED_MODULE_2__["ApiHandler"], _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    /**
     * this is used to set our user object for current logged in user
     * @param user
     */
    UserService.prototype.set = function (user) {
        this.user = user;
    };
    /**
     * this is used to get our user
     * @returns {IUser}
     */
    UserService.prototype.get = function () {
        return this.user;
    };
    /**
     * this is used to delete our user stored, by setting it to null
     */
    UserService.prototype.delete = function () {
        this.user = null;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    endpoint: 'http://localhost:3000/',
    // endpoint: 'http://192.168.1.41/DynamicReportAPI_Test/',
    HubURL: 'http://localhost:3000/DynamicReportAPI/message'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mahesh\employee_ass\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map