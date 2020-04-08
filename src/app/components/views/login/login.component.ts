import {AfterViewInit, Component, OnInit} from '@angular/core';
declare const particlesJS;
import {ParticlesJSConfig} from "./particle-js-config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    try {
      particlesJS('background-animation', ParticlesJSConfig);
    } catch (e) {
      throw e;
    }
  }

}

