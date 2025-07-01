import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerDay } from './planner-day';

describe('PlannerDay', () => {
  let component: PlannerDay;
  let fixture: ComponentFixture<PlannerDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
