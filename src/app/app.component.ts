import { Component, OnInit } from '@angular/core';
import { mockData } from 'src/assets/testData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCommonComponents';
  isModalOpen = false;
  tableData = mockData;
  tableHeaders = [
    { field: 'agencyId', header: 'ID' },
    { field: 'agencyName', header: 'Name' },
    { field: 'city', header: 'City' },
    { field: 'state', header: 'State' },
    { field: 'address', header: 'Address' },
    { field: 'zipCode', header: 'ZIP' },
    { field: 'totalAgents', header: 'Total Agents' }
  ];

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
