import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import ITest from 'src/interfaces/ITest';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(
    private http: HttpClient
  ) { }
  public getAllTests(): Observable<ITest[]>{
    console.log(`${environment.apiUrl}/admin/tests`);
    return this.http.get<ITest[]>(`${environment.apiUrl}/admin/tests`);
  }
  public getTest(id: number): Observable<ITest>{
    return this.http.get<ITest>(`${environment.apiUrl}/admin/tests/${id}`);
  }
  public deleteTest(id: number): Observable<ITest>{
    return this.http.delete<ITest>(`${environment.apiUrl}/admin/tests/${id}`);
  }
  public updateTest(test: ITest): Observable<ITest>{
    return this.http.put<ITest>(`${environment.apiUrl}/admin/tests/${test.id!}`, test);
  }
  public createTest(test: ITest): Observable<ITest>{
    return this.http.post<ITest>(`${environment.apiUrl}/admin/tests`, test);
  }
}
