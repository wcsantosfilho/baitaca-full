import React from "react";

import { Box, Heading } from "grommet";

export const AppHeader = ({
  appName,
  appIcon,
  onToggleSidebar
}) => (
  <Box
    tag="header"
    direction="row"
    background="brand"
    align="center"
    elevation="medium"
    justify="between"
    responsive={false}
    pad={{ vertical: "xsmall" }}
    style={{ position: "relative" }}
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
);
