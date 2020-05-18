import { __decorate, __assign } from 'tslib';
import {
  NgModule,
  EventEmitter,
  Input,
  Output,
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  Directive,
  ElementRef,
  ViewChild,
  HostListener,
  forwardRef,
  ɵɵdefineInjectable,
  Injectable
} from '@angular/core';
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
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, Validators, FormBuilder, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { trigger, transition, style, animate } from '@angular/animations';

var PrimeNgModule = /** @class */ (function() {
  function PrimeNgModule() {}
  PrimeNgModule = __decorate(
    [
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
          TabViewModule,
          TableModule,
          ToolbarModule,
          ToggleButtonModule,
          PaginatorModule,
          ToastModule
        ],
        providers: [ConfirmationService, MessageService]
      })
    ],
    PrimeNgModule
  );
  return PrimeNgModule;
})();

var CommonButtonComponent = /** @class */ (function() {
  function CommonButtonComponent() {
    this.buttonType = 'button';
    this.isDisabled = false;
    this.handleClick = new EventEmitter();
  }
  CommonButtonComponent.prototype.ngOnInit = function() {};
  __decorate([Input()], CommonButtonComponent.prototype, 'buttonText', void 0);
  __decorate([Input()], CommonButtonComponent.prototype, 'buttonType', void 0);
  __decorate([Input()], CommonButtonComponent.prototype, 'isDisabled', void 0);
  __decorate([Input()], CommonButtonComponent.prototype, 'backgroundColor', void 0);
  __decorate([Output()], CommonButtonComponent.prototype, 'handleClick', void 0);
  CommonButtonComponent = __decorate(
    [
      Component({
        selector: 'common-button',
        template:
          '\n    <ng-container>\n      <button\n        [ngStyle]="{ \'background-color\': backgroundColor }"\n        [type]="buttonType"\n        (click)="handleClick.emit($event)"\n        [disabled]="isDisabled"\n      >\n        {{ buttonText }}\n      </button>\n    </ng-container>\n  ',
        styles: [
          'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;cursor:pointer;background-color:green}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
        ]
      })
    ],
    CommonButtonComponent
  );
  return CommonButtonComponent;
})();

var CommonButtonModule = /** @class */ (function() {
  function CommonButtonModule() {}
  CommonButtonModule = __decorate(
    [
      NgModule({
        imports: [CommonModule],
        declarations: [CommonButtonComponent],
        exports: [CommonButtonComponent]
      })
    ],
    CommonButtonModule
  );
  return CommonButtonModule;
})();

var CommonModalComponent = /** @class */ (function() {
  function CommonModalComponent() {
    this.isModalOpen = false;
    this.headerText = 'Header Text';
    this.showHeader = true;
    this.showFooter = true;
    this.classProp = {};
    this.closeModal = new EventEmitter();
  }
  __decorate([Input()], CommonModalComponent.prototype, 'isModalOpen', void 0);
  __decorate([Input()], CommonModalComponent.prototype, 'headerText', void 0);
  __decorate([Input()], CommonModalComponent.prototype, 'showHeader', void 0);
  __decorate([Input()], CommonModalComponent.prototype, 'showFooter', void 0);
  __decorate([Input()], CommonModalComponent.prototype, 'classProp', void 0);
  __decorate([Output()], CommonModalComponent.prototype, 'closeModal', void 0);
  CommonModalComponent = __decorate(
    [
      Component({
        selector: 'common-modal',
        template:
          '\n    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">\n      <div modal-inner-container>\n        <div *ngIf="showHeader" class="modal-header">\n          <div style="margin-left: 0.5rem;">{{ headerText }}</div>\n          <div class="icon-container">\n            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>\n          </div>\n        </div>\n      </div>\n      <div class="modal-content">\n        <ng-content select="div[role=content]"></ng-content>\n      </div>\n      <footer *ngIf="showFooter" class="modal-footer">\n        <ng-content select="div[role=footer]"></ng-content>\n      </footer>\n    </div>\n    <div [class.is-overlay]="isModalOpen"></div>\n  ',
        styles: [
          '.modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:3;box-sizing:border-box;overflow-y:scroll;height:50%;width:50%;background-color:#fff}.is-overlay{position:fixed;top:0;right:0;bottom:0;height:100vh;width:100vw;left:0;background-color:rgba(0,0,0,.6);z-index:2}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}'
        ]
      })
    ],
    CommonModalComponent
  );
  return CommonModalComponent;
})();

var CommonModalModule = /** @class */ (function() {
  function CommonModalModule() {}
  CommonModalModule = __decorate(
    [
      NgModule({
        imports: [CommonModule],
        declarations: [CommonModalComponent],
        exports: [CommonModalComponent]
      })
    ],
    CommonModalModule
  );
  return CommonModalModule;
})();

var CommonCardComponent = /** @class */ (function() {
  function CommonCardComponent() {
    this.heightWidth = '';
    this.headerStyles = '';
  }
  CommonCardComponent.prototype.ngOnInit = function() {};
  __decorate([Input()], CommonCardComponent.prototype, 'showHeader', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'showFooter', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'heightWidth', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'headerStyles', void 0);
  CommonCardComponent = __decorate(
    [
      Component({
        selector: 'common-card',
        template:
          '\n    <div [ngStyle]="heightWidth" class="card-container height-width">\n      <div class="card">\n        <div [ngStyle]="headerStyles" *ngIf="showHeader" class="card-header">\n          <ng-content select="div[role=header]"></ng-content>\n        </div>\n        <div class="card-body height-width">\n          <ng-content></ng-content>\n        </div>\n        <div class="card-footer" *ngIf="showFooter">\n          <ng-content select="div[role=footer]"></ng-content>\n        </div>\n      </div>\n    </div>\n  ',
        styles: [
          '.card-container{height:50%;width:50%;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow:hidden;box-sizing:border-box}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;box-sizing:border-box;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;overflow:hidden;box-sizing:border-box;margin:.5rem 0;word-wrap:break-word}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden;box-sizing:border-box}'
        ]
      })
    ],
    CommonCardComponent
  );
  return CommonCardComponent;
})();

var CommonCardModule = /** @class */ (function() {
  function CommonCardModule() {}
  CommonCardModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, PrimeNgModule],
        declarations: [CommonCardComponent],
        exports: [CommonCardComponent]
      })
    ],
    CommonCardModule
  );
  return CommonCardModule;
})();

var CommonTableComponent = /** @class */ (function() {
  function CommonTableComponent(confirmationService, messageService) {
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.rowsperPage = 5;
    this.showPagination = true;
    this.rowsPerPageOptions = [5, 10, 25, 50, 100];
    this.editTableData = new EventEmitter();
    this.first = 0;
    this.rowsPerPageSelection = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 25, value: 25 },
      { label: 100, value: 100 }
    ];
  }
  CommonTableComponent.prototype.ngOnInit = function() {
    if (this.tableData && this.tableData.length) {
      this.totalRecords = this.tableData.length;
    }
  };
  CommonTableComponent.prototype.nextPage = function() {
    this.first = this.first + this.rowsperPage;
  };
  CommonTableComponent.prototype.previousPage = function() {
    this.first = this.first - this.rowsperPage;
  };
  CommonTableComponent.prototype.reset = function() {
    this.first = 0;
  };
  CommonTableComponent.prototype.isLastPage = function() {
    return this.first === this.tableData.length - this.rowsperPage;
  };
  CommonTableComponent.prototype.isFirstPage = function() {
    return this.first === 0;
  };
  CommonTableComponent.prototype.setRowsPerPage = function(event) {
    this.rowsperPage = event.value;
  };
  CommonTableComponent.prototype.deleteData = function(data) {
    var _this = this;
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Record',
      icon: 'fa fa-info-circle',
      accept: function() {
        _this.tableData = _this.tableData.filter(function(dataValue) {
          return dataValue.agencyId !== data.agencyId;
        });
        _this.messageService.add({ severity: 'success', key: 'deleteSuccess', summary: 'Record deleted.' });
      },
      reject: function() {
        return;
      }
    });
  };
  CommonTableComponent.ctorParameters = function() {
    return [{ type: ConfirmationService }, { type: MessageService }];
  };
  __decorate([Input()], CommonTableComponent.prototype, 'dataKey', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'tableData', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'columns', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'rowsperPage', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'showPagination', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'rowsPerPageOptions', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'styleClass', void 0);
  __decorate([Output()], CommonTableComponent.prototype, 'editTableData', void 0);
  CommonTableComponent = __decorate(
    [
      Component({
        selector: 'common-table',
        template:
          '<ng-container *ngIf="tableData && tableData.length; else showErrorMessage">\n  <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>\n  <p-toast key="deleteSuccess"></p-toast>\n  <p-table\n    #dt\n    [columns]="columns"\n    [value]="tableData"\n    [dataKey]="dataKey"\n    [responsive]="true"\n    [resizableColumns]="true"\n    [rowHover]="true"\n    [rows]="rowsperPage"\n    [scrollable]="true"\n    [style]="styleClass"\n    [rowHover]="true"\n    [totalRecords]="totalRecords"\n    [(first)]="first"\n    [paginator]="showPagination"\n    [(selection)]="selectedData"\n  >\n    <ng-template pTemplate="caption">\n      <div style="display: flex; justify-content: flex-start; height: 100%; width: 100%;">\n        <input\n          pInputText\n          type="text"\n          (input)="dt.filterGlobal($event.target.value, \'contains\')"\n          placeholder="Global Search"\n        />\n      </div>\n    </ng-template>\n    <ng-template pTemplate="header" let-columns>\n      <tr>\n        <th style="width: 30%;">\n          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n        </th>\n        <th style="width: 100%; height: 100%;" *ngFor="let col of columns">\n          {{ col.header }}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="body" let-data let-columns="columns">\n      <tr>\n        <td style="width: 30%;">\n          <p-tableCheckbox [value]="data"></p-tableCheckbox>\n        </td>\n        <td style="width: 50%;">\n          <i (click)="editTableData.emit(data)" style="margin-right: 1rem;" class="cursor-pointer fa fa-pencil"></i>\n          <i (click)="deleteData(data)" class="fa fa-trash cursor-pointer"></i>\n        </td>\n        <td style="width: 100%; height: 100%;" *ngFor="let col of columns">\n          {{ data[col.field] }}\n        </td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="paginatorleft">\n      <div style="padding: 1rem;">\n        <button\n          type="button"\n          pButton\n          icon="fa fa-chevron-left"\n          (click)="previousPage()"\n          style="margin-right:.5em"\n          [disabled]="isFirstPage()"\n        ></button>\n        <button type="button" pButton icon="fa fa-refresh" (click)="reset()" style="margin-right:.5em"></button>\n        <button\n          type="button"\n          pButton\n          icon="fa fa-chevron-right"\n          (click)="nextPage()"\n          [disabled]="isLastPage()"\n        ></button>\n        <p-dropdown (onChange)="setRowsPerPage($event)" [options]="rowsPerPageSelection"></p-dropdown>\n      </div>\n    </ng-template>\n  </p-table>\n</ng-container>\n<ng-template #showErrorMessage>No data available.</ng-template>\n',
        styles: ['.tableStyleClass{height:100%;width:100%;border:1px solid #000}']
      })
    ],
    CommonTableComponent
  );
  return CommonTableComponent;
})();

var CommonTableModule = /** @class */ (function() {
  function CommonTableModule() {}
  CommonTableModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, PrimeNgModule, FormsModule],
        declarations: [CommonTableComponent],
        exports: [CommonTableComponent]
      })
    ],
    CommonTableModule
  );
  return CommonTableModule;
})();

var CommonSearchComponent = /** @class */ (function() {
  function CommonSearchComponent() {
    this.isDisabled = false;
    this.showDropDown = false;
    this.placeholder = 'Search...';
    this.selectedSearchResult = new EventEmitter();
    this.searchQuery = '';
    this.searchResults = null;
  }
  CommonSearchComponent.prototype.handleSearch = function(searchQuery) {
    var lowerCaseQueryString = searchQuery.toLowerCase().trim();
    if (lowerCaseQueryString.length === 0) {
      this.searchQuery = '';
    } else if (lowerCaseQueryString.length > 0) {
      this.searchQuery = lowerCaseQueryString;
      this.checkSearchResults();
    }
  };
  CommonSearchComponent.prototype.checkSearchResults = function() {
    var searchResults = this.getSearchResults();
    this.searchResults = searchResults;
  };
  CommonSearchComponent.prototype.getSearchResults = function() {
    var _this = this;
    var arrayKeys = this.searchArray.map(function(element) {
      return Object.keys(element);
    })[0];
    var searchResult = [];
    var errorMessage = null;
    this.searchArray.forEach(function(element) {
      arrayKeys.forEach(function(key) {
        var lowerCaseElement = element[key]
          .toString()
          .toLowerCase()
          .trim();
        if (!lowerCaseElement.includes(_this.searchQuery)) {
          errorMessage = [{ value: 'No Records found,' }];
        } else if (lowerCaseElement.includes(_this.searchQuery)) {
          searchResult.push(__assign(__assign({}, element), { value: element[key] }));
        }
      });
    });
    return searchResult && searchResult.length ? searchResult : errorMessage;
  };
  CommonSearchComponent.prototype.sendSearchResult = function(value, selectedString) {
    this.searchQuery = selectedString;
    this.searchResults = null;
    this.selectedSearchResult.emit(value);
  };
  __decorate([Input()], CommonSearchComponent.prototype, 'isDisabled', void 0);
  __decorate([Input()], CommonSearchComponent.prototype, 'showDropDown', void 0);
  __decorate([Input()], CommonSearchComponent.prototype, 'placeholder', void 0);
  __decorate([Input()], CommonSearchComponent.prototype, 'searchArray', void 0);
  __decorate([Input()], CommonSearchComponent.prototype, 'stylesClass', void 0);
  __decorate([Output()], CommonSearchComponent.prototype, 'selectedSearchResult', void 0);
  CommonSearchComponent = __decorate(
    [
      Component({
        selector: 'common-search',
        template:
          '<div [ngStyle]="stylesClass" class="search-container">\n  <input\n    [class]="isDisabled === true ? \'form-control disabled-class\' : \'form-control\'"\n    class="input-styles"\n    [placeholder]="placeholder"\n    type="search"\n    pInputText\n    name="searchQuery"\n    [disabled]="isDisabled"\n    [(ngModel)]="searchQuery"\n    (ngModelChange)="handleSearch($event)"\n    [ngStyle]="stylesClass"\n  />\n  <ul [ngStyle]="stylesClass" *ngIf="searchQuery.length > 0" class="cursor-pointer list-container">\n    <li\n      (click)="sendSearchResult(result, result.value)"\n      class="no-bullets list"\n      style="text-transform: capitalize;"\n      *ngFor="let result of searchResults; let i = index"\n      :key="i"\n    >\n      {{ result.value }}\n    </li>\n  </ul>\n</div>\n',
        styles: [
          '.search-container{width:500px;height:100%;box-sizing:border-box}.input-styles{width:500px}.list-container{position:absolute;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;height:200px;width:500px;z-index:99}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left}.list:hover{background-color:#dddd;cursor:pointer}.disabled-class{background-color:#d3d3d3}'
        ]
      })
    ],
    CommonSearchComponent
  );
  return CommonSearchComponent;
})();

var CommonSearchModule = /** @class */ (function() {
  function CommonSearchModule() {}
  CommonSearchModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, FormsModule, PrimeNgModule],
        declarations: [CommonSearchComponent],
        exports: [CommonSearchComponent]
      })
    ],
    CommonSearchModule
  );
  return CommonSearchModule;
})();

var CommonTabComponent = /** @class */ (function() {
  function CommonTabComponent() {
    this.canDelete = true;
    this.currentIndex = 0;
  }
  CommonTabComponent.prototype.ngOnInit = function() {};
  CommonTabComponent.prototype.setIndex = function(index) {
    this.currentIndex = index;
  };
  CommonTabComponent.prototype.deleteTab = function(tabIndex) {
    var _this = this;
    this.tabContent = this.tabContent.filter(function(item) {
      return _this.tabContent.indexOf(item) !== tabIndex;
    });
  };
  __decorate([Input()], CommonTabComponent.prototype, 'tabContent', void 0);
  __decorate([Input()], CommonTabComponent.prototype, 'canDelete', void 0);
  CommonTabComponent = __decorate(
    [
      Component({
        selector: 'common-tab',
        template:
          '<div class="container">\n  <div class="tab-container" *ngFor="let item of tabContent; let i = index">\n    <div (click)="setIndex(i)" [class]="currentIndex === i ? \'tabs\' : \'not-selected\'">\n      <i style="margin-left: 0.3rem;" [class]="item.leftIcon"></i>\n      <div>{{ item.header }}</div>\n      <i (click)="deleteTab(i)" style="margin-right: 0.3rem;" [class]="canDelete ? \'fa fa-times\' : \'\'"></i>\n    </div>\n    <div class="tab-content" *ngIf="currentIndex === i">\n      <div>{{ item.content }}</div>\n    </div>\n  </div>\n</div>\n',
        styles: [
          '.container{display:-webkit-box;display:flex;height:100%;width:100%;box-sizing:border-box;overflow:hidden}.tab-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow:hidden;width:20%;height:20%;box-sizing:border-box}.tabs{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:0 .5rem;background-color:#1b82d7;color:#fff;padding:.3rem;border-radius:6px;cursor:pointer}.not-selected{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:0 .5rem;background-color:#d3d3d3;color:#fff;padding:.3rem;border-radius:6px;cursor:pointer}.tab-content{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;overflow:hidden;text-align:left;word-wrap:break-word;box-sizing:border-box;height:100%;width:100%;margin:.3rem}'
        ]
      })
    ],
    CommonTabComponent
  );
  return CommonTabComponent;
})();

var CommonTabModule = /** @class */ (function() {
  function CommonTabModule() {}
  CommonTabModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, PrimeNgModule],
        declarations: [CommonTabComponent],
        exports: [CommonTabComponent]
      })
    ],
    CommonTabModule
  );
  return CommonTabModule;
})();

var DynamicFormComponent = /** @class */ (function() {
  function DynamicFormComponent(fb) {
    this.fb = fb;
    this.config = [];
    this.formSubmittedValues = new EventEmitter();
  }
  Object.defineProperty(DynamicFormComponent.prototype, 'controls', {
    get: function() {
      return this.config.filter(function(_a) {
        var type = _a.type;
        return type !== 'button';
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'changes', {
    get: function() {
      return this.form.valueChanges;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'valid', {
    get: function() {
      return this.form.valid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'value', {
    get: function() {
      return this.form.value;
    },
    enumerable: true,
    configurable: true
  });
  DynamicFormComponent.prototype.ngOnInit = function() {
    this.form = this.createGroup();
  };
  DynamicFormComponent.prototype.createGroup = function() {
    var _this = this;
    var group = this.fb.group({});
    this.config.forEach(function(field) {
      if (field.type === 'button') {
        return;
      }
      var control = _this.fb.control(field.value, _this.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  };
  DynamicFormComponent.prototype.bindValidations = function(validations) {
    if (validations.length > 0) {
      var validList_1 = [];
      validations.forEach(function(valid) {
        validList_1.push(valid.validator);
      });
      return Validators.compose(validList_1);
    }
    return null;
  };
  DynamicFormComponent.prototype.handleSubmit = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.formSubmittedValues.emit(this.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  };
  DynamicFormComponent.prototype.setDisabled = function(name, disable) {
    if (this.form.controls[name]) {
      var method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.config = this.config.map(function(item) {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  };
  DynamicFormComponent.prototype.validateAllFormFields = function(formGroup) {
    Object.keys(formGroup.controls).forEach(function(field) {
      var control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  };
  DynamicFormComponent.ctorParameters = function() {
    return [{ type: FormBuilder }];
  };
  __decorate([Input()], DynamicFormComponent.prototype, 'config', void 0);
  __decorate([Output()], DynamicFormComponent.prototype, 'formSubmittedValues', void 0);
  DynamicFormComponent = __decorate(
    [
      Component({
        exportAs: 'dynamicForm',
        selector: 'app-dynamic-form',
        template:
          '\n    <form\n      class="dynamic-form"\n      [formGroup]="form"\n      (ngSubmit)="handleSubmit($event)"\n    >\n      <ng-container\n        *ngFor="let field of config"\n        appDynamicField\n        [config]="field"\n        [group]="form"\n      >\n      </ng-container>\n    </form>\n  '
      })
    ],
    DynamicFormComponent
  );
  return DynamicFormComponent;
})();

var FormButtonComponent = /** @class */ (function() {
  function FormButtonComponent() {}
  FormButtonComponent = __decorate(
    [
      Component({
        selector: 'app-form-button',
        template:
          '\n    <div class="dynamic-field form-button" [formGroup]="group">\n      <button [disabled]="config.disabled" type="submit">\n        {{ config.label }}\n      </button>\n    </div>\n  '
      })
    ],
    FormButtonComponent
  );
  return FormButtonComponent;
})();

var FormInputComponent = /** @class */ (function() {
  function FormInputComponent() {}
  FormInputComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        pInputText\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormInputComponent
  );
  return FormInputComponent;
})();

var FormSelectComponent = /** @class */ (function() {
  function FormSelectComponent() {}
  FormSelectComponent = __decorate(
    [
      Component({
        selector: 'app-form-select',
        template:
          '\n    <div class="dynamic-field form-select" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-dropdown [formControlName]="config.name" [options]="config.options"></p-dropdown>\n      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormSelectComponent
  );
  return FormSelectComponent;
})();

var FormDatePickerComponent = /** @class */ (function() {
  function FormDatePickerComponent() {}
  FormDatePickerComponent = __decorate(
    [
      Component({
        selector: 'app-form-date-picker',
        template:
          '\n    <div class="demo-full-width margin-top" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormDatePickerComponent
  );
  return FormDatePickerComponent;
})();

var FormCheckboxComponent = /** @class */ (function() {
  function FormCheckboxComponent() {}
  FormCheckboxComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n        [checked]="config.value"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormCheckboxComponent
  );
  return FormCheckboxComponent;
})();

var FormRadioComponent = /** @class */ (function() {
  function FormRadioComponent() {}
  FormRadioComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngFor="let validation of config.validations">\n      <div *ngIf="group.get(config.name).hasError(validation.name)">\n        {{ validation.message }}\n      </div>\n    </ng-container>\n    </div>\n  '
      })
    ],
    FormRadioComponent
  );
  return FormRadioComponent;
})();

var FormMultiSelectComponent = /** @class */ (function() {
  function FormMultiSelectComponent() {}
  FormMultiSelectComponent = __decorate(
    [
      Component({
        selector: 'app-form-multi-select',
        template:
          '\n    <div [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-multiSelect\n        [formControlName]="config.name"\n        [options]="config.options"\n      ></p-multiSelect>\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormMultiSelectComponent
  );
  return FormMultiSelectComponent;
})();

var FormSliderComponent = /** @class */ (function() {
  function FormSliderComponent() {}
  FormSliderComponent = __decorate(
    [
      Component({
        selector: 'app-form-slider',
        template:
          '\n    <div style="display: \'flex\'; align-items: \'center\';" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-slider [style]="{ width: \'300px\' }" [formControlName]="config.name"></p-slider>\n    </div>\n  '
      })
    ],
    FormSliderComponent
  );
  return FormSliderComponent;
})();

var components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  date: FormDatePickerComponent,
  radiobutton: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  multiSelect: FormMultiSelectComponent,
  slider: FormSliderComponent
};
var DynamicFieldDirective = /** @class */ (function() {
  function DynamicFieldDirective(resolver, container) {
    this.resolver = resolver;
    this.container = container;
  }
  DynamicFieldDirective.prototype.ngOnChanges = function() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  };
  DynamicFieldDirective.prototype.ngOnInit = function() {
    if (!components[this.config.type]) {
      var supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        'Trying to use an unsupported type (' + this.config.type + ').\n        Supported types: ' + supportedTypes
      );
    }
    var component = this.resolver.resolveComponentFactory(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  };
  DynamicFieldDirective.ctorParameters = function() {
    return [{ type: ComponentFactoryResolver }, { type: ViewContainerRef }];
  };
  __decorate([Input()], DynamicFieldDirective.prototype, 'config', void 0);
  __decorate([Input()], DynamicFieldDirective.prototype, 'group', void 0);
  DynamicFieldDirective = __decorate(
    [
      Directive({
        selector: '[appDynamicField]'
      })
    ],
    DynamicFieldDirective
  );
  return DynamicFieldDirective;
})();

var DynamicFormModule = /** @class */ (function() {
  function DynamicFormModule() {}
  DynamicFormModule = __decorate(
    [
      NgModule({
        imports: [
          BrowserAnimationsModule,
          CommonModule,
          ReactiveFormsModule,
          FormsModule,
          MultiSelectModule,
          CalendarModule,
          DropdownModule,
          SliderModule
        ],
        declarations: [
          DynamicFieldDirective,
          DynamicFormComponent,
          FormButtonComponent,
          FormInputComponent,
          FormSelectComponent,
          FormDatePickerComponent,
          FormCheckboxComponent,
          FormRadioComponent,
          FormMultiSelectComponent,
          FormSliderComponent
        ],
        exports: [DynamicFormComponent],
        entryComponents: [
          FormButtonComponent,
          FormInputComponent,
          FormSelectComponent,
          FormDatePickerComponent,
          FormCheckboxComponent,
          FormRadioComponent,
          FormMultiSelectComponent,
          FormSliderComponent
        ]
      })
    ],
    DynamicFormModule
  );
  return DynamicFormModule;
})();

var CommonMultiSelectComponent = /** @class */ (function() {
  function CommonMultiSelectComponent(eRef) {
    this.eRef = eRef;
    this.preSelectedOption = [];
    this.listOfValues = [];
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.searchText = '';
    this.currentIndex = [];
    this.selectAll = false;
    this.propagateChange = function(_) {};
    this.onTouched = function() {};
  }
  CommonMultiSelectComponent_1 = CommonMultiSelectComponent;
  CommonMultiSelectComponent.prototype.writeValue = function(value) {
    if (value !== undefined || value !== null) {
      this.preSelectedOption = value;
    }
  };
  CommonMultiSelectComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonMultiSelectComponent.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  CommonMultiSelectComponent.prototype.clickout = function(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      this.isListDisplayed = false;
    }
  };
  CommonMultiSelectComponent.prototype.ngOnInit = function() {
    this.listOfValues = this.options;
  };
  CommonMultiSelectComponent.prototype.checkForPrePopulatedValues = function() {
    var _this = this;
    var matchedItems = [];
    if (this.preSelectedOption && this.preSelectedOption.length) {
      this.preSelectedOption.forEach(function(option) {
        _this.options.forEach(function(item) {
          if (item.label === option) {
            matchedItems.push({ label: option, value: item.value });
          }
        });
      });
      this.selectedItems = matchedItems;
    }
  };
  CommonMultiSelectComponent.prototype.ngAfterViewChecked = function() {
    this.checkForPrePopulatedValues();
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  };
  CommonMultiSelectComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  CommonMultiSelectComponent.prototype.clearSelectedItemsOnXclick = function() {
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.preSelectedOption = [];
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.onSearchFilter = function(value) {
    if (value === '' || value.length === 0) {
      this.searchText = '';
      this.listOfValues = this.options;
    } else if (value && value.length > 0) {
      this.listOfValues = this.listOfValues.filter(function(item) {
        return item.value
          .toLowerCase()
          .trim()
          .includes(value);
      });
    }
  };
  CommonMultiSelectComponent.prototype.callPropagateMethod = function(selectedItemsArray) {
    this.selectedItems = selectedItemsArray;
    var listOfItems = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.preSelectedOption = listOfItems;
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.onSelectAll = function(event) {
    var isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.callPropagateMethod(this.options);
    } else {
      this.selectAll = false;
      this.callPropagateMethod([]);
    }
  };
  CommonMultiSelectComponent.prototype.addSelectedValues = function(data, index) {
    this.selectedItems.push(data);
    this.currentIndex.push(index);
    this.preSelectedOption = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.removeSelectedValues = function(data, index) {
    this.selectedItems = this.selectedItems.filter(function(item) {
      return item.value !== data.value;
    });
    this.currentIndex = this.currentIndex.filter(function(i) {
      return i !== index;
    });
    this.preSelectedOption = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.addRemoveData = function(data, index) {
    if (
      this.selectedItems.filter(function(item) {
        return item.value === data.value;
      }).length > 0 ||
      this.selectedItems.filter(function(item) {
        return item.label === data.label;
      }).length > 0
    ) {
      this.removeSelectedValues(data, index);
    } else if (
      !(
        this.selectedItems.filter(function(item) {
          return item.value === data.value;
        }).length > 0
      ) ||
      !(
        this.selectedItems.filter(function(item) {
          return item.label === data.label;
        }).length > 0
      )
    ) {
      this.addSelectedValues(data, index);
    }
  };
  var CommonMultiSelectComponent_1;
  CommonMultiSelectComponent.ctorParameters = function() {
    return [{ type: ElementRef }];
  };
  __decorate([ViewChild('searchBox', { read: ElementRef })], CommonMultiSelectComponent.prototype, 'searchBox', void 0);
  __decorate([Input()], CommonMultiSelectComponent.prototype, 'options', void 0);
  __decorate([Input()], CommonMultiSelectComponent.prototype, 'preSelectedOption', void 0);
  __decorate([HostListener('document:click', ['$event'])], CommonMultiSelectComponent.prototype, 'clickout', null);
  CommonMultiSelectComponent = CommonMultiSelectComponent_1 = __decorate(
    [
      Component({
        selector: 'common-multi-select',
        template:
          '<ng-container>\n  <ng-container *ngIf="!preSelectedOption.length; else showSelected">\n    <button (click)="toggleList()">\n      <div>Choose</div>\n    </button>\n    <i\n      (click)="toggleList()"\n      style="color: gray; position: relative; right: 30px;"\n      class="cursor-pointer fa fa-chevron-down"\n    ></i>\n  </ng-container>\n  <ng-template #showSelected>\n    <div class="list-of-selected-itens">\n      <ng-container *ngIf="preSelectedOption.length >= 4; else showItems">\n        <div class="cursor-pointer" (click)="toggleList()" style="width: 250px;">\n          {{ preSelectedOption.length }} items selected\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative; right: -5px;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-container>\n      <ng-template #showItems>\n        <div style="width: 200px;" *ngFor="let item of preSelectedOption; let i = index">\n          <div style="border: 1px solid gray; width: 70px; height: auto; margin-right: 3px; padding: 0.1rem 0.1rem;">\n            <i\n              (click)="addRemoveData({ label: item, value: item }, i)"\n              class="fa fa-times cursor-pointer"\n              style="color: gray; position: relative;"\n            ></i>\n            {{ item }}\n          </div>\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative;;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-template>\n    </div>\n  </ng-template>\n  <div *ngIf="isListDisplayed" class="list-container" style="display: flex; flex-direction: column">\n    <div style="display: flex; align-items: center; justify-content: center; width: 100%;">\n      <div style="margin-left: 5px;" (click)="onSelectAll(!selectAll)" style="text-align: center;" class="check-box">\n        <i [class]="selectAll ? \'fa fa-check black\' : \'\'"></i>\n      </div>\n      <input\n        name="searchBox"\n        #searchBox\n        type="text"\n        (input)="onSearchFilter(searchBox.value)"\n        style="padding: 0.3rem; margin-left: 5px; margin-right: 10px;"\n      />\n      <i (click)="clearSelectedItemsOnXclick()" class=" cursor-pointer fa fa-times" style="color:gray;"></i>\n    </div>\n    <ul>\n      <li\n        *ngFor="let item of listOfValues; let i = index"\n        [class]="\n          currentIndex.includes(i) || preSelectedOption.includes(item.label) || preSelectedOption.includes(item.value)\n            ? \'drop-down\'\n            : \'list\'\n        "\n        (click)="addRemoveData(item, i)"\n        style="display: flex; align-items: center; cursor: pointer"\n      >\n        <div style="text-align: center;" class="check-box">\n          <i\n            [class]="\n              currentIndex.includes(i) ||\n              preSelectedOption.includes(item.label) ||\n              preSelectedOption.includes(item.value)\n                ? \'fa fa-check black\'\n                : \'\'\n            "\n          ></i>\n        </div>\n        <div>{{ item.label }}</div>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n',
        providers: [
          {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function() {
              return CommonMultiSelectComponent_1;
            }),
            multi: true
          }
        ],
        styles: [
          'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:gray;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:260px}button:hover{cursor:pointer}button:active,button:focus{outline:0}.list-of-selected-itens{display:-webkit-box;display:flex;padding:.5rem;margin:.5rem;font-size:1rem;color:gray;border:.1rem solid;border-radius:.5rem;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:260px;box-sizing:border-box}.check-box{-webkit-appearance:none;width:25px;height:25px;background:#fff;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem}.black{color:#000}.list-container{position:absolute;width:260px;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;height:250px;overflow-y:scroll}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left}.list:hover{background-color:#dddD;cursor:pointer}.drop-down{background-color:#007ad9;color:#fff;padding:.5rem;text-align:left}.drop-down:hover{cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
        ]
      })
    ],
    CommonMultiSelectComponent
  );
  return CommonMultiSelectComponent;
})();

var CommonMultiSelectModule = /** @class */ (function() {
  function CommonMultiSelectModule() {}
  CommonMultiSelectModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
        declarations: [CommonMultiSelectComponent],
        exports: [CommonMultiSelectComponent]
      })
    ],
    CommonMultiSelectModule
  );
  return CommonMultiSelectModule;
})();

var CommonSplitButtonComponent = /** @class */ (function() {
  function CommonSplitButtonComponent() {
    this.showIcon = true;
    this.icon = 'fa fa-times';
    this.buttonType = 'button';
    this.isListDisplayed = false;
  }
  CommonSplitButtonComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'buttonText', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'showIcon', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'icon', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'buttonType', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'backgroundColor', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'listItems', void 0);
  CommonSplitButtonComponent = __decorate(
    [
      Component({
        selector: 'common-split-button',
        template:
          '\n    <div (click)="toggleList()" appCommonHoverDirective (closeList)="toggleList()">\n      <div style="width: \'fit-content\';">\n        <i *ngIf="showIcon" [class]="icon" style="color: \'white\'; position: \'relative\'; left: \'30px\';"></i>\n        <button [ngStyle]="{ \'background-color\': backgroundColor }" [type]="buttonType">\n          {{ buttonText }}\n        </button>\n        <i\n          (click)="toggleList()"\n          style="color: \'white\'; position: \'relative\'; right: \'30px\';"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">\n          <ng-container *ngFor="let item of listItems">\n            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>\n            <ng-template #addClick>\n              <li (click)="item.command()" class="list">{{ item.label }}</li>\n            </ng-template>\n          </ng-container>\n        </ul>\n        <ng-template #showNothing></ng-template>\n      </div>\n    </div>\n  ',
        styles: [
          'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:#00f}button:active,button:focus{outline:0}.divider{width:100%;height:100%}.list-container{position:absolute;width:15%;height:auto;background:#fff;left:30px;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left;list-style:none}.list:hover{background-color:#dddD;cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
        ]
      })
    ],
    CommonSplitButtonComponent
  );
  return CommonSplitButtonComponent;
})();

var HoverDirective = /** @class */ (function() {
  function HoverDirective() {
    this.ismouseLeave = false;
    this.isClickEvent = false;
    this.closeList = new EventEmitter();
  }
  HoverDirective.prototype.onMouseEnter = function() {
    this.ismouseLeave = false;
  };
  HoverDirective.prototype.onMouseLeave = function() {
    this.ismouseLeave = true;
  };
  HoverDirective.prototype.onClick = function() {
    if (this.ismouseLeave) {
      this.closeList.emit();
    }
  };
  __decorate([Output()], HoverDirective.prototype, 'closeList', void 0);
  __decorate([HostListener('mouseenter')], HoverDirective.prototype, 'onMouseEnter', null);
  __decorate([HostListener('mouseleave')], HoverDirective.prototype, 'onMouseLeave', null);
  __decorate([HostListener('document:click')], HoverDirective.prototype, 'onClick', null);
  HoverDirective = __decorate([Directive({ selector: '[appCommonHoverDirective]' })], HoverDirective);
  return HoverDirective;
})();

var CommonSplitButtonModule = /** @class */ (function() {
  function CommonSplitButtonModule() {}
  CommonSplitButtonModule = __decorate(
    [
      NgModule({
        imports: [CommonModule],
        declarations: [CommonSplitButtonComponent, HoverDirective],
        exports: [CommonSplitButtonComponent]
      })
    ],
    CommonSplitButtonModule
  );
  return CommonSplitButtonModule;
})();

var CommonSelectComponent = /** @class */ (function() {
  function CommonSelectComponent() {
    this.selectedOption = '';
    this.selectedItem = new EventEmitter();
    this.isListDisplayed = false;
    this.disabled = false;
    this.onTouched = function() {};
    this.propagateChange = function(_) {};
  }
  CommonSelectComponent_1 = CommonSelectComponent;
  CommonSelectComponent.prototype.writeValue = function(value) {
    if (value !== undefined) {
      this.selectedOption = value;
    }
  };
  CommonSelectComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonSelectComponent.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  CommonSelectComponent.prototype.setDisabledState = function(isDisabled) {
    this.disabled = isDisabled;
  };
  CommonSelectComponent.prototype.setOption = function(option) {
    this.selectedOption = option;
    this.selectedItem.emit(option);
    this.isListDisplayed = !this.isListDisplayed;
    this.propagateChange(this.selectedOption);
  };
  CommonSelectComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  var CommonSelectComponent_1;
  __decorate([Input()], CommonSelectComponent.prototype, 'options', void 0);
  __decorate([Input()], CommonSelectComponent.prototype, 'selectedOption', void 0);
  __decorate([Output()], CommonSelectComponent.prototype, 'selectedItem', void 0);
  CommonSelectComponent = CommonSelectComponent_1 = __decorate(
    [
      Component({
        selector: 'common-select',
        template:
          '<div class="select-container">\n  <div (click)="toggleList()" class="dropdown">\n    <div *ngIf="selectedOption; else showDefault">{{ selectedOption }}</div>\n    <ng-template #showDefault>\n      <div>Choose</div>\n    </ng-template>\n    <i style="color: gray; z-index: 99;" class="cursor-pointer fa fa-chevron-down"></i>\n  </div>\n  <div style="border: 1px solid rgb(224, 210, 210); width: 200px; border-width: thin;"></div>\n  <ul *ngIf="isListDisplayed" class="list-container">\n    <li (click)="setOption(option)" class="list" *ngFor="let option of options">\n      {{ option }}\n    </li>\n  </ul>\n</div>\n',
        providers: [
          {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function() {
              return CommonSelectComponent_1;
            }),
            multi: true
          }
        ],
        styles: [
          '.select-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:200px;height:100%;box-sizing:border-box}.dropdown{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:gray;border:none;outline:0;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:200px}.dropdown:hover{cursor:pointer}.dropdown:active,.dropdown:focus{outline:0}.list-container{position:absolute;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;height:200px;width:200px;z-index:99}.list{list-style:none;padding:.5rem;text-align:left;width:200px}.list-disabled{color:gray;text-align:left}.list:hover{background-color:#dddd;cursor:pointer}'
        ]
      })
    ],
    CommonSelectComponent
  );
  return CommonSelectComponent;
})();

var CommonSelectModule = /** @class */ (function() {
  function CommonSelectModule() {}
  CommonSelectModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, ReactiveFormsModule, FormsModule],
        declarations: [CommonSelectComponent],
        exports: [CommonSelectComponent]
      })
    ],
    CommonSelectModule
  );
  return CommonSelectModule;
})();

var CommonCounterComponent = /** @class */ (function() {
  function CommonCounterComponent() {
    // tslint:disable-next-line: variable-name
    this._counterValue = 0; // notice the '_'
    this.propagateChange = function(_) {};
  }
  CommonCounterComponent_1 = CommonCounterComponent;
  Object.defineProperty(CommonCounterComponent.prototype, 'counterValue', {
    get: function() {
      return this._counterValue;
    },
    set: function(val) {
      this._counterValue = val;
      this.propagateChange(this._counterValue);
    },
    enumerable: true,
    configurable: true
  });
  CommonCounterComponent.prototype.writeValue = function(value) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  };
  CommonCounterComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonCounterComponent.prototype.registerOnTouched = function(fn) {};
  CommonCounterComponent.prototype.increment = function() {
    this.counterValue++;
  };
  CommonCounterComponent.prototype.decrement = function() {
    this.counterValue--;
  };
  var CommonCounterComponent_1;
  __decorate([Input()], CommonCounterComponent.prototype, '_counterValue', void 0);
  CommonCounterComponent = CommonCounterComponent_1 = __decorate(
    [
      Component({
        selector: 'common-counter',
        template:
          '\n    <button (click)="increment()">+</button>\n    {{ counterValue }}\n    <button (click)="decrement()">-</button>\n  ',
        providers: [
          {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function() {
              return CommonCounterComponent_1;
            }),
            multi: true
          }
        ]
      })
    ],
    CommonCounterComponent
  );
  return CommonCounterComponent;
})();

var CommonCounterModule = /** @class */ (function() {
  function CommonCounterModule() {}
  CommonCounterModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        declarations: [CommonCounterComponent],
        exports: [CommonCounterComponent]
      })
    ],
    CommonCounterModule
  );
  return CommonCounterModule;
})();

var LocalStorageService = /** @class */ (function() {
  function LocalStorageService() {}
  LocalStorageService.setLocalStorage = function(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  };
  LocalStorageService.getLocalStorage = function(key) {
    return localStorage.getItem(key);
  };
  LocalStorageService.clearLocalStorage = function() {
    return localStorage.clear();
  };
  LocalStorageService.removeItem = function(key) {
    return localStorage.removeItem(key);
  };
  LocalStorageService.ɵprov = ɵɵdefineInjectable({
    factory: function LocalStorageService_Factory() {
      return new LocalStorageService();
    },
    token: LocalStorageService,
    providedIn: 'root'
  });
  LocalStorageService = __decorate([Injectable({ providedIn: 'root' })], LocalStorageService);
  return LocalStorageService;
})();

var LocalStorageModule = /** @class */ (function() {
  function LocalStorageModule() {}
  LocalStorageModule = __decorate(
    [
      NgModule({
        providers: [LocalStorageService]
      })
    ],
    LocalStorageModule
  );
  return LocalStorageModule;
})();

var CommonSliderComponent = /** @class */ (function() {
  function CommonSliderComponent() {
    this.sliderLabel = 'Range';
    this.minMaxRange = [2, 22];
    this.rangeValue = 5;
    this.getRange = new EventEmitter();
  }
  __decorate([Input()], CommonSliderComponent.prototype, 'sliderLabel', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'minMaxRange', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'rangeValue', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'isDisabled', void 0);
  __decorate([Output()], CommonSliderComponent.prototype, 'getRange', void 0);
  CommonSliderComponent = __decorate(
    [
      Component({
        selector: 'common-slider',
        template:
          '<div style="display: flex; flex-direction: column; width: 100%; height: 100%;">\n  <div>{{ sliderLabel }}: {{ rangeValue }}</div>\n  <input\n    [disabled]="isDisabled"\n    class="slider"\n    pInputText\n    type="range"\n    [min]="minMaxRange[0]"\n    [max]="minMaxRange[1]"\n    [(ngModel)]="rangeValue"\n    (ngModelChange)="getRange.emit($event)"\n  />\n</div>\n',
        styles: [
          '.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:0;opacity:.7;-webkit-transition:opacity .2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#007ad9;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4caf50;cursor:pointer}'
        ]
      })
    ],
    CommonSliderComponent
  );
  return CommonSliderComponent;
})();

var CommonSliderModule = /** @class */ (function() {
  function CommonSliderModule() {}
  CommonSliderModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        declarations: [CommonSliderComponent],
        exports: [CommonSliderComponent]
      })
    ],
    CommonSliderModule
  );
  return CommonSliderModule;
})();

var ASC = 'ASC';
var DESC = 'DESC';
var handleAscSort = function(tableData, selectedHeader) {
  return tableData.sort(function(a, b) {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return a[selectedHeader] - b[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return a[selectedHeader].localeCompare(b[selectedHeader]);
    }
    return null;
  });
};
var handleDescSort = function(tableData, selectedHeader) {
  return tableData.sort(function(a, b) {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return b[selectedHeader] - a[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return b[selectedHeader].localeCompare(a[selectedHeader]);
    }
    return null;
  });
};

var PaginatorPubSubService = /** @class */ (function() {
  function PaginatorPubSubService() {
    this.state$ = new BehaviorSubject({
      rowsPerPage: null,
      tableData: [],
      data: [],
      page: null,
      tableDataOriginalState: []
    });
  }
  PaginatorPubSubService.prototype.changeState = function(value) {
    this.state$.next({
      rowsPerPage: value.rowsPerPage,
      tableData: value.tableData,
      data: value.data,
      page: value.page,
      tableDataOriginalState: value.tableDataOriginalState
    });
  };
  Object.defineProperty(PaginatorPubSubService.prototype, 'state', {
    get: function() {
      return this.state$.asObservable();
    },
    enumerable: true,
    configurable: true
  });
  PaginatorPubSubService.ɵprov = ɵɵdefineInjectable({
    factory: function PaginatorPubSubService_Factory() {
      return new PaginatorPubSubService();
    },
    token: PaginatorPubSubService,
    providedIn: 'root'
  });
  PaginatorPubSubService = __decorate([Injectable({ providedIn: 'root' })], PaginatorPubSubService);
  return PaginatorPubSubService;
})();

var CommonTableTwoComponent = /** @class */ (function() {
  function CommonTableTwoComponent(paginatorService) {
    this.paginatorService = paginatorService;
    this.rowsPerPage = 5;
    this.selectedRowData = new EventEmitter();
    this.dataToEdit = new EventEmitter();
    this.dataToDelete = new EventEmitter();
    this.sortDirection = 'ASC';
    this.selectedHeader = null;
    this.numberOfRowsToDisplay = [5, 10, 15, 20, 25];
    this.isSelectAll = false;
    this.selectedRows = [];
    this.selectedRowIndex = [];
  }
  CommonTableTwoComponent.prototype.ngOnInit = function() {
    var originalState = this.tableData.slice(0, this.rowsPerPage);
    var tableDataCopy = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
    this.handlePaginatorService(originalState, tableDataCopy);
  };
  CommonTableTwoComponent.prototype.handlePaginatorService = function(originalState, tableDataCopy) {
    var _this = this;
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: tableDataCopy,
      page: 1,
      tableDataOriginalState: originalState
    });
    this.paginatorService.state.subscribe(function(data) {
      (_this.rowsPerPage = data.rowsPerPage), (_this.tableData = data.tableData);
    });
  };
  CommonTableTwoComponent.prototype.setSortDirection = function() {
    if (this.sortDirection === 'ASC') {
      this.sortDirection = 'DESC';
      return this.sortDirection;
    }
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      return this.sortDirection;
    }
  };
  CommonTableTwoComponent.prototype.handleSort = function(header) {
    this.setSortDirection();
    this.selectedHeader = header;
    switch (this.sortDirection) {
      case ASC:
        return (this.tableData = handleAscSort(this.tableData, header));
      case DESC:
        return (this.tableData = handleDescSort(this.tableData, header));
      default:
        return this.tableData;
    }
  };
  CommonTableTwoComponent.prototype.checkIfSelectedItemsAreInArray = function(data) {
    var _this = this;
    if (
      this.selectedRows.filter(function(item) {
        return item[_this.dataKey] === data[_this.dataKey];
      }).length > 0
    ) {
      return true;
    } else if (
      !(
        this.selectedRows.filter(function(item) {
          return item[_this.dataKey] === data[_this.dataKey];
        }).length > 0
      )
    ) {
      return false;
    }
  };
  CommonTableTwoComponent.prototype.getRowData = function(data, index) {
    if (this.checkIfSelectedItemsAreInArray(data)) {
      this.removeSelectedValues(data, index);
    } else if (!this.checkIfSelectedItemsAreInArray(data)) {
      this.addSelectedValues(data, index);
    }
  };
  CommonTableTwoComponent.prototype.addSelectedValues = function(data, index) {
    this.selectedRowIndex.push(index);
    this.selectedRows.push(data);
    this.selectedRowData.emit(data);
  };
  CommonTableTwoComponent.prototype.removeSelectedValues = function(data, index) {
    var _this = this;
    this.selectedRows = this.selectedRows.filter(function(item) {
      return item[_this.dataKey] !== data[_this.dataKey];
    });
    this.selectedRowIndex = this.selectedRowIndex.filter(function(i) {
      return i !== index;
    });
    this.selectedRowData.emit(data);
  };
  CommonTableTwoComponent.prototype.getDataToEdit = function(data) {
    this.dataToEdit.emit(data);
  };
  CommonTableTwoComponent.prototype.getDataToDelete = function(data) {
    this.dataToDelete.emit(data);
  };
  CommonTableTwoComponent.prototype.toggleSelectAll = function() {
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      this.selectedRows = this.tableData;
    }
    this.selectedRows = [];
  };
  CommonTableTwoComponent.ctorParameters = function() {
    return [{ type: PaginatorPubSubService }];
  };
  __decorate([Input()], CommonTableTwoComponent.prototype, 'tableData', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'dataKey', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'tableHeaders', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'showEditOption', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'showDeleteOption', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'rowsPerPage', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'selectedRowData', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'dataToEdit', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'dataToDelete', void 0);
  CommonTableTwoComponent = __decorate(
    [
      Component({
        selector: 'common-table-2',
        template:
          '<div style="box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2); transition: 0.3s;">\n  <table class="table-container">\n    <tr>\n      <th>\n        <div (click)="toggleSelectAll()" [class]="isSelectAll ? \'all-selected\' : \'\'" class="check-box cursor-pointer">\n          <i [class]="isSelectAll ? \'fa fa-check white-check\' : \'\'"></i>\n        </div>\n      </th>\n      <th *ngFor="let headers of tableHeaders" :key="headers.name">\n        <span (click)="handleSort(headers.prop)" class="cursor-pointer">\n          <i\n            *ngIf="selectedHeader === headers.prop; else showDefault"\n            [class]="\n              sortDirection === \'ASC\'\n                ? \'cursor-pointer fa fa-chevron-up\'\n                : sortDirection === \'DESC\'\n                ? \'cursor-pointer fa fa-chevron-down\'\n                : \'\'\n            "\n          ></i>\n          <ng-template #showDefault>\n            <i\n              *ngIf="headers.prop === tableHeaders[0].prop"\n              [class]="\n                sortDirection === \'ASC\'\n                  ? \'cursor-pointer fa fa-chevron-up\'\n                  : sortDirection === \'DESC\'\n                  ? \'cursor-pointer fa fa-chevron-down\'\n                  : \'\'\n              "\n            ></i>\n          </ng-template>\n          {{ headers.name }}\n        </span>\n      </th>\n      <th *ngIf="showEditOption"></th>\n      <th *ngIf="showDeleteOption"></th>\n    </tr>\n    <tr\n      (click)="getRowData(data, i)"\n      [class]="selectedRowIndex.includes(i) || isSelectAll ? \'active\' : \'\'"\n      *ngFor="let data of tableData; let i = index"\n      :key="dataKey"\n    >\n      <td>\n        <div\n          style="display: flex; align-items: center;"\n          [class]="isSelectAll || selectedRowIndex.includes(i) ? \'all-selected\' : \'\'"\n          class="check-box cursor-pointer"\n        >\n          <i [class]="isSelectAll || selectedRowIndex.includes(i) ? \'fa fa-check white-check\' : \'\'"></i>\n        </div>\n      </td>\n      <td *ngFor="let headers of tableHeaders" :key="headers.name">\n        {{ data[headers.prop] }}\n      </td>\n      <td *ngIf="showEditOption">\n        <div style="display: flex; justify-content: space-around;">\n          <i (click)="getDataToEdit(data)" class="cursor-pointer edit-icon fa fa-edit"></i>\n        </div>\n      </td>\n      <td *ngIf="showDeleteOption">\n        <div style="display: flex; justify-content: space-around;">\n          <i (click)="getDataToDelete(data)" class="cursor-pointer trash-icon fa fa-trash"></i>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n  <common-paginator [options]="numberOfRowsToDisplay"></common-paginator>\n</div>\n',
        styles: [
          'button{background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:0}.fa-chevron-down,.fa-chevron-up{color:rgba(0,0,0,.26)}.table-container{height:100%;width:100%;display:table;table-layout:fixed;border-collapse:collapse}.active{background-color:#007ad9}th{text-align:left;-webkit-transition:.3s;transition:.3s;padding:1rem;border-bottom:1px solid #dbd7d7}td{text-align:left;padding:1rem;-webkit-transition:.3s;transition:.3s;border-bottom:1px solid #dbd7d7;cursor:pointer}.white-check{color:#fff}.check-box{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-appearance:none;width:25px;height:25px;background:#fff;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem}.all-selected{-webkit-appearance:none;width:25px;height:25px;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem;background-color:#007ad9}.edit-icon{color:#00f}.trash-icon{color:red}footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;height:100%;width:100%}'
        ]
      })
    ],
    CommonTableTwoComponent
  );
  return CommonTableTwoComponent;
})();

var CommonPaginatorComponent = /** @class */ (function() {
  function CommonPaginatorComponent(paginatorService) {
    this.paginatorService = paginatorService;
  }
  CommonPaginatorComponent.prototype.ngOnInit = function() {
    var _this = this;
    this.paginatorService.state.subscribe(function(data) {
      (_this.rowsPerPage = data.rowsPerPage),
        (_this.tableData = data.tableData),
        (_this.data = data.data),
        (_this.page = data.page),
        (_this.tableDataOriginalState = data.tableDataOriginalState);
    });
  };
  CommonPaginatorComponent.prototype.getSelectedOption = function(data) {
    this.rowsPerPage = data;
    this.tableData = this.data.slice(0, data);
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      page: this.page,
      tableDataOriginalState: this.tableDataOriginalState
    });
  };
  CommonPaginatorComponent.prototype.nextPage = function() {
    this.tableData = this.data.slice(this.rowsPerPage, this.data.length);
    this.page = this.rowsPerPage + 1;
    this.rowsPerPage = this.rowsPerPage + this.tableData.length;
    this.paginatorService.changeState({
      page: this.page,
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  };
  CommonPaginatorComponent.prototype.previousPage = function() {
    var previous = this.data.length - this.tableData.length;
    this.page = previous - this.tableData.length;
    this.tableData = this.data.slice(0, previous);
    this.rowsPerPage = previous;
    this.paginatorService.changeState({
      page: this.page,
      tableData: this.tableData,
      rowsPerPage: this.rowsPerPage,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  };
  CommonPaginatorComponent.prototype.resetPaginator = function() {
    this.rowsPerPage = 5;
    this.page = 1;
    this.tableData = this.tableDataOriginalState.slice(0, this.rowsPerPage);
    this.paginatorService.changeState({
      page: this.page,
      tableData: this.tableData,
      rowsPerPage: this.rowsPerPage,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  };
  CommonPaginatorComponent.prototype.calculateendOfPages = function() {};
  CommonPaginatorComponent.prototype.goToLastPage = function() {
    var subtractLengths = this.data.length - this.tableData.length;
    if (subtractLengths < this.rowsPerPage) {
      this.page = this.rowsPerPage + 1;
      this.tableData = this.data.slice(subtractLengths + 1);
      this.rowsPerPage = this.data.length;
      this.paginatorService.changeState({
        page: this.page,
        tableData: this.tableData,
        rowsPerPage: this.rowsPerPage,
        data: this.data,
        tableDataOriginalState: this.tableDataOriginalState
      });
    }
  };
  CommonPaginatorComponent.ctorParameters = function() {
    return [{ type: PaginatorPubSubService }];
  };
  __decorate([Input()], CommonPaginatorComponent.prototype, 'options', void 0);
  CommonPaginatorComponent = __decorate(
    [
      Component({
        selector: 'common-paginator',
        template:
          '<footer>\n  <common-select\n    (selectedItem)="getSelectedOption($event)"\n    [options]="options"\n    name="tableRows"\n    [(ngModel)]="rowsPerPage"\n  ></common-select>\n  <div\n    style="display: flex; justify-content: center; align-items: center; width: 100%; margin-bottom: 1rem; padding: 1rem;"\n  >\n    <div style="width: 100px; color: rgba(0,0,0,.26);">{{ page }} - {{ rowsPerPage }} of {{ data.length }}</div>\n    <button\n      [disabled]="page === 1 || rowsPerPage > data.length"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-double-left"\n      (click)="resetPaginator()"\n    ></button>\n    <button\n      [disabled]="page === 1 || rowsPerPage > data.length"\n      (click)="previousPage()"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-left"\n    ></button>\n    <button\n      [disabled]="rowsPerPage === data.length || rowsPerPage > data.length"\n      (click)="nextPage()"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-right"\n    ></button>\n    <button\n      [disabled]="rowsPerPage > data.length"\n      (click)="goToLastPage()"\n      style="font-size: 1.5rem;"\n      class="fa fa-angle-double-right"\n    ></button>\n  </div>\n</footer>\n',
        styles: [
          'button{background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:0}footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;height:100%;width:100%}'
        ]
      })
    ],
    CommonPaginatorComponent
  );
  return CommonPaginatorComponent;
})();

var PaginatorPubServiceModule = /** @class */ (function() {
  function PaginatorPubServiceModule() {}
  PaginatorPubServiceModule = __decorate(
    [
      NgModule({
        providers: [PaginatorPubSubService]
      })
    ],
    PaginatorPubServiceModule
  );
  return PaginatorPubServiceModule;
})();

var CommonPaginatorModule = /** @class */ (function() {
  function CommonPaginatorModule() {}
  CommonPaginatorModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, FormsModule, CommonSelectModule],
        declarations: [CommonPaginatorComponent],
        providers: [PaginatorPubServiceModule],
        exports: [CommonPaginatorComponent]
      })
    ],
    CommonPaginatorModule
  );
  return CommonPaginatorModule;
})();

var CommonTableTwoModule = /** @class */ (function() {
  function CommonTableTwoModule() {}
  CommonTableTwoModule = __decorate(
    [
      NgModule({
        imports: [CommonModule, FormsModule, CommonPaginatorModule],
        declarations: [CommonTableTwoComponent],
        providers: [PaginatorPubServiceModule],
        exports: [CommonTableTwoComponent]
      })
    ],
    CommonTableTwoModule
  );
  return CommonTableTwoModule;
})();

var CommonSideBarComponent = /** @class */ (function() {
  function CommonSideBarComponent() {
    this.position = 'left';
  }
  CommonSideBarComponent.prototype.toggleSideBar = function() {
    this.isSideBarOpen = !this.isSideBarOpen;
  };
  __decorate([Input()], CommonSideBarComponent.prototype, 'isSideBarOpen', void 0);
  __decorate([Input()], CommonSideBarComponent.prototype, 'position', void 0);
  CommonSideBarComponent = __decorate(
    [
      Component({
        selector: 'common-side-bar',
        template:
          '\n    <div\n      *ngIf="isSideBarOpen"\n      [@slideInOut]\n      [ngStyle]="{ right: position === \'right\' ? 0 : \'\', left: position === \'left\' ? 0 : \'\' }"\n      class="side-bar"\n    >\n      <div class="icon">\n        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n    <div [class.is-overlay]="isSideBarOpen"></div>\n  ',
        animations: [
          trigger('slideInOut', [
            transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('200ms')]),
            transition('* => void', [animate('200ms', style({ transform: 'translateX(-500px)' }))])
          ])
        ],
        styles: [
          '.side-bar{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;width:500px;z-index:2}.icon{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-right:1rem;padding:1rem;z-index:3}.times-icon{color:red;z-index:4;cursor:pointer}.is-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.6);z-index:1}'
        ]
      })
    ],
    CommonSideBarComponent
  );
  return CommonSideBarComponent;
})();

var CommonSideBarModule = /** @class */ (function() {
  function CommonSideBarModule() {}
  CommonSideBarModule = __decorate(
    [
      NgModule({
        imports: [CommonModule],
        declarations: [CommonSideBarComponent],
        exports: [CommonSideBarComponent]
      })
    ],
    CommonSideBarModule
  );
  return CommonSideBarModule;
})();

/**
 * Generated bundle index. Do not edit.
 */

export {
  CommonButtonModule,
  CommonCardModule,
  CommonCounterModule,
  CommonModalModule,
  CommonMultiSelectModule,
  CommonPaginatorModule,
  CommonSearchModule,
  CommonSelectModule,
  CommonSideBarModule,
  CommonSliderModule,
  CommonSplitButtonModule,
  CommonTabModule,
  CommonTableModule,
  CommonTableTwoModule,
  DynamicFormModule,
  LocalStorageModule,
  PrimeNgModule,
  CommonButtonComponent as ɵa,
  CommonModalComponent as ɵb,
  CommonTableTwoComponent as ɵba,
  CommonSideBarComponent as ɵbb,
  CommonCardComponent as ɵc,
  CommonTableComponent as ɵd,
  CommonSearchComponent as ɵe,
  CommonTabComponent as ɵf,
  DynamicFieldDirective as ɵg,
  DynamicFormComponent as ɵh,
  FormButtonComponent as ɵi,
  FormInputComponent as ɵj,
  FormSelectComponent as ɵk,
  FormDatePickerComponent as ɵl,
  FormCheckboxComponent as ɵm,
  FormRadioComponent as ɵn,
  FormMultiSelectComponent as ɵo,
  FormSliderComponent as ɵp,
  CommonMultiSelectComponent as ɵq,
  CommonSplitButtonComponent as ɵr,
  HoverDirective as ɵs,
  CommonSelectComponent as ɵt,
  CommonCounterComponent as ɵu,
  LocalStorageService as ɵv,
  CommonSliderComponent as ɵw,
  CommonPaginatorComponent as ɵx,
  PaginatorPubSubService as ɵy,
  PaginatorPubServiceModule as ɵz
};
//# sourceMappingURL=angular-common-components.js.map
