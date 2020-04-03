import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackingService } from '../../../../services/tracking/tracking-service.service';
import { Counter } from '../../../../models/counterModel';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StopTaskTrackingModalComponent } from '../../../ui-artifacts/stop-task-tracking-modal/stop-task-tracking-modal.component';
import { Subject, Subscription } from 'rxjs';
import { mockStatistics } from '../../../../models/mockData';
import { TrackingStats } from 'src/app/models/statsModel';

@Component({
	selector: 'app-timer-visual',
	templateUrl: './timer-visual.component.html',
	styleUrls: [ './timer-visual.component.scss' ]
})
export class TimerVisualComponent implements OnInit, OnDestroy {
	counter: Counter;
	taskStatus: Subject<boolean>;
	dialogConfig: MatDialogConfig = new MatDialogConfig();
	modalDialog;
	taskStatusSubscription: Subscription;
	mockStats: TrackingStats[] = [
		{
			task: '',
			project: '',
			today: 0,
			month: 0,
			week: 0,
			year: 0
		}
	];

	constructor(private trackingService: TrackingService, public matDialog: MatDialog, private router: Router) {
		this.provideStatistics().then((resolve) => {
			this.mockStats = resolve;
		});
	}

	async provideStatistics() {
		return mockStatistics;
	}

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
			this.dialogConfig.disableClose = true;
			this.dialogConfig.id = 'modal-component';
			this.dialogConfig.width = '50%';
			this.modalDialog = this.matDialog.open(StopTaskTrackingModalComponent, this.dialogConfig);
		} else {
			this.router.navigate([ '/stop-task' ]);
		}
	}

	ngOnInit(): void {
		this.counter = this.trackingService.counterObjectTask;
		this.taskStatus = this.trackingService.taskStatus;
		this.taskStatusSubscription = this.taskStatus.subscribe((value) => {
			if (!value) {
				this.modalDialog.close();
				this.trackingService.stopCounterTask();
				this.counter = this.trackingService.counterObjectTask;
			}
		});
	}

	ngOnDestroy(): void {
		this.taskStatusSubscription.unsubscribe();
	}
}
