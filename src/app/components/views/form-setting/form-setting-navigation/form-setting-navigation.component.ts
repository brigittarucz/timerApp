import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskFormModalComponent } from '../../../ui-artifacts/task-form-modal/task-form-modal.component';
import { TaskFormSettingService } from 'src/app/services/task-form-setting/task-form-setting.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form-setting-navigation',
	templateUrl: './form-setting-navigation.component.html',
	styleUrls: [ './form-setting-navigation.component.scss' ]
})
export class FormSettingNavigationComponent implements OnInit {
	constructor(
		public matDialog: MatDialog,
		private taskFormSettingService: TaskFormSettingService,
		private router: Router
	) {}

	ngOnInit(): void {}
	openModal() {
		if (window.innerWidth > 800) {
			this.taskFormSettingService.setModalState(true);

			const dialogConfig = new MatDialogConfig();
			dialogConfig.disableClose = true;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '50%';
			const modalDialog = this.matDialog.open(TaskFormModalComponent, dialogConfig);
		} else {
			this.router.navigate([ '/add-task-form-setting' ]);
		}
	}
}
