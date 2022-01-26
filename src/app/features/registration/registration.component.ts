import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm1!: FormGroup;
  registerForm2!: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  isLinear = true;
  error = false;

  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm1 = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      nicOrPassportNo: ['', Validators.required],
      nationality: ['', Validators.required],
      contactNo: ['', Validators.required],
      houseNo: ['', Validators.required],
      lane: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      profession: ['', !Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.registerForm2 = this.formBuilder.group({
      interests: ['', Validators.required],
      notifications: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm1.valid && this.registerForm2.valid) {}
  }

  next() {
    this.error = true;
  }

  reset() {
    this.error = false;
    this.registerForm1.reset();
    this.registerForm2.reset();
  }
}
