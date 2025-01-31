import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  newWishText? : string;

  items : WishItem[] = [
    new WishItem('Buy a new car', true),
    new WishItem('Get a job'),
    new WishItem('Learn to code'),
  ];
  
  toggleCheckbox(item : WishItem) : void {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  submitForm(event : Event) : void{
    event.preventDefault();
    //dodaj wish u listu
    //ocisti text-box
    this.items.push(new WishItem(this.newWishText ?? '', false))
    this.newWishText = '';
  }
}
