import { Component } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import ITest from 'src/interfaces/ITest';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent {
  constructor(
    private testService: TestsService
  ){}
  public tests?: ITest[];
  ngOnInit(){
    this.testService.getAllTests().subscribe({
      next: (res) => {
        this.tests = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Se obtuvieron los tests de admin");
      }
    })
  }
}
