import FormaterJSON from "./FormaterJSONStrategy.js";

export default class FormaterJSON2 extends FormaterJSON {

  output(states) {

    this.json += states.map((item) => { return `   "${item.Nome}",\n` }).join('');

    return this.json;

  }

}