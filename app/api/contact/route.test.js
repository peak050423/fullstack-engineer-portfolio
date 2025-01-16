const request = require('supertest');
const { createServer } = require('http');
const next = require('next');

const app = next({ dev: true });
const handle = app.getRequestHandler();

describe('Contact API', () => {
    let server;

    beforeAll(async () => {
        await app.prepare();
        server = createServer((req, res) => {
            handle(req, res);
        }).listen(3000);
    });

    afterAll(() => {
        server.close();
    });

    it('should return a 200 status for GET /api/contact', async () => {
        const res = await request(server).get('/api/contact');
        expect(res.statusCode).toBe(200);
    });

    it('should create a contact and return a 201 status for POST /api/contact', async () => {
        const response = await request(server)
            .post('/api/contact')
            .send({ name: 'John Doe', email: 'john@example.com' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});