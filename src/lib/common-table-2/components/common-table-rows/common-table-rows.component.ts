import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHeaders } from '../../table-utils';

@Component({
  selector: 'common-table-row',
  templateUrl: './common-table-rows.component.html',
  styleUrls: ['./common-table-rows.component.scss']
})
export class CommonTableRowsComponent implements OnInit {
  @Input() tableData: any;
  // @Input() dataKey: any;
  @Input() tableHeaders: IHeaders[];
  @Input() showEditOption: boolean;
  @Input() showDeleteOption: boolean;
  @Output() selectedRowData: EventEmitter<any> = new EventEmitter();
  @Output() dataToEdit: EventEmitter<any> = new EventEmitter();
  @Output() dataToDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleRowCick(data: any) {
    this.selectedRowData.emit(data);
  }

  handleEdit(data: any) {
    this.dataToEdit.emit(data);
  }

  handleDelete(data: any) {
    this.dataToDelete.emit(data);
  }
}
