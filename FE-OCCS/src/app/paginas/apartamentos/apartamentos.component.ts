import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartamentosService } from '../../servicios/apartamentos.service';
import { Apartamentos } from '../../interfaces/apartamentos';


@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent {
  constructor(private apartamentosService: ApartamentosService) {}

  public apartamento: Apartamentos = {
    id: 0,
    torre: '',
    apartamento: ''
  };

  public listApartamentos: Apartamentos[] = [];
  
  public ngOnInit() {
    //Buscar todos los apartamentos usar la funcion buscarTodos y guardarlo en listApartamentos
    this.apartamentosService.buscarTodos().subscribe((data: Apartamentos[]) => {
      this.listApartamentos = data;
    });
  }

  };

