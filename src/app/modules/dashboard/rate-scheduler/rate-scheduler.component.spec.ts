import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSchedulerComponent } from './rate-scheduler.component';

describe('RateSchedulerComponent', () => {
  let component: RateSchedulerComponent;
  let fixture: ComponentFixture<RateSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
