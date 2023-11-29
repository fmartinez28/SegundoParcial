import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ITest from 'src/interfaces/ITest';
import { TestsService } from '../../services/tests.service';

@Component({
  selector: 'app-test-list-item',
  templateUrl: './test-list-item.component.html',
  styleUrls: ['./test-list-item.component.scss']
})
export class TestListItemComponent {
  @Input() test!: ITest;
  constructor(
    private router: Router,
    private testService: TestsService
  ){}
  public edit(){
    this.router.navigate([`admin/tests/edit/${this.test.id!}`]);
  }
}
