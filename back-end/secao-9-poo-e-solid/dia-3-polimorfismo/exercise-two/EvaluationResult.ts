import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  get score(): number {
    return this._score;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  set score(value: number) {
    this._score = value;
  }

  private validateScore(value: number) {
    if (value < 0) throw new Error('A nota não pode ser negativa');
    if (value > this._evaluation.score) throw new Error(`A nota não pode ser maior que ${this._evaluation.score}`)
  }
}