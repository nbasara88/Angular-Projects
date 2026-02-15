import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Iform } from '../Interfaces/iform';
@Injectable({
  providedIn: 'root',
})
export class FormAuth {

  form: FormGroup;  
  constructor() {
    this.form = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(5)])
    });
  }
  
  FormObject(): false | Iform{
    if (!this.form.valid){return false} 
  
  return {
    email: this.form.get("email")?.value,
    password: this.form.get("password")?.value

  }}

}
