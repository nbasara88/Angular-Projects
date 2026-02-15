import { Injectable } from '@angular/core';
import { IDoctors } from '../interfaces/idoctors';

@Injectable({
  providedIn: 'root',
})
export class DoctorCount {
   hospitalDoctors:IDoctors[] = [
    {name: "Dr.Bob",
      specialization: "Ortho"
    },
    {
      name: "dr Sally",
      specialization: "Oncology"
    }
  ];
  CountDoctors():number{
    return this.hospitalDoctors.length
  }

  
}
