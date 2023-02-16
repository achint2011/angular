// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent implements OnInit{
//   serverCreationStatus = 'No server was created!';
//   allowNewServer = false;
//   serverName = 'achint';
//   serverCreated = false;
//   servers = ['TestServer','TestServer 2'];
//   constructor(){
//     setTimeout(()=>{
//       this.allowNewServer=true;
//     },2000);
//   }
//   ngOnInit(): void {

//   }
//   onCreateServer(){
//     this.serverCreated = true;
//     this.servers.push(this.serverName);
//     this.serverCreationStatus = 'Server was successfully created! Name is ' + this.serverName;
//   }
//   onUpdateServerName(event: Event){
//     this.serverName = (<HTMLInputElement>event.target).value;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
