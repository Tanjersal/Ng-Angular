import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;

  title = 'template-driven';
  defaultAnswer = 'pet';
  answer = '';

  gender = ['male', 'female'];

  username;
  userEmail;
  userSecret;

  suggestUsername() {
    const suggestedName = 'SuperUser';
  }

  onSubmit() {
    console.log(this.signupForm);
    this.username = this.signupForm.form.value.userData.username;
    this.userEmail = this.signupForm.form.value.email;
    this.userSecret = this.signupForm.form.value.secret;

    this.signupForm.resetForm();
  }
}
