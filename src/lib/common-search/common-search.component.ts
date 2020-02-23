import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.css']
})
export class CommonSearchComponent implements OnInit {
  @Input() isDisabled = false;
  @Input() showDropDown = false;
  @Input() placeholder = 'Search...';
  @Input() searchArray;
  @Input() stylesClass: string;
  @Output() selectedSearchResult: EventEmitter<any> = new EventEmitter();
  searchQuery = '';
  searchResults = null;
  errorMessage: string = null;

  constructor() {}

  ngOnInit() {}

  handleSearch(searchQuery: string) {
    const lowerCaseQueryString = searchQuery.toLocaleLowerCase().trim();
    if (lowerCaseQueryString.length === 0) {
      this.searchQuery = '';
    } else if (lowerCaseQueryString.length > 0) {
      this.searchQuery = lowerCaseQueryString;
      this.checkSearchResults();
    }
  }

  checkSearchResults() {
    const searchResults = this.getSearchResults();
    if (typeof searchResults === 'string') {
      this.errorMessage = searchResults;
      this.searchResults = null;
    }
    this.errorMessage = null;
    this.searchResults = searchResults;
  }

  getSearchResults() {
    const filteredAgents = [];
    let errorMessage: string;
    this.searchArray.forEach(data => {
      Object.values(data)
        .map(value =>
          value
            .toString()
            .toLowerCase()
            .trim()
        )
        .some(searchString => {
          if (!searchString.includes(this.searchQuery)) {
            errorMessage = 'No records found.';
            return false;
          } else if (searchString.includes(this.searchQuery)) {
            filteredAgents.push({ ...data, field: searchString });
            return true;
          }
          return false;
        });
    });
    return filteredAgents && filteredAgents.length ? filteredAgents : errorMessage;
  }
}
