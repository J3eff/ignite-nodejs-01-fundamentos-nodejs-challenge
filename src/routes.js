export const routes = [
    {
        method: 'POST',
        url: '/tasks',
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'GET',
        url: '/tasks',
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'PUT',
        url: '/tasks/:id',
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'DELETE',
        url: '/tasks/:id',
        handler: (req, res) => {
            return res.end();
        }
    },
    {
        method: 'PATCH',
        url: '/tasks/:id/complete',
        handler: (req, res) => {
            return res.end();
        }
    },
];