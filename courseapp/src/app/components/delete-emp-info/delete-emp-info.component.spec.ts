import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpInfoComponent } from './delete-emp-info.component';

describe('DeleteEmpInfoComponent', () => {
  let component: DeleteEmpInfoComponent;
  let fixture: ComponentFixture<DeleteEmpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
