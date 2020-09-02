import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformationsPage } from './listformations.page';

describe('ListformationsPage', () => {
  let component: ListformationsPage;
  let fixture: ComponentFixture<ListformationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListformationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
