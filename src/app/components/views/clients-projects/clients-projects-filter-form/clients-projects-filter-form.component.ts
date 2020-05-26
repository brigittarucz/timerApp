import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-clients-projects-filter-form',
	templateUrl: './clients-projects-filter-form.component.html',
	styleUrls: [ './clients-projects-filter-form.component.scss' ]
})
export class ClientsProjectsFilterFormComponent implements OnInit {
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
