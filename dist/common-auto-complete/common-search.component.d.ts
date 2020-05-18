import { EventEmitter } from '@angular/core';
export declare class CommonSearchComponent {
  isDisabled: boolean;
  showDropDown: boolean;
  placeholder: string;
  searchArray: any[];
  stylesClass: string;
  selectedSearchResult: EventEmitter<any>;
  searchQuery: string;
  searchResults: any;
  handleSearch(searchQuery: string): void;
  checkSearchResults(): void;
  getSearchResults(): any;
  sendSearchResult(value: any, selectedString: any): void;
}
