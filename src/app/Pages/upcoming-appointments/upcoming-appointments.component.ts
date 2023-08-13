import { Component } from '@angular/core';
import {AppointmentService} from '../../Services/appointment.service'
import{AppointmentSharedService}from'../../Services/appointment-shared.service'
@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent {

  upcomingAppointments: any[] = [];

  constructor(private appointmentService: AppointmentService,private sharedService: AppointmentSharedService) {}

  ngOnInit(): void {
    this.sharedService.upcomingAppointments$.subscribe((appointments: any[]) => {
      this.upcomingAppointments = appointments;
    });
  

  }

 
}
