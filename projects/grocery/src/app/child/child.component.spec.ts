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

  it('should emit "Data from child" when emitEvent is called', () => {
    component.emitEvent();
    component.emitUserEvent()
    expect(emitSpy).toHaveBeenCalledWith('Data from child');
    expect(userDataspy).toHaveBeenCalledWith('user data from child');
  });
});

