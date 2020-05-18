import { __assign, __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CommonSearchComponent = /** @class */ (function() {
  function CommonSearchComponent() {
    this.isDisabled = false;
    this.showDropDown = false;
    this.placeholder = 'Search...';
    this.selectedSearchResult = new EventEmitter();
    this.searchQuery = '';
    this.searchResults = null;
  }
  CommonSearchComponent.prototype.handleSearch = function(searchQuery) {
    var lowerCaseQueryString = searchQuery.toLowerCase().trim();
    if (lowerCaseQueryString.length === 0) {
      this.searchQuery = '';
    } else if (lowerCaseQueryString.length > 0) {
      this.searchQuery = lowerCaseQueryString;
      this.checkSearchResults();
    }
  };
  CommonSearchComponent.prototype.checkSearchResults = function() {
    var searchResults = this.getSearchResults();
    this.searchResults = searchResults;
  };
  CommonSearchComponent.prototype.getSearchResults = function() {
    var _this = this;
    var arrayKeys = this.searchArray.map(function(element) {
      return Object.keys(element);
    })[0];
    var searchResult = [];
    var errorMessage = null;
    this.searchArray.forEach(function(element) {
      arrayKeys.forEach(function(key) {
        var lowerCaseElement = element[key]
          .toString()
          .toLowerCase()
          .trim();
        if (!lowerCaseElement.includes(_this.searchQuery)) {
          errorMessage = [{ value: 'No Records found,' }];
        } else if (lowerCaseElement.includes(_this.searchQuery)) {
          searchResult.push(__assign(__assign({}, element), { value: element[key] }));
        }
      });
    });
    return searchResult && searchResult.length ? searchResult : errorMessage;
  };
  CommonSearchComponent.prototype.sendSearchResult = function(value, selectedString) {
    this.searchQuery = selectedString;
    this.searchResults = null;
    this.selectedSearchResult.emit(value);
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
  return CommonSearchComponent;
})();
export { CommonSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLWF1dG8tY29tcGxldGUvY29tbW9uLXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkU7SUFBQTtRQUNXLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFHekIseUJBQW9CLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkUsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUEwQ3ZCLENBQUM7SUF4Q0MsNENBQVksR0FBWixVQUFhLFdBQW1CO1FBQzlCLElBQU0sb0JBQW9CLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlELElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN2QjthQUFNLElBQUksb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1lBQ3hDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGtEQUFrQixHQUFsQjtRQUNFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnREFBZ0IsR0FBaEI7UUFBQSxpQkFrQkM7UUFqQkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDOUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ25CLElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztxQkFDbEMsUUFBUSxFQUFFO3FCQUNWLFdBQVcsRUFBRTtxQkFDYixJQUFJLEVBQUUsQ0FBQztnQkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDaEQsWUFBWSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRDtxQkFBTSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3RELFlBQVksQ0FBQyxJQUFJLHVCQUFNLE9BQU8sS0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFHLENBQUM7aUJBQ3hEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzNFLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLGNBQWM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOzZEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTsrREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OERBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzhEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs4REFBcUI7SUFDbkI7UUFBVCxNQUFNLEVBQUU7dUVBQThEO0lBTjVELHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixpMEJBQTZDOztTQUU5QyxDQUFDO09BQ1cscUJBQXFCLENBa0RqQztJQUFELDRCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNlYXJjaENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0Ryb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG4gIEBJbnB1dCgpIHNlYXJjaEFycmF5OiBhbnlbXTtcbiAgQElucHV0KCkgc3R5bGVzQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIHNlbGVjdGVkU2VhcmNoUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2VhcmNoUXVlcnkgPSAnJztcbiAgc2VhcmNoUmVzdWx0cyA9IG51bGw7XG5cbiAgaGFuZGxlU2VhcmNoKHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsb3dlckNhc2VRdWVyeVN0cmluZyA9IHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGlmIChsb3dlckNhc2VRdWVyeVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcbiAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBsb3dlckNhc2VRdWVyeVN0cmluZztcbiAgICAgIHRoaXMuY2hlY2tTZWFyY2hSZXN1bHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTZWFyY2hSZXN1bHRzKCkge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSB0aGlzLmdldFNlYXJjaFJlc3VsdHMoKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cygpIHtcbiAgICBjb25zdCBhcnJheUtleXMgPSB0aGlzLnNlYXJjaEFycmF5Lm1hcChlbGVtZW50ID0+IE9iamVjdC5rZXlzKGVsZW1lbnQpKVswXTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBbXTtcbiAgICBsZXQgZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLnNlYXJjaEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBhcnJheUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBsb3dlckNhc2VFbGVtZW50ID0gZWxlbWVudFtrZXldXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGlmICghbG93ZXJDYXNlRWxlbWVudC5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IFt7IHZhbHVlOiAnTm8gUmVjb3JkcyBmb3VuZCwnIH1dO1xuICAgICAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZUVsZW1lbnQuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeSkpIHtcbiAgICAgICAgICBzZWFyY2hSZXN1bHQucHVzaCh7IC4uLmVsZW1lbnQsIHZhbHVlOiBlbGVtZW50W2tleV0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWFyY2hSZXN1bHQgJiYgc2VhcmNoUmVzdWx0Lmxlbmd0aCA/IHNlYXJjaFJlc3VsdCA6IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIHNlbmRTZWFyY2hSZXN1bHQodmFsdWUsIHNlbGVjdGVkU3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IHNlbGVjdGVkU3RyaW5nO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFNlYXJjaFJlc3VsdC5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19
