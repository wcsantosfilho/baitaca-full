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
            {label: 'Sobre o Palavragem', href: "/sobre"},
            {label: 'A magia das palavras cruzadas', href: "/palavras-cruzadas"},
            {label: 'Maiores palavras de cada letra', href: "/maior-palavra-de-cada-letra"},
            {label: 'Palavras curiosas da biologia', href: "/palavras-curiosas-da-biologia"},

            {label: 'Palavras mais comuns...', disabled: true},
            {label: '... com A', href: "/palavras-que-comecam-com-a"},
            {label: '... com B', href: "/palavras-que-comecam-com-b"},
            {label: '... com C', href: "/palavras-que-comecam-com-c"},
            {label: '... com D', href: "/palavras-que-comecam-com-d"},
            {label: '... com E', href: "/palavras-que-comecam-com-e"},
            {label: '... com F', href: "/palavras-que-comecam-com-f"},
            {label: '... com G', href: "/palavras-que-comecam-com-g"},
            {label: '... com H', href: "/palavras-que-comecam-com-h"},
            {label: '... com I', href: "/palavras-que-comecam-com-i"},
            {label: '... com J', href: "/palavras-que-comecam-com-j"},
            {label: '... com K', href: "/palavras-que-comecam-com-k"},
            {label: '... com L', href: "/palavras-que-comecam-com-l"},
            {label: '... com M', href: "/palavras-que-comecam-com-m"},
            {label: '... com N', href: "/palavras-que-comecam-com-n"},
            {label: '... com O', href: "/palavras-que-comecam-com-o"},
            {label: '... com P', href: "/palavras-que-comecam-com-p"},
            {label: '... com Q', href: "/palavras-que-comecam-com-q"},
            {label: '... com R', href: "/palavras-que-comecam-com-r"},
            {label: '... com S', href: "/palavras-que-comecam-com-s"},
            {label: '... com T', href: "/palavras-que-comecam-com-t"},
            {label: '... com U', href: "/palavras-que-comecam-com-u"},
            {label: '... com V', href: "/palavras-que-comecam-com-v"},
            {label: '... com W', href: "/palavras-que-comecam-com-w"},
            {label: '... com X', href: "/palavras-que-comecam-com-x"},
            {label: '... com Y', href: "/palavras-que-comecam-com-y"},
            {label: '... com Z', href: "/palavras-que-comecam-com-z"},
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