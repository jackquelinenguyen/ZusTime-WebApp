import '../styles.scss';
import * as React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Team from './Team.jsx';
import Footer from './Footer.jsx';
import Features from './Features.jsx';

const App = () => {
  return (
    <div id="App">
      <div className="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Nav />
      <Main />
      {/* <div className="blog">
        <div className="exerpt">
          <h3>Time travel debugging</h3>
          <div>
            Come check out our medium article to learn about the importance of
            time travel debugging and why it is considered an essential tool in
            a great engineer's toolkit.
          </div>
        </div>
        <div>
          <a className="navLink" href="https://github.com/oslabs-beta/ZusTime">
            Medium
          </a>
        </div>
      </div> */}
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
