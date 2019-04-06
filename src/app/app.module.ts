import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideModule } from './click-outside/clickOutside.module';
import { ClickEscapeModule } from './click-escape/click-escape.module';
import { DropDownComponent } from './custom-dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    ClickEscapeModule,
    
  ],
  providers: [],

bootstrap: [AppComponent]
})
export class AppModule { }
