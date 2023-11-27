import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ApartamentosComponent } from './paginas/apartamentos/apartamentos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { AuthGuard } from './guard/usuario.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contactos', component: ContactosComponent, title: "Contactos", canActivate: [AuthGuard]},
    { path: 'apartamentos', component: ApartamentosComponent, title: "Apartamentos", canActivate: [AuthGuard]},  
];