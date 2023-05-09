import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrFooterComponent } from './mrr-footer.component';

describe('MrrFooterComponent', () => {
  let component: MrrFooterComponent;
  let fixture: ComponentFixture<MrrFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
