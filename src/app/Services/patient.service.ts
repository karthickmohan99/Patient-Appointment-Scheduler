import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
private baseUrl='localhost:8081'
  constructor(private http:HttpClient) { }

  getAvailableTimeSlots(): Observable<any> {
    
    const url ='http://localhost:8081/api/time-slots/available'
   
    return this.http.get(url);
  }

  bookAppointment(doctorName:string,startTime:Date,patientName:string): Observable<any> {
   
        const url = 'http://localhost:8081/api/appointments';

    
    const payload = { 
      doctor_name:doctorName,
      startTime:startTime,
      patientName:patientName,
     };
     


    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(url, payload, { headers: headers });
  }
}
