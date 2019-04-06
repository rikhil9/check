    
import { NgModule } from '@angular/core';

import { ClickEscapeDirective } from './click-escape.directive';

@NgModule({
  declarations: [ClickEscapeDirective],
  exports: [ClickEscapeDirective]
})
export class ClickEscapeModule {}