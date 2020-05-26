import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserAccessModalComponent } from '../../ui-artifacts/user-access-modal/user-access-modal.component';

@Component({
	selector: 'app-user-access',
	templateUrl: './user-access.component.html',
	styleUrls: [ './user-access.component.scss' ]
})
export class UserAccessComponent implements OnInit {
	constructor(public matDialog: MatDialog, private router: Router) {}

	ngOnInit(): void {}

	openModal() {
		if (window.innerWidth > 800) {
			const dialogConfig = new MatDialogConfig();
			dialogConfig.disableClose = true;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '50%';
			const modalDialog = this.matDialog.open(UserAccessModalComponent, dialogConfig);
		} else {
			this.router.navigate([ 'add-pos-user-access' ]);
		}
	}
}
