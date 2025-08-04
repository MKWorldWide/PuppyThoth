import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { buildServer } from './server.js';

describe('server', () => {
  it('GET /ping responds with pong', async () => {
    const app = buildServer();
    const res = await request(app).get('/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'pong' });
  });
});

