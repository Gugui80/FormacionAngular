import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleObservableComponent } from './simple-observable.component';

describe('SimpleObservableComponent', () => {
  let component: SimpleObservableComponent;
  let fixture: ComponentFixture<SimpleObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
