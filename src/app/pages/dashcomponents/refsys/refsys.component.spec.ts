import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsysComponent } from './refsys.component';

describe('RefsysComponent', () => {
  let component: RefsysComponent;
  let fixture: ComponentFixture<RefsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
