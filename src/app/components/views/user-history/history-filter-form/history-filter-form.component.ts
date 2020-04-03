import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskUserHistoryModalComponent } from '../../../ui-artifacts/add-task-user-history-modal/add-task-user-history-modal.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-history-filter-form',
	templateUrl: './history-filter-form.component.html',
	styleUrls: [ './history-filter-form.component.scss' ]
})
export class HistoryFilterFormComponent implements OnInit {
	buttonState = true;

	animState = {
		btn1: true,
		btn2: false,
		currentAnim: '',
		play: false
	};

	constructor(public matDialog: MatDialog, private router: Router) {}

	ngOnInit(): void {}

	onToggleButton() {
		this.buttonState = !this.buttonState;
		if (this.buttonState) {
			this.animState.btn1 = true;
			this.animState.btn2 = false;

			this.animState.currentAnim = 'btn-switcher__animate__reverse';
			// console.log('Check in got clicked');
		} else {
			this.animState.btn1 = false;
			this.animState.btn2 = true;

			this.animState.currentAnim = 'btn-switcher__animate';
			// console.log('Tasks got clicked')
		}

		this.animState.play = true;
	}

	//  filter arrow

	dropdownState: Boolean = false;

	toggleDropdown() {
		this.dropdownState = !this.dropdownState;
	}

	async openModal() {
		if (window.innerWidth > 800) {
			// configure the dialog to be opened with a MatDialogConfig object and actually open the modal
			const dialogConfig = new MatDialogConfig();

			// if the user clicks outside the modal, it closes
			dialogConfig.disableClose = true;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '50%';
			const modalDialog = this.matDialog.open(AddTaskUserHistoryModalComponent, dialogConfig);
		} else {
			this.router.navigate([ '/add-task-user-history' ]);
		}
	}
}
