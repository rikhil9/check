    
import { NgModule } from '@angular/core';

import { ClickEnterDirective } from './click-enter.directive';

@NgModule({
  declarations: [ClickEnterDirective],
  exports: [ClickEnterDirective]
})
export class ClickEnterModule {}