import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownModule } from './custom-dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    DropDownModule,
    
  ],
  providers: [],

bootstrap: [AppComponent]
})
export class AppModule { }
