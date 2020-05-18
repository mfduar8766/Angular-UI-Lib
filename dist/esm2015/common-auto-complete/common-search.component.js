import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CommonSearchComponent = class CommonSearchComponent {
  constructor() {
    this.isDisabled = false;
    this.showDropDown = false;
    this.placeholder = 'Search...';
    this.selectedSearchResult = new EventEmitter();
    this.searchQuery = '';
    this.searchResults = null;
  }
  handleSearch(searchQuery) {
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
          searchResult.push(Object.assign(Object.assign({}, element), { value: element[key] }));
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
};
__decorate([Input()], CommonSearchComponent.prototype, 'isDisabled', void 0);
__decorate([Input()], CommonSearchComponent.prototype, 'showDropDown', void 0);
__decorate([Input()], CommonSearchComponent.prototype, 'placeholder', void 0);
__decorate([Input()], CommonSearchComponent.prototype, 'searchArray', void 0);
__decorate([Input()], CommonSearchComponent.prototype, 'stylesClass', void 0);
__decorate([Output()], CommonSearchComponent.prototype, 'selectedSearchResult', void 0);
CommonSearchComponent = __decorate(
  [
    Component({
      selector: 'common-search',
      template:
        '<div [ngStyle]="stylesClass" class="search-container">\n  <input\n    [class]="isDisabled === true ? \'form-control disabled-class\' : \'form-control\'"\n    class="input-styles"\n    [placeholder]="placeholder"\n    type="search"\n    pInputText\n    name="searchQuery"\n    [disabled]="isDisabled"\n    [(ngModel)]="searchQuery"\n    (ngModelChange)="handleSearch($event)"\n    [ngStyle]="stylesClass"\n  />\n  <ul [ngStyle]="stylesClass" *ngIf="searchQuery.length > 0" class="cursor-pointer list-container">\n    <li\n      (click)="sendSearchResult(result, result.value)"\n      class="no-bullets list"\n      style="text-transform: capitalize;"\n      *ngFor="let result of searchResults; let i = index"\n      :key="i"\n    >\n      {{ result.value }}\n    </li>\n  </ul>\n</div>\n',
      styles: [
        '.search-container{width:500px;height:100%;box-sizing:border-box}.input-styles{width:500px}.list-container{position:absolute;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;height:200px;width:500px;z-index:99}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left}.list:hover{background-color:#dddd;cursor:pointer}.disabled-class{background-color:#d3d3d3}'
      ]
    })
  ],
  CommonSearchComponent
);
export { CommonSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLWF1dG8tY29tcGxldGUvY29tbW9uLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkUsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFBbEM7UUFDVyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBR3pCLHlCQUFvQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBMEN2QixDQUFDO0lBeENDLFlBQVksQ0FBQyxXQUFtQjtRQUM5QixNQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RCxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDdkI7YUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO3FCQUNsQyxRQUFRLEVBQUU7cUJBQ1YsV0FBVyxFQUFFO3FCQUNiLElBQUksRUFBRSxDQUFDO2dCQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNoRCxZQUFZLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7aUJBQ2pEO3FCQUFNLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDdEQsWUFBWSxDQUFDLElBQUksaUNBQU0sT0FBTyxLQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUcsQ0FBQztpQkFDeEQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDM0UsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxjQUFjO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7QUFqRFU7SUFBUixLQUFLLEVBQUU7eURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzJEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTswREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7MERBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzBEQUFxQjtBQUNuQjtJQUFULE1BQU0sRUFBRTttRUFBOEQ7QUFONUQscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLGkwQkFBNkM7O0tBRTlDLENBQUM7R0FDVyxxQkFBcUIsQ0FrRGpDO1NBbERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tbW9uLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1zZWFyY2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25TZWFyY2hDb21wb25lbnQge1xuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dEcm9wRG93biA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuICBASW5wdXQoKSBzZWFyY2hBcnJheTogYW55W107XG4gIEBJbnB1dCgpIHN0eWxlc0NsYXNzOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFNlYXJjaFJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNlYXJjaFF1ZXJ5ID0gJyc7XG4gIHNlYXJjaFJlc3VsdHMgPSBudWxsO1xuXG4gIGhhbmRsZVNlYXJjaChzZWFyY2hRdWVyeTogc3RyaW5nKSB7XG4gICAgY29uc3QgbG93ZXJDYXNlUXVlcnlTdHJpbmcgPSBzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICBpZiAobG93ZXJDYXNlUXVlcnlTdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgfSBlbHNlIGlmIChsb3dlckNhc2VRdWVyeVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gbG93ZXJDYXNlUXVlcnlTdHJpbmc7XG4gICAgICB0aGlzLmNoZWNrU2VhcmNoUmVzdWx0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2VhcmNoUmVzdWx0cygpIHtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gdGhpcy5nZXRTZWFyY2hSZXN1bHRzKCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cztcbiAgfVxuXG4gIGdldFNlYXJjaFJlc3VsdHMoKSB7XG4gICAgY29uc3QgYXJyYXlLZXlzID0gdGhpcy5zZWFyY2hBcnJheS5tYXAoZWxlbWVudCA9PiBPYmplY3Qua2V5cyhlbGVtZW50KSlbMF07XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gW107XG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IG51bGw7XG4gICAgdGhpcy5zZWFyY2hBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgYXJyYXlLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlRWxlbWVudCA9IGVsZW1lbnRba2V5XVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBpZiAoIWxvd2VyQ2FzZUVsZW1lbnQuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeSkpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBbeyB2YWx1ZTogJ05vIFJlY29yZHMgZm91bmQsJyB9XTtcbiAgICAgICAgfSBlbHNlIGlmIChsb3dlckNhc2VFbGVtZW50LmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkpKSB7XG4gICAgICAgICAgc2VhcmNoUmVzdWx0LnB1c2goeyAuLi5lbGVtZW50LCB2YWx1ZTogZWxlbWVudFtrZXldIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VhcmNoUmVzdWx0ICYmIHNlYXJjaFJlc3VsdC5sZW5ndGggPyBzZWFyY2hSZXN1bHQgOiBlcnJvck1lc3NhZ2U7XG4gIH1cblxuICBzZW5kU2VhcmNoUmVzdWx0KHZhbHVlLCBzZWxlY3RlZFN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBzZWxlY3RlZFN0cmluZztcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRTZWFyY2hSZXN1bHQuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==
