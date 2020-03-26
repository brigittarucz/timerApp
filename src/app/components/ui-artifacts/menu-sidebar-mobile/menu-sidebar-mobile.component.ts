import { Component, OnInit } from '@angular/core';
import { MenuStateService } from '../../../services/shared/menu-state.service';

@Component({
	selector: 'app-menu-sidebar-mobile',
	templateUrl: './menu-sidebar-mobile.component.html',
	styleUrls: [ './menu-sidebar-mobile.component.scss' ]
})
export class MenuSidebarMobileComponent implements OnInit {
	constructor(private menuState: MenuStateService) {}

	ngOnInit(): void {}

	closeSidebar() {
		this.menuState.toggleNavbarMenuIconChange();
	}
}
