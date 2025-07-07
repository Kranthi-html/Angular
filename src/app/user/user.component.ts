import { Component, computed, EventEmitter, Input,input, Output,output}  from '@angular/core';
 //import {computed,signal} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required:true}) id!:string ;
 @Input({required:true}) avatar!:string ;
 @Input({required:true}) name!:string;

 @Output() select = new EventEmitter();

 /**
  * @Output() select = new EventEmitter<string>(); 
  *  this is also allowed with strict ype 
  */
 //   this will be used with Output decerator  
 
  //select = output<string>();

  // for output() , new need to create an eventemmiter object , it already created by default

//   avatar = input.required<string>();
//   name = input.required<string>();
//   imagePath = computed(()=>{
// return 'assets/users/' + this.avatar();
//   });
 get imagePath() {
    return 'assets/users/' + this.avatar
  }
   onSelectUser(){
    this.select.emit(this.id);
    ///  this.avatar.set();
   }

  // selectedUser = signal(DUMMY_USERS[randomIndex]); 
  
  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)
  // // get imagePath() {
  // //   return 'assets/users/' + this.selectedUser.avatar
  // // }
  // onSelectUser(){
  //  const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
  //  this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //  /* this.selectedUser = DUMMY_USERS[randomIndex];*/
  // }

}
