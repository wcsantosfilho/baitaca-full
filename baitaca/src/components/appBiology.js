import React from "react";
import { Card, CardHeader, CardBody, Grid, Page, PageContent, PageHeader, Text } from "grommet";
import { AppHeader } from "./appHeader";

const DATA = [
    {letter: "C", word: "coleóptero"},
    {letter: "G", word: "gimnospermas"},
    {letter: "M", word: "monocotiledôneas"},
    {letter: "P", word: "platelmintos"},
    {letter: "S", word: "sassafrás"},
]

const Looper = () => {
    return (
        <>
            {DATA.map((item) => (
                <div key={item}>
                    <Card pad="small">
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                            <Text size="xsmall">
                                {item.letter}
                            </Text>
                        </CardHeader>
                        <CardBody pad="small">
                            <Text size="small" weight="bold" color="dark-2" textAlign="center">
                                {item.word}
                            </Text>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </>
    );
}

export const AppBiology = () => {
    return (
        <Page background={{"color":"background-back"}}>
            <PageContent>
                <AppHeader appName="Palavragem"/>
            </PageContent>
            <PageContent>
                <PageHeader title="Palavras curiosas da Biologia" />
                <Grid columns="small" pad="small">
                    <Looper />
                </Grid>
            </PageContent>
        </Page>
    )
}

