import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8090/member/login?email=serefcemgenel@gmail.com&password=123456';
const httpOptions = {
     headers: new HttpHeaders({
    '  Content-Type':  'application/json'
   })
  };

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
   let body = res;
   return body || { };
  }

  public login () {
     console.log("logging inside service");
    // return this.http.get(endpoint).pipe(
    // map(this.extractData));
    // catchError(this.handleError<any>('login'));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
   };
 }
}
