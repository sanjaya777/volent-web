import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = false;

  constructor(private router : Router,private fb: FormBuilder) {
    this.initializeForm();
   }

  ngOnInit(): void {
    
  }

  initializeForm()
  {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['dashboard']);
    }
  }

  checkErrors() {
    this.error = true;
  }
}
