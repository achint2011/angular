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
import { Component, Input, ViewEncapsulation, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked {
@Input() element: {type:string,name:string, content:string };
@Input() name: string;
constructor(){
  console.log("Constructor Called!");
}
ngOnInit(){
  console.log("ngOnInit Called!");
}
ngOnChanges(changes: SimpleChanges){
  console.log("ngOnChanges Called!");
}
ngDoCheck(){
  console.log("ngDocheck Called!");
}
ngAfterContentInit() {
  console.log("ngAfterContentInit Called!");
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked Called!");
}
}
