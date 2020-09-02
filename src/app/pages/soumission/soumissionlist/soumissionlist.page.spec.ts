import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumissionlistPage } from './soumissionlist.page';

describe('SoumissionlistPage', () => {
  let component: SoumissionlistPage;
  let fixture: ComponentFixture<SoumissionlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoumissionlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoumissionlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
