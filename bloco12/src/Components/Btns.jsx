import React, { Component } from 'react';

class Btns extends Component {
	render() {
		const { labels, handleLabelsFilter }  = this.props;
		return (
			<div>
				{labels.map((label, index) => <button key={index} onClick={(e) => handleLabelsFilter(e)} value={label}>{label}</button>)}				
			</div>
		);
	}
}

export default Btns;
