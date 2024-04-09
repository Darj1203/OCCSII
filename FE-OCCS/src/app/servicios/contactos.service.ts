import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConexionService } from './conexion.service';
import { Contactos } from '../interfaces/contactos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  constructor(private http: HttpClient, private conexion: ConexionService) { }

  public contactos: Contactos={
    id: 0,
    nombre: "",
    celular: 1111111111,
    apartamento_id: 0
  }

  public URLAPI=this.conexion.URLAPI;

  //Buscar todos los contactos de contactos peticion get en una api con formato json
  public buscarTodos(): Observable<Contactos[]> {
    return this.http.get<Contactos[]>(this.URLAPI+'contactos');
  }
  //Buscar un contacto de contactos/:id peticion get en una api con formato json
  public buscarUno(id:number): Observable<Contactos>{
    return this.http.get<Contactos>(this.URLAPI+"contactos/"+ id);
  }
  //Crear un contacto de contactos peticion post en una api con formato json
  public crearContacto(contactos: Contactos): Observable<Contactos>{
    return this.http.post<Contactos>(this.URLAPI+"contactos", contactos);
  }
  //Actualizar un contacto de contactos/:id peticion put en una api con formato json
  public actualizar(id:number, contactos: Contactos): Observable<Contactos>{
    return this.http.put<Contactos>(this.URLAPI+"contactos/"+id, contactos);
  }
  //Eliminar un contacto de contactos/:id peticion delete en una api con formato json
  public eliminar(id: number){
    return this.http.delete(this.URLAPI+"contactos/"+id);
  }
  // Buscar por el id del apartamento 
  buscarIDAPARTAMENTO(idApartamento: any): Observable<Contactos[]> {
    return this.http.get<Contactos[]>(this.URLAPI+`contactos/apartamento/${idApartamento}`);
  }
}
 