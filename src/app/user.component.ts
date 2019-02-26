import { Component } from '@angular/core';

@Component({
	selector: 'app-user',
	template: `
		<input type="text" [(ngModel)]="name">
		<p>Hello {{ name }}!</p>
		<p>This is the User Component</p>	
	`
})

export class UserComponent {
	name = 'Kevin';

	onUserInput(event) {
		this.name = event.target.value;
	}
}

