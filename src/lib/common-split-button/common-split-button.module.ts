import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSplitButtonComponent } from './common-split-button.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonSplitButtonComponent, HoverDirective],
  exports: [CommonSplitButtonComponent],
})
export class CommonSplitButtonModule {}
