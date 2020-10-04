import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  constructor(){
    setTimeout(() => {
    this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is :' + this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
