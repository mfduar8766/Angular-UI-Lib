import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpinnerModule } from 'primeng/spinner';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    CardModule,
    ConfirmDialogModule,
    DropdownModule,
    DialogModule,
    LightboxModule,
    InputTextModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    ListboxModule,
    MultiSelectModule,
    SelectButtonModule,
    SpinnerModule,
    SidebarModule,
    TabViewModule,
    TableModule,
    ToolbarModule,
    ToggleButtonModule
  ]
})
export class PrimeNgModule {}
