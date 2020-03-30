import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../services/tracking/tracking-service.service';

@Component({
	selector: 'app-stop-task-modal',
	templateUrl: './stop-task-modal.component.html',
	styleUrls: [ './stop-task-modal.component.scss' ]
})
export class StopTaskModalComponent implements OnInit {
	constructor(private trackingService: TrackingService) {}

	ngOnInit(): void {}

	onSubmit(form) {
		this.trackingService.changeTaskInProgressStatus(false);
	}
}
