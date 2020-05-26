import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-users-filter-form',
	templateUrl: './users-filter-form.component.html',
	styleUrls: [ './users-filter-form.component.scss' ]
})
export class UsersFilterFormComponent implements OnInit {
	constructor() {}

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

	dropdownState: Boolean = false;

	toggleDropdown() {
		this.dropdownState = !this.dropdownState;
	}

	ngOnInit(): void {}
}
