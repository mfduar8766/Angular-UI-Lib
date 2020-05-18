import { __decorate } from 'tslib';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CommonMultiSelectComponent = /** @class */ (function() {
  function CommonMultiSelectComponent(eRef) {
    this.eRef = eRef;
    this.preSelectedOption = [];
    this.listOfValues = [];
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.searchText = '';
    this.currentIndex = [];
    this.selectAll = false;
    this.propagateChange = function(_) {};
    this.onTouched = function() {};
  }
  CommonMultiSelectComponent_1 = CommonMultiSelectComponent;
  CommonMultiSelectComponent.prototype.writeValue = function(value) {
    if (value !== undefined || value !== null) {
      this.preSelectedOption = value;
    }
  };
  CommonMultiSelectComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonMultiSelectComponent.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  CommonMultiSelectComponent.prototype.clickout = function(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      this.isListDisplayed = false;
    }
  };
  CommonMultiSelectComponent.prototype.ngOnInit = function() {
    this.listOfValues = this.options;
  };
  CommonMultiSelectComponent.prototype.checkForPrePopulatedValues = function() {
    var _this = this;
    var matchedItems = [];
    if (this.preSelectedOption && this.preSelectedOption.length) {
      this.preSelectedOption.forEach(function(option) {
        _this.options.forEach(function(item) {
          if (item.label === option) {
            matchedItems.push({ label: option, value: item.value });
          }
        });
      });
      this.selectedItems = matchedItems;
    }
  };
  CommonMultiSelectComponent.prototype.ngAfterViewChecked = function() {
    this.checkForPrePopulatedValues();
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  };
  CommonMultiSelectComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  CommonMultiSelectComponent.prototype.clearSelectedItemsOnXclick = function() {
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.preSelectedOption = [];
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.onSearchFilter = function(value) {
    if (value === '' || value.length === 0) {
      this.searchText = '';
      this.listOfValues = this.options;
    } else if (value && value.length > 0) {
      this.listOfValues = this.listOfValues.filter(function(item) {
        return item.value
          .toLowerCase()
          .trim()
          .includes(value);
      });
    }
  };
  CommonMultiSelectComponent.prototype.callPropagateMethod = function(selectedItemsArray) {
    this.selectedItems = selectedItemsArray;
    var listOfItems = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.preSelectedOption = listOfItems;
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.onSelectAll = function(event) {
    var isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.callPropagateMethod(this.options);
    } else {
      this.selectAll = false;
      this.callPropagateMethod([]);
    }
  };
  CommonMultiSelectComponent.prototype.addSelectedValues = function(data, index) {
    this.selectedItems.push(data);
    this.currentIndex.push(index);
    this.preSelectedOption = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.removeSelectedValues = function(data, index) {
    this.selectedItems = this.selectedItems.filter(function(item) {
      return item.value !== data.value;
    });
    this.currentIndex = this.currentIndex.filter(function(i) {
      return i !== index;
    });
    this.preSelectedOption = this.selectedItems.map(function(item) {
      return item.label;
    });
    this.propagateChange(this.preSelectedOption);
  };
  CommonMultiSelectComponent.prototype.addRemoveData = function(data, index) {
    if (
      this.selectedItems.filter(function(item) {
        return item.value === data.value;
      }).length > 0 ||
      this.selectedItems.filter(function(item) {
        return item.label === data.label;
      }).length > 0
    ) {
      this.removeSelectedValues(data, index);
    } else if (
      !(
        this.selectedItems.filter(function(item) {
          return item.value === data.value;
        }).length > 0
      ) ||
      !(
        this.selectedItems.filter(function(item) {
          return item.label === data.label;
        }).length > 0
      )
    ) {
      this.addSelectedValues(data, index);
    }
  };
  var CommonMultiSelectComponent_1;
  CommonMultiSelectComponent.ctorParameters = function() {
    return [{ type: ElementRef }];
  };
  __decorate([ViewChild('searchBox', { read: ElementRef })], CommonMultiSelectComponent.prototype, 'searchBox', void 0);
  __decorate([Input()], CommonMultiSelectComponent.prototype, 'options', void 0);
  __decorate([Input()], CommonMultiSelectComponent.prototype, 'preSelectedOption', void 0);
  __decorate([HostListener('document:click', ['$event'])], CommonMultiSelectComponent.prototype, 'clickout', null);
  CommonMultiSelectComponent = CommonMultiSelectComponent_1 = __decorate(
    [
      Component({
        selector: 'common-multi-select',
        template:
          '<ng-container>\n  <ng-container *ngIf="!preSelectedOption.length; else showSelected">\n    <button (click)="toggleList()">\n      <div>Choose</div>\n    </button>\n    <i\n      (click)="toggleList()"\n      style="color: gray; position: relative; right: 30px;"\n      class="cursor-pointer fa fa-chevron-down"\n    ></i>\n  </ng-container>\n  <ng-template #showSelected>\n    <div class="list-of-selected-itens">\n      <ng-container *ngIf="preSelectedOption.length >= 4; else showItems">\n        <div class="cursor-pointer" (click)="toggleList()" style="width: 250px;">\n          {{ preSelectedOption.length }} items selected\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative; right: -5px;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-container>\n      <ng-template #showItems>\n        <div style="width: 200px;" *ngFor="let item of preSelectedOption; let i = index">\n          <div style="border: 1px solid gray; width: 70px; height: auto; margin-right: 3px; padding: 0.1rem 0.1rem;">\n            <i\n              (click)="addRemoveData({ label: item, value: item }, i)"\n              class="fa fa-times cursor-pointer"\n              style="color: gray; position: relative;"\n            ></i>\n            {{ item }}\n          </div>\n        </div>\n        <i\n          (click)="toggleList()"\n          style="color: gray; position: relative;;"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n      </ng-template>\n    </div>\n  </ng-template>\n  <div *ngIf="isListDisplayed" class="list-container" style="display: flex; flex-direction: column">\n    <div style="display: flex; align-items: center; justify-content: center; width: 100%;">\n      <div style="margin-left: 5px;" (click)="onSelectAll(!selectAll)" style="text-align: center;" class="check-box">\n        <i [class]="selectAll ? \'fa fa-check black\' : \'\'"></i>\n      </div>\n      <input\n        name="searchBox"\n        #searchBox\n        type="text"\n        (input)="onSearchFilter(searchBox.value)"\n        style="padding: 0.3rem; margin-left: 5px; margin-right: 10px;"\n      />\n      <i (click)="clearSelectedItemsOnXclick()" class=" cursor-pointer fa fa-times" style="color:gray;"></i>\n    </div>\n    <ul>\n      <li\n        *ngFor="let item of listOfValues; let i = index"\n        [class]="\n          currentIndex.includes(i) || preSelectedOption.includes(item.label) || preSelectedOption.includes(item.value)\n            ? \'drop-down\'\n            : \'list\'\n        "\n        (click)="addRemoveData(item, i)"\n        style="display: flex; align-items: center; cursor: pointer"\n      >\n        <div style="text-align: center;" class="check-box">\n          <i\n            [class]="\n              currentIndex.includes(i) ||\n              preSelectedOption.includes(item.label) ||\n              preSelectedOption.includes(item.value)\n                ? \'fa fa-check black\'\n                : \'\'\n            "\n          ></i>\n        </div>\n        <div>{{ item.label }}</div>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n',
        providers: [
          {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function() {
              return CommonMultiSelectComponent_1;
            }),
            multi: true
          }
        ],
        styles: [
          'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:gray;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:260px}button:hover{cursor:pointer}button:active,button:focus{outline:0}.list-of-selected-itens{display:-webkit-box;display:flex;padding:.5rem;margin:.5rem;font-size:1rem;color:gray;border:.1rem solid;border-radius:.5rem;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:260px;box-sizing:border-box}.check-box{-webkit-appearance:none;width:25px;height:25px;background:#fff;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem}.black{color:#000}.list-container{position:absolute;width:260px;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;height:250px;overflow-y:scroll}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left}.list:hover{background-color:#dddD;cursor:pointer}.drop-down{background-color:#007ad9;color:#fff;padding:.5rem;text-align:left}.drop-down:hover{cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
        ]
      })
    ],
    CommonMultiSelectComponent
  );
  return CommonMultiSelectComponent;
})();
export { CommonMultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLW11bHRpLXNlbGVjdC9jb21tb24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBbUJ6RTtJQVdFLG9DQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBUjNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUMxQyxpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEIsb0JBQWUsR0FBRyxVQUFDLENBQU0sSUFBTSxDQUFDLENBQUM7UUFDakMsY0FBUyxHQUFRLGNBQU8sQ0FBQyxDQUFDO0lBSGEsQ0FBQzttQ0FYN0IsMEJBQTBCO0lBZ0JyQywrQ0FBVSxHQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELHFEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFF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QWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7O2dCQTFIeUIsVUFBVTs7SUFWVTtRQUE3QyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2lFQUF1QjtJQUMzRDtRQUFSLEtBQUssRUFBRTsrREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7eUVBQWtDO0lBNEIxQztRQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzhEQU8xQztJQXJDVSwwQkFBMEI7UUFadEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiwwckdBQW1EO1lBRW5ELFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw0QkFBMEIsRUFBMUIsQ0FBMEIsQ0FBQztvQkFDekQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjs7U0FDRixDQUFDO09BQ1csMEJBQTBCLENBc0l0QztJQUFELGlDQUFDO0NBQUEsQUF0SUQsSUFzSUM7U0F0SVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLW11bHRpLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1vbk11bHRpU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk11bHRpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEJveCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWFyY2hCb3g6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zW107XG4gIEBJbnB1dCgpIHByZVNlbGVjdGVkT3B0aW9uOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0T2ZWYWx1ZXM6IElPcHRpb25zW10gPSBbXTtcbiAgaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gIHNlbGVjdGVkSXRlbXM6IElPcHRpb25zW10gPSBbXTtcbiAgc2VhcmNoVGV4dCA9ICcnO1xuICBjdXJyZW50SW5kZXggPSBbXTtcbiAgc2VsZWN0QWxsID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGlmICh0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saXN0T2ZWYWx1ZXMgPSB0aGlzLm9wdGlvbnM7XG4gIH1cblxuICBjaGVja0ZvclByZVBvcHVsYXRlZFZhbHVlcygpIHtcbiAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICBpZiAodGhpcy5wcmVTZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnByZVNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgdGhpcy5wcmVTZWxlY3RlZE9wdGlvbi5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxhYmVsID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKHsgbGFiZWw6IG9wdGlvbiwgdmFsdWU6IGl0ZW0udmFsdWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gbWF0Y2hlZEl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrRm9yUHJlUG9wdWxhdGVkVmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuaXNMaXN0RGlzcGxheWVkKSB7XG4gICAgICB0aGlzLnNlYXJjaEJveC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTGlzdCgpIHtcbiAgICB0aGlzLmlzTGlzdERpc3BsYXllZCA9ICF0aGlzLmlzTGlzdERpc3BsYXllZDtcbiAgfVxuXG4gIGNsZWFyU2VsZWN0ZWRJdGVtc09uWGNsaWNrKCkge1xuICAgIHRoaXMuaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmVTZWxlY3RlZE9wdGlvbiA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMucHJlU2VsZWN0ZWRPcHRpb24pO1xuICB9XG5cbiAgb25TZWFyY2hGaWx0ZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XG4gICAgICB0aGlzLmxpc3RPZlZhbHVlcyA9IHRoaXMub3B0aW9ucztcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubGlzdE9mVmFsdWVzID0gdGhpcy5saXN0T2ZWYWx1ZXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgaXRlbS52YWx1ZVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgIC5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2FsbFByb3BhZ2F0ZU1ldGhvZChzZWxlY3RlZEl0ZW1zQXJyYXk6IGFueVtdIHwgSU9wdGlvbnNbXSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdGVkSXRlbXNBcnJheTtcbiAgICBjb25zdCBsaXN0T2ZJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gbGlzdE9mSXRlbXM7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5wcmVTZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICBvblNlbGVjdEFsbChldmVudCkge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGV2ZW50O1xuICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsbFByb3BhZ2F0ZU1ldGhvZCh0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsUHJvcGFnYXRlTWV0aG9kKFtdKTtcbiAgICB9XG4gIH1cblxuICBhZGRTZWxlY3RlZFZhbHVlcyhkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGRhdGEpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LnB1c2goaW5kZXgpO1xuICAgIHRoaXMucHJlU2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5wcmVTZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBkYXRhLnZhbHVlKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4LmZpbHRlcihpID0+IGkgIT09IGluZGV4KTtcbiAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMucHJlU2VsZWN0ZWRPcHRpb24pO1xuICB9XG5cbiAgYWRkUmVtb3ZlRGF0YShkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBkYXRhLnZhbHVlKS5sZW5ndGggPiAwIHx8XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gZGF0YS5sYWJlbCkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICEodGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IGRhdGEudmFsdWUpLmxlbmd0aCA+IDApIHx8XG4gICAgICAhKHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBkYXRhLmxhYmVsKS5sZW5ndGggPiAwKVxuICAgICkge1xuICAgICAgdGhpcy5hZGRTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=
