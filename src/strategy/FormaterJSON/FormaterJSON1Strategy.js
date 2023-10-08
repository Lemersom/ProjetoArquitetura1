import FormaterJSON from "./FormaterJSONStrategy.js";

export default class FormaterJSON1 extends FormaterJSON {

  output(states) {

    for (let i = 0; i < states['estados'].length; i++) {
      for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
        this.json += `   "${states['estados'][i]['cidades'][j]}",\n`;
      }
    }

    return this.json;
    
  }

}