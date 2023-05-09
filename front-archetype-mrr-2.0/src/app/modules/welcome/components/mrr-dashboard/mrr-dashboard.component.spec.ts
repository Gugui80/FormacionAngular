import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrDashboardComponent } from './mrr-dashboard.component';

describe('MrrDashboardComponent', () => {
  let component: MrrDashboardComponent;
  let fixture: ComponentFixture<MrrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
