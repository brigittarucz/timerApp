import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'timer-app';
	clickFromNav = false;
	initialDisplay = 'none';

	constructor() {}

	openMenu(boolVal) {
		this.initialDisplay = 'block';
		this.clickFromNav = boolVal;
	}

	closeMenu(boolVal) {
		this.clickFromNav = boolVal;
	}
}
