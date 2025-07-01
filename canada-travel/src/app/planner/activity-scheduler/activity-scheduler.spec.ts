import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityScheduler } from './activity-scheduler';

describe('ActivityScheduler', () => {
  let component: ActivityScheduler;
  let fixture: ComponentFixture<ActivityScheduler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityScheduler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityScheduler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
