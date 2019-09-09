"use strict";

import React from 'react';
import Header from './components/header/index';
//import api from './services/api';
import Main from './views/main/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
  );
}

export default App;
