import AbstractFormater from "../AbstractFormater.js";

export default class FormaterCSV extends AbstractFormater {

  csvStart = `Cidade,Estado`;

  constructor(product) {
    super();
    this.product = product; // new OutputCSV()
    this.csv = "";
  }

  report(data) {
    this.csv = this.csvStart;
    this.csv = this.product.output(data);

    return this.csv;
  }

}
