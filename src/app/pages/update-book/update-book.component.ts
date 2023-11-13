import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {


  modificarLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){
    let bookNew : Books; 
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
      bookNew = new Books( title, type, author, Number(price), photo, Number(id_book));
      // this.books.push(bookNew);
    }
  }
}
