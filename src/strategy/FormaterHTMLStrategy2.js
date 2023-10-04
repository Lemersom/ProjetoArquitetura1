export default class FormaterHTML2 {
  
    output(states, html) {
        for (let i = 0; i < states['estados'].length; i++) {
            for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
                html += '     <li> <span class="cidade">' + states['estados'][i]['cidades'][j] + '</span> - ' + states['estados'][i]['sigla'] + '</li>\n';
            }
        }
        return html
      }

}
  