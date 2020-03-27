import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';
import { Counter } from '../../../../models/counterModel';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StopTaskModalComponent } from '../../../ui-artifacts/stop-task-modal/stop-task-modal.component';

@Component({
	selector: 'app-timer-visual',
	templateUrl: './timer-visual.component.html',
	styleUrls: [ './timer-visual.component.scss' ]
})
export class TimerVisualComponent implements OnInit {
	counter: Counter;

	constructor(private trackingService: TrackingService, public matDialog: MatDialog, private router: Router) {}

	switchTaskCounterState(btn) {
		let btnStr = btn.target.outerHTML;
		if (btnStr.indexOf('pause.png') !== -1) {
			this.trackingService.pauseTaskCounter();
			btn.target.setAttribute('src', '../../assets/tracking/play.png');
		} else {
			this.trackingService.startCounterTask();
			btn.target.setAttribute('src', '../../assets/tracking/pause.png');
		}
	}

	stopTaskCounter() {
		if (window.innerWidth > 800) {
			const dialogConfig = new MatDialogConfig();
			dialogConfig.disableClose = false;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '60%';
			const modalDialog = this.matDialog.open(StopTaskModalComponent, dialogConfig);
		} else {
			this.router.navigate([ '/stop-task' ]);
		}
	}

	ngOnInit(): void {
		this.counter = this.trackingService.counterObjectTask;
	}
}
