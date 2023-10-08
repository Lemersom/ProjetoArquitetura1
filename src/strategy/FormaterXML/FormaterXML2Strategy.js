import FormaterXML from "./FormaterXMLStrategy.js";

export default class FormaterXML2 extends FormaterXML {

  output(states) {

    this.xml += states.map((item) => { return `        <ListItem> ${item.Nome} </ListItem>\n` }).join('');

    return this.xml;

  }

}
