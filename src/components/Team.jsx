import '../styles.scss';
import * as React from 'react';
import jackie from '../photos/jackie.JPG';
import sam from '../photos/sam.jpeg';
import sylvia from '../photos/sylvia.JPG';
import kels from '../photos/kels.JPG';

const Team = () => {
  return (
    <div id="Team">
      <h2>
        <div>Our</div>
        <div>Amazing</div>
        <div>Team</div>
      </h2>
      <div id="team-members" className="memberContainer">
        <div className="member">
          <img className="member-photo" src={jackie} />
          <div className="name">Jackie Nguyen</div>
          <div className="title">Software Engineer</div>
          <div className="member-links">
            <div className="github">
              <a href="https://github.com/jackquelinenguyen" target="_blank">
                <img
                  className="github-icon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </a>
            </div>
            <div className="linked-in">
              <a
                href="https://www.linkedin.com/in/jackquelinenguyen/"
                target="_blank"
              >
                <img
                  className="linkedin-icon"
                  src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <img className="member-photo" src={kels} />
          <div className="name">Kelsey Graner</div>
          <div className="title">Software Engineer</div>
          <div className="member-links">
            <div className="github">
              <a href="https://github.com/kels-graner" target="_blank">
                <img
                  className="github-icon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </a>
            </div>
            <div className="linked-in">
              <a
                href="https://www.linkedin.com/in/kelseygraner/"
                target="_blank"
              >
                <img
                  className="linkedin-icon"
                  src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="member">
          <img className="member-photo" src={sam} />
          <div className="name">Samantha Warrick</div>
          <div className="title">Software Engineer</div>
          <div className="member-links">
            <div className="github">
              <a href="https://github.com/samanthawarrick" target="_blank">
                <img
                  className="github-icon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </a>
            </div>
            <div className="linked-in">
              <a
                href="https://www.linkedin.com/in/samantha-warrick/"
                target="_blank"
              >
                <img
                  className="linkedin-icon"
                  src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="member">
          <img className="member-photo" src={sylvia} />
          <div className="name">Sylvia Thong</div>
          <div className="title">Software Engineer</div>
          <div className="member-links">
            <div className="github">
              <a href="https://github.com/sylvia45335" target="_blank">
                <img
                  className="github-icon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </a>
            </div>
            <div className="linked-in">
              <a
                href="https://www.linkedin.com/in/sylviathong/"
                target="_blank"
              >
                <img
                  className="linkedin-icon"
                  src="https://cdn.onlinewebfonts.com/svg/img_24651.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
