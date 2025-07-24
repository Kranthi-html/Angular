import { RedirectCommand, Router, Routes } from "@angular/router";
 import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route,segement) => {
      const router = inject(Router); 
    const shouldGetAccess = Math.random();
     if(shouldGetAccess < 0.5 ) {
        return true;
     }
    return  new RedirectCommand(router.parseUrl('/unauthorized'));

}
export const routes: Routes = [
    {
        path:'', // < your-domain>
        component: NoTaskComponent,
        title :'No task selected'
    },
    // {
    //     path:'tasks' , // <your-domain> / taks
    //     component:TaskComponent,
    // },
    {
        path:'users/:userId',
        component:UserTasksComponent,
        children:userRoutes,
        canMatch:[dummyCanMatch],
        data :{
            message : 'Hello!'
        },
        resolve:{
            userName :resolveUserName 
        },
    },
    {
        path :'**',
        component:NotFoundComponent
    }
] 