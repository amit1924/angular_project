import { Component, OnInit } from '@angular/core';
import { List1 } from '../../List1';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  localItem: string | null;
  listing: List1[];

  constructor() {
    this.localItem = localStorage.getItem('listing');
    if (this.localItem == null) {
      this.listing = [];
    } else {
      this.listing = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteList1(item: List1) {
    console.log(item);
    const index = this.listing.indexOf(item);
    this.listing.splice(index, 1);
    localStorage.setItem('listing', JSON.stringify(this.listing));
  }

  addList1(item: List1) {
    console.log(item);
    const index = this.listing.indexOf(item);
    this.listing.push(item);
    localStorage.setItem('listing', JSON.stringify(this.listing));
  }

  /*The method receives an item of type List1 as a parameter. This represents the item in the listing array that needs to be toggled.
The indexOf method is used to find the index of the item in the listing array.
Once the index is found, this.listing[index].active is accessed to get the active property of the item.
The ! operator is used to toggle the value of the active property. If it was true, it becomes false, and if it was false, it becomes true.
The updated active value is then assigned back to this.listing[index].active, effectively toggling it.
Finally, localStorage.setItem('listing', JSON.stringify(this.listing)) is called to update the local storage with the modified listing array.
In summary, the toggleItem method allows you to change the active state of an item in the listing array by toggling its value between true and false.*/

  toggleItem(item: List1) {
    const index = this.listing.indexOf(item);
    this.listing[index].active = !this.listing[index].active;
    localStorage.setItem('listing', JSON.stringify(this.listing));
  }
}

/* The code starts with importing the necessary dependencies from Angular core and the List1 interface.
ListComponent is declared as a component using the @Component decorator. It specifies the selector, template file, and style file for the component.
The component class ListComponent implements the OnInit interface, indicating that it has an ngOnInit lifecycle hook.
Inside the component class, we have the localItem variable of type string | null to store the value retrieved from local storage.
The listing array of type List1[] is declared to store the list items.
In the constructor, localStorage.getItem('listing') retrieves the value stored in the 'listing' key of the local storage. If it is null, an empty array is assigned to this.listing; otherwise, the retrieved value is parsed using JSON.parse and assigned to this.listing.
The ngOnInit method is empty in this code, as no specific initialization is required.
The deleteList1 method takes an item parameter of type List1 and removes that item from the listing array using Array.splice. It also updates the local storage with the modified listing array.
The addList1 method takes an item parameter of type List1 and adds that item to the listing array using Array.push. It also updates the local storage with the modified listing array.
The toggleItem method takes an item parameter of type List1 and toggles the active property of the item in the listing array. It then updates the local storage with the modified listing array.
Overall, this code sets up the ListComponent with the necessary functionality to manage a list of items, including adding, deleting, and toggling the active state of each item. It also retrieves and stores the list in the local storage to persist the data between page refreshes.*/
