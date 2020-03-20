import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'timer-app';
	clickFromNav = false;
	initialDisplay = 'none';
	windowWidth = window.innerWidth;

	constructor() {}

	openMenu(boolVal) {
		if (window.innerWidth < 800) {
			this.initialDisplay = 'block';
			this.clickFromNav = boolVal;
		} else {
			this.clickFromNav = boolVal;
		}
	}

	closeMenu(boolVal) {
		this.clickFromNav = boolVal;
	}
}
