import { Component } from '@angular/core';
import { FEATURES } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  featuresList:any[] = FEATURES;

  constructor() {
    
  }
}
