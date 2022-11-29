import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk(): void {
    console.log('Hello!');
  }

  specialMove(): void {
    console.log('Special punch!');
  }
}