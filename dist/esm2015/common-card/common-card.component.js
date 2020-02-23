import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CommonCardComponent = class CommonCardComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], CommonCardComponent.prototype, "showHeader", void 0);
__decorate([
    Input()
], CommonCardComponent.prototype, "showFooter", void 0);
CommonCardComponent = __decorate([
    Component({
        selector: 'common-card',
        template: `
    <div class="card-container height-width">
      <div class="card">
        <div *ngIf="showHeader" class="card-header">
          <ng-content select="div[role=header]"></ng-content>
        </div>
        <div class="card-body height-width">
          <ng-content></ng-content>
        </div>
        <div class="card-footer" *ngIf="showFooter">
          <ng-content select="div[role=footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
        styles: [".card-container{height:50%;width:50%;padding:1rem;box-shadow:8px 8px 8px 8px rgba(0,0,0,.2)}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
    })
], CommonCardComponent);
export { CommonCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1jYXJkL2NvbW1vbi1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQnpELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSTlCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7Q0FDZCxDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7dURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3VEQUFxQjtBQUZsQixtQkFBbUI7SUFuQi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDs7S0FFRixDQUFDO0dBQ1csbUJBQW1CLENBTy9CO1NBUFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXIgaGVpZ2h0LXdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0hlYWRlclwiIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBoZWlnaHQtd2lkdGhcIj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIiAqbmdJZj1cInNob3dGb290ZXJcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tY2FyZC1jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dGb290ZXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==