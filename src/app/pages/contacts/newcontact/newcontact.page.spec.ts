import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontactPage } from './newcontact.page';

describe('NewcontactPage', () => {
  let component: NewcontactPage;
  let fixture: ComponentFixture<NewcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
