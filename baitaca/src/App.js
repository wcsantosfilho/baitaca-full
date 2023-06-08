import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Grommet } from 'grommet';
import { theme } from "./theme.js";
import { AppHome } from "./components/appHome.js"
import { AppAbout } from './components/appAbout.js';
import { AppCrossWords } from './components/appCrossWords.js';
import { AppBiggest } from './components/appBiggest.js';
import { AppBiology } from './components/appBiology.js';
import { CommomCrossWordsWithA } from './components/curiousity/commonCrossWordsWithA.js';
import { CommomCrossWordsWithB } from './components/curiousity/commonCrossWordsWithB.js';
import { CommomCrossWordsWithC } from './components/curiousity/commonCrossWordsWithC.js';
import { CommomCrossWordsWithD } from './components/curiousity/commonCrossWordsWithD.js';
import { CommomCrossWordsWithE } from './components/curiousity/commonCrossWordsWithE.js';
import { CommomCrossWordsWithF } from './components/curiousity/commonCrossWordsWithF.js';
import { CommomCrossWordsWithG } from './components/curiousity/commonCrossWordsWithG.js';
import { CommomCrossWordsWithH } from './components/curiousity/commonCrossWordsWithH.js';
import { CommomCrossWordsWithI } from './components/curiousity/commonCrossWordsWithI.js';
import { CommomCrossWordsWithJ } from './components/curiousity/commonCrossWordsWithJ.js';
import { CommomCrossWordsWithK } from './components/curiousity/commonCrossWordsWithK.js';
import { CommomCrossWordsWithL } from './components/curiousity/commonCrossWordsWithL.js';
import { CommomCrossWordsWithM } from './components/curiousity/commonCrossWordsWithM.js';
import { CommomCrossWordsWithN } from './components/curiousity/commonCrossWordsWithN.js';
import { CommomCrossWordsWithO } from './components/curiousity/commonCrossWordsWithO.js';
import { CommomCrossWordsWithP } from './components/curiousity/commonCrossWordsWithP.js';
import { CommomCrossWordsWithQ } from './components/curiousity/commonCrossWordsWithQ.js';
import { CommomCrossWordsWithR } from './components/curiousity/commonCrossWordsWithR.js';
import { CommomCrossWordsWithS } from './components/curiousity/commonCrossWordsWithS.js';
import { CommomCrossWordsWithT } from './components/curiousity/commonCrossWordsWithT.js';
import { CommomCrossWordsWithU } from './components/curiousity/commonCrossWordsWithU.js';
import { CommomCrossWordsWithV } from './components/curiousity/commonCrossWordsWithV.js';
import { CommomCrossWordsWithW } from './components/curiousity/commonCrossWordsWithW.js';
import { CommomCrossWordsWithX } from './components/curiousity/commonCrossWordsWithX.js';
import { CommomCrossWordsWithY } from './components/curiousity/commonCrossWordsWithY.js';
import { CommomCrossWordsWithZ } from './components/curiousity/commonCrossWordsWithZ.js';

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
          <Route path="/commomCrossWordsWithA" Component={CommomCrossWordsWithA} />
          <Route path="/commomCrossWordsWithB" Component={CommomCrossWordsWithB} />
          <Route path="/commomCrossWordsWithC" Component={CommomCrossWordsWithC} />
          <Route path="/commomCrossWordsWithD" Component={CommomCrossWordsWithD} />
          <Route path="/commomCrossWordsWithE" Component={CommomCrossWordsWithE} />
          <Route path="/commomCrossWordsWithF" Component={CommomCrossWordsWithF} />
          <Route path="/commomCrossWordsWithG" Component={CommomCrossWordsWithG} />
          <Route path="/commomCrossWordsWithH" Component={CommomCrossWordsWithH} />
          <Route path="/commomCrossWordsWithI" Component={CommomCrossWordsWithI} />
          <Route path="/commomCrossWordsWithJ" Component={CommomCrossWordsWithJ} />
          <Route path="/commomCrossWordsWithK" Component={CommomCrossWordsWithK} />
          <Route path="/commomCrossWordsWithL" Component={CommomCrossWordsWithL} />
          <Route path="/commomCrossWordsWithM" Component={CommomCrossWordsWithM} />
          <Route path="/commomCrossWordsWithN" Component={CommomCrossWordsWithN} />
          <Route path="/commomCrossWordsWithO" Component={CommomCrossWordsWithO} />
          <Route path="/commomCrossWordsWithP" Component={CommomCrossWordsWithP} />
          <Route path="/commomCrossWordsWithQ" Component={CommomCrossWordsWithQ} />
          <Route path="/commomCrossWordsWithR" Component={CommomCrossWordsWithR} />
          <Route path="/commomCrossWordsWithS" Component={CommomCrossWordsWithS} />
          <Route path="/commomCrossWordsWithT" Component={CommomCrossWordsWithT} />
          <Route path="/commomCrossWordsWithU" Component={CommomCrossWordsWithU} />
          <Route path="/commomCrossWordsWithV" Component={CommomCrossWordsWithV} />
          <Route path="/commomCrossWordsWithW" Component={CommomCrossWordsWithW} />
          <Route path="/commomCrossWordsWithX" Component={CommomCrossWordsWithX} />
          <Route path="/commomCrossWordsWithY" Component={CommomCrossWordsWithY} />
          <Route path="/commomCrossWordsWithZ" Component={CommomCrossWordsWithZ} />
        </Routes>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
