import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-stop-task-modal',
	templateUrl: './stop-task-modal.component.html',
	styleUrls: [ './stop-task-modal.component.scss' ]
})
export class StopTaskModalComponent implements OnInit {
	hasDescription;
	onSubmit(ev) {}

	constructor() {}

	ngOnInit(): void {}
}
