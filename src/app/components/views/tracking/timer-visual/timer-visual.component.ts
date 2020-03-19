import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../../../services/shared/counter.service";

@Component({
	selector: 'app-timer-visual',
	templateUrl: './timer-visual.component.html',
	styleUrls: [ './timer-visual.component.scss' ]
})
export class TimerVisualComponent implements OnInit {
	counter;

	constructor(private counterService: CounterService) {}

	ngOnInit(): void {
		this.counter = this.counterService.counter;
	}
}
