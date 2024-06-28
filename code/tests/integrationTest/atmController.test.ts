import request from 'supertest';
import app from '../../src/app';

describe('ATM Controller', () => {
  it('should return the correct note distribution for a valid request', async () => {
    const response = await request(app)
      .post('/api/saque')
      .send({ valor: 380 });
    
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ 100: 3, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
  });

  it('should return an error for negative amount', async () => {
    const response = await request(app)
      .post('/api/saque')
      .send({ valor: -100 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Invalid input: value must be a positive integer.' });
  });

  it('should return an error for zero amount', async () => {
    const response = await request(app)
      .post('/api/saque')
      .send({ valor: 0 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input: value must be a positive integer." });
  });

  it('should return an error for invalid amount', async () => {
    const response = await request(app)
      .post('/api/saque')
      .send({ valor: "380" });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input: value must be a positive integer." });
  });

  it('should return an error for amounts that cannot be dispensed', async () => {
    const response = await request(app)
      .post('/api/saque')
      .send({ valor: 3 });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'The requested amount cannot be dispensed with the available notes.' });
  });
});
