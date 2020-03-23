import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-filter-form',
	templateUrl: './activity-filter-form.component.html',
	styleUrls: [ './activity-filter-form.component.scss' ]
})
export class ActivityFilterFormComponent implements OnInit {
  constructor() {}

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {}
}
