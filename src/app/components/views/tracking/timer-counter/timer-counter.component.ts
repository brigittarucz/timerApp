import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';
import { Subject, Subscription } from 'rxjs';
import { Counter } from '../../../../models/counterModel';
import { StopBeforeCheckoutModalComponent } from '../../../ui-artifacts/stop-before-checkout-modal/stop-before-checkout-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
	selector: 'app-timer-counter',
	templateUrl: './timer-counter.component.html',
	styleUrls: [ './timer-counter.component.scss' ]
})
export class TimerCounterComponent implements OnInit, OnDestroy {
	checkInButtonTextContent: string;
	checkInStatus: boolean = false;
	counter: Counter;
	checkInSubscription: Subscription;
	isUserCheckedIn: Subject<boolean>;

	constructor(public matDialog: MatDialog, private trackingService: TrackingService, private router: Router) {
		this.isUserCheckedIn = this.trackingService.userStatus;
		this.checkInSubscription = this.isUserCheckedIn.subscribe((value) => {
			this.checkInStatus = value;
		});
	}

	changeStatus() {
		this.trackingService.changeCheckInButtonTextContent();
		this.counter = this.trackingService.getCounter;
		this.checkInButtonTextContent = this.trackingService.getButtonText;
	}

	verifyStatusAndCheckOut(status) {
		// At the moment this in touch with the time tracking not the task tracking
		// Modify this to be connected with the task tracking
		console.log(status.textContent);
		if (this.trackingService.isTaskInProgress) {
			const dialogConfig = new MatDialogConfig();

			// if the user clicks outside the modal, it closes
			dialogConfig.disableClose = false;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '40%';
			const modalDialog = this.matDialog.open(StopBeforeCheckoutModalComponent, dialogConfig);
		} else {
			// Subscribe to the task observable in order to change check in status
			this.trackingService.changeCheckInStatus();
			this.trackingService.checkUserOut();
			this.checkInButtonTextContent = this.trackingService.checkInButtonText;
			this.counter = this.trackingService.counterObjectCheckIn;
		}
	}

	ngOnInit(): void {
		this.counter = this.trackingService.counterObjectCheckIn;
		this.checkInButtonTextContent = this.trackingService.getButtonText;
		// this.isUserCheckedIn.emit(this.trackingService.getStartStatus());
	}

	ngOnDestroy(): void {
		this.checkInSubscription.unsubscribe();
	}
}
