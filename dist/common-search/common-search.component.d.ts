import { OnInit, EventEmitter } from '@angular/core';
export declare class CommonSearchComponent implements OnInit {
    isDisabled: boolean;
    showDropDown: boolean;
    placeholder: string;
    searchArray: any;
    stylesClass: string;
    selectedSearchResult: EventEmitter<any>;
    searchQuery: string;
    searchResults: any;
    errorMessage: string;
    constructor();
    ngOnInit(): void;
    handleSearch(searchQuery: string): void;
    checkSearchResults(): void;
    getSearchResults(): string | any[];
}
