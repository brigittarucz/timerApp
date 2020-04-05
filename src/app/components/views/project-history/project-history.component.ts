import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ProjectHistoryService } from 'src/app/services/project-history/project-history.service';

@Component({
	selector: 'app-project-history',
	templateUrl: './project-history.component.html',
	styleUrls: [ './project-history.component.scss' ]
})
export class ProjectHistoryComponent implements OnInit, OnDestroy {
	clientChangeSubject: Subject<string>;
	clientChangeSubscription: Subscription;
	clientChangeValue: string;
	constructor(private projectHistoryService: ProjectHistoryService) {}

	ngOnInit(): void {
		this.clientChangeValue = this.projectHistoryService.clientSelected;
		this.clientChangeSubject = this.projectHistoryService.getClient;
		this.clientChangeSubscription = this.clientChangeSubject.subscribe((value) => {
			this.clientChangeValue = value;
		});
	}

	ngOnDestroy() {
		this.clientChangeSubscription.unsubscribe();
	}
}
