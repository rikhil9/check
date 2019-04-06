    
import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from './clickOutside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective]
})
export class ClickOutsideModule {}