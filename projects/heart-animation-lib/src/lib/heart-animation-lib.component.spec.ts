import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartAnimationLibComponent } from './heart-animation-lib.component';

describe('HeartAnimationLibComponent', () => {
  let component: HeartAnimationLibComponent;
  let fixture: ComponentFixture<HeartAnimationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartAnimationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartAnimationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
