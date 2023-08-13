import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8081/api/appointments'
  constructor(private http: HttpClient) { }

  getUpcomingAppointments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteAppointment(appointmentId: number): Observable<any> {
    const url = `${this.apiUrl}/${appointmentId}`;
    return this.http.delete(url);
  }
}
