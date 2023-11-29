import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestListItemComponent } from './components/test-list-item/test-list-item.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestListViewComponent } from './pages/test-list-view/test-list-view.component';
import { TestFormEditViewComponent } from './pages/test-form-edit-view/test-form-edit-view.component';
import { TestFormCreateViewComponent } from './pages/test-form-create-view/test-form-create-view.component';
import { TestsRoutingModule } from './tests.routing.module';



@NgModule({
  declarations: [
    TestListItemComponent,
    TestListComponent,
    TestFormComponent,
    TestListViewComponent,
    TestFormEditViewComponent,
    TestFormCreateViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestsRoutingModule
  ]
})
export class TestsModule { }
