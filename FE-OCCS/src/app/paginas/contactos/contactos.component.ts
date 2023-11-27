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

  constructor(private contactosService: ContactosService) {}

  public contacto: Contactos = {
    nombre: '',
    celular: 111111111,
    apartamento_id: 1
  };

  public listContactos: Contactos[] = [];
  
  public ngOnInit() {
    //Buscar todos los contactos usar la funcion buscarTodos y guardarlo en listContactos
    this.contactosService.buscarTodos().subscribe((data: Contactos[]) => {
      this.listContactos = data;
    });
  }


}
