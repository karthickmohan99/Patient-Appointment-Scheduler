import { Component, OnInit } from '@angular/core';
import {PatientService}from '../../Services/patient.service'
import { MatDialog } from '@angular/material/dialog';
import{ConfirmationDialogComponent}from'../../Utilities/confirmation-dialog/confirmation-dialog.component'
import {AppointmentSharedService} from '../../Services/appointment-shared.service'
import {AppointmentService} from '../../Services/appointment.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{

  availableTimeSlots: any[] = []

  patientNames: { [timeSlotId: number]: string } = {};


  constructor(private apiService: PatientService ,private dialog: MatDialog,private sharedService: AppointmentSharedService,private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    
    
    this.apiService.getAvailableTimeSlots().subscribe((data: any) => {
     
      console.log(JSON.stringify(data,null,2),"api data")
      this.availableTimeSlots = data;
    });
  }

  bookAppointment(timeSlot:any,patientName:string): void {
    // Send a request to your API to book the appointment
    this.patientNames[timeSlot.id] = patientName;
    this.apiService.bookAppointment(timeSlot.doctor.name,timeSlot.startTime,patientName).subscribe((response: any) => {
      
      console.log(response)

      this.appointmentService.getUpcomingAppointments().subscribe((response:any)=>{
        this.sharedService.updateUpcomingAppointments(response);
         
      })
      //display dialogue
    this.dialog.open(ConfirmationDialogComponent,{
        data:{
          doctorName: timeSlot.doctor.name,
          startTime: timeSlot.startTime,
        },
       });
   
     
    },
    (error:any)=>{
       console.log(error);
    }
    );
  }
}
