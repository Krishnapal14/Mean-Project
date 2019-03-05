import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpInfoComponent } from './get-emp-info.component';

describe('GetEmpInfoComponent', () => {
  let component: GetEmpInfoComponent;
  let fixture: ComponentFixture<GetEmpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
