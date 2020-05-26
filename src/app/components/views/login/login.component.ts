import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
declare const particlesJS;
import { ParticlesJSConfig } from './particle-js-config';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, AfterViewInit {
	@Output() open = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		try {
			particlesJS('background-animation', ParticlesJSConfig);
		} catch (e) {
			throw e;
		}
	}

	displayApp() {
		this.open.emit('true');
	}
}
