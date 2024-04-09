import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ApartamentosComponent } from './paginas/apartamentos/apartamentos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { FormApartamentosComponent } from './paginas/form-apartamentos/form-apartamentos.component';
import { AuthGuard } from '../app/guards/autenticacion.guard';
import { FormContactosComponent } from './paginas/form-contactos/form-contactos.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contactos', component: ContactosComponent, title: "Contactos", canActivate: [AuthGuard]},
    { path: 'apartamentos', component: ApartamentosComponent, canActivate: [AuthGuard] },
    { path: 'contactos/apartamento/:id',component: ContactosComponent, title: "Contacto Apartamento {id}"},
    { path: 'crearapartamento', component: FormApartamentosComponent, title: "Crear Apartamento" },
    { path: 'editarapartamento/:id', component: FormApartamentosComponent, title: "Editar Apartamento"},
    { path: 'crearcontacto/:idApartamento', component: FormContactosComponent, title: "Crear Contacto" },
    { path: 'editarcontacto/:id/apartamento/:idApartamento', component: FormContactosComponent, title: "Editar Contacto"}
];