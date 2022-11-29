class PersonEncapsulamento {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const pe1 = new PersonEncapsulamento('Maria', 171, 58, 19);
const pe2 = new PersonEncapsulamento('João', 175, 66, 18);

// Alteração direta de variável pública
pe1.name = 'Mariah';
// Acesso direto a variável pública
console.log(pe1.name);
// Acesso a método público que manipula atributo privado
console.log(pe1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(pe2.age);
// Acesso a método público que manipula atributo privado
pe2.birthday();
console.log(pe2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
pe2.age = 17;
console.log(pe2.age);
// Leitura de atributo readonly
console.log(pe1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/