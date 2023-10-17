import FormaterHTML from "./FormaterHTMLStrategy.js";

export default class OutputHTML extends FormaterHTML {

    output(data) {

        this.html += data.map((item) => { return `         <li> ${item.Cidade} - ${item.Estado} </li>\n` }).join('');

        return this.html;

    }

}
