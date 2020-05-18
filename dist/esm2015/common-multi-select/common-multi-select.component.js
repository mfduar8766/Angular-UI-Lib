var CommonMultiSelectComponent_1;
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
let CommonMultiSelectComponent = (CommonMultiSelectComponent_1 = class CommonMultiSelectComponent {
  constructor(eRef) {
    this.eRef = eRef;
    this.preSelectedOption = [];
    this.listOfValues = [];
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.searchText = '';
    this.currentIndex = [];
    this.selectAll = false;
    this.propagateChange = _ => {};
    this.onTouched = () => {};
  }
  writeValue(value) {
    if (value !== undefined || value !== null) {
      this.preSelectedOption = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      this.isListDisplayed = false;
    }
  }
  ngOnInit() {
    this.listOfValues = this.options;
  }
  checkForPrePopulatedValues() {
    const matchedItems = [];
    if (this.preSelectedOption && this.preSelectedOption.length) {
      this.preSelectedOption.forEach(option => {
        this.options.forEach(item => {
          if (item.label === option) {
            matchedItems.push({ label: option, value: item.value });
          }
        });
      });
      this.selectedItems = matchedItems;
    }
  }
  ngAfterViewChecked() {
    this.checkForPrePopulatedValues();
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
  clearSelectedItemsOnXclick() {
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.preSelectedOption = [];
    this.propagateChange(this.preSelectedOption);
  }
  onSearchFilter(value) {
    if (value === '' || value.length === 0) {
      this.searchText = '';
      this.listOfValues = this.options;
    } else if (value && value.length > 0) {
      this.listOfValues = this.listOfValues.filter(item =>
        item.value
          .toLowerCase()
          .trim()
          .includes(value)
      );
    }
  }
  callPropagateMethod(selectedItemsArray) {
    this.selectedItems = selectedItemsArray;
    const listOfItems = this.selectedItems.map(item => item.label);
    this.preSelectedOption = listOfItems;
    this.propagateChange(this.preSelectedOption);
  }
  onSelectAll(event) {
    const isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.callPropagateMethod(this.options);
    } else {
      this.selectAll = false;
      this.callPropagateMethod([]);
    }
  }
  addSelectedValues(data, index) {
    this.selectedItems.push(data);
    this.currentIndex.push(index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }
  removeSelectedValues(data, index) {
    this.selectedItems = this.selectedItems.filter(item => item.value !== data.value);
    this.currentIndex = this.currentIndex.filter(i => i !== index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }
  addRemoveData(data, index) {
    if (
      this.selectedItems.filter(item => item.value === data.value).length > 0 ||
      this.selectedItems.filter(item => item.label === data.label).length > 0
    ) {
      this.removeSelectedValues(data, index);
    } else if (
      !(this.selectedItems.filter(item => item.value === data.value).length > 0) ||
      !(this.selectedItems.filter(item => item.label === data.label).length > 0)
    ) {
      this.addSelectedValues(data, index);
    }
  }
});
CommonMultiSelectComponent.ctorParameters = () => [{ type: ElementRef }];
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
          useExisting: forwardRef(() => CommonMultiSelectComponent_1),
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
export { CommonMultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLW11bHRpLXNlbGVjdC9jb21tb24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQW1CekUsSUFBYSwwQkFBMEIsa0NBQXZDLE1BQWEsMEJBQTBCO0lBV3JDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFSM0Isc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQzFDLGlCQUFZLEdBQWUsRUFBRSxDQUFDO1FBQzlCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUlsQixvQkFBZSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDakMsY0FBUyxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUhhLENBQUM7SUFLeEMsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcs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O0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3FFQUFrQztBQTRCMUM7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzswREFPMUM7QUFyQ1UsMEJBQTBCO0lBWnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsMHJHQUFtRDtRQUVuRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUEwQixDQUFDO2dCQUN6RCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7O0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQXNJdEM7U0F0SVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIElPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLW11bHRpLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tbXVsdGktc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLW11bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1vbk11bHRpU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk11bHRpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEJveCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzZWFyY2hCb3g6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElPcHRpb25zW107XG4gIEBJbnB1dCgpIHByZVNlbGVjdGVkT3B0aW9uOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0T2ZWYWx1ZXM6IElPcHRpb25zW10gPSBbXTtcbiAgaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gIHNlbGVjdGVkSXRlbXM6IElPcHRpb25zW10gPSBbXTtcbiAgc2VhcmNoVGV4dCA9ICcnO1xuICBjdXJyZW50SW5kZXggPSBbXTtcbiAgc2VsZWN0QWxsID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGlmICh0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saXN0T2ZWYWx1ZXMgPSB0aGlzLm9wdGlvbnM7XG4gIH1cblxuICBjaGVja0ZvclByZVBvcHVsYXRlZFZhbHVlcygpIHtcbiAgICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICBpZiAodGhpcy5wcmVTZWxlY3RlZE9wdGlvbiAmJiB0aGlzLnByZVNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgdGhpcy5wcmVTZWxlY3RlZE9wdGlvbi5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmxhYmVsID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgIG1hdGNoZWRJdGVtcy5wdXNoKHsgbGFiZWw6IG9wdGlvbiwgdmFsdWU6IGl0ZW0udmFsdWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gbWF0Y2hlZEl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmNoZWNrRm9yUHJlUG9wdWxhdGVkVmFsdWVzKCk7XG4gICAgaWYgKHRoaXMuaXNMaXN0RGlzcGxheWVkKSB7XG4gICAgICB0aGlzLnNlYXJjaEJveC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTGlzdCgpIHtcbiAgICB0aGlzLmlzTGlzdERpc3BsYXllZCA9ICF0aGlzLmlzTGlzdERpc3BsYXllZDtcbiAgfVxuXG4gIGNsZWFyU2VsZWN0ZWRJdGVtc09uWGNsaWNrKCkge1xuICAgIHRoaXMuaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5wcmVTZWxlY3RlZE9wdGlvbiA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMucHJlU2VsZWN0ZWRPcHRpb24pO1xuICB9XG5cbiAgb25TZWFyY2hGaWx0ZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gJyc7XG4gICAgICB0aGlzLmxpc3RPZlZhbHVlcyA9IHRoaXMub3B0aW9ucztcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubGlzdE9mVmFsdWVzID0gdGhpcy5saXN0T2ZWYWx1ZXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgaXRlbS52YWx1ZVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgIC5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2FsbFByb3BhZ2F0ZU1ldGhvZChzZWxlY3RlZEl0ZW1zQXJyYXk6IGFueVtdIHwgSU9wdGlvbnNbXSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHNlbGVjdGVkSXRlbXNBcnJheTtcbiAgICBjb25zdCBsaXN0T2ZJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gbGlzdE9mSXRlbXM7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5wcmVTZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICBvblNlbGVjdEFsbChldmVudCkge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IGV2ZW50O1xuICAgIGlmIChpc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsbFByb3BhZ2F0ZU1ldGhvZCh0aGlzLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsUHJvcGFnYXRlTWV0aG9kKFtdKTtcbiAgICB9XG4gIH1cblxuICBhZGRTZWxlY3RlZFZhbHVlcyhkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGRhdGEpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LnB1c2goaW5kZXgpO1xuICAgIHRoaXMucHJlU2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCk7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5wcmVTZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBkYXRhLnZhbHVlKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4LmZpbHRlcihpID0+IGkgIT09IGluZGV4KTtcbiAgICB0aGlzLnByZVNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpO1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMucHJlU2VsZWN0ZWRPcHRpb24pO1xuICB9XG5cbiAgYWRkUmVtb3ZlRGF0YShkYXRhOiBJT3B0aW9ucywgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBkYXRhLnZhbHVlKS5sZW5ndGggPiAwIHx8XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYWJlbCA9PT0gZGF0YS5sYWJlbCkubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICEodGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IGRhdGEudmFsdWUpLmxlbmd0aCA+IDApIHx8XG4gICAgICAhKHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBkYXRhLmxhYmVsKS5sZW5ndGggPiAwKVxuICAgICkge1xuICAgICAgdGhpcy5hZGRTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=
