import '../styles.scss';
import * as React from 'react';
import logo from '../zustime.GIF';
import useStore from '../store';

const Main = () => {
  const team = useStore((state) => state.team);
  const newTeam = useStore((state) => state.increaseTeam);
  return (
    <div id="Main">
      <div id="Hero">
        <h2>Welcome to</h2>
        <h1>ZusTime</h1>
        <div>Your go to for Zustand time travel debugging.</div>
        <div>
          <a
            className="get-started"
            href="https://github.com/oslabs-beta/ZusTime"
            target="_blank"
          >
            Get started
          </a>
        </div>
      </div>
      <img id="Logo" src={logo} alt="Logo" />
    </div>
  );
};

export default Main;
