import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './Pages/patient/patient.component';
import { DoctorComponent } from './Pages/doctor/doctor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './Utilities/confirmation-dialog/confirmation-dialog.component';
import { UpcomingAppointmentsComponent } from './Pages/upcoming-appointments/upcoming-appointments.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './Pages/register/register.component'
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { LoginComponent } from './Pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorComponent,
    ConfirmationDialogComponent,
    UpcomingAppointmentsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),
    MatSelectModule,
  

    

    
  ],
  providers: [ provideAnimations(), // required animations providers
  provideToastr(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
