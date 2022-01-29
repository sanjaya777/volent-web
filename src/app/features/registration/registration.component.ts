import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { InterestsDto } from 'src/app/core/models/interests-dto';
import { RegistrationService } from 'src/app/features/registration/registration.service';
import { DistrictList } from 'src/app/core/enums/district.enum';
import { ProfessionList } from 'src/app/core/enums/profession.enum';
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
  interests: InterestsDto[] =[];
  districts:any;
  professions:any;

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

  
  
  constructor(private formBuilder: FormBuilder, private registrationservice: RegistrationService) { 

  }

  ngOnInit(): void {
    this.createRegisterForm();
    this.getAllInterestsAreas();
    this.districts = DistrictList;
    this.professions = ProfessionList;
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
      interests: new FormArray([]),//['', Validators.required],
      notifications: ['', Validators.required]
    });
  }

  get interestFormArray() {
    return this.registerForm2.controls.interests as FormArray;
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

  getAllInterestsAreas()
  {
    this.registrationservice.getAllInterestAreas().subscribe(
      data=>{
        this.interests = data;
        this.addCheckboxesToForm();
      }
    )
  }

  private addCheckboxesToForm() {
    this.interests.forEach(() => this.interestFormArray.push(new FormControl(false)));
  }

}
