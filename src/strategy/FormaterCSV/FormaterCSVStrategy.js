import AbstractFormater from "../AbstractFormater.js";

export default class FormaterCSV extends AbstractFormater {

  csvStart = `Estado,Cidade`;

  constructor(type) {
    super()
    this._type = type;
    this.csv = "";
  }

  report(states) {
    this.csv = this.csvStart;
    this.csv = this._type.output(states);

    return this.csv;
  }
  
}
