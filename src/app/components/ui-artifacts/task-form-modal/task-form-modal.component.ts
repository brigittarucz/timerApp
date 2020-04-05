import { Component, OnInit } from '@angular/core';
import { TaskFormSettingService } from 'src/app/services/task-form-setting/task-form-setting.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-task-form-modal',
	templateUrl: './task-form-modal.component.html',
	styleUrls: [ './task-form-modal.component.scss' ]
})
export class TaskFormModalComponent implements OnInit {
	constructor(private taskFormSettingService: TaskFormSettingService, private router: Router) {}

	ngOnInit(): void {}

	onSubmit(form) {
		console.log(form);
	}

	changeModalState() {
		this.taskFormSettingService.setModalState(false);
		if (window.innerWidth < 800) {
			this.router.navigate([ '/form-setting' ]);
		}
	}
}
