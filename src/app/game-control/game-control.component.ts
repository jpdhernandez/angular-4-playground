import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number: number = 0;
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  
  onStart() {
    this.interval = setInterval(() => {
      this.number++;
      this.intervalFired.emit(this.number);
      }, 1000);
  }

  onStop() {
    clearTimeout(this.interval);
  }

  constructor() { }

  ngOnInit() {
  }

}
