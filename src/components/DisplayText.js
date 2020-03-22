import React from 'react';

const DisplayText = ({ label, value }) => {
	return (
		<div className="border mb-3 p-3">
			<h5>{label}</h5>
			<span className="font-weight-bold text-danger">{`${value}`}</span>
			{value === '' && (
				<div class="spinner-border text-danger" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			)}
		</div>
	);
};

export default DisplayText;
