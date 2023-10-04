export default class FormaterHTML1 {
  
    output(states, html) {
        for (let i = 0; i < states['estados'].length; i++) {
            for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
              html += '     <li>' +  states['estados'][i]['cidades'][j] + '</li>\n';
              }
        }
      
      return html
    }
    
}
  