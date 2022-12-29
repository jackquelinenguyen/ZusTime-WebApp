import '../styles.scss';
import * as React from 'react';
import jackie from '../photos/jackie.JPG';
import sam from '../photos/sam.jpeg';
import sylvia from '../photos/sylvia.JPG';
import kels from '../photos/kels.JPG';

const Team = () => {
  return (
    <div id="Team">
      <h2>Our Amazing Team</h2>
      <div className="memberContainer">
        <div className="member">
          <img src={kels} />
          <div>Kelsey Graner</div>
        </div>
        <div className="member">
          <img src={jackie} />
          <div>Jackie Nguyen</div>
        </div>
        <div className="member">
          <img src={sam} />
          <div>Samantha Warrick</div>
        </div>
        <div className="member">
          <img src={sylvia} />
          <div>Sylvia Thong</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
