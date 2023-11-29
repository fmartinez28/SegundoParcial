import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormEditViewComponent } from './test-form-edit-view.component';

describe('TestFormEditViewComponent', () => {
  let component: TestFormEditViewComponent;
  let fixture: ComponentFixture<TestFormEditViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFormEditViewComponent]
    });
    fixture = TestBed.createComponent(TestFormEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
