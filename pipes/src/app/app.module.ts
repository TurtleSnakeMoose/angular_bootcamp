import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertImperialToMetricPipe } from './convert-km-to-m.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertImperialToMetricPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
