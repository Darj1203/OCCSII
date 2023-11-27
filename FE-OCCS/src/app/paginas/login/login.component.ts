import {Component} from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Usuarios } from '../../interfaces/usuarios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(private usuariosService:UsuariosService) { }

  usuarios: Usuarios={
    id: 0,
    correo: "",
    password: "",
    rol: 0
  } 

  ngOnInit(): void {
    //Recibir datos del formulario y verificar si el usuario existe y hay ingreso
    
  }

}
