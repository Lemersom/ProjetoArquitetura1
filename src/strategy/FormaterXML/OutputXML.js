import FormaterXML from "./FormaterXMLStrategy.js";

export default class OutputXML extends FormaterXML {

  output(data) {

    this.xml += data.map((item) => { return `        <ListItem> ${item.Cidade} - ${item.Estado} </ListItem>\n` }).join('');

    return this.xml;

  }

}
