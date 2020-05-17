import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.scss']
})
export class CommonSearchComponent {
  @Input() isDisabled = false;
  @Input() showDropDown = false;
  @Input() placeholder = 'Search...';
  @Input() searchArray: any[];
  @Input() stylesClass: string;
  @Output() selectedSearchResult: EventEmitter<any> = new EventEmitter();
  searchQuery = '';
  searchResults = null;

  handleSearch(searchQuery: string) {
    const lowerCaseQueryString = searchQuery.toLowerCase().trim();
    if (lowerCaseQueryString.length === 0) {
      this.searchQuery = '';
    } else if (lowerCaseQueryString.length > 0) {
      this.searchQuery = lowerCaseQueryString;
      this.checkSearchResults();
    }
  }

  checkSearchResults() {
    const searchResults = this.getSearchResults();
    this.searchResults = searchResults;
  }

  getSearchResults() {
    const arrayKeys = this.searchArray.map(element => Object.keys(element))[0];
    const searchResult = [];
    let errorMessage = null;
    this.searchArray.forEach(element => {
      arrayKeys.forEach(key => {
        const lowerCaseElement = element[key]
          .toString()
          .toLowerCase()
          .trim();
        if (!lowerCaseElement.includes(this.searchQuery)) {
          errorMessage = [{ value: 'No Records found,' }];
        } else if (lowerCaseElement.includes(this.searchQuery)) {
          searchResult.push({ ...element, value: element[key] });
        }
      });
    });
    return searchResult && searchResult.length ? searchResult : errorMessage;
  }

  sendSearchResult(value, selectedString) {
    this.searchQuery = selectedString;
    this.searchResults = null;
    this.selectedSearchResult.emit(value);
  }
}
