import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { MrrBreadcrumbsComponent } from './mrr-breadcrumbs.component';

describe('MrrBreadcrumbsComponent', () => {
  let component: MrrBreadcrumbsComponent;
  let fixture: ComponentFixture<MrrBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrrBreadcrumbsComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
