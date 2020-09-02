import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontactsPage } from './listcontacts.page';

describe('ListcontactsPage', () => {
  let component: ListcontactsPage;
  let fixture: ComponentFixture<ListcontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
