import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createEventForm!: FormGroup;
  error = false;

  constructor(private fb: FormBuilder) { 
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  initializeForm()
  {
    this.createEventForm = this.fb.group({
      'eventName': ['', Validators.required],
      'description': ['', Validators.required],
      'location': ['', Validators.required],
      'banner': ['', Validators.required],
      'district': ['', Validators.required],
      'interestType': ['', Validators.required],
    });
  }

  createEvent() {
    if (this.createEventForm.valid) {}
  }

  checkErrors() {
    this.error = true;
  }

  reset() {
    this.error = false;
    this.createEventForm.reset();
  }
}
