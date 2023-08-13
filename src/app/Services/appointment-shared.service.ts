import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentSharedService {
  private _upcomingAppointmentsSubject = new BehaviorSubject<any[]>([]);
  upcomingAppointments$ = this._upcomingAppointmentsSubject.asObservable();


  getUpcomingAppointments(): any[] {
    return this._upcomingAppointmentsSubject.getValue();
  }
  
  updateUpcomingAppointments(appointments: any[]): void {
    this._upcomingAppointmentsSubject.next(appointments);
  }
}
