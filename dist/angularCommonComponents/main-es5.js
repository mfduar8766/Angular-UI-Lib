function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/
    './$$_lazy_route_resource lazy recursive':
      /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

      /*! no static exports found */

      /***/
      function $$_lazy_route_resourceLazyRecursive(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        webpackEmptyAsyncContext.keys = function() {
          return [];
        };

        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = './$$_lazy_route_resource lazy recursive';
        /***/
      },

    /***/
    './src/app/app.component.ts':
      /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var src_assets_testData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! src/assets/testData */
          './src/assets/testData.ts'
        );
        /* harmony import */

        var _lib_common_reactive_form_Models_form_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../lib/common-reactive-form/Models /form-config */
          './src/lib/common-reactive-form/Models /form-config.ts'
        );
        /* harmony import */

        var _lib_common_reactive_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../lib/common-reactive-form/dynamic-form/dynamic-form.component */
          './src/lib/common-reactive-form/dynamic-form/dynamic-form.component.ts'
        );
        /* harmony import */

        var src_lib_services_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! src/lib/services/localStorage/localStorage.service */
          './src/lib/services/localStorage/localStorage.service.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _lib_common_button_common_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../lib/common-button/common-button.component */
          './src/lib/common-button/common-button.component.ts'
        );
        /* harmony import */

        var _lib_common_side_bar_common_sideBar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../lib/common-side-bar/common-sideBar.component */
          './src/lib/common-side-bar/common-sideBar.component.ts'
        );
        /* harmony import */

        var _lib_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../lib/common-card/common-card.component */
          './src/lib/common-card/common-card.component.ts'
        );
        /* harmony import */

        var _lib_common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../lib/common-modal/common-modal.component */
          './src/lib/common-modal/common-modal.component.ts'
        );
        /* harmony import */

        var _lib_common_auto_complete_common_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../lib/common-auto-complete/common-search.component */
          './src/lib/common-auto-complete/common-search.component.ts'
        );
        /* harmony import */

        var _lib_common_tab_common_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../lib/common-tab/common-tab.component */
          './src/lib/common-tab/common-tab.component.ts'
        );
        /* harmony import */

        var _lib_common_split_button_common_split_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../lib/common-split-button/common-split-button.component */
          './src/lib/common-split-button/common-split-button.component.ts'
        );
        /* harmony import */

        var _lib_common_select_common_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../lib/common-select/common-select.component */
          './src/lib/common-select/common-select.component.ts'
        );
        /* harmony import */

        var _lib_common_multi_select_common_multi_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../lib/common-multi-select/common-multi-select.component */
          './src/lib/common-multi-select/common-multi-select.component.ts'
        );
        /* harmony import */

        var _lib_counter_componenet_common_counter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../lib/counter-componenet/common-counter.component */
          './src/lib/counter-componenet/common-counter.component.ts'
        );
        /* harmony import */

        var _lib_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../lib/common-slider/common-slider.component */
          './src/lib/common-slider/common-slider.component.ts'
        );
        /* harmony import */

        var _lib_common_table_2_common_table_2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../lib/common-table-2/common-table-2.component */
          './src/lib/common-table-2/common-table-2.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var _c0 = function _c0() {
          return {
            'background-color': 'blue',
            color: 'white',
            height: '30px',
            'border-radius': '0.5rem'
          };
        };

        var _c1 = function _c1() {
          return {
            height: '50%',
            width: '50%',
            color: 'black'
          };
        };

        var _c2 = function _c2() {
          return {
            height: '300px'
          };
        };

        var _c3 = function _c3() {
          return {
            height: '20%',
            width: '20%'
          };
        };

        var _c4 = function _c4() {
          return {
            height: '100%',
            width: '100%'
          };
        };

        var AppComponent =
          /*#__PURE__*/
          (function() {
            function AppComponent(formBuilder) {
              var _this = this;

              _classCallCheck(this, AppComponent);

              this.formBuilder = formBuilder;
              this.title = 'angularCommonComponents';
              this.isModalOpen = false;
              this.tableData = src_assets_testData__WEBPACK_IMPORTED_MODULE_1__['mockData'];
              this.tableHeaders = src_assets_testData__WEBPACK_IMPORTED_MODULE_1__['tableHeaders'];
              this.tabContent = src_assets_testData__WEBPACK_IMPORTED_MODULE_1__['tabContent'];
              this.config = _lib_common_reactive_form_Models_form_config__WEBPACK_IMPORTED_MODULE_2__['formConfig'];
              this.statesArray = src_assets_testData__WEBPACK_IMPORTED_MODULE_1__['States'];
              this.state = 'Georgia';
              this.isSideBarOpen = false;
              this.tableHeaders2 = src_assets_testData__WEBPACK_IMPORTED_MODULE_1__['tableHeaders2'];
              this.languages = ['French', 'Korean', 'Italian'];
              this.outerCounterValue = 5;
              this.options = [
                {
                  label: 'French',
                  value: 'French'
                },
                {
                  label: 'Korean',
                  value: 'Korean'
                },
                {
                  label: 'German',
                  value: 'German'
                },
                {
                  label: 'Japanese',
                  value: 'Japanese'
                },
                {
                  label: 'English',
                  value: 'English'
                },
                {
                  label: 'Dutch',
                  value: 'Dutch'
                },
                {
                  label: 'Italian',
                  value: 'Italian'
                }
              ];
              this.listItems = [
                {
                  label: 'Call First',
                  command: function command() {
                    return _this.callFirst();
                  },
                  disabled: true
                },
                {
                  label: 'Call Second',
                  command: function command() {
                    return _this.callSecond();
                  }
                }
              ];
            }

            _createClass(AppComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  this.counterReactiveForm = this.formBuilder.group({
                    counter: 5
                  });
                }
              },
              {
                key: 'ngAfterViewInit',
                value: function ngAfterViewInit() {
                  var _this2 = this;

                  this.form.changes.subscribe(function(change) {
                    _this2.form.controls.forEach(function(control) {
                      if (change[control.name] === '') {
                        _this2.form.setDisabled('submit', true);
                      } else {
                        _this2.form.setDisabled('submit', false);
                      }
                    });
                  });
                }
              },
              {
                key: 'ngAfterViewChecked',
                value: function ngAfterViewChecked() {
                  // console.log('SELECTED STATE', this.state);
                  // console.log('TEST SELECT', this.testMultiSelect);
                }
              },
              {
                key: 'callFirst',
                value: function callFirst() {
                  console.log('FIRST');
                }
              },
              {
                key: 'callSecond',
                value: function callSecond() {
                  console.log('SECOND');
                }
              },
              {
                key: 'submit',
                value: function submit(value) {
                  console.log(value);
                }
              },
              {
                key: 'getButtonClick',
                value: function getButtonClick() {
                  console.log('DATA');
                }
              },
              {
                key: 'setCloseModal',
                value: function setCloseModal(event) {
                  this.isModalOpen = event.target.value;
                }
              },
              {
                key: 'getSelectedResults',
                value: function getSelectedResults(data) {
                  console.log('DATA', data);
                }
              },
              {
                key: 'editTableData',
                value: function editTableData(data) {
                  this.tableData = this.tableData.map(function(dataValue) {
                    if (dataValue.agencyId === data.agencyId) {
                      return Object.assign(Object.assign({}, dataValue), {
                        agencyName: 'TEST'
                      });
                    }

                    return Object.assign({}, dataValue);
                  });
                }
              },
              {
                key: 'getSelectedValue',
                value: function getSelectedValue(value) {
                  console.log('DROP-DOWN VALUE', value);
                }
              },
              {
                key: 'getSelectedMultiValue',
                value: function getSelectedMultiValue(value) {
                  console.log('DROP-DOWN VALUE', value);
                }
              },
              {
                key: 'getClickedItem',
                value: function getClickedItem(value) {
                  console.log('CLICKED ITEM', value);
                }
              },
              {
                key: 'submitTestForm',
                value: function submitTestForm(value) {
                  console.log('FORM', value);
                }
              },
              {
                key: 'stateForm',
                value: function stateForm(value) {
                  console.log('STATE FORM VALUE', value);
                }
              },
              {
                key: 'getMultiSelectFormValues',
                value: function getMultiSelectFormValues(value) {
                  console.log('MULTI SELECT FORM VALUE', value);
                }
              },
              {
                key: 'getCounterValue',
                value: function getCounterValue(value) {
                  console.log('COUNTER VALUE', value);
                }
              },
              {
                key: 'setReactiveFormValue',
                value: function setReactiveFormValue() {
                  this.outerCounterValue = this.counterReactiveForm.value.counter;
                }
              },
              {
                key: 'setLocalStorage',
                value: function setLocalStorage() {
                  src_lib_services_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_4__[
                    'LocalStorageService'
                  ].setLocalStorage('tet', {
                    name: 'bob',
                    age: 21
                  });
                }
              },
              {
                key: 'getLocalStorage',
                value: function getLocalStorage() {
                  console.log(
                    src_lib_services_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_4__[
                      'LocalStorageService'
                    ].getLocalStorage('tet')
                  );
                }
              },
              {
                key: 'removeLocalStorage',
                value: function removeLocalStorage() {
                  src_lib_services_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_4__[
                    'LocalStorageService'
                  ].removeItem('tet');
                  console.log(
                    src_lib_services_localStorage_localStorage_service__WEBPACK_IMPORTED_MODULE_4__[
                      'LocalStorageService'
                    ].getLocalStorage('tet')
                  );
                }
              },
              {
                key: 'getRowData',
                value: function getRowData(data) {
                  // const agencyName = data.agencyName;
                  // const agencyId = data.agencyId.toString();
                  // const agents = data.agents;
                  // this.store.setRouteState({ agencyAgents: agents });
                  // this.router.navigate(['agencies/agents', agencyName, agencyId]);
                }
              },
              {
                key: 'getDataToEdit',
                value: function getDataToEdit(data) {}
              },
              {
                key: 'getDataToDelete',
                value: function getDataToDelete(data) {}
              },
              {
                key: 'toggleSideBar',
                value: function toggleSideBar() {
                  this.isSideBarOpen = !this.isSideBarOpen;
                  console.log('TOGGLE', this.isSideBarOpen);
                }
              }
            ]);

            return AppComponent;
          })();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_5__['FormBuilder']
            )
          );
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AppComponent,
          selectors: [['app-root']],
          viewQuery: function AppComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _lib_common_reactive_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__[
                  'DynamicFormComponent'
                ],
                true
              );
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵloadQuery']())
              ) && (ctx.form = _t.first);
            }
          },
          decls: 118,
          vars: 103,
          consts: [
            [3, 'buttonText', 'click'],
            [3, 'isSideBarOpen'],
            [
              2,
              'display',
              'flex',
              'flex-direction',
              'column',
              'justify-content',
              'center',
              'width',
              '100%',
              'height',
              '100%'
            ],
            [3, 'headerStyles', 'showHeader'],
            ['role', 'header', 2, 'height', 'fit-content', 'width', 'fit-content', 'padding-left', '1rem'],
            [2, 'display', 'flex'],
            [2, 'margin-top', '2rem', 'margin-bottom', '2rem'],
            ['role', 'footer'],
            [3, 'buttonText', 'backgroundColor', 'click'],
            [3, 'classProp', 'isModalOpen', 'closeModal'],
            ['role', 'content'],
            [3, 'headerStyles', 'showHeader', 'showFooter'],
            [3, 'heightWidth', 'headerStyles', 'showHeader'],
            [2, 'height', '100%', 'width', '100%'],
            [3, 'searchArray', 'showDropDown', 'placeholder', 'selectedSearchResult'],
            [3, 'tabContent'],
            [3, 'config', 'formSubmittedValues'],
            [3, 'headerStyles', 'heightWidth', 'showHeader'],
            [3, 'listItems', 'buttonText', 'backgroundColor', 'handleClick'],
            [2, 'margin-top', '5rem', 'margin-bottom', '5rem'],
            ['form', 'ngForm'],
            ['name', 'state', 3, 'options', 'ngModel', 'ngModelChange'],
            ['type', 'submit'],
            [3, 'ngSubmit'],
            ['multiSelectForm', 'ngForm'],
            ['name', 'languages', 3, 'options', 'ngModel', 'ngModelChange'],
            [2, 'display', 'flex', 'flex-direction', 'column', 3, 'ngSubmit'],
            ['name', 'counter', 3, 'ngModel', 'ngModelChange'],
            [3, 'formGroup', 'ngSubmit'],
            ['formControlName', 'counter'],
            [2, 'margin-top', '1rem'],
            [
              3,
              'dataKey',
              'tableData',
              'tableHeaders',
              'showEditOption',
              'showDeleteOption',
              'selectedRowData',
              'dataToEdit',
              'dataToDelete'
            ]
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'common-button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_0_listener($event) {
                  return ctx.toggleSideBar();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'common-side-bar', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'common-card', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, ' Local Storage Service ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'common-button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_7_listener($event) {
                  return ctx.setLocalStorage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'common-button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_8_listener($event) {
                  return ctx.getLocalStorage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'common-button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_9_listener($event) {
                  return ctx.removeLocalStorage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'common-card', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, ' Common Button ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'common-button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_14_listener($event) {
                  return ctx.getButtonClick();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](15, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'common-card', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, 'My Footer');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20, ' Common Modal ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'common-button', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function AppComponent_Template_common_button_click_21_listener($event) {
                  return (ctx.isModalOpen = !ctx.isModalOpen);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](22, 'common-modal', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'closeModal',
                function AppComponent_Template_common_modal_closeModal_22_listener($event) {
                  return ctx.setCloseModal($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'div', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](24, 'MODAL');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](25, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'common-card', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](28, 'My Footer');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](29, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](30, ' Common Card ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                31,
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque aspernatur quasi quidem eum culpa soluta illum obcaecati doloremque labore, accusamus praesentium illo ut mollitia sint nesciunt et quis voluptatum consectetur fugit odio cumque. Officia natus quo voluptatum, fugiat et sed exercitationem culpa ipsam, numquam nobis modi accusantium repellat quam saepe dignissimos voluptatem eum debitis labore aspernatur, accusamus nesciunt autem provident. Optio eum nostrum adipisci magnam accusantium delectus. Consectetur ipsa deserunt dolores vel quae adipisci est quasi totam quidem autem, suscipit doloribus sapiente facilis facere animi necessitatibus voluptatibus repellendus! Officia eaque iure eligendi optio soluta quos cum commodi debitis aspernatur. '
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](32, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'common-card', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](35, ' Common Auto Complete ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'div', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](37, 'common-search', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'selectedSearchResult',
                function AppComponent_Template_common_search_selectedSearchResult_37_listener($event) {
                  return ctx.getSelectedResults($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](38, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'common-card', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, ' Common Tab ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](42, 'common-tab', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](43, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](44, 'common-card', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](46, ' Common Reactive Form ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](47, 'app-dynamic-form', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'formSubmittedValues',
                function AppComponent_Template_app_dynamic_form_formSubmittedValues_47_listener($event) {
                  return ctx.submit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](48, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](49, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](50, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](51, ' Common Split Button ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](52, 'common-split-button', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'handleClick',
                function AppComponent_Template_common_split_button_handleClick_52_listener($event) {
                  return ctx.getClickedItem($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](53, 'div', 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](54, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](55, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](56, ' Common Select ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](57, 'pre');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](58);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](59, 'json');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](60, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](61);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](62, 'form', null, 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](64, 'common-select', 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function AppComponent_Template_common_select_ngModelChange_64_listener($event) {
                  return (ctx.state = $event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](65, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](66, 'Submit State Form');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](67, 'div', 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](68, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](69, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](70, ' Common Multi Select ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](71, 'pre');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](72);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](73, 'json');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](74, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](75);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](76, 'form', 23, 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngSubmit',
                function AppComponent_Template_form_ngSubmit_76_listener($event) {
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r5);

                  var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](77);

                  return ctx.getMultiSelectFormValues(_r3.value);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](78, 'common-multi-select', 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function AppComponent_Template_common_multi_select_ngModelChange_78_listener($event) {
                  return (ctx.languages = $event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](79, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](80, 'Submit Multi Select Form');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](81, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](82, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](83, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](84, ' Common Counter Custom Form Control ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](85, 'form', 26, 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngSubmit',
                function AppComponent_Template_form_ngSubmit_85_listener($event) {
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r5);

                  var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](63);

                  return ctx.getCounterValue(_r2.value);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](87, 'common-counter', 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function AppComponent_Template_common_counter_ngModelChange_87_listener($event) {
                  return (ctx.outerCounterValue = $event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](88, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](89, 'Submit');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](90, 'pre');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](91);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](92, 'json');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](93, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](94);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](95, 'h4');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](96, 'Reactive Form');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](97, 'form', 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngSubmit',
                function AppComponent_Template_form_ngSubmit_97_listener($event) {
                  return ctx.setReactiveFormValue();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](98, 'common-counter', 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](99, 'button', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](100, 'Submit');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](101, 'pre');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](102);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](103, 'json');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](104, 'p');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](105);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](106, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](107, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](108, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](109, ' Common Slider ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](110, 'common-slider');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](111, 'div', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](112, 'common-card', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](113, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](114, ' Common Table ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](115, 'common-search', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'selectedSearchResult',
                function AppComponent_Template_common_search_selectedSearchResult_115_listener($event) {
                  return ctx.getSelectedResults($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](116, 'div', 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](117, 'common-table-2', 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'selectedRowData',
                function AppComponent_Template_common_table_2_selectedRowData_117_listener($event) {
                  return ctx.getRowData($event);
                }
              )('dataToEdit', function AppComponent_Template_common_table_2_dataToEdit_117_listener($event) {
                return ctx.getDataToEdit($event);
              })('dataToDelete', function AppComponent_Template_common_table_2_dataToDelete_117_listener($event) {
                return ctx.getDataToDelete($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](63);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](77);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Toggle Side Bar');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('isSideBarOpen', ctx.isSideBarOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](82, _c0)
              )('showHeader', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Set Local Storage');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Get Local Storage');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Remove Local Storage');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](83, _c0)
              )('showHeader', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Click Me');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](84, _c0)
              )('showHeader', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('buttonText', 'Open Modal')(
                'backgroundColor',
                'blue'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'classProp',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](85, _c1)
              )('isModalOpen', ctx.isModalOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](86, _c0)
              )('showHeader', 'true')('showFooter', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'heightWidth',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](87, _c2)
              )('headerStyles', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](88, _c0))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('searchArray', ctx.tableData)(
                'showDropDown',
                'true'
              )('placeholder', 'Search agencies');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](89, _c0)
              )('showHeader', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('tabContent', ctx.tabContent);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](90, _c0)
              )('showHeader', 'true');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('config', ctx.config);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](91, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](92, _c3))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('listItems', ctx.listItems)(
                'buttonText',
                'Choose Action'
              )('backgroundColor', 'green');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](93, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](94, _c3))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](59, 74, _r2.value)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']('ngModel value: ', ctx.state, '');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.statesArray)(
                'ngModel',
                ctx.state
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](95, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](96, _c3))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](73, 76, _r3.value)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']('ngModel value: ', ctx.languages, '');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.options)(
                'ngModel',
                ctx.languages
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](97, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](98, _c3))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngModel', ctx.outerCounterValue);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](92, 78, _r2.value)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                'ngModel value: ',
                ctx.outerCounterValue,
                ''
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.counterReactiveForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](103, 80, _r2.value)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                'Reactive Form Value: ',
                ctx.outerCounterValue,
                ''
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](99, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](100, _c3))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'headerStyles',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](101, _c0)
              )('heightWidth', _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](102, _c4))(
                'showHeader',
                'true'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('searchArray', ctx.tableData)(
                'showDropDown',
                'true'
              )('placeholder', 'Search agencies');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('dataKey', 'agencyId')(
                'tableData',
                ctx.tableData
              )('tableHeaders', ctx.tableHeaders2)('showEditOption', false)('showDeleteOption', false);
            }
          },
          directives: [
            _lib_common_button_common_button_component__WEBPACK_IMPORTED_MODULE_6__['CommonButtonComponent'],
            _lib_common_side_bar_common_sideBar_component__WEBPACK_IMPORTED_MODULE_7__['CommonSideBarComponent'],
            _lib_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_8__['CommonCardComponent'],
            _lib_common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_9__['CommonModalComponent'],
            _lib_common_auto_complete_common_search_component__WEBPACK_IMPORTED_MODULE_10__['CommonSearchComponent'],
            _lib_common_tab_common_tab_component__WEBPACK_IMPORTED_MODULE_11__['CommonTabComponent'],
            _lib_common_reactive_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__[
              'DynamicFormComponent'
            ],
            _lib_common_split_button_common_split_button_component__WEBPACK_IMPORTED_MODULE_12__[
              'CommonSplitButtonComponent'
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['ɵangular_packages_forms_forms_y'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['NgForm'],
            _lib_common_select_common_select_component__WEBPACK_IMPORTED_MODULE_13__['CommonSelectComponent'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['NgModel'],
            _lib_common_multi_select_common_multi_select_component__WEBPACK_IMPORTED_MODULE_14__[
              'CommonMultiSelectComponent'
            ],
            _lib_counter_componenet_common_counter_component__WEBPACK_IMPORTED_MODULE_15__['CommonCounterComponent'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__['FormControlName'],
            _lib_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_16__['CommonSliderComponent'],
            _lib_common_table_2_common_table_2_component__WEBPACK_IMPORTED_MODULE_17__['CommonTableTwoComponent']
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__['JsonPipe']],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-root',
                    templateUrl: './app.component.html'
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__['FormBuilder']
                }
              ];
            },
            {
              form: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: [
                    _lib_common_reactive_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_3__[
                      'DynamicFormComponent'
                    ]
                  ]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/app.module.ts':
      /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

      /*! exports provided: AppModule */

      /***/
      function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */
          './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );
        /* harmony import */

        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser/animations */
          './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app.component */
          './src/app/app.component.ts'
        );
        /* harmony import */

        var src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! src/lib/public_api */
          './src/lib/public_api.ts'
        );
        /* harmony import */

        var _lib_PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../lib/PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵdefineNgModule']({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent']]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵdefineInjector']({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['LocalStorageModule']],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__['BrowserAnimationsModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonButtonModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCardModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonModalModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonMultiSelectModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSearchModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSelectModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSplitButtonModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTabModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['DynamicFormModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
              _lib_PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_6__['PrimeNgModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCounterModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSliderModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableTwoModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonPaginatorModule'],
              src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSideBarModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵɵsetNgModuleScope'](AppModule, {
              declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent']],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__['BrowserAnimationsModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonButtonModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCardModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonModalModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonMultiSelectModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSearchModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSelectModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSplitButtonModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTabModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['DynamicFormModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                _lib_PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_6__['PrimeNgModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCounterModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSliderModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableTwoModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonPaginatorModule'],
                src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSideBarModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__['NgModule'],
                args: [
                  {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent']],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__['BrowserAnimationsModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonButtonModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCardModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonModalModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonMultiSelectModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSearchModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSelectModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSplitButtonModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTabModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['DynamicFormModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                      _lib_PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_6__['PrimeNgModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonCounterModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSliderModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonTableTwoModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonPaginatorModule'],
                      src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['CommonSideBarModule']
                    ],
                    providers: [src_lib_public_api__WEBPACK_IMPORTED_MODULE_5__['LocalStorageModule']],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/assets/testData.ts':
      /*!********************************!*\
    !*** ./src/assets/testData.ts ***!
    \********************************/

      /*! exports provided: tableHeaders, tabContent, mockData, States, states, tableHeaders2 */

      /***/
      function srcAssetsTestDataTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'tableHeaders', function() {
          return tableHeaders;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'tabContent', function() {
          return tabContent;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'mockData', function() {
          return mockData;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'States', function() {
          return States;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'states', function() {
          return states;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'tableHeaders2', function() {
          return tableHeaders2;
        });

        var tableHeaders = [
          {
            field: 'agencyId',
            header: 'ID'
          },
          {
            field: 'agencyName',
            header: 'Name'
          },
          {
            field: 'city',
            header: 'City'
          },
          {
            field: 'state',
            header: 'State'
          },
          {
            field: 'address',
            header: 'Address'
          },
          {
            field: 'zipCode',
            header: 'ZIP'
          },
          {
            field: 'totalAgents',
            header: 'Total Agents'
          }
        ];
        var tabContent = [
          {
            leftIcon: 'fa fa-user',
            header: 'Godfather I',
            content:
              "The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His\n  beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T\n  hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the\n  head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever\n  anything stands against the good of the family."
          },
          {
            leftIcon: 'fa fa-book',
            header: 'Godfather II',
            content:
              " Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the\n    young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark\n    side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the\n    local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing\n    brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's\n    business. With Fanucci gone, Vito's communal stature grows.."
          },
          {
            leftIcon: 'fa fa-edit',
            header: 'Godfather III',
            content:
              ' After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for\n    this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin\n    Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would\n    one day be completely legitimate..'
          }
        ];
        var mockData = [
          {
            agencyName: 'Sample Agency I',
            agencyId: 200,
            city: 'Marietta',
            state: 'GA',
            address: 'Kennesaw Ave NW',
            zipCode: '30062',
            totalAgents: 5 // agents: [
            //   {
            //     correspondingAgency: 'Sample Agency I',
            //     agentId: 201,
            //     photo: '/avatar.png',
            //     firstName: 'Conner',
            //     lastName: 'Mccormick',
            //     members: 2300,
            //     startDate: '09/12/2019',
            //     endDate: '09/23/2020',
            //     reps: [
            //       {
            //         id: '201-011',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Andrew',
            //         lastName: 'Kelly',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       },
            //       {
            //         id: '202-012',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Mike',
            //         lastName: 'Patel',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 575,
            //         Group: 575,
            //         Under65: 575,
            //         Over65: 575
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 475,
            //         Under65: 375,
            //         Over65: 275
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 202,
            //     correspondingAgency: 'Sample Agency I',
            //     photo: '/avatar.png',
            //     firstName: 'Bobby',
            //     lastName: 'Gardner',
            //     members: 2100,
            //     startDate: '08/02/2019',
            //     endDate: '08/02/2020',
            //     reps: [
            //       {
            //         id: '202-022',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Kelly',
            //         lastName: 'Ferguson',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       },
            //       {
            //         id: '202-023',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Lizzy',
            //         lastName: 'Cook',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 525,
            //         Group: 525,
            //         Under65: 525,
            //         Over65: 525
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 525,
            //         Group: 425,
            //         Under65: 325,
            //         Over65: 225
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 203,
            //     correspondingAgency: 'Sample Agency I',
            //     photo: '/avatar.png',
            //     firstName: 'Ally',
            //     lastName: 'Farmen',
            //     members: 2000,
            //     startDate: '07/12/2019',
            //     endDate: '07/12/2020',
            //     reps: [
            //       {
            //         id: '203-033',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Ash',
            //         lastName: 'Ketchem',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       },
            //       {
            //         id: '203-034',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Nathan',
            //         lastName: 'Tarongoy',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 204,
            //     correspondingAgency: 'Sample Agency I',
            //     photo: '/avatar.png',
            //     firstName: 'Jessica',
            //     lastName: 'Stevens',
            //     members: 2212,
            //     startDate: '03/08/2019',
            //     endDate: '03/08/2020',
            //     reps: [
            //       {
            //         id: '204-044',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Will',
            //         lastName: 'Frady',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       },
            //       {
            //         id: '204-045',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Diana',
            //         lastName: 'Jachman',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 553,
            //         Group: 553,
            //         Under65: 553,
            //         Over65: 553
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 553,
            //         Group: 453,
            //         Under65: 353,
            //         Over65: 253
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 205,
            //     correspondingAgency: 'Sample Agency I',
            //     photo: '/avatar.png',
            //     firstName: 'Andy',
            //     lastName: 'Pike',
            //     members: 2400,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [
            //       {
            //         id: '205-055',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Marry',
            //         lastName: 'Dupont',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       },
            //       {
            //         id: '205-056',
            //         correspondingAgency: 'Sample Agency I',
            //         firstName: 'Prasad',
            //         lastName: 'Kuri',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 600,
            //         Group: 600,
            //         Under65: 600,
            //         Over65: 600
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency II',
            agencyId: 300,
            city: 'Alpharetta',
            state: 'GA',
            address: 'Old Milton Pkwy',
            zipCode: '30022',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 301,
            //     correspondingAgency: 'Sample Agency II',
            //     photo: '/avatar.png',
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     members: 2300,
            //     startDate: '09/12/2019',
            //     endDate: '09/23/2020',
            //     reps: [
            //       {
            //         id: '301-033',
            //         correspondingAgency: 'Sample Agency II',
            //         firstName: 'Tanya',
            //         lastName: 'Harding',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 575,
            //         Group: 575,
            //         Under65: 575,
            //         Over65: 575
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 475,
            //         Under65: 375,
            //         Over65: 275
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 302,
            //     correspondingAgency: 'Sample Agency II',
            //     photo: '/avatar.png',
            //     firstName: 'Bobby',
            //     lastName: 'Gardner',
            //     members: 2100,
            //     startDate: '08/02/2019',
            //     endDate: '08/02/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 525,
            //         Group: 525,
            //         Under65: 525,
            //         Over65: 525
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 525,
            //         Group: 425,
            //         Under65: 325,
            //         Over65: 225
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 303,
            //     correspondingAgency: 'Sample Agency II',
            //     photo: '/avatar.png',
            //     firstName: 'Ally',
            //     lastName: 'Farmen',
            //     members: 2000,
            //     startDate: '07/12/2019',
            //     endDate: '07/12/2020',
            //     reps: [
            //       {
            //         id: '303-031',
            //         correspondingAgency: 'Sample Agency II',
            //         firstName: 'Katelyn',
            //         lastName: 'Bower',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 304,
            //     correspondingAgency: 'Sample Agency II',
            //     photo: '/avatar.png',
            //     firstName: 'Jessica',
            //     lastName: 'Stevens',
            //     members: 2212,
            //     startDate: '03/08/2019',
            //     endDate: '03/08/2020',
            //     reps: [
            //       {
            //         id: '304-034',
            //         correspondingAgency: 'Sample Agency II',
            //         firstName: 'Tony',
            //         lastName: 'Hawk',
            //         startDate: '09/12/2019',
            //         endDate: '09/22/2020'
            //       }
            //     ],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 553,
            //         Group: 553,
            //         Under65: 553,
            //         Over65: 553
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 553,
            //         Group: 453,
            //         Under65: 353,
            //         Over65: 253
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 305,
            //     correspondingAgency: 'Sample Agency II',
            //     photo: '/avatar.png',
            //     firstName: 'Andy',
            //     lastName: 'Pike',
            //     members: 2400,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 600,
            //         Group: 600,
            //         Under65: 600,
            //         Over65: 600
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency III',
            agencyId: 400,
            city: 'Atlanta',
            state: 'GA',
            address: '521 East Cobb Pkw',
            zipCode: '30305',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 401,
            //     correspondingAgency: 'Sample Agency III',
            //     photo: '/avatar.png',
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     members: 2300,
            //     startDate: '09/12/2019',
            //     endDate: '09/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 575,
            //         Group: 575,
            //         Under65: 575,
            //         Over65: 575
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 475,
            //         Under65: 375,
            //         Over65: 275
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 402,
            //     correspondingAgency: 'Sample Agency III',
            //     photo: '/avatar.png',
            //     firstName: 'Bobby',
            //     lastName: 'Gardner',
            //     members: 2100,
            //     startDate: '08/02/2019',
            //     endDate: '08/02/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 525,
            //         Group: 525,
            //         Under65: 525,
            //         Over65: 525
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 525,
            //         Group: 425,
            //         Under65: 325,
            //         Over65: 225
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 403,
            //     correspondingAgency: 'Sample Agency III',
            //     photo: '/avatar.png',
            //     firstName: 'Ally',
            //     lastName: 'Farmen',
            //     members: 2000,
            //     startDate: '07/12/2019',
            //     endDate: '07/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 404,
            //     correspondingAgency: 'Sample Agency III',
            //     photo: '/avatar.png',
            //     firstName: 'Jessica',
            //     lastName: 'Stevens',
            //     members: 2212,
            //     startDate: '03/08/2019',
            //     endDate: '03/08/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 553,
            //         Group: 553,
            //         Under65: 553,
            //         Over65: 553
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 553,
            //         Group: 453,
            //         Under65: 353,
            //         Over65: 253
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 405,
            //     correspondingAgency: 'Sample Agency III',
            //     photo: '/avatar.png',
            //     firstName: 'Andy',
            //     lastName: 'Pike',
            //     members: 2400,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 600,
            //         Group: 600,
            //         Under65: 600,
            //         Over65: 600
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency IV',
            agencyId: 500,
            city: 'Roswell',
            state: 'GA',
            address: '122 NE Roswell St',
            zipCode: '30009',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 501,
            //     correspondingAgency: 'Sample Agency IV',
            //     photo: '/avatar.png',
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     members: 2300,
            //     startDate: '09/21/2019',
            //     endDate: '09/21/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 575,
            //         Group: 575,
            //         Under65: 575,
            //         Over65: 575
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 475,
            //         Under65: 375,
            //         Over65: 275
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 502,
            //     correspondingAgency: 'Sample Agency IV',
            //     photo: '/avatar.png',
            //     firstName: 'Bobby',
            //     lastName: 'Gardner',
            //     members: 2100,
            //     startDate: '08/02/2019',
            //     endDate: '08/02/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 525,
            //         Group: 525,
            //         Under65: 525,
            //         Over65: 525
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 525,
            //         Group: 425,
            //         Under65: 325,
            //         Over65: 225
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 503,
            //     correspondingAgency: 'Sample Agency IV',
            //     photo: '/avatar.png',
            //     firstName: 'Ally',
            //     lastName: 'Farmen',
            //     members: 2000,
            //     startDate: '07/12/2019',
            //     endDate: '07/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 504,
            //     correspondingAgency: 'Sample Agency IV',
            //     photo: '/avatar.png',
            //     firstName: 'Jessica',
            //     lastName: 'Stevens',
            //     members: 2212,
            //     startDate: '03/08/2019',
            //     endDate: '03/08/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 553,
            //         Group: 553,
            //         Under65: 553,
            //         Over65: 553
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 553,
            //         Group: 453,
            //         Under65: 353,
            //         Over65: 253
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 505,
            //     correspondingAgency: 'Sample Agency IV',
            //     photo: '/avatar.png',
            //     firstName: 'Andy',
            //     lastName: 'Pike',
            //     members: 2400,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 600,
            //         Group: 600,
            //         Under65: 600,
            //         Over65: 600
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency V',
            agencyId: 600,
            city: 'Alpharetta',
            state: 'GA',
            address: '123 NE Rd',
            zipCode: '30005',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 601,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Billy',
            //     lastName: 'Crank',
            //     members: 1300,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 325,
            //         Group: 325,
            //         Under65: 325,
            //         Over65: 325
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 325,
            //         Group: 225,
            //         Under65: 125,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 602,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Ashley',
            //     lastName: 'Babykin',
            //     members: 1100,
            //     startDate: '03/12/2019',
            //     endDate: '03/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 275,
            //         Group: 275,
            //         Under65: 275,
            //         Over65: 275
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 275,
            //         Group: 175,
            //         Under65: 75,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 603,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Suzy',
            //     lastName: 'Lu',
            //     members: 2000,
            //     startDate: '01/01/2019',
            //     endDate: '01/01/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 604,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Mary',
            //     lastName: 'White',
            //     members: 1212,
            //     startDate: '11/11/2019',
            //     endDate: '11/11/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 303,
            //         Group: 303,
            //         Under65: 303,
            //         Over65: 303
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 303,
            //         Group: 203,
            //         Under65: 103,
            //         Over65: 30
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 605,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Chris',
            //     lastName: 'Stevens',
            //     members: 2450,
            //     startDate: '03/22/2019',
            //     endDate: '03/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 612,
            //         Group: 612,
            //         Under65: 612,
            //         Over65: 612
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 612,
            //         Group: 512,
            //         Under65: 412,
            //         Over65: 312
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency VI',
            agencyId: 700,
            city: 'Alpharetta',
            state: 'GA',
            address: '123 NE Rd',
            zipCode: '30005',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 701,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Billy',
            //     lastName: 'Crank',
            //     members: 1300,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 325,
            //         Group: 325,
            //         Under65: 325,
            //         Over65: 325
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 325,
            //         Group: 225,
            //         Under65: 125,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 702,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Ashley',
            //     lastName: 'Babykin',
            //     members: 1100,
            //     startDate: '03/12/2019',
            //     endDate: '03/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 275,
            //         Group: 275,
            //         Under65: 275,
            //         Over65: 275
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 275,
            //         Group: 175,
            //         Under65: 75,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 703,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Suzy',
            //     lastName: 'Lu',
            //     members: 2000,
            //     startDate: '01/01/2019',
            //     endDate: '01/01/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 704,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Mary',
            //     lastName: 'White',
            //     members: 1212,
            //     startDate: '11/11/2019',
            //     endDate: '11/11/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 303,
            //         Group: 303,
            //         Under65: 303,
            //         Over65: 303
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 303,
            //         Group: 203,
            //         Under65: 103,
            //         Over65: 30
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 705,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Chris',
            //     lastName: 'Stevens',
            //     members: 2450,
            //     startDate: '03/22/2019',
            //     endDate: '03/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 612,
            //         Group: 612,
            //         Under65: 612,
            //         Over65: 612
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 612,
            //         Group: 512,
            //         Under65: 412,
            //         Over65: 312
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency VII',
            agencyId: 800,
            city: 'Alpharetta',
            state: 'GA',
            address: '123 NE Rd',
            zipCode: '30005',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 801,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Billy',
            //     lastName: 'Crank',
            //     members: 1300,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 325,
            //         Group: 325,
            //         Under65: 325,
            //         Over65: 325
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 325,
            //         Group: 225,
            //         Under65: 125,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 802,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Ashley',
            //     lastName: 'Babykin',
            //     members: 1100,
            //     startDate: '03/12/2019',
            //     endDate: '03/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 275,
            //         Group: 275,
            //         Under65: 275,
            //         Over65: 275
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 275,
            //         Group: 175,
            //         Under65: 75,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 803,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Suzy',
            //     lastName: 'Lu',
            //     members: 2000,
            //     startDate: '01/01/2019',
            //     endDate: '01/01/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 804,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Mary',
            //     lastName: 'White',
            //     members: 1212,
            //     startDate: '11/11/2019',
            //     endDate: '11/11/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 303,
            //         Group: 303,
            //         Under65: 303,
            //         Over65: 303
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 303,
            //         Group: 203,
            //         Under65: 103,
            //         Over65: 30
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 805,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Chris',
            //     lastName: 'Stevens',
            //     members: 2450,
            //     startDate: '03/22/2019',
            //     endDate: '03/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 612,
            //         Group: 612,
            //         Under65: 612,
            //         Over65: 612
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 612,
            //         Group: 512,
            //         Under65: 412,
            //         Over65: 312
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency VIII',
            agencyId: 900,
            city: 'Alpharetta',
            state: 'GA',
            address: '123 NE Rd',
            zipCode: '30005',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 701,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Billy',
            //     lastName: 'Crank',
            //     members: 1300,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 325,
            //         Group: 325,
            //         Under65: 325,
            //         Over65: 325
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 325,
            //         Group: 225,
            //         Under65: 125,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 902,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Ashley',
            //     lastName: 'Babykin',
            //     members: 1100,
            //     startDate: '03/12/2019',
            //     endDate: '03/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 275,
            //         Group: 275,
            //         Under65: 275,
            //         Over65: 275
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 275,
            //         Group: 175,
            //         Under65: 75,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 903,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Suzy',
            //     lastName: 'Lu',
            //     members: 2000,
            //     startDate: '01/01/2019',
            //     endDate: '01/01/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 904,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Mary',
            //     lastName: 'White',
            //     members: 1212,
            //     startDate: '11/11/2019',
            //     endDate: '11/11/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 303,
            //         Group: 303,
            //         Under65: 303,
            //         Over65: 303
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 303,
            //         Group: 203,
            //         Under65: 103,
            //         Over65: 30
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 905,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Chris',
            //     lastName: 'Stevens',
            //     members: 2450,
            //     startDate: '03/22/2019',
            //     endDate: '03/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 612,
            //         Group: 612,
            //         Under65: 612,
            //         Over65: 612
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 612,
            //         Group: 512,
            //         Under65: 412,
            //         Over65: 312
            //       }
            //     ]
            //   }
            // ]
          },
          {
            agencyName: 'Sample Agency IX',
            agencyId: 1000,
            city: 'Alpharetta',
            state: 'GA',
            address: '123 NE Rd',
            zipCode: '30005',
            totalAgents: 5 // agents: [
            //   {
            //     agentId: 701,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Billy',
            //     lastName: 'Crank',
            //     members: 1300,
            //     startDate: '02/15/2019',
            //     endDate: '02/15/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 325,
            //         Group: 325,
            //         Under65: 325,
            //         Over65: 325
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 325,
            //         Group: 225,
            //         Under65: 125,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 1000,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Ashley',
            //     lastName: 'Babykin',
            //     members: 1100,
            //     startDate: '03/12/2019',
            //     endDate: '03/12/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 275,
            //         Group: 275,
            //         Under65: 275,
            //         Over65: 275
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 275,
            //         Group: 175,
            //         Under65: 75,
            //         Over65: 25
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 1000,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Suzy',
            //     lastName: 'Lu',
            //     members: 2000,
            //     startDate: '01/01/2019',
            //     endDate: '01/01/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 500,
            //         Group: 500,
            //         Under65: 500,
            //         Over65: 500
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 500,
            //         Group: 400,
            //         Under65: 300,
            //         Over65: 200
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 1000,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Mary',
            //     lastName: 'White',
            //     members: 1212,
            //     startDate: '11/11/2019',
            //     endDate: '11/11/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 303,
            //         Group: 303,
            //         Under65: 303,
            //         Over65: 303
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 303,
            //         Group: 203,
            //         Under65: 103,
            //         Over65: 30
            //       }
            //     ]
            //   },
            //   {
            //     agentId: 1000,
            //     correspondingAgency: 'Sample Agency V',
            //     photo: '/avatar.png',
            //     firstName: 'Chris',
            //     lastName: 'Stevens',
            //     members: 2450,
            //     startDate: '03/22/2019',
            //     endDate: '03/23/2020',
            //     reps: [],
            //     membersList: [
            //       {
            //         name: 'Group A',
            //         Ancillary: 612,
            //         Group: 612,
            //         Under65: 612,
            //         Over65: 612
            //       },
            //       {
            //         name: 'Group B',
            //         Ancillary: 612,
            //         Group: 512,
            //         Under65: 412,
            //         Over65: 312
            //       }
            //     ]
            //   }
            // ]
          }
        ];
        var States = [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ];
        var states = [
          {
            name: 'Alabama',
            abbreviation: 'AL'
          },
          {
            name: 'Alaska',
            abbreviation: 'AK'
          },
          {
            name: 'American Samoa',
            abbreviation: 'AS'
          },
          {
            name: 'Arizona',
            abbreviation: 'AZ'
          },
          {
            name: 'Arkansas',
            abbreviation: 'AR'
          },
          {
            name: 'California',
            abbreviation: 'CA'
          },
          {
            name: 'Colorado',
            abbreviation: 'CO'
          },
          {
            name: 'Connecticut',
            abbreviation: 'CT'
          },
          {
            name: 'Delaware',
            abbreviation: 'DE'
          },
          {
            name: 'District Of Columbia',
            abbreviation: 'DC'
          },
          {
            name: 'Federated States Of Micronesia',
            abbreviation: 'FM'
          },
          {
            name: 'Florida',
            abbreviation: 'FL'
          },
          {
            name: 'Georgia',
            abbreviation: 'GA'
          },
          {
            name: 'Guam',
            abbreviation: 'GU'
          },
          {
            name: 'Hawaii',
            abbreviation: 'HI'
          },
          {
            name: 'Idaho',
            abbreviation: 'ID'
          },
          {
            name: 'Illinois',
            abbreviation: 'IL'
          },
          {
            name: 'Indiana',
            abbreviation: 'IN'
          },
          {
            name: 'Iowa',
            abbreviation: 'IA'
          },
          {
            name: 'Kansas',
            abbreviation: 'KS'
          },
          {
            name: 'Kentucky',
            abbreviation: 'KY'
          },
          {
            name: 'Louisiana',
            abbreviation: 'LA'
          },
          {
            name: 'Maine',
            abbreviation: 'ME'
          },
          {
            name: 'Marshall Islands',
            abbreviation: 'MH'
          },
          {
            name: 'Maryland',
            abbreviation: 'MD'
          },
          {
            name: 'Massachusetts',
            abbreviation: 'MA'
          },
          {
            name: 'Michigan',
            abbreviation: 'MI'
          },
          {
            name: 'Minnesota',
            abbreviation: 'MN'
          },
          {
            name: 'Mississippi',
            abbreviation: 'MS'
          },
          {
            name: 'Missouri',
            abbreviation: 'MO'
          },
          {
            name: 'Montana',
            abbreviation: 'MT'
          },
          {
            name: 'Nebraska',
            abbreviation: 'NE'
          },
          {
            name: 'Nevada',
            abbreviation: 'NV'
          },
          {
            name: 'New Hampshire',
            abbreviation: 'NH'
          },
          {
            name: 'New Jersey',
            abbreviation: 'NJ'
          },
          {
            name: 'New Mexico',
            abbreviation: 'NM'
          },
          {
            name: 'New York',
            abbreviation: 'NY'
          },
          {
            name: 'North Carolina',
            abbreviation: 'NC'
          },
          {
            name: 'North Dakota',
            abbreviation: 'ND'
          },
          {
            name: 'Northern Mariana Islands',
            abbreviation: 'MP'
          },
          {
            name: 'Ohio',
            abbreviation: 'OH'
          },
          {
            name: 'Oklahoma',
            abbreviation: 'OK'
          },
          {
            name: 'Oregon',
            abbreviation: 'OR'
          },
          {
            name: 'Palau',
            abbreviation: 'PW'
          },
          {
            name: 'Pennsylvania',
            abbreviation: 'PA'
          },
          {
            name: 'Puerto Rico',
            abbreviation: 'PR'
          },
          {
            name: 'Rhode Island',
            abbreviation: 'RI'
          },
          {
            name: 'South Carolina',
            abbreviation: 'SC'
          },
          {
            name: 'South Dakota',
            abbreviation: 'SD'
          },
          {
            name: 'Tennessee',
            abbreviation: 'TN'
          },
          {
            name: 'Texas',
            abbreviation: 'TX'
          },
          {
            name: 'Utah',
            abbreviation: 'UT'
          },
          {
            name: 'Vermont',
            abbreviation: 'VT'
          },
          {
            name: 'Virgin Islands',
            abbreviation: 'VI'
          },
          {
            name: 'Virginia',
            abbreviation: 'VA'
          },
          {
            name: 'Washington',
            abbreviation: 'WA'
          },
          {
            name: 'West Virginia',
            abbreviation: 'WV'
          },
          {
            name: 'Wisconsin',
            abbreviation: 'WI'
          },
          {
            name: 'Wyoming',
            abbreviation: 'WY'
          }
        ];
        var tableHeaders2 = [
          {
            id: 0,
            name: 'Agency Id',
            prop: 'agencyId'
          },
          {
            id: 1,
            name: 'Agency Name',
            prop: 'agencyName'
          },
          {
            id: 2,
            name: 'City',
            prop: 'city'
          },
          {
            id: 3,
            name: 'State',
            prop: 'state'
          },
          {
            id: 4,
            name: 'Address',
            prop: 'address'
          },
          {
            id: 5,
            name: 'ZipCode',
            prop: 'zipCode'
          },
          {
            id: 6,
            name: 'Agents',
            prop: 'totalAgents'
          } // {
          //   id: 7,
          //   name: '',
          //   prop: ''
          // }
        ];
        /***/
      },

    /***/
    './src/environments/environment.ts':
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        }); // This file can be replaced during build by using the `fileReplacements` array.
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

        /***/
      },

    /***/
    './src/lib/PrimeNgModules.module.ts':
      /*!******************************************!*\
    !*** ./src/lib/PrimeNgModules.module.ts ***!
    \******************************************/

      /*! exports provided: PrimeNgModule */

      /***/
      function srcLibPrimeNgModulesModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PrimeNgModule', function() {
          return PrimeNgModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/button */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js'
        );
        /* harmony import */

        var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/calendar */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js'
        );
        /* harmony import */

        var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/card */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js'
        );
        /* harmony import */

        var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/checkbox */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js'
        );
        /* harmony import */

        var primeng_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/chips */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chips.js'
        );
        /* harmony import */

        var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/confirmdialog */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js'
        );
        /* harmony import */

        var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/dropdown */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js'
        );
        /* harmony import */

        var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/dialog */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js'
        );
        /* harmony import */

        var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/inputtext */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js'
        );
        /* harmony import */

        var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/inputtextarea */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js'
        );
        /* harmony import */

        var primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! primeng/inputmask */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputmask.js'
        );
        /* harmony import */

        var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! primeng/inputswitch */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputswitch.js'
        );
        /* harmony import */

        var primeng_lightbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/lightbox */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-lightbox.js'
        );
        /* harmony import */

        var primeng_listbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/listbox */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-listbox.js'
        );
        /* harmony import */

        var primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/multiselect */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js'
        );
        /* harmony import */

        var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! primeng/selectbutton */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-selectbutton.js'
        );
        /* harmony import */

        var primeng_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! primeng/spinner */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-spinner.js'
        );
        /* harmony import */

        var primeng_tabview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! primeng/tabview */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js'
        );
        /* harmony import */

        var primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! primeng/sidebar */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js'
        );
        /* harmony import */

        var primeng_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! primeng/table */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js'
        );
        /* harmony import */

        var primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! primeng/toolbar */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toolbar.js'
        );
        /* harmony import */

        var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! primeng/togglebutton */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-togglebutton.js'
        );
        /* harmony import */

        var primeng_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! primeng/paginator */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js'
        );
        /* harmony import */

        var primeng_toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! primeng/toast */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js'
        );
        /* harmony import */

        var primeng_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! primeng/api */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js'
        );

        var PrimeNgModule = function PrimeNgModule() {
          _classCallCheck(this, PrimeNgModule);
        };

        PrimeNgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: PrimeNgModule
        });
        PrimeNgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function PrimeNgModule_Factory(t) {
            return new (t || PrimeNgModule)();
          },
          providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_26__['ConfirmationService'],
            primeng_api__WEBPACK_IMPORTED_MODULE_26__['MessageService']
          ],
          imports: [
            [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
            primeng_button__WEBPACK_IMPORTED_MODULE_2__['ButtonModule'],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_3__['CalendarModule'],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__['CheckboxModule'],
            primeng_chips__WEBPACK_IMPORTED_MODULE_6__['ChipsModule'],
            primeng_card__WEBPACK_IMPORTED_MODULE_4__['CardModule'],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__['ConfirmDialogModule'],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__['DropdownModule'],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_9__['DialogModule'],
            primeng_lightbox__WEBPACK_IMPORTED_MODULE_14__['LightboxModule'],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__['InputTextModule'],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__['InputMaskModule'],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__['InputSwitchModule'],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__['InputTextareaModule'],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_15__['ListboxModule'],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__['MultiSelectModule'],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__['SelectButtonModule'],
            primeng_spinner__WEBPACK_IMPORTED_MODULE_18__['SpinnerModule'],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__['SidebarModule'],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_19__['TabViewModule'],
            primeng_table__WEBPACK_IMPORTED_MODULE_21__['TableModule'],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__['ToolbarModule'],
            primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__['ToggleButtonModule'],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_24__['PaginatorModule'],
            primeng_toast__WEBPACK_IMPORTED_MODULE_25__['ToastModule']
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](PrimeNgModule, {
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
              exports: [
                primeng_button__WEBPACK_IMPORTED_MODULE_2__['ButtonModule'],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_3__['CalendarModule'],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__['CheckboxModule'],
                primeng_chips__WEBPACK_IMPORTED_MODULE_6__['ChipsModule'],
                primeng_card__WEBPACK_IMPORTED_MODULE_4__['CardModule'],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__['ConfirmDialogModule'],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__['DropdownModule'],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_9__['DialogModule'],
                primeng_lightbox__WEBPACK_IMPORTED_MODULE_14__['LightboxModule'],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__['InputTextModule'],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__['InputMaskModule'],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__['InputSwitchModule'],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__['InputTextareaModule'],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_15__['ListboxModule'],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__['MultiSelectModule'],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__['SelectButtonModule'],
                primeng_spinner__WEBPACK_IMPORTED_MODULE_18__['SpinnerModule'],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__['SidebarModule'],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_19__['TabViewModule'],
                primeng_table__WEBPACK_IMPORTED_MODULE_21__['TableModule'],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__['ToolbarModule'],
                primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__['ToggleButtonModule'],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_24__['PaginatorModule'],
                primeng_toast__WEBPACK_IMPORTED_MODULE_25__['ToastModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PrimeNgModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                    exports: [
                      primeng_button__WEBPACK_IMPORTED_MODULE_2__['ButtonModule'],
                      primeng_calendar__WEBPACK_IMPORTED_MODULE_3__['CalendarModule'],
                      primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__['CheckboxModule'],
                      primeng_chips__WEBPACK_IMPORTED_MODULE_6__['ChipsModule'],
                      primeng_card__WEBPACK_IMPORTED_MODULE_4__['CardModule'],
                      primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__['ConfirmDialogModule'],
                      primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__['DropdownModule'],
                      primeng_dialog__WEBPACK_IMPORTED_MODULE_9__['DialogModule'],
                      primeng_lightbox__WEBPACK_IMPORTED_MODULE_14__['LightboxModule'],
                      primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__['InputTextModule'],
                      primeng_inputmask__WEBPACK_IMPORTED_MODULE_12__['InputMaskModule'],
                      primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__['InputSwitchModule'],
                      primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__['InputTextareaModule'],
                      primeng_listbox__WEBPACK_IMPORTED_MODULE_15__['ListboxModule'],
                      primeng_multiselect__WEBPACK_IMPORTED_MODULE_16__['MultiSelectModule'],
                      primeng_selectbutton__WEBPACK_IMPORTED_MODULE_17__['SelectButtonModule'],
                      primeng_spinner__WEBPACK_IMPORTED_MODULE_18__['SpinnerModule'],
                      primeng_sidebar__WEBPACK_IMPORTED_MODULE_20__['SidebarModule'],
                      primeng_tabview__WEBPACK_IMPORTED_MODULE_19__['TabViewModule'],
                      primeng_table__WEBPACK_IMPORTED_MODULE_21__['TableModule'],
                      primeng_toolbar__WEBPACK_IMPORTED_MODULE_22__['ToolbarModule'],
                      primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__['ToggleButtonModule'],
                      primeng_paginator__WEBPACK_IMPORTED_MODULE_24__['PaginatorModule'],
                      primeng_toast__WEBPACK_IMPORTED_MODULE_25__['ToastModule']
                    ],
                    providers: [
                      primeng_api__WEBPACK_IMPORTED_MODULE_26__['ConfirmationService'],
                      primeng_api__WEBPACK_IMPORTED_MODULE_26__['MessageService']
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-auto-complete/common-search.component.ts':
      /*!*****************************************************************!*\
    !*** ./src/lib/common-auto-complete/common-search.component.ts ***!
    \*****************************************************************/

      /*! exports provided: CommonSearchComponent */

      /***/
      function srcLibCommonAutoCompleteCommonSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSearchComponent', function() {
          return CommonSearchComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/inputtext */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js'
        );

        function CommonSearchComponent_ul_2_li_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonSearchComponent_ul_2_li_1_Template_li_click_0_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r47);

                var result_r44 = ctx.$implicit;

                var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r46.sendSearchResult(result_r44, result_r44.value);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var result_r44 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', result_r44.value, ' ');
          }
        }

        function CommonSearchComponent_ul_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'ul', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              CommonSearchComponent_ul_2_li_1_Template,
              2,
              1,
              'li',
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngStyle', ctx_r42.stylesClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r42.searchResults);
          }
        }

        var CommonSearchComponent =
          /*#__PURE__*/
          (function() {
            function CommonSearchComponent() {
              _classCallCheck(this, CommonSearchComponent);

              this.isDisabled = false;
              this.showDropDown = false;
              this.placeholder = 'Search...';
              this.selectedSearchResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.searchQuery = '';
              this.searchResults = null;
            }

            _createClass(CommonSearchComponent, [
              {
                key: 'handleSearch',
                value: function handleSearch(searchQuery) {
                  var lowerCaseQueryString = searchQuery.toLowerCase().trim();

                  if (lowerCaseQueryString.length === 0) {
                    this.searchQuery = '';
                  } else if (lowerCaseQueryString.length > 0) {
                    this.searchQuery = lowerCaseQueryString;
                    this.checkSearchResults();
                  }
                }
              },
              {
                key: 'checkSearchResults',
                value: function checkSearchResults() {
                  var searchResults = this.getSearchResults();
                  this.searchResults = searchResults;
                }
              },
              {
                key: 'getSearchResults',
                value: function getSearchResults() {
                  var _this3 = this;

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

                      if (!lowerCaseElement.includes(_this3.searchQuery)) {
                        errorMessage = [
                          {
                            value: 'No Records found,'
                          }
                        ];
                      } else if (lowerCaseElement.includes(_this3.searchQuery)) {
                        searchResult.push(
                          Object.assign(Object.assign({}, element), {
                            value: element[key]
                          })
                        );
                      }
                    });
                  });
                  return searchResult && searchResult.length ? searchResult : errorMessage;
                }
              },
              {
                key: 'sendSearchResult',
                value: function sendSearchResult(value, selectedString) {
                  this.searchQuery = selectedString;
                  this.searchResults = null;
                  this.selectedSearchResult.emit(value);
                }
              }
            ]);

            return CommonSearchComponent;
          })();

        CommonSearchComponent.ɵfac = function CommonSearchComponent_Factory(t) {
          return new (t || CommonSearchComponent)();
        };

        CommonSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonSearchComponent,
          selectors: [['common-search']],
          inputs: {
            isDisabled: 'isDisabled',
            showDropDown: 'showDropDown',
            placeholder: 'placeholder',
            searchArray: 'searchArray',
            stylesClass: 'stylesClass'
          },
          outputs: {
            selectedSearchResult: 'selectedSearchResult'
          },
          decls: 3,
          vars: 8,
          consts: [
            [1, 'search-container', 3, 'ngStyle'],
            [
              'type',
              'search',
              'pInputText',
              '',
              'name',
              'searchQuery',
              1,
              'input-styles',
              3,
              'placeholder',
              'disabled',
              'ngModel',
              'ngStyle',
              'ngModelChange'
            ],
            ['class', 'cursor-pointer list-container', 3, 'ngStyle', 4, 'ngIf'],
            [1, 'cursor-pointer', 'list-container', 3, 'ngStyle'],
            [
              'class',
              'no-bullets list',
              'style',
              'text-transform: capitalize;',
              'key',
              'i',
              3,
              'click',
              4,
              'ngFor',
              'ngForOf'
            ],
            ['key', 'i', 1, 'no-bullets', 'list', 2, 'text-transform', 'capitalize', 3, 'click']
          ],
          template: function CommonSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function CommonSearchComponent_Template_input_ngModelChange_1_listener($event) {
                  return (ctx.searchQuery = $event);
                }
              )('ngModelChange', function CommonSearchComponent_Template_input_ngModelChange_1_listener($event) {
                return ctx.handleSearch($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CommonSearchComponent_ul_2_Template,
                2,
                2,
                'ul',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngStyle', ctx.stylesClass);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
                ctx.isDisabled === true ? 'form-control disabled-class' : 'form-control'
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('placeholder', ctx.placeholder)(
                'disabled',
                ctx.isDisabled
              )('ngModel', ctx.searchQuery)('ngStyle', ctx.stylesClass);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.searchQuery.length > 0);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgStyle'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['DefaultValueAccessor'],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__['InputText'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgModel'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf']
          ],
          styles: [
            '.search-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.input-styles[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  overflow-y: scroll;\n  height: 200px;\n  width: 500px;\n  z-index: 99;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n  text-align: left;\n}\n\n.list-disabled[_ngcontent-%COMP%] {\n  color: gray;\n  padding: 0.5rem;\n  text-align: left;\n}\n\n.list[_ngcontent-%COMP%]:hover {\n  background-color: #dddd;\n  cursor: pointer;\n}\n\n.disabled-class[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tYXV0by1jb21wbGV0ZS9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2xpYi9jb21tb24tYXV0by1jb21wbGV0ZS9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tYXV0by1jb21wbGV0ZS9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmlucHV0LXN0eWxlcyB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0LWRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzYWJsZWQtY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4iLCIuc2VhcmNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW5wdXQtc3R5bGVzIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3QtZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXNhYmxlZC1jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSearchComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-search',
                    templateUrl: './common-search.component.html',
                    styleUrls: ['./common-search.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              isDisabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showDropDown: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              placeholder: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              searchArray: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              stylesClass: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectedSearchResult: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-auto-complete/common-search.module.ts':
      /*!**************************************************************!*\
    !*** ./src/lib/common-auto-complete/common-search.module.ts ***!
    \**************************************************************/

      /*! exports provided: CommonSearchModule */

      /***/
      function srcLibCommonAutoCompleteCommonSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSearchModule', function() {
          return CommonSearchModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );
        /* harmony import */

        var _common_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./common-search.component */
          './src/lib/common-auto-complete/common-search.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonSearchModule = function CommonSearchModule() {
          _classCallCheck(this, CommonSearchModule);
        };

        CommonSearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonSearchModule
        });
        CommonSearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonSearchModule_Factory(t) {
            return new (t || CommonSearchModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
              _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonSearchModule, {
              declarations: [_common_search_component__WEBPACK_IMPORTED_MODULE_3__['CommonSearchComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
                _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule']
              ],
              exports: [_common_search_component__WEBPACK_IMPORTED_MODULE_3__['CommonSearchComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSearchModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
                      _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule']
                    ],
                    declarations: [_common_search_component__WEBPACK_IMPORTED_MODULE_3__['CommonSearchComponent']],
                    exports: [_common_search_component__WEBPACK_IMPORTED_MODULE_3__['CommonSearchComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-button/common-button.component.ts':
      /*!**********************************************************!*\
    !*** ./src/lib/common-button/common-button.component.ts ***!
    \**********************************************************/

      /*! exports provided: CommonButtonComponent */

      /***/
      function srcLibCommonButtonCommonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonButtonComponent', function() {
          return CommonButtonComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var _c0 = function _c0(a0) {
          return {
            'background-color': a0
          };
        };

        var CommonButtonComponent =
          /*#__PURE__*/
          (function() {
            function CommonButtonComponent() {
              _classCallCheck(this, CommonButtonComponent);

              this.buttonType = 'button';
              this.isDisabled = false;
              this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            }

            _createClass(CommonButtonComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {}
              }
            ]);

            return CommonButtonComponent;
          })();

        CommonButtonComponent.ɵfac = function CommonButtonComponent_Factory(t) {
          return new (t || CommonButtonComponent)();
        };

        CommonButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonButtonComponent,
          selectors: [['common-button']],
          inputs: {
            buttonText: 'buttonText',
            buttonType: 'buttonType',
            isDisabled: 'isDisabled',
            backgroundColor: 'backgroundColor'
          },
          outputs: {
            handleClick: 'handleClick'
          },
          decls: 3,
          vars: 6,
          consts: [[3, 'ngStyle', 'type', 'disabled', 'click']],
          template: function CommonButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonButtonComponent_Template_button_click_1_listener($event) {
                  return ctx.handleClick.emit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngStyle',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](4, _c0, ctx.backgroundColor)
              )('type', ctx.buttonType)('disabled', ctx.isDisabled);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.buttonText, ' ');
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['NgStyle']],
          styles: [
            'button[_ngcontent-%COMP%] {\n  padding: 0.5rem 2rem;\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: white;\n  border: 0.1rem solid;\n  border-radius: 0.5rem;\n  text-transform: uppercase;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  cursor: pointer;\n  background-color: green;\n}\nbutton[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n.primary[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.primary[_ngcontent-%COMP%]:hover, .primary[_ngcontent-%COMP%]:active {\n  background-color: var(--primary);\n  color: white;\n}\n.clear[_ngcontent-%COMP%] {\n  border: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tYnV0dG9uL2NvbW1vbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi1idXR0b24vY29tbW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFFRSxhQUFBO0FDQUo7QURHQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7QUNBRjtBREVFO0VBRUUsZ0NBQUE7RUFDQSxZQUFBO0FDREo7QURLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tYnV0dG9uL2NvbW1vbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuLnByaW1hcnkge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uY2xlYXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn0iLCJidXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnByaW1hcnk6aG92ZXIsIC5wcmltYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbGVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-button',
                    template:
                      '\n    <ng-container>\n      <button\n        [ngStyle]="{ \'background-color\': backgroundColor }"\n        [type]="buttonType"\n        (click)="handleClick.emit($event)"\n        [disabled]="isDisabled"\n      >\n        {{ buttonText }}\n      </button>\n    </ng-container>\n  ',
                    styleUrls: ['./common-button.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              buttonText: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              buttonType: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              isDisabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              backgroundColor: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              handleClick: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-button/common-button.module.ts':
      /*!*******************************************************!*\
    !*** ./src/lib/common-button/common-button.module.ts ***!
    \*******************************************************/

      /*! exports provided: CommonButtonModule */

      /***/
      function srcLibCommonButtonCommonButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonButtonModule', function() {
          return CommonButtonModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _common_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./common-button.component */
          './src/lib/common-button/common-button.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var CommonButtonModule = function CommonButtonModule() {
          _classCallCheck(this, CommonButtonModule);
        };

        CommonButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonButtonModule
        });
        CommonButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonButtonModule_Factory(t) {
            return new (t || CommonButtonModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonButtonModule, {
              declarations: [_common_button_component__WEBPACK_IMPORTED_MODULE_1__['CommonButtonComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
              exports: [_common_button_component__WEBPACK_IMPORTED_MODULE_1__['CommonButtonComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonButtonModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule']],
                    declarations: [_common_button_component__WEBPACK_IMPORTED_MODULE_1__['CommonButtonComponent']],
                    exports: [_common_button_component__WEBPACK_IMPORTED_MODULE_1__['CommonButtonComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-card/common-card.component.ts':
      /*!******************************************************!*\
    !*** ./src/lib/common-card/common-card.component.ts ***!
    \******************************************************/

      /*! exports provided: CommonCardComponent */

      /***/
      function srcLibCommonCardCommonCardComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonCardComponent', function() {
          return CommonCardComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function CommonCardComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngStyle', ctx_r11.headerStyles);
          }
        }

        function CommonCardComponent_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        var _c0 = ['*', [['div', 'role', 'header']], [['div', 'role', 'footer']]];
        var _c1 = ['*', 'div[role=header]', 'div[role=footer]'];

        var CommonCardComponent =
          /*#__PURE__*/
          (function() {
            function CommonCardComponent() {
              _classCallCheck(this, CommonCardComponent);

              this.heightWidth = '';
              this.headerStyles = '';
            }

            _createClass(CommonCardComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {}
              }
            ]);

            return CommonCardComponent;
          })();

        CommonCardComponent.ɵfac = function CommonCardComponent_Factory(t) {
          return new (t || CommonCardComponent)();
        };

        CommonCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonCardComponent,
          selectors: [['common-card']],
          inputs: {
            showHeader: 'showHeader',
            showFooter: 'showFooter',
            heightWidth: 'heightWidth',
            headerStyles: 'headerStyles'
          },
          ngContentSelectors: _c1,
          decls: 6,
          vars: 3,
          consts: [
            [1, 'card-container', 'height-width', 3, 'ngStyle'],
            [1, 'card'],
            ['class', 'card-header', 3, 'ngStyle', 4, 'ngIf'],
            [1, 'card-body', 'height-width'],
            ['class', 'card-footer', 4, 'ngIf'],
            [1, 'card-header', 3, 'ngStyle'],
            [1, 'card-footer']
          ],
          template: function CommonCardComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef'](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CommonCardComponent_div_2_Template,
                2,
                1,
                'div',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                CommonCardComponent_div_5_Template,
                2,
                0,
                'div',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngStyle', ctx.heightWidth);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.showHeader);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.showFooter);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgStyle'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf']
          ],
          styles: [
            '.card-container[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 50%;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 0.5rem 0 0.5rem 0;\n  word-wrap: break-word;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tY2FyZC9jb21tb24tY2FyZC1jb21wb25lbnQuc2NzcyIsInNyYy9saWIvY29tbW9uLWNhcmQvY29tbW9uLWNhcmQtY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvbGliL2NvbW1vbi1jYXJkL2NvbW1vbi1jYXJkLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iLCIuY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonCardComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-card',
                    template:
                      '\n    <div [ngStyle]="heightWidth" class="card-container height-width">\n      <div class="card">\n        <div [ngStyle]="headerStyles" *ngIf="showHeader" class="card-header">\n          <ng-content select="div[role=header]"></ng-content>\n        </div>\n        <div class="card-body height-width">\n          <ng-content></ng-content>\n        </div>\n        <div class="card-footer" *ngIf="showFooter">\n          <ng-content select="div[role=footer]"></ng-content>\n        </div>\n      </div>\n    </div>\n  ',
                    styleUrls: ['./common-card-component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              showHeader: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showFooter: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              heightWidth: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              headerStyles: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-card/common-card.module.ts':
      /*!***************************************************!*\
    !*** ./src/lib/common-card/common-card.module.ts ***!
    \***************************************************/

      /*! exports provided: CommonCardModule */

      /***/
      function srcLibCommonCardCommonCardModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonCardModule', function() {
          return CommonCardModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-card.component */
          './src/lib/common-card/common-card.component.ts'
        );
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );

        var CommonCardModule = function CommonCardModule() {
          _classCallCheck(this, CommonCardModule);
        };

        CommonCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonCardModule
        });
        CommonCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonCardModule_Factory(t) {
            return new (t || CommonCardModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonCardModule, {
              declarations: [_common_card_component__WEBPACK_IMPORTED_MODULE_2__['CommonCardComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
              ],
              exports: [_common_card_component__WEBPACK_IMPORTED_MODULE_2__['CommonCardComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonCardModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
                    ],
                    declarations: [_common_card_component__WEBPACK_IMPORTED_MODULE_2__['CommonCardComponent']],
                    exports: [_common_card_component__WEBPACK_IMPORTED_MODULE_2__['CommonCardComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-modal/common-modal.component.ts':
      /*!********************************************************!*\
    !*** ./src/lib/common-modal/common-modal.component.ts ***!
    \********************************************************/

      /*! exports provided: CommonModalComponent */

      /***/
      function srcLibCommonModalCommonModalComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonModalComponent', function() {
          return CommonModalComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function CommonModalComponent_div_0_div_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'i', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonModalComponent_div_0_div_2_Template_i_click_4_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r10);

                var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r9.closeModal.emit($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r7.headerText);
          }
        }

        function CommonModalComponent_div_0_footer_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'footer', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function CommonModalComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              CommonModalComponent_div_0_div_2_Template,
              5,
              1,
              'div',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              CommonModalComponent_div_0_footer_5_Template,
              2,
              0,
              'footer',
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngStyle', ctx_r6.classProp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r6.showHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r6.showFooter);
          }
        }

        var _c0 = [[['div', 'role', 'content']], [['div', 'role', 'footer']]];
        var _c1 = ['div[role=content]', 'div[role=footer]'];

        var CommonModalComponent = function CommonModalComponent() {
          _classCallCheck(this, CommonModalComponent);

          this.isModalOpen = false;
          this.headerText = 'Header Text';
          this.showHeader = true;
          this.showFooter = true;
          this.classProp = {};
          this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
        };

        CommonModalComponent.ɵfac = function CommonModalComponent_Factory(t) {
          return new (t || CommonModalComponent)();
        };

        CommonModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonModalComponent,
          selectors: [['common-modal']],
          inputs: {
            isModalOpen: 'isModalOpen',
            headerText: 'headerText',
            showHeader: 'showHeader',
            showFooter: 'showFooter',
            classProp: 'classProp'
          },
          outputs: {
            closeModal: 'closeModal'
          },
          ngContentSelectors: _c1,
          decls: 2,
          vars: 3,
          consts: [
            ['class', 'modal-container', 3, 'ngStyle', 4, 'ngIf'],
            [1, 'modal-container', 3, 'ngStyle'],
            ['modal-inner-container', ''],
            ['class', 'modal-header', 4, 'ngIf'],
            [1, 'modal-content'],
            ['class', 'modal-footer', 4, 'ngIf'],
            [1, 'modal-header'],
            [2, 'margin-left', '0.5rem'],
            [1, 'icon-container'],
            [1, 'times-icon', 'fa', 'fa-times', 3, 'click'],
            [1, 'modal-footer']
          ],
          template: function CommonModalComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef'](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                CommonModalComponent_div_0_Template,
                6,
                3,
                'div',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div');
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.isModalOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('is-overlay', ctx.isModalOpen);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgStyle']
          ],
          styles: [
            '.modal-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 40%;\n  box-shadow: 0 8px 8px 8px rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transform: translate(-30%, -40%);\n          transform: translate(-30%, -40%);\n  z-index: 3;\n  box-sizing: border-box;\n  overflow-y: scroll;\n  height: 50%;\n  width: 50%;\n  background-color: white;\n}\n\n.is-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100vh;\n  width: 100vw;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 2;\n}\n\n.modal-inner-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 2.5rem;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 5%;\n}\n\n.times-icon[_ngcontent-%COMP%] {\n  color: red;\n  cursor: pointer;\n}\n\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bolder;\n  color: black;\n  cursor: pointer;\n  margin-right: 0.5rem;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  color: black;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2xpYi9jb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUNDRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvbGliL2NvbW1vbi1tb2RhbC9jb21tb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNDAlO1xuICBib3gtc2hhZG93OiAwIDhweCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTQwJSk7XG4gIHotaW5kZXg6IDM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaXMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcbiAgei1pbmRleDogMjtcbn1cblxuXG4ubW9kYWwtaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUlO1xufVxuXG4udGltZXMtaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4cGFuZC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG59XG4iLCIubW9kYWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNDAlO1xuICBib3gtc2hhZG93OiAwIDhweCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTQwJSk7XG4gIHotaW5kZXg6IDM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaXMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMjtcbn1cblxuLm1vZGFsLWlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1JTtcbn1cblxuLnRpbWVzLWljb24ge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leHBhbmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41cmVtO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonModalComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-modal',
                    template:
                      '\n    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">\n      <div modal-inner-container>\n        <div *ngIf="showHeader" class="modal-header">\n          <div style="margin-left: 0.5rem;">{{ headerText }}</div>\n          <div class="icon-container">\n            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>\n          </div>\n        </div>\n      </div>\n      <div class="modal-content">\n        <ng-content select="div[role=content]"></ng-content>\n      </div>\n      <footer *ngIf="showFooter" class="modal-footer">\n        <ng-content select="div[role=footer]"></ng-content>\n      </footer>\n    </div>\n    <div [class.is-overlay]="isModalOpen"></div>\n  ',
                    styleUrls: ['./common-modal.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              isModalOpen: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              headerText: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showHeader: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showFooter: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              classProp: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              closeModal: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-modal/common-modal.module.ts':
      /*!*****************************************************!*\
    !*** ./src/lib/common-modal/common-modal.module.ts ***!
    \*****************************************************/

      /*! exports provided: CommonModalModule */

      /***/
      function srcLibCommonModalCommonModalModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonModalModule', function() {
          return CommonModalModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-modal.component */
          './src/lib/common-modal/common-modal.component.ts'
        );

        var CommonModalModule = function CommonModalModule() {
          _classCallCheck(this, CommonModalModule);
        };

        CommonModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonModalModule
        });
        CommonModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonModalModule_Factory(t) {
            return new (t || CommonModalModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonModalModule, {
              declarations: [_common_modal_component__WEBPACK_IMPORTED_MODULE_2__['CommonModalComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
              exports: [_common_modal_component__WEBPACK_IMPORTED_MODULE_2__['CommonModalComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonModalModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                    declarations: [_common_modal_component__WEBPACK_IMPORTED_MODULE_2__['CommonModalComponent']],
                    exports: [_common_modal_component__WEBPACK_IMPORTED_MODULE_2__['CommonModalComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-multi-select/common-multi-select.component.ts':
      /*!**********************************************************************!*\
    !*** ./src/lib/common-multi-select/common-multi-select.component.ts ***!
    \**********************************************************************/

      /*! exports provided: CommonMultiSelectComponent */

      /***/
      function srcLibCommonMultiSelectCommonMultiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonMultiSelectComponent', function() {
          return CommonMultiSelectComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var _c0 = ['searchBox'];

        function CommonMultiSelectComponent_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_container_1_Template_button_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r90);

                var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r89.toggleList();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, 'Choose');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'i', 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_container_1_Template_i_click_4_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r90);

                var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r91.toggleList();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }
        }

        function CommonMultiSelectComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_template_2_ng_container_1_Template_div_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r96);

                var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r95.toggleList();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'i', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_template_2_ng_container_1_Template_i_click_3_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r96);

                var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r97.toggleList();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r92.preSelectedOption.length,
              ' items selected '
            );
          }
        }

        function CommonMultiSelectComponent_ng_template_2_ng_template_2_div_0_Template(rf, ctx) {
          if (rf & 1) {
            var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'i', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_template_2_ng_template_2_div_0_Template_i_click_2_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r102);

                var item_r99 = ctx.$implicit;
                var i_r100 = ctx.index;

                var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

                return ctx_r101.addRemoveData(
                  {
                    label: item_r99,
                    value: item_r99
                  },
                  i_r100
                );
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r99 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', item_r99, ' ');
          }
        }

        function CommonMultiSelectComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              0,
              CommonMultiSelectComponent_ng_template_2_ng_template_2_div_0_Template,
              4,
              1,
              'div',
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'i', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_ng_template_2_ng_template_2_Template_i_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r104);

                var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r103.toggleList();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r94.preSelectedOption);
          }
        }

        function CommonMultiSelectComponent_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              CommonMultiSelectComponent_ng_template_2_ng_container_1_Template,
              4,
              1,
              'ng-container',
              0
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              CommonMultiSelectComponent_ng_template_2_ng_template_2_Template,
              2,
              1,
              'ng-template',
              null,
              6,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r87.preSelectedOption.length >= 4)(
              'ngIfElse',
              _r93
            );
          }
        }

        function CommonMultiSelectComponent_div_4_li_8_Template(rf, ctx) {
          if (rf & 1) {
            var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_div_4_li_8_Template_li_click_0_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r110);

                var item_r107 = ctx.$implicit;
                var i_r108 = ctx.index;

                var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r109.addRemoveData(item_r107, i_r108);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'i');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r107 = ctx.$implicit;
            var i_r108 = ctx.index;

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r106.currentIndex.includes(i_r108) ||
                ctx_r106.preSelectedOption.includes(item_r107.label) ||
                ctx_r106.preSelectedOption.includes(item_r107.value)
                ? 'drop-down'
                : 'list'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r106.currentIndex.includes(i_r108) ||
                ctx_r106.preSelectedOption.includes(item_r107.label) ||
                ctx_r106.preSelectedOption.includes(item_r107.value)
                ? 'fa fa-check black'
                : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r107.label);
          }
        }

        function CommonMultiSelectComponent_div_4_Template(rf, ctx) {
          if (rf & 1) {
            var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_div_4_Template_div_click_2_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r112);

                var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r111.onSelectAll(!ctx_r111.selectAll);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'i');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'input', 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'input',
              function CommonMultiSelectComponent_div_4_Template_input_input_4_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r112);

                var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](5);

                var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r113.onSearchFilter(_r105.value);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'i', 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonMultiSelectComponent_div_4_Template_i_click_6_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r112);

                var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r114.clearSelectedItemsOnXclick();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'ul');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              8,
              CommonMultiSelectComponent_div_4_li_8_Template,
              5,
              5,
              'li',
              20
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](ctx_r88.selectAll ? 'fa fa-check black' : '');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r88.listOfValues);
          }
        }

        var CommonMultiSelectComponent =
          /*#__PURE__*/
          (function() {
            function CommonMultiSelectComponent(eRef) {
              _classCallCheck(this, CommonMultiSelectComponent);

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

            _createClass(CommonMultiSelectComponent, [
              {
                key: 'writeValue',
                value: function writeValue(value) {
                  if (value !== undefined || value !== null) {
                    this.preSelectedOption = value;
                  }
                }
              },
              {
                key: 'registerOnChange',
                value: function registerOnChange(fn) {
                  this.propagateChange = fn;
                }
              },
              {
                key: 'registerOnTouched',
                value: function registerOnTouched(fn) {
                  this.onTouched = fn;
                }
              },
              {
                key: 'clickout',
                value: function clickout(event) {
                  if (this.eRef.nativeElement.contains(event.target)) {
                    return;
                  } else {
                    this.isListDisplayed = false;
                  }
                }
              },
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  this.listOfValues = this.options;
                }
              },
              {
                key: 'checkForPrePopulatedValues',
                value: function checkForPrePopulatedValues() {
                  var _this4 = this;

                  var matchedItems = [];

                  if (this.preSelectedOption && this.preSelectedOption.length) {
                    this.preSelectedOption.forEach(function(option) {
                      _this4.options.forEach(function(item) {
                        if (item.label === option) {
                          matchedItems.push({
                            label: option,
                            value: item.value
                          });
                        }
                      });
                    });
                    this.selectedItems = matchedItems;
                  }
                }
              },
              {
                key: 'ngAfterViewChecked',
                value: function ngAfterViewChecked() {
                  this.checkForPrePopulatedValues();

                  if (this.isListDisplayed) {
                    this.searchBox.nativeElement.focus();
                  }
                }
              },
              {
                key: 'toggleList',
                value: function toggleList() {
                  this.isListDisplayed = !this.isListDisplayed;
                }
              },
              {
                key: 'clearSelectedItemsOnXclick',
                value: function clearSelectedItemsOnXclick() {
                  this.isListDisplayed = false;
                  this.selectedItems = [];
                  this.preSelectedOption = [];
                  this.propagateChange(this.preSelectedOption);
                }
              },
              {
                key: 'onSearchFilter',
                value: function onSearchFilter(value) {
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
                }
              },
              {
                key: 'callPropagateMethod',
                value: function callPropagateMethod(selectedItemsArray) {
                  this.selectedItems = selectedItemsArray;
                  var listOfItems = this.selectedItems.map(function(item) {
                    return item.label;
                  });
                  this.preSelectedOption = listOfItems;
                  this.propagateChange(this.preSelectedOption);
                }
              },
              {
                key: 'onSelectAll',
                value: function onSelectAll(event) {
                  var isChecked = event;

                  if (isChecked) {
                    this.selectAll = true;
                    this.callPropagateMethod(this.options);
                  } else {
                    this.selectAll = false;
                    this.callPropagateMethod([]);
                  }
                }
              },
              {
                key: 'addSelectedValues',
                value: function addSelectedValues(data, index) {
                  this.selectedItems.push(data);
                  this.currentIndex.push(index);
                  this.preSelectedOption = this.selectedItems.map(function(item) {
                    return item.label;
                  });
                  this.propagateChange(this.preSelectedOption);
                }
              },
              {
                key: 'removeSelectedValues',
                value: function removeSelectedValues(data, index) {
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
                }
              },
              {
                key: 'addRemoveData',
                value: function addRemoveData(data, index) {
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
                }
              }
            ]);

            return CommonMultiSelectComponent;
          })();

        CommonMultiSelectComponent.ɵfac = function CommonMultiSelectComponent_Factory(t) {
          return new (t || CommonMultiSelectComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            )
          );
        };

        CommonMultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonMultiSelectComponent,
          selectors: [['common-multi-select']],
          viewQuery: function CommonMultiSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c0,
                true,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
              );
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵloadQuery']())
              ) && (ctx.searchBox = _t.first);
            }
          },
          hostBindings: function CommonMultiSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonMultiSelectComponent_click_HostBindingHandler($event) {
                  return ctx.clickout($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          inputs: {
            options: 'options',
            preSelectedOption: 'preSelectedOption'
          },
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                  return CommonMultiSelectComponent;
                }),
                multi: true
              }
            ])
          ],
          decls: 5,
          vars: 3,
          consts: [
            [4, 'ngIf', 'ngIfElse'],
            ['showSelected', ''],
            ['class', 'list-container', 'style', 'display: flex; flex-direction: column', 4, 'ngIf'],
            [3, 'click'],
            [
              1,
              'cursor-pointer',
              'fa',
              'fa-chevron-down',
              2,
              'color',
              'gray',
              'position',
              'relative',
              'right',
              '30px',
              3,
              'click'
            ],
            [1, 'list-of-selected-itens'],
            ['showItems', ''],
            [1, 'cursor-pointer', 2, 'width', '250px', 3, 'click'],
            [
              1,
              'cursor-pointer',
              'fa',
              'fa-chevron-down',
              2,
              'color',
              'gray',
              'position',
              'relative',
              'right',
              '-5px',
              3,
              'click'
            ],
            ['style', 'width: 200px;', 4, 'ngFor', 'ngForOf'],
            [1, 'cursor-pointer', 'fa', 'fa-chevron-down', 2, 'color', 'gray', 'position', 'relative', 3, 'click'],
            [2, 'width', '200px'],
            [
              2,
              'border',
              '1px solid gray',
              'width',
              '70px',
              'height',
              'auto',
              'margin-right',
              '3px',
              'padding',
              '0.1rem 0.1rem'
            ],
            [1, 'fa', 'fa-times', 'cursor-pointer', 2, 'color', 'gray', 'position', 'relative', 3, 'click'],
            [1, 'list-container', 2, 'display', 'flex', 'flex-direction', 'column'],
            [2, 'display', 'flex', 'align-items', 'center', 'justify-content', 'center', 'width', '100%'],
            [1, 'check-box', 2, 'text-align', 'center', 3, 'click'],
            [
              'name',
              'searchBox',
              'type',
              'text',
              2,
              'padding',
              '0.3rem',
              'margin-left',
              '5px',
              'margin-right',
              '10px',
              3,
              'input'
            ],
            ['searchBox', ''],
            [1, 'cursor-pointer', 'fa', 'fa-times', 2, 'color', 'gray', 3, 'click'],
            [
              'style',
              'display: flex; align-items: center; cursor: pointer',
              3,
              'class',
              'click',
              4,
              'ngFor',
              'ngForOf'
            ],
            [2, 'display', 'flex', 'align-items', 'center', 'cursor', 'pointer', 3, 'click'],
            [1, 'check-box', 2, 'text-align', 'center']
          ],
          template: function CommonMultiSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                CommonMultiSelectComponent_ng_container_1_Template,
                5,
                0,
                'ng-container',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CommonMultiSelectComponent_ng_template_2_Template,
                4,
                2,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                CommonMultiSelectComponent_div_4_Template,
                9,
                3,
                'div',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
            }

            if (rf & 2) {
              var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.preSelectedOption.length)(
                'ngIfElse',
                _r86
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.isListDisplayed);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          styles: [
            'button[_ngcontent-%COMP%] {\n  padding: 0.5rem 2rem;\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: gray;\n  border: 0.1rem solid;\n  border-radius: 0.5rem;\n  text-transform: uppercase;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  background-color: transparent;\n  width: 260px;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n.list-of-selected-itens[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5rem 0.5rem;\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: gray;\n  border: 0.1rem solid;\n  border-radius: 0.5rem;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  background-color: transparent;\n  width: 260px;\n  box-sizing: border-box;\n}\n.check-box[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 5px;\n  border: 2px solid #555;\n  margin-right: 10px;\n  margin-bottom: 0.2rem;\n}\n.black[_ngcontent-%COMP%] {\n  color: black;\n}\n.list-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 260px;\n  height: auto;\n  background: white;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  height: 250px;\n  overflow-y: scroll;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n  text-align: left;\n}\n.list-disabled[_ngcontent-%COMP%] {\n  color: gray;\n  padding: 0.5rem;\n  text-align: left;\n}\n.list[_ngcontent-%COMP%]:hover {\n  background-color: #DDDD;\n  cursor: pointer;\n}\n.drop-down[_ngcontent-%COMP%] {\n  background-color: #007ad9;\n  color: white;\n  padding: 0.5rem;\n  text-align: left;\n}\n.drop-down[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.primary[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.primary[_ngcontent-%COMP%]:hover, .primary[_ngcontent-%COMP%]:active {\n  background-color: var(--primary);\n  color: white;\n}\n.clear[_ngcontent-%COMP%] {\n  border: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tbXVsdGktc2VsZWN0L2NvbW1vbi1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi1tdWx0aS1zZWxlY3QvY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURFRTtFQUVFLGFBQUE7QUNESjtBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7RUFBQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRkY7QURLQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNGRjtBREtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7QUNGRjtBREtBO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtBQ0ZGO0FESUU7RUFFRSxnQ0FBQTtFQUNBLFlBQUE7QUNISjtBRE9BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNKRiIsImZpbGUiOiJzcmMvbGliL2NvbW1vbi1tdWx0aS1zZWxlY3QvY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMjYwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuLmxpc3Qtb2Ytc2VsZWN0ZWQtaXRlbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogZ3JheTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMjYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jaGVjay1ib3gge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtcbiAgd2lkdGg6MjVweDtcbiAgaGVpZ2h0OjI1cHg7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBib3JkZXI6MnB4IHNvbGlkICM1NTU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogYmxhY2tcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0REREQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3AtZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdhZDk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcC1kb3duOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5jbGVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIiwiYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAyNjBweDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpmb2N1cywgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5saXN0LW9mLXNlbGVjdGVkLWl0ZW5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDI2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2hlY2stYm94IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0LWRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRERERDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcC1kb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FkOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wLWRvd246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnByaW1hcnk6aG92ZXIsIC5wcmltYXJ5OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbGVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonMultiSelectComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-multi-select',
                    templateUrl: './common-multi-select.component.html',
                    styleUrls: ['./common-multi-select.component.scss'],
                    providers: [
                      {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                          return CommonMultiSelectComponent;
                        }),
                        multi: true
                      }
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
                }
              ];
            },
            {
              searchBox: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: [
                    'searchBox',
                    {
                      read: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
                    }
                  ]
                }
              ],
              options: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              preSelectedOption: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              clickout: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:click', ['$event']]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-multi-select/common-multi-select.module.ts':
      /*!*******************************************************************!*\
    !*** ./src/lib/common-multi-select/common-multi-select.module.ts ***!
    \*******************************************************************/

      /*! exports provided: CommonMultiSelectModule */

      /***/
      function srcLibCommonMultiSelectCommonMultiSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonMultiSelectModule', function() {
          return CommonMultiSelectModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );
        /* harmony import */

        var _common_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./common-multi-select.component */
          './src/lib/common-multi-select/common-multi-select.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonMultiSelectModule = function CommonMultiSelectModule() {
          _classCallCheck(this, CommonMultiSelectModule);
        };

        CommonMultiSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonMultiSelectModule
        });
        CommonMultiSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonMultiSelectModule_Factory(t) {
            return new (t || CommonMultiSelectModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonMultiSelectModule, {
              declarations: [_common_multi_select_component__WEBPACK_IMPORTED_MODULE_3__['CommonMultiSelectComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule']
              ],
              exports: [_common_multi_select_component__WEBPACK_IMPORTED_MODULE_3__['CommonMultiSelectComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonMultiSelectModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_2__['PrimeNgModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_4__['ReactiveFormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule']
                    ],
                    declarations: [
                      _common_multi_select_component__WEBPACK_IMPORTED_MODULE_3__['CommonMultiSelectComponent']
                    ],
                    exports: [_common_multi_select_component__WEBPACK_IMPORTED_MODULE_3__['CommonMultiSelectComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-paginator/common-paginator.component.ts':
      /*!****************************************************************!*\
    !*** ./src/lib/common-paginator/common-paginator.component.ts ***!
    \****************************************************************/

      /*! exports provided: CommonPaginatorComponent */

      /***/
      function srcLibCommonPaginatorCommonPaginatorComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonPaginatorComponent', function() {
          return CommonPaginatorComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../services/paginatorPubSubService/paginatorPubSub.service */
          './src/lib/services/paginatorPubSubService/paginatorPubSub.service.ts'
        );
        /* harmony import */

        var _common_select_common_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../common-select/common-select.component */
          './src/lib/common-select/common-select.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonPaginatorComponent =
          /*#__PURE__*/
          (function() {
            function CommonPaginatorComponent(paginatorService) {
              _classCallCheck(this, CommonPaginatorComponent);

              this.paginatorService = paginatorService;
            }

            _createClass(CommonPaginatorComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  var _this5 = this;

                  this.paginatorService.state.subscribe(function(data) {
                    (_this5.rowsPerPage = data.rowsPerPage),
                      (_this5.tableData = data.tableData),
                      (_this5.data = data.data),
                      (_this5.page = data.page),
                      (_this5.tableDataOriginalState = data.tableDataOriginalState);
                  });
                }
              },
              {
                key: 'getSelectedOption',
                value: function getSelectedOption(data) {
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
              },
              {
                key: 'nextPage',
                value: function nextPage() {
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
              },
              {
                key: 'previousPage',
                value: function previousPage() {
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
                }
              },
              {
                key: 'resetPaginator',
                value: function resetPaginator() {
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
              },
              {
                key: 'calculateendOfPages',
                value: function calculateendOfPages() {}
              },
              {
                key: 'goToLastPage',
                value: function goToLastPage() {
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
                }
              }
            ]);

            return CommonPaginatorComponent;
          })();

        CommonPaginatorComponent.ɵfac = function CommonPaginatorComponent_Factory(t) {
          return new (t || CommonPaginatorComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__[
                'PaginatorPubSubService'
              ]
            )
          );
        };

        CommonPaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonPaginatorComponent,
          selectors: [['common-paginator']],
          inputs: {
            options: 'options'
          },
          decls: 9,
          vars: 9,
          consts: [
            ['name', 'tableRows', 3, 'options', 'ngModel', 'selectedItem', 'ngModelChange'],
            [
              2,
              'display',
              'flex',
              'justify-content',
              'center',
              'align-items',
              'center',
              'width',
              '100%',
              'margin-bottom',
              '1rem',
              'padding',
              '1rem'
            ],
            [2, 'width', '100px', 'color', 'rgba(0,0,0,.26)'],
            [1, 'fa', 'fa-angle-double-left', 2, 'font-size', '1.5rem', 'margin-right', '1rem', 3, 'disabled', 'click'],
            [1, 'fa', 'fa-angle-left', 2, 'font-size', '1.5rem', 'margin-right', '1rem', 3, 'disabled', 'click'],
            [1, 'fa', 'fa-angle-right', 2, 'font-size', '1.5rem', 'margin-right', '1rem', 3, 'disabled', 'click'],
            [1, 'fa', 'fa-angle-double-right', 2, 'font-size', '1.5rem', 3, 'disabled', 'click']
          ],
          template: function CommonPaginatorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'footer');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'common-select', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'selectedItem',
                function CommonPaginatorComponent_Template_common_select_selectedItem_1_listener($event) {
                  return ctx.getSelectedOption($event);
                }
              )('ngModelChange', function CommonPaginatorComponent_Template_common_select_ngModelChange_1_listener(
                $event
              ) {
                return (ctx.rowsPerPage = $event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'button', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonPaginatorComponent_Template_button_click_5_listener($event) {
                  return ctx.resetPaginator();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'button', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonPaginatorComponent_Template_button_click_6_listener($event) {
                  return ctx.previousPage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'button', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonPaginatorComponent_Template_button_click_7_listener($event) {
                  return ctx.nextPage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'button', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonPaginatorComponent_Template_button_click_8_listener($event) {
                  return ctx.goToLastPage();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.options)(
                'ngModel',
                ctx.rowsPerPage
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate3'](
                '',
                ctx.page,
                ' - ',
                ctx.rowsPerPage,
                ' of ',
                ctx.data.length,
                ''
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.page === 1 || ctx.rowsPerPage > ctx.data.length
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.page === 1 || ctx.rowsPerPage > ctx.data.length
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                ctx.rowsPerPage === ctx.data.length || ctx.rowsPerPage > ctx.data.length
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.rowsPerPage > ctx.data.length);
            }
          },
          directives: [
            _common_select_common_select_component__WEBPACK_IMPORTED_MODULE_2__['CommonSelectComponent'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgModel']
          ],
          styles: [
            'button[_ngcontent-%COMP%] {\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\nfooter[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tcGFnaW5hdG9yL2NvbW1vbi1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi1wYWdpbmF0b3IvY29tbW9uLXBhZ2luYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tcGFnaW5hdG9yL2NvbW1vbi1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonPaginatorComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-paginator',
                    templateUrl: './common-paginator.component.html',
                    styleUrls: ['./common-paginator.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__[
                      'PaginatorPubSubService'
                    ]
                }
              ];
            },
            {
              options: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-paginator/common-paginator.module.ts':
      /*!*************************************************************!*\
    !*** ./src/lib/common-paginator/common-paginator.module.ts ***!
    \*************************************************************/

      /*! exports provided: CommonPaginatorModule */

      /***/
      function srcLibCommonPaginatorCommonPaginatorModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonPaginatorModule', function() {
          return CommonPaginatorModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-paginator.component */
          './src/lib/common-paginator/common-paginator.component.ts'
        );
        /* harmony import */

        var _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../common-select/common-select.module */
          './src/lib/common-select/common-select.module.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../services/paginatorPubSubService/paginatorPubSub.module */
          './src/lib/services/paginatorPubSubService/paginatorPubSub.module.ts'
        );

        var CommonPaginatorModule = function CommonPaginatorModule() {
          _classCallCheck(this, CommonPaginatorModule);
        };

        CommonPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonPaginatorModule
        });
        CommonPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonPaginatorModule_Factory(t) {
            return new (t || CommonPaginatorModule)();
          },
          providers: [
            _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__[
              'PaginatorPubServiceModule'
            ]
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
              _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_3__['CommonSelectModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonPaginatorModule, {
              declarations: [_common_paginator_component__WEBPACK_IMPORTED_MODULE_2__['CommonPaginatorComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
                _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_3__['CommonSelectModule']
              ],
              exports: [_common_paginator_component__WEBPACK_IMPORTED_MODULE_2__['CommonPaginatorComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonPaginatorModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_4__['FormsModule'],
                      _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_3__['CommonSelectModule']
                    ],
                    declarations: [
                      _common_paginator_component__WEBPACK_IMPORTED_MODULE_2__['CommonPaginatorComponent']
                    ],
                    providers: [
                      _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__[
                        'PaginatorPubServiceModule'
                      ]
                    ],
                    exports: [_common_paginator_component__WEBPACK_IMPORTED_MODULE_2__['CommonPaginatorComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-button/form-button.component.ts':
      /*!**************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-button/form-button.component.ts ***!
    \**************************************************************************************/

      /*! exports provided: FormButtonComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormButtonFormButtonComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormButtonComponent', function() {
          return FormButtonComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var FormButtonComponent = function FormButtonComponent() {
          _classCallCheck(this, FormButtonComponent);
        };

        FormButtonComponent.ɵfac = function FormButtonComponent_Factory(t) {
          return new (t || FormButtonComponent)();
        };

        FormButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormButtonComponent,
          selectors: [['app-form-button']],
          decls: 3,
          vars: 3,
          consts: [
            [1, 'dynamic-field', 'form-button', 3, 'formGroup'],
            ['type', 'submit', 3, 'disabled']
          ],
          template: function FormButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.config.disabled);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.config.label, ' ');
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-button',
                    template:
                      '\n    <div class="dynamic-field form-button" [formGroup]="group">\n      <button [disabled]="config.disabled" type="submit">\n        {{ config.label }}\n      </button>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-checkbox/form-checkbox.component.ts':
      /*!******************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-checkbox/form-checkbox.component.ts ***!
    \******************************************************************************************/

      /*! exports provided: FormCheckboxComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormCheckboxFormCheckboxComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormCheckboxComponent', function() {
          return FormCheckboxComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormCheckboxComponent_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r73.message, ' ');
          }
        }

        function FormCheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormCheckboxComponent_ng_container_4_ng_container_1_div_1_Template,
              2,
              1,
              'div',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r73 = ctx.$implicit;

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r72.group.get(ctx_r72.config.name).hasError(validation_r73.name)
            );
          }
        }

        function FormCheckboxComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormCheckboxComponent_ng_container_4_ng_container_1_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r71.config.validations);
          }
        }

        var FormCheckboxComponent = function FormCheckboxComponent() {
          _classCallCheck(this, FormCheckboxComponent);
        };

        FormCheckboxComponent.ɵfac = function FormCheckboxComponent_Factory(t) {
          return new (t || FormCheckboxComponent)();
        };

        FormCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormCheckboxComponent,
          selectors: [['app-form-input']],
          decls: 5,
          vars: 7,
          consts: [
            [1, 'dynamic-field', 'form-input', 3, 'formGroup'],
            [3, 'type', 'placeholder', 'formControlName', 'checked'],
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function FormCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormCheckboxComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', ctx.config.inputType)(
                'placeholder',
                ctx.config.placeholder
              )('formControlName', ctx.config.name)('checked', ctx.config.value);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.group.controls[ctx.config.name].touched && ctx.group.controls[ctx.config.name].invalid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormCheckboxComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-input',
                    template:
                      '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n        [checked]="config.value"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-date-picker/form-date-picker.component.ts':
      /*!************************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-date-picker/form-date-picker.component.ts ***!
    \************************************************************************************************/

      /*! exports provided: FormDatePickerComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormDatePickerFormDatePickerComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormDatePickerComponent', function() {
          return FormDatePickerComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormDatePickerComponent_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r68.message, ' ');
          }
        }

        function FormDatePickerComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormDatePickerComponent_ng_container_4_ng_container_1_div_1_Template,
              2,
              1,
              'div',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r68 = ctx.$implicit;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r67.group.get(ctx_r67.config.name).hasError(validation_r68.name)
            );
          }
        }

        function FormDatePickerComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormDatePickerComponent_ng_container_4_ng_container_1_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r66.config.validations);
          }
        }

        var FormDatePickerComponent = function FormDatePickerComponent() {
          _classCallCheck(this, FormDatePickerComponent);
        };

        FormDatePickerComponent.ɵfac = function FormDatePickerComponent_Factory(t) {
          return new (t || FormDatePickerComponent)();
        };

        FormDatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormDatePickerComponent,
          selectors: [['app-form-date-picker']],
          decls: 5,
          vars: 6,
          consts: [
            [1, 'demo-full-width', 'margin-top', 3, 'formGroup'],
            [3, 'type', 'placeholder', 'formControlName'],
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function FormDatePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-form-field', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormDatePickerComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', ctx.config.inputType)(
                'placeholder',
                ctx.config.placeholder
              )('formControlName', ctx.config.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.group.controls[ctx.config.name].touched && ctx.group.controls[ctx.config.name].invalid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormDatePickerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-date-picker',
                    template:
                      '\n    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </mat-form-field>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-input/form-input.component.ts':
      /*!************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-input/form-input.component.ts ***!
    \************************************************************************************/

      /*! exports provided: FormInputComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormInputFormInputComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormInputComponent', function() {
          return FormInputComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormInputComponent_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r58.message, ' ');
          }
        }

        function FormInputComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormInputComponent_ng_container_4_ng_container_1_div_1_Template,
              2,
              1,
              'div',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r58 = ctx.$implicit;

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r57.group.get(ctx_r57.config.name).hasError(validation_r58.name)
            );
          }
        }

        function FormInputComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormInputComponent_ng_container_4_ng_container_1_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r56.config.validations);
          }
        }

        var FormInputComponent = function FormInputComponent() {
          _classCallCheck(this, FormInputComponent);
        };

        FormInputComponent.ɵfac = function FormInputComponent_Factory(t) {
          return new (t || FormInputComponent)();
        };

        FormInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormInputComponent,
          selectors: [['app-form-input']],
          decls: 5,
          vars: 6,
          consts: [
            [1, 'dynamic-field', 'form-input', 3, 'formGroup'],
            ['pInputText', '', 3, 'type', 'placeholder', 'formControlName'],
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function FormInputComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormInputComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', ctx.config.inputType)(
                'placeholder',
                ctx.config.placeholder
              )('formControlName', ctx.config.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.group.controls[ctx.config.name].touched && ctx.group.controls[ctx.config.name].invalid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormInputComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-input',
                    template:
                      '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        pInputText\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-multi-select/form-multi-select.component.ts':
      /*!**************************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-multi-select/form-multi-select.component.ts ***!
    \**************************************************************************************************/

      /*! exports provided: FormMultiSelectComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormMultiSelectFormMultiSelectComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormMultiSelectComponent', function() {
          return FormMultiSelectComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var primeng_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/multiselect */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormMultiSelectComponent_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r82.message, ' ');
          }
        }

        function FormMultiSelectComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormMultiSelectComponent_ng_container_4_ng_container_1_div_1_Template,
              2,
              1,
              'div',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r82 = ctx.$implicit;

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r81.group.get(ctx_r81.config.name).hasError(validation_r82.name)
            );
          }
        }

        function FormMultiSelectComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormMultiSelectComponent_ng_container_4_ng_container_1_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r80.config.validations);
          }
        }

        var FormMultiSelectComponent = function FormMultiSelectComponent() {
          _classCallCheck(this, FormMultiSelectComponent);
        };

        FormMultiSelectComponent.ɵfac = function FormMultiSelectComponent_Factory(t) {
          return new (t || FormMultiSelectComponent)();
        };

        FormMultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormMultiSelectComponent,
          selectors: [['app-form-multi-select']],
          decls: 5,
          vars: 5,
          consts: [
            [3, 'formGroup'],
            [3, 'formControlName', 'options'],
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function FormMultiSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'p-multiSelect', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormMultiSelectComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.config.name)(
                'options',
                ctx.config.options
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.group.controls[ctx.config.name].touched && ctx.group.controls[ctx.config.name].invalid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_2__['MultiSelect'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormMultiSelectComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-multi-select',
                    template:
                      '\n    <div [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-multiSelect\n        [formControlName]="config.name"\n        [options]="config.options"\n      ></p-multiSelect>\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-radio/form-radio.component.ts':
      /*!************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-radio/form-radio.component.ts ***!
    \************************************************************************************/

      /*! exports provided: FormRadioComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormRadioFormRadioComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormRadioComponent', function() {
          return FormRadioComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormRadioComponent_ng_container_4_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r77.message, ' ');
          }
        }

        function FormRadioComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormRadioComponent_ng_container_4_div_1_Template,
              2,
              1,
              'div',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r77 = ctx.$implicit;

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r76.group.get(ctx_r76.config.name).hasError(validation_r77.name)
            );
          }
        }

        var FormRadioComponent = function FormRadioComponent() {
          _classCallCheck(this, FormRadioComponent);
        };

        FormRadioComponent.ɵfac = function FormRadioComponent_Factory(t) {
          return new (t || FormRadioComponent)();
        };

        FormRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormRadioComponent,
          selectors: [['app-form-input']],
          decls: 5,
          vars: 6,
          consts: [
            [1, 'dynamic-field', 'form-input', 3, 'formGroup'],
            [3, 'type', 'placeholder', 'formControlName'],
            [4, 'ngFor', 'ngForOf'],
            [4, 'ngIf']
          ],
          template: function FormRadioComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormRadioComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('type', ctx.config.inputType)(
                'placeholder',
                ctx.config.placeholder
              )('formControlName', ctx.config.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.config.validations);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormRadioComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-input',
                    template:
                      '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngFor="let validation of config.validations">\n      <div *ngIf="group.get(config.name).hasError(validation.name)">\n        {{ validation.message }}\n      </div>\n    </ng-container>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-select/form-select.component.ts':
      /*!**************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-select/form-select.component.ts ***!
    \**************************************************************************************/

      /*! exports provided: FormSelectComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormSelectFormSelectComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormSelectComponent', function() {
          return FormSelectComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/dropdown */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function FormSelectComponent_ng_container_4_ng_container_1_div_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var validation_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', validation_r63.message, ' ');
          }
        }

        function FormSelectComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormSelectComponent_ng_container_4_ng_container_1_div_1_Template,
              2,
              1,
              'div',
              2
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var validation_r63 = ctx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r62.group.get(ctx_r62.config.name).hasError(validation_r63.name)
            );
          }
        }

        function FormSelectComponent_ng_container_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              FormSelectComponent_ng_container_4_ng_container_1_Template,
              2,
              1,
              'ng-container',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r61.config.validations);
          }
        }

        var FormSelectComponent = function FormSelectComponent() {
          _classCallCheck(this, FormSelectComponent);
        };

        FormSelectComponent.ɵfac = function FormSelectComponent_Factory(t) {
          return new (t || FormSelectComponent)();
        };

        FormSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormSelectComponent,
          selectors: [['app-form-select']],
          decls: 5,
          vars: 5,
          consts: [
            [1, 'dynamic-field', 'form-select', 3, 'formGroup'],
            [3, 'formControlName', 'options'],
            [4, 'ngIf'],
            [4, 'ngFor', 'ngForOf']
          ],
          template: function FormSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'p-dropdown', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                FormSelectComponent_ng_container_4_Template,
                2,
                1,
                'ng-container',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.config.name)(
                'options',
                ctx.config.options
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.group.controls[ctx.config.name].touched && ctx.group.controls[ctx.config.name].invalid
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__['Dropdown'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormSelectComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-select',
                    template:
                      '\n    <div class="dynamic-field form-select" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-dropdown [formControlName]="config.name" [options]="config.options"></p-dropdown>\n      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Components/form-slider/form-slider.component.ts':
      /*!**************************************************************************************!*\
    !*** ./src/lib/common-reactive-form/Components/form-slider/form-slider.component.ts ***!
    \**************************************************************************************/

      /*! exports provided: FormSliderComponent */

      /***/
      function srcLibCommonReactiveFormComponentsFormSliderFormSliderComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'FormSliderComponent', function() {
          return FormSliderComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var primeng_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/slider */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-slider.js'
        );

        var _c0 = function _c0() {
          return {
            width: '300px'
          };
        };

        var FormSliderComponent = function FormSliderComponent() {
          _classCallCheck(this, FormSliderComponent);
        };

        FormSliderComponent.ɵfac = function FormSliderComponent_Factory(t) {
          return new (t || FormSliderComponent)();
        };

        FormSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: FormSliderComponent,
          selectors: [['app-form-slider']],
          decls: 4,
          vars: 6,
          consts: [
            [2, 'display', 'flex', 'align-items', 'center', 3, 'formGroup'],
            [3, 'formControlName']
          ],
          template: function FormSliderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'p-slider', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.group);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.config.label);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleMap'](
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](5, _c0),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.config.name);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            primeng_slider__WEBPACK_IMPORTED_MODULE_2__['Slider'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FormSliderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-form-slider',
                    template:
                      '\n    <div style="display: \'flex\'; align-items: \'center\';" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-slider [style]="{ width: \'300px\' }" [formControlName]="config.name"></p-slider>\n    </div>\n  '
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/Models /form-config.ts':
      /*!*************************************************************!*\
    !*** ./src/lib/common-reactive-form/Models /form-config.ts ***!
    \*************************************************************/

      /*! exports provided: formConfig */

      /***/
      function srcLibCommonReactiveFormModelsFormConfigTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'formConfig', function() {
          return formConfig;
        });
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var formConfig = [
          {
            type: 'input',
            label: 'Full Name',
            name: 'name',
            inputType: 'text',
            placeholder: 'Enter your name',
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'Name is required.'
              }
            ]
          },
          {
            type: 'input',
            label: 'Email Address',
            inputType: 'email',
            name: 'email',
            value: 'bob123@gmail.com',
            placeholder: 'Enter your email',
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'Email Required.'
              },
              {
                name: 'pattern',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].pattern(
                  '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
                ),
                message: 'Invalid email.'
              }
            ]
          },
          {
            type: 'select',
            label: 'Favourite Food',
            name: 'food',
            options: [
              {
                label: 'French',
                value: 'French'
              },
              {
                label: 'Asian',
                value: 'Asian'
              },
              {
                label: 'Italian',
                value: 'Italian'
              }
            ],
            placeholder: 'Select an option',
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'Food is required.'
              }
            ]
          },
          {
            type: 'input',
            label: 'Password',
            inputType: 'password',
            placeholder: 'Enter Password',
            name: 'password',
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'Password Required.'
              }
            ]
          },
          {
            type: 'multiSelect',
            label: 'Select Cities',
            name: 'cities',
            value: ['PRS'],
            options: [
              {
                label: 'New York',
                value: 'NY'
              },
              {
                label: 'Rome',
                value: 'RM'
              },
              {
                label: 'London',
                value: 'LDN'
              },
              {
                label: 'Istanbul',
                value: 'IST'
              },
              {
                label: 'Paris',
                value: 'PRS'
              }
            ],
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'City is required.'
              }
            ]
          },
          {
            type: 'date',
            label: 'DOB',
            name: 'dob',
            inputType: 'date',
            validations: [
              {
                name: 'required',
                validator: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['Validators'].required,
                message: 'Date Required.'
              }
            ]
          },
          {
            type: 'checkbox',
            label: 'Accept Terms',
            name: 'term',
            inputType: 'checkbox',
            value: true
          },
          {
            type: 'slider',
            name: 'range',
            label: 'Choose Range',
            value: 10
          },
          {
            label: 'Submit',
            name: 'submit',
            type: 'button',
            disabled: true
          }
        ];
        /***/
      },

    /***/
    './src/lib/common-reactive-form/common-reactive-form.module.ts':
      /*!*********************************************************************!*\
    !*** ./src/lib/common-reactive-form/common-reactive-form.module.ts ***!
    \*********************************************************************/

      /*! exports provided: DynamicFormModule */

      /***/
      function srcLibCommonReactiveFormCommonReactiveFormModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DynamicFormModule', function() {
          return DynamicFormModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser/animations */
          './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./dynamic-form/dynamic-form.component */
          './src/lib/common-reactive-form/dynamic-form/dynamic-form.component.ts'
        );
        /* harmony import */

        var _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./dynamic-field.directive */
          './src/lib/common-reactive-form/dynamic-field.directive.ts'
        );
        /* harmony import */

        var _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./Components/form-button/form-button.component */
          './src/lib/common-reactive-form/Components/form-button/form-button.component.ts'
        );
        /* harmony import */

        var _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./Components/form-input/form-input.component */
          './src/lib/common-reactive-form/Components/form-input/form-input.component.ts'
        );
        /* harmony import */

        var _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./Components/form-select/form-select.component */
          './src/lib/common-reactive-form/Components/form-select/form-select.component.ts'
        );
        /* harmony import */

        var _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./Components/form-date-picker/form-date-picker.component */
          './src/lib/common-reactive-form/Components/form-date-picker/form-date-picker.component.ts'
        );
        /* harmony import */

        var _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./Components/form-checkbox/form-checkbox.component */
          './src/lib/common-reactive-form/Components/form-checkbox/form-checkbox.component.ts'
        );
        /* harmony import */

        var _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./Components/form-radio/form-radio.component */
          './src/lib/common-reactive-form/Components/form-radio/form-radio.component.ts'
        );
        /* harmony import */

        var _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./Components/form-slider/form-slider.component */
          './src/lib/common-reactive-form/Components/form-slider/form-slider.component.ts'
        );
        /* harmony import */

        var _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./Components/form-multi-select/form-multi-select.component */
          './src/lib/common-reactive-form/Components/form-multi-select/form-multi-select.component.ts'
        );
        /* harmony import */

        var primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! primeng/multiselect */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-multiselect.js'
        );
        /* harmony import */

        var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! primeng/calendar */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js'
        );
        /* harmony import */

        var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! primeng/dropdown */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js'
        );
        /* harmony import */

        var primeng_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! primeng/slider */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-slider.js'
        ); // PrimeNG Modules

        var DynamicFormModule = function DynamicFormModule() {
          _classCallCheck(this, DynamicFormModule);
        };

        DynamicFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: DynamicFormModule
        });
        DynamicFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function DynamicFormModule_Factory(t) {
            return new (t || DynamicFormModule)();
          },
          imports: [
            [
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__['BrowserAnimationsModule'],
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
              primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__['MultiSelectModule'],
              primeng_calendar__WEBPACK_IMPORTED_MODULE_15__['CalendarModule'],
              primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__['DropdownModule'],
              primeng_slider__WEBPACK_IMPORTED_MODULE_17__['SliderModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](DynamicFormModule, {
              declarations: [
                _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__['DynamicFieldDirective'],
                _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__['DynamicFormComponent'],
                _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_6__['FormButtonComponent'],
                _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__['FormInputComponent'],
                _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__['FormSelectComponent'],
                _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_9__[
                  'FormDatePickerComponent'
                ],
                _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_10__[
                  'FormCheckboxComponent'
                ],
                _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_11__['FormRadioComponent'],
                _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_13__[
                  'FormMultiSelectComponent'
                ],
                _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_12__['FormSliderComponent']
              ],
              imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__['BrowserAnimationsModule'],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__['MultiSelectModule'],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_15__['CalendarModule'],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__['DropdownModule'],
                primeng_slider__WEBPACK_IMPORTED_MODULE_17__['SliderModule']
              ],
              exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__['DynamicFormComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DynamicFormModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__['BrowserAnimationsModule'],
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                      primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__['MultiSelectModule'],
                      primeng_calendar__WEBPACK_IMPORTED_MODULE_15__['CalendarModule'],
                      primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__['DropdownModule'],
                      primeng_slider__WEBPACK_IMPORTED_MODULE_17__['SliderModule']
                    ],
                    declarations: [
                      _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__['DynamicFieldDirective'],
                      _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__['DynamicFormComponent'],
                      _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_6__['FormButtonComponent'],
                      _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__['FormInputComponent'],
                      _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__['FormSelectComponent'],
                      _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_9__[
                        'FormDatePickerComponent'
                      ],
                      _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_10__[
                        'FormCheckboxComponent'
                      ],
                      _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_11__['FormRadioComponent'],
                      _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_13__[
                        'FormMultiSelectComponent'
                      ],
                      _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_12__['FormSliderComponent']
                    ],
                    exports: [
                      _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__['DynamicFormComponent']
                    ],
                    entryComponents: [
                      _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_6__['FormButtonComponent'],
                      _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_7__['FormInputComponent'],
                      _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_8__['FormSelectComponent'],
                      _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_9__[
                        'FormDatePickerComponent'
                      ],
                      _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_10__[
                        'FormCheckboxComponent'
                      ],
                      _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_11__['FormRadioComponent'],
                      _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_13__[
                        'FormMultiSelectComponent'
                      ],
                      _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_12__['FormSliderComponent']
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/dynamic-field.directive.ts':
      /*!*****************************************************************!*\
    !*** ./src/lib/common-reactive-form/dynamic-field.directive.ts ***!
    \*****************************************************************/

      /*! exports provided: DynamicFieldDirective */

      /***/
      function srcLibCommonReactiveFormDynamicFieldDirectiveTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DynamicFieldDirective', function() {
          return DynamicFieldDirective;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Components/form-button/form-button.component */
          './src/lib/common-reactive-form/Components/form-button/form-button.component.ts'
        );
        /* harmony import */

        var _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Components/form-input/form-input.component */
          './src/lib/common-reactive-form/Components/form-input/form-input.component.ts'
        );
        /* harmony import */

        var _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./Components/form-select/form-select.component */
          './src/lib/common-reactive-form/Components/form-select/form-select.component.ts'
        );
        /* harmony import */

        var _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./Components/form-date-picker/form-date-picker.component */
          './src/lib/common-reactive-form/Components/form-date-picker/form-date-picker.component.ts'
        );
        /* harmony import */

        var _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Components/form-checkbox/form-checkbox.component */
          './src/lib/common-reactive-form/Components/form-checkbox/form-checkbox.component.ts'
        );
        /* harmony import */

        var _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./Components/form-radio/form-radio.component */
          './src/lib/common-reactive-form/Components/form-radio/form-radio.component.ts'
        );
        /* harmony import */

        var _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./Components/form-multi-select/form-multi-select.component */
          './src/lib/common-reactive-form/Components/form-multi-select/form-multi-select.component.ts'
        );
        /* harmony import */

        var _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./Components/form-slider/form-slider.component */
          './src/lib/common-reactive-form/Components/form-slider/form-slider.component.ts'
        );

        var components = {
          button: _Components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_1__['FormButtonComponent'],
          input: _Components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_2__['FormInputComponent'],
          select: _Components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_3__['FormSelectComponent'],
          date:
            _Components_form_date_picker_form_date_picker_component__WEBPACK_IMPORTED_MODULE_4__[
              'FormDatePickerComponent'
            ],
          radiobutton: _Components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_6__['FormRadioComponent'],
          checkbox:
            _Components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_5__['FormCheckboxComponent'],
          multiSelect:
            _Components_form_multi_select_form_multi_select_component__WEBPACK_IMPORTED_MODULE_7__[
              'FormMultiSelectComponent'
            ],
          slider: _Components_form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_8__['FormSliderComponent']
        };

        var DynamicFieldDirective =
          /*#__PURE__*/
          (function() {
            function DynamicFieldDirective(resolver, container) {
              _classCallCheck(this, DynamicFieldDirective);

              this.resolver = resolver;
              this.container = container;
            }

            _createClass(DynamicFieldDirective, [
              {
                key: 'ngOnChanges',
                value: function ngOnChanges() {
                  if (this.component) {
                    this.component.instance.config = this.config;
                    this.component.instance.group = this.group;
                  }
                }
              },
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  if (!components[this.config.type]) {
                    var supportedTypes = Object.keys(components).join(', ');
                    throw new Error(
                      'Trying to use an unsupported type ('
                        .concat(this.config.type, ').\n        Supported types: ')
                        .concat(supportedTypes)
                    );
                  }

                  var component = this.resolver.resolveComponentFactory(components[this.config.type]);
                  this.component = this.container.createComponent(component);
                  this.component.instance.config = this.config;
                  this.component.instance.group = this.group;
                }
              }
            ]);

            return DynamicFieldDirective;
          })();

        DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) {
          return new (t || DynamicFieldDirective)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ComponentFactoryResolver']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef']
            )
          );
        };

        DynamicFieldDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineDirective']({
          type: DynamicFieldDirective,
          selectors: [['', 'appDynamicField', '']],
          inputs: {
            config: 'config',
            group: 'group'
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵNgOnChangesFeature']()]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DynamicFieldDirective,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Directive'],
                args: [
                  {
                    selector: '[appDynamicField]'
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ComponentFactoryResolver']
                },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef']
                }
              ];
            },
            {
              config: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              group: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-reactive-form/dynamic-form/dynamic-form.component.ts':
      /*!*****************************************************************************!*\
    !*** ./src/lib/common-reactive-form/dynamic-form/dynamic-form.component.ts ***!
    \*****************************************************************************/

      /*! exports provided: DynamicFormComponent */

      /***/
      function srcLibCommonReactiveFormDynamicFormDynamicFormComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DynamicFormComponent', function() {
          return DynamicFormComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../dynamic-field.directive */
          './src/lib/common-reactive-form/dynamic-field.directive.ts'
        );

        function DynamicFormComponent_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainer'](0, 2);
          }

          if (rf & 2) {
            var field_r1 = ctx.$implicit;

            var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('config', field_r1)('group', ctx_r0.form);
          }
        }

        var DynamicFormComponent =
          /*#__PURE__*/
          (function() {
            function DynamicFormComponent(fb) {
              _classCallCheck(this, DynamicFormComponent);

              this.fb = fb;
              this.config = [];
              this.formSubmittedValues = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            }

            _createClass(DynamicFormComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  this.form = this.createGroup();
                }
              },
              {
                key: 'createGroup',
                value: function createGroup() {
                  var _this6 = this;

                  var group = this.fb.group({});
                  this.config.forEach(function(field) {
                    if (field.type === 'button') {
                      return;
                    }

                    var control = _this6.fb.control(field.value, _this6.bindValidations(field.validations || []));

                    group.addControl(field.name, control);
                  });
                  return group;
                }
              },
              {
                key: 'bindValidations',
                value: function bindValidations(validations) {
                  if (validations.length > 0) {
                    var validList = [];
                    validations.forEach(function(valid) {
                      validList.push(valid.validator);
                    });
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__['Validators'].compose(validList);
                  }

                  return null;
                }
              },
              {
                key: 'handleSubmit',
                value: function handleSubmit(event) {
                  event.preventDefault();
                  event.stopPropagation();

                  if (this.form.valid) {
                    this.formSubmittedValues.emit(this.value);
                  } else {
                    this.validateAllFormFields(this.form);
                  }
                }
              },
              {
                key: 'setDisabled',
                value: function setDisabled(name, disable) {
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
                }
              },
              {
                key: 'validateAllFormFields',
                value: function validateAllFormFields(formGroup) {
                  Object.keys(formGroup.controls).forEach(function(field) {
                    var control = formGroup.get(field);
                    control.markAsTouched({
                      onlySelf: true
                    });
                  });
                }
              },
              {
                key: 'controls',
                get: function get() {
                  return this.config.filter(function(_ref) {
                    var type = _ref.type;
                    return type !== 'button';
                  });
                }
              },
              {
                key: 'changes',
                get: function get() {
                  return this.form.valueChanges;
                }
              },
              {
                key: 'valid',
                get: function get() {
                  return this.form.valid;
                }
              },
              {
                key: 'value',
                get: function get() {
                  return this.form.value;
                }
              }
            ]);

            return DynamicFormComponent;
          })();

        DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) {
          return new (t || DynamicFormComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
            )
          );
        };

        DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: DynamicFormComponent,
          selectors: [['app-dynamic-form']],
          inputs: {
            config: 'config'
          },
          outputs: {
            formSubmittedValues: 'formSubmittedValues'
          },
          exportAs: ['dynamicForm'],
          decls: 2,
          vars: 2,
          consts: [
            [1, 'dynamic-form', 3, 'formGroup', 'ngSubmit'],
            ['appDynamicField', '', 3, 'config', 'group', 4, 'ngFor', 'ngForOf'],
            ['appDynamicField', '', 3, 'config', 'group']
          ],
          template: function DynamicFormComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'form', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngSubmit',
                function DynamicFormComponent_Template_form_ngSubmit_0_listener($event) {
                  return ctx.handleSubmit($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                DynamicFormComponent_ng_container_1_Template,
                1,
                2,
                'ng-container',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.config);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['ɵangular_packages_forms_forms_y'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__['DynamicFieldDirective']
          ],
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            DynamicFormComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    exportAs: 'dynamicForm',
                    selector: 'app-dynamic-form',
                    template:
                      '\n    <form\n      class="dynamic-form"\n      [formGroup]="form"\n      (ngSubmit)="handleSubmit($event)"\n    >\n      <ng-container\n        *ngFor="let field of config"\n        appDynamicField\n        [config]="field"\n        [group]="form"\n      >\n      </ng-container>\n    </form>\n  '
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                }
              ];
            },
            {
              config: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              formSubmittedValues: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-select/common-select.component.ts':
      /*!**********************************************************!*\
    !*** ./src/lib/common-select/common-select.component.ts ***!
    \**********************************************************/

      /*! exports provided: CommonSelectComponent */

      /***/
      function srcLibCommonSelectCommonSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSelectComponent', function() {
          return CommonSelectComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function CommonSelectComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r129.selectedOption);
          }
        }

        function CommonSelectComponent_ng_template_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Choose');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function CommonSelectComponent_ul_7_li_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonSelectComponent_ul_7_li_1_Template_li_click_0_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r136);

                var option_r134 = ctx.$implicit;

                var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r135.setOption(option_r134);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var option_r134 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', option_r134, ' ');
          }
        }

        function CommonSelectComponent_ul_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'ul', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              CommonSelectComponent_ul_7_li_1_Template,
              2,
              1,
              'li',
              8
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r132.options);
          }
        }

        var CommonSelectComponent =
          /*#__PURE__*/
          (function() {
            function CommonSelectComponent() {
              _classCallCheck(this, CommonSelectComponent);

              this.selectedOption = '';
              this.selectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.isListDisplayed = false;
              this.disabled = false;

              this.onTouched = function() {};

              this.propagateChange = function(_) {};
            }

            _createClass(CommonSelectComponent, [
              {
                key: 'writeValue',
                value: function writeValue(value) {
                  if (value !== undefined) {
                    this.selectedOption = value;
                  }
                }
              },
              {
                key: 'registerOnChange',
                value: function registerOnChange(fn) {
                  this.propagateChange = fn;
                }
              },
              {
                key: 'registerOnTouched',
                value: function registerOnTouched(fn) {
                  this.onTouched = fn;
                }
              },
              {
                key: 'setDisabledState',
                value: function setDisabledState(isDisabled) {
                  this.disabled = isDisabled;
                }
              },
              {
                key: 'setOption',
                value: function setOption(option) {
                  this.selectedOption = option;
                  this.selectedItem.emit(option);
                  this.isListDisplayed = !this.isListDisplayed;
                  this.propagateChange(this.selectedOption);
                }
              },
              {
                key: 'toggleList',
                value: function toggleList() {
                  this.isListDisplayed = !this.isListDisplayed;
                }
              }
            ]);

            return CommonSelectComponent;
          })();

        CommonSelectComponent.ɵfac = function CommonSelectComponent_Factory(t) {
          return new (t || CommonSelectComponent)();
        };

        CommonSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonSelectComponent,
          selectors: [['common-select']],
          inputs: {
            options: 'options',
            selectedOption: 'selectedOption'
          },
          outputs: {
            selectedItem: 'selectedItem'
          },
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                  return CommonSelectComponent;
                }),
                multi: true
              }
            ])
          ],
          decls: 8,
          vars: 3,
          consts: [
            [1, 'select-container'],
            [1, 'dropdown', 3, 'click'],
            [4, 'ngIf', 'ngIfElse'],
            ['showDefault', ''],
            [1, 'cursor-pointer', 'fa', 'fa-chevron-down', 2, 'color', 'gray', 'z-index', '99'],
            [2, 'border', '1px solid rgb(224, 210, 210)', 'width', '200px', 'border-width', 'thin'],
            ['class', 'list-container', 4, 'ngIf'],
            [1, 'list-container'],
            ['class', 'list', 3, 'click', 4, 'ngFor', 'ngForOf'],
            [1, 'list', 3, 'click']
          ],
          template: function CommonSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonSelectComponent_Template_div_click_1_listener($event) {
                  return ctx.toggleList();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CommonSelectComponent_div_2_Template,
                2,
                1,
                'div',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                CommonSelectComponent_ng_template_3_Template,
                2,
                0,
                'ng-template',
                null,
                3,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'i', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                CommonSelectComponent_ul_7_Template,
                2,
                1,
                'ul',
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.selectedOption)('ngIfElse', _r130);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.isListDisplayed);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          styles: [
            '.select-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 200px;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 2rem;\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: gray;\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  background-color: transparent;\n  width: 200px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.dropdown[_ngcontent-%COMP%]:focus, .dropdown[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: auto;\n  background: white;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  overflow-y: scroll;\n  height: 200px;\n  width: 200px;\n  z-index: 99;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n  text-align: left;\n  width: 200px;\n}\n\n.list-disabled[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: left;\n}\n\n.list[_ngcontent-%COMP%]:hover {\n  background-color: #dddd;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tc2VsZWN0L2NvbW1vbi1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi1zZWxlY3QvY29tbW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFFRSxhQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvbGliL2NvbW1vbi1zZWxlY3QvY29tbW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBncmF5O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDIwMHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmxpc3QtZGlzYWJsZWQge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLnNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMjAwcHg7XG59XG4uZHJvcGRvd246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd246Zm9jdXMsIC5kcm9wZG93bjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5saXN0LWRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSelectComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-select',
                    templateUrl: './common-select.component.html',
                    styleUrls: ['./common-select.component.scss'],
                    providers: [
                      {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                          return CommonSelectComponent;
                        }),
                        multi: true
                      }
                    ]
                  }
                ]
              }
            ],
            null,
            {
              options: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectedOption: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectedItem: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-select/common-select.module.ts':
      /*!*******************************************************!*\
    !*** ./src/lib/common-select/common-select.module.ts ***!
    \*******************************************************/

      /*! exports provided: CommonSelectModule */

      /***/
      function srcLibCommonSelectCommonSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSelectModule', function() {
          return CommonSelectModule;
        });
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _common_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-select.component */
          './src/lib/common-select/common-select.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonSelectModule = function CommonSelectModule() {
          _classCallCheck(this, CommonSelectModule);
        };

        CommonSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: CommonSelectModule
        });
        CommonSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function CommonSelectModule_Factory(t) {
            return new (t || CommonSelectModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](CommonSelectModule, {
              declarations: [_common_select_component__WEBPACK_IMPORTED_MODULE_2__['CommonSelectComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule']
              ],
              exports: [_common_select_component__WEBPACK_IMPORTED_MODULE_2__['CommonSelectComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            CommonSelectModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule']
                    ],
                    declarations: [_common_select_component__WEBPACK_IMPORTED_MODULE_2__['CommonSelectComponent']],
                    exports: [_common_select_component__WEBPACK_IMPORTED_MODULE_2__['CommonSelectComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-side-bar/common-side-bar.module.ts':
      /*!***********************************************************!*\
    !*** ./src/lib/common-side-bar/common-side-bar.module.ts ***!
    \***********************************************************/

      /*! exports provided: CommonSideBarModule */

      /***/
      function srcLibCommonSideBarCommonSideBarModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSideBarModule', function() {
          return CommonSideBarModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_sideBar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-sideBar.component */
          './src/lib/common-side-bar/common-sideBar.component.ts'
        );

        var CommonSideBarModule = function CommonSideBarModule() {
          _classCallCheck(this, CommonSideBarModule);
        };

        CommonSideBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonSideBarModule
        });
        CommonSideBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonSideBarModule_Factory(t) {
            return new (t || CommonSideBarModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonSideBarModule, {
              declarations: [_common_sideBar_component__WEBPACK_IMPORTED_MODULE_2__['CommonSideBarComponent']],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
              exports: [_common_sideBar_component__WEBPACK_IMPORTED_MODULE_2__['CommonSideBarComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSideBarModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                    declarations: [_common_sideBar_component__WEBPACK_IMPORTED_MODULE_2__['CommonSideBarComponent']],
                    exports: [_common_sideBar_component__WEBPACK_IMPORTED_MODULE_2__['CommonSideBarComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-side-bar/common-sideBar.component.ts':
      /*!*************************************************************!*\
    !*** ./src/lib/common-side-bar/common-sideBar.component.ts ***!
    \*************************************************************/

      /*! exports provided: CommonSideBarComponent */

      /***/
      function srcLibCommonSideBarCommonSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSideBarComponent', function() {
          return CommonSideBarComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/animations */
          './node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        var _c0 = function _c0(a0, a1) {
          return {
            right: a0,
            left: a1
          };
        };

        function CommonSideBarComponent_div_0_Template(rf, ctx) {
          if (rf & 1) {
            var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonSideBarComponent_div_0_Template_div_click_2_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r166);

                var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r165.toggleSideBar();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('@slideInOut', undefined)(
              'ngStyle',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](
                2,
                _c0,
                ctx_r164.position === 'right' ? 0 : '',
                ctx_r164.position === 'left' ? 0 : ''
              )
            );
          }
        }

        var _c1 = ['*'];

        var CommonSideBarComponent =
          /*#__PURE__*/
          (function() {
            function CommonSideBarComponent() {
              _classCallCheck(this, CommonSideBarComponent);

              this.position = 'left';
            }

            _createClass(CommonSideBarComponent, [
              {
                key: 'toggleSideBar',
                value: function toggleSideBar() {
                  this.isSideBarOpen = !this.isSideBarOpen;
                }
              }
            ]);

            return CommonSideBarComponent;
          })();

        CommonSideBarComponent.ɵfac = function CommonSideBarComponent_Factory(t) {
          return new (t || CommonSideBarComponent)();
        };

        CommonSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonSideBarComponent,
          selectors: [['common-side-bar']],
          inputs: {
            isSideBarOpen: 'isSideBarOpen',
            position: 'position'
          },
          ngContentSelectors: _c1,
          decls: 2,
          vars: 3,
          consts: [
            ['class', 'side-bar', 3, 'ngStyle', 4, 'ngIf'],
            [1, 'side-bar', 3, 'ngStyle'],
            [1, 'icon'],
            [1, 'times-icon', 'fa', 'fa-times', 'cursor-pointer', 3, 'click']
          ],
          template: function CommonSideBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                CommonSideBarComponent_div_0_Template,
                4,
                5,
                'div',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div');
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.isSideBarOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('is-overlay', ctx.isSideBarOpen);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgStyle']
          ],
          styles: [
            '.side-bar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  background: white;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  overflow-y: scroll;\n  width: 500px;\n  z-index: 2;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 1rem;\n  padding: 1rem;\n  z-index: 3;\n}\n\n.times-icon[_ngcontent-%COMP%] {\n  color: red;\n  z-index: 4;\n  cursor: pointer;\n}\n\n.is-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tc2lkZS1iYXIvY29tbW9uLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2xpYi9jb21tb24tc2lkZS1iYXIvY29tbW9uLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tc2lkZS1iYXIvY29tbW9uLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiA1MDBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHotaW5kZXg6IDM7XG59XG5cbi50aW1lcy1pY29uIHtcbiAgY29sb3I6IHJlZDtcbiAgei1pbmRleDogNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHotaW5kZXg6IDE7XG59XG4iLCIuc2lkZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDUwMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgei1pbmRleDogMztcbn1cblxuLnRpbWVzLWljb24ge1xuICBjb2xvcjogcmVkO1xuICB6LWluZGV4OiA0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTtcbn0iXX0= */'
          ],
          data: {
            animation: [
              Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['trigger'])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['transition'])('void => *', [
                  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['style'])({
                    transform: 'translateX(-100%)'
                  }),
                  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['animate'])('200ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['transition'])('* => void', [
                  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['animate'])(
                    '200ms',
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['style'])({
                      transform: 'translateX(-500px)'
                    })
                  )
                ])
              ])
            ]
          }
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSideBarComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-side-bar',
                    template:
                      '\n    <div\n      *ngIf="isSideBarOpen"\n      [@slideInOut]\n      [ngStyle]="{ right: position === \'right\' ? 0 : \'\', left: position === \'left\' ? 0 : \'\' }"\n      class="side-bar"\n    >\n      <div class="icon">\n        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n    <div [class.is-overlay]="isSideBarOpen"></div>\n  ',
                    styleUrls: ['./common-side-bar.component.scss'],
                    animations: [
                      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['trigger'])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['transition'])('void => *', [
                          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['style'])({
                            transform: 'translateX(-100%)'
                          }),
                          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['animate'])('200ms')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['transition'])('* => void', [
                          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['animate'])(
                            '200ms',
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__['style'])({
                              transform: 'translateX(-500px)'
                            })
                          )
                        ])
                      ])
                    ]
                  }
                ]
              }
            ],
            null,
            {
              isSideBarOpen: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              position: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-slider/common-slider.component.ts':
      /*!**********************************************************!*\
    !*** ./src/lib/common-slider/common-slider.component.ts ***!
    \**********************************************************/

      /*! exports provided: CommonSliderComponent */

      /***/
      function srcLibCommonSliderCommonSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSliderComponent', function() {
          return CommonSliderComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonSliderComponent = function CommonSliderComponent() {
          _classCallCheck(this, CommonSliderComponent);

          this.sliderLabel = 'Range';
          this.minMaxRange = [2, 22];
          this.rangeValue = 5;
          this.getRange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
        };

        CommonSliderComponent.ɵfac = function CommonSliderComponent_Factory(t) {
          return new (t || CommonSliderComponent)();
        };

        CommonSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonSliderComponent,
          selectors: [['common-slider']],
          inputs: {
            sliderLabel: 'sliderLabel',
            minMaxRange: 'minMaxRange',
            rangeValue: 'rangeValue',
            isDisabled: 'isDisabled'
          },
          outputs: {
            getRange: 'getRange'
          },
          decls: 4,
          vars: 6,
          consts: [
            [2, 'display', 'flex', 'flex-direction', 'column', 'width', '100%', 'height', '100%'],
            ['pInputText', '', 'type', 'range', 1, 'slider', 3, 'disabled', 'min', 'max', 'ngModel', 'ngModelChange']
          ],
          template: function CommonSliderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'input', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function CommonSliderComponent_Template_input_ngModelChange_3_listener($event) {
                  return (ctx.rangeValue = $event);
                }
              )('ngModelChange', function CommonSliderComponent_Template_input_ngModelChange_3_listener($event) {
                return ctx.getRange.emit($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate2'](
                '',
                ctx.sliderLabel,
                ': ',
                ctx.rangeValue,
                ''
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx.isDisabled)(
                'min',
                ctx.minMaxRange[0]
              )('max', ctx.minMaxRange[1])('ngModel', ctx.rangeValue);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['RangeValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgModel']
          ],
          styles: [
            '.slider[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n\n.slider[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #007ad9;\n  cursor: pointer;\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4caf50;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tc2xpZGVyL2NvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi1zbGlkZXIvY29tbW9uLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tc2xpZGVyL2NvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3YWQ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgb3V0bGluZTogbm9uZTtcbiAgb3BhY2l0eTogMC43O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnNsaWRlcjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDdhZDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSliderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-slider',
                    templateUrl: './common-slider.component.html',
                    styleUrls: ['./common-slider.component.scss']
                  }
                ]
              }
            ],
            null,
            {
              sliderLabel: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              minMaxRange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              rangeValue: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              isDisabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              getRange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-slider/common-slider.module.ts':
      /*!*******************************************************!*\
    !*** ./src/lib/common-slider/common-slider.module.ts ***!
    \*******************************************************/

      /*! exports provided: CommonSliderModule */

      /***/
      function srcLibCommonSliderCommonSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSliderModule', function() {
          return CommonSliderModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-slider.component */
          './src/lib/common-slider/common-slider.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonSliderModule = function CommonSliderModule() {
          _classCallCheck(this, CommonSliderModule);
        };

        CommonSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonSliderModule
        });
        CommonSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonSliderModule_Factory(t) {
            return new (t || CommonSliderModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonSliderModule, {
              declarations: [_common_slider_component__WEBPACK_IMPORTED_MODULE_2__['CommonSliderComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
              ],
              exports: [_common_slider_component__WEBPACK_IMPORTED_MODULE_2__['CommonSliderComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSliderModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
                    ],
                    declarations: [_common_slider_component__WEBPACK_IMPORTED_MODULE_2__['CommonSliderComponent']],
                    exports: [_common_slider_component__WEBPACK_IMPORTED_MODULE_2__['CommonSliderComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-split-button/common-split-button.component.ts':
      /*!**********************************************************************!*\
    !*** ./src/lib/common-split-button/common-split-button.component.ts ***!
    \**********************************************************************/

      /*! exports provided: CommonSplitButtonComponent */

      /***/
      function srcLibCommonSplitButtonCommonSplitButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSplitButtonComponent', function() {
          return CommonSplitButtonComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _hover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./hover.directive */
          './src/lib/common-split-button/hover.directive.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function CommonSplitButtonComponent_i_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'i', 7);
          }

          if (rf & 2) {
            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](ctx_r115.icon);
          }
        }

        function CommonSplitButtonComponent_ul_6_ng_container_1_li_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r120.label);
          }
        }

        function CommonSplitButtonComponent_ul_6_ng_container_1_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonSplitButtonComponent_ul_6_ng_container_1_ng_template_2_Template_li_click_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r127);

                var item_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

                return item_r120.command();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r120.label);
          }
        }

        function CommonSplitButtonComponent_ul_6_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              CommonSplitButtonComponent_ul_6_ng_container_1_li_1_Template,
              2,
              1,
              'li',
              10
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              CommonSplitButtonComponent_ul_6_ng_container_1_ng_template_2_Template,
              2,
              1,
              'ng-template',
              null,
              11,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var item_r120 = ctx.$implicit;

            var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', item_r120.disabled)('ngIfElse', _r122);
          }
        }

        function CommonSplitButtonComponent_ul_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'ul', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              CommonSplitButtonComponent_ul_6_ng_container_1_Template,
              4,
              2,
              'ng-container',
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r116.listItems);
          }
        }

        function CommonSplitButtonComponent_ng_template_7_Template(rf, ctx) {}

        var _c0 = function _c0(a0) {
          return {
            'background-color': a0
          };
        };

        var CommonSplitButtonComponent =
          /*#__PURE__*/
          (function() {
            function CommonSplitButtonComponent() {
              _classCallCheck(this, CommonSplitButtonComponent);

              this.showIcon = true;
              this.icon = 'fa fa-times';
              this.buttonType = 'button';
              this.isListDisplayed = false;
            }

            _createClass(CommonSplitButtonComponent, [
              {
                key: 'toggleList',
                value: function toggleList() {
                  this.isListDisplayed = !this.isListDisplayed;
                }
              }
            ]);

            return CommonSplitButtonComponent;
          })();

        CommonSplitButtonComponent.ɵfac = function CommonSplitButtonComponent_Factory(t) {
          return new (t || CommonSplitButtonComponent)();
        };

        CommonSplitButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonSplitButtonComponent,
          selectors: [['common-split-button']],
          inputs: {
            buttonText: 'buttonText',
            showIcon: 'showIcon',
            icon: 'icon',
            buttonType: 'buttonType',
            backgroundColor: 'backgroundColor',
            listItems: 'listItems'
          },
          decls: 9,
          vars: 8,
          consts: [
            ['appCommonHoverDirective', '', 3, 'click', 'closeList'],
            [2, 'width', 'fit-content'],
            ['style', "color: 'white'; position: 'relative'; left: '30px';", 3, 'class', 4, 'ngIf'],
            [3, 'ngStyle', 'type'],
            [
              1,
              'cursor-pointer',
              'fa',
              'fa-chevron-down',
              2,
              'color',
              'white',
              'position',
              'relative',
              'right',
              '30px',
              3,
              'click'
            ],
            ['class', 'list-container', 4, 'ngIf', 'ngIfElse'],
            ['showNothing', ''],
            [2, 'color', 'white', 'position', 'relative', 'left', '30px'],
            [1, 'list-container'],
            [4, 'ngFor', 'ngForOf'],
            ['class', 'list-disabled', 4, 'ngIf', 'ngIfElse'],
            ['addClick', ''],
            [1, 'list-disabled'],
            [1, 'list', 3, 'click']
          ],
          template: function CommonSplitButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonSplitButtonComponent_Template_div_click_0_listener($event) {
                  return ctx.toggleList();
                }
              )('closeList', function CommonSplitButtonComponent_Template_div_closeList_0_listener($event) {
                return ctx.toggleList();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CommonSplitButtonComponent_i_2_Template,
                1,
                2,
                'i',
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'i', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonSplitButtonComponent_Template_i_click_5_listener($event) {
                  return ctx.toggleList();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                CommonSplitButtonComponent_ul_6_Template,
                2,
                1,
                'ul',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                CommonSplitButtonComponent_ng_template_7_Template,
                0,
                0,
                'ng-template',
                null,
                6,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.showIcon);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngStyle',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](6, _c0, ctx.backgroundColor)
              )('type', ctx.buttonType);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.buttonText, ' ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.isListDisplayed)('ngIfElse', _r117);
            }
          },
          directives: [
            _hover_directive__WEBPACK_IMPORTED_MODULE_1__['HoverDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgStyle'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf']
          ],
          styles: [
            'button[_ngcontent-%COMP%] {\n  padding: 0.5rem 2rem;\n  margin: 0.5rem;\n  font-size: 1rem;\n  color: white;\n  border: 0.1rem solid;\n  border-radius: 0.5rem;\n  text-transform: uppercase;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  background-color: blue;\n}\nbutton[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.list-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 15%;\n  height: auto;\n  background: white;\n  left: 30px;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n  text-align: left;\n}\n.list-disabled[_ngcontent-%COMP%] {\n  color: gray;\n  padding: 0.5rem;\n  text-align: left;\n  list-style: none;\n}\n.list[_ngcontent-%COMP%]:hover {\n  background-color: #DDDD;\n  cursor: pointer;\n}\n.primary[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.primary[_ngcontent-%COMP%]:hover, .primary[_ngcontent-%COMP%]:active {\n  background-color: var(--primary);\n  color: white;\n}\n.clear[_ngcontent-%COMP%] {\n  border: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tc3BsaXQtYnV0dG9uL2NvbW1vbi1zcGxpdC1idXR0b24uc2NzcyIsInNyYy9saWIvY29tbW9uLXNwbGl0LWJ1dHRvbi9jb21tb24tc3BsaXQtYnV0dG9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0U7RUFFRSxhQUFBO0FDQUo7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7QUNERjtBREdFO0VBRUUsZ0NBQUE7RUFDQSxZQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tc3BsaXQtYnV0dG9uL2NvbW1vbi1zcGxpdC1idXR0b24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0LWRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRERERDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAmOmhvdmVyLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5jbGVhciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIiwiYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5idXR0b246Zm9jdXMsIGJ1dHRvbjphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGl2aWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGVmdDogMzBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdC1kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0REREQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByaW1hcnkge1xuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ucHJpbWFyeTpob3ZlciwgLnByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsZWFyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSplitButtonComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-split-button',
                    template:
                      '\n    <div (click)="toggleList()" appCommonHoverDirective (closeList)="toggleList()">\n      <div style="width: \'fit-content\';">\n        <i *ngIf="showIcon" [class]="icon" style="color: \'white\'; position: \'relative\'; left: \'30px\';"></i>\n        <button [ngStyle]="{ \'background-color\': backgroundColor }" [type]="buttonType">\n          {{ buttonText }}\n        </button>\n        <i\n          (click)="toggleList()"\n          style="color: \'white\'; position: \'relative\'; right: \'30px\';"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">\n          <ng-container *ngFor="let item of listItems">\n            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>\n            <ng-template #addClick>\n              <li (click)="item.command()" class="list">{{ item.label }}</li>\n            </ng-template>\n          </ng-container>\n        </ul>\n        <ng-template #showNothing></ng-template>\n      </div>\n    </div>\n  ',
                    styleUrls: ['./common-split-button.scss']
                  }
                ]
              }
            ],
            null,
            {
              buttonText: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showIcon: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              icon: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              buttonType: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              backgroundColor: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              listItems: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-split-button/common-split-button.module.ts':
      /*!*******************************************************************!*\
    !*** ./src/lib/common-split-button/common-split-button.module.ts ***!
    \*******************************************************************/

      /*! exports provided: CommonSplitButtonModule */

      /***/
      function srcLibCommonSplitButtonCommonSplitButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonSplitButtonModule', function() {
          return CommonSplitButtonModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_split_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-split-button.component */
          './src/lib/common-split-button/common-split-button.component.ts'
        );
        /* harmony import */

        var _hover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./hover.directive */
          './src/lib/common-split-button/hover.directive.ts'
        );

        var CommonSplitButtonModule = function CommonSplitButtonModule() {
          _classCallCheck(this, CommonSplitButtonModule);
        };

        CommonSplitButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonSplitButtonModule
        });
        CommonSplitButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonSplitButtonModule_Factory(t) {
            return new (t || CommonSplitButtonModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']]]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonSplitButtonModule, {
              declarations: [
                _common_split_button_component__WEBPACK_IMPORTED_MODULE_2__['CommonSplitButtonComponent'],
                _hover_directive__WEBPACK_IMPORTED_MODULE_3__['HoverDirective']
              ],
              imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
              exports: [_common_split_button_component__WEBPACK_IMPORTED_MODULE_2__['CommonSplitButtonComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonSplitButtonModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
                    declarations: [
                      _common_split_button_component__WEBPACK_IMPORTED_MODULE_2__['CommonSplitButtonComponent'],
                      _hover_directive__WEBPACK_IMPORTED_MODULE_3__['HoverDirective']
                    ],
                    exports: [_common_split_button_component__WEBPACK_IMPORTED_MODULE_2__['CommonSplitButtonComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-split-button/hover.directive.ts':
      /*!********************************************************!*\
    !*** ./src/lib/common-split-button/hover.directive.ts ***!
    \********************************************************/

      /*! exports provided: HoverDirective */

      /***/
      function srcLibCommonSplitButtonHoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'HoverDirective', function() {
          return HoverDirective;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        var HoverDirective =
          /*#__PURE__*/
          (function() {
            function HoverDirective() {
              _classCallCheck(this, HoverDirective);

              this.ismouseLeave = false;
              this.isClickEvent = false;
              this.closeList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            }

            _createClass(HoverDirective, [
              {
                key: 'onMouseEnter',
                value: function onMouseEnter() {
                  this.ismouseLeave = false;
                }
              },
              {
                key: 'onMouseLeave',
                value: function onMouseLeave() {
                  this.ismouseLeave = true;
                }
              },
              {
                key: 'onClick',
                value: function onClick() {
                  if (this.ismouseLeave) {
                    this.closeList.emit();
                  }
                }
              }
            ]);

            return HoverDirective;
          })();

        HoverDirective.ɵfac = function HoverDirective_Factory(t) {
          return new (t || HoverDirective)();
        };

        HoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineDirective']({
          type: HoverDirective,
          selectors: [['', 'appCommonHoverDirective', '']],
          hostBindings: function HoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'mouseenter',
                function HoverDirective_mouseenter_HostBindingHandler($event) {
                  return ctx.onMouseEnter();
                }
              )('mouseleave', function HoverDirective_mouseleave_HostBindingHandler($event) {
                return ctx.onMouseLeave();
              })(
                'click',
                function HoverDirective_click_HostBindingHandler($event) {
                  return ctx.onClick();
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              );
            }
          },
          outputs: {
            closeList: 'closeList'
          }
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HoverDirective,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Directive'],
                args: [
                  {
                    selector: '[appCommonHoverDirective]'
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              closeList: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              onMouseEnter: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['mouseenter']
                }
              ],
              onMouseLeave: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['mouseleave']
                }
              ],
              onClick: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:click']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-tab/common-tab.component.ts':
      /*!****************************************************!*\
    !*** ./src/lib/common-tab/common-tab.component.ts ***!
    \****************************************************/

      /*! exports provided: CommonTabComponent */

      /***/
      function srcLibCommonTabCommonTabComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTabComponent', function() {
          return CommonTabComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function CommonTabComponent_div_1_div_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r49.content);
          }
        }

        function CommonTabComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTabComponent_div_1_Template_div_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r54);

                var i_r50 = ctx.index;

                var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r53.setIndex(i_r50);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'i', 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'i', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTabComponent_div_1_Template_i_click_5_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r54);

                var i_r50 = ctx.index;

                var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r55.deleteTab(i_r50);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              6,
              CommonTabComponent_div_1_div_6_Template,
              3,
              1,
              'div',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r49 = ctx.$implicit;
            var i_r50 = ctx.index;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r48.currentIndex === i_r50 ? 'tabs' : 'not-selected'
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](item_r49.leftIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r49.header);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](ctx_r48.canDelete ? 'fa fa-times' : '');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r48.currentIndex === i_r50);
          }
        }

        var CommonTabComponent =
          /*#__PURE__*/
          (function() {
            function CommonTabComponent() {
              _classCallCheck(this, CommonTabComponent);

              this.canDelete = true;
              this.currentIndex = 0;
            }

            _createClass(CommonTabComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {}
              },
              {
                key: 'setIndex',
                value: function setIndex(index) {
                  this.currentIndex = index;
                }
              },
              {
                key: 'deleteTab',
                value: function deleteTab(tabIndex) {
                  var _this7 = this;

                  this.tabContent = this.tabContent.filter(function(item) {
                    return _this7.tabContent.indexOf(item) !== tabIndex;
                  });
                }
              }
            ]);

            return CommonTabComponent;
          })();

        CommonTabComponent.ɵfac = function CommonTabComponent_Factory(t) {
          return new (t || CommonTabComponent)();
        };

        CommonTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonTabComponent,
          selectors: [['common-tab']],
          inputs: {
            tabContent: 'tabContent',
            canDelete: 'canDelete'
          },
          decls: 2,
          vars: 1,
          consts: [
            [1, 'container'],
            ['class', 'tab-container', 4, 'ngFor', 'ngForOf'],
            [1, 'tab-container'],
            [3, 'click'],
            [2, 'margin-left', '0.3rem'],
            [2, 'margin-right', '0.3rem', 3, 'click'],
            ['class', 'tab-content', 4, 'ngIf'],
            [1, 'tab-content']
          ],
          template: function CommonTabComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                CommonTabComponent_div_1_Template,
                7,
                8,
                'div',
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.tabContent);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf']
          ],
          styles: [
            '.container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  width: 20%;\n  height: 20%;\n  box-sizing: border-box;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 0 0.5rem 0 0.5rem;\n  background-color: #1b82d7;\n  color: #ffffff;\n  padding: 0.3rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.not-selected[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 0 0.5rem 0 0.5rem;\n  background-color: #d3d3d3;\n  background-color: #d3d3d3;\n  color: #ffffff;\n  padding: 0.3rem;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: hidden;\n  text-align: left;\n  word-wrap: break-word;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  margin: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tdGFiL2NvbW1vbi10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvbGliL2NvbW1vbi10YWIvY29tbW9uLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFBNEIseUJBQUE7RUFDNUIseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9saWIvY29tbW9uLXRhYi9jb21tb24tdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YWItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMC41cmVtIDAgMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4MmQ3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vdC1zZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTsgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFiLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuM3JlbTtcbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDAuNXJlbSAwIDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiODJkNztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3Qtc2VsZWN0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFiLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAuM3JlbTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTabComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-tab',
                    templateUrl: './common-tab.component.html',
                    styleUrls: ['./common-tab.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              tabContent: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              canDelete: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-tab/common-tab.module.ts':
      /*!*************************************************!*\
    !*** ./src/lib/common-tab/common-tab.module.ts ***!
    \*************************************************/

      /*! exports provided: CommonTabModule */

      /***/
      function srcLibCommonTabCommonTabModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTabModule', function() {
          return CommonTabModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-tab.component */
          './src/lib/common-tab/common-tab.component.ts'
        );
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );

        var CommonTabModule = function CommonTabModule() {
          _classCallCheck(this, CommonTabModule);
        };

        CommonTabModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonTabModule
        });
        CommonTabModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonTabModule_Factory(t) {
            return new (t || CommonTabModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonTabModule, {
              declarations: [_common_tab_component__WEBPACK_IMPORTED_MODULE_2__['CommonTabComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
              ],
              exports: [_common_tab_component__WEBPACK_IMPORTED_MODULE_2__['CommonTabComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTabModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_3__['PrimeNgModule']
                    ],
                    declarations: [_common_tab_component__WEBPACK_IMPORTED_MODULE_2__['CommonTabComponent']],
                    exports: [_common_tab_component__WEBPACK_IMPORTED_MODULE_2__['CommonTabComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-table-2/common-table-2.component.ts':
      /*!************************************************************!*\
    !*** ./src/lib/common-table-2/common-table-2.component.ts ***!
    \************************************************************/

      /*! exports provided: CommonTableTwoComponent */

      /***/
      function srcLibCommonTable2CommonTable2ComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableTwoComponent', function() {
          return CommonTableTwoComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _table_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./table-utils */
          './src/lib/common-table-2/table-utils.ts'
        );
        /* harmony import */

        var _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../services/paginatorPubSubService/paginatorPubSub.service */
          './src/lib/services/paginatorPubSubService/paginatorPubSub.service.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_paginator_common_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common-paginator/common-paginator.component */
          './src/lib/common-paginator/common-paginator.component.ts'
        );

        function CommonTableTwoComponent_th_6_i_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'i');
          }

          if (rf & 2) {
            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r142.sortDirection === 'ASC'
                ? 'cursor-pointer fa fa-chevron-up'
                : ctx_r142.sortDirection === 'DESC'
                ? 'cursor-pointer fa fa-chevron-down'
                : ''
            );
          }
        }

        function CommonTableTwoComponent_th_6_ng_template_3_i_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'i');
          }

          if (rf & 2) {
            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r145.sortDirection === 'ASC'
                ? 'cursor-pointer fa fa-chevron-up'
                : ctx_r145.sortDirection === 'DESC'
                ? 'cursor-pointer fa fa-chevron-down'
                : ''
            );
          }
        }

        function CommonTableTwoComponent_th_6_ng_template_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              0,
              CommonTableTwoComponent_th_6_ng_template_3_i_0_Template,
              1,
              2,
              'i',
              11
            );
          }

          if (rf & 2) {
            var headers_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              headers_r141.prop === ctx_r144.tableHeaders[0].prop
            );
          }
        }

        function CommonTableTwoComponent_th_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'th', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'span', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableTwoComponent_th_6_Template_span_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r148);

                var headers_r141 = ctx.$implicit;

                var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r147.handleSort(headers_r141.prop);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              CommonTableTwoComponent_th_6_i_2_Template,
              1,
              2,
              'i',
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              CommonTableTwoComponent_th_6_ng_template_3_Template,
              1,
              1,
              'ng-template',
              null,
              10,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var headers_r141 = ctx.$implicit;

            var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](4);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r137.selectedHeader === headers_r141.prop
            )('ngIfElse', _r143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', headers_r141.name, ' ');
          }
        }

        function CommonTableTwoComponent_th_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'th');
          }
        }

        function CommonTableTwoComponent_th_8_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'th');
          }
        }

        function CommonTableTwoComponent_tr_9_td_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'td', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var headers_r154 = ctx.$implicit;

            var data_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', data_r149[headers_r154.prop], ' ');
          }
        }

        function CommonTableTwoComponent_tr_9_td_5_Template(rf, ctx) {
          if (rf & 1) {
            var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'i', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableTwoComponent_tr_9_td_5_Template_i_click_2_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r158);

                var data_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

                var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r156.getDataToEdit(data_r149);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function CommonTableTwoComponent_tr_9_td_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'i', 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableTwoComponent_tr_9_td_6_Template_i_click_2_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r161);

                var data_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

                var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r159.getDataToDelete(data_r149);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function CommonTableTwoComponent_tr_9_Template(rf, ctx) {
          if (rf & 1) {
            var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableTwoComponent_tr_9_Template_tr_click_0_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r163);

                var data_r149 = ctx.$implicit;
                var i_r150 = ctx.index;

                var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r162.getRowData(data_r149, i_r150);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'td');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'i');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              CommonTableTwoComponent_tr_9_td_4_Template,
              2,
              1,
              'td',
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              CommonTableTwoComponent_tr_9_td_5_Template,
              3,
              0,
              'td',
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              6,
              CommonTableTwoComponent_tr_9_td_6_Template,
              3,
              0,
              'td',
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var i_r150 = ctx.index;

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r140.selectedRowIndex.includes(i_r150) || ctx_r140.isSelectAll ? 'active' : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r140.isSelectAll || ctx_r140.selectedRowIndex.includes(i_r150) ? 'all-selected' : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
              ctx_r140.isSelectAll || ctx_r140.selectedRowIndex.includes(i_r150) ? 'fa fa-check white-check' : ''
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r140.tableHeaders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r140.showEditOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r140.showDeleteOption);
          }
        }

        var CommonTableTwoComponent =
          /*#__PURE__*/
          (function() {
            function CommonTableTwoComponent(paginatorService) {
              _classCallCheck(this, CommonTableTwoComponent);

              this.paginatorService = paginatorService;
              this.rowsPerPage = 5;
              this.selectedRowData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.dataToEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.dataToDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.sortDirection = 'ASC';
              this.selectedHeader = null;
              this.numberOfRowsToDisplay = [5, 10, 15, 20, 25];
              this.isSelectAll = false;
              this.selectedRows = [];
              this.selectedRowIndex = [];
            }

            _createClass(CommonTableTwoComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  var originalState = this.tableData.slice(0, this.rowsPerPage);
                  var tableDataCopy = this.tableData;
                  this.tableData = this.tableData.slice(0, this.rowsPerPage);
                  this.handlePaginatorService(originalState, tableDataCopy);
                }
              },
              {
                key: 'handlePaginatorService',
                value: function handlePaginatorService(originalState, tableDataCopy) {
                  var _this8 = this;

                  this.paginatorService.changeState({
                    rowsPerPage: this.rowsPerPage,
                    tableData: this.tableData,
                    data: tableDataCopy,
                    page: 1,
                    tableDataOriginalState: originalState
                  });
                  this.paginatorService.state.subscribe(function(data) {
                    (_this8.rowsPerPage = data.rowsPerPage), (_this8.tableData = data.tableData);
                  });
                }
              },
              {
                key: 'setSortDirection',
                value: function setSortDirection() {
                  if (this.sortDirection === 'ASC') {
                    this.sortDirection = 'DESC';
                    return this.sortDirection;
                  }

                  if (this.sortDirection === 'DESC') {
                    this.sortDirection = 'ASC';
                    return this.sortDirection;
                  }
                }
              },
              {
                key: 'handleSort',
                value: function handleSort(header) {
                  this.setSortDirection();
                  this.selectedHeader = header;

                  switch (this.sortDirection) {
                    case _table_utils__WEBPACK_IMPORTED_MODULE_1__['ASC']:
                      return (this.tableData = Object(_table_utils__WEBPACK_IMPORTED_MODULE_1__['handleAscSort'])(
                        this.tableData,
                        header
                      ));

                    case _table_utils__WEBPACK_IMPORTED_MODULE_1__['DESC']:
                      return (this.tableData = Object(_table_utils__WEBPACK_IMPORTED_MODULE_1__['handleDescSort'])(
                        this.tableData,
                        header
                      ));

                    default:
                      return this.tableData;
                  }
                }
              },
              {
                key: 'checkIfSelectedItemsAreInArray',
                value: function checkIfSelectedItemsAreInArray(data) {
                  var _this9 = this;

                  if (
                    this.selectedRows.filter(function(item) {
                      return item[_this9.dataKey] === data[_this9.dataKey];
                    }).length > 0
                  ) {
                    return true;
                  } else if (
                    !(
                      this.selectedRows.filter(function(item) {
                        return item[_this9.dataKey] === data[_this9.dataKey];
                      }).length > 0
                    )
                  ) {
                    return false;
                  }
                }
              },
              {
                key: 'getRowData',
                value: function getRowData(data, index) {
                  if (this.checkIfSelectedItemsAreInArray(data)) {
                    this.removeSelectedValues(data, index);
                  } else if (!this.checkIfSelectedItemsAreInArray(data)) {
                    this.addSelectedValues(data, index);
                  }
                }
              },
              {
                key: 'addSelectedValues',
                value: function addSelectedValues(data, index) {
                  this.selectedRowIndex.push(index);
                  this.selectedRows.push(data);
                  this.selectedRowData.emit(data);
                }
              },
              {
                key: 'removeSelectedValues',
                value: function removeSelectedValues(data, index) {
                  var _this10 = this;

                  this.selectedRows = this.selectedRows.filter(function(item) {
                    return item[_this10.dataKey] !== data[_this10.dataKey];
                  });
                  this.selectedRowIndex = this.selectedRowIndex.filter(function(i) {
                    return i !== index;
                  });
                  this.selectedRowData.emit(data);
                }
              },
              {
                key: 'getDataToEdit',
                value: function getDataToEdit(data) {
                  this.dataToEdit.emit(data);
                }
              },
              {
                key: 'getDataToDelete',
                value: function getDataToDelete(data) {
                  this.dataToDelete.emit(data);
                }
              },
              {
                key: 'toggleSelectAll',
                value: function toggleSelectAll() {
                  this.isSelectAll = !this.isSelectAll;

                  if (this.isSelectAll) {
                    this.selectedRows = this.tableData;
                  }

                  this.selectedRows = [];
                }
              }
            ]);

            return CommonTableTwoComponent;
          })();

        CommonTableTwoComponent.ɵfac = function CommonTableTwoComponent_Factory(t) {
          return new (t || CommonTableTwoComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_2__[
                'PaginatorPubSubService'
              ]
            )
          );
        };

        CommonTableTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonTableTwoComponent,
          selectors: [['common-table-2']],
          inputs: {
            tableData: 'tableData',
            dataKey: 'dataKey',
            tableHeaders: 'tableHeaders',
            showEditOption: 'showEditOption',
            showDeleteOption: 'showDeleteOption',
            rowsPerPage: 'rowsPerPage'
          },
          outputs: {
            selectedRowData: 'selectedRowData',
            dataToEdit: 'dataToEdit',
            dataToDelete: 'dataToDelete'
          },
          decls: 11,
          vars: 9,
          consts: [
            [2, 'box-shadow', '4px 4px 8px 4px rgba(0, 0, 0, 0.2)', 'transition', '0.3s'],
            [1, 'table-container'],
            [1, 'check-box', 'cursor-pointer', 3, 'click'],
            ['key', 'headers.name', 4, 'ngFor', 'ngForOf'],
            [4, 'ngIf'],
            ['key', 'dataKey', 3, 'class', 'click', 4, 'ngFor', 'ngForOf'],
            [3, 'options'],
            ['key', 'headers.name'],
            [1, 'cursor-pointer', 3, 'click'],
            [3, 'class', 4, 'ngIf', 'ngIfElse'],
            ['showDefault', ''],
            [3, 'class', 4, 'ngIf'],
            ['key', 'dataKey', 3, 'click'],
            [1, 'check-box', 'cursor-pointer', 2, 'display', 'flex', 'align-items', 'center'],
            [2, 'display', 'flex', 'justify-content', 'space-around'],
            [1, 'cursor-pointer', 'edit-icon', 'fa', 'fa-edit', 3, 'click'],
            [1, 'cursor-pointer', 'trash-icon', 'fa', 'fa-trash', 3, 'click']
          ],
          template: function CommonTableTwoComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'table', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'tr');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'th');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonTableTwoComponent_Template_div_click_4_listener($event) {
                  return ctx.toggleSelectAll();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'i');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                CommonTableTwoComponent_th_6_Template,
                6,
                3,
                'th',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                7,
                CommonTableTwoComponent_th_7_Template,
                1,
                0,
                'th',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                8,
                CommonTableTwoComponent_th_8_Template,
                1,
                0,
                'th',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                9,
                CommonTableTwoComponent_tr_9_Template,
                7,
                9,
                'tr',
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'common-paginator', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](ctx.isSelectAll ? 'all-selected' : '');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
                ctx.isSelectAll ? 'fa fa-check white-check' : ''
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.tableHeaders);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.showEditOption);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.showDeleteOption);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.tableData);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx.numberOfRowsToDisplay);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _common_paginator_common_paginator_component__WEBPACK_IMPORTED_MODULE_4__['CommonPaginatorComponent']
          ],
          styles: [
            'button[_ngcontent-%COMP%] {\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.fa-chevron-down[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.fa-chevron-up[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.table-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: table;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #007ad9;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 1rem;\n  border-bottom: 1px solid #dbd7d7;\n}\n\ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1rem;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-bottom: 1px solid #dbd7d7;\n  cursor: pointer;\n}\n\n.white-check[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.check-box[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-appearance: none;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 5px;\n  border: 2px solid #555;\n  margin-right: 10px;\n  margin-bottom: 0.2rem;\n}\n\n.all-selected[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  border: 2px solid #555;\n  margin-right: 10px;\n  margin-bottom: 0.2rem;\n  background-color: #007ad9;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.trash-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\nfooter[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tdGFibGUtMi9jb21tb24tdGFibGUtMi5jb21wb25lbnQuc2NzcyIsInNyYy9saWIvY29tbW9uLXRhYmxlLTIvY29tbW9uLXRhYmxlLTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9jb21tb24tdGFibGUtMi9jb21tb24tdGFibGUtMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZhLWNoZXZyb24tZG93biB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZmEtY2hldnJvbi11cCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWQ5O1xufVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE5LCAyMTUsIDIxNSk7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTksIDIxNSwgMjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2hpdGUtY2hlY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGVjay1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLmFsbC1zZWxlY3RlZCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FkOTtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udHJhc2gtaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZhLWNoZXZyb24tZG93biB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4uZmEtY2hldnJvbi11cCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWQ5O1xufVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkN2Q3O1xufVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkN2Q3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aGl0ZS1jaGVjayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoZWNrLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uYWxsLXNlbGVjdGVkIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWQ5O1xufVxuXG4uZWRpdC1pY29uIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi50cmFzaC1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTableTwoComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-table-2',
                    templateUrl: './common-table-2.component.html',
                    styleUrls: ['./common-table-2.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type:
                    _services_paginatorPubSubService_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_2__[
                      'PaginatorPubSubService'
                    ]
                }
              ];
            },
            {
              tableData: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              dataKey: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              tableHeaders: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showEditOption: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showDeleteOption: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              rowsPerPage: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              selectedRowData: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              dataToEdit: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              dataToDelete: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-table-2/common-table-2.module.ts':
      /*!*********************************************************!*\
    !*** ./src/lib/common-table-2/common-table-2.module.ts ***!
    \*********************************************************/

      /*! exports provided: CommonTableTwoModule */

      /***/
      function srcLibCommonTable2CommonTable2ModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableTwoModule', function() {
          return CommonTableTwoModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _common_table_2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./common-table-2.component */
          './src/lib/common-table-2/common-table-2.component.ts'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../common-paginator/common-paginator.module */
          './src/lib/common-paginator/common-paginator.module.ts'
        );
        /* harmony import */

        var _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../services/paginatorPubSubService/paginatorPubSub.module */
          './src/lib/services/paginatorPubSubService/paginatorPubSub.module.ts'
        );

        var CommonTableTwoModule = function CommonTableTwoModule() {
          _classCallCheck(this, CommonTableTwoModule);
        };

        CommonTableTwoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonTableTwoModule
        });
        CommonTableTwoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonTableTwoModule_Factory(t) {
            return new (t || CommonTableTwoModule)();
          },
          providers: [
            _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__[
              'PaginatorPubServiceModule'
            ]
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
              _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_4__['CommonPaginatorModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonTableTwoModule, {
              declarations: [_common_table_2_component__WEBPACK_IMPORTED_MODULE_1__['CommonTableTwoComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_4__['CommonPaginatorModule']
              ],
              exports: [_common_table_2_component__WEBPACK_IMPORTED_MODULE_1__['CommonTableTwoComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTableTwoModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                      _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_4__['CommonPaginatorModule']
                    ],
                    declarations: [_common_table_2_component__WEBPACK_IMPORTED_MODULE_1__['CommonTableTwoComponent']],
                    providers: [
                      _services_paginatorPubSubService_paginatorPubSub_module__WEBPACK_IMPORTED_MODULE_5__[
                        'PaginatorPubServiceModule'
                      ]
                    ],
                    exports: [_common_table_2_component__WEBPACK_IMPORTED_MODULE_1__['CommonTableTwoComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-table-2/table-utils.ts':
      /*!***********************************************!*\
    !*** ./src/lib/common-table-2/table-utils.ts ***!
    \***********************************************/

      /*! exports provided: ASC, DESC, handleAscSort, handleDescSort */

      /***/
      function srcLibCommonTable2TableUtilsTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ASC', function() {
          return ASC;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'DESC', function() {
          return DESC;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'handleAscSort', function() {
          return handleAscSort;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'handleDescSort', function() {
          return handleDescSort;
        });

        var ASC = 'ASC';
        var DESC = 'DESC';

        var handleAscSort = function handleAscSort(tableData, selectedHeader) {
          return tableData.sort(function(a, b) {
            if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
              return a[selectedHeader] - b[selectedHeader];
            } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
              return a[selectedHeader].localeCompare(b[selectedHeader]);
            }

            return null;
          });
        };

        var handleDescSort = function handleDescSort(tableData, selectedHeader) {
          return tableData.sort(function(a, b) {
            if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
              return b[selectedHeader] - a[selectedHeader];
            } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
              return b[selectedHeader].localeCompare(a[selectedHeader]);
            }

            return null;
          });
        };
        /***/
      },

    /***/
    './src/lib/common-table/common-table.component.ts':
      /*!********************************************************!*\
    !*** ./src/lib/common-table/common-table.component.ts ***!
    \********************************************************/

      /*! exports provided: CommonTableComponent */

      /***/
      function srcLibCommonTableCommonTableComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableComponent', function() {
          return CommonTableComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/api */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/confirmdialog */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js'
        );
        /* harmony import */

        var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/toast */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js'
        );
        /* harmony import */

        var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/table */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js'
        );
        /* harmony import */

        var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/inputtext */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js'
        );
        /* harmony import */

        var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/button */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js'
        );
        /* harmony import */

        var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/dropdown */
          './node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js'
        );

        function CommonTableComponent_ng_container_0_ng_template_5_Template(rf, ctx) {
          if (rf & 1) {
            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'input',
              function CommonTableComponent_ng_container_0_ng_template_5_Template_input_input_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r22);

                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](4);

                return _r16.filterGlobal($event.target.value, 'contains');
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }

        function CommonTableComponent_ng_container_0_ng_template_6_th_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'th', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var col_r25 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', col_r25.header, ' ');
          }
        }

        function CommonTableComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'th', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'p-tableHeaderCheckbox');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              3,
              CommonTableComponent_ng_container_0_ng_template_6_th_3_Template,
              2,
              1,
              'th',
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var columns_r23 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', columns_r23);
          }
        }

        function CommonTableComponent_ng_container_0_ng_template_7_td_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'td', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var col_r29 = ctx.$implicit;

            var data_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', data_r26[col_r29.field], ' ');
          }
        }

        function CommonTableComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
          if (rf & 1) {
            var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'td', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'p-tableCheckbox', 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'td', 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'i', 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableComponent_ng_container_0_ng_template_7_Template_i_click_4_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r32);

                var data_r26 = ctx.$implicit;

                var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r31.editTableData.emit(data_r26);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'i', 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableComponent_ng_container_0_ng_template_7_Template_i_click_5_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r32);

                var data_r26 = ctx.$implicit;

                var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r33.deleteData(data_r26);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              6,
              CommonTableComponent_ng_container_0_ng_template_7_td_6_Template,
              2,
              1,
              'td',
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var data_r26 = ctx.$implicit;
            var columns_r27 = ctx.columns;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('value', data_r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', columns_r27);
          }
        }

        function CommonTableComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
          if (rf & 1) {
            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableComponent_ng_container_0_ng_template_8_Template_button_click_1_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r35);

                var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r34.previousPage();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'button', 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableComponent_ng_container_0_ng_template_8_Template_button_click_2_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r35);

                var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r36.reset();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function CommonTableComponent_ng_container_0_ng_template_8_Template_button_click_3_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r35);

                var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r37.nextPage();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'p-dropdown', 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'onChange',
              function CommonTableComponent_ng_container_0_ng_template_8_Template_p_dropdown_onChange_4_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r35);

                var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

                return ctx_r38.setRowsPerPage($event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx_r20.isFirstPage());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('disabled', ctx_r20.isLastPage());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('options', ctx_r20.rowsPerPageSelection);
          }
        }

        function CommonTableComponent_ng_container_0_Template(rf, ctx) {
          if (rf & 1) {
            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'p-confirmDialog', 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'p-toast', 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'p-table', 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'firstChange',
              function CommonTableComponent_ng_container_0_Template_p_table_firstChange_3_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r40);

                var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return (ctx_r39.first = $event);
              }
            )(
              'selectionChange',
              function CommonTableComponent_ng_container_0_Template_p_table_selectionChange_3_listener($event) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r40);

                var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return (ctx_r41.selectedData = $event);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              CommonTableComponent_ng_container_0_ng_template_5_Template,
              2,
              0,
              'ng-template',
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              6,
              CommonTableComponent_ng_container_0_ng_template_6_Template,
              4,
              1,
              'ng-template',
              7
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              7,
              CommonTableComponent_ng_container_0_ng_template_7_Template,
              7,
              2,
              'ng-template',
              8
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              8,
              CommonTableComponent_ng_container_0_ng_template_8_Template,
              5,
              3,
              'ng-template',
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
          }

          if (rf & 2) {
            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleMap'](
              ctx_r13.styleClass,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefaultStyleSanitizer']
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('columns', ctx_r13.columns)(
              'value',
              ctx_r13.tableData
            )('dataKey', ctx_r13.dataKey)('responsive', true)('resizableColumns', true)('rowHover', true)(
              'rows',
              ctx_r13.rowsperPage
            )('scrollable', true)('rowHover', true)('totalRecords', ctx_r13.totalRecords)('first', ctx_r13.first)(
              'paginator',
              ctx_r13.showPagination
            )('selection', ctx_r13.selectedData);
          }
        }

        function CommonTableComponent_ng_template_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](0, 'No data available.');
          }
        }

        var CommonTableComponent =
          /*#__PURE__*/
          (function() {
            function CommonTableComponent(confirmationService, messageService) {
              _classCallCheck(this, CommonTableComponent);

              this.confirmationService = confirmationService;
              this.messageService = messageService;
              this.rowsperPage = 5;
              this.showPagination = true;
              this.rowsPerPageOptions = [5, 10, 25, 50, 100];
              this.editTableData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
              this.first = 0;
              this.rowsPerPageSelection = [
                {
                  label: 5,
                  value: 5
                },
                {
                  label: 10,
                  value: 10
                },
                {
                  label: 25,
                  value: 25
                },
                {
                  label: 100,
                  value: 100
                }
              ];
            }

            _createClass(CommonTableComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  if (this.tableData && this.tableData.length) {
                    this.totalRecords = this.tableData.length;
                  }
                }
              },
              {
                key: 'nextPage',
                value: function nextPage() {
                  this.first = this.first + this.rowsperPage;
                }
              },
              {
                key: 'previousPage',
                value: function previousPage() {
                  this.first = this.first - this.rowsperPage;
                }
              },
              {
                key: 'reset',
                value: function reset() {
                  this.first = 0;
                }
              },
              {
                key: 'isLastPage',
                value: function isLastPage() {
                  return this.first === this.tableData.length - this.rowsperPage;
                }
              },
              {
                key: 'isFirstPage',
                value: function isFirstPage() {
                  return this.first === 0;
                }
              },
              {
                key: 'setRowsPerPage',
                value: function setRowsPerPage(event) {
                  this.rowsperPage = event.value;
                }
              },
              {
                key: 'deleteData',
                value: function deleteData(data) {
                  var _this11 = this;

                  this.confirmationService.confirm({
                    message: 'Do you want to delete this record?',
                    header: 'Delete Record',
                    icon: 'fa fa-info-circle',
                    accept: function accept() {
                      _this11.tableData = _this11.tableData.filter(function(dataValue) {
                        return dataValue.agencyId !== data.agencyId;
                      });

                      _this11.messageService.add({
                        severity: 'success',
                        key: 'deleteSuccess',
                        summary: 'Record deleted.'
                      });
                    },
                    reject: function reject() {
                      return;
                    }
                  });
                }
              }
            ]);

            return CommonTableComponent;
          })();

        CommonTableComponent.ɵfac = function CommonTableComponent_Factory(t) {
          return new (t || CommonTableComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              primeng_api__WEBPACK_IMPORTED_MODULE_1__['ConfirmationService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              primeng_api__WEBPACK_IMPORTED_MODULE_1__['MessageService']
            )
          );
        };

        CommonTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonTableComponent,
          selectors: [['common-table']],
          inputs: {
            dataKey: 'dataKey',
            tableData: 'tableData',
            columns: 'columns',
            rowsperPage: 'rowsperPage',
            showPagination: 'showPagination',
            rowsPerPageOptions: 'rowsPerPageOptions',
            styleClass: 'styleClass'
          },
          outputs: {
            editTableData: 'editTableData'
          },
          decls: 3,
          vars: 2,
          consts: [
            [4, 'ngIf', 'ngIfElse'],
            ['showErrorMessage', ''],
            ['header', 'Confirmation', 'icon', 'pi pi-exclamation-triangle'],
            ['key', 'deleteSuccess'],
            [
              3,
              'columns',
              'value',
              'dataKey',
              'responsive',
              'resizableColumns',
              'rowHover',
              'rows',
              'scrollable',
              'totalRecords',
              'first',
              'paginator',
              'selection',
              'firstChange',
              'selectionChange'
            ],
            ['dt', ''],
            ['pTemplate', 'caption'],
            ['pTemplate', 'header'],
            ['pTemplate', 'body'],
            ['pTemplate', 'paginatorleft'],
            [2, 'display', 'flex', 'justify-content', 'flex-start', 'height', '100%', 'width', '100%'],
            ['pInputText', '', 'type', 'text', 'placeholder', 'Global Search', 3, 'input'],
            [2, 'width', '30%'],
            ['style', 'width: 100%; height: 100%;', 4, 'ngFor', 'ngForOf'],
            [2, 'width', '100%', 'height', '100%'],
            [3, 'value'],
            [2, 'width', '50%'],
            [1, 'cursor-pointer', 'fa', 'fa-pencil', 2, 'margin-right', '1rem', 3, 'click'],
            [1, 'fa', 'fa-trash', 'cursor-pointer', 3, 'click'],
            [2, 'padding', '1rem'],
            [
              'type',
              'button',
              'pButton',
              '',
              'icon',
              'fa fa-chevron-left',
              2,
              'margin-right',
              '.5em',
              3,
              'disabled',
              'click'
            ],
            ['type', 'button', 'pButton', '', 'icon', 'fa fa-refresh', 2, 'margin-right', '.5em', 3, 'click'],
            ['type', 'button', 'pButton', '', 'icon', 'fa fa-chevron-right', 3, 'disabled', 'click'],
            [3, 'options', 'onChange']
          ],
          template: function CommonTableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                CommonTableComponent_ng_container_0_Template,
                9,
                15,
                'ng-container',
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                CommonTableComponent_ng_template_1_Template,
                1,
                0,
                'ng-template',
                null,
                1,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
            }

            if (rf & 2) {
              var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.tableData && ctx.tableData.length)(
                'ngIfElse',
                _r14
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_3__['ConfirmDialog'],
            primeng_toast__WEBPACK_IMPORTED_MODULE_4__['Toast'],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__['Table'],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__['PrimeTemplate'],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__['InputText'],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableHeaderCheckbox'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            primeng_table__WEBPACK_IMPORTED_MODULE_5__['TableCheckbox'],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__['ButtonDirective'],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__['Dropdown']
          ],
          styles: [
            '.tableStyleClass[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXRoZXVzZHVhcnRlL0Rlc2t0b3AvQW5ndWxhckNvbW1vbkNvbXBvbmVudHMvc3JjL2xpYi9jb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2xpYi9jb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9saWIvY29tbW9uLXRhYmxlL2NvbW1vbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVN0eWxlQ2xhc3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiIsIi50YWJsZVN0eWxlQ2xhc3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTableComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-table',
                    templateUrl: './common-table.component.html',
                    styleUrls: ['./common-table.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: primeng_api__WEBPACK_IMPORTED_MODULE_1__['ConfirmationService']
                },
                {
                  type: primeng_api__WEBPACK_IMPORTED_MODULE_1__['MessageService']
                }
              ];
            },
            {
              dataKey: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              tableData: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              columns: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              rowsperPage: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              showPagination: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              rowsPerPageOptions: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              styleClass: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              editTableData: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/common-table/common-table.module.ts':
      /*!*****************************************************!*\
    !*** ./src/lib/common-table/common-table.module.ts ***!
    \*****************************************************/

      /*! exports provided: CommonTableModule */

      /***/
      function srcLibCommonTableCommonTableModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableModule', function() {
          return CommonTableModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _common_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./common-table.component */
          './src/lib/common-table/common-table.component.ts'
        );
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );

        var CommonTableModule = function CommonTableModule() {
          _classCallCheck(this, CommonTableModule);
        };

        CommonTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonTableModule
        });
        CommonTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonTableModule_Factory(t) {
            return new (t || CommonTableModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_4__['PrimeNgModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonTableModule, {
              declarations: [_common_table_component__WEBPACK_IMPORTED_MODULE_3__['CommonTableComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_4__['PrimeNgModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule']
              ],
              exports: [_common_table_component__WEBPACK_IMPORTED_MODULE_3__['CommonTableComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonTableModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_4__['PrimeNgModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule']
                    ],
                    declarations: [_common_table_component__WEBPACK_IMPORTED_MODULE_3__['CommonTableComponent']],
                    exports: [_common_table_component__WEBPACK_IMPORTED_MODULE_3__['CommonTableComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/counter-componenet/common-counter.component.ts':
      /*!****************************************************************!*\
    !*** ./src/lib/counter-componenet/common-counter.component.ts ***!
    \****************************************************************/

      /*! exports provided: CommonCounterComponent */

      /***/
      function srcLibCounterComponenetCommonCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonCounterComponent', function() {
          return CommonCounterComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonCounterComponent =
          /*#__PURE__*/
          (function() {
            function CommonCounterComponent() {
              _classCallCheck(this, CommonCounterComponent);

              // tslint:disable-next-line: variable-name
              this._counterValue = 0; // notice the '_'

              this.propagateChange = function(_) {};
            }

            _createClass(CommonCounterComponent, [
              {
                key: 'writeValue',
                value: function writeValue(value) {
                  if (value !== undefined) {
                    this.counterValue = value;
                  }
                }
              },
              {
                key: 'registerOnChange',
                value: function registerOnChange(fn) {
                  this.propagateChange = fn;
                }
              },
              {
                key: 'registerOnTouched',
                value: function registerOnTouched(fn) {}
              },
              {
                key: 'increment',
                value: function increment() {
                  this.counterValue++;
                }
              },
              {
                key: 'decrement',
                value: function decrement() {
                  this.counterValue--;
                }
              },
              {
                key: 'counterValue',
                get: function get() {
                  return this._counterValue;
                },
                set: function set(val) {
                  this._counterValue = val;
                  this.propagateChange(this._counterValue);
                }
              }
            ]);

            return CommonCounterComponent;
          })();

        CommonCounterComponent.ɵfac = function CommonCounterComponent_Factory(t) {
          return new (t || CommonCounterComponent)();
        };

        CommonCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: CommonCounterComponent,
          selectors: [['common-counter']],
          inputs: {
            _counterValue: '_counterValue'
          },
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                  return CommonCounterComponent;
                }),
                multi: true
              }
            ])
          ],
          decls: 5,
          vars: 1,
          consts: [[3, 'click']],
          template: function CommonCounterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonCounterComponent_Template_button_click_0_listener($event) {
                  return ctx.increment();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '+');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function CommonCounterComponent_Template_button_click_3_listener($event) {
                  return ctx.decrement();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, '-');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.counterValue, ' ');
            }
          },
          encapsulation: 2
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonCounterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'common-counter',
                    template:
                      '\n    <button (click)="increment()">+</button>\n    {{ counterValue }}\n    <button (click)="decrement()">-</button>\n  ',
                    providers: [
                      {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NG_VALUE_ACCESSOR'],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['forwardRef'])(function() {
                          return CommonCounterComponent;
                        }),
                        multi: true
                      }
                    ]
                  }
                ]
              }
            ],
            null,
            {
              _counterValue: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/lib/counter-componenet/counter.component.module.ts':
      /*!****************************************************************!*\
    !*** ./src/lib/counter-componenet/counter.component.module.ts ***!
    \****************************************************************/

      /*! exports provided: CommonCounterModule */

      /***/
      function srcLibCounterComponenetCounterComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CommonCounterModule', function() {
          return CommonCounterModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _common_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-counter.component */
          './src/lib/counter-componenet/common-counter.component.ts'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );

        var CommonCounterModule = function CommonCounterModule() {
          _classCallCheck(this, CommonCounterModule);
        };

        CommonCounterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: CommonCounterModule
        });
        CommonCounterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CommonCounterModule_Factory(t) {
            return new (t || CommonCounterModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CommonCounterModule, {
              declarations: [_common_counter_component__WEBPACK_IMPORTED_MODULE_2__['CommonCounterComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
              ],
              exports: [_common_counter_component__WEBPACK_IMPORTED_MODULE_2__['CommonCounterComponent']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CommonCounterModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__['ReactiveFormsModule']
                    ],
                    declarations: [_common_counter_component__WEBPACK_IMPORTED_MODULE_2__['CommonCounterComponent']],
                    exports: [_common_counter_component__WEBPACK_IMPORTED_MODULE_2__['CommonCounterComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/public_api.ts':
      /*!*******************************!*\
    !*** ./src/lib/public_api.ts ***!
    \*******************************/

      /*! exports provided: PrimeNgModule, CommonButtonModule, CommonModalModule, CommonCardModule, CommonTableModule, CommonSearchModule, CommonTabModule, DynamicFormModule, CommonMultiSelectModule, CommonSplitButtonModule, CommonSelectModule, CommonCounterModule, LocalStorageModule, CommonSliderModule, CommonTableTwoModule, CommonPaginatorModule, CommonSideBarModule */

      /***/
      function srcLibPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./PrimeNgModules.module */
          './src/lib/PrimeNgModules.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'PrimeNgModule', function() {
          return _PrimeNgModules_module__WEBPACK_IMPORTED_MODULE_0__['PrimeNgModule'];
        });
        /* harmony import */

        var _common_button_common_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./common-button/common-button.module */
          './src/lib/common-button/common-button.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonButtonModule', function() {
          return _common_button_common_button_module__WEBPACK_IMPORTED_MODULE_1__['CommonButtonModule'];
        });
        /* harmony import */

        var _common_modal_common_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./common-modal/common-modal.module */
          './src/lib/common-modal/common-modal.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonModalModule', function() {
          return _common_modal_common_modal_module__WEBPACK_IMPORTED_MODULE_2__['CommonModalModule'];
        });
        /* harmony import */

        var _common_card_common_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./common-card/common-card.module */
          './src/lib/common-card/common-card.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonCardModule', function() {
          return _common_card_common_card_module__WEBPACK_IMPORTED_MODULE_3__['CommonCardModule'];
        });
        /* harmony import */

        var _common_table_common_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./common-table/common-table.module */
          './src/lib/common-table/common-table.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableModule', function() {
          return _common_table_common_table_module__WEBPACK_IMPORTED_MODULE_4__['CommonTableModule'];
        });
        /* harmony import */

        var _common_auto_complete_common_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./common-auto-complete/common-search.module */
          './src/lib/common-auto-complete/common-search.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonSearchModule', function() {
          return _common_auto_complete_common_search_module__WEBPACK_IMPORTED_MODULE_5__['CommonSearchModule'];
        });
        /* harmony import */

        var _common_tab_common_tab_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./common-tab/common-tab.module */
          './src/lib/common-tab/common-tab.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonTabModule', function() {
          return _common_tab_common_tab_module__WEBPACK_IMPORTED_MODULE_6__['CommonTabModule'];
        });
        /* harmony import */

        var _common_reactive_form_common_reactive_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./common-reactive-form/common-reactive-form.module */
          './src/lib/common-reactive-form/common-reactive-form.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'DynamicFormModule', function() {
          return _common_reactive_form_common_reactive_form_module__WEBPACK_IMPORTED_MODULE_7__['DynamicFormModule'];
        });
        /* harmony import */

        var _common_multi_select_common_multi_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./common-multi-select/common-multi-select.module */
          './src/lib/common-multi-select/common-multi-select.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonMultiSelectModule', function() {
          return _common_multi_select_common_multi_select_module__WEBPACK_IMPORTED_MODULE_8__[
            'CommonMultiSelectModule'
          ];
        });
        /* harmony import */

        var _common_split_button_common_split_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./common-split-button/common-split-button.module */
          './src/lib/common-split-button/common-split-button.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonSplitButtonModule', function() {
          return _common_split_button_common_split_button_module__WEBPACK_IMPORTED_MODULE_9__[
            'CommonSplitButtonModule'
          ];
        });
        /* harmony import */

        var _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./common-select/common-select.module */
          './src/lib/common-select/common-select.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonSelectModule', function() {
          return _common_select_common_select_module__WEBPACK_IMPORTED_MODULE_10__['CommonSelectModule'];
        });
        /* harmony import */

        var _counter_componenet_counter_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./counter-componenet/counter.component.module */
          './src/lib/counter-componenet/counter.component.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonCounterModule', function() {
          return _counter_componenet_counter_component_module__WEBPACK_IMPORTED_MODULE_11__['CommonCounterModule'];
        });
        /* harmony import */

        var _services_localStorage_localStorage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./services/localStorage/localStorage.module */
          './src/lib/services/localStorage/localStorage.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'LocalStorageModule', function() {
          return _services_localStorage_localStorage_module__WEBPACK_IMPORTED_MODULE_12__['LocalStorageModule'];
        });
        /* harmony import */

        var _common_slider_common_slider_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./common-slider/common-slider.module */
          './src/lib/common-slider/common-slider.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonSliderModule', function() {
          return _common_slider_common_slider_module__WEBPACK_IMPORTED_MODULE_13__['CommonSliderModule'];
        });
        /* harmony import */

        var _common_table_2_common_table_2_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./common-table-2/common-table-2.module */
          './src/lib/common-table-2/common-table-2.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonTableTwoModule', function() {
          return _common_table_2_common_table_2_module__WEBPACK_IMPORTED_MODULE_14__['CommonTableTwoModule'];
        });
        /* harmony import */

        var _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./common-paginator/common-paginator.module */
          './src/lib/common-paginator/common-paginator.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonPaginatorModule', function() {
          return _common_paginator_common_paginator_module__WEBPACK_IMPORTED_MODULE_15__['CommonPaginatorModule'];
        });
        /* harmony import */

        var _common_side_bar_common_side_bar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./common-side-bar/common-side-bar.module */
          './src/lib/common-side-bar/common-side-bar.module.ts'
        );
        /* harmony reexport (safe) */

        __webpack_require__.d(__webpack_exports__, 'CommonSideBarModule', function() {
          return _common_side_bar_common_side_bar_module__WEBPACK_IMPORTED_MODULE_16__['CommonSideBarModule'];
        });
        /***/
      },

    /***/
    './src/lib/services/localStorage/localStorage.module.ts':
      /*!**************************************************************!*\
    !*** ./src/lib/services/localStorage/localStorage.module.ts ***!
    \**************************************************************/

      /*! exports provided: LocalStorageModule */

      /***/
      function srcLibServicesLocalStorageLocalStorageModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'LocalStorageModule', function() {
          return LocalStorageModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./localStorage.service */
          './src/lib/services/localStorage/localStorage.service.ts'
        );

        var LocalStorageModule = function LocalStorageModule() {
          _classCallCheck(this, LocalStorageModule);
        };

        LocalStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: LocalStorageModule
        });
        LocalStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function LocalStorageModule_Factory(t) {
            return new (t || LocalStorageModule)();
          },
          providers: [_localStorage_service__WEBPACK_IMPORTED_MODULE_1__['LocalStorageService']]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            LocalStorageModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    providers: [_localStorage_service__WEBPACK_IMPORTED_MODULE_1__['LocalStorageService']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/services/localStorage/localStorage.service.ts':
      /*!***************************************************************!*\
    !*** ./src/lib/services/localStorage/localStorage.service.ts ***!
    \***************************************************************/

      /*! exports provided: LocalStorageService */

      /***/
      function srcLibServicesLocalStorageLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'LocalStorageService', function() {
          return LocalStorageService;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );

        var LocalStorageService =
          /*#__PURE__*/
          (function() {
            function LocalStorageService() {
              _classCallCheck(this, LocalStorageService);
            }

            _createClass(LocalStorageService, null, [
              {
                key: 'setLocalStorage',
                value: function setLocalStorage(key, value) {
                  return localStorage.setItem(key, JSON.stringify(value));
                }
              },
              {
                key: 'getLocalStorage',
                value: function getLocalStorage(key) {
                  return localStorage.getItem(key);
                }
              },
              {
                key: 'clearLocalStorage',
                value: function clearLocalStorage() {
                  return localStorage.clear();
                }
              },
              {
                key: 'removeItem',
                value: function removeItem(key) {
                  return localStorage.removeItem(key);
                }
              }
            ]);

            return LocalStorageService;
          })();

        LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
          return new (t || LocalStorageService)();
        };

        LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: LocalStorageService,
          factory: LocalStorageService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            LocalStorageService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/services/paginatorPubSubService/paginatorPubSub.module.ts':
      /*!***************************************************************************!*\
    !*** ./src/lib/services/paginatorPubSubService/paginatorPubSub.module.ts ***!
    \***************************************************************************/

      /*! exports provided: PaginatorPubServiceModule */

      /***/
      function srcLibServicesPaginatorPubSubServicePaginatorPubSubModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PaginatorPubServiceModule', function() {
          return PaginatorPubServiceModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./paginatorPubSub.service */
          './src/lib/services/paginatorPubSubService/paginatorPubSub.service.ts'
        );

        var PaginatorPubServiceModule = function PaginatorPubServiceModule() {
          _classCallCheck(this, PaginatorPubServiceModule);
        };

        PaginatorPubServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: PaginatorPubServiceModule
        });
        PaginatorPubServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function PaginatorPubServiceModule_Factory(t) {
            return new (t || PaginatorPubServiceModule)();
          },
          providers: [_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__['PaginatorPubSubService']]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PaginatorPubServiceModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    providers: [_paginatorPubSub_service__WEBPACK_IMPORTED_MODULE_1__['PaginatorPubSubService']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/lib/services/paginatorPubSubService/paginatorPubSub.service.ts':
      /*!****************************************************************************!*\
    !*** ./src/lib/services/paginatorPubSubService/paginatorPubSub.service.ts ***!
    \****************************************************************************/

      /*! exports provided: PaginatorPubSubService */

      /***/
      function srcLibServicesPaginatorPubSubServicePaginatorPubSubServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'PaginatorPubSubService', function() {
          return PaginatorPubSubService;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/internal/BehaviorSubject */
          './node_modules/rxjs/internal/BehaviorSubject.js'
        );
        /* harmony import */

        var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);

        var PaginatorPubSubService =
          /*#__PURE__*/
          (function() {
            function PaginatorPubSubService() {
              _classCallCheck(this, PaginatorPubSubService);

              this.state$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__['BehaviorSubject']({
                rowsPerPage: null,
                tableData: [],
                data: [],
                page: null,
                tableDataOriginalState: []
              });
            }

            _createClass(PaginatorPubSubService, [
              {
                key: 'changeState',
                value: function changeState(value) {
                  this.state$.next({
                    rowsPerPage: value.rowsPerPage,
                    tableData: value.tableData,
                    data: value.data,
                    page: value.page,
                    tableDataOriginalState: value.tableDataOriginalState
                  });
                }
              },
              {
                key: 'state',
                get: function get() {
                  return this.state$.asObservable();
                }
              }
            ]);

            return PaginatorPubSubService;
          })();

        PaginatorPubSubService.ɵfac = function PaginatorPubSubService_Factory(t) {
          return new (t || PaginatorPubSubService)();
        };

        PaginatorPubSubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: PaginatorPubSubService,
          factory: PaginatorPubSubService.ɵfac,
          providedIn: 'root'
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PaginatorPubSubService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root'
                  }
                ]
              }
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    './src/main.ts':
      /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

      /*! no exports provided */

      /***/
      function srcMainTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */
          './src/environments/environment.ts'
        );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */
          './src/app/app.module.ts'
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */
          './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
          .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
          .catch(function(err) {
            return console.error(err);
          });
        /***/
      },

    /***/
    0:
      /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

      /*! no static exports found */

      /***/
      function _(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/matheusduarte/Desktop/AngularCommonComponents/src/main.ts */
          './src/main.ts'
        );
        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main-es5.js.map
