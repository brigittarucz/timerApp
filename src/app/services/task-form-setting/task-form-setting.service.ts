import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TaskFormSettingService {
	isModalOpen: boolean = false;
	isModalOpenChange: Subject<boolean> = new Subject<boolean>();

	setModalState(val: boolean) {
		this.isModalOpenChange.next(val);
	}

	constructor() {
		this.isModalOpenChange.subscribe((value) => {
			this.isModalOpen = value;
		});
	}
}
