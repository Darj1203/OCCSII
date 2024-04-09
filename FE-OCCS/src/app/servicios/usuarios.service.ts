import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Usuarios } from '../interfaces/usuarios';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  //crear el constructor con HttpClient y ConexionService
  constructor(private http: HttpClient, private conexion: ConexionService, private cookieService: CookieService) { }
  //encontrar la url base
  public URLAPI=this.conexion.URLAPI;
  //llamar la interfaz de usuarios
  public usuarios: Usuarios={
    id: 0,
    correo: "",
    password: "",
    rol: 0
  }

  logout() {
    localStorage.removeItem('token'); // Eliminar el token del almacenamiento local al cerrar sesión
  }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  //crear el metodo para autorizar todos los usuarios de usuarios/autorizar en una api con formato json
  public autorizar(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/autorizar", usuario);
  }

  //crear el metodo para crear usuarios de usuarios/crear en una api con formato json
  public crear(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/crear", usuario);
  } 
}