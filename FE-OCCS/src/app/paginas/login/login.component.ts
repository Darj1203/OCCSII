import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,} from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  formulario: FormGroup;
  constructor(private usersService: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      correo: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    try {
      const response: any = await this.usersService.autorizar(this.formulario.value).toPromise();
      console.log(response);
      if (response.token) {
        localStorage.setItem('token', response.token); // Guardar el token en el almacenamiento local
        this.router.navigate(['/apartamentos']); // Redirigir a la página de apartamentos si el acceso es correcto
      }
    } catch (error) {
      console.error(error);
      alert('Usuario no ha podido ingresar. Verifique sus credenciales.');
      window.location.reload(); // Recargar la página si el acceso es incorrecto
    }
  }
}
