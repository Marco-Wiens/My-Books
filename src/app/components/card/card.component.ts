import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output() eventoBook = new EventEmitter<number>();

  @Input() book: any;
  @Input() i?: number;

  constructor(){
    
   
  }


  borrarBook(){
    this.eventoBook.emit(this.i);

  }

}
