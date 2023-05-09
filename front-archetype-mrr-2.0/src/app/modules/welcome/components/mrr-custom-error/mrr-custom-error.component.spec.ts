import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrCustomErrorComponent } from './mrr-custom-error.component';

describe('MrrCustomErrorComponent', () => {
  let component: MrrCustomErrorComponent;
  let fixture: ComponentFixture<MrrCustomErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrCustomErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrCustomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
