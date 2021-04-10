import React, { Component } from 'react'

export default class Pokemon extends Component {	
	render() {
		const { poke } = this.props;
		const { id, name, type, averageWeight, image, moreInfo } = poke;
		return (
			<div className='pokemons'>
				<div className="desc-container">
				<div className="name-type">
				<h2>{ name }</h2>
				<h4>{ type }</h4>
				</div>
				<div className="weight">
				<p>Average Weight: { averageWeight.value }</p>
				<p>{ averageWeight.measurementUnit }</p>
				</div>			
				</div>
				<div className="img">
					<img src={image} alt="pokemon"/>
				</div>
			</div>
		)
	}
}
