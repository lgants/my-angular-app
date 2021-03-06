import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";
  serverCreated = false;
  servers = ['Testserver1', 'Testserver2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server name is ${this.serverName}`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // need to specify that that the type of this will be an HTML input element for TypeScript
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
