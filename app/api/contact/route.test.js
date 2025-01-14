const request = require('supertest');
const app = require('../../../app'); // Adjust the path as necessary

describe('Contact API', () => {
    it('should return a 200 status for GET /api/contact', async () => {
        const response = await request(app).get('/api/contact');
        expect(response.status).toBe(200);
    });

    it('should create a contact and return a 201 status for POST /api/contact', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ name: 'John Doe', email: 'john@example.com' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});