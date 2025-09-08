import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url);

export class Database {
    #database = {}

    constructor() {
        this.#load();
    }

    #load() {
        fs.readFile(databaePath, 'utf-8').then(data => {
            this.#database = JSON.parse(data);
        }).catch(() => {
            this.#persist();
        })
    }

    #persist() {
        fs.writeFile(databaePath, JSON.stringify(this.#database));
    }
}