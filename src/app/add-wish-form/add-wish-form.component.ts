import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: false,
  
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  newWishText? : string;
  @Output() onAddWish = new EventEmitter<WishItem>();
  submitForm() : void{
    this.onAddWish.emit(new WishItem(this.newWishText ?? ''))
    this.newWishText = '';
  }
}
