import AbstractFormater from "../AbstractFormater.js";

export default class FormaterCSV extends AbstractFormater {

  csvStart = `Cidade,Estado`;

  constructor(type) {
    super();
    this._type = type;
    this.csv = "";
  }

  report(data) {
    this.csv = this.csvStart;
    this.csv = this._type.output(data);

    return this.csv;
  }

}
