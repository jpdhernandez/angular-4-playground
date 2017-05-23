import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = "";
  userName = "";
  servers = ['Test1', 'Test2'];
  isToggled: boolean = true;
  toggleArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  resetUserName() {
    if (this.userName.length) {
      this.userName = "";
    }
  }

  toggleParagraph() {
    this.isToggled = !this.isToggled;
    this.toggleArray.push(new Date);
  }
}