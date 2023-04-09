import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <section className="align-missions">
        <Title headline="Missões" />
        <div className="mission-card-content" data-testid="missions">
          {missions
            .map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />))}
        </div>
      </section>);
  }
}

export default Missions;
