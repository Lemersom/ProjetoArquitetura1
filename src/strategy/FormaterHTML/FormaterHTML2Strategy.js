import FormaterHTML from "./FormaterHTMLStrategy.js";

export default class FormaterHTML2 extends FormaterHTML {

    output(states) {

        this.html += states.map((item) => {
            return `        <li> <span class="cidade"> ${item.Nome} </span> - ${item.Estado} </li>\n`
        }).join('');

        return this.html;

    }

}