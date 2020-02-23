import { __decorate, __assign } from 'tslib';
import { NgModule, EventEmitter, Input, Output, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpinnerModule } from 'primeng/spinner';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';

var PrimeNgModule = /** @class */ (function () {
    function PrimeNgModule() {
    }
    PrimeNgModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [
                ButtonModule,
                CalendarModule,
                CheckboxModule,
                ChipsModule,
                CardModule,
                ConfirmDialogModule,
                DropdownModule,
                DialogModule,
                LightboxModule,
                InputTextModule,
                InputMaskModule,
                InputSwitchModule,
                InputTextareaModule,
                ListboxModule,
                MultiSelectModule,
                SelectButtonModule,
                SpinnerModule,
                SidebarModule,
                TableModule,
                ToolbarModule,
                ToggleButtonModule
            ]
        })
    ], PrimeNgModule);
    return PrimeNgModule;
}());

var CommonButtonComponent = /** @class */ (function () {
    function CommonButtonComponent() {
        this.buttonType = 'button';
        this.isDisabled = false;
        this.handleClick = new EventEmitter();
    }
    CommonButtonComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], CommonButtonComponent.prototype, "buttonText", void 0);
    __decorate([
        Input()
    ], CommonButtonComponent.prototype, "buttonType", void 0);
    __decorate([
        Input()
    ], CommonButtonComponent.prototype, "isDisabled", void 0);
    __decorate([
        Input()
    ], CommonButtonComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Output()
    ], CommonButtonComponent.prototype, "handleClick", void 0);
    CommonButtonComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule],
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
        this.closeModal = new EventEmitter();
    }
    CommonModalComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "isModalOpen", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "headerText", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "showHeader", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "showFooter", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "classProp", void 0);
    __decorate([
        Output()
    ], CommonModalComponent.prototype, "closeModal", void 0);
    CommonModalComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule],
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
        Input()
    ], CommonCardComponent.prototype, "showHeader", void 0);
    __decorate([
        Input()
    ], CommonCardComponent.prototype, "showFooter", void 0);
    CommonCardComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule],
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
        Input()
    ], CommonTableComponent.prototype, "tableData", void 0);
    __decorate([
        Input()
    ], CommonTableComponent.prototype, "columns", void 0);
    __decorate([
        Input()
    ], CommonTableComponent.prototype, "rowsperPage", void 0);
    __decorate([
        Input()
    ], CommonTableComponent.prototype, "showPagination", void 0);
    __decorate([
        Input()
    ], CommonTableComponent.prototype, "rowsPerPageOptions", void 0);
    CommonTableComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule, PrimeNgModule],
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
        this.selectedSearchResult = new EventEmitter();
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
        Input()
    ], CommonSearchComponent.prototype, "isDisabled", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "showDropDown", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "searchArray", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "stylesClass", void 0);
    __decorate([
        Output()
    ], CommonSearchComponent.prototype, "selectedSearchResult", void 0);
    CommonSearchComponent = __decorate([
        Component({
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
        NgModule({
            imports: [CommonModule, PrimeNgModule],
            declarations: [CommonSearchComponent],
            exports: [CommonSearchComponent]
        })
    ], CommonSearchModule);
    return CommonSearchModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CommonButtonModule, CommonCardModule, CommonModalModule, CommonSearchModule, CommonTableModule, PrimeNgModule, CommonButtonComponent as ɵa, CommonModalComponent as ɵb, CommonCardComponent as ɵc, CommonTableComponent as ɵd, CommonSearchComponent as ɵe };
//# sourceMappingURL=angular-common-components.js.map
