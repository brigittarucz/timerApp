import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-filter-form',
  templateUrl: './history-filter-form.component.html',
  styleUrls: ['./history-filter-form.component.css']
})
export class HistoryFilterFormComponent implements OnInit {
  buttonState = true;
  btnAnimate = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleButton(state) {
    this.buttonState = state;
    this.btnAnimate = state;
    if(this.buttonState) {
      console.log('Check in got clicked');
    } else {
      console.log('Tasks got clicked')
    }
  }

}
