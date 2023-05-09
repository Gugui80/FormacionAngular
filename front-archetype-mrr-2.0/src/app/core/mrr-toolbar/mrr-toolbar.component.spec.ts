import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrToolbarComponent } from './mrr-toolbar.component';

describe('MrrToolbarComponent', () => {
  let component: MrrToolbarComponent;
  let fixture: ComponentFixture<MrrToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
