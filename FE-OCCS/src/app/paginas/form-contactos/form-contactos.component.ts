import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactosService } from '../../servicios/contactos.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-contactos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-contactos.component.html',
  styleUrls: ['./form-contactos.component.css']
})
export class FormContactosComponent {

  isEditing: boolean = false; // Variable para indicar si estamos editando un contacto existente
  formulario: FormGroup;
  idApartamento: number | undefined;
  idContacto: number | undefined;

  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private contactoService: ContactosService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      celular: new FormControl(),
      apartamento: new FormControl() // Cambiar el nombre del campo a 'apartamento'
    });

    // Suscribirse a los parámetros de la ruta para obtener el id del apartamento y del contacto
    this.route.params.subscribe(params => {
      this.idApartamento = params['idApartamento']; // Obtener el id del apartamento
      this.idContacto = params['id']; // Obtener el id del contacto
      if (this.idContacto) {
        this.isEditing = true;
        // Llamar al servicio para obtener los datos del contacto y llenar el formulario
        this.contactoService.buscarUno(this.idContacto).subscribe(contacto => {
          if (contacto) {
            this.formulario.patchValue(contacto);
          }
        });
      }
    });
  }
      
  async onSubmit() {
    if (this.formulario.valid) {
      if (this.idContacto) {
        // Editar contacto existente
        await this.contactoService.actualizar(this.idContacto, this.formulario.value).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      } else {
        // Crear nuevo contacto
        // Asegúrate de enviar el id del apartamento al servicio al crear un nuevo contacto
        const nuevoContacto = {
          ...this.formulario.value,
          apartamento: this.idApartamento // Cambiar a 'apartamento'
        };
        await this.contactoService.crearContacto(nuevoContacto).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      }
    }
  }
}
