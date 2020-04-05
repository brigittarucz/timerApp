import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-filter-form',
	templateUrl: './activity-filter-form.component.html',
	styleUrls: [ './activity-filter-form.component.scss' ]
})
export class ActivityFilterFormComponent implements OnInit {

  // Mock up of Select option fields
  testOptions = [
    {name: 'Wiredelta'},
    {name: 'PMI'},
    {name: 'Sennheiser'},
    {name: 'Super long name of a client'},
    {name: 'Pepsi'},
    {name: 'Bobs burgers'},
    {name: 'Adobe'},
    {name: 'Moms Spaghetti'}
  ];

  constructor() {}

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {}
}
