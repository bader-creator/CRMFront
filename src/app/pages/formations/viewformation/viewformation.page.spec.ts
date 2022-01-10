import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformationPage } from './viewformation.page';

describe('ViewformationPage', () => {
  let component: ViewformationPage;
  let fixture: ComponentFixture<ViewformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
