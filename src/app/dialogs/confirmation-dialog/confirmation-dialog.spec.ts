import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirmation-dialog.component';

const MatDialogMock = {
  close: () => null,
};

describe('confirmation dialog', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: MatDialogMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // public onConfirm(): void {
  //   this.dialogRef.close(true);
  // }

  // public onDismiss(): void {
  //   this.dialogRef.close(false);
  // }

  it('on confirm send true', () => {
    const service = TestBed.inject(MatDialogRef);
    const spy = spyOn(service, 'close');
    component.onConfirm();
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('on cancel send false', () => {
    const service = TestBed.inject(MatDialogRef);
    const spy = spyOn(service, 'close');
    component.onDismiss();
    expect(spy).toHaveBeenCalledWith(false);
  });
});
