import { isLeapYear, getDiffDays, getDiffSpecificDays, getDateRange } from './dateMethod';

describe('Date Methods', () => {
	describe('isLeapYear', () => {
		it('should return true for correct leap year', () => {
			expect(isLeapYear('2020')).toBeTruthy();
		});

		it('should return false for incorrect leap year', () => {
			expect(isLeapYear('1989')).toBeFalsy();
		});
	});

	describe('getDiffDays', () => {
		const startDate = new Date('3/20/2020');
		const endDate = new Date('3/25/2020');
		it('should return total number of days between the given dates', () => {
			expect(getDiffDays(startDate, endDate)).toEqual(5);
		});
	});

	describe('getDiffSpecificDays', () => {
		const startDate = new Date('3/20/2020');
		const endDate = new Date('3/25/2020');
		const day = 1;
		it('should return number mondays between the given dates', () => {
			expect(getDiffSpecificDays(startDate, endDate, day)).toEqual(1);
		});

		it('should return 0 when day is not passed', () => {
			expect(getDiffSpecificDays(startDate, endDate)).toEqual(0);
		});
	});

	describe('getDateRange', () => {
		const startDate = '3/20/2020';
		const endDate = '3/25/2020';
		const expected = 'Fri Mar 20 2020 - Wed Mar 25 2020';
		it('should return date range text in the expected Format', () => {
			expect(getDateRange(startDate, endDate)).toEqual(expected);
		});
	});
});
