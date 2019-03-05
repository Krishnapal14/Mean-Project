import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistingComponent } from './courselisting.component';

describe('CourselistingComponent', () => {
  let component: CourselistingComponent;
  let fixture: ComponentFixture<CourselistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
