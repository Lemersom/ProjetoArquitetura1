import AbstractFormater from "./AbstractFormater.js"

export default class FormaterTXT extends AbstractFormater{

  report(states) {
    let txt = `Relatório de Nomes de Cidades =============================`;

    for (let i = 0; i < states['estados'].length; i++) {
      for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
        txt += '* ' + states['estados'][i]['cidades'][j] + '\n';
      }
    }
    return txt;
  }

}

