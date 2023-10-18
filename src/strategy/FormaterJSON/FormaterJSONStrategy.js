import AbstractFormater from "../AbstractFormater.js"

export default class FormaterJSON extends AbstractFormater {

  jsonStart = `[`;

  jsonEnd = `]`;


  constructor(product) {
    super();
    this.product = product; // new OutputJSON()
    this.json = "";
  }

  report(data) {
    this.json = this.jsonStart;
    this.json = this.product.output(data);
    this.json += this.jsonEnd;

    return this.json;
  }

}

