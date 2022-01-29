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
  imageSrc!: string;

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
    if (this.createEventForm.valid) {
    }
    // "this.createEventForm.value.banner" gives the image url as a string
  }

  checkErrors() {
    this.error = true;
  }

  reset() {
    this.error = false;
    this.imageSrc = "";
    this.createEventForm.reset();
  }

  onFileChange(event: any) {
    const reader = new FileReader();
     
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
     
      reader.onload = () => {
    
        this.imageSrc = reader.result as string;
      
        this.createEventForm.patchValue({
          banner: reader.result
        });
      };
    
    }
  }
}
