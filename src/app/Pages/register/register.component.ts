import { Component } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup, Validators,ValidatorFn,ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  localdata: any;
  constructor(private fb: FormBuilder, private toast: ToastrService ,private router: Router) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      patientName: ['', Validators.required],
      gender: ['', Validators.required],
      mobileNumber: ['', [Validators.required ,Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]] 
    });
  }

  

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log(formData,"register data")

      this.localdata = localStorage.getItem('form-data');
      console.log(this.localdata,'loc')
      if(this.localdata){
       let local = JSON.parse(this.localdata);
       local.push(this.registerForm.value)
       localStorage.setItem('form-data',JSON.stringify(local))
      }else{
        localStorage.setItem('form-data',JSON.stringify([this.registerForm.value]))
           }
           this.router.navigate(['/'])
        this.toast.success('Successfully Registered!');
   
     
     
     
    }
    
  }
  }


export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
};
