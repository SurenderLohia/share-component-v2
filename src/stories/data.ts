import { AccessListItemType, Person } from "../components/Share/types";
import thumbLogoUrl from '../images/logo.svg';
import userAccessListAvatar1 from '../images/user-access-list-avatar-1.svg';

export const persons: Person[] = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatarUrl: 'http://localhost:8080/static/media/src/images/avatar-1.svg',
    accessType: 'no-access'
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatarUrl: 'http://localhost:8080/static/media/src/images/avatar-2.svg',
    accessType: 'no-access'
  }
];

export const groups: Person[] = [
  {
    id: 3,
    name: 'Product',
    avatarUrl: '',
    accessType: 'no-access'
  },
  {
    id: 4,
    name: 'Engineering',
    avatarUrl: '',
    accessType: 'no-access'
  },
];

export const userAccessList: AccessListItemType[] = [
  {
    name: 'Everyone at OSlash',
    info: '25 workspace members',
    avatarUrl: thumbLogoUrl,
    accessType: 'no-access'
  },
  {
    name: 'Iron man',
    info: 'iron@oslash.com',
    avatarUrl: userAccessListAvatar1,
    accessType: 'can-edit'
  }
]