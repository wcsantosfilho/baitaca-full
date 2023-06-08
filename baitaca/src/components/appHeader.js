import React from 'react';
import { Anchor, Grid, Header, Heading, Nav, Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

export const AppHeader = ({appName}) => {
  return (
    <Grid 
    rows={["xsmall"]} 
    columns={["auto"]} >
      <Header align="center" direction="row" flex={false} justify="between" gap="large" 
        background={{"color":"active-background"}}>
        <Menu icon={<MenuIcon />} items={[
            {label: 'Pesquisar palavras', href: "/"},
            {label: 'Sobre o Palavragem', href: "/about"},
            {label: 'A magia das palavras cruzadas', href: "/crossWords"},
            {label: 'Maiores palavras de cada letra', href: "/biggestWordOfEachLetter"},
            {label: 'Palavras curiosas da biologia', href: "/curiousBiologyWords"},

            {label: 'Palavras mais comuns...', disabled: true},
            {label: '... com A', href: "/commomCrossWordsWithA"},
            {label: '... com B', href: "/commomCrossWordsWithB"},
            {label: '... com C', href: "/commomCrossWordsWithC"},
            {label: '... com D', href: "/commomCrossWordsWithD"},
            {label: '... com E', href: "/commomCrossWordsWithE"},
            {label: '... com F', href: "/commomCrossWordsWithF"},
            {label: '... com G', href: "/commomCrossWordsWithG"},
            {label: '... com H', href: "/commomCrossWordsWithH"},
            {label: '... com I', href: "/commomCrossWordsWithI"},
            {label: '... com J', href: "/commomCrossWordsWithJ"},
            {label: '... com K', href: "/commomCrossWordsWithK"},
            {label: '... com L', href: "/commomCrossWordsWithL"},
            {label: '... com M', href: "/commomCrossWordsWithM"},
            {label: '... com N', href: "/commomCrossWordsWithN"},
            {label: '... com O', href: "/commomCrossWordsWithO"},
            {label: '... com P', href: "/commomCrossWordsWithP"},
            {label: '... com Q', href: "/commomCrossWordsWithQ"},
            {label: '... com R', href: "/commomCrossWordsWithR"},
            {label: '... com S', href: "/commomCrossWordsWithS"},
            {label: '... com T', href: "/commomCrossWordsWithT"},
            {label: '... com U', href: "/commomCrossWordsWithU"},
            {label: '... com V', href: "/commomCrossWordsWithV"},
            {label: '... com W', href: "/commomCrossWordsWithW"},
            {label: '... com X', href: "/commomCrossWordsWithX"},
            {label: '... com Y', href: "/commomCrossWordsWithY"},
            {label: '... com Z', href: "/commomCrossWordsWithZ"},
          ]
        }
        />
        <Nav align="center" flex={false} direction="row">
          <Anchor label="" href="/about" />
          <Anchor label="" href="/" />
          <Anchor label="" href="/crossWords" />
          <Anchor label="" href="/biggestWordOfEachLetter" />
          <Anchor label="" href="/curiousBiologyWords" />
          <Anchor label="" href="/commomCrossWordsWithA" />
          <Anchor label="" href="/commomCrossWordsWithB" />
          <Anchor label="" href="/commomCrossWordsWithC" />
          <Anchor label="" href="/commomCrossWordsWithD" />
          <Anchor label="" href="/commomCrossWordsWithE" />
          <Anchor label="" href="/commomCrossWordsWithF" />
          <Anchor label="" href="/commomCrossWordsWithG" />
          <Anchor label="" href="/commomCrossWordsWithH" />
          <Anchor label="" href="/commomCrossWordsWithI" />
          <Anchor label="" href="/commomCrossWordsWithJ" />
          <Anchor label="" href="/commomCrossWordsWithK" />
          <Anchor label="" href="/commomCrossWordsWithL" />
          <Anchor label="" href="/commomCrossWordsWithM" />
          <Anchor label="" href="/commomCrossWordsWithN" />
          <Anchor label="" href="/commomCrossWordsWithO" />
          <Anchor label="" href="/commomCrossWordsWithP" />
          <Anchor label="" href="/commomCrossWordsWithQ" />
          <Anchor label="" href="/commomCrossWordsWithR" />
          <Anchor label="" href="/commomCrossWordsWithS" />
          <Anchor label="" href="/commomCrossWordsWithT" />
          <Anchor label="" href="/commomCrossWordsWithU" />
          <Anchor label="" href="/commomCrossWordsWithV" />
          <Anchor label="" href="/commomCrossWordsWithW" />
          <Anchor label="" href="/commomCrossWordsWithX" />
          <Anchor label="" href="/commomCrossWordsWithY" />
          <Anchor label="" href="/commomCrossWordsWithZ" />
        </Nav>
        <Heading size="small" textAlign="start">
          {appName}
        </Heading>
      </Header>
    </Grid>
  )
}


/*

*/