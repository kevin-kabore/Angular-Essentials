import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = '2K';
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
  	this.rootName = newName;
  }
  
  onItemAdded(itemValue) {
  	this.rootItems.push(itemValue);
  	console.log(this.rootItems);
  }
}
