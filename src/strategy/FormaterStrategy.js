import * as fs from 'node:fs';

export default class Formater {

    constructor(type) {
        this._type = type;
    }

    _read (filename) {
        this._statesJson = fs.readFileSync(filename);
    }
    
    _parseJSON () {
        this._states = JSON.parse(this._statesJson);
    }

    report(filename) {
        this._read(filename)
        this._parseJSON()
        return this._type.report(this._states)
    }
}