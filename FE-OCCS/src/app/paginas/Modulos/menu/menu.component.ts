import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';
import { CerrarSesionComponent } from '../cerrar-sesion/cerrar-sesion.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CerrarSesionComponent ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
