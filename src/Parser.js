import { csvToObj } from "csv-to-js-parser";
export default class Parser {

    parseJSON(fileJSON, type) {
        return this.createObj(JSON.parse(fileJSON), type);
    }

    parseCSV(fileCSV, type) {
        return this.createObj(csvToObj(fileCSV, ','), type);
    }


    /* createObj: recebe um objeto e uma string, retorna um objeto
    Função: criar um objeto padronizado, para evitar repetições nas funções de output
    Anotações: 
        file: arquivo em /data que já foi lido e passou pelo parse
        type: tipo do arquivo
    */

    createObj(file, type) {
        let finalObj = [];

        if (type === "JSON1") {
            file["estados"].forEach((estado) => {
                estado['cidades'].forEach((cidade) => {
                    const obj = {
                        "Cidade": cidade,
                        "Estado": estado["nome"]
                    }
                    finalObj.push(obj);
                })
            })
        }
        else if (type === "JSON2") {
            for (const item of file) {
                const obj = {
                    "Cidade": item['Nome'],
                    "Estado": item['Estado']
                }
                finalObj.push(obj);
            }
        }
        else if (type === "CSV") {
            for (const item of file) {
                const obj = {
                    "Cidade": item["NOME"],
                    "Estado": item["COD UF"]
                }
                finalObj.push(obj);
            }
        }

        return finalObj;
    }

}