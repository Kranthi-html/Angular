 import { NgModule } from "@angular/core";
 
 import { CardComponent } from "../shared/card/card.component";
 import { TaskComponent } from "./task/task.component";
 import { TasksComponent } from "./tasks.component";
 import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
 //import { DatePipe } from "@angular/common";
 
 import { CommonModule } from "@angular/common";
 import { FormsModule } from "@angular/forms";
 @NgModule({
    declarations :[CardComponent,
            TasksComponent,
            TaskComponent,
            NewTaskComponent],
     exports :[TasksComponent], 
     imports :[CommonModule,FormsModule,SharedModule]      
 })
 export class TasksModule{}
