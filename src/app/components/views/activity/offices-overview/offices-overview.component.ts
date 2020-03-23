import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-offices-overview',
	templateUrl: './offices-overview.component.html',
	styleUrls: [ './offices-overview.component.scss' ]
})
export class OfficesOverviewComponent implements OnInit {
	dropdownState1: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	toggleDropdown1() {}
}
