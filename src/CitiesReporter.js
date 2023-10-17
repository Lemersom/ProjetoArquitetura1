import Parser from "./Parser.js";
import Reader from "./Reader.js";

export default class CitiesReporter {

    constructor(type) {
        this._type = type;
        this.reader = new Reader();
        this.parser = new Parser();
        this.readerType = "";
        this.parserType = "";
    }

    _read(filename) {
        if (this.readerType === "CSV") {
            this._statesRead = this.reader.readCSV(filename);
        }
        else if (this.readerType === "JSON") {
            this._statesRead = this.reader.readJSON(filename);
        }
    }

    _parse() {
        if (this.parserType === "CSV") {
            this._states = this.parser.parseCSV(this._statesRead, this.parserType);
        }
        else if (this.parserType === "JSON1" || this.parserType === "JSON2") {
            this._states = this.parser.parseJSON(this._statesRead, this.parserType);
        }
    }

    report(filename) {
        this._read(filename);
        this._parse();
        return this._type.report(this._states);
    }

}