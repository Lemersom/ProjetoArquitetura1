import AbstractFormater from "../AbstractFormater.js";

export default class FormaterHTML extends AbstractFormater {

  htmlStart = `
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

  htmlEnd = `
      </ul>
    </body>
  </html>`;

  constructor(product) {
    super()
    this.product = product; // new OutputHTML()
    this.html = "";
  }

  report(data) {
    this.html = this.htmlStart;
    this.html = this.product.output(data);
    this.html += this.htmlEnd;

    return this.html;
  }

}
