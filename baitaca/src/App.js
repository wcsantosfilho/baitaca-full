import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {  Grommet } from 'grommet';
import { theme } from "./theme.js";
import { AppHome } from "./components/appHome.js"
import { AppAbout } from './components/appAbout.js';

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <Routes>
          <Route path="/" Component={AppHome} />
          <Route path="/about" Component={AppAbout} />
        </Routes>
      </Grommet>
    </BrowserRouter>

  );
}

export default App;
