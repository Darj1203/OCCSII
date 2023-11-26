import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Apartamentos } from '../interfaces/apartamentos';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  constructor(private http: HttpClient, private conexion: ConexionService) { }
  
  public apartamentos: Apartamentos={
    id: 0,
    torre: "",
    apartamento:""
  }

  public URLAPI=this.conexion.URLAPI;

  //Buscar todos los apartamentos de apartamentos peticion get en una api con formato json
  public buscarTodos(){
    return this.http.get(this.URLAPI+"apartamentos");
  }
  //Buscar un apartamento de apartamentos/:id peticion get en una api con formato json
  public buscarUno(){
    return this.http.get(this.URLAPI+"apartamentos/"+this.apartamentos.id);
  }
  //Crear un apartamento de apartamentos peticion post en una api con formato json
  public crear(){
    return this.http.post(this.URLAPI+"apartamentos", this.apartamentos);
  }
  //Actualizar un apartamento de apartamentos/:id peticion put en una api con formato json
  public actualizar(){
    return this.http.put(this.URLAPI+"apartamentos/"+this.apartamentos.id, this.apartamentos);
  }
  //Eliminar un apartamento de apartamentos/:id peticion delete en una api con formato json
  public eliminar(){
    return this.http.delete(this.URLAPI+"apartamentos/"+this.apartamentos.id);
  }
}
