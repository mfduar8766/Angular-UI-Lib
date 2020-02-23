(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('primeng/button'), require('primeng/calendar'), require('primeng/card'), require('primeng/checkbox'), require('primeng/chips'), require('primeng/confirmdialog'), require('primeng/dropdown'), require('primeng/dialog'), require('primeng/inputtext'), require('primeng/inputtextarea'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/lightbox'), require('primeng/listbox'), require('primeng/multiselect'), require('primeng/selectbutton'), require('primeng/spinner'), require('primeng/sidebar'), require('primeng/table'), require('primeng/toolbar'), require('primeng/togglebutton')) :
    typeof define === 'function' && define.amd ? define('angular-common-components', ['exports', '@angular/core', '@angular/common', 'primeng/button', 'primeng/calendar', 'primeng/card', 'primeng/checkbox', 'primeng/chips', 'primeng/confirmdialog', 'primeng/dropdown', 'primeng/dialog', 'primeng/inputtext', 'primeng/inputtextarea', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/lightbox', 'primeng/listbox', 'primeng/multiselect', 'primeng/selectbutton', 'primeng/spinner', 'primeng/sidebar', 'primeng/table', 'primeng/toolbar', 'primeng/togglebutton'], factory) :
    (global = global || self, factory(global['angular-common-components'] = {}, global.ng.core, global.ng.common, global.button, global.calendar, global.card, global.checkbox, global.chips, global.confirmdialog, global.dropdown, global.dialog, global.inputtext, global.inputtextarea, global.inputmask, global.inputswitch, global.lightbox, global.listbox, global.multiselect, global.selectbutton, global.spinner, global.sidebar, global.table, global.toolbar, global.togglebutton));
}(this, (function (exports, core, common, button, calendar, card, checkbox, chips, confirmdialog, dropdown, dialog, inputtext, inputtextarea, inputmask, inputswitch, lightbox, listbox, multiselect, selectbutton, spinner, sidebar, table, toolbar, togglebutton) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var PrimeNgModule = /** @class */ (function () {
        function PrimeNgModule() {
        }
        PrimeNgModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [
                    button.ButtonModule,
                    calendar.CalendarModule,
                    checkbox.CheckboxModule,
                    chips.ChipsModule,
                    card.CardModule,
                    confirmdialog.ConfirmDialogModule,
                    dropdown.DropdownModule,
                    dialog.DialogModule,
                    lightbox.LightboxModule,
                    inputtext.InputTextModule,
                    inputmask.InputMaskModule,
                    inputswitch.InputSwitchModule,
                    inputtextarea.InputTextareaModule,
                    listbox.ListboxModule,
                    multiselect.MultiSelectModule,
                    selectbutton.SelectButtonModule,
                    spinner.SpinnerModule,
                    sidebar.SidebarModule,
                    table.TableModule,
                    toolbar.ToolbarModule,
                    togglebutton.ToggleButtonModule
                ]
            })
        ], PrimeNgModule);
        return PrimeNgModule;
    }());

    var CommonButtonComponent = /** @class */ (function () {
        function CommonButtonComponent() {
            this.buttonType = 'button';
            this.isDisabled = false;
            this.handleClick = new core.EventEmitter();
        }
        CommonButtonComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], CommonButtonComponent.prototype, "buttonText", void 0);
        __decorate([
            core.Input()
        ], CommonButtonComponent.prototype, "buttonType", void 0);
        __decorate([
            core.Input()
        ], CommonButtonComponent.prototype, "isDisabled", void 0);
        __decorate([
            core.Input()
        ], CommonButtonComponent.prototype, "backgroundColor", void 0);
        __decorate([
            core.Output()
        ], CommonButtonComponent.prototype, "handleClick", void 0);
        CommonButtonComponent = __decorate([
            core.Component({
                selector: 'common-button',
                template: "\n    <ng-container>\n      <button\n        [ngStyle]=\"{ 'background-color': backgroundColor }\"\n        [type]=\"buttonType\"\n        (click)=\"handleClick.emit($event)\"\n        [disabled]=\"isDisabled\"\n      >\n        {{ buttonText }}\n      </button>\n    </ng-container>\n  ",
                styles: ["button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;cursor:pointer;background-color:green}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}"]
            })
        ], CommonButtonComponent);
        return CommonButtonComponent;
    }());

    var CommonButtonModule = /** @class */ (function () {
        function CommonButtonModule() {
        }
        CommonButtonModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [CommonButtonComponent],
                exports: [CommonButtonComponent],
            })
        ], CommonButtonModule);
        return CommonButtonModule;
    }());

    var CommonModalComponent = /** @class */ (function () {
        function CommonModalComponent() {
            this.isModalOpen = false;
            this.headerText = 'Header Text';
            this.showHeader = true;
            this.showFooter = true;
            this.classProp = {};
            this.closeModal = new core.EventEmitter();
        }
        CommonModalComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], CommonModalComponent.prototype, "isModalOpen", void 0);
        __decorate([
            core.Input()
        ], CommonModalComponent.prototype, "headerText", void 0);
        __decorate([
            core.Input()
        ], CommonModalComponent.prototype, "showHeader", void 0);
        __decorate([
            core.Input()
        ], CommonModalComponent.prototype, "showFooter", void 0);
        __decorate([
            core.Input()
        ], CommonModalComponent.prototype, "classProp", void 0);
        __decorate([
            core.Output()
        ], CommonModalComponent.prototype, "closeModal", void 0);
        CommonModalComponent = __decorate([
            core.Component({
                selector: 'common-modal',
                template: "\n    <div *ngIf=\"isModalOpen\" [ngStyle]=\"classProp\" class=\"modal-container\">\n      <div modal-inner-container>\n        <div *ngIf=\"showHeader\" class=\"modal-header\">\n          <div style=\"margin-left: 0.5rem;\">{{ headerText }}</div>\n          <div class=\"icon-container\">\n            <i (click)=\"closeModal.emit($event)\" class=\"times-icon fa fa-times\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-content\">\n        <ng-content select=\"div[role=content]\"></ng-content>\n      </div>\n      <footer *ngIf=\"showFooter\" class=\"modal-footer\">\n        <ng-content select=\"div[role=footer]\"></ng-content>\n      </footer>\n    </div>\n  ",
                styles: [".modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:999;box-sizing:border-box;overflow-y:scroll;height:30%;width:50%;background-color:#fff}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
            })
        ], CommonModalComponent);
        return CommonModalComponent;
    }());

    var CommonModalModule = /** @class */ (function () {
        function CommonModalModule() {
        }
        CommonModalModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [CommonModalComponent],
                exports: [CommonModalComponent]
            })
        ], CommonModalModule);
        return CommonModalModule;
    }());

    var CommonCardComponent = /** @class */ (function () {
        function CommonCardComponent() {
        }
        CommonCardComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], CommonCardComponent.prototype, "showHeader", void 0);
        __decorate([
            core.Input()
        ], CommonCardComponent.prototype, "showFooter", void 0);
        CommonCardComponent = __decorate([
            core.Component({
                selector: 'common-card',
                template: "\n    <div class=\"card-container height-width\">\n      <div class=\"card\">\n        <div *ngIf=\"showHeader\" class=\"card-header\">\n          <ng-content select=\"div[role=header]\"></ng-content>\n        </div>\n        <div class=\"card-body height-width\">\n          <ng-content></ng-content>\n        </div>\n        <div class=\"card-footer\" *ngIf=\"showFooter\">\n          <ng-content select=\"div[role=footer]\"></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
                styles: [".card-container{height:50%;width:50%;padding:1rem;box-shadow:8px 8px 8px 8px rgba(0,0,0,.2)}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
            })
        ], CommonCardComponent);
        return CommonCardComponent;
    }());

    var CommonCardModule = /** @class */ (function () {
        function CommonCardModule() {
        }
        CommonCardModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [CommonCardComponent],
                exports: [CommonCardComponent]
            })
        ], CommonCardModule);
        return CommonCardModule;
    }());

    var CommonTableComponent = /** @class */ (function () {
        function CommonTableComponent() {
            this.rowsperPage = 5;
            this.showPagination = true;
            this.rowsPerPageOptions = [5, 10, 25, 50, 100];
        }
        CommonTableComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], CommonTableComponent.prototype, "tableData", void 0);
        __decorate([
            core.Input()
        ], CommonTableComponent.prototype, "columns", void 0);
        __decorate([
            core.Input()
        ], CommonTableComponent.prototype, "rowsperPage", void 0);
        __decorate([
            core.Input()
        ], CommonTableComponent.prototype, "showPagination", void 0);
        __decorate([
            core.Input()
        ], CommonTableComponent.prototype, "rowsPerPageOptions", void 0);
        CommonTableComponent = __decorate([
            core.Component({
                selector: 'common-table',
                template: "<p-table\n  *ngIf=\"tableData && tableData.length\"\n  [columns]=\"columns\"\n  [value]=\"tableData\"\n  dataKey=\"agencyId\"\n  [responsive]=\"true\"\n  [resizableColumns]=\"true\"\n  [rowHover]=\"true\"\n  [rows]=\"rowsperPage\"\n  [scrollable]=\"true\"\n>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{ col.header }}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-data let-columns=\"columns\">\n    <tr>\n      <td *ngFor=\"let col of columns\">\n        {{ data[col.field] }}\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n",
                styles: [".tableStyleClass{height:100%;width:100%;border:1px solid #000}"]
            })
        ], CommonTableComponent);
        return CommonTableComponent;
    }());

    var CommonTableModule = /** @class */ (function () {
        function CommonTableModule() {
        }
        CommonTableModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, PrimeNgModule],
                declarations: [CommonTableComponent],
                exports: [CommonTableComponent]
            })
        ], CommonTableModule);
        return CommonTableModule;
    }());

    var CommonSearchComponent = /** @class */ (function () {
        function CommonSearchComponent() {
            this.isDisabled = false;
            this.showDropDown = false;
            this.placeholder = 'Search...';
            this.selectedSearchResult = new core.EventEmitter();
            this.searchQuery = '';
            this.searchResults = null;
            this.errorMessage = null;
        }
        CommonSearchComponent.prototype.ngOnInit = function () { };
        CommonSearchComponent.prototype.handleSearch = function (searchQuery) {
            var lowerCaseQueryString = searchQuery.toLocaleLowerCase().trim();
            if (lowerCaseQueryString.length === 0) {
                this.searchQuery = '';
            }
            else if (lowerCaseQueryString.length > 0) {
                this.searchQuery = lowerCaseQueryString;
                this.checkSearchResults();
            }
        };
        CommonSearchComponent.prototype.checkSearchResults = function () {
            var searchResults = this.getSearchResults();
            if (typeof searchResults === 'string') {
                this.errorMessage = searchResults;
                this.searchResults = null;
            }
            this.errorMessage = null;
            this.searchResults = searchResults;
        };
        CommonSearchComponent.prototype.getSearchResults = function () {
            var _this = this;
            var filteredAgents = [];
            var errorMessage;
            this.searchArray.forEach(function (data) {
                Object.values(data)
                    .map(function (value) {
                    return value
                        .toString()
                        .toLowerCase()
                        .trim();
                })
                    .some(function (searchString) {
                    if (!searchString.includes(_this.searchQuery)) {
                        errorMessage = 'No records found.';
                        return false;
                    }
                    else if (searchString.includes(_this.searchQuery)) {
                        filteredAgents.push(__assign(__assign({}, data), { field: searchString }));
                        return true;
                    }
                    return false;
                });
            });
            return filteredAgents && filteredAgents.length ? filteredAgents : errorMessage;
        };
        __decorate([
            core.Input()
        ], CommonSearchComponent.prototype, "isDisabled", void 0);
        __decorate([
            core.Input()
        ], CommonSearchComponent.prototype, "showDropDown", void 0);
        __decorate([
            core.Input()
        ], CommonSearchComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], CommonSearchComponent.prototype, "searchArray", void 0);
        __decorate([
            core.Input()
        ], CommonSearchComponent.prototype, "stylesClass", void 0);
        __decorate([
            core.Output()
        ], CommonSearchComponent.prototype, "selectedSearchResult", void 0);
        CommonSearchComponent = __decorate([
            core.Component({
                selector: 'common-search',
                template: "<div class=\"container height-width\">\n  <div class=\"form-group row align-items-center\">\n    <div class=\"col-xs-12 col-md-12 col-sm-12\">\n      <input\n        [class]=\"isDisabled === true ? 'form-control disabled-class' : 'form-control'\"\n        [placeholder]=\"placeholder\"\n        type=\"search\"\n        name=\"searchQuery\"\n        #searchQuery\n        [ngStyle]=\"stylesClass\"\n        [disabled]=\"isDisabled\"\n        (input)=\"handleSearch(searchQuery.value)\"\n      />\n    </div>\n    <div *ngIf=\"searchQuery.value.length > 0\" class=\"position-relative col-xs-12 col-md-12\">\n      <ng-container *ngIf=\"errorMessage !== null; else showList\">\n        <ul class=\"cursor-pointer search-results\">\n          <li class=\"no-bullets list-items\">{{ errorMessage }}</li>\n        </ul>\n      </ng-container>\n      <ng-template #showList>\n        <ul class=\"cursor-pointer search-results\">\n          <li\n            (click)=\"selectedSearchResult.emit(value)\"\n            class=\"no-bullets list-items\"\n            style=\"text-transform: capitalize;\"\n            *ngFor=\"let value of searchResults; let i = index\"\n            :key=\"i\"\n          >\n            {{ value.field }}\n          </li>\n        </ul>\n      </ng-template>\n    </div>\n  </div>\n</div>\n",
                styles: [".container{position:relative}.defaultInputStyle{width:25rem}.search-results{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:0;margin:0;width:88%;height:100%;z-index:999;box-sizing:border-box}.disabled-class{background-color:#d3d3d3}.list-items{text-align:center;padding:.5rem;border-bottom:1px solid #d3d3d3;width:100%;color:#fff;background-color:#4c4c4c}.list-items:hover{color:#000;background-color:#fff}"]
            })
        ], CommonSearchComponent);
        return CommonSearchComponent;
    }());

    var CommonSearchModule = /** @class */ (function () {
        function CommonSearchModule() {
        }
        CommonSearchModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, PrimeNgModule],
                declarations: [CommonSearchComponent],
                exports: [CommonSearchComponent]
            })
        ], CommonSearchModule);
        return CommonSearchModule;
    }());

    exports.CommonButtonModule = CommonButtonModule;
    exports.CommonCardModule = CommonCardModule;
    exports.CommonModalModule = CommonModalModule;
    exports.CommonSearchModule = CommonSearchModule;
    exports.CommonTableModule = CommonTableModule;
    exports.PrimeNgModule = PrimeNgModule;
    exports.ɵa = CommonButtonComponent;
    exports.ɵb = CommonModalComponent;
    exports.ɵc = CommonCardComponent;
    exports.ɵd = CommonTableComponent;
    exports.ɵe = CommonSearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-common-components.umd.js.map
