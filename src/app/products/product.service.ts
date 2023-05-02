import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _productUrl = '../api/products/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    //In real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console.
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //A client-side or network ocurred. Handle it accordingly.
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      //The backend returned an unsuccesful responde code.
      // THe response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
