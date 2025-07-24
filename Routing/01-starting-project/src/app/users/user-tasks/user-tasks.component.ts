import { Component, input,inject, computed, OnInit, DestroyRef } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
//import { ResolveFn } from '@angular/router';
@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports : [RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent  {
  //userId = input.required<string>();
  //userName = ''; 
  userName = input.required<string>();
  message = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destoryRef = inject(DestroyRef);
  //private activatedRoute = inject(ActivatedRoute);
   
    /
  //userName = computed(()=>this.userService.users.find(u => u.id === this.userId())?.name);

  // ngOnInit(): void {
  //    console.log("h");
  //   console.log(this.activatedRoute.snapshot);
  //   const subscrition = this.activatedRoute.paramMap.subscribe({
  //     next : (paramMap) => {
  //      this.userName =  this.userService.users.find(u => u.id === paramMap.get('userId'))?.name || '';}
  //   });
  //   this.destoryRef.onDestroy(() => subscrition.unsubscribe());
  // }
}
export const resolveUserName: ResolveFn<string> = (
  activatedRoute : ActivatedRouteSnapshot, 
  routerState:RouterStateSnapshot) =>{
     const userService =  inject(UsersService);
     const userName = userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))
     ?.name || '';
    return  userName;
  };

  export const resolveTitle: ResolveFn<string> = (
    activatedRoute : ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ) =>{
      resolveUserName(activatedRoute,routerState) + '\'s Tasks' // Max's tasks
  } 
