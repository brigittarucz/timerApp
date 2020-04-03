import { Component, OnInit } from '@angular/core';
import { TaskFormSettingService } from 'src/app/services/task-form-setting/task-form-setting.service';

@Component({
	selector: 'app-task-form-modal',
	templateUrl: './task-form-modal.component.html',
	styleUrls: [ './task-form-modal.component.scss' ]
})
export class TaskFormModalComponent implements OnInit {
	constructor(private taskFormSettingService: TaskFormSettingService) {}

	ngOnInit(): void {}

	onSubmit(form) {
		console.log(form);
	}

	changeModalState() {
		this.taskFormSettingService.setModalState(false);
	}
}
