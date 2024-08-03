import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLibsComponent } from './common-libs.component';

describe('CommonLibsComponent', () => {
  let component: CommonLibsComponent;
  let fixture: ComponentFixture<CommonLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLibsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
