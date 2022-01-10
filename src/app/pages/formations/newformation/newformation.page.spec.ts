import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformationPage } from './newformation.page';

describe('NewformationPage', () => {
  let component: NewformationPage;
  let fixture: ComponentFixture<NewformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
