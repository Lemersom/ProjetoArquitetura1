import FormaterCSV from "./FormaterCSVStrategy.js";

export default class FormaterCSV3 extends FormaterCSV {

  output(states) {

    this.csv += states.map((item) => { return `${item['COD UF']},${item.NOME}\n` }).join('')

    return this.csv;

  }

}