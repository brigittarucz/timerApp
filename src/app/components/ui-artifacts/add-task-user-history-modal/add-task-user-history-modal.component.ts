import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-task-user-history-modal',
	templateUrl: './add-task-user-history-modal.component.html',
	styleUrls: [ './add-task-user-history-modal.component.scss' ]
})
export class AddTaskUserHistoryModalComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	onSubmit(form) {
		console.log(form);
	}
}
