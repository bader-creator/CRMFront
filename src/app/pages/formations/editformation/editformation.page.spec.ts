import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformationPage } from './editformation.page';

describe('EditformationPage', () => {
  let component: EditformationPage;
  let fixture: ComponentFixture<EditformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
