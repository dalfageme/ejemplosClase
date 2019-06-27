import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuote } from '../interfaces/IQuote';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) {
  }

  getQuote(): Observable<IQuote> {
    return this.httpClient.get(this.apiUrl).pipe(
      map((resp: any) => {
        return {
          quote: resp.value,
          image: resp.icon_url,
          date: new Date(resp.created_at),
        };
      })
    );
  }
}
