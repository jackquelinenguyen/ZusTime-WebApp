import '../styles.scss';
import * as React from 'react';

const Nav = () => {
  return (
    <div id="Nav">
      <div id="leftNav">
        <a className="navLink" href="#Features">
          About
        </a>
        <a
          className="navLink"
          href="https://github.com/oslabs-beta/ZusTime"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div id="rightNav">
        <a className="navLink" href="#team-members">
          Team
        </a>
        <a
          className="navLink"
          href="https://medium.com/@samanthawarrick/its-about-time-for-zustime-4828655a26d"
          target="_blank"
        >
          Blog
        </a>
      </div>
    </div>
  );
};

export default Nav;
