import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-access-modal',
	templateUrl: './user-access-modal.component.html',
	styleUrls: [ './user-access-modal.component.scss' ]
})
export class UserAccessModalComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	navigateModal() {
		if (window.innerWidth < 800) {
			this.router.navigate([ '/user-access' ]);
		}
	}

	onSubmit(form) {
		console.log(form);
	}
}
