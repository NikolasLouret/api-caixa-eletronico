import request, { Test } from 'supertest';
import { app } from '../../api/app';
import { Server } from 'http';

let server: Server;
let req: Test;

const PORT = 5001;

beforeAll(done => {
  server = app.listen(PORT, () => {
    console.log(`Test server is running on port ${PORT}`);
    done();
  });
});

afterAll(done => {
  server.close(done);
});

beforeEach(() => { req = request(app).post('/api/saque'); });

describe('ATM Controller', () => {
  it('should return the correct note distribution for a valid reqs', async () => {
    const response = await req.send({ valor: 380 });
    
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ 100: 3, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
  });

  it('should return an error for negative amount', async () => {
    const response = await req.send({ valor: -100 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input: value must be a positive integer.' });
  });

  it('should return an error for zero amount', async () => {
    const response = await req.send({ valor: 0 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input: value must be a positive integer.' });
  });

  it('should return an error for invalid amount', async () => {
    const response = await req.send({ valor: '380' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input: value must be a positive integer.' });
  });

  it('should return an error for float amount', async () => {
    const response = await req.send({ valor: 380.3 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input: value must be a positive integer.' });
  });

  it('should return an error for amounts that cannot be dispensed', async () => {
    const response = await req.send({ valor: 3 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'The requested amount cannot be dispensed with the available notes.' });
  });
});

