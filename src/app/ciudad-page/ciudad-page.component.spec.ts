import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadPageComponent } from './ciudad-page.component';

describe('CiudadPageComponent', () => {
  let component: CiudadPageComponent;
  let fixture: ComponentFixture<CiudadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
