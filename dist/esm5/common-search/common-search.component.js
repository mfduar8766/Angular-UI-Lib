import { __assign, __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CommonSearchComponent = /** @class */ (function () {
    function CommonSearchComponent() {
        this.isDisabled = false;
        this.showDropDown = false;
        this.placeholder = 'Search...';
        this.selectedSearchResult = new EventEmitter();
        this.searchQuery = '';
        this.searchResults = null;
        this.errorMessage = null;
    }
    CommonSearchComponent.prototype.ngOnInit = function () { };
    CommonSearchComponent.prototype.handleSearch = function (searchQuery) {
        var lowerCaseQueryString = searchQuery.toLocaleLowerCase().trim();
        if (lowerCaseQueryString.length === 0) {
            this.searchQuery = '';
        }
        else if (lowerCaseQueryString.length > 0) {
            this.searchQuery = lowerCaseQueryString;
            this.checkSearchResults();
        }
    };
    CommonSearchComponent.prototype.checkSearchResults = function () {
        var searchResults = this.getSearchResults();
        if (typeof searchResults === 'string') {
            this.errorMessage = searchResults;
            this.searchResults = null;
        }
        this.errorMessage = null;
        this.searchResults = searchResults;
    };
    CommonSearchComponent.prototype.getSearchResults = function () {
        var _this = this;
        var filteredAgents = [];
        var errorMessage;
        this.searchArray.forEach(function (data) {
            Object.values(data)
                .map(function (value) {
                return value
                    .toString()
                    .toLowerCase()
                    .trim();
            })
                .some(function (searchString) {
                if (!searchString.includes(_this.searchQuery)) {
                    errorMessage = 'No records found.';
                    return false;
                }
                else if (searchString.includes(_this.searchQuery)) {
                    filteredAgents.push(__assign(__assign({}, data), { field: searchString }));
                    return true;
                }
                return false;
            });
        });
        return filteredAgents && filteredAgents.length ? filteredAgents : errorMessage;
    };
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "isDisabled", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "showDropDown", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "searchArray", void 0);
    __decorate([
        Input()
    ], CommonSearchComponent.prototype, "stylesClass", void 0);
    __decorate([
        Output()
    ], CommonSearchComponent.prototype, "selectedSearchResult", void 0);
    CommonSearchComponent = __decorate([
        Component({
            selector: 'common-search',
            template: "<div class=\"container height-width\">\n  <div class=\"form-group row align-items-center\">\n    <div class=\"col-xs-12 col-md-12 col-sm-12\">\n      <input\n        [class]=\"isDisabled === true ? 'form-control disabled-class' : 'form-control'\"\n        [placeholder]=\"placeholder\"\n        type=\"search\"\n        name=\"searchQuery\"\n        #searchQuery\n        [ngStyle]=\"stylesClass\"\n        [disabled]=\"isDisabled\"\n        (input)=\"handleSearch(searchQuery.value)\"\n      />\n    </div>\n    <div *ngIf=\"searchQuery.value.length > 0\" class=\"position-relative col-xs-12 col-md-12\">\n      <ng-container *ngIf=\"errorMessage !== null; else showList\">\n        <ul class=\"cursor-pointer search-results\">\n          <li class=\"no-bullets list-items\">{{ errorMessage }}</li>\n        </ul>\n      </ng-container>\n      <ng-template #showList>\n        <ul class=\"cursor-pointer search-results\">\n          <li\n            (click)=\"selectedSearchResult.emit(value)\"\n            class=\"no-bullets list-items\"\n            style=\"text-transform: capitalize;\"\n            *ngFor=\"let value of searchResults; let i = index\"\n            :key=\"i\"\n          >\n            {{ value.field }}\n          </li>\n        </ul>\n      </ng-template>\n    </div>\n  </div>\n</div>\n",
            styles: [".container{position:relative}.defaultInputStyle{width:25rem}.search-results{position:absolute;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:0;margin:0;width:88%;height:100%;z-index:999;box-sizing:border-box}.disabled-class{background-color:#d3d3d3}.list-items{text-align:center;padding:.5rem;border-bottom:1px solid #d3d3d3;width:100%;color:#fff;background-color:#4c4c4c}.list-items:hover{color:#000;background-color:#fff}"]
        })
    ], CommonSearchComponent);
    return CommonSearchComponent;
}());
export { CommonSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNlYXJjaC9jb21tb24tc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRTtJQVdFO1FBVlMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUd6Qix5QkFBb0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFXLElBQUksQ0FBQztJQUViLENBQUM7SUFFaEIsd0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw0Q0FBWSxHQUFaLFVBQWEsV0FBbUI7UUFDOUIsSUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwRSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDdkI7YUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QyxJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnREFBZ0IsR0FBaEI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksWUFBb0IsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2hCLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQ1IsT0FBQSxLQUFLO3FCQUNGLFFBQVEsRUFBRTtxQkFDVixXQUFXLEVBQUU7cUJBQ2IsSUFBSSxFQUFFO1lBSFQsQ0FHUyxDQUNWO2lCQUNBLElBQUksQ0FBQyxVQUFBLFlBQVk7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDNUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBTSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNsRCxjQUFjLENBQUMsSUFBSSx1QkFBTSxJQUFJLEtBQUUsS0FBSyxFQUFFLFlBQVksSUFBRyxDQUFDO29CQUN0RCxPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNqRixDQUFDO0lBekRRO1FBQVIsS0FBSyxFQUFFOzZEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTsrREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7OERBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzhEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7OERBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFO3VFQUE4RDtJQU41RCxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsMnlDQUE2Qzs7U0FFOUMsQ0FBQztPQUNXLHFCQUFxQixDQTJEakM7SUFBRCw0QkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93RHJvcERvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcbiAgQElucHV0KCkgc2VhcmNoQXJyYXk7XG4gIEBJbnB1dCgpIHN0eWxlc0NsYXNzOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFNlYXJjaFJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNlYXJjaFF1ZXJ5ID0gJyc7XG4gIHNlYXJjaFJlc3VsdHMgPSBudWxsO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBoYW5kbGVTZWFyY2goc2VhcmNoUXVlcnk6IHN0cmluZykge1xuICAgIGNvbnN0IGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nID0gc2VhcmNoUXVlcnkudG9Mb2NhbGVMb3dlckNhc2UoKS50cmltKCk7XG4gICAgaWYgKGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobG93ZXJDYXNlUXVlcnlTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nO1xuICAgICAgdGhpcy5jaGVja1NlYXJjaFJlc3VsdHMoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1NlYXJjaFJlc3VsdHMoKSB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ2V0U2VhcmNoUmVzdWx0cygpO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoUmVzdWx0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gc2VhcmNoUmVzdWx0cztcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cygpIHtcbiAgICBjb25zdCBmaWx0ZXJlZEFnZW50cyA9IFtdO1xuICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB0aGlzLnNlYXJjaEFycmF5LmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgICAgIC5tYXAodmFsdWUgPT5cbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgIClcbiAgICAgICAgLnNvbWUoc2VhcmNoU3RyaW5nID0+IHtcbiAgICAgICAgICBpZiAoIXNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ05vIHJlY29yZHMgZm91bmQuJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRBZ2VudHMucHVzaCh7IC4uLmRhdGEsIGZpZWxkOiBzZWFyY2hTdHJpbmcgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRBZ2VudHMgJiYgZmlsdGVyZWRBZ2VudHMubGVuZ3RoID8gZmlsdGVyZWRBZ2VudHMgOiBlcnJvck1lc3NhZ2U7XG4gIH1cbn1cbiJdfQ==