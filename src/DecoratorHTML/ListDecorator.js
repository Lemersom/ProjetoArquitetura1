import FormaterHTML from "../strategy/FormaterHTML/FormaterHTMLStrategy.js"

export default class ListDecorator extends FormaterHTML{

  constructor(dataHTML) {
    super()
    this.dataHTML = dataHTML

  }

  getDecoratedHTML() {
    // retorna o conjunto de <li> com um estilo aplicado
    return this.dataHTML

  }

  builderHTMLDecorator(){
    // constrói o html com o estilo aplicado aos <li>
    return this._htmlStart + 
           this.dataHTML + 
           this._htmlEnd

  }

}
