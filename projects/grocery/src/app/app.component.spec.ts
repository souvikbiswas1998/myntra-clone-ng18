import { AppComponent } from './app.component';
// example.component.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [AppComponent],
      imports: [FormsModule, ReactiveFormsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form and its respective formcontrols', () => {
    expect(component.formGroup).toBeTruthy();
    // expect(component.formGroup.get('name')?.value).toBeUndefined()
    expect(component.formGroup.contains('email')).toBeTruthy()
    expect(component.formGroup.contains('password')).toBeTruthy()
  })

  it('should check initial form values', () => {
    expect(component.formGroup.get('email')?.value).not.toBeTruthy()
    expect(component.formGroup.get('password')?.value).not.toBeTruthy()
  })

  it('should check form validation', () => {
    expect(component.formGroup.get('email')?.invalid).toBeTruthy()
    expect(component.formGroup.get('password')?.invalid).toBeTruthy()
    expect(component.formGroup.get('email')?.hasError('required')).toBeTruthy()
    expect(component.formGroup.get('email')?.hasError('email')).toBeFalsy()
    expect(component.formGroup.get('password')?.hasError('required')).toBeTruthy()
    setValue();
    expect(component.formGroup.get('email')?.valid).toBeTruthy()
    expect(component.formGroup.get('password')?.valid).toBeTruthy()
    expect(component.formGroup.get('email')?.hasError('required')).toBeFalsy()
    expect(component.formGroup.get('email')?.hasError('email')).toBeFalsy()
    expect(component.formGroup.get('password')?.hasError('required')).toBeFalsy()
  })

  it('should update form control value', () => {
    let { email, password } = setValue();
    expect(expect(fixture.nativeElement.querySelector('#email').value).toEqual(email))
    expect(expect(fixture.nativeElement.querySelector('#password').value).toEqual(password))
  })

  it('should submit form and check value', () => {
    let value = setValue();
    fixture.nativeElement.querySelector('#submit').click();
    expect(component.formGroup.value).toStrictEqual(value)
  })

  function setValue() {
    let email = 'prem@gmail.com';
    let password = 'prem@505'
    component.formGroup.get('email')?.patchValue(email)
    component.formGroup.get('password')?.patchValue(password)
    return { email, password }
  }

  it('should test the custom pipe', () => {
    let input = 'test';
    let output = 'Test';
    component.title = input;
    fixture.detectChanges();
    let x: HTMLDivElement = fixture.nativeElement.querySelector('#custom');
    expect(x.innerHTML).toEqual(output);
  })

  it('should test the custom pipe', () => {
    component.title = 'test';
    fixture.detectChanges();
    let x: HTMLHeadingElement = fixture.debugElement.query(By.css('#customh')).nativeElement;
    expect(x.innerHTML).toEqual('Test');
  })
});
