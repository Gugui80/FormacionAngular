import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrSidebarComponent } from './mrr-sidebar.component';

describe('MrrSidebarComponent', () => {
  let component: MrrSidebarComponent;
  let fixture: ComponentFixture<MrrSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
