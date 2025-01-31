import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedFilter : string = '0';

  items : WishItem[] = [
    new WishItem('Buy a new car', true),
    new WishItem('Get a job'),
    new WishItem('Learn to code'),
  ];

  get visibleItems() : WishItem[] | null{
    return this.items.filter(filters[Number(this.selectedFilter)]);
  }

  addNewWish(newItem : WishItem) : void {
    this.items.push(newItem);
  }
}
