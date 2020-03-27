import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';
import { Counter } from '../../../../models/counterModel';

@Component({
	selector: 'app-timer-visual',
	templateUrl: './timer-visual.component.html',
	styleUrls: [ './timer-visual.component.scss' ]
})
export class TimerVisualComponent implements OnInit {
	counter: Counter;

	constructor(private trackingService: TrackingService) {}

	ngOnInit(): void {
		this.counter = this.trackingService.counterObjectTask;
	}
}
