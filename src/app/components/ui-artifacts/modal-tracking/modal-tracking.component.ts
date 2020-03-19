import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-modal-tracking',
	templateUrl: './modal-tracking.component.html',
	styleUrls: [ './modal-tracking.component.scss' ]
})
export class ModalTrackingComponent implements OnInit {
	@Output() emitService = new EventEmitter();
	constructor() {}

	getFieldCount(formStat) {
		this.emitService.emit(formStat);
	}

	ngOnInit(): void {}
}
