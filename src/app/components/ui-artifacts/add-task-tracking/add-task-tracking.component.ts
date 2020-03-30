import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackingService } from 'src/app/services/tracking/tracking-service.service';

@Component({
	selector: 'app-add-task-tracking',
	templateUrl: './add-task-tracking.component.html',
	styleUrls: [ './add-task-tracking.component.scss' ]
})
export class AddTaskTrackingComponent implements OnInit {
	@ViewChild('f') signupForm: NgForm;

	// Updated information about selection

	taskParameters: { fieldLabel: string; fieldOptionsKey: string }[] = [
		{ fieldLabel: 'department', fieldOptionsKey: 'department' }
	];

	// Current clicked tracker

	currentTracker;
	formManualValidity = 0;

	constructor(private router: Router, private trackingService: TrackingService) {}

	ngOnInit(): void {}

	updateFormValidity() {
		if (this.currentTracker.typeTask === 'place') {
			if (this.currentTracker.typeKey !== 'place') {
				this.formManualValidity = 1;
			}
		}
	}

	resetForm(resetButton) {
		resetButton.preventDefault();
		this.removeFields(1);
		this.trackingService.changeTaskInProgressStatus(false);
	}

	onSubmit(myform: NgForm) {
		// Add here more for when submitting
		if (window.innerWidth < 800) {
			this.router.navigate([ '/' ], { state: { data: { startTrack: 1 } } });
		} else {
			this.trackingService.changeTaskInProgressStatus(true);
		}
	}

	fieldLabelOptions = [ 'department', '' ];

	// 6 field options

	fullOptions = [
		'ads',
		'business',
		'business0management',
		'design',
		'development',
		'institute0admin',
		'project0management',
		'SEO',
		'technical0management'
	];

	// Methods to generate and remove fields

	generateNewInstance(fieldLabelValue, fieldKeyValue) {
		let newInstance = { fieldLabel: fieldLabelValue, fieldOptionsKey: fieldKeyValue };
		this.taskParameters.push(newInstance);
	}

	removeFields(n: any) {
		this.taskParameters = this.taskParameters.splice(0, n);
		this.currentTracker = 0;
		this.formManualValidity = 0;
	}

	eliminateSelect;

	// Get from component X-button related information

	regenFields: { nameField: string; leaveFields: number | number[] }[] = [
		{ nameField: 'department', leaveFields: 1 },
		{ nameField: 'category', leaveFields: 2 },
		{ nameField: 'client', leaveFields: 3 },
		{ nameField: 'training type', leaveFields: 3 },
		{ nameField: 'project', leaveFields: 4 },
		{ nameField: 'mode', leaveFields: 5 },
		{ nameField: 'place', leaveFields: [ 4, 5, 6 ] }
	];

	getClickedField(el) {
		this.regenFields.forEach((fieldType) => {
			if (fieldType.nameField === el) {
				if (typeof fieldType.leaveFields === 'number') {
					this.removeFields(fieldType.leaveFields);
				} else {
					this.removeFields(this.taskParameters.length - 1);
					this.generateNewInstance('place', 'place');
				}
			}
		});
	}

	// Get from component current selected field

	updateFields(obj) {
		this.currentTracker = obj;
		console.log(obj);
		console.log(this.taskParameters);
		if (this.taskParameters.length === 1) {
			this.generateNewInstance('category', obj.typeKey);
		} else if (this.taskParameters.length === 2) {
			if (obj.typeTask === 'department') {
				this.removeFields(1);
				this.updateFields(obj);
			} else {
				let validateBool = 0;
				this.fullOptions.forEach((selection) => {
					if (selection === this.taskParameters[1].fieldOptionsKey) {
						this.generateNewInstance('client', 'clients');
						validateBool = 1;
					}
				});
				if (!validateBool && this.taskParameters[1].fieldOptionsKey !== 'developer0training') {
					this.generateNewInstance('place', 'place');
				} else if (!validateBool && this.taskParameters[1].fieldOptionsKey === 'developer0training') {
					this.generateNewInstance('training type', 'training');
				}
				if (validateBool && this.taskParameters[1].fieldOptionsKey === 'SEO') {
					this.generateNewInstance('project', 'project');
					this.generateNewInstance('place', 'place');
				}
			}
		} else if (this.taskParameters.length === 3) {
			if (obj.typeTask === 'department') {
				this.removeFields(1);
			} else if (obj.typeTask === 'category') {
				this.removeFields(2);
				this.updateFields(obj);
			} else if (this.taskParameters[1].fieldOptionsKey === 'developer0training') {
				this.generateNewInstance('place', 'place');
			} else if (this.taskParameters[1].fieldOptionsKey === 'SEO') {
				this.generateNewInstance('project', 'project');
				this.generateNewInstance('place', 'place');
			} else {
				this.fullOptions.forEach((selection) => {
					if (selection === this.taskParameters[1].fieldOptionsKey && selection !== 'SEO') {
						this.generateNewInstance('project', 'project');
						this.generateNewInstance('mode', 'mode');
						this.generateNewInstance('place', 'place');
					}
				});
			}
		} else if (this.taskParameters.length === 4) {
			for (let i = 0; i < 2; i++) {
				if (obj.typeTask === this.regenFields[i].nameField) {
					this.removeFields(this.regenFields[i].leaveFields);
				}
			}
			if (this.taskParameters[1].fieldOptionsKey === 'SEO') {
				this.generateNewInstance('place', 'place');
			} else if (this.taskParameters[1].fieldOptionsKey !== 'developer0training') {
				this.generateNewInstance('mode', 'mode');
				this.generateNewInstance('place', 'place');
			}
		} else if (this.taskParameters.length === 5) {
			for (let i = 0; i < 2; i++) {
				if (obj.typeTask === this.regenFields[i].nameField) {
					this.removeFields(this.regenFields[i].leaveFields);
					this.updateFields(obj);
				}
			}
			if (this.taskParameters[1].fieldOptionsKey !== 'SEO') {
				this.generateNewInstance('place', 'place');
			}
		} else if (this.taskParameters.length === 6) {
			for (let i = 0; i < 2; i++) {
				if (obj.typeTask === this.regenFields[i].nameField) {
					this.removeFields(this.regenFields[i].leaveFields);
					this.updateFields(obj);
				}
			}
		}
	}
}
