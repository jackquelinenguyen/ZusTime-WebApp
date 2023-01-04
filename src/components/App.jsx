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
        <ul className="circles">
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
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
