import * as fs from 'node:fs';

export default class CitiesReporter {

    _read (filename) {
        this._citiesJson = fs.readFileSync(filename);
    }
    
    _parseJSON () {
        this._cities = JSON.parse(this._citiesJson);
    }

    report (filename) {
        this._read(filename)
        this._parseJSON()
        return this.report()
    }

}