import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: [ './navigation-bar.component.css' ]
})
export class NavigationBarComponent implements OnInit {
	toggleNav = false;
	displayNav = 'none';

	constructor() {}

	toggleNavbar() {
		this.toggleNav = !this.toggleNav;
		if (this.toggleNav) {
			this.displayNav = 'block';
		} else {
			this.displayNav = 'none';
		}
	}

	ngOnInit(): void {}
}
