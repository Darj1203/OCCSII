import { Rol } from './rol';

export interface Usuarios {
    id?: number;
    correo: string;
    password: string;
    rol: Rol['id'];
}
