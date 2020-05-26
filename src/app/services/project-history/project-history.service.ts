import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProjectHistoryService {
	clientSelected: string = 'none';
	clientSelectedChange: Subject<string> = new Subject<string>();

	setClient(val: string) {
		this.clientSelectedChange.next(val);
	}

	get getClient(): Subject<string> {
		return this.clientSelectedChange;
	}

	constructor() {
		this.clientSelectedChange.subscribe((value) => {
			this.clientSelected = value;
		});
	}
}
