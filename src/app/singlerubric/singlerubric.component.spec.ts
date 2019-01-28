import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerubricComponent } from './singlerubric.component';

describe('SinglerubricComponent', () => {
  let component: SinglerubricComponent;
  let fixture: ComponentFixture<SinglerubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
