import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  constructor(private http: HttpClient) { }
    public URLAPI="http://localhost:3000/";
}
