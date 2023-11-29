import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormCreateViewComponent } from './test-form-create-view.component';

describe('TestFormCreateViewComponent', () => {
  let component: TestFormCreateViewComponent;
  let fixture: ComponentFixture<TestFormCreateViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFormCreateViewComponent]
    });
    fixture = TestBed.createComponent(TestFormCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
