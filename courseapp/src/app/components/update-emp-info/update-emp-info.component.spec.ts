import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpInfoComponent } from './update-emp-info.component';

describe('UpdateEmpInfoComponent', () => {
  let component: UpdateEmpInfoComponent;
  let fixture: ComponentFixture<UpdateEmpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
