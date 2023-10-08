import FormaterXML from "./FormaterXMLStrategy.js";

export default class FormaterXML1 extends FormaterXML {

  output(states) {

    for (let i = 0; i < states['estados'].length; i++) {
      for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
        this.xml += `        <ListItem> ${states['estados'][i]['cidades'][j]} </ListItem>\n`;
      }
    }

    return this.xml;

  }

}
