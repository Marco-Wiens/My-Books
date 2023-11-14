import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // Array donde se van a ir guardando todos los libros
  private books: Books[]

  constructor() {
    // Se inicializa el array
    this.books = [];
  }

  public getAll():Books[]{

    return this.books

  }

  public getOne(id_libro:number):Books[]{

    let librosFiltrados: Books[]=[];
    if (id_libro === undefined || id_libro === 0 || id_libro == null || id_libro.toString().trim() === "") {
      // Si el parámetro es undefined o una cadena vacía, devuelve el array completo
      librosFiltrados = this.books;
      
    } else {
      // Utiliza el método filter para obtener un array de libros que coincidan con el número
      librosFiltrados = this.books.filter(book => book.id_book.toString().includes(id_libro.toString()));
      
    }
    return librosFiltrados;
  }

  public add(book:Books):void{
      // Mete el libro en el array de libros
      
      this.books.push(book);
      alert("Libro añadido");
    
  }

  public edit(book:Books):boolean{
    // Inicializa la variable que se va a devolver
    let editado:boolean = false;
    // Comprueba que los campos no estén vacíos
    if(book.id_book != undefined && book.title != "" && book.type != "" && book.author != "" && book.price != undefined && book.photo != ""){
      //Busca el id del libro que se va a modificar
      const index = this.books.findIndex(b => b.id_book === book.id_book);

      // Si encuentra el libro modifica sus propiedades y cambia el valor de editado a verdadero
      if (index !== -1) {
        this.books[index] = {
          id_book: book.id_book,
          title: book.title,
          type: book.type,
          author: book.author,
          price: Number(book.price),
          photo: book.photo,
          id_user: book.id_user
        };
        editado= true;
        alert("Libro modificado");
      }else{
        alert("Este libro no existe");
      }
    }

    return editado; 

  } 

  public delete(id_book: number): void {
    // Elimina el libro por id_libro le entra por parámetros a traves del metodo filter
    this.books = this.books.filter(book => book.id_book !== id_book);
  }

}
