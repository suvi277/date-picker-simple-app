export const isLeapYear = (year) => {
	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

export const getDiffDays = (startDate, endDate) => {
	return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
};

export const getDiffSpecificDays = (startDate, endDate, day) => {
	let totalDays = 0;
	startDate.setDate(startDate.getDate() + (day - startDate.getDay() + 7) % 7);
	while (startDate < endDate) {
		totalDays++;
		startDate.setDate(startDate.getDate() + 7);
	}
	return totalDays;
};

export const getDateRange = (startDate, endDate) => {
	return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const formatDate = (date) => {
	date = new Date(date);
	return date.toDateString();
};
