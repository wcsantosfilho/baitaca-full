import React from "react";
import { Card, CardHeader, CardBody, Grid, Image, Page, PageContent, PageHeader, Text } from "grommet";
import { AppHeader } from "./appHeader";

export const AppAbout = ({RouterContext}) => {
    const { push } = React.useContext(RouterContext)
 
    return (
        <Page background={{"color":"background-back"}}>
            <PageContent>
                <AppHeader appName="Palavragem"/>
            </PageContent>
            <PageContent>
            <PageHeader title="O que somos?" subtitle="O que é e para que serve o Palavragem?" />
                <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                <Grid columns="small" pad="small">
                <Card pad="medium" hoverIndicator>
                    <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                    <Text size="xsmall">
                        Radical
                    </Text>
                    </CardHeader>
                    <CardBody pad="small">
                    <Text size="large" weight="bold" color="dark-2" textAlign="center">
                        Palavra
                    </Text>
                    </CardBody>
                </Card>
                <Card pad="medium">
                    <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small" />
                    <CardBody pad="small">
                    <Text size="large" weight="bold" color="dark-2" textAlign="center">
                        +
                    </Text>
                    </CardBody>
                </Card>
                <Card pad="medium" hoverIndicator>
                    <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                    <Text size="xsmall">
                        Sufixo
                    </Text>
                    </CardHeader>
                    <CardBody pad="small">
                    <Text size="large" weight="bold" color="dark-2" textAlign="center">
                        -agem
                    </Text>
                    </CardBody>
                </Card>
                </Grid>
                <Card margin={{"vertical":"medium"}}>
                <CardBody pad="small">
                    <Text>
                    Palavragem é um conjunto, um ajuntamento de palavras.  Usadas para qual quer fim ou propósito. Informar, entreter, curiosar. Não há limites para a língua, nem para a linguagem. Está em dúvida na palavra-cruzada? Quer navegar pelos conjuntos de palavras que tem alguma coisa em comum?
                    </Text>
                    <Text>
                    Então venha para cá e busque o que quer e o que precisa!
                    </Text>
                </CardBody>
                </Card>
            </PageContent>
        </Page>
    )
}