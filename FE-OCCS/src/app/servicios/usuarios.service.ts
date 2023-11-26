import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //crear el constructor con HttpClient y ConexionService
  constructor(private http: HttpClient, private conexion: ConexionService) { }
  //encontrar la url base
  public URLAPI=this.conexion.URLAPI;
  //llamar la interfaz de usuarios
  public usuarios: Usuarios={
    id: 0,
    correo: "",
    password: "",
    rol: 0
  }
  //crear el metodo para autorizar todos los usuarios de usuarios/autorizar en una api con formato json
  public autorizar(){
    return this.http.post(this.URLAPI+"usuarios/autorizar", this.usuarios);
  }
  //crear el metodo para verificr usuarios de usuarios/verificar en una api con formato json
  public verificar(){
    return this.http.post(this.URLAPI+"usuarios/verificar", this.usuarios);
  }
  //crear el metodo para cerrar sesion de usuarios/cerrarSesion en una api con formato json
  public cerrarSesion(){
    return this.http.post(this.URLAPI+"usuarios/cerrarSesion", this.usuarios);
  }
  //crear el metodo para crear usuarios de usuarios/crear en una api con formato json
  public crear(){
    return this.http.post(this.URLAPI+"usuarios/crear", this.usuarios);
  } 
  //Obtener todos los datos de usuario de usuarios/datosdeusuario/:id en una api con formato json
  public datosdeusuario(){
    return this.http.get(this.URLAPI+"usuarios/datosdeusuario/"+this.usuarios.id);
  }
}