import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalChildComponent } from './modal-child/modal-child.component';
import { ModalDirectiveDirective } from './modal-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalChildComponent,
    ModalDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
