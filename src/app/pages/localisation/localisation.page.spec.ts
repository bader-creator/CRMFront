import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationPage } from './localisation.page';

describe('LocalisationPage', () => {
  let component: LocalisationPage;
  let fixture: ComponentFixture<LocalisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalisationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
