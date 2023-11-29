import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListItemComponent } from './test-list-item.component';

describe('TestListItemComponent', () => {
  let component: TestListItemComponent;
  let fixture: ComponentFixture<TestListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestListItemComponent]
    });
    fixture = TestBed.createComponent(TestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
