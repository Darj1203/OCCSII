import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactosService } from '../../servicios/contactos.service';

@Component({
  selector: 'app-form-contactos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-contactos.component.html',
  styleUrl: './form-contactos.component.css'
})
export class FormContactosComponent {

  isEditing: boolean = false; // Variable para indicar si estamos editando un contacto existente
  formulario: FormGroup;

  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private contactoService: ContactosService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      telefono: new FormControl()
    });

    // Verificar si hay un ID en la ruta para determinar si estamos editando
    const idParam: string | null = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.isEditing = true;
      const id: number = parseInt(idParam);
      this.contactoService.buscarUno(id).subscribe(contacto => {
        if (contacto) {
          this.formulario.patchValue(contacto);
        }
      });
    }
  }
  
  async onSubmit() {
    if (this.formulario.valid) {
      if (this.formulario.value.id) {
        // Editar apartamento existente
        await this.contactoService.actualizar(this.formulario.value.id, this.formulario.value).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      } else {
        // Crear nuevo apartamento
        this.contactoService.crearContacto(this.formulario.value).subscribe(() => {
          this.router.navigate(['/contactos']);
        });
      }
    }
  }
}

