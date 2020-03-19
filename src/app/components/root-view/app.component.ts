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
		this.initialDisplay = 'block';
		this.clickFromNav = boolVal;
	}

	closeMenu(boolVal) {
		this.clickFromNav = boolVal;
	}
}
