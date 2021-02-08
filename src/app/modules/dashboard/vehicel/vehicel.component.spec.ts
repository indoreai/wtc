import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicelComponent } from './vehicel.component';

describe('VehicelComponent', () => {
  let component: VehicelComponent;
  let fixture: ComponentFixture<VehicelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
