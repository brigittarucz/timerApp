import { Component, HostListener, OnInit } from '@angular/core';
import { UserHistoryService } from '../../../../services/user-history/user-history.service';
import { ConnectedUser } from '../../../../models/connectedUserModel';
@Component({
	selector: 'app-offices-overview',
	templateUrl: './offices-overview.component.html',
	styleUrls: [ './offices-overview.component.scss' ]
})
export class OfficesOverviewComponent implements OnInit {
	dropdownState1: boolean = false;

	activeOfficeUsers: ConnectedUser[] = [];

	activeNumbers: number[] = [ 6, 3, 2 ];

	selectOfficeState: boolean = false;

	constructor(private HistoryService: UserHistoryService) {}

	public isDesktop = false;
	public isMobile = false;
	ngOnInit() {
		this.doCheckDeviceType();
	}

	@HostListener('window:resize', [ '$event' ])
	onResize() {
		this.doCheckDeviceType();
	}

	doCheckDeviceType() {
		const windowWidth = window.innerWidth;

		if (windowWidth < 800) {
			this.isDesktop = false;
			this.isMobile = true;
		} else {
			this.isDesktop = true;
			this.isMobile = false;
		}
	}

	getOfficeUsers(event) {
		this.selectOfficeState = true;
		this.activeOfficeUsers = this.HistoryService.doGetConnectedUsers(event.target.id);
	}

	toggleDropdown1() {}
}
