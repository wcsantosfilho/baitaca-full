import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import { theme } from "./theme.js";
import { AppHome } from "./components/appHome.js"
import { AppAbout } from './components/appAbout.js';
import { AppCrossWords } from './components/appCrossWords.js';
import { AppBiggest } from './components/appBiggest.js';
import { AppBiology } from './components/appBiology.js';

import { initAmplitude, sendAmplitudeTrack } from './utilities/amplitude.js'

initAmplitude();
const eventProperties = {
  applicationVersion: '0.0.1',
};
sendAmplitudeTrack('Palavragem - Application Started', eventProperties);

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full>
        <Routes>
          <Route path="/" Component={AppHome} />
          <Route path="/about" Component={AppAbout} />
          <Route path="/crossWords" Component={AppCrossWords} />
          <Route path="/biggestWordOfEachLetter" Component={AppBiggest} />
          <Route path="/curiousBiologyWords" Component={AppBiology} />
        </Routes>
      </Grommet>
    </BrowserRouter>

  );
}

export default App;
