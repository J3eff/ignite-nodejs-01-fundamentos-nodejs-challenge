import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";
import { randomUUID } from 'node:crypto';

const database = new Database();

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body;

            if (!title)
                return res.writeHead(400)
                    .end(JSON.stringify({ message: 'Title is required' }));


            if (!description)
                return res.writeHead(400)
                    .end(JSON.stringify({ message: 'Description is required' }));

            const task = {
                id: randomUUID(),
                title,
                description,
                created_at: new Date(),
                updated_at: new Date(),
            };

            database.insert('tasks', task);

            return res.writeHead(201).end(JSON.stringify(task));
        }
    },
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const tasks = database.select('tasks');
            return res.end(JSON.stringify(tasks));
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            return res.end();
        }
    },
];