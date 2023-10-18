import AbstractFormater from "../AbstractFormater.js";

export default class FormaterTXT extends AbstractFormater {

  txtStart = `Relatório de Nomes de Cidades =============================`;

  constructor(product) {
    super();
    this.product = product; // new OutputTXT()
    this.txt = "";
  }

  report(data) {
    this.txt = this.txtStart;
    this.txt = this.product.output(data);

    return this.txt;
  }

}
