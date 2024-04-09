import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApartamentosService } from '../../servicios/apartamentos.service';

@Component({
  selector: 'app-form-apartamentos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-apartamentos.component.html',
  styleUrls: ['./form-apartamentos.component.css']
})
export class FormApartamentosComponent {

  formulario: FormGroup;
  isEditing: boolean = false; // Variable para indicar si estamos editando un apartamento existente

  constructor(    
    private router: Router,
    private route: ActivatedRoute,
    private apartamentoService: ApartamentosService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      torre: new FormControl(),
      apartamento: new FormControl()
    });

    // Verificar si hay un ID en la ruta para determinar si estamos editando
    const idParam: string | null = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditing = true;
      const id: number = parseInt(idParam);
      this.apartamentoService.buscarUno(id).subscribe(apartamento => {
        if (apartamento) {
          this.formulario.patchValue(apartamento);
        }
      });
    }
  }

  async onSubmit() {
    if (this.formulario.valid) {
      if (this.formulario.value.id) {
        // Editar apartamento existente
        await this.apartamentoService.actualizar(this.formulario.value.id, this.formulario.value).subscribe(() => {
          this.router.navigate(['/apartamentos']);
        });
      } else {
        // Crear nuevo apartamento
        this.apartamentoService.crearApartamento(this.formulario.value).subscribe(() => {
          this.router.navigate(['/apartamentos']);
        });
      }
    }
  }
}
