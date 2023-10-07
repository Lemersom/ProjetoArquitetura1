import process from 'node:process';

import CitiesReporterBuilder from './src/CitiesReporterBuilder.js';
import CitiesReporter from './src/CitiesReporter.js';
import FormaterHTML from './src/strategy/FormaterHTMLStrategy.js';
import FormaterTXT from './src/strategy/FormaterTXTStrategy.js';
import FormaterHTML1 from './src/strategy/FormaterHTMLStrategy1.js';
import FormaterHTML2 from './src/strategy/FormaterHTMLStrategy2.js';
import FormaterXML from './src/strategy/FormaterXMLStrategy.js';
import FormaterCSV from './src/strategy/FormaterCSVStrategy.js'
import FormaterJSON from './src/strategy/FormaterJSONStrategy.js';


const [cmd, script, format] = process.argv;
const filename = './data/cidades-1.json';
var reporter;

let builder = new CitiesReporterBuilder()
builder.build()
builder.setReader("JSON")
builder.setParser("JSON")


if (format === 'html1') {
    builder.setStrategy(new FormaterHTML(new FormaterHTML1()));
} 
else if (format === 'html2') {
    builder.setStrategy(new FormaterHTML(new FormaterHTML2()));
} 
else if (format === 'txt') {
    builder.setStrategy(new FormaterTXT());
} 
else if(format === 'xml'){
    builder.setStrategy(new FormaterXML())
}
else if(format === 'csv'){
    builder.setStrategy(new FormaterCSV())
}
else if(format === 'json'){
    builder.setStrategy(new FormaterJSON())
}
else {
  console.log("Erro: deve ser txt, html1, html2, xml, csv ou json");
  process.exit(1)
}


reporter = builder.citiesReporter
console.log(reporter.report(filename));