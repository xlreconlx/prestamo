import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosPageComponent } from './prestamos-page.component';

describe('PrestamosPageComponent', () => {
  let component: PrestamosPageComponent;
  let fixture: ComponentFixture<PrestamosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
