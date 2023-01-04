import '../styles.scss';
import * as React from 'react';
import component from '../photos/component-hierarchy.gif';
import time from '../photos/time-travel-debug.gif';

const Features = () => {
  return (
    <div id="Features">
      <h2>Features</h2>
      <div className="feature">
        <div className="feature-title">
          <h3>Time Travel</h3>
          <h3>Debugging</h3>
        </div>
        <div className="feature-img">
          <img src={time} />
        </div>
      </div>
      <div className="feature">
        <div className="feature-title">
          <h3>Component</h3>
          <h3>Hierarchy</h3>
          <h3>Visualizer</h3>
        </div>
        <div className="feature-img">
          <img src={component} />
        </div>
      </div>
    </div>
  );
};

export default Features;
