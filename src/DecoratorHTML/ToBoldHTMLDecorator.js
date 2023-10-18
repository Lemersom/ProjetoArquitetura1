import { JSDOM } from 'jsdom';
import ListDecorator from "./ListDecorator.js";

export default class BoldHTMLDecorator extends ListDecorator {

    decorateListItems() {

        const { window } = new JSDOM(this.dataHTML); //possibilita manipulação de DOM no ambiente node
        const document = window.document;

        const liElements = document.querySelectorAll('li');
        liElements.forEach((li) => {
            li.innerHTML = `<strong>${li.innerHTML}</strong>`; //aplica o estilo bold aos <li>
        });

        this.dataHTML = document.body.innerHTML
        
    }

}