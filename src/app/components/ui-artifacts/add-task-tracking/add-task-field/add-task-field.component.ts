import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { mockFieldOptions } from '../../../../models/mockData';

@Component({
	selector: 'app-add-task-field',
	templateUrl: './add-task-field.component.html',
	styleUrls: [ './add-task-field.component.scss' ]
})
export class AddTaskFieldComponent implements OnInit {
	@Input() taskParameter;
	@Output() changeSelect = new EventEmitter();
	@Output() eliminateSelect = new EventEmitter();
	@ViewChild('labelRef') labelRef;

	valueSelect = 'null';
	arrOptions = {
		department: []
	};

	constructor() {}

	ngOnInit(): void {
		this.populateOptions().then((resolve) => {
			this.arrOptions = resolve;
		});
	}

	async populateOptions() {
		return mockFieldOptions;
	}

	showNextField() {
		let key = {
			typeTask: this.labelRef.nativeElement.innerHTML,
			typeKey: this.valueSelect
		};
		this.changeSelect.emit(key);
	}

	resetValue(el) {
		this.eliminateSelect.emit(el.id);
		el.selectedIndex = '0';
	}
}
