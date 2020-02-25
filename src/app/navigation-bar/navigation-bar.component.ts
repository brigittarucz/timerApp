import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: [ './navigation-bar.component.css' ]
})
export class NavigationBarComponent implements OnInit {
	toggleNav = false;
	displayNav = 'none';

	@Output() menuClick = new EventEmitter();
	toggleSide = true;

	constructor() {}

	toggleNavbar() {
		this.toggleNav = !this.toggleNav;
		if (this.toggleNav) {
			this.displayNav = 'block';
		} else {
			this.displayNav = 'none';
		}
	}

	toggleSidebar() {
		// this.toggleSide = !this.toggleSide;
		this.menuClick.emit(this.toggleSide);
	}

	ngOnInit(): void {}
}
