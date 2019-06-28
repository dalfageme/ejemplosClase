import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuote } from '../interfaces/IQuote';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';
  public quotesEmitter: EventEmitter<IQuote>;

  constructor(private httpClient: HttpClient) {
    this.quotesEmitter = new EventEmitter();
    setInterval(() => {
      this.getQuote();
    }, 2 * 1000);
  }

  getQuote(): void {
    this.httpClient.get(this.apiUrl).pipe(
      map((resp: any) => {
        return {
          quote: resp.value,
          image: resp.icon_url,
          date: new Date(resp.created_at),
        };
      })
    ).subscribe((quote) => {
      this.quotesEmitter.emit(quote);
    });
  }
}
