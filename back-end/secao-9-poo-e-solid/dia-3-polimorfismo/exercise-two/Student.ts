import EvaluationResult from "./EvaluationResult";
import Person from "./Person";

class Student extends Person {
  private _enrollment: number;
  private _evaluationResults: EvaluationResult[];

  private static enrollmentCounter = 0;

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment =+ Student.enrollmentCounter;
  }

  get enrollment(): number {
    return this._enrollment;
  }

  get evaluationResults(): EvaluationResult[] {
    return this._evaluationResults;
  }

  set enrollment(value: number) {
    this._enrollment = value;
  }

  set evaluationResults(value: EvaluationResult[]) {
    this._evaluationResults = value;
  }

  sumGrades = () => this.evaluationResults.reduce((acc, e) => e.score + acc, 0);

  sumAverageGrade = () => this.sumGrades() / 6;

}