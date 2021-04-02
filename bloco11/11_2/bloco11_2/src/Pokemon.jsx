import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (       

            <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{` ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                <img src={image}></img>  
                
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;
