import { ICharacter } from "./ICharacter";
import IModel from "./IModel";

export default class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: ICharacter) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  /* Implementação dos outros métodos */
}