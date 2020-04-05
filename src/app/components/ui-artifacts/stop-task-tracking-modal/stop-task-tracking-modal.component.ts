import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../services/tracking/tracking-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-stop-task-modal',
	templateUrl: './stop-task-tracking-modal.component.html',
	styleUrls: [ './stop-task-tracking-modal.component.scss' ]
})
export class StopTaskTrackingModalComponent implements OnInit {
	constructor(private trackingService: TrackingService, private router: Router) {}

	ngOnInit(): void {}

	onSubmit(form) {
		this.trackingService.changeTaskInProgressStatus(false);
	}

	saveExitTask() {
		if (window.innerWidth < 800) {
			this.router.navigate([ '/' ]);
		}
	}

	cancelExitTask() {
		if (window.innerWidth < 800) {
			this.router.navigate([ '/' ], { state: { data: { startTrack: 1 } } });
		}
	}
}
