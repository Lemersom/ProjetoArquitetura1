import CitiesReporter from "./CitiesReporter.js"

export default class CitiesReporterBuilder extends CitiesReporter{

    build(){
        this.citiesReporter = new CitiesReporter("")
    }

    setReader(fileType){
        if(fileType === "JSON"){
            this.citiesReporter.readerType = "JSON"    
        }
        else if(fileType == "CSV"){
            this.citiesReporter.readerType = "CSV"
        }
    }

    setParser(fileType){
        if(fileType === "JSON"){
            this.citiesReporter.parserType = "JSON"
        }
        else if(fileType == "CSV"){
            this.citiesReporter.parserType = "CSV"
        }
    }

    setStrategy(strategy){
        this.citiesReporter._type = strategy
    }
}