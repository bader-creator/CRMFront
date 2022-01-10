import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsoppPage } from './detailsopp.page';

describe('DetailsoppPage', () => {
  let component: DetailsoppPage;
  let fixture: ComponentFixture<DetailsoppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsoppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsoppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
