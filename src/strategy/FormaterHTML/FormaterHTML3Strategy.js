import FormaterHTML from "./FormaterHTMLStrategy.js";

export default class FormaterHTML3 extends FormaterHTML {

    output(states) {

        this.html += states.map((item) => {
            return `        <li> <span class="cidade"> ${item.NOME} </span> - ${item.COD} </li>\n`
        }).join('');

        return this.html;

    }

}