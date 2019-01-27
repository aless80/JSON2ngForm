import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricbuilderComponent } from './rubricbuilder.component';

describe('RubricbuilderComponent', () => {
  let component: RubricbuilderComponent;
  let fixture: ComponentFixture<RubricbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
