import React from 'react';
import { Box, Grid, Footer, Grommet, Page, Sidebar, Text } from 'grommet';
import { Grommet as GrommetIcon } from "grommet-icons";

import { AppHeader } from './components/appHeader.js';
import WorkingArea from './components/workingArea.js';
import { theme } from "./theme.js";


//dotenv.config();

function App() {
  return (
    <Grommet theme={theme} full>
      <Page background={{"color":"background-back"}}>
        <Grid 
          rows={["xxsmall","auto","xxsmall"]} 
          a11yTitle="grid" 
          columns={["1/4","3/4"]} 
          areas={[
            {"name":"Header","start":[0,0],"end":[1,0]},
            {"name":"Sidebar","start":[0,1],"end":[0,1]},
            {"name":"Main","start":[1,1],"end":[1,1]},
            {"name":"Footer","start":[0,2],"end":[1,2]}
            ]}
        >
          <AppHeader
            appName="Palavragem"
            appIcon={<GrommetIcon />}
            gridArea="Header"
          />
          <Sidebar 
            align="stretch" 
            direction="column" 
            flex={false} 
            gap="large" 
            pad="small" 
            gridArea="Sidebar" 
            background={{"color":"background-back"}}
          >
            <Box align="center" justify="center" />
            <Box align="center" justify="center" />
            <Box align="center" justify="center" />
          </Sidebar>
          <WorkingArea gridArea="Main" />
          <Footer align="center" direction="row" flex={false} justify="between" gap="medium" gridArea="Footer" background={{"color":"brand"}}>
            <Text textAlign="center">
              Palavragem é um produto W&A Soluções Tecnológicas. Todos os direitos reservados.
            </Text>
          </Footer>
        </Grid>
      </Page>
    </Grommet>
  );
}

export default App;
