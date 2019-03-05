import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpInfoComponent } from './create-emp-info.component';

describe('CreateEmpInfoComponent', () => {
  let component: CreateEmpInfoComponent;
  let fixture: ComponentFixture<CreateEmpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
