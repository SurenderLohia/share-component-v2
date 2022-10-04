export type AccessTypeId = 'full-access' | 'can-edit' | 'can-view' | 'no-access';

export type AccessListItemType = {
  name: string,
  info: string,
  avatarUrl: string,
  accessType: AccessTypeId
}

export type AccessListItemProps = AccessListItemType & {
  handleAccessTypeChange: (e: React.ChangeEvent<HTMLSelectElement>, user: AccessListItemType) => void;
}

export type AccessType = {
  id: AccessTypeId,
  label: string
}

export type Person = {
  id: number,
  name: string,
  avatarUrl?: string;
  accessType: AccessTypeId;
}

export type PersonItemProps = {
  id: number,
  name: string,
  avatarSize?: number
  avatarUrl?: string;
  accessType: AccessTypeId;
  handleSelectPerson: (person: Person) => void;
}

export type ShareProps = {
  persons: Person[],
  groups: Person[],
  userAccessList: AccessListItemType[]
}

export type AvatarProps = {
  name: string,
  size?: number;
  avatarUrl?: string;
}

export type ShareCurrentView = 'share-button' | 'list' | 'person-selection';

export type ChipItemProps = {
  text: string,
  id: number,
}



