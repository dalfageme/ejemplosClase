import { Component, OnInit, Input } from '@angular/core';
import { ClicksService } from '../services/clicks.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  value: number;
  @Input() initValue: number;
  @Input() max: number;
  @Input() min: number;
  @Input() step: number;

  constructor(
    private clicksService: ClicksService
  ) {
  }

  increment() {
    this.clicksService.addClick();
    if (this.value + this.step <= this.max) {
      this.value += this.step;
    }
  }

  decrement() {
    this.clicksService.addClick();
    if ( this.value - this.step >= this.min) {
      this.value -= this.step;
    }
  }

  ngOnInit() {
    this.value = this.initValue;
  }
}
