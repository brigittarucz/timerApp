import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-stop-before-checkout-modal',
	templateUrl: './stop-before-checkout-modal.component.html',
	styleUrls: [ './stop-before-checkout-modal.component.scss' ]
})
export class StopBeforeCheckoutModalComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}
}
