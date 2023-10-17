import process from 'node:process';

import CitiesReporterBuilder from './src/CitiesReporterBuilder.js';

import FormaterHTML from './src/strategy/FormaterHTML/FormaterHTMLStrategy.js';
import OutputHTML from './src/strategy/FormaterHTML/OutputHTML.js';


import FormaterTXT from './src/strategy/FormaterTXT/FormaterTXTStrategy.js';
import OutputTXT from './src/strategy/FormaterTXT/OutputTXT.js';


import FormaterCSV from './src/strategy/FormaterCSV/FormaterCSVStrategy.js'
import OutputCSV from './src/strategy/FormaterCSV/OutputCSV.js';


import FormaterJSON from './src/strategy/FormaterJSON/FormaterJSONStrategy.js';
import OutputJSON from './src/strategy/FormaterJSON/OutputJSON.js';


import FormaterXML from './src/strategy/FormaterXML/FormaterXMLStrategy.js';
import OutputXML from './src/strategy/FormaterXML/OutputXML.js';



const [cmd, script, format] = process.argv;
const fileJSON1 = './data/cidades-1.json',
    fileJSON2 = './data/cidades-2.json',
    fileCSV = './data/cidades.csv';
var reporter;


let builder1 = new CitiesReporterBuilder();
builder1.build();
builder1.setReader("JSON");
builder1.setParser("JSON1");

let builder2 = new CitiesReporterBuilder();
builder2.build();
builder2.setReader("JSON");
builder2.setParser("JSON2");

let builder3 = new CitiesReporterBuilder();
builder3.build();
builder3.setReader("CSV");
builder3.setParser("CSV");


if (format === 'html') {
    builder1.setStrategy(new FormaterHTML(new OutputHTML()));
    builder2.setStrategy(new FormaterHTML(new OutputHTML()));
    builder3.setStrategy(new FormaterHTML(new OutputHTML()));
}
else if (format === 'txt') {
    builder1.setStrategy(new FormaterTXT(new OutputTXT()));
    builder2.setStrategy(new FormaterTXT(new OutputTXT()));
    builder3.setStrategy(new FormaterTXT(new OutputTXT()));
}
else if (format === 'csv') {
    builder1.setStrategy(new FormaterCSV(new OutputCSV()));
    builder2.setStrategy(new FormaterCSV(new OutputCSV()));
    builder3.setStrategy(new FormaterCSV(new OutputCSV()));
}
else if (format === 'json') {
    builder1.setStrategy(new FormaterJSON(new OutputJSON()));
    builder2.setStrategy(new FormaterJSON(new OutputJSON()));
    builder3.setStrategy(new FormaterJSON(new OutputJSON()));
}
else if (format === 'xml') {
    builder1.setStrategy(new FormaterXML(new OutputXML()));
    builder2.setStrategy(new FormaterXML(new OutputXML()));
    builder3.setStrategy(new FormaterXML(new OutputXML()));
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