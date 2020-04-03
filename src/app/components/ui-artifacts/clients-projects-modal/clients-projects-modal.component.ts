import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-clients-projects-modal',
	templateUrl: './clients-projects-modal.component.html',
	styleUrls: [ './clients-projects-modal.component.scss' ]
})
export class ClientsProjectsModalComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	onSubmit(form) {
		console.log(form);
	}

	navigateModal() {
		if (window.innerWidth < 800) {
			this.router.navigate([ '/clients-projects' ]);
		}
	}
}
