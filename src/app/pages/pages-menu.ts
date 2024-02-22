import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: 'inicio'
  },
  {
    title: 'Ir a',
    icon: 'grid-outline',
    children: [
      {
        title: 'Camiones',
        link: 'camiones/listar',
      },
      {
        title: 'Conductores',
        link: 'conductores/listar',
      },
      {
        title: 'Viajes',
        link: 'viajes/listar',
      }
    ],
  },
  {
    title: 'Añadir',
    icon: 'plus-circle-outline',
    children: [
      {
        title: 'Camión',
        link: 'camiones/anadir',
      },
      {
        title: 'Conductor',
        link: 'conductores/anadir',
      },
      {
        title: 'Viaje',
        link: 'viajes/anadir',
      },
    ],
  },
];
