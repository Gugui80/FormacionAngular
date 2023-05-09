import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrHeaderComponent } from './mrr-header.component';

describe('MrrHeaderComponent', () => {
  let component: MrrHeaderComponent;
  let fixture: ComponentFixture<MrrHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
