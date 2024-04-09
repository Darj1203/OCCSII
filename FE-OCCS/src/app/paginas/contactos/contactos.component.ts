import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../../servicios/contactos.service';
import { Contactos } from '../../interfaces/contactos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})


export class ContactosComponent implements OnInit {

  mostrarBotonCrear: boolean = false;
  listContactos: Contactos[] = [];

  constructor(private contactosService: ContactosService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    // Obtener el parámetro de la ruta
    this.route.params.subscribe(params => {
      const idApartamento = params['id']; // Obtener el ID del apartamento de los parámetros de la ruta
      if (idApartamento) {
        this.mostrarBotonCrear = true;
        // Si hay un ID de apartamento en la ruta, buscar solo los contactos de ese apartamento
        this.contactosService.buscarIDAPARTAMENTO(idApartamento).subscribe(data => {
          this.listContactos = data;
        });
      } else {
        // Si no hay un ID de apartamento en la ruta, buscar todos los contactos
        this.contactosService.buscarTodos().subscribe(data => {
          this.listContactos = data;
        });
      }
    });
  }

  eliminarcontacto(id: number) {
    this.contactosService.eliminar(id).subscribe(() => {
      window.location.reload(); // Recargar la página después de eliminar el contacto
    });
  }
}