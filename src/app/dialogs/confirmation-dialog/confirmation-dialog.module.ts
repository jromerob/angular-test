import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirmation-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
})
export class ConfirmationDialogModule {}
