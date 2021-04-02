import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
    render() {
        return (
            <div className='pokemon'>
                {
                    this.props.data.map((i) => {
                        return <Pokemon key={i.id} pokemon={i}/>
                    })
                }
                
            </div>
        )
    }
}
