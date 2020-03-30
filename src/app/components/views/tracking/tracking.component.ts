import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalTrackingComponent } from '../../ui-artifacts/modal-tracking/modal-tracking.component';
import { TrackingService } from '../../../services/tracking/tracking-service.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-tracking',
	templateUrl: './tracking.component.html',
	styleUrls: [ './tracking.component.scss' ]
})
export class TrackingComponent implements OnInit {
	// Undone: Check out, stop and pause on visual timer, task history, visual timer's own counter service

	hasAddedTask: boolean = false;

	checkInStatus: boolean = false;
	isUserCheckedIn: Subject<boolean>;

	taskInProgressStatus: boolean = false;
	isTaskInProgress: Subject<boolean>;

	constructor(public matDialog: MatDialog, private router: Router, private trackingService: TrackingService) {
		if (router.getCurrentNavigation().extras.state !== undefined) {
			// Insert user's picks here and show visual tracker
			this.hasAddedTask = true;
		}
		this.isUserCheckedIn = this.trackingService.userStatus;
		this.isUserCheckedIn.subscribe((value) => {
			this.checkInStatus = value;
		});
		this.isTaskInProgress = this.trackingService.taskStatus;
		this.isTaskInProgress.subscribe((value) => {
			this.hasAddedTask = value;
		});
	}

	async openModal() {
		if (window.innerWidth > 800) {
			// configure the dialog to be opened with a MatDialogConfig object and actually open the modal
			const dialogConfig = new MatDialogConfig();

			// if the user clicks outside the modal, it closes
			dialogConfig.disableClose = false;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '60%';
			console.log(this.taskInProgressStatus);
			const modalDialog = this.matDialog.open(ModalTrackingComponent, dialogConfig);

			this.isTaskInProgress.subscribe((value) => {
				this.taskInProgressStatus = value;
				if (this.taskInProgressStatus === true) {
					modalDialog.close();
					this.trackingService.startCounterTask();
					this.hasAddedTask = true;
				} else {
					modalDialog.close();
				}
			});
		} else {
			try {
				await this.router.navigate([ '/add-task' ]);
			} catch (e) {
				console.error(e);
			}
		}
	}

	ngOnInit(): void {}

	viewState(state) {
		// configure which timer to show
		this.checkInStatus = this.trackingService.getStartStatus();
		if (this.checkInStatus && this.hasAddedTask) {
			// show timer
		}
	}
}
