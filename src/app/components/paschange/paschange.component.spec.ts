import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaschangeComponent } from './paschange.component';

describe('PaschangeComponent', () => {
  let component: PaschangeComponent;
  let fixture: ComponentFixture<PaschangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaschangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
