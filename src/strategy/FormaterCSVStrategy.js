import AbstractFormater from "./AbstractFormater.js"

export default class FormaterCSV extends AbstractFormater{

    report(states) {
      let csv = `estados`;
  
      for (let i = 0; i < states['estados'].length; i++) {
        for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
          csv += states['estados'][i]['cidades'][j] + ',\n';
        }
      }
      return csv;
    }
  
  }
  
  