import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosService } from '../../servicios/contactos.service';
import { Contactos } from '../../interfaces/contactos';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  constructor(private apartamentosService: ContactosService) {}

  public contacto: Contactos = {
    id: 0,
    nombre: '',
    celular: 0
  };

  public listContactos: Contactos[] = [];
  
  public ngOnInit() {
    //Buscar todos los contactos usar la funcion buscarTodos y guardarlo en listContactos
    this.ContactosService.subscribe((data: Contactos[]) => {
      this.listContactos = data;
    });
  }


}
