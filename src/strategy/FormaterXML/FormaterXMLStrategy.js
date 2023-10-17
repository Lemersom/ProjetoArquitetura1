import AbstractFormater from "../AbstractFormater.js"

export default class FormaterXML extends AbstractFormater {

  xmlStart = `
      <?xml version="1.0" encoding="UTF-8"?>
      <View>
        <List>`;


  xmlEnd = `  <List/>
</View>`;


  constructor(type) {
    super()
    this._type = type;
    this.xml = "";
  }

  report(data) {
    this.xml = this.xmlStart;
    this.xml = this._type.output(data);
    this.xml += this.xmlEnd;

    return this.xml;
  }

}

