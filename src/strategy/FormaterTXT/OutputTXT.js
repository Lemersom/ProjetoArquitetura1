import FormaterTXT from "./FormaterTXTStrategy.js";

export default class OutputTXT extends FormaterTXT {

  output(data) {

    this.txt += data.map((item) => { return `* ${item.Cidade} - ${item.Estado}\n` }).join('');

    return this.txt;

  }

}
