import Character from "./Character";

export default class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Hey');
  }

  specialMove(): void {
    console.log('Special arrow!');
  }
}