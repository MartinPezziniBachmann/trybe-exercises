class Estudante {
  private matricula: string;
  private nome: string;
  private notasProva: [number, number, number, number];
  private notasTrabalho: [number, number];

  constructor(parameters) {
    
  }

  calcularSomaNotas = () => this.notasProva.reduce((acc, e) => e + acc) + this.notasTrabalho.reduce((acc, e) => e + acc);

  calcularMediaNotas = () => this.calcularSomaNotas() / 6;
}