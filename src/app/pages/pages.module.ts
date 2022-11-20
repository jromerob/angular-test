import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationDialogModule } from '../dialogs/confirmation-dialog/confirmation-dialog.module';
import { NavModule } from '../nav/nav.module';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ReduceTextPipe } from './reduce-text/reduce-text.pipe';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NavModule,
    PagesRoutingModule,
    MatDialogModule,
    ConfirmationDialogModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    CartComponent,
    ReduceTextPipe,
    FormComponent,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
