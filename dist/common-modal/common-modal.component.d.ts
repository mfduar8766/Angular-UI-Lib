import { OnInit, EventEmitter } from '@angular/core';
export declare class CommonModalComponent implements OnInit {
    isModalOpen: boolean;
    headerText: string;
    showHeader: boolean;
    showFooter: boolean;
    classProp: {};
    closeModal: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
}
