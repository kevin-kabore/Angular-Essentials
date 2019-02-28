import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-cart',
	template: `
	<p>This is the cart Component</p>
	<input type="text" [(ngModel)]="newItem">
	<button (click)="onItemInput($event)">Add Item</button>
	`
})

export class CartComponent {
	@Input() items;
	@Output() itemAdded = new EventEmitter<string>();
	newItem;
	// console.log(this.items)
	onItemInput(event) {
		this.itemAdded.emit(this.newItem)

	}
}