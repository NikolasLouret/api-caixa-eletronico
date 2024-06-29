import { Withdrawal } from '../interfaces/atmInterface';
  
const availableNotes = [100, 50, 20, 10, 5, 2];

/**
 * Calculate the number of bills of each value to be dispensed.
 * @param amount The amount to be withdrawn.
 * @returns Number of bills of each value.
 */
export const calculateWithdrawal = (amount: number): Withdrawal => {
    const result: Withdrawal = {
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0
    };

    for (const note of availableNotes) {
        if (amount >= note) {
            result[note] = Math.floor(amount / note);
            amount %= note;
        }
    }

    if (amount !== 0) {
        throw new Error('The requested amount cannot be dispensed with the available notes.');
    }

    return result;
};
  