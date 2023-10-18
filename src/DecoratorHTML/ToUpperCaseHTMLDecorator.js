import { JSDOM } from 'jsdom';
import ListDecorator from "./ListDecorator.js";

export default class toUpperCaseHTMLDecorator extends ListDecorator{

    decorateListItems() {

        const { window } = new JSDOM(this.dataHTML); //possibilita manipulação de DOM no ambiente node
        const document = window.document;
        
        const liElements = document.querySelectorAll('li');
        liElements.forEach((li) => {
            li.textContent = li.textContent.toUpperCase(); //aplica o upperCase aos <li>
        });
    
        this.dataHTML = document.body.innerHTML;
        
    }

}