import { Component, OnInit } from '@angular/core';
import { QuotesService } from './services/quotes.service';
import { IQuote } from './interfaces/IQuote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chuckNorris';
  private currentQuote: IQuote;

  constructor(
    private quotesService: QuotesService
  ) {

  }

  ngOnInit() {
    this.quotesService.quotesEmitter.subscribe((quote) => {
      this.currentQuote = quote;
    });
  }
}
