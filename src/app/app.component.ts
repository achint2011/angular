// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   username = '';
// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   serverElements = [{type:'server',name:'Testserver',content:'Just a test!'}];

//   onServerAdded(serverData: {serverName:string,serverContent:string,}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBlueprintAdded(blueprintData: {serverName:string,serverContent:string,}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//     });
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name='Siddhant'
   title = 'first-app';
  serverElement=[{type:'server', name:'Testserver',content:'Just a test!'}];

  onServerAdded(serverData:{serverName:string,serverContent: string}){
    this.serverElement.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent: string}){
    this.serverElement.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content:blueprintData.serverContent
    })
  }
  onChangeFirst(){
    this.serverElement[0].name='Changed!';
  }

}

