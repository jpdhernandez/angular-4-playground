import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  // Element will now be available to parent component hosting server-element
  // 'srvElement is an alias'
  // @Input makes properties bindable from outside from parent component using this compnent
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {

  }

}
