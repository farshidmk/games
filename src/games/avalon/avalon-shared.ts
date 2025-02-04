import { AvalonRole } from './avalon-types';
import { z } from 'zod';

export const playerValidation = z.object({
  name: z.string().min(1, 'فیلد نام الزامی است '),
});

export const AVALON_ROLES: AvalonRole[] = [
  {
    id: 6,
    name: 'Royal Servant',
    isEvil: false,
    imgUrl: '/public/images/avalon/royalServant.png',
  },
  {
    id: 1,
    name: 'Merlin',
    isEvil: false,
    imgUrl: '/public/images/avalon/merlin.png',
  },
  {
    id: 3,
    name: 'Percival',
    isEvil: false,
    imgUrl: '/public/images/avalon/percival.png',
  },
  {
    id: 2,
    name: 'Morgana',
    isEvil: true,
    imgUrl: '/public/images/avalon/morgana.png',
  },
  {
    id: 4,
    name: 'Assassin',
    isEvil: true,
    imgUrl: '/public/images/avalon/assasin.png',
  },
  {
    id: 7,
    name: 'Royal Servant',
    isEvil: false,
    imgUrl: '/public/images/avalon/royalServant.png',
  },
  {
    id: 10,
    name: 'Mordered',
    isEvil: true,
    imgUrl: '/public/images/avalon/percival.png',
  },
  {
    id: 8,
    name: 'Royal Servant',
    isEvil: false,
    imgUrl: '/public/images/avalon/royalServant.png',
  },
  {
    id: 9,
    name: 'Royal Servant',
    isEvil: false,
    imgUrl: '/public/images/avalon/royalServant.png',
  },
  {
    id: 5,
    name: 'Oberon',
    isEvil: true,
    imgUrl: '/public/images/avalon/percival.png',
  },
];
