import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="align-planets">
        <Title headline="Planetas" />
        <div className="capsule">
          <div className="planet-card-content" data-testid="solar-system">
            {Planets
              .map(({ name, image }) => (<PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default SolarSystem;
