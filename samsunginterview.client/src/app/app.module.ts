import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatDialogModule } from '@angular/material/dialog';
import { AddressDialog } from './address-dialog/address-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressDialog,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatDialogModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
