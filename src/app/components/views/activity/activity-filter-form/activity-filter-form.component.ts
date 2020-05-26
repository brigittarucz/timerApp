import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-filter-form',
	templateUrl: './activity-filter-form.component.html',
	styleUrls: [ './activity-filter-form.component.scss' ]
})
export class ActivityFilterFormComponent implements OnInit {
	// Mock up of Select option fields
	testOptions = [
		{ name: 'Wiredelta' },
		{ name: 'Adobe' },
		{ name: 'Forbes' },
		{ name: 'Microsoft' },
		{ name: 'Selligent Marketing Cloud' },
		{ name: 'Mc Donalds' },
		{ name: 'KFC' },
		{ name: 'Agricultural Bank of China' }
	];

	constructor() {}

	dropdownState: Boolean = false;

	toggleDropdown() {
		this.dropdownState = !this.dropdownState;
	}

	ngOnInit(): void {}
}
