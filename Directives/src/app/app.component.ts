import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [0, 2, 4, 6, 8, 10];

  title = 'Directives';
  onlyOdd = false;

  value = 100;
}
