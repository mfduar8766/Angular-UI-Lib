import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { mockData, tabContent, tableHeaders } from 'src/assets/testData';
import { formConfig } from '../lib/common-reactive-form/Models /form-config';
import { DynamicFormComponent } from '../lib/common-reactive-form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  title = 'angularCommonComponents';
  isModalOpen = false;
  tableData = mockData;
  tableHeaders = tableHeaders;
  tabContent = tabContent;
  config = formConfig;
  options = [
    { label: 'French', value: 'French' },
    { label: 'Asian', value: 'Asian' },
    { label: 'Italian', value: 'Italian' }
  ];
  listItems = [
    { label: 'Call First', command: () => this.callFirst(), disabled: true },
    { label: 'Call Second', command: () => this.callSecond() }
  ];

  callFirst() {
    console.log('FIRST');
  }

  callSecond() {
    console.log('SECOND');
  }

  constructor() {}

  ngOnInit() {}

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
}
