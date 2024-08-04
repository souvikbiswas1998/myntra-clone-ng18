import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitter } from '@angular/core';
import { ChildComponent } from './child.component';


describe('emitEvent', () => {
  let fixture: ComponentFixture<ChildComponent>;
  let component: ChildComponent;
  let emitSpy: jest.SpyInstance;
  let userDataspy: jest.SpyInstance;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    emitSpy = jest.spyOn(component.valuechanged, 'emit');
    userDataspy = jest.spyOn(component.userValueChanged, 'emit');
  });

  it('should emit "Data from child" when emitEvent is called - example of @output', () => {
    component.emitEvent();
    component.emitUserEvent()
    expect(emitSpy).toHaveBeenCalledWith('Data from child');
    expect(userDataspy).toHaveBeenCalledWith('user data from child');
  });

  it('should have the values @input() userDetails - example of @input', () => {
    const inputValue = [{userName:"prem", userId:"455346464"}];
    component.userDetails = inputValue;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(JSON.stringify(JSON.parse(compiled.querySelector('h2')?.textContent || '{}'))).toEqual(JSON.stringify(inputValue))
  });
});

