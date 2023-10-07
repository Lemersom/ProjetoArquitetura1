import AbstractFormater from "./AbstractFormater.js"

export default class FormaterJSON extends AbstractFormater{

    report(states) {
      let json = `
      {
        "cidades": [`;

      for (let i = 0; i < states['estados'].length; i++) {
        for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
            json += `   "${states['estados'][i]['cidades'][j]}",\n`;
        }
      }

      json += `  ]
}`

      return json;
    }

}
  
  