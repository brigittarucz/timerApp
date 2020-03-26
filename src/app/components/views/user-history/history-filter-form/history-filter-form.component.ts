import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-filter-form',
  templateUrl: './history-filter-form.component.html',
  styleUrls: ['./history-filter-form.component.scss']
})
export class HistoryFilterFormComponent implements OnInit {
  buttonState = true;

  animState = {
    btn1: true,
    btn2: false,
    currentAnim: "",
    play: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onToggleButton() {
    this.buttonState = !this.buttonState;
    if(this.buttonState) {
      this.animState.btn1 = true;
      this.animState.btn2 = false;

      this.animState.currentAnim = 'btn-switcher__animate__reverse';
      // console.log('Check in got clicked');
    } else {
      this.animState.btn1 = false;
      this.animState.btn2 = true;

      this.animState.currentAnim = 'btn-switcher__animate';
      // console.log('Tasks got clicked')
    }

    this.animState.play = true;
  }

//  filter arrow

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }
}
