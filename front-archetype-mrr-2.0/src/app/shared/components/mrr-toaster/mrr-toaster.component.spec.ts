import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrToasterComponent } from './mrr-toaster.component';

describe('MrrToasterComponent', () => {
  let component: MrrToasterComponent;
  let fixture: ComponentFixture<MrrToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrToasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
