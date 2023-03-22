import React from 'react';
import { Box, Grid, Grommet } from 'grommet';
import { Grommet as GrommetIcon } from "grommet-icons";

import { AppHeader } from './components/appHeader.js';
import WorkingArea from './components/workingArea.js';
import { theme } from "./theme.js";

//dotenv.config();

function App() {
  return (
    <Grommet theme={theme} full>
      <Grid
        rows={['xxsmall', 'medium', 'xxsmall']}
        columns={['1/4', '3/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
          ['footer', 'footer'],
        ]}
        justifyContent='start'
        alignContent='start'
        gap="large"
      >
        <AppHeader
          appName="Palavragem"
          appIcon={<GrommetIcon />}
          gridArea="header"
        />
        <Box background="light-5" gridArea="sidebar">
            --sidebar--
        </Box>
        <WorkingArea gridArea="main" />
        <Box background="light-5" gridArea="footer">
            --footer--
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
