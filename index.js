import sys from 'node:sys';

import FormaterHTMLStrategy from './src/strategy/FormaterHTMLStrategy.js';
import FormaterTXTStrategy from './src/strategy/FormaterTXTStrategy.js';
import FormaterStrategy from './src/strategy/FormaterStrategy.js';
import FormaterHTML1 from './src/strategy/FormaterHTMLStrategy1.js';
import FormaterHTML2 from './src/strategy/FormaterHTMLStrategy2.js';


const [cmd, script, format] = process.argv;
const filename = './data/cidades-1.json';
var reporter;


if (format === 'html1') {
  reporter = new FormaterStrategy(new FormaterHTMLStrategy(new FormaterHTML1()));
} 
else if (format === 'html2') {
  reporter = new FormaterStrategy(new FormaterHTMLStrategy(new FormaterHTML2()));
} 
else if (format === 'txt') {
  reporter = new FormaterStrategy(new FormaterTXTStrategy());
} 
else {
  console.log("Erro: deve ser txt ou html");
  //sys.exit(1)
}

console.log(reporter.report(filename));
