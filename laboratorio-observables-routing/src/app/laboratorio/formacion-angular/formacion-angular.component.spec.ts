import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAngularComponent } from './formacion-angular.component';

describe('FormacionAngularComponent', () => {
  let component: FormacionAngularComponent;
  let fixture: ComponentFixture<FormacionAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
