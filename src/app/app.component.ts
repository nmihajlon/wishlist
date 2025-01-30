import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Buy a new car', true),
    new WishItem('Get a job'),
    new WishItem('Learn to code'),
  ];

  title = 'wishList';
}
