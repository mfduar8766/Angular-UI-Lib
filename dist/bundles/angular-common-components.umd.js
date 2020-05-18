(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('@angular/core'),
        require('@angular/common'),
        require('primeng/button'),
        require('primeng/calendar'),
        require('primeng/card'),
        require('primeng/checkbox'),
        require('primeng/chips'),
        require('primeng/confirmdialog'),
        require('primeng/dropdown'),
        require('primeng/dialog'),
        require('primeng/inputtext'),
        require('primeng/inputtextarea'),
        require('primeng/inputmask'),
        require('primeng/inputswitch'),
        require('primeng/lightbox'),
        require('primeng/listbox'),
        require('primeng/multiselect'),
        require('primeng/selectbutton'),
        require('primeng/spinner'),
        require('primeng/tabview'),
        require('primeng/sidebar'),
        require('primeng/table'),
        require('primeng/toolbar'),
        require('primeng/togglebutton'),
        require('primeng/paginator'),
        require('primeng/toast'),
        require('primeng/api'),
        require('@angular/forms'),
        require('@angular/platform-browser/animations'),
        require('primeng/slider'),
        require('rxjs/internal/BehaviorSubject'),
        require('@angular/animations')
      )
    : typeof define === 'function' && define.amd
    ? define('angular-common-components', [
        'exports',
        '@angular/core',
        '@angular/common',
        'primeng/button',
        'primeng/calendar',
        'primeng/card',
        'primeng/checkbox',
        'primeng/chips',
        'primeng/confirmdialog',
        'primeng/dropdown',
        'primeng/dialog',
        'primeng/inputtext',
        'primeng/inputtextarea',
        'primeng/inputmask',
        'primeng/inputswitch',
        'primeng/lightbox',
        'primeng/listbox',
        'primeng/multiselect',
        'primeng/selectbutton',
        'primeng/spinner',
        'primeng/tabview',
        'primeng/sidebar',
        'primeng/table',
        'primeng/toolbar',
        'primeng/togglebutton',
        'primeng/paginator',
        'primeng/toast',
        'primeng/api',
        '@angular/forms',
        '@angular/platform-browser/animations',
        'primeng/slider',
        'rxjs/internal/BehaviorSubject',
        '@angular/animations'
      ], factory)
    : ((global = global || self),
      factory(
        (global['angular-common-components'] = {}),
        global.ng.core,
        global.ng.common,
        global.button,
        global.calendar,
        global.card,
        global.checkbox,
        global.chips,
        global.confirmdialog,
        global.dropdown,
        global.dialog,
        global.inputtext,
        global.inputtextarea,
        global.inputmask,
        global.inputswitch,
        global.lightbox,
        global.listbox,
        global.multiselect,
        global.selectbutton,
        global.spinner,
        global.tabview,
        global.sidebar,
        global.table,
        global.toolbar,
        global.togglebutton,
        global.paginator,
        global.toast,
        global.api,
        global.ng.forms,
        global.ng.platformBrowser.animations,
        global.slider,
        global.rxjs['internal/BehaviorSubject'],
        global.ng.animations
      ));
})(this, function(
  exports,
  core,
  common,
  button,
  calendar,
  card,
  checkbox,
  chips,
  confirmdialog,
  dropdown,
  dialog,
  inputtext,
  inputtextarea,
  inputmask,
  inputswitch,
  lightbox,
  listbox,
  multiselect,
  selectbutton,
  spinner,
  tabview,
  sidebar,
  table,
  toolbar,
  togglebutton,
  paginator,
  toast,
  api,
  forms,
  animations,
  slider,
  BehaviorSubject,
  animations$1
) {
  'use strict';

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
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }

  var __assign = function() {
    __assign =
      Object.assign ||
      function __assign(t) {
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
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  }

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }

  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(metadataKey, metadataValue);
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }

  function __values(o) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator],
      i = 0;
    if (m) return m.call(o);
    return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  }

  function __read(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  }

  function __await(v) {
    return this instanceof __await ? ((this.v = v), this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return (
      (i = {}),
      verb('next'),
      verb('throw'),
      verb('return'),
      (i[Symbol.asyncIterator] = function() {
        return this;
      }),
      i
    );
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume('next', value);
    }
    function reject(value) {
      resume('throw', value);
    }
    function settle(f, v) {
      if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
    }
  }

  function __asyncDelegator(o) {
    var i, p;
    return (
      (i = {}),
      verb('next'),
      verb('throw', function(e) {
        throw e;
      }),
      verb('return'),
      (i[Symbol.iterator] = function() {
        return this;
      }),
      i
    );
    function verb(n, f) {
      i[n] = o[n]
        ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v;
          }
        : f;
    }
  }

  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function() {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function(v) {
          return new Promise(function(resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  }

  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }

  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
  }

  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }

  var PrimeNgModule = /** @class */ (function() {
    function PrimeNgModule() {}
    PrimeNgModule = __decorate(
      [
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
            tabview.TabViewModule,
            table.TableModule,
            toolbar.ToolbarModule,
            togglebutton.ToggleButtonModule,
            paginator.PaginatorModule,
            toast.ToastModule
          ],
          providers: [api.ConfirmationService, api.MessageService]
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
      this.handleClick = new core.EventEmitter();
    }
    CommonButtonComponent.prototype.ngOnInit = function() {};
    __decorate([core.Input()], CommonButtonComponent.prototype, 'buttonText', void 0);
    __decorate([core.Input()], CommonButtonComponent.prototype, 'buttonType', void 0);
    __decorate([core.Input()], CommonButtonComponent.prototype, 'isDisabled', void 0);
    __decorate([core.Input()], CommonButtonComponent.prototype, 'backgroundColor', void 0);
    __decorate([core.Output()], CommonButtonComponent.prototype, 'handleClick', void 0);
    CommonButtonComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule],
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
      this.closeModal = new core.EventEmitter();
    }
    __decorate([core.Input()], CommonModalComponent.prototype, 'isModalOpen', void 0);
    __decorate([core.Input()], CommonModalComponent.prototype, 'headerText', void 0);
    __decorate([core.Input()], CommonModalComponent.prototype, 'showHeader', void 0);
    __decorate([core.Input()], CommonModalComponent.prototype, 'showFooter', void 0);
    __decorate([core.Input()], CommonModalComponent.prototype, 'classProp', void 0);
    __decorate([core.Output()], CommonModalComponent.prototype, 'closeModal', void 0);
    CommonModalComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule],
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
    __decorate([core.Input()], CommonCardComponent.prototype, 'showHeader', void 0);
    __decorate([core.Input()], CommonCardComponent.prototype, 'showFooter', void 0);
    __decorate([core.Input()], CommonCardComponent.prototype, 'heightWidth', void 0);
    __decorate([core.Input()], CommonCardComponent.prototype, 'headerStyles', void 0);
    CommonCardComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule, PrimeNgModule],
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
      this.editTableData = new core.EventEmitter();
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
      return [{ type: api.ConfirmationService }, { type: api.MessageService }];
    };
    __decorate([core.Input()], CommonTableComponent.prototype, 'dataKey', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'tableData', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'columns', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'rowsperPage', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'showPagination', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'rowsPerPageOptions', void 0);
    __decorate([core.Input()], CommonTableComponent.prototype, 'styleClass', void 0);
    __decorate([core.Output()], CommonTableComponent.prototype, 'editTableData', void 0);
    CommonTableComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule, PrimeNgModule, forms.FormsModule],
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
      this.selectedSearchResult = new core.EventEmitter();
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
    __decorate([core.Input()], CommonSearchComponent.prototype, 'isDisabled', void 0);
    __decorate([core.Input()], CommonSearchComponent.prototype, 'showDropDown', void 0);
    __decorate([core.Input()], CommonSearchComponent.prototype, 'placeholder', void 0);
    __decorate([core.Input()], CommonSearchComponent.prototype, 'searchArray', void 0);
    __decorate([core.Input()], CommonSearchComponent.prototype, 'stylesClass', void 0);
    __decorate([core.Output()], CommonSearchComponent.prototype, 'selectedSearchResult', void 0);
    CommonSearchComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule, forms.FormsModule, PrimeNgModule],
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
    __decorate([core.Input()], CommonTabComponent.prototype, 'tabContent', void 0);
    __decorate([core.Input()], CommonTabComponent.prototype, 'canDelete', void 0);
    CommonTabComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule, PrimeNgModule],
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
      this.formSubmittedValues = new core.EventEmitter();
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
        return forms.Validators.compose(validList_1);
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
      return [{ type: forms.FormBuilder }];
    };
    __decorate([core.Input()], DynamicFormComponent.prototype, 'config', void 0);
    __decorate([core.Output()], DynamicFormComponent.prototype, 'formSubmittedValues', void 0);
    DynamicFormComponent = __decorate(
      [
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
        core.Component({
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
      return [{ type: core.ComponentFactoryResolver }, { type: core.ViewContainerRef }];
    };
    __decorate([core.Input()], DynamicFieldDirective.prototype, 'config', void 0);
    __decorate([core.Input()], DynamicFieldDirective.prototype, 'group', void 0);
    DynamicFieldDirective = __decorate(
      [
        core.Directive({
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
        core.NgModule({
          imports: [
            animations.BrowserAnimationsModule,
            common.CommonModule,
            forms.ReactiveFormsModule,
            forms.FormsModule,
            multiselect.MultiSelectModule,
            calendar.CalendarModule,
            dropdown.DropdownModule,
            slider.SliderModule
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
      return [{ type: core.ElementRef }];
    };
    __decorate(
      [core.ViewChild('searchBox', { read: core.ElementRef })],
      CommonMultiSelectComponent.prototype,
      'searchBox',
      void 0
    );
    __decorate([core.Input()], CommonMultiSelectComponent.prototype, 'options', void 0);
    __decorate([core.Input()], CommonMultiSelectComponent.prototype, 'preSelectedOption', void 0);
    __decorate(
      [core.HostListener('document:click', ['$event'])],
      CommonMultiSelectComponent.prototype,
      'clickout',
      null
    );
    CommonMultiSelectComponent = CommonMultiSelectComponent_1 = __decorate(
      [
        core.Component({
          selector: 'common-multi-select',
          template:
            '<ng-container>\n  <ng-container *ngIf="!preSelectedOption.length; else showSelected">\n    <button (click)="toggleList()">\n      <div>Choose</div>\n    </button>\n    <i\n      (click)="toggleList()"\n      style="color: gray; position: relative; right: 30px;"\n      class="cursor-pointer fa fa-chevron-down"\n    ></i>\n  </ng-container>\n  <ng-template #showSelected>\n    <div class="list-of-selected-itens">\n      <ng-container *ngIf="preSelectedOption.length >= 4; else showItems">\n        <div class="cursor-pointer" (click)="toggleList()" style="width: 250px;">\n          {{ preSelectedOption.length }} items selected\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative; right: -5px;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-container>\n      <ng-template #showItems>\n        <div style="width: 200px;" *ngFor="let item of preSelectedOption; let i = index">\n          <div style="border: 1px solid gray; width: 70px; height: auto; margin-right: 3px; padding: 0.1rem 0.1rem;">\n            <i\n              (click)="addRemoveData({ label: item, value: item }, i)"\n              class="fa fa-times cursor-pointer"\n              style="color: gray; position: relative;"\n            ></i>\n            {{ item }}\n          </div>\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative;;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-template>\n    </div>\n  </ng-template>\n  <div *ngIf="isListDisplayed" class="list-container" style="display: flex; flex-direction: column">\n    <div style="display: flex; align-items: center; justify-content: center; width: 100%;">\n      <div style="margin-left: 5px;" (click)="onSelectAll(!selectAll)" style="text-align: center;" class="check-box">\n        <i [class]="selectAll ? \'fa fa-check black\' : \'\'"></i>\n      </div>\n      <input\n        name="searchBox"\n        #searchBox\n        type="text"\n        (input)="onSearchFilter(searchBox.value)"\n        style="padding: 0.3rem; margin-left: 5px; margin-right: 10px;"\n      />\n      <i (click)="clearSelectedItemsOnXclick()" class=" cursor-pointer fa fa-times" style="color:gray;"></i>\n    </div>\n    <ul>\n      <li\n        *ngFor="let item of listOfValues; let i = index"\n        [class]="\n          currentIndex.includes(i) || preSelectedOption.includes(item.label) || preSelectedOption.includes(item.value)\n            ? \'drop-down\'\n            : \'list\'\n        "\n        (click)="addRemoveData(item, i)"\n        style="display: flex; align-items: center; cursor: pointer"\n      >\n        <div style="text-align: center;" class="check-box">\n          <i\n            [class]="\n              currentIndex.includes(i) ||\n              preSelectedOption.includes(item.label) ||\n              preSelectedOption.includes(item.value)\n                ? \'fa fa-check black\'\n                : \'\'\n            "\n          ></i>\n        </div>\n        <div>{{ item.label }}</div>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n',
          providers: [
            {
              provide: forms.NG_VALUE_ACCESSOR,
              useExisting: core.forwardRef(function() {
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
        core.NgModule({
          imports: [common.CommonModule, PrimeNgModule, forms.ReactiveFormsModule, forms.FormsModule],
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
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'buttonText', void 0);
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'showIcon', void 0);
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'icon', void 0);
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'buttonType', void 0);
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'backgroundColor', void 0);
    __decorate([core.Input()], CommonSplitButtonComponent.prototype, 'listItems', void 0);
    CommonSplitButtonComponent = __decorate(
      [
        core.Component({
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
      this.closeList = new core.EventEmitter();
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
    __decorate([core.Output()], HoverDirective.prototype, 'closeList', void 0);
    __decorate([core.HostListener('mouseenter')], HoverDirective.prototype, 'onMouseEnter', null);
    __decorate([core.HostListener('mouseleave')], HoverDirective.prototype, 'onMouseLeave', null);
    __decorate([core.HostListener('document:click')], HoverDirective.prototype, 'onClick', null);
    HoverDirective = __decorate([core.Directive({ selector: '[appCommonHoverDirective]' })], HoverDirective);
    return HoverDirective;
  })();

  var CommonSplitButtonModule = /** @class */ (function() {
    function CommonSplitButtonModule() {}
    CommonSplitButtonModule = __decorate(
      [
        core.NgModule({
          imports: [common.CommonModule],
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
      this.selectedItem = new core.EventEmitter();
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
    __decorate([core.Input()], CommonSelectComponent.prototype, 'options', void 0);
    __decorate([core.Input()], CommonSelectComponent.prototype, 'selectedOption', void 0);
    __decorate([core.Output()], CommonSelectComponent.prototype, 'selectedItem', void 0);
    CommonSelectComponent = CommonSelectComponent_1 = __decorate(
      [
        core.Component({
          selector: 'common-select',
          template:
            '<div class="select-container">\n  <div (click)="toggleList()" class="dropdown">\n    <div *ngIf="selectedOption; else showDefault">{{ selectedOption }}</div>\n    <ng-template #showDefault>\n      <div>Choose</div>\n    </ng-template>\n    <i style="color: gray; z-index: 99;" class="cursor-pointer fa fa-chevron-down"></i>\n  </div>\n  <div style="border: 1px solid rgb(224, 210, 210); width: 200px; border-width: thin;"></div>\n  <ul *ngIf="isListDisplayed" class="list-container">\n    <li (click)="setOption(option)" class="list" *ngFor="let option of options">\n      {{ option }}\n    </li>\n  </ul>\n</div>\n',
          providers: [
            {
              provide: forms.NG_VALUE_ACCESSOR,
              useExisting: core.forwardRef(function() {
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
        core.NgModule({
          imports: [common.CommonModule, forms.ReactiveFormsModule, forms.FormsModule],
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
    __decorate([core.Input()], CommonCounterComponent.prototype, '_counterValue', void 0);
    CommonCounterComponent = CommonCounterComponent_1 = __decorate(
      [
        core.Component({
          selector: 'common-counter',
          template:
            '\n    <button (click)="increment()">+</button>\n    {{ counterValue }}\n    <button (click)="decrement()">-</button>\n  ',
          providers: [
            {
              provide: forms.NG_VALUE_ACCESSOR,
              useExisting: core.forwardRef(function() {
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
        core.NgModule({
          imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule],
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
    LocalStorageService.ɵprov = core['ɵɵdefineInjectable']({
      factory: function LocalStorageService_Factory() {
        return new LocalStorageService();
      },
      token: LocalStorageService,
      providedIn: 'root'
    });
    LocalStorageService = __decorate([core.Injectable({ providedIn: 'root' })], LocalStorageService);
    return LocalStorageService;
  })();

  var LocalStorageModule = /** @class */ (function() {
    function LocalStorageModule() {}
    LocalStorageModule = __decorate(
      [
        core.NgModule({
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
      this.getRange = new core.EventEmitter();
    }
    __decorate([core.Input()], CommonSliderComponent.prototype, 'sliderLabel', void 0);
    __decorate([core.Input()], CommonSliderComponent.prototype, 'minMaxRange', void 0);
    __decorate([core.Input()], CommonSliderComponent.prototype, 'rangeValue', void 0);
    __decorate([core.Input()], CommonSliderComponent.prototype, 'isDisabled', void 0);
    __decorate([core.Output()], CommonSliderComponent.prototype, 'getRange', void 0);
    CommonSliderComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
          imports: [common.CommonModule, forms.FormsModule, forms.ReactiveFormsModule],
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
      this.state$ = new BehaviorSubject.BehaviorSubject({
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
    PaginatorPubSubService.ɵprov = core['ɵɵdefineInjectable']({
      factory: function PaginatorPubSubService_Factory() {
        return new PaginatorPubSubService();
      },
      token: PaginatorPubSubService,
      providedIn: 'root'
    });
    PaginatorPubSubService = __decorate([core.Injectable({ providedIn: 'root' })], PaginatorPubSubService);
    return PaginatorPubSubService;
  })();

  var CommonTableTwoComponent = /** @class */ (function() {
    function CommonTableTwoComponent(paginatorService) {
      this.paginatorService = paginatorService;
      this.rowsPerPage = 5;
      this.selectedRowData = new core.EventEmitter();
      this.dataToEdit = new core.EventEmitter();
      this.dataToDelete = new core.EventEmitter();
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
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'tableData', void 0);
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'dataKey', void 0);
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'tableHeaders', void 0);
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'showEditOption', void 0);
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'showDeleteOption', void 0);
    __decorate([core.Input()], CommonTableTwoComponent.prototype, 'rowsPerPage', void 0);
    __decorate([core.Output()], CommonTableTwoComponent.prototype, 'selectedRowData', void 0);
    __decorate([core.Output()], CommonTableTwoComponent.prototype, 'dataToEdit', void 0);
    __decorate([core.Output()], CommonTableTwoComponent.prototype, 'dataToDelete', void 0);
    CommonTableTwoComponent = __decorate(
      [
        core.Component({
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
    __decorate([core.Input()], CommonPaginatorComponent.prototype, 'options', void 0);
    CommonPaginatorComponent = __decorate(
      [
        core.Component({
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
        core.NgModule({
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
        core.NgModule({
          imports: [common.CommonModule, forms.FormsModule, CommonSelectModule],
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
        core.NgModule({
          imports: [common.CommonModule, forms.FormsModule, CommonPaginatorModule],
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
    __decorate([core.Input()], CommonSideBarComponent.prototype, 'isSideBarOpen', void 0);
    __decorate([core.Input()], CommonSideBarComponent.prototype, 'position', void 0);
    CommonSideBarComponent = __decorate(
      [
        core.Component({
          selector: 'common-side-bar',
          template:
            '\n    <div\n      *ngIf="isSideBarOpen"\n      [@slideInOut]\n      [ngStyle]="{ right: position === \'right\' ? 0 : \'\', left: position === \'left\' ? 0 : \'\' }"\n      class="side-bar"\n    >\n      <div class="icon">\n        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n    <div [class.is-overlay]="isSideBarOpen"></div>\n  ',
          animations: [
            animations$1.trigger('slideInOut', [
              animations$1.transition('void => *', [
                animations$1.style({ transform: 'translateX(-100%)' }),
                animations$1.animate('200ms')
              ]),
              animations$1.transition('* => void', [
                animations$1.animate('200ms', animations$1.style({ transform: 'translateX(-500px)' }))
              ])
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
        core.NgModule({
          imports: [common.CommonModule],
          declarations: [CommonSideBarComponent],
          exports: [CommonSideBarComponent]
        })
      ],
      CommonSideBarModule
    );
    return CommonSideBarModule;
  })();

  exports.CommonButtonModule = CommonButtonModule;
  exports.CommonCardModule = CommonCardModule;
  exports.CommonCounterModule = CommonCounterModule;
  exports.CommonModalModule = CommonModalModule;
  exports.CommonMultiSelectModule = CommonMultiSelectModule;
  exports.CommonPaginatorModule = CommonPaginatorModule;
  exports.CommonSearchModule = CommonSearchModule;
  exports.CommonSelectModule = CommonSelectModule;
  exports.CommonSideBarModule = CommonSideBarModule;
  exports.CommonSliderModule = CommonSliderModule;
  exports.CommonSplitButtonModule = CommonSplitButtonModule;
  exports.CommonTabModule = CommonTabModule;
  exports.CommonTableModule = CommonTableModule;
  exports.CommonTableTwoModule = CommonTableTwoModule;
  exports.DynamicFormModule = DynamicFormModule;
  exports.LocalStorageModule = LocalStorageModule;
  exports.PrimeNgModule = PrimeNgModule;
  exports.ɵa = CommonButtonComponent;
  exports.ɵb = CommonModalComponent;
  exports.ɵba = CommonTableTwoComponent;
  exports.ɵbb = CommonSideBarComponent;
  exports.ɵc = CommonCardComponent;
  exports.ɵd = CommonTableComponent;
  exports.ɵe = CommonSearchComponent;
  exports.ɵf = CommonTabComponent;
  exports.ɵg = DynamicFieldDirective;
  exports.ɵh = DynamicFormComponent;
  exports.ɵi = FormButtonComponent;
  exports.ɵj = FormInputComponent;
  exports.ɵk = FormSelectComponent;
  exports.ɵl = FormDatePickerComponent;
  exports.ɵm = FormCheckboxComponent;
  exports.ɵn = FormRadioComponent;
  exports.ɵo = FormMultiSelectComponent;
  exports.ɵp = FormSliderComponent;
  exports.ɵq = CommonMultiSelectComponent;
  exports.ɵr = CommonSplitButtonComponent;
  exports.ɵs = HoverDirective;
  exports.ɵt = CommonSelectComponent;
  exports.ɵu = CommonCounterComponent;
  exports.ɵv = LocalStorageService;
  exports.ɵw = CommonSliderComponent;
  exports.ɵx = CommonPaginatorComponent;
  exports.ɵy = PaginatorPubSubService;
  exports.ɵz = PaginatorPubServiceModule;

  Object.defineProperty(exports, '__esModule', { value: true });
});
//# sourceMappingURL=angular-common-components.umd.js.map
