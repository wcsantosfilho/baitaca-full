import React from 'react';
import { Anchor, Header, Heading, Nav } from 'grommet';

export const AppHeader = ({appName}) => {

  return (
    <Header align="center" direction="row" flex={false} justify="between" gap="medium" background={{"color":"active-text"}}>
      <Nav align="center" flex={false} direction="row">
        <Anchor label="sobre" href="/about" />
        <Anchor label="pesquisa" href="/" />
      </Nav>
      <Heading size="small" textAlign="start">
        {appName}
      </Heading>
    </Header>
  )
}
