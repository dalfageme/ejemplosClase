import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() quote: string;
  @Input() date: Date;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
