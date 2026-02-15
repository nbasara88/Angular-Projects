import { Injectable } from '@angular/core';
import { IPatients } from '../interfaces/ipatients';

@Injectable({
  providedIn: 'root',
})
export class PatientCount {
   hospitalPatients:IPatients[] = [
    {
      name: "Joe",
      illness: "cold"
    },
    {
      name: "Amanada",
      illness: "Covid"
    }
  ];

  Patientcount():number{
    return this.hospitalPatients.length;
  }
  
}
