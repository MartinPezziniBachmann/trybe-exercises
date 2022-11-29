import { DbCharacter, ICharacter } from "./ICharacter";

export default interface IModel {
  create: (character: ICharacter) => Promise<DbCharacter>;
  update: (id: number, character: ICharacter) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}