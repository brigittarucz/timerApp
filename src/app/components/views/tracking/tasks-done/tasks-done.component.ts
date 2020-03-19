import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tasks-done',
	templateUrl: './tasks-done.component.html',
	styleUrls: [ './tasks-done.component.scss' ]
})
export class TasksDoneComponent implements OnInit {
	isTodayActive = true;
	isYesterdayActive = false;

	isNotOnMove = true;

	isOnMoveLeft = false;
	isOnMoveRight = false;

	constructor() {}

	ChangeState(el) {
		if (!el.target.classList[1]) {
			if (el.target.textContent === 'Yesterday') {
				// Toggle classes on and off

				this.isTodayActive = false;
				this.isYesterdayActive = true;
				this.isNotOnMove = false;
				this.isOnMoveRight = true;
				el.target.style.zIndex = '2';

				// Modify date in directive

				let yesterdayDate: any = new Date();
				yesterdayDate.setDate(yesterdayDate.getDate() - 1);
				this.pickedDate = yesterdayDate.toISOString();

				// Remove classes after animation finishes

				setTimeout(() => {
					this.isNotOnMove = true;
					this.isOnMoveRight = false;
					el.target.style.zIndex = '0';
				}, 1000);
			} else {
				this.isTodayActive = true;
				this.isYesterdayActive = false;
				this.isNotOnMove = false;
				this.isOnMoveLeft = true;
				el.target.style.zIndex = '2';

				let todayDate = new Date().toISOString();
				this.pickedDate = todayDate;

				setTimeout(() => {
					this.isNotOnMove = true;
					this.isOnMoveLeft = false;
					el.target.style.zIndex = '0';
				}, 1000);
			}
		}
	}

	pickedDate = new Date().toISOString();

	sessions = [
		{
			date: new Date().toISOString(),
			department: 'Development',
			category: 'AngularJS',
			client: 'AeroFit',
			project: 'AeroFit',
			time: '00:00:00'
		},
		{
			date: new Date().toISOString(),
			department: 'Development',
			category: 'AngularJS',
			client: 'AeroFit',
			project: 'AeroFit',
			time: '00:00:00'
		},
		{
			date: new Date('March 5, 2020 01:15:00').toISOString(),
			department: 'Development',
			category: 'HTML',
			client: 'AeroFit',
			project: 'AeroFit',
			time: '00:00:00'
		},
		{
			date: new Date('March 5, 2020 01:15:00').toISOString(),
			department: 'Development',
			category: 'AngularJS',
			client: 'AeroFit',
			project: 'AeroFit',
			time: '00:00:00'
		},
		{
			date: new Date('March 4, 2020 01:15:00').toISOString(),
			department: 'Development',
			category: 'AngularJS',
			client: 'AeroFit',
			project: 'AeroFit',
			time: '00:00:00'
		}
	];

	ngOnInit(): void {}
}
