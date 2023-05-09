import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrSpinnerComponent } from './mrr-spinner.component';

describe('MrrSpinnerComponent', () => {
  let component: MrrSpinnerComponent;
  let fixture: ComponentFixture<MrrSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
