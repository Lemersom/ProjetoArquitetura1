import AbstractFormater from "../AbstractFormater.js"

export default class FormaterJSON extends AbstractFormater{

    
      jsonStart = `
      {
        "cidades": [`;

      jsonEnd = `  ]
}`
    

    constructor(type) {
      super()
      this._type = type;
      this.json = ""
    }
  
    report(states) {
      this.json = this.jsonStart;
      this.json = this._type.output(states);
      this.json += this.jsonEnd;

      return this.json
    }

}
  
  