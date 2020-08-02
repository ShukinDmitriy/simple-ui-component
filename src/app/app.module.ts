import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, SelectModule } from 'simple-ui-component';
import { ButtonComponent } from './pages/button/button.component';
import { SelectComponent } from './pages/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
