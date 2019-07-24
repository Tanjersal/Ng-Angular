import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ComponentsDataBinding';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  ngOnInit() {

  }

  onGameStarted(data: number) {
    console.log(data);
    if (data % 2 === 0) {
      this.evenNumbers.push(data);
    } else {
      this.oddNumbers.push(data);
    }
  }
}
