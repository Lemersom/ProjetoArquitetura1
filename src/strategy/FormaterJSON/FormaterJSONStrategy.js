import AbstractFormater from "../AbstractFormater.js"

export default class FormaterJSON extends AbstractFormater {

  jsonStart = `[`;

  jsonEnd = `]`;


  constructor(type) {
    super();
    this._type = type;
    this.json = "";
  }

  report(data) {
    this.json = this.jsonStart;
    this.json = this._type.output(data);
    this.json += this.jsonEnd;

    return this.json;
  }

}

