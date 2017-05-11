import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosPageComponent } from './gastos-page.component';

describe('GastosPageComponent', () => {
  let component: GastosPageComponent;
  let fixture: ComponentFixture<GastosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
