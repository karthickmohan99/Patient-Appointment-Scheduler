import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{PatientComponent}from './Pages/patient/patient.component'
import{DoctorComponent}from './Pages/doctor/doctor.component'
import {LoginComponent}from './Pages/login/login.component'
import{RegisterComponent}from './Pages/register/register.component'

const routes: Routes = [
  {
  path: 'patient',
  component: PatientComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: 'register',
    component: RegisterComponent 
  },
  {
    path: '',
    component: LoginComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
