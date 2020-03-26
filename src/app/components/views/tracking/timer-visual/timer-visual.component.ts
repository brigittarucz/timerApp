import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';

@Component({
	selector: 'app-timer-visual',
	templateUrl: './timer-visual.component.html',
	styleUrls: [ './timer-visual.component.scss' ]
})
export class TimerVisualComponent implements OnInit {
	counter;

	constructor(private counterService: TrackingService) {}

	ngOnInit(): void {
		this.counter = this.counterService.counterObject;
	}
}
