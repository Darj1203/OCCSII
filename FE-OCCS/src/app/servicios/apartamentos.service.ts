import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Apartamentos } from '../interfaces/apartamentos';
import { Observable } from 'rxjs';

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
  public buscarTodos(): Observable<Apartamentos[]> {
    return this.http.get<Apartamentos[]>(this.URLAPI+'apartamentos');
  }
  //Buscar un apartamento de apartamentos/:id peticion get en una api con formato json
  public buscarUno(id:number): Observable<Apartamentos>{
    return this.http.get<Apartamentos>(this.URLAPI+"apartamentos/"+ id);
  }
  //Crear un apartamento de apartamentos peticion post en una api con formato json
  public crearApartamento(apartamentos: Apartamentos): Observable<Apartamentos>{
    return this.http.post<Apartamentos>(this.URLAPI+"apartamentos", apartamentos);
  }
  //Actualizar un apartamento de apartamentos/:id peticion put en una api con formato json
  public actualizar(id:number, apartamentos: Apartamentos): Observable<Apartamentos>{
    return this.http.put<Apartamentos>(this.URLAPI+"apartamentos/"+id, apartamentos);
  }
  //Eliminar un apartamento de apartamentos/:id peticion delete en una api con formato json
  public eliminar(id: number){
    return this.http.delete(this.URLAPI+"apartamentos/"+id);
  }
}
