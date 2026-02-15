import { Injectable } from '@angular/core';
import { DoctorCount } from './doctor-count';
import { PatientCount } from './patient-count';

@Injectable({
  providedIn: 'root',
})
export class CombinedCount {
  constructor(private countdoctors:DoctorCount, private countpatients:PatientCount){}
  totalCount():number{
    return this.countdoctors.CountDoctors() + this.countpatients.Patientcount()
  }
  
  
}
