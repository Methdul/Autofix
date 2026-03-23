import request from 'supertest';
import { createApp } from '../app';

const app = createApp();

describe('App Flow & Health', () => {
    it('should return 404 for an unknown route', async () => {
        const response = await request(app).get('/api/unknown-route-123');
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Route not found');
    });

    // We can't easily mock the DB connection test in the actual /health route without mocking Prisma Service,
    // so we will write a unit test specifically for the setup.
});
