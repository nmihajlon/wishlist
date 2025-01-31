import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  standalone: false,
  
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  selectedFilter : string = '0';

  // Angular prvo izvrsava ngOnInit child komponente
  ngOnInit() : void{
    this.updateFilter('0');
  }
  updateFilter(value : any){
    this.filter = filters[value];
    this.filterChange.emit(filters[value]);
  }
}
