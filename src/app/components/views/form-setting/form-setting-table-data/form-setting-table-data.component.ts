import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskEntry } from '../../../../models/taskEntryModel';
import { Subscription, Subject } from 'rxjs';
import { UserHistoryService } from '../../../../services/user-history/user-history.service';
import { TaskFormSettingService } from 'src/app/services/task-form-setting/task-form-setting.service';

@Component({
	selector: 'app-form-setting-table-data',
	templateUrl: './form-setting-table-data.component.html',
	styleUrls: [ './form-setting-table-data.component.scss' ]
})
export class FormSettingTableDataComponent implements OnInit, OnDestroy {
	tasks: Array<TaskEntry> = [];
	currentMonthName: string = new Date().toLocaleString('default', { month: 'long' });
	taskDataSubscription: Subscription;

	totalWorkedTime: number = 0;

	triggerAnimation: boolean = false;

	modalClickSubject: Subject<boolean>;
	modalClickSubscription: Subscription;

	constructor(private historyService: UserHistoryService, private taskFormSettingService: TaskFormSettingService) {}

	ngOnInit(): void {
		this.doGetTableData();
		this.modalClickSubject = this.taskFormSettingService.isModalOpenChange;
		this.modalClickSubscription = this.modalClickSubject.subscribe((value) => {
			this.triggerAnimation = value;
		});
	}

	private doCountTotalWorkedTime() {
		this.totalWorkedTime = this.tasks.reduce((a, b) => a + (b.timeSpent || 0), 0);
	}

	private doGetTableData() {
		this.taskDataSubscription = this.historyService.doListenForUserTaskHistory().subscribe((res) => {
			if (res) {
				const { entries, name } = res;
				this.tasks = entries.tasks;
				this.currentMonthName = name;

				this.doCountTotalWorkedTime();
			}
		});

		this.historyService.doGetUserTaskHistoryForMonth(1);
	}

	ngOnDestroy(): void {
		this.taskDataSubscription.unsubscribe();

		this.modalClickSubscription.unsubscribe();
	}
}
