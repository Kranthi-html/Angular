
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
@NgModule({
    declarations:[AppComponent,
        UserComponent], // for only module based components
    bootstrap:[AppComponent], // all root comonents added here
     imports:[BrowserModule,
        SharedModule,
    TasksModule] // only for standalone components
  // no need to add DatePipe in import that is laready part of import by defualt becuae angular provide it
    })
export class AppModule{

}