import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TrackingService {
	counterObject: { sec: number; min: number; h: number } = {
		sec: 0,
		min: 0,
		h: 0
	};

	mySeconds: number = 0;
	myMinutes: number = 0;
	myHours: number = 0;

	isUserCheckedIn: boolean = false;
	userCheckInStatus: Subject<boolean> = new Subject<boolean>();

	checkInButtonText: string = 'Check In';

	// outputSeconds = '00';
	// outputMinutes = '00';
	// outputHours = '00';

	counterInterval: any = null;

	constructor() {
		this.userCheckInStatus.subscribe((value) => {
			this.isUserCheckedIn = value;
		});
	}

	changeCheckInStatus() {
		this.userCheckInStatus.next(!this.isUserCheckedIn);
	}

	get userStatus(): Subject<boolean> {
		return this.userCheckInStatus;
	}

	startCounter() {
		this.counterInterval = setInterval(() => {
			this.mySeconds++;
			if (this.mySeconds === 59) {
				this.mySeconds = 0;
				this.myMinutes++;
				if (this.myMinutes === 60) {
					this.myMinutes = 0;
					this.myHours++;
				}
			}
			if (this.myMinutes === 60) {
				this.myMinutes = 0;
				this.myHours++;
				// this.outputHours = this.formatCounter(this.myHours, this.outputHours);
			}

			// this.outputSeconds = this.formatCounter(this.mySeconds, this.outputSeconds);
			// this.outputMinutes = this.formatCounter(this.myMinutes, this.outputMinutes);

			this.updateCounterService(this.mySeconds, this.myMinutes, this.myHours);
		}, 1000);
	}

	updateCounterService(seconds, minutes, hours) {
		this.counterObject.sec = seconds;
		this.counterObject.min = minutes;
		this.counterObject.h = hours;
	}

	// formatCounter(value, output) {
	// 	if (value.toString(10).charAt(1) === '') {
	// 		output = '0' + value;
	// 		return output;
	// 	} else {
	// 		return value;
	// 	}
	// }

	checkedIn: any = false;
	break: any = false;

	changeCheckInButtonTextContent() {
		if (!this.isUserCheckedIn) {
			this.isUserCheckedIn = !this.isUserCheckedIn;
			this.startCounter();
			this.checkInButtonText = 'Break';
		} else if (this.isUserCheckedIn && !this.break) {
			this.break = !this.break;
			this.pauseCounter();
			this.checkInButtonText = 'Resume';
		} else if (this.isUserCheckedIn && this.break) {
			this.break = !this.break;
			this.startCounter();
			this.checkInButtonText = 'Break';
		}
	}

	getStartStatus() {
		return this.checkedIn;
	}

	get getButtonText(): string {
		return this.checkInButtonText;
	}

	get getCounter(): { sec: number; min: number; h: number } {
		return this.counterObject;
	}

	stopCounter() {
		this.counterObject = {
			sec: 0,
			min: 0,
			h: 0
		};
		clearInterval(this.counterInterval);
		return this.counterObject;
	}

	pauseCounter() {
		clearInterval(this.counterInterval);
	}
}
