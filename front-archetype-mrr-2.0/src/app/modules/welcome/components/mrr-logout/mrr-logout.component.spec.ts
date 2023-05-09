import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrLogoutComponent } from './mrr-logout.component';

describe('MrrLogoutComponent', () => {
  let component: MrrLogoutComponent;
  let fixture: ComponentFixture<MrrLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
