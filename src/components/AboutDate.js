import React from 'react';
import DisplayText from './DisplayText';
import { isLeapYear, getDiffSpecificDays, getDiffDays } from '../utils/dateMethod';
import { LABELS } from '../constants/labels';

const AboutDate = ({ from, to, fact }) => {
	const allLabels = Object.keys(LABELS);

	const performAction = (label) => {
		const fromDate = new Date(from);
		const toDate = new Date(to);
		switch (label) {
			case 'NO_OF_DAYS':
				return getDiffDays(fromDate, toDate);

			case 'NO_OF_MONDAYS':
				return getDiffSpecificDays(fromDate, toDate, 1); //1 is for Mondays

			case 'START_DATE_LEAP_YEAR':
				return isLeapYear(fromDate.getFullYear());

			case 'END_DATE_LEAP_YEAR':
				return isLeapYear(toDate.getFullYear());

			case 'FACTS_OF_START_DATE':
				return fact;

			default:
				return true;
		}
	};

	const displayText = () => {
		return allLabels.map((label, index) => {
			return <DisplayText key={index} label={LABELS[label]} value={performAction(label)} />;
		});
	};

	return <div className="bg-light text-dark  border rounded my-4 p-3">{displayText()}</div>;
};

export default AboutDate;
