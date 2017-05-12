import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoPageComponent } from './empleado-page.component';

describe('EmpleadoPageComponent', () => {
  let component: EmpleadoPageComponent;
  let fixture: ComponentFixture<EmpleadoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
