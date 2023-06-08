import React from "react";
import { Helmet } from 'react-helmet';
import { Box, Card, CardHeader, CardBody, Grid, Image, Page, PageContent, PageHeader, Text, Paragraph } from "grommet";
import { AppHeader } from "./appHeader";
import AdsComponent from "../utilities/AdsComponent.js"

const DATA = [
    {letter: "A", word: "acetilparaetoxilfeniluretânico"},
    {letter: "B", word: "bromoclorossalicilanilida"},
    {letter: "C", word: "colpocisturetrocistostômico"},
    {letter: "D", word: "dimetilisopropilocarbinólico"},
    {letter: "E", word: "esofagojejunogastranastomose"},
    {letter: "F", word: "floroglucinotricarbônico"},
    {letter: "G", word: "gastroenteropancreático"},
    {letter: "H", word: "hexametilfenotetramínico"},
    {letter: "I", word: "inconstitucionalissimamente"},
    {letter: "J", word: "jazeelitajazeelitas"},
    {letter: "K", word: "kubitschekense"},
    {letter: "L", word: "laringotraqueobroncoscópico"},
    {letter: "M", word: "metilenodioximetanfetamina"},
    {letter: "N", word: "neuroanatomofisiológico"},
    {letter: "O", word: "oftalmotorrinolaringológico"},
    {letter: "P", word: "polimetacrílicocopoliacrilato"},
    {letter: "Q", word: "queilognatopalatósquise"},
    {letter: "R", word: "retropneumoperitoniográfico"},
    {letter: "S", word: "salpingossalpingostômico"},
    {letter: "T", word: "trifenilalquilidenofosforânico"},
    {letter: "U", word: "ultracentrifugabilidade"},
    {letter: "V", word: "vectoeletronistagmografia"},
    {letter: "W", word: "washingtoniano"},
    {letter: "X", word: "xantoeritrodermia"},
    {letter: "Y", word: "yofortierita"},
    {letter: "Z", word: "zigomatauricular"},
]

const Looper = () => {
    return (
        <>
            {DATA.map((item) => (
                <div key={item}>
                    <Card pad="small">
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                            <Text size="medium">
                                {item.letter}
                            </Text>
                        </CardHeader>
                        <CardBody pad="small">
                            <Text size="xxsmall" weight="bold" color="dark-2" textAlign="center">
                                {item.word}
                            </Text>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    );
}

export const AppBiggest = () => {
    return (
        <Page background={{"color":"background-back"}}>
            <Helmet> 
                <title>"As mais longas palavras de cada letra | Palavragem"</title>
                <link rel="canonical" href="https://palavragem.com.br/biggestWordOfEachLetter" />
            </Helmet>
            <PageContent>
                <AppHeader appName="Palavragem"/>
            </PageContent>
            <PageContent>
                <PageHeader title="As mais longas palavras de cada letra" />
                <Box pad="small" gap="small" direction="row" align="start">
                    <Box
                        width="large"
                        height={{ max: '300px' }}
                        round="small"
                        align="center"
                        justify="center"
                        overflow="auto"
                    >
                        <Image fallback="//palavragem.com.br/extremos.png"
                                src="//palavragem.com.br/extremos.png"
                                alt="extremos"
                                fill fit="cover"
                        />
                        <Text size="xxsmall" align="left">
                        </Text>
                    </Box>
                    <Box
                        width="large"
                        height={{ max: '300px' }}
                        round="small"
                        align="center"
                        justify="center"
                        overflow="auto"
                    >
                        <Paragraph fill color="text-weak">
                            Os extremos sempre nos chamam a atenção, não é mesmo? Pensando nessa constante admiração
                            resolvemos buscar com auxílio do ChatGPT as maiores palavras com cada inicial da língua 
                            portuguesa. A lista não é consenso e certamente causa controvérsia. Não pretendemos ser definitivos
                            nessa lista, apenas entreter e satisfazer alguma curiosidade.
                            Vocês vão notar que muitas das palavras aqui são referências a termos médicos e da área
                            química farmacêutica e tem o tamanho que tem pela junção de radicais, prefixos e sufixos.
                            Então, poderíamos dizer que não são palavras "puras"? Fica a questão no ar...
                        </Paragraph>
                    </Box>
                </Box>
                <Grid columns="small" pad="small">
                    <Looper />
                </Grid>
                <AdsComponent dataAdSlot='7689151006' />
            </PageContent>
        </Page>
    )
}

