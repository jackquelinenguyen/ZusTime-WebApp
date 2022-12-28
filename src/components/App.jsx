import '../styles.scss';
import * as React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';

const App = () => {
  return (
    <div id="App">
      <div class="area">
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
    </div>
  );
};

export default App;
