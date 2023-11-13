import { Component, Input } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {


  crearLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){
    let bookNew : Books; 
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
      bookNew = new Books( title, type, author, Number(price), photo, Number(id_book));
      // this.books.push(bookNew);
    }
  }

}
