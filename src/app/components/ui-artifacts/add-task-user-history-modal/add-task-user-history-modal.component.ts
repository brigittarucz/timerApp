import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-task-user-history-modal',
	templateUrl: './add-task-user-history-modal.component.html',
	styleUrls: [ './add-task-user-history-modal.component.scss' ]
})
export class AddTaskUserHistoryModalComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	onSubmit(form) {
		console.log(form);
	}

	navigatePage() {
		if (window.innerWidth < 800) {
			this.router.navigate([ 'user-history' ]);
		}
	}
}
