import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalTrackingComponent } from '../../ui-artifacts/modal-tracking/modal-tracking.component';
import { TrackingService } from '../../../services/tracking/tracking-service.service';

@Component({
	selector: 'app-tracking',
	templateUrl: './tracking.component.html',
	styleUrls: [ './tracking.component.scss' ]
})
export class TrackingComponent implements OnInit {
	// Undone: Check out, stop and pause on visual timer, task history, visual timer's own counter service

	modalHeight = '250px';
	checkedIn = false;
	hasAddedTask = false;
	timer;

	constructor(public matDialog: MatDialog, private router: Router, private counterService: TrackingService) {
		if (router.getCurrentNavigation().extras.state !== undefined) {
			// Insert user's picks here and show visual tracker
			this.hasAddedTask = true;
		}
	}

	async openModal() {
		if (window.innerWidth > 800) {
			// configure the dialog to be opened with a MatDialogConfig object and actually open the modal
			const dialogConfig = new MatDialogConfig();

			// if the user clicks outside the modal, it closes
			dialogConfig.disableClose = false;
			dialogConfig.id = 'modal-component';
			// add 72.5px on each new field
			dialogConfig.width = '60%';

			const modalDialog = this.matDialog.open(ModalTrackingComponent, dialogConfig);
			modalDialog.componentInstance.emitService.subscribe((emittedValue) => {
				if (emittedValue === 'submitted' || emittedValue === 'notsubmitted') {
					modalDialog.close();
				}
				if (emittedValue === 'submitted') {
					this.hasAddedTask = true;
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
		this.checkedIn = this.counterService.getStartStatus();
		if (this.checkedIn && this.hasAddedTask) {
			// show timer
		}
	}
}
