import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MenuStateService {
	isSidebarMobileVisible: boolean = false;
	isSidebarDesktopVisible: boolean = false;
	isNavbarMenuIconClose: boolean = false;

	sidebarMobileVisibilityChange: Subject<boolean> = new Subject<boolean>();
	sidebarDesktopVisibilityChange: Subject<boolean> = new Subject<boolean>();
	navbarMenuIconChange: Subject<boolean> = new Subject<boolean>();

	constructor() {
		this.sidebarMobileVisibilityChange.subscribe((value) => {
			this.isSidebarMobileVisible = value;
		});
		this.sidebarDesktopVisibilityChange.subscribe((value) => {
			this.isSidebarDesktopVisible = value;
		});
		this.navbarMenuIconChange.subscribe((value) => {
			this.isNavbarMenuIconClose = value;
		});
	}

	get navbarStatus(): Subject<boolean> {
		return this.navbarMenuIconChange;
	}

	toggleSidebarMobileVisibility() {
		this.sidebarMobileVisibilityChange.next(!this.isSidebarMobileVisible);
	}

	toggleSidebarDesktopVisibility() {
		this.sidebarDesktopVisibilityChange.next(!this.isSidebarDesktopVisible);
	}

	toggleNavbarMenuIconChange() {
		this.navbarMenuIconChange.next(!this.isNavbarMenuIconClose);
	}
}
