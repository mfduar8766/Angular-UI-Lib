import { Component, ViewChild, AfterViewInit, AfterViewChecked, OnInit } from '@angular/core';
import { mockData, tabContent, tableHeaders, states } from 'src/assets/testData';
import { formConfig } from '../lib/common-reactive-form/Models /form-config';
import { DynamicFormComponent } from '../lib/common-reactive-form/dynamic-form/dynamic-form.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/lib/services/localStorage/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  title = 'angularCommonComponents';
  isModalOpen = false;
  tableData = mockData;
  tableHeaders = tableHeaders;
  tabContent = tabContent;
  config = formConfig;
  selectedValues: string[];
  statesArray = states;
  state = 'GA';
  languages = ['French', 'Korean', 'Italian'];
  outerCounterValue = 5;
  counterReactiveForm: FormGroup;
  options = [
    { label: 'French', value: 'French' },
    { label: 'Korean', value: 'Korean' },
    { label: 'German', value: 'German' },
    { label: 'Japanese', value: 'Japanese' },
    { label: 'English', value: 'English' },
    { label: 'Dutch', value: 'Dutch' },
    { label: 'Italian', value: 'Italian' }
  ];
  listItems = [
    { label: 'Call First', command: () => this.callFirst(), disabled: true },
    { label: 'Call Second', command: () => this.callSecond() }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.counterReactiveForm = this.formBuilder.group({
      counter: 5
    });
  }

  ngAfterViewInit() {
    this.form.changes.subscribe(change => {
      this.form.controls.forEach(control => {
        if (change[control.name] === '') {
          this.form.setDisabled('submit', true);
        } else {
          this.form.setDisabled('submit', false);
        }
      });
    });
  }

  ngAfterViewChecked() {
    // console.log('SELECTED STATE', this.state);
    // console.log('TEST SELECT', this.testMultiSelect);
  }

  callFirst() {
    console.log('FIRST');
  }

  callSecond() {
    console.log('SECOND');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  getButtonClick() {
    console.log('DATA');
  }

  setCloseModal(event) {
    this.isModalOpen = event.target.value;
  }

  getSelectedResults(data) {
    console.log('DATA', data);
  }

  editTableData(data) {
    this.tableData = this.tableData.map(dataValue => {
      if (dataValue.agencyId === data.agencyId) {
        return {
          ...dataValue,
          agencyName: 'TEST'
        };
      }
      return { ...dataValue };
    });
  }

  getSelectedValue(value) {
    console.log('DROP-DOWN VALUE', value);
  }

  getSelectedMultiValue(value) {
    console.log('DROP-DOWN VALUE', value);
  }

  getClickedItem(value) {
    console.log('CLICKED ITEM', value);
  }

  submitTestForm(value) {
    console.log('FORM', value);
  }

  stateForm(value) {
    console.log('STATE FORM VALUE', value);
  }

  getMultiSelectFormValues(value) {
    console.log('MULTI SELECT FORM VALUE', value);
  }

  getCounterValue(value) {
    console.log('COUNTER VALUE', value);
  }

  setReactiveFormValue() {
    this.outerCounterValue = this.counterReactiveForm.value.counter;
  }

  setLocalStorage() {
    LocalStorageService.setLocalStorage('tet', { name: 'bob', age: 21 });
  }

  getLocalStorage() {
    console.log(LocalStorageService.getLocalStorage('tet'));
  }

  removeLocalStorage() {
    LocalStorageService.removeItem('tet');
    console.log(LocalStorageService.getLocalStorage('tet'));
  }
}
