import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {

      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'


    },
    {

      icon: 'person-add-outline',
      name: 'Registro de usuario',
      redirecTo: '/alumno'

    },

    {
      
      icon: 'person-circle-outline',
      name: 'Iniciar sesion',
      redirecTo: '/docente'

    },

    {
      icon: 'trophy-outline',
      name: 'Sobre nosotros',
      redirecTo: '/quienessomos'
    },

    {
      icon: 'power-outline',
      name: 'Cerrar sesion',
      redirecTo: '/inicio'
    },

  ];



}
