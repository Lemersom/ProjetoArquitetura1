import FormaterCSV from "./FormaterCSVStrategy.js";

export default class OutputCSV extends FormaterCSV {

  output(data) {

    this.csv += data.map((item) => { return `${item.Cidade},${item.Estado}\n` }).join('');

    return this.csv;

  }

}