import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormArray } from '@angular/forms';

import { ForbiddenName } from './forbidden-validator.service';
import { reject } from 'q';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  signupForm: FormGroup;
  genders = ['male', 'female'];

  names = ['Fabien', 'Arnaud'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      // username: new FormControl(null, [Validators.required, this.forbidden.bind(this)]),
      username: new FormControl(null, [Validators.required], this.forbiddenAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);

    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  getControl() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbidden(name: FormControl): { [s: string]: boolean } | null {
    console.log('here');
    if (this.names.indexOf(name.value) !== - 1) {
      return { forbidden: true };
    } else {
      return null;
    }
  }

  forbiddenAsync(name: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resole) => {
      setTimeout(() => {
        if (this.names.indexOf(name.value) !== -1) {
          resole({ forbidden: true });
        } else {
          resole(null);
        }
      }, 5000);
    });
    return promise;
  }

}
