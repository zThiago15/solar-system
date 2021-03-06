import React, { Component } from 'react';
import Planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div className="Planet">
          {Planets.map((planet) => {
            const { name, image } = planet;
            return (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />);
          })}
        </div>
      </>
    );
  }
}

export default SolarSystem;
