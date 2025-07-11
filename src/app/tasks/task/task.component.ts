import { Component,EventEmitter,Input, Output ,inject} from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
 // imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({required:true}) task! :Task 
 // using takserive below  @Output() complte = new EventEmitter<string>();

 private taskService = inject(TasksService);
 onCompleteTask() {
   //this.complte.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
