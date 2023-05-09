import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrDetailComponent } from './mrr-detail.component';

describe('MrrDetailComponent', () => {
  let component: MrrDetailComponent;
  let fixture: ComponentFixture<MrrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
