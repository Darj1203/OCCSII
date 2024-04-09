import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UsuariosService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Permitir acceso si el usuario está autenticado
    } else {
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión si el usuario no está autenticado
      return false;
    }
  }
}