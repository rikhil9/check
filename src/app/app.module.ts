import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './custom-dropdown/dropdown.component';
import { ClickOutsideModule } from './click-outside/clickOutside.module';
import { ClickOutsideDirective } from './click-outside/clickOutside.directive';
@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    
  ],
  providers: [],

bootstrap: [AppComponent]
})
export class AppModule { }
