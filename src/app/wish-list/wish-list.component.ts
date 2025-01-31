import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: false,
  
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes : WishItem[] | null = [];

  toggleCheckbox(item : WishItem) : void {
    item.isComplete = !item.isComplete;
  }
}
