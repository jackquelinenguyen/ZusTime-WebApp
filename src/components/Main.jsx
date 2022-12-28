import '../styles.scss';
import * as React from 'react';
import logo from '../zustime.png';

const Main = () => {
  return (
    <div id="Main">
      <div>
        <h2>Welcome to</h2>
        <h1>ZusTime</h1>
        <div>Your go to for Zustand time travel debugging.</div>
      </div>
      <img id="Logo" src={logo} alt="Logo" />
    </div>
  );
};

export default Main;
