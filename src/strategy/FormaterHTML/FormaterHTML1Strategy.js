import FormaterHTML from "./FormaterHTMLStrategy.js";

export default class FormaterHTML2 extends FormaterHTML {

    output(states) {

        for (let i = 0; i < states['estados'].length; i++) {
            for (let j = 0; j < states['estados'][i]['cidades'].length; j++) {
                this.html += `         <li> <span class="cidade"> ${states['estados'][i]['cidades'][j]} </span> - ${states['estados'][i]['sigla']} </li>\n`;
            }
        }

        return this.html;

    }

}
