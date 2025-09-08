import { buildRoutePath } from "./utils/build-route-path.js";

export const routes = [
    {
        method: 'POST',
        url: buildRoutePath('/tasks'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'GET',
        url: buildRoutePath('/tasks'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'PUT',
        url: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'DELETE',
        url: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'PATCH',
        url: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            return res.end();
        }
    },
];