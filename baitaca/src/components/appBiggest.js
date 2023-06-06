import React from "react";
import { Card, CardHeader, CardBody, Grid, Page, PageContent, PageHeader, Text } from "grommet";
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
            <PageContent>
                <AppHeader appName="Palavragem"/>
            </PageContent>
            <PageContent>
                <PageHeader title="As mais longas palavras de cada letra" />
                <Grid columns="small" pad="small">
                    <Looper />
                </Grid>
                <AdsComponent dataAdSlot='7689151006' />
            </PageContent>
        </Page>
    )
}

