import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Importemos servicios
import { ApartamentosService } from './servicios/apartamentos.service';
import { ConexionService } from './servicios/conexion.service';
import { ContactosService } from './servicios/contactos.service';
import { UsuariosService } from './servicios/usuarios.service';

// Importemos modulos
import { CerrarSesionComponent } from './paginas/Modulos/cerrar-sesion/cerrar-sesion.component';
import { MenuComponent } from './paginas/Modulos/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

// Importamos las páginas
import { ApartamentosComponent } from './paginas/apartamentos/apartamentos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,

    HttpClientModule,
    CerrarSesionComponent,
    MenuComponent,
    ReactiveFormsModule,
    LoginComponent,
    ApartamentosComponent,
    ContactosComponent,
  ],
  providers: [
    ApartamentosService,
    ConexionService,
    ContactosService,
    UsuariosService,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'APLICACION OCCS'; 
  constructor(private usuariosService: UsuariosService) {}
}