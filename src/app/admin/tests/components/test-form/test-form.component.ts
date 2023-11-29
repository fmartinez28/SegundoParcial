import { Component, Input } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import ITest from 'src/interfaces/ITest';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  @Input() editing = false;
  public form!: FormGroup;
  public id?: number;
  constructor(
    private testsService: TestsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ){}
  public edit(){
    this.testsService.updateTest(this.formatTest()).subscribe(
      {
        next: (test) => {
          console.log(test);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Completado');
          this.router.navigate(['/admin/tests']);
        }
      }
    );
  }
  public create(){
    this.testsService.createTest(this.formatTest()).subscribe(
      {
        next: (test) => {
          console.log(test);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Completado');
          this.router.navigate(['/admin/tests']);
        }
      }
    )
  }

  ngOnInit(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      initials: ['', Validators.required],
      description: ['', Validators.required],
      isActive: [false, Validators.required],
      partCount: [0, [Validators.required, Validators.min(0)]]
    })

    if (this.editing){
      this.route.paramMap.pipe(
        tap((params) => {
          this.id = Number(params.get('id'));
        }),
        switchMap(() => this.testsService.getTest(this.id!))).subscribe(
          {
            next: (test) => {
              this.form.patchValue(test);
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => {
              console.log('Completado');
            }
          }
        )
    }
  }
  private formatTest(){
    const formattedTest: ITest = {
      id: this.id ? this.id : undefined,
      name: this.form.get('name')?.value,
      initials: this.form.get('initials')?.value,
      description: this.form.get('description')?.value,
      isActive: this.form.get('isActive') ? this.form.get('isActive')?.value : undefined,
    }
    console.info(formattedTest);
    return formattedTest;
  }
}
