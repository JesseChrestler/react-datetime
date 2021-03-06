import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import Datetime from '../DateTime'; // eslint-disable-line no-unused-vars

const simulateClickOnElement = (element) => {
	if (element.length === 0) {
		// eslint-disable-next-line no-console
		console.warn('Element not clicked since it doesn\'t exist');
		return;
	}
	return element.simulate('click');
};

module.exports = {
	createDatetime: (props) => {
		return mount(<Datetime {...props} />);
	},

	/*
	 * Click Simulations
	 */
	openDatepicker: (datetime) => {
		datetime.find('.form-control').simulate('focus');
	},

	clickOnElement: (element) => {
		return simulateClickOnElement(element);
	},

	clickNthDay: (datetime, n) => {
		return simulateClickOnElement(datetime.find('.rdtDay').at(n));
	},

	clickNthMonth: (datetime, n) => {
		return datetime.find('.rdtMonth').at(n).simulate('click');
	},

	clickNthYear: (datetime, n) => {
		return datetime.find('.rdtYear').at(n).simulate('click');
	},

	/*
	 * Boolean Checks
	 */
	isOpen: (datetime) => {
		return datetime.find('.rdt.rdtOpen').length === 1;
	},

	isDayView: (datetime) => {
		return datetime.find('.rdtPicker .rdtDays').length === 1;
	},

	isMonthView: (datetime) => {
		return datetime.find('.rdtPicker .rdtMonths').length === 1;
	},

	isYearView: (datetime) => {
		return datetime.find('.rdtPicker .rdtYears').length === 1;
	},

	isTimeView: (datetime) => {
		return datetime.find('.rdtPicker .rdtTime').length === 1;
	},

	/*
	 * Change Time Values
	 *
	 * These functions only work when the time view is open
	 */
	increaseHour: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(0).simulate('mouseDown');
	},

	decreaseHour: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(1).simulate('mouseDown');
	},

	increaseMinute: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(2).simulate('mouseDown');
	},

	decreaseMinute: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(3).simulate('mouseDown');
	},

	increaseSecond: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(4).simulate('mouseDown');
	},

	decreaseSecond: (datetime) => {
		datetime.find('.rdtCounter .rdtBtn').at(5).simulate('mouseDown');
	},

	/*
	 * Get Values
	 */
	getNthDay: (datetime, n) => {
		return datetime.find('.rdtDay').at(n);
	},

	getNthMonth: (datetime, n) => {
		return datetime.find('.rdtMonth').at(n);
	},

	getNthYear: (datetime, n) => {
		return datetime.find('.rdtYear').at(n);
	},

	getHours: (datetime) => {
		return datetime.find('.rdtCount').at(0).text();
	},

	getMinutes: (datetime) => {
		return datetime.find('.rdtCount').at(1).text();
	},

	getSeconds: (datetime) => {
		return datetime.find('.rdtCount').at(2).text();
	},

	getInputValue: (datetime) => {
		return datetime.find('.rdt > .form-control').getDOMNode().value;
	}
};
