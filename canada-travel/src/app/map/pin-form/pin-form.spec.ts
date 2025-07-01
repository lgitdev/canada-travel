import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinForm } from './pin-form';

describe('PinForm', () => {
  let component: PinForm;
  let fixture: ComponentFixture<PinForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
