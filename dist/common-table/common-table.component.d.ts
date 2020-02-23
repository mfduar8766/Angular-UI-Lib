import { OnInit } from '@angular/core';
export declare class CommonTableComponent implements OnInit {
    tableData: any;
    columns: any;
    rowsperPage: number;
    showPagination: boolean;
    rowsPerPageOptions: number[];
    constructor();
    ngOnInit(): void;
}
