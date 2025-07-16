import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports :[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
     private form = viewChild.required<NgForm>('form');
     private destoryDef = inject(DestroyRef);
      constructor() {
        const savedForm = window.localStorage.getItem('saved-login-from');
           if(savedForm) {
            const loadedFormData = JSON.parse(savedForm);
            const savedEmail =loadedFormData.email;
            setTimeout(()=>{
            this.form().controls['email'].setValue(savedEmail);
          },1);
        afterNextRender(()=>{
          const subscrition =  this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
            //next :(value) => console.log(value.email)
            next : (value) => window.localStorage.setItem('saved-login-form',
              JSON.stringify({email:value.email}))
          });
          this.destoryDef.onDestroy(()=>subscrition?.unsubscribe());
        });
      }
    }
  onSubmit(formData:NgForm) {
    // console.log(form);
      if(formData.form.invalid) {
         // formData.from.valid;
         return;
      } 
    const enteredEmail = formData.form.value.email;
     const enteredPassword = formData.form.value.password;
    console.log(enteredEmail,enteredPassword);
    formData.form.reset();

  }
}
