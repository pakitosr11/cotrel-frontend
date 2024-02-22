import { Camion } from './Camion';
import { Viaje } from './Viaje';

export class Conductor{
    id:number;
    fechaNacimiento: Date;
    nombre:String;
    apellido1:String;
    apellido2:String;
    dni: String;
    sueldo: number;
    modeloCamion: String;
    telefono: String;
    camion: Camion;
    Viajes: Viaje[];
  }
  