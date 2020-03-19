import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	counter = {
		sec: '00',
		min: '00',
		h: '00'
	};

	mySeconds = 0;
	myMinutes = 0;
	myHours = 0;

	outputSeconds = '00';
	outputMinutes = '00';
	outputHours = '00';

	counterInterval = null;

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
				this.outputHours = this.formatCounter(this.myHours, this.outputHours);
			}

			this.outputSeconds = this.formatCounter(this.mySeconds, this.outputSeconds);
			this.outputMinutes = this.formatCounter(this.myMinutes, this.outputMinutes);

			this.updateCounterService(this.outputSeconds, this.outputMinutes, this.outputHours);
		}, 1000);
	}

	formatCounter(value, output) {
		if (value.toString(10).charAt(1) === '') {
			output = '0' + value;
			return output;
		} else {
			return value;
		}
	}

	constructor() {}

	checkedIn: any = false;
	break: any = false;
	buttonText: any = 'Check In';

	changeUserStatus() {
		if (!this.checkedIn) {
			this.checkedIn = !this.checkedIn;
			this.startCounter();
			this.buttonText = 'Break';
		} else if (this.checkedIn && !this.break) {
			this.break = !this.break;
			this.pauseCounter();
			this.buttonText = 'Resume';
		} else if (this.checkedIn && this.break) {
			this.break = !this.break;
			this.startCounter();
			this.buttonText = 'Break';
		}
	}

	getButtonText() {
		return this.buttonText;
	}

	getStartStatus() {
		return this.checkedIn;
	}

	updateCounterService(seconds, minutes, hours) {
		this.counter.sec = seconds;
		this.counter.min = minutes;
		this.counter.h = hours;
	}

	getCounter() {
		return this.counter;
	}

	stopCounter() {
		this.counter = {
			sec: '00',
			min: '00',
			h: '00'
		};
		clearInterval(this.counterInterval);
		return this.counter;
	}

	pauseCounter() {
		clearInterval(this.counterInterval);
	}
}
