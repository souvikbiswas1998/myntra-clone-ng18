import { AppComponent } from './app.component';
// example.component.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';

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

  // it('should set the price in the form, when we set it in the model', () => {
  //   // component.productPrice = '4000';
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('#ProductPrice').value).toEqual('');
  //   fixture.whenStable()
  //     .then(() => {
  //       expect(fixture.nativeElement.querySelector('#ProductPrice').value).toEqual('4000');
  //     });
  // });

  // it('should do this with "waitForAsync"', waitForAsync(() => {
  //   component.productPrice = '4000';
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('#ProductPrice').value).toEqual('');
  //   fixture.whenStable()
  //     .then(() => {
  //       expect(fixture.nativeElement.querySelector('#ProductPrice').value).toEqual('4000');
  //     });
  // }));

  // // maybe you wanna create an output and listen for changes?
  // // like, save will output productPrice + 20%
  // // your component has:
  // //     @Output() priceWithTax = new EventEmitter<string>();
  // // and the save method:
  // //    this.priceWithTax.emit( <product price increased by 20 %> )
  // it('should do this with "waitForAsync"', waitForAsync((done: any) => {
  //   component.priceWithTax
  //     .subscribe((value: number) => {
  //       expect(value).toEqual(4800);
  //       done();
  //     })
  //   component.productPrice = '4000';
  //   fixture.detectChanges();
  // }));

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
});
