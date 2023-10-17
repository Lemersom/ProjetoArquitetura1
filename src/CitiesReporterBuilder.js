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
        if (fileType === "JSON1") {
            this.citiesReporter.parserType = "JSON1";
        }
        else if (fileType === "JSON2") {
            this.citiesReporter.parserType = "JSON2";
        }
        else if (fileType === "CSV") {
            this.citiesReporter.parserType = "CSV";
        }
        else {
            console.log("ERRO: deve ser JSON1, JSON2 ou CSV");
            process.exit(1);
        }
    }

    setStrategy(strategy) {
        this.citiesReporter._type = strategy;
    }

}