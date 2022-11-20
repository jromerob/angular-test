import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

describe('Form Component', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('name is required', () => {
    const nameField = component.form.get('name');
    nameField.setValue('');
    expect(nameField.valid).toBeFalse();
  });

  it('name legth more than 5', () => {
    const nameField = component.form.get('name');
    nameField.setValue('wwwwwwww');
    expect(nameField.valid).toBeFalse();
  });

  it('name legth less than 5', () => {
    const nameField = component.form.get('name');
    nameField.setValue('123');
    expect(nameField.valid).toBeTrue();
  });

  it('email is required', () => {
    const emailField = component.form.get('email');
    emailField.setValue('');
    expect(emailField.valid).toBeFalse();
  });

  it('email is invalid', () => {
    const emailField = component.form.get('email');
    emailField.setValue('');
    expect(emailField.valid).toBeFalse()
    emailField.setValue('mail@test.es');
    expect(emailField.valid).toBeTrue();
  });


  it('form is invalid', () => {
    const emailField = component.form.get('email');
    const nameField = component.form.get('name');
    emailField.setValue('mail@test.es');
    nameField.setValue("12345")
    expect(component.form.valid).toBeTrue();
  });





});
