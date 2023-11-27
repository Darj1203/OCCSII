import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importemos interfaces
import { Apartamentos } from './interfaces/apartamentos';
import { Contactos } from './interfaces/contactos';
import { Rol } from './interfaces/rol';
import { Usuarios } from './interfaces/usuarios';

// Importemos servicios
import { ApartamentosService } from './servicios/apartamentos.service';
import { ConexionService } from './servicios/conexion.service';
import { ContactosService } from './servicios/contactos.service';
import { UsuariosService } from './servicios/usuarios.service';

// Importemos modulos

// Importamos las páginas
import { CerrarSesionComponent } from './paginas/Modulos/cerrar-sesion/cerrar-sesion.component';
import { MenuComponent } from './paginas/Modulos/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';
import { ApartamentosComponent } from './paginas/apartamentos/apartamentos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    CerrarSesionComponent,
    MenuComponent,
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