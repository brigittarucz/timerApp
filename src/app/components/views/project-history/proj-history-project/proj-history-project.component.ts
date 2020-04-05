import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskEntry } from '../../../../models/taskEntryModel';
import { Subscription, Subject, Observable } from 'rxjs';
import { UserHistoryService } from '../../../../services/user-history/user-history.service';
import { mockProjHistory } from '../../../../models/mockData';
import { ProjectHistoryService } from 'src/app/services/project-history/project-history.service';

@Component({
	selector: 'app-proj-history-project',
	templateUrl: './proj-history-project.component.html',
	styleUrls: [ './proj-history-project.component.scss' ]
})
export class ProjHistoryProjectComponent implements OnInit, OnDestroy {
	tasks: Array<TaskEntry> = [];
	currentMonthName: string = new Date().toLocaleString('default', { month: 'long' });
	taskDataSubscription: Subscription;
	mockData;
	currentlyPickedClient: any = [
		{ client: 'undefined', activities: [ { activity: 'undefined', minutes: 0, entries: 0 } ] }
	];
	clientChangeSubject: Subject<string>;
	clientChangeSubscription: Subscription;
	totalWorkedTime: number = 0;

	constructor(private userHistoryService: UserHistoryService, private projectHistoryService: ProjectHistoryService) {}

	ngOnInit(): void {
		this.doGetTableData();
		this.doGetClientsAndProjects().then((value) => {
			this.mockData = value;
		});
		this.clientChangeSubject = this.projectHistoryService.getClient;
		this.clientChangeSubscription = this.clientChangeSubject.subscribe((value) => {
			this.mockData.forEach((element) => {
				if (element.client === value) {
					this.currentlyPickedClient = element;
					console.log(element);
				}
				return;
			});
		});
	}

	private doCountTotalWorkedTime() {
		this.totalWorkedTime = this.tasks.reduce((a, b) => a + (b.timeSpent || 0), 0);
	}

	private doGetTableData() {
		this.taskDataSubscription = this.userHistoryService.doListenForUserTaskHistory().subscribe((res) => {
			if (res) {
				const { entries, name } = res;
				this.tasks = entries.tasks;
				this.currentMonthName = name;

				this.doCountTotalWorkedTime();
			}
		});

		this.userHistoryService.doGetUserTaskHistoryForMonth(1);
	}

	async doGetClientsAndProjects() {
		return mockProjHistory;
	}

	ngOnDestroy(): void {
		this.taskDataSubscription.unsubscribe();
	}
}
