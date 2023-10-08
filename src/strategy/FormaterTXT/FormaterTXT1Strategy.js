import FormaterTXT from "./FormaterTXTStrategy.js";

export default class FormaterTXT1 extends FormaterTXT {

  output(states) {

    for (let i = 0; i < states['estados'].length; i++) {
      for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
        this.txt += `* ${states['estados'][i]['cidades'][j]}\n`;
      }
    }

    return this.txt;
    
  }

}
