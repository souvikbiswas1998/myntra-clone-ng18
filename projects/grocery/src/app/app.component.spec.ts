import { AppComponent } from './app.component';
// example.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child/child.component';

describe('ExampleComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: []
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

  it('should have title "Hello, Angular!"', () => {
    expect(component.title).toBe('grocery');
  });

  it('should add two numbers', () => {
    expect(component.addTwoNums(5, 9)).toBe(14);
  });
});
