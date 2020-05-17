import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSideBarComponent } from './common-sideBar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonSideBarComponent],
  exports: [CommonSideBarComponent]
})
export class CommonSideBarModule {}
