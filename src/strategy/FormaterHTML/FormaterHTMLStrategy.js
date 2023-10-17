import AbstractFormater from "../AbstractFormater.js";

export default class FormaterHTML extends AbstractFormater {

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
    this.html = "";
  }

  report(data) {
    this.html = this._htmlStart;
    this.html = this._type.output(data);
    this.html += this._htmlEnd;

    return this.html;
  }

}
