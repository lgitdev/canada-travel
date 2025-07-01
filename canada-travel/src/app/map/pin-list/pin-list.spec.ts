import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinList } from './pin-list';

describe('PinList', () => {
  let component: PinList;
  let fixture: ComponentFixture<PinList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
