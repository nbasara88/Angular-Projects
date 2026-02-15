import { Component } from '@angular/core';
import { FormAuth } from '../../Services/form-auth';
import { Calls } from '../../Services/calls';
import { ResponseObj } from '../../Interfaces/response-obj';

@Component({
  selector: 'tdf',
  standalone: false,
  templateUrl: './tdf.html',
  styleUrl: './tdf.css',
})


export class Tdf {
constructor(public formAuth:FormAuth, private login:Calls){}
userId:string = ""
message:string = ""


onRegister(){
let loginType = this.formAuth.FormObject()
if(loginType !== false){
this.login.registerCall(loginType).subscribe((result:ResponseObj)=>{
this.userId = result.userId,
this.message = result.message
console.log(`Registration Complete Your User Id Is ${this.userId}`);

})
}}

onLogin(){
let loginType = this.formAuth.FormObject()
if(loginType !== false){
this.login.loginCall(loginType).subscribe((result:ResponseObj)=>{
this.userId = result.userId,
this.message = result.message
console.log(`${this.message} as user id # ${this.userId}`);
})
}}

get form(){
  return this.formAuth.form
}
get email (){
  return this.form.get("email")
}
 get password(){
  return this.form.get("password")!
 }


}