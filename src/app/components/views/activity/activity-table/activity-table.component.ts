import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-activity-table',
	templateUrl: './activity-table.component.html',
	styleUrls: [ './activity-table.component.scss' ]
})
export class ActivityTableComponent implements OnInit {
	currentDate: Date = new Date();

	constructor() {}

	ngOnInit(): void {}

	buttonState: Boolean = true;

	animState = {
		btn1: true,
		btn2: false,
		currentAnim: '',
		play: false
	};

	onToggleButton() {
		this.buttonState = !this.buttonState;
		if (this.buttonState) {
			this.animState.btn1 = true;
			this.animState.btn2 = false;

			this.animState.currentAnim = 'btn-switcher__animate__reverse';
			// console.log('Check in got clicked');
		} else {
			this.animState.btn1 = false;
			this.animState.btn2 = true;

			this.animState.currentAnim = 'btn-switcher__animate';
			// console.log('Tasks got clicked')
		}

		this.animState.play = true;
	}
}
