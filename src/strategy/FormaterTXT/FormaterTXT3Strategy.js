import FormaterTXT from "./FormaterTXTStrategy.js";

export default class FormaterTXT3 extends FormaterTXT {

  output(states) {

    this.txt += states.map((item) => { return `* ${item.NOME} \n` }).join('');

    return this.txt;

  }

}