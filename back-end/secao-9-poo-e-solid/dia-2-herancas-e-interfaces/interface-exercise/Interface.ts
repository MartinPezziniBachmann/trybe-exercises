interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number) {}
  
  myFunc(myParam: number) {
    return `Soma: ${myParam + this.myNumber}`;
  }
}

const classObj = new MyClass(10);

console.log(classObj.myNumber);

console.log(classObj.myFunc(15));