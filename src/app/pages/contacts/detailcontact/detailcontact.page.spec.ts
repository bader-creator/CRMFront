import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontactPage } from './detailcontact.page';

describe('DetailcontactPage', () => {
  let component: DetailcontactPage;
  let fixture: ComponentFixture<DetailcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
