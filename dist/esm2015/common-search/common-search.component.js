import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CommonSearchComponent = class CommonSearchComponent {
    constructor() {
        this.isDisabled = false;
        this.showDropDown = false;
        this.placeholder = 'Search...';
        this.selectedSearchResult = new EventEmitter();
        this.searchQuery = '';
        this.searchResults = null;
        this.errorMessage = null;
    }
    ngOnInit() { }
    handleSearch(searchQuery) {
        const lowerCaseQueryString = searchQuery.toLocaleLowerCase().trim();
        if (lowerCaseQueryString.length === 0) {
            this.searchQuery = '';
        }
        else if (lowerCaseQueryString.length > 0) {
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
        let errorMessage;
        this.searchArray.forEach(data => {
            Object.values(data)
                .map(value => value
                .toString()
                .toLowerCase()
                .trim())
                .some(searchString => {
                if (!searchString.includes(this.searchQuery)) {
                    errorMessage = 'No records found.';
                    return false;
                }
                else if (searchString.includes(this.searchQuery)) {
                    filteredAgents.push(Object.assign(Object.assign({}, data), { field: searchString }));
                    return true;
                }
                return false;
            });
        });
        return filteredAgents && filteredAgents.length ? filteredAgents : errorMessage;
    }
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
export { CommonSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNlYXJjaC9jb21tb24tc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQVdoQztRQVZTLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFHekIseUJBQW9CLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkUsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVksR0FBVyxJQUFJLENBQUM7SUFFYixDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsWUFBWSxDQUFDLFdBQW1CO1FBQzlCLE1BQU0sb0JBQW9CLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEUsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7WUFDeEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLFlBQW9CLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNYLEtBQUs7aUJBQ0YsUUFBUSxFQUFFO2lCQUNWLFdBQVcsRUFBRTtpQkFDYixJQUFJLEVBQUUsQ0FDVjtpQkFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDNUMsWUFBWSxHQUFHLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBTSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNsRCxjQUFjLENBQUMsSUFBSSxpQ0FBTSxJQUFJLEtBQUUsS0FBSyxFQUFFLFlBQVksSUFBRyxDQUFDO29CQUN0RCxPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNqRixDQUFDO0NBQ0YsQ0FBQTtBQTFEVTtJQUFSLEtBQUssRUFBRTt5REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7MkRBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzBEQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTswREFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOzBEQUFxQjtBQUNuQjtJQUFULE1BQU0sRUFBRTttRUFBOEQ7QUFONUQscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDJ5Q0FBNkM7O0tBRTlDLENBQUM7R0FDVyxxQkFBcUIsQ0EyRGpDO1NBM0RZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNlYXJjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93RHJvcERvd24gPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnU2VhcmNoLi4uJztcbiAgQElucHV0KCkgc2VhcmNoQXJyYXk7XG4gIEBJbnB1dCgpIHN0eWxlc0NsYXNzOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFNlYXJjaFJlc3VsdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNlYXJjaFF1ZXJ5ID0gJyc7XG4gIHNlYXJjaFJlc3VsdHMgPSBudWxsO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBoYW5kbGVTZWFyY2goc2VhcmNoUXVlcnk6IHN0cmluZykge1xuICAgIGNvbnN0IGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nID0gc2VhcmNoUXVlcnkudG9Mb2NhbGVMb3dlckNhc2UoKS50cmltKCk7XG4gICAgaWYgKGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobG93ZXJDYXNlUXVlcnlTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IGxvd2VyQ2FzZVF1ZXJ5U3RyaW5nO1xuICAgICAgdGhpcy5jaGVja1NlYXJjaFJlc3VsdHMoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1NlYXJjaFJlc3VsdHMoKSB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ2V0U2VhcmNoUmVzdWx0cygpO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoUmVzdWx0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gc2VhcmNoUmVzdWx0cztcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzO1xuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cygpIHtcbiAgICBjb25zdCBmaWx0ZXJlZEFnZW50cyA9IFtdO1xuICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICB0aGlzLnNlYXJjaEFycmF5LmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgICAgIC5tYXAodmFsdWUgPT5cbiAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgIClcbiAgICAgICAgLnNvbWUoc2VhcmNoU3RyaW5nID0+IHtcbiAgICAgICAgICBpZiAoIXNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ05vIHJlY29yZHMgZm91bmQuJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRBZ2VudHMucHVzaCh7IC4uLmRhdGEsIGZpZWxkOiBzZWFyY2hTdHJpbmcgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRBZ2VudHMgJiYgZmlsdGVyZWRBZ2VudHMubGVuZ3RoID8gZmlsdGVyZWRBZ2VudHMgOiBlcnJvck1lc3NhZ2U7XG4gIH1cbn1cbiJdfQ==