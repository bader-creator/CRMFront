import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinePage } from './pipeline.page';

describe('PipelinePage', () => {
  let component: PipelinePage;
  let fixture: ComponentFixture<PipelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
