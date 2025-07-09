import { Component } from '@angular/core';
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
   //selectedUserId = 'u1';
       selectedUserId?:string;
   get selectedUser(){
    return this.users.find((user)=>
      user.id === this.selectedUserId);
   }
   onSelectUser(id:string) {
   console.log('selected user with id' + id);
   }
}
