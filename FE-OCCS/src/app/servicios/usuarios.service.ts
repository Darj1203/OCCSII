import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Usuarios } from '../interfaces/usuarios';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

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
  //crear el metodo para verificar si el usuario esta logueado con una cookie
  isLoggedIn(): boolean {
    return this.cookieService.check('token');
  }
  //crear el metodo para obtener el valor de la cookie
  getCookie(key: string){
    return this.cookieService.get(key);
  }
  //crear el metodo para eliminar la cookie
  deleteCookie(key: string){
    this.cookieService.delete(key);
  }
  //crear el metodo para crear la cookie
  setCookie(key: string, value: string){
    this.cookieService.set(key, value);
  }
  //crear el metodo para autorizar todos los usuarios de usuarios/autorizar en una api con formato json
  public autorizar(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/autorizar", usuario);
  }
  //crear el metodo para verificr usuarios de usuarios/verificar en una api con formato json
  public verificar(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/verificar", usuario);
  }
  //crear el metodo para cerrar sesion de usuarios/cerrarSesion en una api con formato json
  public cerrarSesion(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/cerrarSesion", usuario);
  }
  //crear el metodo para crear usuarios de usuarios/crear en una api con formato json
  public crear(usuario: Usuarios){
    return this.http.post(this.URLAPI+"usuarios/crear", usuario);
  } 
  //Obtener todos los datos de usuario de usuarios/datosdeusuario/:id en una api con formato json
  public datosdeusuario(id: number){
    return this.http.get(this.URLAPI+"usuarios/datosdeusuario/"+ id);
  }
}