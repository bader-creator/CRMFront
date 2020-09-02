import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformationComponent } from './allformation.component';

describe('AllformationComponent', () => {
  let component: AllformationComponent;
  let fixture: ComponentFixture<AllformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
