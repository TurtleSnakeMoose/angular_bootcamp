import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date: string;
  amount: number;
  height: number;
  miles = 1;

  onNameChange(value: string) {
    this.name = value
  }

  onDateChange(value: string) {
    this.date = value
  }

  onAmountChange(value: number) {
    this.amount = value
  }

  onHeightChange(value: number) {
    this.height = value
  }

  onMilesChange(value: number) {
    this.miles = value
  }

}
