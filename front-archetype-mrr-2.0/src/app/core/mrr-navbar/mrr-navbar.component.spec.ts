import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrNavbarComponent } from './mrr-navbar.component';

describe('MrrNavbarComponent', () => {
  let component: MrrNavbarComponent;
  let fixture: ComponentFixture<MrrNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
