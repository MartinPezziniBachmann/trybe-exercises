import Person from "./Person";

class Student extends Person {
  private _enrollment: number;
  private _examsGrades: number[];
  private _worksGrades: number[];

  private static enrollmentCounter = 0;

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment =+ Student.enrollmentCounter;
  }

  get enrollment(): number {
    return this._enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set enrollment(value: number) {
    this._enrollment = value;
  }

  set examsGrades(value: number[]) {
    this._examsGrades = value;
  }

  set worksGrades(value: number[]) {
    this._worksGrades = value;
  }

  sumGrades = () => this._examsGrades.reduce((acc, e) => e + acc) + this._worksGrades.reduce((acc, e) => e + acc);

  sumAverageGrade = () => this.sumGrades() / 6;

}