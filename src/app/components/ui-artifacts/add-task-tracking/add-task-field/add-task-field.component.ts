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

	constructor() {}

	ngOnInit(): void {
		// this.populateOptions().then((resolve) => {
		// 	this.arrOptions = resolve;
		// });
	}

	// async populateOptions() {
	// 	return mockFieldOptions;
	// }

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

	arrOptions = {
		department: [
			'ads',
			'analytics',
			'business',
			'business0management',
			'design',
			'developer0training',
			'development',
			'finance',
			'HR',
			'institute0admin',
			'legal',
			'logistics',
			'marketing',
			'office0management',
			'project0management',
			'recruitment',
			'sales',
			'SEO',
			'sysadmin',
			'technical0management',
			'unit0management'
		],
		ads: [ 'proposal' ],
		analytics: [ 'maintenance', 'process', 'reports', 'research' ],
		business: [ 'proposal' ],
		business0management: [ 'asana', 'support', 'techdoc' ],
		design: [ 'aftereffects', 'designconcepts', 'illustrator', 'meeting', 'photoshop', 'wireframes' ],
		developer0training: [
			'AJAX',
			'Android',
			'AngularJS',
			'APIs',
			'BackboneJS',
			'C#',
			'Codeigniter',
			'CSS3',
			'Databases',
			'Drupal',
			'EmberJS',
			'FETechniques',
			'Foundation',
			'Git',
			'HTML5',
			'HTML&CSS',
			'Ionic',
			'iOS',
			'Javascript',
			'Joomla',
			'jQuery',
			'JSFrameworks-Ember',
			'Magento',
			'.Net',
			'NodeJS',
			'Phonegap',
			'Photoshop',
			'PHPFrameworks',
			'PHP&MySQL',
			'Prestashop',
			'ReactJS',
			'ReactNativeJS',
			'ResponsiveDesign',
			'Ruby',
			'RubyonRails',
			'Swift',
			'TwitterBootstrap',
			'VueJS',
			'Wordpress'
		],
		development: [
			'AngularJS',
			'BackboneJS',
			'CakePHP',
			'CodeIgniter',
			'Composer',
			'CS-Cart',
			'CSS3',
			'Drupal',
			'EmberJS',
			'ExpressJS',
			'Handlebars',
			'HTML5',
			'HTML5Boilerplate',
			'Ionic',
			'Java',
			'JavaScript',
			'Joomla',
			'jQuery',
			'JSON',
			'Laravel',
			'Magento',
			'Mediaqueries',
			'Meeting',
			'MongoDB',
			'MySQL',
			'NodeJS',
			'Objective-C',
			'Phonegap',
			'PHP',
			'PlainCSS',
			'PlainHTML',
			'Prestashop',
			'Q&ATesting',
			'ReactNativeJS',
			'Reddis',
			'ResponsiveDesign',
			'Ruby',
			'RubyonRails',
			'Swift',
			'Symfoni',
			'Testing',
			'Titanium',
			'TwitterBootstrap',
			'Wordpress',
			'XML',
			'ZenCart',
			'Zend'
		],
		finance: [ 'dispatch', 'process', 'reports', 'wages' ],
		HR: [ 'exits', 'induction', 'process', 'reviews' ],
		institute0admin: [
			'administration',
			'assignations',
			'codereview',
			'courseupdates',
			'feedback',
			'interview',
			'presentations'
		],
		legal: [ 'case' ],
		logistics: [ 'office', 'others' ],
		marketing: [ 'CM', 'Events', 'Materials' ],
		office0management: [ 'payments', 'office' ],
		project0management: [ 'Asana', 'F-Brief', 'Meeting', 'Operations', 'Q&ATesting', 'SoW', 'Wireframes' ],
		recruitment: [ 'applications', 'drives', 'interviews', 'jobposting', 'samples' ],
		sales: [ 'B-Network', 'LeadGeneration' ],
		SEO: [ 'Off-page analysis', 'Off-page implementation', 'On-page analysis', 'On-pageimplementation' ],
		sysadmin: [ 'DNS', 'Gitlab', 'Hosting', 'ServerMaintenace' ],
		technical0management: [ 'Asana', 'CodeReview', 'Q&ATesting', 'Support', 'TechDoc' ],
		unit0management: [ 'induction', 'process', 'reports', 'reviews' ],
		clients: [ 'acaiacai', 'ba click' ],
		place: [ 'home', 'office', 'others' ],
		project: [ 'mobile', 'web' ],
		training: [ 'courses', 'assignments' ],
		mode: [ 'Estimations', 'Lead', 'MM', 'Research', 'RM' ]
	};
}
