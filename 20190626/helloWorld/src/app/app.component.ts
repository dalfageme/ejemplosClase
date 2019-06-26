import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloWorld';
  valorInputInicio = 0;
  counters = [
    {
      min: 10,
      max: 20,
      step: 0.5,
      initValue: 15,
    },
    {
      min: -20,
      max: 0,
      step: 1,
      initValue: -10
    }
  ];

  addCounter() {
    this.counters.push({
      initValue: this.valorInputInicio,
      max: 3,
      min: -2,
      step: 0.2
    });
    this.valorInputInicio = 0;
  }
}
