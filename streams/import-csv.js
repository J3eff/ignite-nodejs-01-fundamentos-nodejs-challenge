import { parse } from 'csv-parse';
import fs from 'node:fs';

const path = new URL('./task-spreadsheet.csv', import.meta.url);

const stream = fs.createReadStream(path);

const parser = parse({
    delimiter: ',',
    skipEmptyLines: true,
    fromLine: 2
})

async function importCSV() {
    const linesParse = stream.pipe(parser);

    for await (const line of linesParse) {
        const [title, description] = line;

        await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
    }
}

importCSV();