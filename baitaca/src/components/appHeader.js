import React from "react";

import { Header, Heading } from "grommet";

export const AppHeader = ({
  appName,
  appIcon,
  gridArea
}) => (
  <Header 
    align="center" 
    direction="row" 
    flex={false} 
    justify="between" 
    gap="medium" 
    gridArea={gridArea}
    background={{"color":"brand"}}
    >
      {appIcon}
      <Heading  size="small" textAlign="start">
          {appName}
      </Heading>
  </Header>
);


/*

    <Box
      tag="header"
      direction="row-responsive"
      background="brand"
      align="center"
      elevation="medium"
      justify="between"
      responsive={false}
      pad={{ vertical: "xsmall" }}
      style={{ position: "relative" }}
      gridArea={gridArea}
    >
      <Box
          flex={false}
          direction="row"
          align="center"
          margin={{ left: "small" }}
      >
      {appIcon}
      <Heading level="4" margin={{ left: "small", vertical: "none" }}>
          {appName}
      </Heading>
      </Box>

      <Box direction="row" align="center">
        <Box
          margin={{ left: "medium" }}
          round="xsmall"
          background={{ color: "white", opacity: "weak" }}
          direction="row"
          align="center"
          pad={{ horizontal: "small" }}
        >
        </Box>
      </Box>
    </Box>
    */