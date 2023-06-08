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
          <Route path="/sobre" Component={AppAbout} />
          <Route path="/palavras-cruzadas" Component={AppCrossWords} />
          <Route path="/maior-palavra-de-cada-letra" Component={AppBiggest} />
          <Route path="/palavras-curiosas-da-biologia" Component={AppBiology} />
          <Route path="/palavras-que-comecam-com-a" Component={CommomCrossWordsWithA} />
          <Route path="/palavras-que-comecam-com-b" Component={CommomCrossWordsWithB} />
          <Route path="/palavras-que-comecam-com-c" Component={CommomCrossWordsWithC} />
          <Route path="/palavras-que-comecam-com-d" Component={CommomCrossWordsWithD} />
          <Route path="/palavras-que-comecam-com-e" Component={CommomCrossWordsWithE} />
          <Route path="/palavras-que-comecam-com-f" Component={CommomCrossWordsWithF} />
          <Route path="/palavras-que-comecam-com-g" Component={CommomCrossWordsWithG} />
          <Route path="/palavras-que-comecam-com-h" Component={CommomCrossWordsWithH} />
          <Route path="/palavras-que-comecam-com-i" Component={CommomCrossWordsWithI} />
          <Route path="/palavras-que-comecam-com-j" Component={CommomCrossWordsWithJ} />
          <Route path="/palavras-que-comecam-com-k" Component={CommomCrossWordsWithK} />
          <Route path="/palavras-que-comecam-com-l" Component={CommomCrossWordsWithL} />
          <Route path="/palavras-que-comecam-com-m" Component={CommomCrossWordsWithM} />
          <Route path="/palavras-que-comecam-com-n" Component={CommomCrossWordsWithN} />
          <Route path="/palavras-que-comecam-com-o" Component={CommomCrossWordsWithO} />
          <Route path="/palavras-que-comecam-com-p" Component={CommomCrossWordsWithP} />
          <Route path="/palavras-que-comecam-com-q" Component={CommomCrossWordsWithQ} />
          <Route path="/palavras-que-comecam-com-r" Component={CommomCrossWordsWithR} />
          <Route path="/palavras-que-comecam-com-s" Component={CommomCrossWordsWithS} />
          <Route path="/palavras-que-comecam-com-t" Component={CommomCrossWordsWithT} />
          <Route path="/palavras-que-comecam-com-u" Component={CommomCrossWordsWithU} />
          <Route path="/palavras-que-comecam-com-v" Component={CommomCrossWordsWithV} />
          <Route path="/palavras-que-comecam-com-w" Component={CommomCrossWordsWithW} />
          <Route path="/palavras-que-comecam-com-x" Component={CommomCrossWordsWithX} />
          <Route path="/palavras-que-comecam-com-y" Component={CommomCrossWordsWithY} />
          <Route path="/palavras-que-comecam-com-z" Component={CommomCrossWordsWithZ} />
        </Routes>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
