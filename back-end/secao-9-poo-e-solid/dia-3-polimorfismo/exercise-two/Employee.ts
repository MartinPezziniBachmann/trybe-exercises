import Person from "./Person";

export default class Employee extends Person {
  private _registration: number;
  private _salary: number;
  private _admissionDate: Date;

  static registrationsCounter = 0;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._registration =+ Employee.registrationsCounter;
    this._salary = salary;
    this._admissionDate = new Date();
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
}