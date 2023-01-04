import '../styles.scss';
import * as React from 'react';
import component from '../photos/component-hierarchy.gif';
import time from '../photos/time-travel-debug.gif';

const Features = () => {
  return (
    <div id="Features">
      <h2>Features</h2>
      <div className="feature">
        <div className="feature-text">
          <div className="feature-title">
            <h3>Time Travel</h3>
            <h3>Debugging</h3>
          </div>
          <div className="caption">
            Make debugging easier by jumping back in time to previous
            application states.
          </div>
          <br></br>
          <div className="caption">
            Compare your most recent store and the jumped state.
          </div>
        </div>
        <div className="feature-img">
          <img src={time} />
        </div>
      </div>
      <div className="feature">
        <div className="feature-text">
          <div className="feature-title">
            <h3>Component Hierarchy</h3>
            <h3>Visualizer</h3>
          </div>
          <div className="caption">
            View your application's component hierarchy to better understand
            your data flow.
          </div>
        </div>
        <div className="feature-img">
          <img src={component} />
        </div>
      </div>
    </div>
  );
};

export default Features;
