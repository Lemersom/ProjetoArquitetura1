import FormaterCSV from "./FormaterCSVStrategy.js";

export default class FormaterCSV1 extends FormaterCSV {

  output(states) {

    for (let i = 0; i < states['estados'].length; i++) {
      for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
        this.csv += `${states['estados'][i]['nome']},${states['estados'][i]['cidades'][j]}\n`;
      }
    }

    return this.csv;
    
  }

}