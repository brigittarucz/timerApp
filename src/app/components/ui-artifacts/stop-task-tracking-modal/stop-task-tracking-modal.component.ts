import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../services/tracking/tracking-service.service';

@Component({
	selector: 'app-stop-task-modal',
	templateUrl: './stop-task-tracking-modal.component.html',
	styleUrls: [ './stop-task-tracking-modal.component.scss' ]
})
export class StopTaskTrackingModalComponent implements OnInit {
	constructor(private trackingService: TrackingService) {}

	ngOnInit(): void {}

	onSubmit(form) {
		this.trackingService.changeTaskInProgressStatus(false);
	}
}
