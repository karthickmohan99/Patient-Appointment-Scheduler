import { Component } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup, Validators,ValidatorFn,ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
       
  loginForm:FormGroup
  filterdata: any;
  user: any=[];
  constructor(private fb: FormBuilder, private toast: ToastrService ,private router: Router) {}

  ngOnInit(): void {
  this.loginForm = this.fb.group({
    
    mobileNumber: ['', [Validators.required ,Validators.pattern(/^[0-9]{10}$/)]],
    password: ['', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
    
  });
}

       onSubmit(){

        console.log(this.loginForm.value,"login value")
        console.log(this.loginForm.get('mobileNumber')?.value,'emailrsss')
        this.user= JSON.parse(localStorage.getItem('form-data') || '{}');
        console.log(this.user,"localstorage data")

        this.filterdata=this.user.find((dta:any)=>dta.mobileNumber == this.loginForm.get('mobileNumber')?.value &&dta.password == this.loginForm.get('password')?.value);
        console.log( this.filterdata ,'filter data');
        if(this.filterdata){
          this.toast.success('Successfully LoggedIn!');
          this.router.navigate(['/patient'])
        }else if(this.loginForm.get('mobileNumber')?.value===Role.DoctorNumber &&  this.loginForm.get('password')?.value=== Role.DoctorPassword ){

          this.router.navigate(['/doctor'])

        }else{
              this.toast.error('Login Failed !');
        }

      }
}

export enum Role {
  DoctorNumber = '1234567890',
  DoctorPassword = 'Doctor@123'
}