import AbstractFormater from "./AbstractFormater.js"

export default class FormaterXML extends AbstractFormater{

    report(states) {
      let xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <View>
        <List>`;

      for (let i = 0; i < states['estados'].length; i++) {
        for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
            xml += '        <ListItem>' +  states['estados'][i]['cidades'][j] + '</ListItem>\n';
        }
      }

      xml += `  <List/>
</View>`

      return xml;
    }
  
  }
  
  