import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-timer-counter',
	templateUrl: './timer-counter.component.html',
	styleUrls: [ './timer-counter.component.scss' ]
})
export class TimerCounterComponent implements OnInit {
	checkInButtonTextContent: string;
	checkInStatus: boolean = false;
	// @Output() isUserCheckedIn = new EventEmitter();
	counter: any;

	isUserCheckedIn: Subject<boolean>;

	constructor(private trackingService: TrackingService, private router: Router) {
		this.isUserCheckedIn = this.trackingService.userStatus;
		this.isUserCheckedIn.subscribe((value) => {
			this.checkInStatus = value;
		});
	}

	changeStatus() {
		if (!this.checkInStatus) {
			this.trackingService.changeCheckInStatus();
		}
		this.trackingService.changeCheckInButtonTextContent();
		this.counter = this.trackingService.getCounter;
		this.checkInButtonTextContent = this.trackingService.getButtonText;
		// this.checkInStatus = this.trackingService.getStartStatus();

		// this.isUserCheckedIn.emit(true);
	}

	verifyStatusAndCheckOut(status) {
		// At the moment this in touch with the time tracking not the task tracking
		// Modify this to be connected with the task tracking
		console.log(status.textContent);
		if (status.textContent === 'Break' || status.textContent === 'Resume') {
			console.log('Please stop current working task!');
		} else {
			this.trackingService.changeCheckInStatus();
		}
	}

	ngOnInit(): void {
		this.counter = this.trackingService.counterObject;

		// this.isUserCheckedIn.emit(this.trackingService.getStartStatus());

		this.checkInButtonTextContent = this.trackingService.getButtonText;
	}
}
