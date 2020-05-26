import { Component, OnInit } from '@angular/core';
import { mockProjHistory } from '../../../../models/mockData';
import { ProjectHistoryService } from '../../../../services/project-history/project-history.service';

@Component({
	selector: 'app-proj-history-filter-form',
	templateUrl: './proj-history-filter-form.component.html',
	styleUrls: [ './proj-history-filter-form.component.scss' ]
})
export class ProjHistoryFilterFormComponent implements OnInit {
	// Mock up data for select options
	testOptions = [
		{ name: 'Wiredelta' },
		{ name: 'Adobe' },
		{ name: 'Forbes' },
		{ name: 'Microsoft' },
		{ name: 'Selligent Marketing Cloud' },
		{ name: 'Mc Donalds' },
		{ name: 'KFC' },
		{ name: 'Agricultural Bank of China' }
	];

	mockClientsData: string[];
	clientSelected: string;

	constructor(private projHistory: ProjectHistoryService) {}

	ngOnInit(): void {
		this.doGetClients().then((value) => {
			this.mockClientsData = value;
		});
		this.clientSelected = this.projHistory.clientSelected;
	}

	setClient(event) {
		this.projHistory.setClient(event.target.value);
	}

	async doGetClients() {
		let clients = [];
		mockProjHistory.forEach((el) => {
			clients.push(el.client);
		});
		return clients;
	}

	dropdownState: Boolean = false;

	toggleDropdown() {
		this.dropdownState = !this.dropdownState;
	}
}
