import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu-sidebar',
	templateUrl: './menu-sidebar.component.html',
	styleUrls: [ './menu-sidebar.component.css' ]
})
export class MenuSidebarComponent implements OnInit {
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
