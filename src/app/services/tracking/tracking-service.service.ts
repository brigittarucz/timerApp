import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Counter } from '../../models/counterModel';

@Injectable({
	providedIn: 'root'
})
export class TrackingService {
	counterObjectCheckIn: Counter = {
		sec: 0,
		min: 0,
		h: 0
	};

	counterObjectTask: Counter = {
		sec: 0,
		min: 0,
		h: 0
	};

	secondsSinceCheckIn: number = 0;
	secondsSinceTaskStart: number = 0;

	isUserCheckedIn: boolean = false;
	userCheckInStatus: Subject<boolean> = new Subject<boolean>();

	isTaskInProgress: boolean = false;
	taskInProgressStatus: Subject<boolean> = new Subject<boolean>();

	checkInButtonText: string = 'Check In';

	counterIntervalCheckIn: any = null;
	counterIntervalTask: any = null;

	checkedIn: any = false;
	break: any = false;

	constructor() {
		this.userCheckInStatus.subscribe((value) => {
			this.isUserCheckedIn = value;
		});
		this.taskInProgressStatus.subscribe((value) => {
			this.isTaskInProgress = value;
		});
	}

	changeCheckInStatus() {
		this.userCheckInStatus.next(!this.isUserCheckedIn);
	}

	changeTaskInProgressStatus(booleanInput: boolean) {
		this.taskInProgressStatus.next(booleanInput);
	}

	get userStatus(): Subject<boolean> {
		return this.userCheckInStatus;
	}

	get taskStatus(): Subject<boolean> {
		return this.taskInProgressStatus;
	}

	changeCheckInButtonTextContent() {
		if (!this.isUserCheckedIn) {
			this.changeCheckInStatus();
			this.startCounterCheckIn();
			this.checkInButtonText = 'Break';
		} else if (this.isUserCheckedIn && !this.break) {
			this.break = !this.break;
			this.pauseCheckInCounter();
			this.checkInButtonText = 'Resume';
		} else if (this.isUserCheckedIn && this.break) {
			this.break = !this.break;
			this.startCounterCheckIn();
			this.checkInButtonText = 'Break';
		}
	}

	checkUserOut() {
		this.checkInButtonText = 'Check In';
		this.stopCounter();
	}

	pauseCheckInCounter() {
		clearInterval(this.counterIntervalCheckIn);
	}

	pauseTaskCounter() {
		clearInterval(this.counterIntervalTask);
	}

	getStartStatus() {
		return this.checkedIn;
	}

	get getButtonText(): string {
		return this.checkInButtonText;
	}

	get getCounter(): Counter {
		return this.counterObjectCheckIn;
	}

	startCounterCheckIn() {
		this.counterIntervalCheckIn = setInterval(() => {
			this.secondsSinceCheckIn++;
			this.updateCounterService(this.counterObjectCheckIn, this.secondsSinceCheckIn);
		}, 1000);
	}

	startCounterTask() {
		this.counterIntervalTask = setInterval(() => {
			this.secondsSinceTaskStart++;
			this.updateCounterService(this.counterObjectTask, this.secondsSinceTaskStart);
		}, 1000);
	}

	updateCounterService(counterObject, totalSeconds) {
		let hours = totalSeconds / 3600;
		let remains = totalSeconds % 3600;
		let minutes = remains / 60;
		let seconds = remains % 60;

		counterObject.sec = Math.round(seconds);
		counterObject.min = Math.floor(minutes);
		counterObject.h = Math.floor(hours);
		// console.log(counterObject);
	}

	stopCounter() {
		this.counterObjectCheckIn = {
			sec: 0,
			min: 0,
			h: 0
		};
		clearInterval(this.counterIntervalCheckIn);
		return this.counterObjectCheckIn;
	}

	stopCounterTask() {
		this.counterObjectTask = {
			sec: 0,
			min: 0,
			h: 0
		};
		clearInterval(this.counterIntervalTask);
		return this.counterObjectTask;
	}
}
