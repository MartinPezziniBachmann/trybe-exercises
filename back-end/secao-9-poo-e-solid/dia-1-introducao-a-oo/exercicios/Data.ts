class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor (dia: number, mes: number, ano: number) {
    const dataStr = `${ano}-${mes}-${dia}`;

    if(new Date(dataStr).getDate() !== dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }
}