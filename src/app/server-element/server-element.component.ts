// import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

// @Component({
//   selector: 'app-server-element',
//   templateUrl: './server-element.component.html',
//   styleUrls: ['./server-element.component.css'],
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class ServerElementComponent implements OnInit {
//  @Input('srvElement') element:{type: string, name: string, content: string}={type:'',name:'',content:''};
//  constructor(){

//  }
//  ngOnInit(){
//   element = {type:''}
// }
// }
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent {
@Input() element: {type:string,name:string, content:string }
}