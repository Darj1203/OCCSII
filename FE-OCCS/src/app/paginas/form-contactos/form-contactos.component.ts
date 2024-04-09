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
  apartamentoId: number | undefined;

  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private contactoService: ContactosService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      celular: new FormControl(),
      apartamento: new FormControl()
    });

    // Suscribirse a los parámetros de la ruta para obtener el id del apartamento
    this.route.params.subscribe(params => {
      const idParam = params['id'];
      if (idParam) {
        this.apartamentoId = parseInt(idParam);
        this.formulario.get('apartamento')?.setValue(this.apartamentoId); // Establecer el id del apartamento en el formulario
      }
    });
  }
  
  async onSubmit() {
    if (this.formulario.valid) {
      if (this.formulario.value.id) {
        // Editar contacto existente
        await this.contactoService.actualizar(this.formulario.value.id, this.formulario.value).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      } else {
        // Crear nuevo contacto
        await this.contactoService.crearContacto(this.formulario.value).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      }
    }
  }
}
