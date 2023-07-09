import { Component, Input, Output, EventEmitter } from '@angular/core';
import { List1 } from 'src/app/List1';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item!: List1;
  @Input() i!: number;
  @Output() itemDelete: EventEmitter<List1> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<List1> = new EventEmitter();

  constructor() {}

  onClick(item: List1): void {
    this.itemDelete.emit(item);
    console.log('Deleted:', item);
  }

  onCheckboxClick(item: List1): void {
    this.todoCheckbox.emit(item);
    console.log('Checkbox clicked:', item);
  }
}
