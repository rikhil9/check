import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ClickOutsideModule } from '../click-outside/clickOutside.module';
import { ClickEnterModule } from '../click-enter/click-enter.module';
import { ClickEscapeModule } from '../click-escape/click-escape.module';
import { DropDownComponent } from '../custom-dropdown/dropdown.component';
import { ArrowModule } from '../arrow-listener/arrow.module';


@NgModule({
  imports: [
    CommonModule,
    ArrowModule,
    ClickOutsideModule,
    ClickEscapeModule,
    ClickEnterModule,
  ],
  declarations: [
    DropDownComponent
  ],
  exports: [
    DropDownComponent
  ]
})
export class DropDownModule {}