import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Books[]

  constructor() {
    this.books = [];
  }

  public getAll():Books[]{


    return this.books

  }

  public getOne(id_libro:number):Books{
    let libro:Books = new Books("","","",0,"");

    for(let book in this.books){
      if(this.books[book].id_book == id_libro){
        libro = this.books[book];
      }
    }
    return libro;
  }

  public add(book:Books):void{
    let bookNew : Books; 
    if(book.id_book != undefined && book.title != "" && book.type != "" && book.author != "" && book.price != undefined && book.photo != ""){
      bookNew = new Books( book.title, book.type, book.author, Number(book.price), book.photo, Number(book.id_book));
      this.books.push(bookNew);
    }
  }

  public edit(book:Books):boolean{
    if(book.id_book != undefined && book.title != "" && book.type != "" && book.author != "" && book.price != undefined && book.photo != ""){

       

    }
    return true;

  }

}
