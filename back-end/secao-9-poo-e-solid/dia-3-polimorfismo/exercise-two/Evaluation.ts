import Teacher from "./Teacher";

export default abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this._score = score;
    this._teacher = teacher;
  }

  get score(): number {
    return this._score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  private validateScore(value: number) {
    if (value < 0) throw new Error('A nota não pode ser negativa');
  }
}