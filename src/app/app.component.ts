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
  selectedFilter : string = '0';

  items : WishItem[] = [
    new WishItem('Buy a new car', true),
    new WishItem('Get a job'),
    new WishItem('Learn to code'),
  ];
  visibleItems : WishItem[] = this.items;
  
  toggleCheckbox(item : WishItem) : void {
    item.isComplete = !item.isComplete;
    console.log(this.selectedFilter);
    this.filterChange(this.selectedFilter);
  }

  submitForm(event : Event) : void{
    //dodaj wish u listu
    //ocisti text-box
    this.items.push(new WishItem(this.newWishText ?? '', false))
    this.newWishText = '';
    this.filterChange(this.selectedFilter);
  }

  filterChange(event : string) : void{
    if(event === '0'){
      this.visibleItems = this.items;
    }
    else if(event === '1'){
      this.visibleItems = this.items.filter((item) => item.isComplete === false);
    }
    else if(event ==='2'){
      this.visibleItems = this.items.filter((item) => item.isComplete === true);
    }
  }
}
