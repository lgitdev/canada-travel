import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStats } from './budget-stats';

describe('BudgetStats', () => {
  let component: BudgetStats;
  let fixture: ComponentFixture<BudgetStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
