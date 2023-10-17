import FormaterJSON from "./FormaterJSONStrategy.js";

export default class OutputJSON extends FormaterJSON {

  output(data) {

    this.json = data.map((item) => { return `  {\n   "Cidade": "${item.Cidade}",\n   "Estado": "${item.Estado}"\n  },\n` }).join('');

    return this.json;

  }

}