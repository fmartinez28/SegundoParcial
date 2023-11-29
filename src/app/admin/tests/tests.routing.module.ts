import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { TestListViewComponent } from './pages/test-list-view/test-list-view.component';
import { TestFormEditViewComponent } from './pages/test-form-edit-view/test-form-edit-view.component';
import { TestFormCreateViewComponent } from './pages/test-form-create-view/test-form-create-view.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TestListViewComponent,
      },
      {
        path: 'edit/:id',
        component: TestFormEditViewComponent,
      },
      {
        path: 'add',
        component: TestFormCreateViewComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestsRoutingModule { }
