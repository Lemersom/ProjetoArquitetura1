import Parser from "./Parser.js";
import Reader from "./Reader.js";

export default class CitiesReporter {

    constructor(format) {
        this.format = format;
        this.reader = new Reader();
        this.parser = new Parser();
        this.readerType = "";
        this.parserType = "";
    }

    read(filename) {
        if (this.readerType === "CSV") {
            this.citiesDataRead = this.reader.readCSV(filename);
        }
        else if (this.readerType === "JSON") {
            this.citiesDataRead = this.reader.readJSON(filename);
        }
    }

    parse() {
        if (this.parserType === "CSV") {
            this.citiesData = this.parser.parseCSV(this.citiesDataRead, this.parserType);
        }
        else if (this.parserType === "JSON1" || this.parserType === "JSON2") {
            this.citiesData = this.parser.parseJSON(this.citiesDataRead, this.parserType);
        }
    }

    report(filename) {
        this.read(filename);
        this.parse();
        return this.format.report(this.citiesData);
    }

}