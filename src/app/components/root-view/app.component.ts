import { Component, Input } from '@angular/core';
import { MenuStateService } from '../../services/shared/menu-state.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'timer-app';

	openDesktop: boolean = false;
	openMobile: boolean = false;
	initialDisplay: string = 'none';
	isNavigIconClose: Subject<boolean>;

	isLoginVisible = true;

	constructor(private menuStateService: MenuStateService, private route: Router) {
		this.isNavigIconClose = this.menuStateService.navbarStatus;

		this.isNavigIconClose.subscribe((value) => {
			// If navigation icon is close -> the menu should be opened
			if (window.innerWidth > 800) {
				this.openDesktop = value;
			} else {
				this.openMobile = value;
				this.initialDisplay = 'block';
			}
		});
	}

	changeView(data) {
		if (data === 'true') {
			this.isLoginVisible = false;
			this.route.navigate([ 'user-history' ]);
		}
	}
}
