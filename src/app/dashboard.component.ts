import { Component } from '@angular/core';


@Component({
	selector: 'app-dashboard',
	template: `
	<input type="text" [(ngModel)]="loadState">
	<p>{{ loadState }}</p>
	<button (click)="onDashboardClick($event)">Load</button>
	`

})


export class DashboardComponent {
	loadState = 'loading';

	onDashboardClick(event) {
		this.loadState = 'finished';
	}
};