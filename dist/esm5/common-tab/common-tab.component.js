import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
var CommonTabComponent = /** @class */ (function() {
  function CommonTabComponent() {
    this.canDelete = true;
    this.currentIndex = 0;
  }
  CommonTabComponent.prototype.ngOnInit = function() {};
  CommonTabComponent.prototype.setIndex = function(index) {
    this.currentIndex = index;
  };
  CommonTabComponent.prototype.deleteTab = function(tabIndex) {
    var _this = this;
    this.tabContent = this.tabContent.filter(function(item) {
      return _this.tabContent.indexOf(item) !== tabIndex;
    });
  };
  __decorate([Input()], CommonTabComponent.prototype, 'tabContent', void 0);
  __decorate([Input()], CommonTabComponent.prototype, 'canDelete', void 0);
  CommonTabComponent = __decorate(
    [
      Component({
        selector: 'common-tab',
        template:
          '<div class="container">\n  <div class="tab-container" *ngFor="let item of tabContent; let i = index">\n    <div (click)="setIndex(i)" [class]="currentIndex === i ? \'tabs\' : \'not-selected\'">\n      <i style="margin-left: 0.3rem;" [class]="item.leftIcon"></i>\n      <div>{{ item.header }}</div>\n      <i (click)="deleteTab(i)" style="margin-right: 0.3rem;" [class]="canDelete ? \'fa fa-times\' : \'\'"></i>\n    </div>\n    <div class="tab-content" *ngIf="currentIndex === i">\n      <div>{{ item.content }}</div>\n    </div>\n  </div>\n</div>\n',
        styles: [
          '.container{display:-webkit-box;display:flex;height:100%;width:100%;box-sizing:border-box;overflow:hidden}.tab-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;overflow:hidden;width:20%;height:20%;box-sizing:border-box}.tabs{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:0 .5rem;background-color:#1b82d7;color:#fff;padding:.3rem;border-radius:6px;cursor:pointer}.not-selected{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin:0 .5rem;background-color:#d3d3d3;color:#fff;padding:.3rem;border-radius:6px;cursor:pointer}.tab-content{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;overflow:hidden;text-align:left;word-wrap:break-word;box-sizing:border-box;height:100%;width:100%;margin:.3rem}'
        ]
      })
    ],
    CommonTabComponent
  );
  return CommonTabComponent;
})();
export { CommonTabComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXRhYi9jb21tb24tdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFLRTtRQUhTLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBRyxDQUFDLENBQUM7SUFFRixDQUFDO0lBRWhCLHFDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVuQixxQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLFFBQWdCO1FBQTFCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7WUFDM0MsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFOzBEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7eURBQWtCO0lBRmYsa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLGlrQkFBMEM7O1NBRTNDLENBQUM7T0FDVyxrQkFBa0IsQ0FrQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXRhYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRhYkNvbnRlbnQ7XG4gIEBJbnB1dCgpIGNhbkRlbGV0ZSA9IHRydWU7XG4gIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBzZXRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGRlbGV0ZVRhYih0YWJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YWJDb250ZW50ID0gdGhpcy50YWJDb250ZW50LmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnRhYkNvbnRlbnQuaW5kZXhPZihpdGVtKSAhPT0gdGFiSW5kZXg7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
