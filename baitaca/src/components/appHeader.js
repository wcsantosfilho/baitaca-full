import React from "react";
import { Anchor, Header, Heading, Nav } from "grommet";

export const AppHeader = ({appName, RouterContext}) => {
  const { push } = React.useContext(RouterContext)

  return (
    <Header align="center" direction="row" flex={false} justify="between" gap="medium" background={{"color":"active-text"}}>
      <Nav align="center" flex={false} direction="row">
        <Anchor label="sobre" onClick={() => push("/about")} />
        <Anchor label="pesquisa" onClick={() => push("/")} />
      </Nav>
      <Heading size="small" textAlign="start">
        {appName}
      </Heading>
    </Header>
  )
}
