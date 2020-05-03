import { Component, OnInit } from '@angular/core';
import { mockData, tabContent, tableHeaders } from 'src/assets/testData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCommonComponents';
  isModalOpen = false;
  tableData = mockData;
  tableHeaders = tableHeaders;
  tabContent = tabContent;

  constructor() {}

  ngOnInit() {}

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
