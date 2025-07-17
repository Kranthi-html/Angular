

import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators,AsyncValidatorFn  } from '@angular/forms';
import { Observable, of } from 'rxjs';
function mustContainQuestionMark(control : AbstractControl){
    if(control.value.includes('?')) {
      return null;
    }
      return {doesNotContainQuestionMark : true}
  }
 function emailIsUnique(control :AbstractControl) {
      if(control.value !== 'test@example.com' ) {
           return of(null);
      }
      return of({notUnique :true});
 } 
@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators:[Validators.email,Validators.required],
      asyncValidators:[emailIsUnique]
    }),
    password: new FormControl('',{
      validators:[Validators.required,Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  get emailIsInvalid() {
      return (this.form.controls.email.touched && 
               this.form.controls.email.dirty &&
                this.form.controls.email.invalid);
  }

  get passwordIsInvalid() {
      return (this.form.controls.password.touched && 
               this.form.controls.password.dirty &&
                this.form.controls.password.invalid);
  }
   onSubmit(){
     //this.form.value.email

      console.log(this.form);
      const enteredEmail = this.form.value.email;
      const enteredPassword = this.form.value.password;
      console.log(enteredEmail,enteredPassword);
   }
}
// import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { debounceTime } from 'rxjs';
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports :[FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//      private form = viewChild.required<NgForm>('form');
//      private destoryDef = inject(DestroyRef);
//       constructor() {
//         const savedForm = window.localStorage.getItem('saved-login-from');
//            if(savedForm) {
//             const loadedFormData = JSON.parse(savedForm);
//             const savedEmail =loadedFormData.email;
//             setTimeout(()=>{
//             this.form().controls['email'].setValue(savedEmail);
//           },1);
//         afterNextRender(()=>{
//           const subscrition =  this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
//             //next :(value) => console.log(value.email)
//             next : (value) => window.localStorage.setItem('saved-login-form',
//               JSON.stringify({email:value.email}))
//           });
//           this.destoryDef.onDestroy(()=>subscrition?.unsubscribe());
//         });
//       }
//     }
//   onSubmit(formData:NgForm) {
//     // console.log(form);
//       if(formData.form.invalid) {
//          // formData.from.valid;
//          return;
//       } 
//     const enteredEmail = formData.form.value.email;
//      const enteredPassword = formData.form.value.password;
//     console.log(enteredEmail,enteredPassword);
//     formData.form.reset();

//   }
// }
