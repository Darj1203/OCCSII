import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ApartamentosComponent } from './paginas/apartamentos/apartamentos.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';

export const routes: Routes = [
    //Crear ruta de login principal para el acceso
    { path: '', component: LoginComponent, title: "Inicio"},
    { path: 'contactos', component: ContactosComponent, title: "Contactos"},
    { path: 'apartamentos', component: ApartamentosComponent, title: "Apartamentos"},
    
];