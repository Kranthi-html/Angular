import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
 // below using signal 
  // enteredTitle = ('');
  // enteredSummary = ('');
  // enteredDate = ('');

  private tasksService = inject(TasksService)   
  onCancel() {
    this.cancel.emit();
  }
  // onSubmit() {
  //    this.add.emit({
  //     title:this.enteredTitle,
  //     summary:this.enteredSummary,
  //     date:this.enteredDate,
  //    });
  // }
  onSubmit(){
    this.tasksService.addTask({
       title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    } , this.userId);
  }
}
