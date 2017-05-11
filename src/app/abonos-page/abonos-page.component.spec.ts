import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonosPageComponent } from './abonos-page.component';

describe('AbonosPageComponent', () => {
  let component: AbonosPageComponent;
  let fixture: ComponentFixture<AbonosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
