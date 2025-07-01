import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinDetail } from './pin-detail';

describe('PinDetail', () => {
  let component: PinDetail;
  let fixture: ComponentFixture<PinDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
