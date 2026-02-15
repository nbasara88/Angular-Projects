import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Cmp1 } from './cmp1/cmp1';
import { Cmp2 } from './cmp2/cmp2';
import { Cmp3 } from './cmp3/cmp3';

const routes: Routes = [
  {path: "cmp1", component:Cmp1},
  {path: "cmp2", component:Cmp2},
  {path:"cmp3", component:Cmp3},
  {path: "**", redirectTo:"Cmp1"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
