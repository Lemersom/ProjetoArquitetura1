import CitiesReporter from './CitiesReporter.js'

export default class FormaterTXT extends CitiesReporter{

  output() {
    let txt = `Relatório de Nomes de Cidades =============================`;

    for (let i = 0; i < this._cities.length; i++) {
      txt += '* ' + this._cities[i]['Nome'] + '\n';
    }

    return txt;
  }

}

