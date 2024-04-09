import { Apartamentos } from './apartamentos';
 
export interface Contactos {
    id?: number;
    nombre: string;
    celular: number;
    apartamento: Apartamentos['id'];
}
