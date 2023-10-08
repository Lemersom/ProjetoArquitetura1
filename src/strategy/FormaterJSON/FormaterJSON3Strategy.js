import FormaterJSON from "./FormaterJSONStrategy.js";

export default class FormaterJSON3 extends FormaterJSON {

  output(states) {

    this.json = states.map((item) => { return `   "${item.NOME}",\n` }).join('');

    return this.json;
    
  }

}