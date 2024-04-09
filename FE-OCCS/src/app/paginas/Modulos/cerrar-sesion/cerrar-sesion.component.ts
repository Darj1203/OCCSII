import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cerrar-sesion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cerrar-sesion.component.html',
  styleUrl: './cerrar-sesion.component.css'
})
export class CerrarSesionComponent {

  constructor(private authService: UsuariosService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout(); // Llamar al método de cerrar sesión del servicio de autenticación
  }
}
