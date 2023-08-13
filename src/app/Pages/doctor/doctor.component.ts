import { Component } from '@angular/core';
import {AppointmentService} from '../../Services/appointment.service'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  upcomingAppointments: any[] = [];
  columnsToDisplay = ['patientName', 'date', 'cancel'];

  constructor(private appointmentService: AppointmentService){}

  ngOnInit(): void {
    this.loadUpcomingAppointments();

  }
  
  

  loadUpcomingAppointments(): void {
      this.appointmentService.getUpcomingAppointments().subscribe(
        (appointments: any[]) => {
          console.log(appointments,"APpointments_doctor")
          this.upcomingAppointments = appointments;
        },
        (error) => {
          console.error('Error loading upcoming appointments:', error);
        }
      );
    }

    cancelAppointment(appointmentId:number){
     this.appointmentService.deleteAppointment(appointmentId).subscribe((response)=>{
      console.log(response,'Appointment deleted successfully.')
      this.loadUpcomingAppointments();
     },(error)=>{
        console.log('Error deleting appointment:', error);
     })
    }

}
