import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output()serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();


  //newServerName = '';
  //newServerContent = ''; 
  
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  
  constructor() {

   }
   ngOnInit(): void {
     
   }
  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
       serverName:nameInput.value ,
        serverContent: this.serverContentInput.nativeElement.value;
       // serverContent:this.newServerContent});
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  })
}

  onAddBlueprint(nameInput : HTMLInputElement) {
    this.blueprintCreated.emit({
       serverName:nameInput.value ,
      serverContent:this.serverContentInput.nativeElement.value
       // serverContent:this.newServerContent});
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  })
}
}
