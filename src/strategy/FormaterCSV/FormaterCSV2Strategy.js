import FormaterCSV from "./FormaterCSVStrategy.js";

export default class FormaterCSV2 extends FormaterCSV {

  output(states) {

    this.csv += states.map((item) => { return `${item.Estado},${item.Nome}\n` }).join('')

    return this.csv;

  }

}