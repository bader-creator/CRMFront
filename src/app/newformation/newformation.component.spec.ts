import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewformationComponent } from './newformation.component';

describe('NewformationComponent', () => {
  let component: NewformationComponent;
  let fixture: ComponentFixture<NewformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
