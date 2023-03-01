import React, { useState } from 'react';
import { Box, Grommet, Text } from 'grommet';
import { Grommet as GrommetIcon } from "grommet-icons";

import { AppHeader } from './components/appHeader.js';
import WorkingArea from './components/workingArea.js';
import { theme } from "./theme.js";

//dotenv.config();

function App() {
  const [ showSidebar, setShowSideBar ] = useState(true)

  const onToggleSidebar = () => {
    setShowSideBar(!showSidebar)
  };

  return (
    <Grommet theme={theme} full>
      { process.env.NODE_ENV === 'development' &&
        <Text>{process.env.NODE_ENV} | {process.env.REACT_APP_API_URL} | {process.env.REACT_APP_FOO}</Text>
      }
      <Box fill>
        <AppHeader
                appName="Palavragem"
                appIcon={<GrommetIcon />}
                onToggleSidebar={onToggleSidebar}
              />
          <div className="App">
            <WorkingArea />
          </div>
      </Box>
    </Grommet>
  );
}

export default App;
