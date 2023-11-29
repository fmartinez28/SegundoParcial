import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListViewComponent } from './test-list-view.component';

describe('TestListViewComponent', () => {
  let component: TestListViewComponent;
  let fixture: ComponentFixture<TestListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestListViewComponent]
    });
    fixture = TestBed.createComponent(TestListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
