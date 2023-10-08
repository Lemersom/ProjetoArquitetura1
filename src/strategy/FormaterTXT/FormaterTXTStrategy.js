import AbstractFormater from "../AbstractFormater.js";

export default class FormaterTXT extends AbstractFormater {

  txtStart = `Relatório de Nomes de Cidades =============================`;

  constructor(type) {
    super()
    this._type = type;
    this.txt = "";
  }

  report(states) {
    this.txt = this.txtStart;
    this.txt = this._type.output(states);

    return this.txt;
  }

}
