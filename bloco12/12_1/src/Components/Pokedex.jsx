import React, { Component } from 'react';
import data from '../data/data';
import Btns from './Btns';
import Pokemon from './Pokemon';

class Pokedex extends Component {
	constructor(props) {
		super(props)	
		this.state = {
			dados: data,
			count: 0,
		}
	}	

	handleFilter = () => {
		console.log(this.state.count);
		if(this.state.count < this.state.dados.length - 1){
			this.setState((prev,_props) => ({
				count: prev.count + 1,
			}))
		}else {
			this.setState({ count: 0 })
		}
	}

	handleLabel = () => {
		const labels = [];
		data.forEach(({ type }) => {
			labels.push(type)
		})
		const newLabels = ['All', ...new Set (labels)]
		return newLabels
	}

	handleLabelsFilter = (e) => {	
		this.setState({ count: 0})
		console.log(this.state.count);
		if(e.target.value === 'All') return this.setState({ dados: data })
		return this.setState({ dados: data.filter((i) => i.type === e.target.value)})		
	}

	render() {
		return (
			<div>
			<div className="pokes">			
				<Pokemon poke={this.state.dados[this.state.count]}/>		
			</div>
			<div className="btns">			
				<Btns labels={this.handleLabel()} handleLabelsFilter={this.handleLabelsFilter}/>			
			</div>
			<div className="btn-next">
				<button disabled={this.state.dados.length === 1 ? true : false} onClick={() => this.handleFilter()}>next</button>
			</div>
			</div>
		);
	}
}

export default Pokedex;
