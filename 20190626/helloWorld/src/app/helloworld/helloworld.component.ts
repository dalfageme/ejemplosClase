import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Hola mundo';
  }

  ngOnInit() {
  }

}
