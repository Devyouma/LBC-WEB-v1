import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourComponent } from './new-cour.component';

describe('NewCourComponent', () => {
  let component: NewCourComponent;
  let fixture: ComponentFixture<NewCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
