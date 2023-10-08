import CitiesReporter from "./CitiesReporter.js";
import process from "node:process";

export default class CitiesReporterBuilder extends CitiesReporter {

    build() {
        this.citiesReporter = new CitiesReporter("");
    }

    setReader(fileType) {
        if (fileType === "JSON") {
            this.citiesReporter.readerType = "JSON";
        }
        else if (fileType == "CSV") {
            this.citiesReporter.readerType = "CSV";
        }
        else {
            console.log("ERRO: deve ser JSON ou CSV");
            process.exit(1);
        }
    }

    setParser(fileType) {
        if (fileType === "JSON") {
            this.citiesReporter.parserType = "JSON";
        }
        else if (fileType === "CSV") {
            this.citiesReporter.parserType = "CSV";
        }
        else {
            console.log("ERRO: deve ser JSON ou CSV");
            process.exit(1);
        }
    }

    setStrategy(strategy) {
        this.citiesReporter._type = strategy;
    }
    
}