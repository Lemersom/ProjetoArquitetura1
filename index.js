import process from 'node:process';

import CitiesReporterBuilder from './src/CitiesReporterBuilder.js';

import FormaterHTML from './src/strategy/FormaterHTML/FormaterHTMLStrategy.js';
import FormaterHTML1 from './src/strategy/FormaterHTML/FormaterHTML1Strategy.js';
import FormaterHTML2 from './src/strategy/FormaterHTML/FormaterHTML2Strategy.js';
import FormaterHTML3 from './src/strategy/FormaterHTML/FormaterHTML3Strategy.js';

import FormaterTXT from './src/strategy/FormaterTXT/FormaterTXTStrategy.js';
import FormaterTXT1 from './src/strategy/FormaterTXT/FormaterTXT1Strategy.js';
import FormaterTXT2 from './src/strategy/FormaterTXT/FormaterTXT2Strategy.js';
import FormaterTXT3 from './src/strategy/FormaterTXT/FormaterTXT3Strategy.js';

import FormaterCSV from './src/strategy/FormaterCSV/FormaterCSVStrategy.js'
import FormaterCSV1 from './src/strategy/FormaterCSV/FormaterCSV1Strategy.js';
import FormaterCSV2 from './src/strategy/FormaterCSV/FormaterCSV2Strategy.js';
import FormaterCSV3 from './src/strategy/FormaterCSV/FormaterCSV3Strategy.js';

import FormaterJSON from './src/strategy/FormaterJSON/FormaterJSONStrategy.js';
import FormaterJSON1 from './src/strategy/FormaterJSON/FormaterJSON1Strategy.js';
import FormaterJSON2 from './src/strategy/FormaterJSON/FormaterJSON2Strategy.js';
import FormaterJSON3 from './src/strategy/FormaterJSON/FormaterJSON3Strategy.js';

import FormaterXML from './src/strategy/FormaterXML/FormaterXMLStrategy.js';
import FormaterXML1 from './src/strategy/FormaterXML/FormaterXML1Strategy.js';
import FormaterXML2 from './src/strategy/FormaterXML/FormaterXML2Strategy.js';
import FormaterXML3 from './src/strategy/FormaterXML/FormaterXML3Strategy.js';



const [cmd, script, format] = process.argv;
const fileJSON1 = './data/cidades-1.json',
      fileJSON2 = './data/cidades-2.json',
      fileCSV = './data/cidades.csv';
var reporter;


let builder1 = new CitiesReporterBuilder();
builder1.build();
builder1.setReader("JSON");
builder1.setParser("JSON");

let builder2 = new CitiesReporterBuilder();
builder2.build();
builder2.setReader("JSON");
builder2.setParser("JSON");

let builder3 = new CitiesReporterBuilder();
builder3.build();
builder3.setReader("CSV");
builder3.setParser("CSV");


if (format === 'html') {
    builder1.setStrategy(new FormaterHTML(new FormaterHTML1()));
    builder2.setStrategy(new FormaterHTML(new FormaterHTML2()));
    builder3.setStrategy(new FormaterHTML(new FormaterHTML3()));
} 
else if (format === 'txt') {
    builder1.setStrategy(new FormaterTXT(new FormaterTXT1()));
    builder2.setStrategy(new FormaterTXT(new FormaterTXT2()));
    builder3.setStrategy(new FormaterTXT(new FormaterTXT3()));
} 
else if(format === 'csv'){
    builder1.setStrategy(new FormaterCSV(new FormaterCSV1()));
    builder2.setStrategy(new FormaterCSV(new FormaterCSV2()));
    builder3.setStrategy(new FormaterCSV(new FormaterCSV3()));
}
else if(format === 'json'){
    builder1.setStrategy(new FormaterJSON(new FormaterJSON1()));
    builder2.setStrategy(new FormaterJSON(new FormaterJSON2()));
    builder3.setStrategy(new FormaterJSON(new FormaterJSON3()));
}
else if(format === 'xml'){
    builder1.setStrategy(new FormaterXML(new FormaterXML1()));
    builder2.setStrategy(new FormaterXML(new FormaterXML2()));
    builder3.setStrategy(new FormaterXML(new FormaterXML3()));
}
else {
  console.log("ERRO: deve ser txt, html, xml, csv ou json");
  process.exit(1);
}


// reporter = builder1.citiesReporter;
// console.log(reporter.report(fileJSON1));

// reporter = builder2.citiesReporter;
// console.log(reporter.report(fileJSON2));

// reporter = builder3.citiesReporter;
// console.log(reporter.report(fileCSV));