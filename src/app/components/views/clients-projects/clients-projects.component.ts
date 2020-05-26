import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientsProjectsModalComponent } from '../../ui-artifacts/clients-projects-modal/clients-projects-modal.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-clients-projects',
	templateUrl: './clients-projects.component.html',
	styleUrls: [ './clients-projects.component.scss' ]
})
export class ClientsProjectsComponent implements OnInit {


	constructor(public matDialog: MatDialog, private router: Router) {}

	ngOnInit(): void {}

	openModal() {
		if (window.innerWidth > 800) {
			const dialogConfig = new MatDialogConfig();
			dialogConfig.disableClose = true;
			dialogConfig.id = 'modal-component';
			dialogConfig.width = '50%';
			const modalDialog = this.matDialog.open(ClientsProjectsModalComponent, dialogConfig);
		} else {
			this.router.navigate([ 'add-dep-clients-projects' ]);
		}
	}
}
