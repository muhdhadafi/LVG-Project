import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetCourseComponent } from './dotnet-course.component';

describe('DotnetCourseComponent', () => {
  let component: DotnetCourseComponent;
  let fixture: ComponentFixture<DotnetCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotnetCourseComponent]
    });
    fixture = TestBed.createComponent(DotnetCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
