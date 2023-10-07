import * as fs from 'node:fs';

export default class Reader {

    readJSON(fileJSON){
        return fs.readFileSync(fileJSON);
    }

    readCSV(fileCSV){
        return fs.readFileSync(fileCSV).toString();
    }

}