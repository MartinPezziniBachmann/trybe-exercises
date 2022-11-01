class Superclass {
  isSuper: boolean;

  constructor () {
    this.isSuper = true;
  }

  protected sayHello () {
    console.log('Olá mundo!');
  };
}

class Subclass extends Superclass {
  constructor () {
    super();
    this.isSuper = false;
  }

  sayHello2 () {
    this.sayHello();
  }
}

const myFunc = (myClass: Subclass) => {
  console.log(myClass.isSuper ? 'Super!' : 'Sub!');
  myClass.sayHello2();
}

// const mySuper = new Superclass();

const mySub = new Subclass();

// myFunc(mySuper);

myFunc(mySub);
