import { __decorate } from 'tslib';
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

let PrimeNgModule = class PrimeNgModule {};
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

let CommonButtonComponent = class CommonButtonComponent {
  constructor() {
    this.buttonType = 'button';
    this.isDisabled = false;
    this.handleClick = new EventEmitter();
  }
  ngOnInit() {}
};
__decorate([Input()], CommonButtonComponent.prototype, 'buttonText', void 0);
__decorate([Input()], CommonButtonComponent.prototype, 'buttonType', void 0);
__decorate([Input()], CommonButtonComponent.prototype, 'isDisabled', void 0);
__decorate([Input()], CommonButtonComponent.prototype, 'backgroundColor', void 0);
__decorate([Output()], CommonButtonComponent.prototype, 'handleClick', void 0);
CommonButtonComponent = __decorate(
  [
    Component({
      selector: 'common-button',
      template: `
    <ng-container>
      <button
        [ngStyle]="{ 'background-color': backgroundColor }"
        [type]="buttonType"
        (click)="handleClick.emit($event)"
        [disabled]="isDisabled"
      >
        {{ buttonText }}
      </button>
    </ng-container>
  `,
      styles: [
        'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;cursor:pointer;background-color:green}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
      ]
    })
  ],
  CommonButtonComponent
);

let CommonButtonModule = class CommonButtonModule {};
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

let CommonModalComponent = class CommonModalComponent {
  constructor() {
    this.isModalOpen = false;
    this.headerText = 'Header Text';
    this.showHeader = true;
    this.showFooter = true;
    this.classProp = {};
    this.closeModal = new EventEmitter();
  }
};
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
      template: `
    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">
      <div modal-inner-container>
        <div *ngIf="showHeader" class="modal-header">
          <div style="margin-left: 0.5rem;">{{ headerText }}</div>
          <div class="icon-container">
            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="modal-content">
        <ng-content select="div[role=content]"></ng-content>
      </div>
      <footer *ngIf="showFooter" class="modal-footer">
        <ng-content select="div[role=footer]"></ng-content>
      </footer>
    </div>
    <div [class.is-overlay]="isModalOpen"></div>
  `,
      styles: [
        '.modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:3;box-sizing:border-box;overflow-y:scroll;height:50%;width:50%;background-color:#fff}.is-overlay{position:fixed;top:0;right:0;bottom:0;height:100vh;width:100vw;left:0;background-color:rgba(0,0,0,.6);z-index:2}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}'
      ]
    })
  ],
  CommonModalComponent
);

let CommonModalModule = class CommonModalModule {};
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

let CommonCardComponent = class CommonCardComponent {
  constructor() {
    this.heightWidth = '';
    this.headerStyles = '';
  }
  ngOnInit() {}
};
__decorate([Input()], CommonCardComponent.prototype, 'showHeader', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'showFooter', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'heightWidth', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'headerStyles', void 0);
CommonCardComponent = __decorate(
  [
    Component({
      selector: 'common-card',
      template: `
    <div [ngStyle]="heightWidth" class="card-container height-width">
      <div class="card">
        <div [ngStyle]="headerStyles" *ngIf="showHeader" class="card-header">
          <ng-content select="div[role=header]"></ng-content>
        </div>
        <div class="card-body height-width">
          <ng-content></ng-content>
        </div>
        <div class="card-footer" *ngIf="showFooter">
          <ng-content select="div[role=footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
      styles: [
        '.card-container{height:50%;width:50%;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow:hidden;box-sizing:border-box}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;box-sizing:border-box;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;overflow:hidden;box-sizing:border-box;margin:.5rem 0;word-wrap:break-word}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden;box-sizing:border-box}'
      ]
    })
  ],
  CommonCardComponent
);

let CommonCardModule = class CommonCardModule {};
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

let CommonTableComponent = class CommonTableComponent {
  constructor(confirmationService, messageService) {
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
  ngOnInit() {
    if (this.tableData && this.tableData.length) {
      this.totalRecords = this.tableData.length;
    }
  }
  nextPage() {
    this.first = this.first + this.rowsperPage;
  }
  previousPage() {
    this.first = this.first - this.rowsperPage;
  }
  reset() {
    this.first = 0;
  }
  isLastPage() {
    return this.first === this.tableData.length - this.rowsperPage;
  }
  isFirstPage() {
    return this.first === 0;
  }
  setRowsPerPage(event) {
    this.rowsperPage = event.value;
  }
  deleteData(data) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Record',
      icon: 'fa fa-info-circle',
      accept: () => {
        this.tableData = this.tableData.filter(dataValue => dataValue.agencyId !== data.agencyId);
        this.messageService.add({ severity: 'success', key: 'deleteSuccess', summary: 'Record deleted.' });
      },
      reject: () => {
        return;
      }
    });
  }
};
CommonTableComponent.ctorParameters = () => [{ type: ConfirmationService }, { type: MessageService }];
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

let CommonTableModule = class CommonTableModule {};
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

let CommonSearchComponent = class CommonSearchComponent {
  constructor() {
    this.isDisabled = false;
    this.showDropDown = false;
    this.placeholder = 'Search...';
    this.selectedSearchResult = new EventEmitter();
    this.searchQuery = '';
    this.searchResults = null;
  }
  handleSearch(searchQuery) {
    const lowerCaseQueryString = searchQuery.toLowerCase().trim();
    if (lowerCaseQueryString.length === 0) {
      this.searchQuery = '';
    } else if (lowerCaseQueryString.length > 0) {
      this.searchQuery = lowerCaseQueryString;
      this.checkSearchResults();
    }
  }
  checkSearchResults() {
    const searchResults = this.getSearchResults();
    this.searchResults = searchResults;
  }
  getSearchResults() {
    const arrayKeys = this.searchArray.map(element => Object.keys(element))[0];
    const searchResult = [];
    let errorMessage = null;
    this.searchArray.forEach(element => {
      arrayKeys.forEach(key => {
        const lowerCaseElement = element[key]
          .toString()
          .toLowerCase()
          .trim();
        if (!lowerCaseElement.includes(this.searchQuery)) {
          errorMessage = [{ value: 'No Records found,' }];
        } else if (lowerCaseElement.includes(this.searchQuery)) {
          searchResult.push(Object.assign(Object.assign({}, element), { value: element[key] }));
        }
      });
    });
    return searchResult && searchResult.length ? searchResult : errorMessage;
  }
  sendSearchResult(value, selectedString) {
    this.searchQuery = selectedString;
    this.searchResults = null;
    this.selectedSearchResult.emit(value);
  }
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

let CommonSearchModule = class CommonSearchModule {};
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

let CommonTabComponent = class CommonTabComponent {
  constructor() {
    this.canDelete = true;
    this.currentIndex = 0;
  }
  ngOnInit() {}
  setIndex(index) {
    this.currentIndex = index;
  }
  deleteTab(tabIndex) {
    this.tabContent = this.tabContent.filter(item => {
      return this.tabContent.indexOf(item) !== tabIndex;
    });
  }
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

let CommonTabModule = class CommonTabModule {};
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

let DynamicFormComponent = class DynamicFormComponent {
  constructor(fb) {
    this.fb = fb;
    this.config = [];
    this.formSubmittedValues = new EventEmitter();
  }
  get controls() {
    return this.config.filter(({ type }) => type !== 'button');
  }
  get changes() {
    return this.form.valueChanges;
  }
  get valid() {
    return this.form.valid;
  }
  get value() {
    return this.form.value;
  }
  ngOnInit() {
    this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(field.value, this.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  }
  bindValidations(validations) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.formSubmittedValues.emit(this.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
  setDisabled(name, disable) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.config = this.config.map(item => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }
  validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
};
DynamicFormComponent.ctorParameters = () => [{ type: FormBuilder }];
__decorate([Input()], DynamicFormComponent.prototype, 'config', void 0);
__decorate([Output()], DynamicFormComponent.prototype, 'formSubmittedValues', void 0);
DynamicFormComponent = __decorate(
  [
    Component({
      exportAs: 'dynamicForm',
      selector: 'app-dynamic-form',
      template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="handleSubmit($event)"
    >
      <ng-container
        *ngFor="let field of config"
        appDynamicField
        [config]="field"
        [group]="form"
      >
      </ng-container>
    </form>
  `
    })
  ],
  DynamicFormComponent
);

let FormButtonComponent = class FormButtonComponent {};
FormButtonComponent = __decorate(
  [
    Component({
      selector: 'app-form-button',
      template: `
    <div class="dynamic-field form-button" [formGroup]="group">
      <button [disabled]="config.disabled" type="submit">
        {{ config.label }}
      </button>
    </div>
  `
    })
  ],
  FormButtonComponent
);

let FormInputComponent = class FormInputComponent {};
FormInputComponent = __decorate(
  [
    Component({
      selector: 'app-form-input',
      template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        pInputText
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormInputComponent
);

let FormSelectComponent = class FormSelectComponent {};
FormSelectComponent = __decorate(
  [
    Component({
      selector: 'app-form-select',
      template: `
    <div class="dynamic-field form-select" [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-dropdown [formControlName]="config.name" [options]="config.options"></p-dropdown>
      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormSelectComponent
);

let FormDatePickerComponent = class FormDatePickerComponent {};
FormDatePickerComponent = __decorate(
  [
    Component({
      selector: 'app-form-date-picker',
      template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
      <ng-container
        *ngIf="
          group.controls[this.config.name].touched &&
          group.controls[this.config.name].invalid
        "
      >
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormDatePickerComponent
);

let FormCheckboxComponent = class FormCheckboxComponent {};
FormCheckboxComponent = __decorate(
  [
    Component({
      selector: 'app-form-input',
      template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
        [checked]="config.value"
      />
      <ng-container
        *ngIf="
          group.controls[this.config.name].touched &&
          group.controls[this.config.name].invalid
        "
      >
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormCheckboxComponent
);

let FormRadioComponent = class FormRadioComponent {};
FormRadioComponent = __decorate(
  [
    Component({
      selector: 'app-form-input',
      template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
      <ng-container *ngFor="let validation of config.validations">
      <div *ngIf="group.get(config.name).hasError(validation.name)">
        {{ validation.message }}
      </div>
    </ng-container>
    </div>
  `
    })
  ],
  FormRadioComponent
);

let FormMultiSelectComponent = class FormMultiSelectComponent {};
FormMultiSelectComponent = __decorate(
  [
    Component({
      selector: 'app-form-multi-select',
      template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-multiSelect
        [formControlName]="config.name"
        [options]="config.options"
      ></p-multiSelect>
      <ng-container
        *ngIf="
          group.controls[this.config.name].touched &&
          group.controls[this.config.name].invalid
        "
      >
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormMultiSelectComponent
);

let FormSliderComponent = class FormSliderComponent {};
FormSliderComponent = __decorate(
  [
    Component({
      selector: 'app-form-slider',
      template: `
    <div style="display: 'flex'; align-items: 'center';" [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-slider [style]="{ width: '300px' }" [formControlName]="config.name"></p-slider>
    </div>
  `
    })
  ],
  FormSliderComponent
);

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  date: FormDatePickerComponent,
  radiobutton: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  multiSelect: FormMultiSelectComponent,
  slider: FormSliderComponent
};
let DynamicFieldDirective = class DynamicFieldDirective {
  constructor(resolver, container) {
    this.resolver = resolver;
    this.container = container;
  }
  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(`Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`);
    }
    const component = this.resolver.resolveComponentFactory(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
};
DynamicFieldDirective.ctorParameters = () => [{ type: ComponentFactoryResolver }, { type: ViewContainerRef }];
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

let DynamicFormModule = class DynamicFormModule {};
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

var CommonMultiSelectComponent_1;
let CommonMultiSelectComponent = (CommonMultiSelectComponent_1 = class CommonMultiSelectComponent {
  constructor(eRef) {
    this.eRef = eRef;
    this.preSelectedOption = [];
    this.listOfValues = [];
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.searchText = '';
    this.currentIndex = [];
    this.selectAll = false;
    this.propagateChange = _ => {};
    this.onTouched = () => {};
  }
  writeValue(value) {
    if (value !== undefined || value !== null) {
      this.preSelectedOption = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      this.isListDisplayed = false;
    }
  }
  ngOnInit() {
    this.listOfValues = this.options;
  }
  checkForPrePopulatedValues() {
    const matchedItems = [];
    if (this.preSelectedOption && this.preSelectedOption.length) {
      this.preSelectedOption.forEach(option => {
        this.options.forEach(item => {
          if (item.label === option) {
            matchedItems.push({ label: option, value: item.value });
          }
        });
      });
      this.selectedItems = matchedItems;
    }
  }
  ngAfterViewChecked() {
    this.checkForPrePopulatedValues();
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
  clearSelectedItemsOnXclick() {
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.preSelectedOption = [];
    this.propagateChange(this.preSelectedOption);
  }
  onSearchFilter(value) {
    if (value === '' || value.length === 0) {
      this.searchText = '';
      this.listOfValues = this.options;
    } else if (value && value.length > 0) {
      this.listOfValues = this.listOfValues.filter(item =>
        item.value
          .toLowerCase()
          .trim()
          .includes(value)
      );
    }
  }
  callPropagateMethod(selectedItemsArray) {
    this.selectedItems = selectedItemsArray;
    const listOfItems = this.selectedItems.map(item => item.label);
    this.preSelectedOption = listOfItems;
    this.propagateChange(this.preSelectedOption);
  }
  onSelectAll(event) {
    const isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.callPropagateMethod(this.options);
    } else {
      this.selectAll = false;
      this.callPropagateMethod([]);
    }
  }
  addSelectedValues(data, index) {
    this.selectedItems.push(data);
    this.currentIndex.push(index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }
  removeSelectedValues(data, index) {
    this.selectedItems = this.selectedItems.filter(item => item.value !== data.value);
    this.currentIndex = this.currentIndex.filter(i => i !== index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }
  addRemoveData(data, index) {
    if (
      this.selectedItems.filter(item => item.value === data.value).length > 0 ||
      this.selectedItems.filter(item => item.label === data.label).length > 0
    ) {
      this.removeSelectedValues(data, index);
    } else if (
      !(this.selectedItems.filter(item => item.value === data.value).length > 0) ||
      !(this.selectedItems.filter(item => item.label === data.label).length > 0)
    ) {
      this.addSelectedValues(data, index);
    }
  }
});
CommonMultiSelectComponent.ctorParameters = () => [{ type: ElementRef }];
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
          useExisting: forwardRef(() => CommonMultiSelectComponent_1),
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

let CommonMultiSelectModule = class CommonMultiSelectModule {};
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

let CommonSplitButtonComponent = class CommonSplitButtonComponent {
  constructor() {
    this.showIcon = true;
    this.icon = 'fa fa-times';
    this.buttonType = 'button';
    this.isListDisplayed = false;
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
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
      template: `
    <div (click)="toggleList()" appCommonHoverDirective (closeList)="toggleList()">
      <div style="width: 'fit-content';">
        <i *ngIf="showIcon" [class]="icon" style="color: 'white'; position: 'relative'; left: '30px';"></i>
        <button [ngStyle]="{ 'background-color': backgroundColor }" [type]="buttonType">
          {{ buttonText }}
        </button>
        <i
          (click)="toggleList()"
          style="color: 'white'; position: 'relative'; right: '30px';"
          class="cursor-pointer fa fa-chevron-down"
        ></i>
        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">
          <ng-container *ngFor="let item of listItems">
            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>
            <ng-template #addClick>
              <li (click)="item.command()" class="list">{{ item.label }}</li>
            </ng-template>
          </ng-container>
        </ul>
        <ng-template #showNothing></ng-template>
      </div>
    </div>
  `,
      styles: [
        'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:#00f}button:active,button:focus{outline:0}.divider{width:100%;height:100%}.list-container{position:absolute;width:15%;height:auto;background:#fff;left:30px;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left;list-style:none}.list:hover{background-color:#dddD;cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
      ]
    })
  ],
  CommonSplitButtonComponent
);

let HoverDirective = class HoverDirective {
  constructor() {
    this.ismouseLeave = false;
    this.isClickEvent = false;
    this.closeList = new EventEmitter();
  }
  onMouseEnter() {
    this.ismouseLeave = false;
  }
  onMouseLeave() {
    this.ismouseLeave = true;
  }
  onClick() {
    if (this.ismouseLeave) {
      this.closeList.emit();
    }
  }
};
__decorate([Output()], HoverDirective.prototype, 'closeList', void 0);
__decorate([HostListener('mouseenter')], HoverDirective.prototype, 'onMouseEnter', null);
__decorate([HostListener('mouseleave')], HoverDirective.prototype, 'onMouseLeave', null);
__decorate([HostListener('document:click')], HoverDirective.prototype, 'onClick', null);
HoverDirective = __decorate([Directive({ selector: '[appCommonHoverDirective]' })], HoverDirective);

let CommonSplitButtonModule = class CommonSplitButtonModule {};
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

var CommonSelectComponent_1;
let CommonSelectComponent = (CommonSelectComponent_1 = class CommonSelectComponent {
  constructor() {
    this.selectedOption = '';
    this.selectedItem = new EventEmitter();
    this.isListDisplayed = false;
    this.disabled = false;
    this.onTouched = () => {};
    this.propagateChange = _ => {};
  }
  writeValue(value) {
    if (value !== undefined) {
      this.selectedOption = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  setOption(option) {
    this.selectedOption = option;
    this.selectedItem.emit(option);
    this.isListDisplayed = !this.isListDisplayed;
    this.propagateChange(this.selectedOption);
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
});
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
          useExisting: forwardRef(() => CommonSelectComponent_1),
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

let CommonSelectModule = class CommonSelectModule {};
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

var CommonCounterComponent_1;
let CommonCounterComponent = (CommonCounterComponent_1 = class CommonCounterComponent {
  constructor() {
    // tslint:disable-next-line: variable-name
    this._counterValue = 0; // notice the '_'
    this.propagateChange = _ => {};
  }
  get counterValue() {
    return this._counterValue;
  }
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }
  writeValue(value) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {}
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }
});
__decorate([Input()], CommonCounterComponent.prototype, '_counterValue', void 0);
CommonCounterComponent = CommonCounterComponent_1 = __decorate(
  [
    Component({
      selector: 'common-counter',
      template: `
    <button (click)="increment()">+</button>
    {{ counterValue }}
    <button (click)="decrement()">-</button>
  `,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CommonCounterComponent_1),
          multi: true
        }
      ]
    })
  ],
  CommonCounterComponent
);

let CommonCounterModule = class CommonCounterModule {};
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

let LocalStorageService = class LocalStorageService {
  static setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  static getLocalStorage(key) {
    return localStorage.getItem(key);
  }
  static clearLocalStorage() {
    return localStorage.clear();
  }
  static removeItem(key) {
    return localStorage.removeItem(key);
  }
};
LocalStorageService.ɵprov = ɵɵdefineInjectable({
  factory: function LocalStorageService_Factory() {
    return new LocalStorageService();
  },
  token: LocalStorageService,
  providedIn: 'root'
});
LocalStorageService = __decorate([Injectable({ providedIn: 'root' })], LocalStorageService);

let LocalStorageModule = class LocalStorageModule {};
LocalStorageModule = __decorate(
  [
    NgModule({
      providers: [LocalStorageService]
    })
  ],
  LocalStorageModule
);

let CommonSliderComponent = class CommonSliderComponent {
  constructor() {
    this.sliderLabel = 'Range';
    this.minMaxRange = [2, 22];
    this.rangeValue = 5;
    this.getRange = new EventEmitter();
  }
};
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

let CommonSliderModule = class CommonSliderModule {};
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

const ASC = 'ASC';
const DESC = 'DESC';
const handleAscSort = (tableData, selectedHeader) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return a[selectedHeader] - b[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return a[selectedHeader].localeCompare(b[selectedHeader]);
    }
    return null;
  });
const handleDescSort = (tableData, selectedHeader) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return b[selectedHeader] - a[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return b[selectedHeader].localeCompare(a[selectedHeader]);
    }
    return null;
  });

let PaginatorPubSubService = class PaginatorPubSubService {
  constructor() {
    this.state$ = new BehaviorSubject({
      rowsPerPage: null,
      tableData: [],
      data: [],
      page: null,
      tableDataOriginalState: []
    });
  }
  changeState(value) {
    this.state$.next({
      rowsPerPage: value.rowsPerPage,
      tableData: value.tableData,
      data: value.data,
      page: value.page,
      tableDataOriginalState: value.tableDataOriginalState
    });
  }
  get state() {
    return this.state$.asObservable();
  }
};
PaginatorPubSubService.ɵprov = ɵɵdefineInjectable({
  factory: function PaginatorPubSubService_Factory() {
    return new PaginatorPubSubService();
  },
  token: PaginatorPubSubService,
  providedIn: 'root'
});
PaginatorPubSubService = __decorate([Injectable({ providedIn: 'root' })], PaginatorPubSubService);

let CommonTableTwoComponent = class CommonTableTwoComponent {
  constructor(paginatorService) {
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
  ngOnInit() {
    const originalState = this.tableData.slice(0, this.rowsPerPage);
    const tableDataCopy = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
    this.handlePaginatorService(originalState, tableDataCopy);
  }
  handlePaginatorService(originalState, tableDataCopy) {
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: tableDataCopy,
      page: 1,
      tableDataOriginalState: originalState
    });
    this.paginatorService.state.subscribe(data => {
      (this.rowsPerPage = data.rowsPerPage), (this.tableData = data.tableData);
    });
  }
  setSortDirection() {
    if (this.sortDirection === 'ASC') {
      this.sortDirection = 'DESC';
      return this.sortDirection;
    }
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      return this.sortDirection;
    }
  }
  handleSort(header) {
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
  }
  checkIfSelectedItemsAreInArray(data) {
    if (this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0) {
      return true;
    } else if (!(this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0)) {
      return false;
    }
  }
  getRowData(data, index) {
    if (this.checkIfSelectedItemsAreInArray(data)) {
      this.removeSelectedValues(data, index);
    } else if (!this.checkIfSelectedItemsAreInArray(data)) {
      this.addSelectedValues(data, index);
    }
  }
  addSelectedValues(data, index) {
    this.selectedRowIndex.push(index);
    this.selectedRows.push(data);
    this.selectedRowData.emit(data);
  }
  removeSelectedValues(data, index) {
    this.selectedRows = this.selectedRows.filter(item => item[this.dataKey] !== data[this.dataKey]);
    this.selectedRowIndex = this.selectedRowIndex.filter(i => i !== index);
    this.selectedRowData.emit(data);
  }
  getDataToEdit(data) {
    this.dataToEdit.emit(data);
  }
  getDataToDelete(data) {
    this.dataToDelete.emit(data);
  }
  toggleSelectAll() {
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      this.selectedRows = this.tableData;
    }
    this.selectedRows = [];
  }
};
CommonTableTwoComponent.ctorParameters = () => [{ type: PaginatorPubSubService }];
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

let CommonPaginatorComponent = class CommonPaginatorComponent {
  constructor(paginatorService) {
    this.paginatorService = paginatorService;
  }
  ngOnInit() {
    this.paginatorService.state.subscribe(data => {
      (this.rowsPerPage = data.rowsPerPage),
        (this.tableData = data.tableData),
        (this.data = data.data),
        (this.page = data.page),
        (this.tableDataOriginalState = data.tableDataOriginalState);
    });
  }
  getSelectedOption(data) {
    this.rowsPerPage = data;
    this.tableData = this.data.slice(0, data);
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      page: this.page,
      tableDataOriginalState: this.tableDataOriginalState
    });
  }
  nextPage() {
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
  }
  previousPage() {
    const previous = this.data.length - this.tableData.length;
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
  }
  resetPaginator() {
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
  }
  calculateendOfPages() {}
  goToLastPage() {
    const subtractLengths = this.data.length - this.tableData.length;
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
  }
};
CommonPaginatorComponent.ctorParameters = () => [{ type: PaginatorPubSubService }];
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

let PaginatorPubServiceModule = class PaginatorPubServiceModule {};
PaginatorPubServiceModule = __decorate(
  [
    NgModule({
      providers: [PaginatorPubSubService]
    })
  ],
  PaginatorPubServiceModule
);

let CommonPaginatorModule = class CommonPaginatorModule {};
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

let CommonTableTwoModule = class CommonTableTwoModule {};
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

let CommonSideBarComponent = class CommonSideBarComponent {
  constructor() {
    this.position = 'left';
  }
  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
};
__decorate([Input()], CommonSideBarComponent.prototype, 'isSideBarOpen', void 0);
__decorate([Input()], CommonSideBarComponent.prototype, 'position', void 0);
CommonSideBarComponent = __decorate(
  [
    Component({
      selector: 'common-side-bar',
      template: `
    <div
      *ngIf="isSideBarOpen"
      [@slideInOut]
      [ngStyle]="{ right: position === 'right' ? 0 : '', left: position === 'left' ? 0 : '' }"
      class="side-bar"
    >
      <div class="icon">
        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>
      </div>
      <ng-content></ng-content>
    </div>
    <div [class.is-overlay]="isSideBarOpen"></div>
  `,
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

let CommonSideBarModule = class CommonSideBarModule {};
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
