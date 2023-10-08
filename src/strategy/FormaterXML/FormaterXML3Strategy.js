import FormaterXML from "./FormaterXMLStrategy.js";

export default class FormaterXML3 extends FormaterXML {

  output(states) {

    this.xml += states.map((item) => { return `        <ListItem> ${item.NOME} </ListItem>\n` }).join('');

    return this.xml;

  }

}

