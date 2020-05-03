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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.form.changes.subscribe((change) => {
      this.form.controls.forEach((control) => {
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
}
