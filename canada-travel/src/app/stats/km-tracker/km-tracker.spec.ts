import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmTracker } from './km-tracker';

describe('KmTracker', () => {
  let component: KmTracker;
  let fixture: ComponentFixture<KmTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
