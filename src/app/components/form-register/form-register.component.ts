import { Component } from '@angular/core';
import { User } from 'src/app/usos/User';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  
  constructor(public user:User){

  }

  crearUser(name: string, apellido: string, email: string, imagen:string, contrasena:string){

    let user:User = new User(name,apellido,email,imagen,contrasena);

  }



}
