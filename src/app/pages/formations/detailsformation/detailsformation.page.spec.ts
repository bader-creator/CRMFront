import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsformationPage } from './detailsformation.page';

describe('DetailsformationPage', () => {
  let component: DetailsformationPage;
  let fixture: ComponentFixture<DetailsformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
