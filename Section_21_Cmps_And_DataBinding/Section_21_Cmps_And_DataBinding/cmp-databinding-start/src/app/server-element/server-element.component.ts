import { Component, OnInit,Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
 encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent  implements OnInit, OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,
 AfterViewInit,
AfterViewChecked,
OnDestroy{
   @Input('srvElement') element:{type : string, name : string, content :string};
  //serverElements:[{}];
  @Input() name :string;
  @ViewChild('heading') header :  ElementRef;
  serverElements = [{type : 'server', name:'TestServer', content:'Just a test!'}];
  constructor(){
    console.log("cons");
  }
  ngOnChanges(changes: SimpleChanges){
     console.log("onChanges");
     console.log(changes);
  }
  ngDoCheck(){
    console.log("ng do cehck call");
  }
  ngAfterContentInit(): void {
   console.log("ngAfter content"); 
  }
  ngAfterContentChecked(): void {
    console.log("checked");
  }
  ngAfterViewChecked(): void {
    console.log("view");
  }
  ngAfterViewInit(): void {
    console.log("viewInit");
  }
  ngOnDestroy(): void {
    console.log("ngDestoried");
    this.serverElements.slice(0,1);
  }
  ngOnInit(): void {
  }
}
