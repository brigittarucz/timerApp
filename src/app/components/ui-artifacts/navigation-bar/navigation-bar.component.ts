import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuStateService } from '../../../services/shared/menu-state.service';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: [ './navigation-bar.component.scss' ]
})
export class NavigationBarComponent implements OnInit {
	toggleProfileQuickviewState: boolean = false;
	displayProfileQuickview: string = 'none';
	displayShadow: string = 'var(--soft-shadow)';
	isNavigIconClose: Subject<boolean>;
	navState: boolean = false;

	menuIconSrc: string = '../../../../assets/header/burgermenu-icon.png';

	constructor(private menuStateService: MenuStateService) {
		this.isNavigIconClose = this.menuStateService.navbarStatus;
		this.isNavigIconClose.subscribe((value) => {
			this.navState = value;
			if (this.navState) {
				this.menuIconSrc = '../../../../assets/cross-icon.png';
			} else {
				this.menuIconSrc = '../../../../assets/header/burgermenu-icon.png';
			}
		});
	}

	ngOnInit(): void {}

	toggleProfileQuickview() {
		this.toggleProfileQuickviewState = !this.toggleProfileQuickviewState;
		if (this.toggleProfileQuickviewState) {
			this.displayProfileQuickview = 'block';
			this.displayShadow = 'none';
			if (window.innerWidth > 800) {
				this.displayShadow = 'var(--soft-shadow)';
			}
		} else {
			this.displayProfileQuickview = 'none';
			this.displayShadow = 'var(--soft-shadow)';
		}
	}

	toggleSidebarComponent() {
		this.menuStateService.toggleNavbarMenuIconChange();
		if (window.innerWidth > 800) {
			this.menuStateService.toggleSidebarDesktopVisibility();
		} else {
			this.menuStateService.toggleSidebarMobileVisibility();
		}
	}
}
