import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

class Teacher extends Person implements Employee {
  private _registration: number;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  static registrationsCounter = 0;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._registration =+ Teacher.registrationsCounter;
    this._salary = salary;
    this._admissionDate = new Date();
    this._subject = subject;
  }

  get registration(): number {
    return this._registration;
  }

  get salary(): number {
    return this._salary;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  get subject(): Subject {
    return this._subject;
  }
}