import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoppPage } from './listopp.page';

describe('ListoppPage', () => {
  let component: ListoppPage;
  let fixture: ComponentFixture<ListoppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
