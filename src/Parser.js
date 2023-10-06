import { csvToObj } from "csv-to-js-parser";

export default class Parser {

    parseJSON(fileJSON){
        return JSON.parse(fileJSON);
    }

    parseCSV(fileCSV){
        return csvToObj(fileCSV, ';');
    }

}