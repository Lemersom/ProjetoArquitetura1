import FormaterTXT from "./FormaterTXTStrategy.js";

export default class FormaterTXT2 extends FormaterTXT {

  output(states) {

    this.txt += states.map((item) => { return `* ${item.Nome}\n` }).join('');

    return this.txt;
    
  }

}
