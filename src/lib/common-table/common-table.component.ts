import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  @Input() tableData;
  @Input() columns;
  @Input() rowsperPage = 5;
  @Input() showPagination = true;
  @Input() rowsPerPageOptions: number[] = [5, 10, 25, 50, 100];

  constructor() {}

  ngOnInit(): void {}
}
