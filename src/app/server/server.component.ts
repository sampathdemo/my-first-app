import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles: [`
    .online {
      color: white;
    }
    p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
  `]
})
export class ServerComponent {

  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? '	lightseagreen' : 'salmon'
  }

}
