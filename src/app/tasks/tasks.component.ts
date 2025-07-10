import { Component,Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './task/tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //@Input({required:true}) name!:string;
   isAddingTask  = false;
  @Input({required:true}) userId!: string;
  @Input({required:true}) name? :string; 
  // @Input() name : string | undefined;
  
    /*private tasksSerivce = new TasksService();
       not a single ton object , leads data inconsisstency
    */
  /*  private tasksService: TasksService;
  /   constructor(tasksService : TasksService){
        this.tasksService = tasksService;
     } 
         Depedency Injection using construr:
     */

   constructor(private  tasksService : TasksService){}

  get selectedUserTasks() {
     return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id : string) {
  
  }
   onStartAddTask() {
      this.isAddingTask = true;
   }
   onCloseAddTask() {
    this.isAddingTask = false;
   }
   onAddTask(taskData : NewTaskData) {
      
      // if want to add at begiing then use unshift() instaed of push()
      this.isAddingTask = false;
    }
}
