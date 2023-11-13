import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { FormatoLibrosPipe } from 'src/app/pipes/formato-libros.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  book : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
  book2 : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
  book3 : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
  book4 : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
  book5 : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");
  book6 : Books = new Books(1,2, "Harry Potter", "Tapa Blanda", "J.K. Rowling", 23, "https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg");

  
  books: Books[] = [this.book, this.book2, this.book3, this.book4];


  constructor(){
    
  }

  crearLibro(id_book:string, title: string, type: string, author: string, price:string, photo:string){
    let bookNew : Books; 
    if(id_book != "" && title != "" && type != "" && author != "" && price != "" && photo != ""){
      bookNew = new Books(Number(id_book),2 , title, type, author, Number(price), photo);
      this.books.push(bookNew);
    }
  }



}
