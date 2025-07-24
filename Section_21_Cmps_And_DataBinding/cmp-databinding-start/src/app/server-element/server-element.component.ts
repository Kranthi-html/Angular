import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent  implements OnInit{
   @Input('srvElement') element:{type : string, name : string, content :string};
  //serverElements:[{}];
  serverElements = [{type : 'server', name:'TestServer', content:'Just a test!'}];
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
