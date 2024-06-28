import { calculateWithdrawal } from '../../src/services/atmService';

afterAll(done => {
  done();
})

describe('ATM Service', () => {
  it('should return the correct note distribution for 380', () => {
    const result = calculateWithdrawal(380);
    expect(result).toEqual({ 100: 3, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
  });

  it('should throw an error for amounts that cannot be dispensed', () => {
    expect(() => calculateWithdrawal(3)).toThrow('The requested amount cannot be dispensed with the available notes.');
  });

  it('should handle zero notes correctly', () => {
    const result = calculateWithdrawal(0);
    expect(result).toEqual({ 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0 });
  });
});
