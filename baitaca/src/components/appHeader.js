import React from 'react';
import { Anchor, Grid, Header, Heading, Nav, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

export const AppHeader = ({appName}) => {

  return (
    <Grid 
    rows={["xsmall"]} 
    columns={["auto"]} >
      <Header align="center" direction="row" flex={false} justify="between" gap="medium" 
        background={{"color":"active-background"}}>
        <Menu icon={<MenuIcon />} items={[
          [
            {label: 'Pesquisa palavras', href: "/"},
          ],
          [
            {label: 'Sobre o Palavragem', href: "/about"},
            {label: 'A magia das palavras cruzadas', href: "/crossWords"},
            {label: 'Maiores palavras de cada letra', href: "/biggestWordOfEachLetter"},
            {label: 'Palavras curiosas da biologia', href: "/curiousBiologyWords"}
          ]
        ]} />
        <Nav align="center" flex={false} direction="row">
          <Anchor label="" href="/about" />
          <Anchor label="" href="/" />
          <Anchor label="" href="/crossWords" />
          <Anchor label="" href="/biggestWordOfEachLetter" />
          <Anchor label="" href="/curiousBiologyWords" />
        </Nav>
        <Heading size="small" textAlign="start">
          {appName}
        </Heading>
      </Header>
    </Grid>
  )
}
