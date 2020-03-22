import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { getDateRange } from '../utils/dateMethod';
import AboutDate from './AboutDate';
import axios from 'axios';

class DateInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false,
			fact: '',
			startDate: 0,
			endDate: 0
		};
	}

	getFactsByStartDate = (startDate) => {
		const fromDate = new Date(startDate);
		const month = fromDate.getMonth() + 1;
		axios
			.get(`http://numbersapi.com/${month}/${fromDate.getDate()}/date`)
			.then((response) => {
				this.setState({ fact: response.data });
			})
			.catch((err) => {
				this.setState({ fact: err });
			});
	};

	handleEvent = (event, picker) => {
		this.setState({
			isSelected: false,
			fact: ''
		});
	};

	onSelected = (event, picker) => {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate,
			isSelected: true
		});
		this.getFactsByStartDate(picker.startDate);
	};

	render() {
		return (
			<div className="row my-3">
				<div className="col-md-6">
					<h3>Select Date Range</h3>
					<DateRangePicker
						autoApply={true}
						autoUpdateInput={false}
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						onEvent={this.handleEvent}
						onApply={this.onSelected}
						containerClass="w-100"
					>
						<input
							type="text"
							className="w-100 px-3 py-2 border border-dark rounded"
							placeholder="Select Date Range"
							value={this.state.startDate ? getDateRange(this.state.startDate, this.state.endDate) : ''}
							onChange={this.handleEvent}
						/>
					</DateRangePicker>
				</div>
				<div className="col-md-6">
					{this.state.isSelected && (
						<AboutDate from={this.state.startDate} to={this.state.endDate} fact={this.state.fact} />
					)}
				</div>
			</div>
		);
	}
}

export default DateInput;
