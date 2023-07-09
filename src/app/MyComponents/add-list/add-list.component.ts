import { Component,Output,EventEmitter ,OnInit } from '@angular/core';
import { List1 } from 'src/app/List1';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent {
title!:string;
desc!:string;
@Output()itemAdd:EventEmitter<List1> = new EventEmitter();

constructor(){

}
ngOnInit() : void{

}
onSubmit(){
  const item = {
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
 }
this.itemAdd.emit(item)
}
}
