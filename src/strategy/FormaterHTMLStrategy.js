import AbstractFormater from "./AbstractFormater.js"

export default class FormaterHTML extends AbstractFormater{

  _htmlStart = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
      <ul>
  `;

  _htmlEnd = `
      </ul>
    </body>
  </html>`;

  constructor(type) {
    super()
    this._type = type;
  }

  report(states) {
    let html = this._htmlStart;
    html = this._type.output(states, html);
    html += this._htmlEnd;

    return html
  }

}
