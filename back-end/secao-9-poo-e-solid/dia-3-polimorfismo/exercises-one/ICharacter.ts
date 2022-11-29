export interface ICharacter {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends ICharacter {
  id: number;
}

export const db: DbCharacter[] = [];